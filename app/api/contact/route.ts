import { NextResponse } from "next/server";
import { emptyContact, validateContact, type ContactData } from "@/lib/contact";
export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json"))
    return NextResponse.json(
      { message: "Send the form as JSON." },
      { status: 415 },
    );
  // Bound request bodies even when Content-Length is absent or misleading.
  const reader = request.body?.getReader();
  if (!reader)
    return NextResponse.json(
      { message: "A form body is required." },
      { status: 400 },
    );
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.length;
      if (size > 32_000) {
        await reader.cancel();
        return NextResponse.json(
          { message: "The submitted form is too large." },
          { status: 413 },
        );
      }
      chunks.push(value);
    }
  } catch {
    return NextResponse.json(
      { message: "Unable to read the form. Please try again." },
      { status: 400 },
    );
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
    return NextResponse.json(
      { message: "Invalid form data." },
      { status: 400 },
    );
  }
  if (!raw || typeof raw !== "object" || Array.isArray(raw))
    return NextResponse.json(
      { message: "Invalid form data." },
      { status: 400 },
    );
  const record = raw as Record<string, unknown>;
  const data = { ...emptyContact };
  for (const key of Object.keys(data) as (keyof ContactData)[]) {
    if (record[key] !== undefined && typeof record[key] !== "string")
      return NextResponse.json(
        { message: "Invalid form fields." },
        { status: 400 },
      );
    data[key] = typeof record[key] === "string" ? (record[key] as string) : "";
  }
  if (data.website)
    return NextResponse.json(
      { message: "Unable to process this submission." },
      { status: 400 },
    );
  const errors = validateContact(data);
  if (Object.keys(errors).length)
    return NextResponse.json(
      { message: "Please review the required fields.", errors },
      { status: 400 },
    );
  // TODO(owner): Connect Resend here with a server-only API key and verified sender,
  // or submit to Formspree. Await delivery acceptance before returning success.
  // Add provider-appropriate rate limiting / anti-abuse before enabling delivery.
  // Update the UI disclosure and response after real delivery is connected.
  // Deliberately do not log personal information or persist demo submissions.
  return NextResponse.json(
    {
      success: true,
      mode: "demo",
      message:
        "Your form passed validation. This demo does not deliver messages, so no inquiry has been sent. Contact details will be available once the site is configured.",
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
