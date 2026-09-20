import type { ContactData } from "./contact";

const defaultInbox = "support@ironwoodsupportservices.com";
const defaultFromName = "Ironwood Support Services";

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function inquiryDestination() {
  return process.env.CONTACT_TO_EMAIL?.trim() || defaultInbox;
}

export function inquiryFrom() {
  const address = process.env.CONTACT_FROM_EMAIL?.trim() || defaultInbox;
  return `${defaultFromName} <${address}>`;
}

export function inquirySubject(data: ContactData) {
  return `Website inquiry: ${data.service.trim()} — ${data.organization.trim()}`;
}

export function inquiryText(data: ContactData) {
  const phone = data.phone.trim() || "Not provided";
  return [
    "New inquiry from the Ironwood Support Services website.",
    "",
    `Name: ${data.name.trim()}`,
    `Organization: ${data.organization.trim()}`,
    `Email: ${data.email.trim()}`,
    `Phone: ${phone}`,
    `City / state: ${data.location.trim()}`,
    `Service needed: ${data.service.trim()}`,
    "",
    "Project details:",
    data.message.trim(),
  ].join("\n");
}

export function inquiryHtml(data: ContactData) {
  const rows: [string, string][] = [
    ["Name", data.name],
    ["Organization", data.organization],
    ["Email", data.email],
    ["Phone", data.phone.trim() || "Not provided"],
    ["City / state", data.location],
    ["Service needed", data.service],
  ];
  const details = rows
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:4px 16px 4px 0;vertical-align:top;">${escapeHtml(label)}</th><td style="padding:4px 0;">${escapeHtml(value.trim())}</td></tr>`,
    )
    .join("");
  return `<p>New inquiry from the Ironwood Support Services website.</p>
<table>${details}</table>
<p><strong>Project details</strong></p>
<p>${escapeHtml(data.message.trim()).replaceAll("\n", "<br />")}</p>`;
}
