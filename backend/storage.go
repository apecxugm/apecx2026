package main

import (
	"context"
	"fmt"
	"mime/multipart"
	"os"
	"path/filepath"
	"strings"
	"time"

	"github.com/minio/minio-go/v7"
	"github.com/minio/minio-go/v7/pkg/credentials"
)

var storageClient *minio.Client

func setupStorage() error {
	endpoint := os.Getenv("RAILWAY_ENDPOINT")
	accessKey := os.Getenv("RAILWAY_ACCESS_KEY")
	secretKey := os.Getenv("RAILWAY_SECRET_KEY")
	region := os.Getenv("RAILWAY_BUCKET_REGION")

	var err error
	storageClient, err = minio.New(endpoint, &minio.Options{
		Creds:  credentials.NewStaticV4(accessKey, secretKey, ""),
		Secure: true,
		Region: region,
	})
	return err
}

// fileSize harus diisi dari header.Size — jangan pakai -1
// agar MinIO bisa stream langsung tanpa buffer ke memory
func uploadFileToStorage(file multipart.File, fileName string, contentType string, fileSize int64) (string, error) {
	ctx := context.Background()
	bucketName := os.Getenv("RAILWAY_BUCKET_NAME")

	_, err := storageClient.PutObject(ctx, bucketName, fileName, file, fileSize,
		minio.PutObjectOptions{
			ContentType:  contentType,
			UserMetadata: map[string]string{"x-amz-acl": "public-read"},
		},
	)
	if err != nil {
		return "", fmt.Errorf("gagal upload ke storage: %w", err)
	}

	presignedURL, err := storageClient.PresignedGetObject(
		ctx,
		bucketName,
		fileName,
		7*24*time.Hour,
		nil,
	)
	if err != nil {
		return "", fmt.Errorf("gagal generate presigned URL: %w", err)
	}

	return presignedURL.String(), nil
}

var allowedImageExtensions = map[string]bool{
	".jpg":  true,
	".jpeg": true,
	".png":  true,
}

func validateFile(header *multipart.FileHeader, rule string) error {
	if header.Size > 5*1024*1024 {
		return fmt.Errorf("ukuran file %s terlalu besar (max 5MB)", header.Filename)
	}

	ext := strings.ToLower(filepath.Ext(header.Filename))

	switch rule {
	case "pdf":
		if ext != ".pdf" {
			return fmt.Errorf("file %s harus berformat PDF", header.Filename)
		}
	case "image":
		if !allowedImageExtensions[ext] {
			return fmt.Errorf("format file %s tidak didukung (JPG/JPEG/PNG)", header.Filename)
		}
	default:
		return fmt.Errorf("aturan validasi file tidak valid")
	}

	return nil
}