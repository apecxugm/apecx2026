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
    const formData = await request.formData();
    const backendCandidates = getBackendCandidates();
    let response: Response | null = null;
    let selectedBaseUrl: string | null = null;
    let lastConnectionError: unknown = null;

    for (const baseUrl of backendCandidates) {
      try {
        response = await fetch(`${baseUrl}/register`, {
          method: "POST",
          body: formData,
        });
        selectedBaseUrl = baseUrl;
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

    const responseText = await response.text();

    if (!response.ok) {
      console.error("[api/register] Backend returned error", {
        backendUrl: selectedBaseUrl,
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
