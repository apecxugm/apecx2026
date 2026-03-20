export function validateEmail(email: string): boolean {
  const re = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}

export function validatePhone(phone: string): boolean {
  const re = /^[0-9]{10,13}$/;
  return re.test(phone);
}

export interface FormData {
  team_name: string;
  institution: string;
  competition: string;
  captain_name: string;
  captain_email: string;
  captain_phone: string;
  member1_name: string;
  member1_email: string;
  member1_phone: string;
  member2_name: string;
  member2_email: string;
  member2_phone: string;
  member3_name: string;
  member3_email: string;
  member3_phone: string;
  member4_name: string;
  member4_email: string;
  member4_phone: string;
}

export function validateRegistrationForm(
  formData: FormData,
  requiredMembers: number,
): string | null {
  // Validate team info
  if (!formData.team_name.trim()) {
    return "Team name is required";
  }

  if (!formData.institution.trim()) {
    return "Institution is required";
  }

  if (!formData.competition) {
    return "Competition is required";
  }

  // Validate captain
  if (!formData.captain_name.trim()) {
    return "Captain name is required";
  }

  if (!validateEmail(formData.captain_email)) {
    return "Captain email is invalid";
  }

  if (!validatePhone(formData.captain_phone)) {
    return "Captain phone number is invalid (numbers only, 10-13 digits)";
  }

  // Validate members
  for (let i = 1; i < requiredMembers; i++) {
    const nameKey = `member${i}_name` as keyof FormData;
    const emailKey = `member${i}_email` as keyof FormData;
    const phoneKey = `member${i}_phone` as keyof FormData;

    const name = formData[nameKey];
    const email = formData[emailKey];
    const phone = formData[phoneKey];

    if (!name?.toString().trim()) {
      return `Member ${i} name is required`;
    }

    if (!validateEmail(email?.toString() || "")) {
      return `Member ${i} email is invalid`;
    }

    if (!validatePhone(phone?.toString() || "")) {
      return `Member ${i} phone number is invalid (numbers only, 10-13 digits)`;
    }
  }

  // Validate that extra members are not filled if not required
  if (requiredMembers === 3) {
    if (formData.member3_name.trim() || formData.member4_name.trim()) {
      return `Competition ${formData.competition} only allows 3 members (1 captain + 2 members)`;
    }
  }

  return null;
}
