import { NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL;
const BACKEND_FALLBACK_URL = process.env.BACKEND_FALLBACK_URL;
const IS_PRODUCTION = process.env.NODE_ENV === "production";

function getBackendCandidates() {
  const candidates = [BACKEND_URL, BACKEND_FALLBACK_URL];

  if (!IS_PRODUCTION) {
    candidates.push("http://localhost:8080");
  }

  const resolved = candidates.filter((url): url is string => Boolean(url));

  if (resolved.length === 0) {
    throw new Error(
      "No backend URL configured. Set BACKEND_URL (and optionally BACKEND_FALLBACK_URL).",
    );
  }

  return [...new Set(resolved.map((url) => url.replace(/\/$/, "")))];
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const backendCandidates = getBackendCandidates();
    let response: Response | null = null;
    let lastConnectionError: unknown = null;

    for (const baseUrl of backendCandidates) {
      try {
        response = await fetch(`${baseUrl}/voucher/validate`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        break;
      } catch (error) {
        lastConnectionError = error;
      }
    }

    if (!response) {
      throw new Error(
        `Unable to reach backend. Tried: ${backendCandidates.join(", ")}. ` +
          (lastConnectionError instanceof Error
            ? lastConnectionError.message
            : "Unknown connection error."),
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      {
        valid: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to validate voucher.",
      },
      { status: 502 },
    );
  }
}
