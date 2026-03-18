package main

import (
	"fmt"
	"regexp"
	"strings"
)

type RegistrationInput struct {
	TeamName    string
	Institution string
	Competition string

	CaptainName  string
	CaptainEmail string
	CaptainPhone string

	Member1Name  string
	Member1Email string
	Member1Phone string

	Member2Name  string
	Member2Email string
	Member2Phone string

	// POD
	Member3Name  string
	Member3Email string
	Member3Phone string

	Member4Name  string
	Member4Email string
	Member4Phone string
}

var validCompetitions = map[string]bool{
	"SCML":       true,
	"POD":        true,
	"BCC":        true,
	"Petrosmart": true,
	"PPC":        true,
}

func validateInput(input RegistrationInput) error {
	// validasi team
	if strings.TrimSpace(input.TeamName) == "" {
		return fmt.Errorf("nama tim wajib diisi")
	}
	if strings.TrimSpace(input.Institution) == "" {
		return fmt.Errorf("institusi wajib diisi")
	}
	if !validCompetitions[input.Competition] {
		return fmt.Errorf("kompetisi tidak valid")
	}

	// validasi captain
	if err := validateMember("Captain", input.CaptainName, input.CaptainEmail, input.CaptainPhone); err != nil {
		return err
	}

	// validasi member 1 & 2 (semua lomba)
	if err := validateMember("Member 1", input.Member1Name, input.Member1Email, input.Member1Phone); err != nil {
		return err
	}
	if err := validateMember("Member 2", input.Member2Name, input.Member2Email, input.Member2Phone); err != nil {
		return err
	}

	// validasi jumlah member
	if input.Competition == "POD" {
		if err := validateMember("Member 3", input.Member3Name, input.Member3Email, input.Member3Phone); err != nil {
			return err
		}
	} else {
		// Non-POD tidak boleh ada member 3 & 4
		if strings.TrimSpace(input.Member3Name) != "" {
			return fmt.Errorf("kompetisi %s hanya boleh 3 anggota (captain + 2 member)", input.Competition)
		}
		if strings.TrimSpace(input.Member4Name) != "" {
			return fmt.Errorf("kompetisi %s hanya boleh 3 anggota (captain + 2 member)", input.Competition)
		}
	}

	return nil
}

func validateMember(role, name, email, phone string) error {
	if strings.TrimSpace(name) == "" {
		return fmt.Errorf("nama %s wajib diisi", role)
	}
	if !isValidEmail(email) {
		return fmt.Errorf("email %s tidak valid", role)
	}
	if !isValidPhone(phone) {
		return fmt.Errorf("nomor HP %s tidak valid (hanya angka, 10-13 digit)", role)
	}
	return nil
}

func isValidEmail(email string) bool {
	re := regexp.MustCompile(`^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$`)
	return re.MatchString(email)
}

func isValidPhone(phone string) bool {
	re := regexp.MustCompile(`^[0-9]{10,13}$`)
	return re.MatchString(phone)
}
