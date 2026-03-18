package main

import (
	"context"
	"fmt"
	"mime/multipart"
	"os"
	"path/filepath"
	"strings"

	"github.com/minio/minio-go/v7"
	"github.com/minio/minio-go/v7/pkg/credentials"
)

var minioClient *minio.Client

func setupMinIO() error {
	endpoint := os.Getenv("MINIO_ENDPOINT")
	accessKey := os.Getenv("MINIO_ACCESS_KEY")
	secretKey := os.Getenv("MINIO_SECRET_KEY")
	useSSL := false

	var err error
	minioClient, err = minio.New(endpoint, &minio.Options{
		Creds:  credentials.NewStaticV4(accessKey, secretKey, ""),
		Secure: useSSL,
	})
	if err != nil {
		return err
	}

	policy := `{"Version":"2012-10-17","Statement":[{"Effect":"Allow","Principal":{"AWS":["*"]},"Action":["s3:GetObject"],"Resource":["arn:aws:s3:::apecx-document/*"]}]}`

	err = minioClient.SetBucketPolicy(context.Background(), "apecx-document", policy)
	if err != nil {
		fmt.Println("Warning: gagal set bucket policy:", err)
	}

	return nil
}

func uploadFileToStorage(file multipart.File, fileName string, contentType string) (string, error) {
	ctx := context.Background()
	bucketName := "apecx-document"

	_, err := minioClient.PutObject(ctx, bucketName, fileName, file, -1,
		minio.PutObjectOptions{
			ContentType: contentType,
		},
	)
	if err != nil {
		return "", err
	}

	// return public URL
	endpoint := os.Getenv("MINIO_ENDPOINT")
	publicURL := fmt.Sprintf("http://%s/%s/%s", endpoint, bucketName, fileName)
	return publicURL, nil
}

var allowedTypes = map[string]bool{
	"image/png":       true,
	"application/pdf": true,
}

var allowedExtensions = map[string]bool{
	".jpg": true,
	".png": true,
	".pdf": true,
}

func validateFile(header *multipart.FileHeader, onlyPDF bool) error {
	// cek ukuran file
	if header.Size > 5*1024*1024 {
		return fmt.Errorf("ukuran file %s terlalu besar (max 5MB)", header.Filename)
	}

	// cek ekstensi
	ext := strings.ToLower(filepath.Ext(header.Filename))
	if onlyPDF {
		if ext != ".pdf" {
			return fmt.Errorf("file %s harus berformat PDF", header.Filename)
		}
	} else {
		if !allowedExtensions[ext] {
			return fmt.Errorf("format file %s tidak didukung (PDF/JPG/PNG)", header.Filename)
		}
	}

	return nil
}
