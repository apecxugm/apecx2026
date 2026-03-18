package main

import (
	"context"
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/ulule/limiter/v3"
	limitergin "github.com/ulule/limiter/v3/drivers/middleware/gin"
	"github.com/ulule/limiter/v3/drivers/store/memory"
	"google.golang.org/api/option"
	"google.golang.org/api/sheets/v4"
)

var (
	sheetsService *sheets.Service
	spreadsheetID string
)

func main() {
	godotenv.Load()

	spreadsheetID = os.Getenv("SPREADSHEET_ID")

	// setup sheets
	var err error
	sheetsService, err = setupSheetsService()
	if err != nil {
		panic("Gagal konek ke Google Sheets: " + err.Error())
	}

	// setup minio
	err = setupMinIO()
	if err != nil {
		panic("Gagal konek ke MinIO: " + err.Error())
	}

	r := gin.Default()

	rate := limiter.Rate{
		Period: 1 * time.Minute,
		Limit:  5,
	}

	store := memory.NewStore()
	rateLimiter := limiter.New(store, rate)
	r.Use(limitergin.NewMiddleware(rateLimiter))

	r.MaxMultipartMemory = 20 << 20

	// CORS
	r.Use(func(c *gin.Context) {
		// ubah * pas udah deploy ke domain
		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
		c.Header("Access-Control-Allow-Headers", "Content-Type")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	})

	r.POST("/register", handleRegister)

	fmt.Println("Server jalan di http://localhost:8080")
	r.Run(":8080")
}

func handleRegister(c *gin.Context) {
	input := RegistrationInput{
		TeamName:     c.PostForm("team_name"),
		Institution:  c.PostForm("institution"),
		Competition:  c.PostForm("competition"),
		CaptainName:  c.PostForm("captain_name"),
		CaptainEmail: c.PostForm("captain_email"),
		CaptainPhone: c.PostForm("captain_phone"),
		Member1Name:  c.PostForm("member1_name"),
		Member1Email: c.PostForm("member1_email"),
		Member1Phone: c.PostForm("member1_phone"),
		Member2Name:  c.PostForm("member2_name"),
		Member2Email: c.PostForm("member2_email"),
		Member2Phone: c.PostForm("member2_phone"),
		Member3Name:  c.PostForm("member3_name"),
		Member3Email: c.PostForm("member3_email"),
		Member3Phone: c.PostForm("member3_phone"),
		Member4Name:  c.PostForm("member4_name"),
		Member4Email: c.PostForm("member4_email"),
		Member4Phone: c.PostForm("member4_phone"),
	}

	if err := validateInput(input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// validasi file
	files := map[string]bool{
		"payment_proof":  false,
		"student_id":     true,
		"follow_proof":   true,
		"twibbon_proof":  true,
		"story_proof":    true,
		"whatsapp_proof": true,
	}

	for fieldName, pdfOnly := range files {
		_, header, err := c.Request.FormFile(fieldName)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "File " + fieldName + " wajib diupload"})
			return
		}
		if err := validateFile(header, pdfOnly); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
	}

	paymentURL, err := uploadFile(c, "payment_proof")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Gagal upload bukti pembayaran"})
		return
	}

	studentIDURL, err := uploadFile(c, "student_id")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Gagal upload KTM"})
		return
	}

	followProofURL, err := uploadFile(c, "follow_proof")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Gagal upload bukti follow"})
		return
	}

	twibbonURL, err := uploadFile(c, "twibbon_proof")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Gagal upload bukti twibbon"})
		return
	}

	storyURL, err := uploadFile(c, "story_proof")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Gagal upload bukti story"})
		return
	}

	whatsappURL, err := uploadFile(c, "whatsapp_proof")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Gagal upload bukti WA"})
		return
	}

	// input ke sheets
	timestamp := time.Now().Format("02-01-2006 15:04:05")
	row := []interface{}{
		timestamp,
		input.TeamName, input.Institution,
		input.CaptainName, input.CaptainEmail, input.CaptainPhone,
		input.Member1Name, input.Member1Email, input.Member1Phone,
		input.Member2Name, input.Member2Email, input.Member2Phone,
		input.Member3Name, input.Member3Email, input.Member3Phone,
		input.Member4Name, input.Member4Email, input.Member4Phone,
		paymentURL, studentIDURL, followProofURL, twibbonURL, storyURL, whatsappURL,
	}

	valueRange := &sheets.ValueRange{
		Values: [][]interface{}{row},
	}

	sheetName := getSheetName(input.Competition)

	_, err = sheetsService.Spreadsheets.Values.
		Append(spreadsheetID, sheetName+"!B2", valueRange).
		ValueInputOption("RAW").
		Do()

	if err != nil {
		fmt.Println("ERROR Google Sheets:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menyimpan data"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Registrasi berhasil!"})
}

// upload file ke minio, return public URL
func uploadFile(c *gin.Context, fieldName string) (string, error) {
	file, header, err := c.Request.FormFile(fieldName)
	if err != nil {
		fmt.Println("ERROR FormFile:", fieldName, err)
		return "", err
	}
	defer file.Close()

	contentType := header.Header.Get("Content-Type")
	if contentType == "" {
		contentType = "application/octet-stream"
	}

	fileName := fmt.Sprintf("%d_%s", time.Now().UnixNano(), header.Filename)

	url, err := uploadFileToStorage(file, fileName, contentType)
	if err != nil {
		fmt.Println("ERROR upload:", fileName, err)
		return "", err
	}

	return url, nil
}

func setupSheetsService() (*sheets.Service, error) {
	ctx := context.Background()
	return sheets.NewService(ctx,
		option.WithCredentialsFile("credentials/service-account.json"),
	)
}

func getSheetName(competition string) string {
	switch competition {
	case "SCML":
		return "SCML"
	case "POD":
		return "POD"
	case "BCC":
		return "BCC"
	case "Petrosmart":
		return "Petrosmart"
	case "PPC":
		return "PPC"
	default:
		return "Sheet1"
	}
}
