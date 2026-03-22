package main

import (
	"fmt"
	"regexp"
	"strings"
)

type competitionRule struct {
	MinMembers int
	MaxMembers int
}

type memberInput struct {
	Role  string
	Name  string
	Email string
	Phone string
}

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

var competitionRules = map[string]competitionRule{
	"SCML":       {MinMembers: 1, MaxMembers: 2},
	"POD":        {MinMembers: 2, MaxMembers: 4},
	"BCC":        {MinMembers: 0, MaxMembers: 2},
	"Petrosmart": {MinMembers: 2, MaxMembers: 2},
	"PPC":        {MinMembers: 1, MaxMembers: 2},
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

	rule, ok := competitionRules[input.Competition]
	if !ok {
		return fmt.Errorf("aturan jumlah member untuk kompetisi %s tidak ditemukan", input.Competition)
	}

	members := []memberInput{
		{Role: "Member 1", Name: input.Member1Name, Email: input.Member1Email, Phone: input.Member1Phone},
		{Role: "Member 2", Name: input.Member2Name, Email: input.Member2Email, Phone: input.Member2Phone},
		{Role: "Member 3", Name: input.Member3Name, Email: input.Member3Email, Phone: input.Member3Phone},
		{Role: "Member 4", Name: input.Member4Name, Email: input.Member4Email, Phone: input.Member4Phone},
	}

	providedMembers := 0
	for _, member := range members {
		if !isMemberProvided(member.Name, member.Email, member.Phone) {
			continue
		}

		if err := validateMember(member.Role, member.Name, member.Email, member.Phone); err != nil {
			return err
		}

		providedMembers++
	}

	if providedMembers < rule.MinMembers {
		return fmt.Errorf("kompetisi %s butuh minimal %d member (di luar captain)", input.Competition, rule.MinMembers)
	}

	if providedMembers > rule.MaxMembers {
		return fmt.Errorf("kompetisi %s maksimal %d member (di luar captain)", input.Competition, rule.MaxMembers)
	}

	return nil
}

func isMemberProvided(name, email, phone string) bool {
	_ = email
	_ = phone
	return strings.TrimSpace(name) != ""
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