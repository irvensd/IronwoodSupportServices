import type { Metadata } from "next";

// TODO(owner): Replace these values after confirming the company's details.
// Keep placeholders until verified; do not imply an active SAM registration.
export const company = {
  name: "Summit Site Services LLC",
  email: "[ADD EMAIL]",
  phone: "[ADD PHONE]",
  serviceArea: "[ADD SERVICE AREA]",
  uei: "[ADD UEI]",
  cage: "[ADD CAGE]",
  // TODO(owner): Set true only after confirming SAM.gov registration is active,
  // and replace BOTH identifier placeholders above. Rebuild/redeploy afterward.
  samActive: false,
  ownerName: "[ADD OWNER NAME]",
  ownerBio: "[ADD OWNER BIO]",
};
// One source of truth keeps footer, contact page, and statement in sync.
// Having identifiers alone does not establish an active SAM registration.
export const samIsActive =
  company.samActive &&
  [company.uei, company.cage].every(
    (value) => value.trim().length > 0 && !value.includes("[ADD"),
  );
export const registration = {
  label: samIsActive
    ? "SAM.gov registration: active"
    : "SAM.gov registration: pending",
  summary: samIsActive
    ? `UEI: ${company.uei} · CAGE: ${company.cage}`
    : "SAM.gov registration pending.",
  contactNote: samIsActive
    ? `UEI: ${company.uei} · CAGE: ${company.cage}`
    : "SAM.gov UEI and CAGE identifiers will be added after registration is complete.",
  opportunities: samIsActive
    ? "Available to discuss small-business set-aside opportunities, subject to applicable eligibility and solicitation requirements."
    : "Preparing to pursue small-business set-aside opportunities once SAM.gov registration is active and applicable eligibility requirements are met.",
};
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title: { absolute: `${title} | ${company.name}` },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${company.name}`,
      description,
      url: path,
      siteName: company.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${title} | ${company.name}`,
      description,
    },
  };
}
export const coreServices = [
  {
    title: "Grounds maintenance & mowing",
    short: "Consistent care. Well-kept grounds.",
    description:
      "Scheduled mowing, edging, trimming, and cleanup to keep public-facing grounds orderly and usable.",
    details: [
      "Routine mowing and turf maintenance",
      "Edging and trimming around site features",
      "Grass clipping and litter cleanup",
      "Service schedules tailored to each site",
    ],
  },
  {
    title: "Landscaping & groundskeeping",
    short: "A professional first impression.",
    description:
      "Practical landscape upkeep for the spaces around buildings, walkways, and shared outdoor areas.",
    details: [
      "Landscape bed maintenance and weeding",
      "Mulch placement and seasonal bed care",
      "Shrub and ornamental plant upkeep",
      "Walkway and common-area groundskeeping",
    ],
  },
  {
    title: "Seasonal site care",
    short: "Prepared for the season ahead.",
    description:
      "Leaf removal, seasonal cleanup, and site preparation as outdoor maintenance needs change.",
    details: [
      "Leaf collection and removal",
      "Spring and fall grounds cleanup",
      "Seasonal debris cleanup",
      "Site preparation within agreed scope",
    ],
  },
  {
    title: "Facility site support",
    short: "Support beyond the grounds.",
    description:
      "Related exterior site tasks and coordinated support based on your facility’s priorities and scope.",
    details: [
      "Exterior common-area upkeep",
      "Routine site condition observations",
      "Site cleanup and support tasks",
      "Coordination with facility points of contact",
    ],
  },
];
export const naics = [
  ["561730", "Landscaping Services", "Primary"],
  ["561720", "Janitorial Services", "Additional"],
  ["561210", "Facilities Support Services", "Additional"],
  ["561790", "Other Services to Buildings and Dwellings", "Additional"],
];
export const growthNaics = [
  ["541512", "Computer Systems Design Services"],
  ["541511", "Custom Computer Programming Services"],
  ["541519", "Other Computer Related Services"],
];
