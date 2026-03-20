export interface FileData {
  payment_proof: File | null;
  student_id: File | null;
  follow_proof: File | null;
  twibbon_proof: File | null;
  story_proof: File | null;
  whatsapp_proof: File | null;
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

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "/api";

export async function uploadRegistration(
  formData: FormData,
  files: FileData,
): Promise<{ success: boolean; error?: string }> {
  try {
    const multipartData = new FormData();

    // Add text fields
    Object.entries(formData).forEach(([key, value]) => {
      multipartData.append(key, value || "");
    });

    // Add files
    Object.entries(files).forEach(([key, file]) => {
      if (file) {
        multipartData.append(key, file);
      }
    });

    const response = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      body: multipartData,
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.error || "Registration failed",
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    console.error("Registration error:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Failed to connect to server. Make sure backend is running at " +
            API_BASE_URL,
    };
  }
}
