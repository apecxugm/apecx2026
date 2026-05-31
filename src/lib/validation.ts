export function validateEmail(email: string): boolean {
  const re = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}

export function validatePhone(phone: string): boolean {
  // Remove all non-digit characters (spaces, dashes, plus signs, etc.)
  const cleanedPhone = phone.replace(/\D/g, "");
  // Accept 10-13 digits (covers various Indonesian phone formats)
  const re = /^[0-9]{10,13}$/;
  return re.test(cleanedPhone);
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

export function validateRegistrationForm(formData: FormData): string | null {
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
    return "Captain phone number is invalid (accept formats like: 08123456789, 0812-3456-789, +62-812-345-6789)";
  }

  const memberRules: Record<
    string,
    { required: number[]; optional: number[] }
  > = {
    SCML: { required: [], optional: [1, 2] },
    PPC: { required: [1], optional: [2] },
    Petrosmart: { required: [1, 2], optional: [] },
    BCC: { required: [], optional: [1, 2] },
    POD: { required: [1, 2, 3], optional: [4] },
  };

  const rule = memberRules[formData.competition] ?? {
    required: [],
    optional: [],
  };

  for (const i of rule.required) {
    const name =
      formData[`member${i}_name` as keyof FormData]?.toString().trim() || "";
    const email =
      formData[`member${i}_email` as keyof FormData]?.toString().trim() || "";
    const phone =
      formData[`member${i}_phone` as keyof FormData]?.toString().trim() || "";

    if (!name) {
      return `Member ${i} name is required`;
    }

    if (!validateEmail(email)) {
      return `Member ${i} email is invalid`;
    }

    if (!validatePhone(phone)) {
      return `Member ${i} phone number is invalid (accept formats like: 08123456789, 0812-3456-789, +62-812-345-6789)`;
    }
  }

  for (const i of rule.optional) {
    const name =
      formData[`member${i}_name` as keyof FormData]?.toString().trim() || "";
    const email =
      formData[`member${i}_email` as keyof FormData]?.toString().trim() || "";
    const phone =
      formData[`member${i}_phone` as keyof FormData]?.toString().trim() || "";

    // Check if any field is filled
    const hasAnyData = name || email || phone;

    // If no data filled, skip this optional member
    if (!hasAnyData) {
      continue;
    }

    // If any data is filled, all fields must be complete and valid
    if (!name) {
      return `Member ${i} name is required`;
    }

    if (!validateEmail(email)) {
      return `Member ${i} email is invalid`;
    }

    if (!validatePhone(phone)) {
      return `Member ${i} phone number is invalid (accept formats like: 08123456789, 0812-3456-789, +62-812-345-6789)`;
    }
  }

  // Non-POD competitions cannot submit member 3 or 4.
  if (formData.competition !== "POD") {
    const hasMember3 =
      formData.member3_name.trim() ||
      formData.member3_email.trim() ||
      formData.member3_phone.trim();
    const hasMember4 =
      formData.member4_name.trim() ||
      formData.member4_email.trim() ||
      formData.member4_phone.trim();
    if (hasMember3 || hasMember4) {
      return `Competition ${formData.competition} only allows up to Member 2`;
    }
  }

  return null;
}
