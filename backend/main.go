package main

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"strings"
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

const maxVoucherUses = 15

var validVouchers = map[string]bool{
	"APECX2026ROADSHOWUGM":                 true,
	"APECX2026ROADSHOWUPNVYK":              true,
	"APECX2026ROADSHOWUII":                 true,
	"APECX2026ROADSHOWUNY":                 true,
	"APECX2026ROADSHOWUINSUKA":             true,
	"APECX2026ROADSHOWITNY":                true,
	"APECX2026ROADSHOWAKPRIND":             true,
	"APECX2026ROADSHOWUTY":                 true,
	"APECX2026ROADSHOWUAD":                 true,
	"APECX2026ROADSHOWSTIEYKPN":            true,
	"APECX2026ROADSHOWSADHAR":              true,
	"APECX2026ROADSHOWUMY":                 true,
	"APECX2026ROADSHOWATMAJAYA":            true,
	"APECX2026ROADSHOWITB":                 true,
	"APECX2026ROADSHOWUNPAD":               true,
	"APECX2026ROADSHOWUI":                  true,
	"APECX2026ROADSHOWITERA":               true,
	"APECX2026ROADSHOWUPI":                 true,
	"APECX2026ROADSHOWUNPER":               true,
	"APECX2026ROADSHOWTRISAKTI":            true,
	"APECX2026ROADSHOWUPNVJAKARTA":         true,
	"APECX2026ROADSHOWPRESIDENTUNIVERSITY": true,
	"APECX2026ROADSHOWTELKOMUNIVERSITY":    true,
	"APECX2026ROADSHOWBINUS":               true,
	"APECX2026ROADSHOWUNSIKA":              true,
	"APECX2026ROADSHOWUNJANI":              true,
	"APECX2026ROADSHOWUNISBA":              true,
	"APECX2026ROADSHOWPASUNDAN":            true,
	"APECX2026ROADSHOWUB":                  true,
	"APECX2026ROADSHOWUNESA":               true,
	"APECX2026ROADSHOWUPNVJT":              true,
	"APECX2026ROADSHOWUNNES":               true,
	"APECX2026ROADSHOWITS":                 true,
	"APECX2026ROADSHOWUNDIP":               true,
	"APECX2026ROADSHOWUNAIR":               true,
	"APECX2026ROADSHOWUNSOED":              true,
	"APECX2026ROADSHOWUNS":                 true,
	"APECX2026ROADSHOWUNEJ":                true,
	"APECX2026ROADSHOWAKAMIGAS":            true,
	"APECX2026ROADSHOWSPEJAVA":             true,
	"KODEBUATTESTDOANG":                     true,
}

func main() {
	godotenv.Load()

	spreadsheetID = os.Getenv("SPREADSHEET_ID")

	// setup sheets
	var err error
	sheetsService, err = setupSheetsService()
	if err != nil {
		panic("Gagal konek ke Google Sheets: " + err.Error())
	}

	// setup storage
	err = setupStorage()
	if err != nil {
		panic("Gagal konek ke bucket storage Railway: " + err.Error())
	}

	r := gin.Default()

	rate := limiter.Rate{
		Period: 1 * time.Minute,
		Limit:  20,
	}

	store := memory.NewStore()
	rateLimiter := limiter.New(store, rate)
	r.Use(limitergin.NewMiddleware(rateLimiter))

	r.MaxMultipartMemory = 1 << 20

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
	r.POST("/voucher/validate", handleVoucherValidate)

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
		VoucherCode: c.PostForm("voucher_code"),
	}

	if err := validateInput(input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// validasi file
	fileRules := map[string]string{
		"payment_proof":  "image",
		"student_id":     "pdf",
		"follow_proof":   "pdf",
		"twibbon_proof":  "pdf",
		"story_proof":    "pdf",
		"whatsapp_proof": "pdf",
	}

	for fieldName, rule := range fileRules {
		_, header, err := c.Request.FormFile(fieldName)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "File " + fieldName + " wajib diupload"})
			return
		}
		if err := validateFile(header, rule); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
	}

	paymentURL, err := uploadFile(c, "payment_proof")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Gagal upload bukti pembayaran: " + err.Error()})
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

	// Validate voucher if provided (case-sensitive)
	voucherCode := strings.TrimSpace(input.VoucherCode)
	if voucherCode != "" {
		if !validVouchers[voucherCode] {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Kode voucher tidak valid"})
			return
		}
		usageCount, err := getVoucherUsageCount(voucherCode)
		if err != nil {
			fmt.Println("ERROR cek voucher:", err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal memvalidasi voucher: " + err.Error()})
			return
		}
		if usageCount >= maxVoucherUses {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Voucher sudah mencapai batas penggunaan maksimal"})
			return
		}
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
		voucherCode,
	}

	sheetName := getSheetName(input.Competition)

	if err := appendToSheet(sheetName, row); err != nil {
		fmt.Println("ERROR Google Sheets:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menyimpan data: " + err.Error()})
		return
	}

	// Track voucher usage after successful registration
	if voucherCode != "" {
		if err := trackVoucherUsage(voucherCode, input.TeamName); err != nil {
			fmt.Println("WARNING: Gagal tracking voucher:", err)
			// Don't fail the registration, just log the warning
		}
	}

	c.JSON(http.StatusOK, gin.H{"message": "Registrasi berhasil!"})
}

