import { NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8080";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const response = await fetch(`${BACKEND_URL}/register`, {
      method: "POST",
      body: formData,
    });

    const responseText = await response.text();

    if (!response.ok) {
      console.error("[api/register] Backend returned error", {
        status: response.status,
        body: responseText,
      });
    }

    try {
      const json = JSON.parse(responseText);
      return NextResponse.json(json, { status: response.status });
    } catch {
      return NextResponse.json(
        {
          error:
            responseText ||
            "Backend returned a non-JSON response during registration.",
        },
        { status: response.status || 502 },
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to connect to backend registration service.",
      },
      { status: 502 },
    );
  }
}
