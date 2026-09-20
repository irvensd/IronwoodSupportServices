import { NextResponse } from "next/server";
import { Resend } from "resend";
import { emptyContact, validateContact, type ContactData } from "@/lib/contact";
import { company } from "@/lib/site";
import {
  inquiryDestination,
  inquiryFrom,
  inquiryHtml,
  inquirySubject,
  inquiryText,
} from "@/lib/inquiry-email";

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const recentSubmissions = new Map<string, number[]>();

function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "local";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const next = (recentSubmissions.get(key) ?? []).filter(
    (time) => now - time < RATE_WINDOW_MS,
  );
  if (next.length >= RATE_LIMIT) {
    recentSubmissions.set(key, next);
    return true;
  }
  next.push(now);
  recentSubmissions.set(key, next);
  return false;
}

function json(body: object, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json"))
    return json({ message: "Send the form as JSON." }, 415);
  if (isRateLimited(clientKey(request)))
    return json(
      { message: "Too many inquiries were submitted. Please try again later." },
      429,
    );
  const reader = request.body?.getReader();
  if (!reader) return json({ message: "A form body is required." }, 400);
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.length;
      if (size > 32_000) {
        await reader.cancel();
        return json({ message: "The submitted form is too large." }, 413);
      }
      chunks.push(value);
    }
  } catch {
    return json({ message: "Unable to read the form. Please try again." }, 400);
  }
  let raw: unknown;
  try {
    const body = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) {
      body.set(chunk, offset);
      offset += chunk.length;
    }
    raw = JSON.parse(new TextDecoder().decode(body));
  } catch {
    return json({ message: "Invalid form data." }, 400);
  }
  if (!raw || typeof raw !== "object" || Array.isArray(raw))
    return json({ message: "Invalid form data." }, 400);
  const record = raw as Record<string, unknown>;
  const data = { ...emptyContact };
  for (const key of Object.keys(data) as (keyof ContactData)[]) {
    if (record[key] !== undefined && typeof record[key] !== "string")
      return json({ message: "Invalid form fields." }, 400);
    data[key] = typeof record[key] === "string" ? (record[key] as string) : "";
  }
  if (data.website)
    return json({ message: "Unable to process this submission." }, 400);
  const errors = validateContact(data);
  if (Object.keys(errors).length)
    return json({ message: "Please review the required fields.", errors }, 400);

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey)
    return json(
      {
        message: `We could not send your inquiry. Please email ${company.email} or call ${company.phone}.`,
      },
      503,
    );

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: inquiryFrom(),
    to: inquiryDestination(),
    replyTo: data.email.trim(),
    subject: inquirySubject(data),
    text: inquiryText(data),
    html: inquiryHtml(data),
  });
  if (error)
    return json(
      {
        message: `We could not send your inquiry. Please email ${company.email} or call ${company.phone}.`,
      },
      502,
    );

  return json({
    success: true,
    message:
      "Thank you. Your inquiry has been sent to Ironwood Support Services. We will follow up at the email you provided.",
  });
}