func appendToSheet(sheetName string, row []interface{}) error {
	resp, err := sheetsService.Spreadsheets.Values.
		Get(spreadsheetID, sheetName+"!B2:B").
		Do()
	if err != nil {
		return fmt.Errorf("gagal baca sheet: %w", err)
	}

	nextRow := len(resp.Values) + 2
	writeRange := fmt.Sprintf("%s!B%d", sheetName, nextRow)
	valueRange := &sheets.ValueRange{
		Values: [][]interface{}{row},
	}

	_, err = sheetsService.Spreadsheets.Values.
		Update(spreadsheetID, writeRange, valueRange).
		ValueInputOption("RAW").
		Do()

	if err != nil {
		return fmt.Errorf("gagal tulis sheet: %w", err)
	}

	formulaRange := fmt.Sprintf("%s!A%d", sheetName, nextRow)
	formulaValue := &sheets.ValueRange{
		Values: [][]interface{}{
			{fmt.Sprintf("=IF(B%d<>\"\",ROW()-1,\"\")", nextRow)},
		},
	}

	_, err = sheetsService.Spreadsheets.Values.
		Update(spreadsheetID, formulaRange, formulaValue).
		ValueInputOption("USER_ENTERED").
		Do()

	if err != nil {
		return fmt.Errorf("gagal tulis formula kolom A: %w", err)
	}

	fmt.Printf("Data berhasil ditulis ke %s baris %d\n", sheetName, nextRow)
	return nil
}

// upload file ke minio, return public URL
func uploadFile(c *gin.Context, fieldName string) (string, error) {
	file, header, err := c.Request.FormFile(fieldName)
	if err != nil {
		return "", err
	}
	defer file.Close()

	contentType := header.Header.Get("Content-Type")
	if contentType == "" {
		contentType = "application/octet-stream"
	}

	fileName := fmt.Sprintf("%d_%s", time.Now().UnixNano(), header.Filename)

	url, err := uploadFileToStorage(file, fileName, contentType, header.Size)
	if err != nil {
		return "", err
	}

	return url, nil
}

func setupSheetsService() (*sheets.Service, error) {
	ctx := context.Background()

	credsJSON := os.Getenv("GOOGLE_CREDENTIALS")
	if credsJSON != "" {
		return sheets.NewService(ctx,
			option.WithCredentialsJSON([]byte(credsJSON)),
		)
	}

	// fallback
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

// --- Voucher helpers ---

func getVoucherUsageCount(code string) (int, error) {
	resp, err := sheetsService.Spreadsheets.Values.
		Get(spreadsheetID, "Vouchers!C:C").
		Do()
	if err != nil {
		return 0, fmt.Errorf("gagal baca sheet Vouchers: %w", err)
	}

	count := 0
	for _, row := range resp.Values {
		if len(row) > 0 {
			if fmt.Sprintf("%v", row[0]) == code {
				count++
			}
		}
	}
	return count, nil
}

func trackVoucherUsage(code string, teamName string) error {
	timestamp := time.Now().Format("02-01-2006 15:04:05")
	row := []interface{}{timestamp, code, teamName}

	// Find the next available row
	resp, err := sheetsService.Spreadsheets.Values.
		Get(spreadsheetID, "Vouchers!B2:B").
		Do()
	if err != nil {
		return fmt.Errorf("gagal baca sheet Vouchers: %w", err)
	}

	nextRow := len(resp.Values) + 2
	writeRange := fmt.Sprintf("Vouchers!B%d", nextRow)
	valueRange := &sheets.ValueRange{
		Values: [][]interface{}{row},
	}

	_, err = sheetsService.Spreadsheets.Values.
		Update(spreadsheetID, writeRange, valueRange).
		ValueInputOption("RAW").
		Do()

	if err != nil {
		return fmt.Errorf("gagal tulis ke sheet Vouchers: %w", err)
	}

	// Write auto-number formula in column A
	formulaRange := fmt.Sprintf("Vouchers!A%d", nextRow)
	formulaValue := &sheets.ValueRange{
		Values: [][]interface{}{
			{fmt.Sprintf(`=IF(B%d<>"",ROW()-1,"")`, nextRow)},
		},
	}

	_, err = sheetsService.Spreadsheets.Values.
		Update(spreadsheetID, formulaRange, formulaValue).
		ValueInputOption("USER_ENTERED").
		Do()

	if err != nil {
		return fmt.Errorf("gagal tulis formula kolom A Vouchers: %w", err)
	}

	fmt.Printf("Voucher %s digunakan oleh tim %s\n", code, teamName)
	return nil
}

type voucherValidateRequest struct {
	Code string `json:"code"`
}

func handleVoucherValidate(c *gin.Context) {
	var req voucherValidateRequest
	if err := json.NewDecoder(c.Request.Body).Decode(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"valid": false, "error": "Request body tidak valid"})
		return
	}

	code := strings.TrimSpace(req.Code)
	if code == "" {
		c.JSON(http.StatusBadRequest, gin.H{"valid": false, "error": "Kode voucher wajib diisi"})
		return
	}

	if !validVouchers[code] {
		c.JSON(http.StatusOK, gin.H{"valid": false, "error": "Kode voucher tidak ditemukan"})
		return
	}

	usageCount, err := getVoucherUsageCount(code)
	if err != nil {
		fmt.Println("ERROR cek voucher:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"valid": false, "error": "Gagal memvalidasi voucher"})
		return
	}

	if usageCount >= maxVoucherUses {
		c.JSON(http.StatusOK, gin.H{"valid": false, "error": "Voucher sudah mencapai batas penggunaan maksimal"})
		return
	}

	remaining := maxVoucherUses - usageCount
	c.JSON(http.StatusOK, gin.H{"valid": true, "remaining": remaining})
}
