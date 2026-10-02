import type { Metadata } from "next";

// TODO(owner): Replace these values after confirming the company's details.
// Keep placeholders until verified; do not imply an active SAM registration.
export const serviceArea = "Serving Greater Houston, TX";

export const phoneNumber = "203-807-0250";

export const company = {
  name: "Ironwood Support Services",
  email: "support@ironwoodsupportservices.com",
  phone: phoneNumber,
  uei: "[ADD UEI]",
  cage: "[ADD CAGE]",
  // TODO(owner): Set true only after confirming SAM.gov registration is active,
  // and replace BOTH identifier placeholders above. Rebuild/redeploy afterward.
  samActive: false,
  ownerName: "Irvens Dupuy",
  ownerBio:
    "Irvens Dupuy is the principal of Ironwood Support Services. He is building a Houston-based company for grounds maintenance, janitorial, and facilities support, and he confirms the scope, schedule, and staffing before work begins.",
};

export const phoneIsPublished =
  company.phone.trim().length > 0 && !company.phone.includes("TODO");

export const bioIsPublished =
  company.ownerBio.trim().length > 0 && !company.ownerBio.includes("TODO");

// One source of truth keeps footer, contact page, and statement in sync.
// Having identifiers alone does not establish an active SAM registration.
export const contactLinks = {
  email: `mailto:${company.email}`,
  phone: phoneIsPublished
    ? `tel:+1${company.phone.replace(/\D/g, "")}`
    : undefined,
};

export const samIsActive =
  company.samActive &&
  [company.uei, company.cage].every(
    (value) => value.trim().length > 0 && !value.includes("[ADD"),
  );

export const samPendingStatement =
  "SAM.gov registration: not yet submitted (planned). UEI and CAGE code will be listed once issued.";

export const registration = {
  label: samIsActive
    ? "SAM.gov registration: active"
    : "SAM.gov registration: not yet submitted (planned)",
  summary: samIsActive
    ? `UEI: ${company.uei} · CAGE: ${company.cage}`
    : samPendingStatement,
  contactNote: samIsActive
    ? `UEI: ${company.uei} · CAGE: ${company.cage}`
    : samPendingStatement,
  opportunities: samIsActive
    ? "Available to discuss small-business set-aside opportunities, subject to applicable eligibility and solicitation requirements."
    : "Preparing to pursue small-business set-aside opportunities once SAM.gov registration is active and applicable eligibility requirements are met.",
};

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.ironwoodsupportservices.com"
).replace(/\/$/, "");

function withServiceArea(description: string) {
  if (description.includes("Greater Houston")) return description;
  const trimmed = description.replace(/\.?\s*$/, "");
  return `${trimmed}. ${serviceArea}.`;
}

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const pageTitle = `${title} | ${company.name} | ${serviceArea}`;
  const pageDescription = withServiceArea(description);
  const shareImage = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: `${company.name}. Grounds, janitorial, and facilities support. ${serviceArea}.`,
  };
  return {
    title: { absolute: pageTitle },
    description: pageDescription,
    alternates: { canonical: path },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: path,
      siteName: company.name,
      locale: "en_US",
      type: "website",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: "/twitter-image",
          width: 1200,
          height: 630,
          alt: shareImage.alt,
        },
      ],
    },
  };
}

export const coreServices = [
  {
    title: "Grounds maintenance & mowing",
    short: "Consistent care. Well-kept grounds.",
    description:
      "Scheduled mowing, edging, trimming, and cleanup through Houston’s long mowing season, roughly March through November.",
    details: [
      "Routine mowing and turf maintenance",
      "Edging and trimming around site features",
      "Grass clipping and litter cleanup",
      "Schedules set for a March-to-November mowing season",
    ],
  },
  {
    title: "Janitorial & custodial",
    short: "Clean spaces, ready for use.",
    description:
      "Routine cleaning and custodial support for facility and administrative environments.",
    details: [
      "Routine interior cleaning",
      "Restroom and common-area care",
      "Trash removal within the agreed scope",
      "Schedules aligned with building hours",
    ],
  },
  {
    title: "Facilities support",
    short: "Support beyond the grounds.",
    description:
      "Exterior site tasks and coordinated facility support based on your priorities and scope.",
    details: [
      "Exterior common-area upkeep",
      "Routine site condition observations",
      "Site cleanup and support tasks",
      "Coordination with facility points of contact",
    ],
  },
  {
    title: "Landscaping & groundskeeping",
    short: "A professional first impression.",
    description:
      "Practical landscape upkeep for the spaces around buildings, walkways, and shared outdoor areas.",
    details: [
      "Landscape bed maintenance and weeding",
      "Mulch placement and bed care",
      "Shrub and ornamental plant upkeep",
      "Walkway and common-area groundskeeping",
    ],
  },
  {
    title: "Storm, drainage & heat-season care",
    short: "Ready for Houston weather.",
    description:
      "Storm and hurricane debris cleanup, drainage and flood-prone area upkeep, and heat-season irrigation checks.",
    details: [
      "Storm and hurricane debris cleanup",
      "Drainage and flood-prone area upkeep",
      "Heat-season irrigation checks",
      "Site cleanup after heavy rain",
    ],
  },
];

export const itServices = [
  {
    title: "IT support & help desk",
    description:
      "Day-to-day user and workstation support for agency staff and facility operations.",
    details: [
      "Help desk and end-user support",
      "Workstation setup and troubleshooting",
      "Account, access, and endpoint support",
      "Clear documentation for the agreed scope",
    ],
  },
  {
    title: "Systems & network support",
    description:
      "Keep office and facility systems available, maintained, and easier to manage.",
    details: [
      "Network and systems administration within scope",
      "Updates, backups, and routine maintenance",
      "Coordination with existing vendors and agency IT",
      "Support for facility operations systems",
    ],
  },
  {
    title: "Software & systems development",
    description:
      "Focused application, automation, and systems-design work when a defined technical scope is needed.",
    details: [
      "Custom application and scripting support",
      "Systems design and implementation assistance",
      "Website and internal-tool support",
      "Scope and delivery readiness confirmed before work begins",
    ],
  },
];

export const itAlsoAvailable = {
  title: "IT support",
  description:
    "Also available when a defined scope is needed: help desk, systems support, and focused development.",
};

export const naics = [
  ["561730", "Landscaping Services", "Primary"],
  ["561720", "Janitorial Services", "Additional"],
  ["561210", "Facilities Support Services", "Additional"],
  ["561790", "Other Services to Buildings and Dwellings", "Additional"],
  ["541512", "Computer Systems Design Services", "Additional"],
  ["541511", "Custom Computer Programming Services", "Additional"],
  ["541519", "Other Computer Related Services", "Additional"],
];

export function inquiryFallbackMessage() {
  if (phoneIsPublished) {
    return `We could not send your inquiry. Please email ${company.email} or call ${company.phone}.`;
  }
  return `We could not send your inquiry. Please email ${company.email}.`;
}

export const structuredData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: company.name,
  url: siteUrl,
  email: company.email,
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Greater Houston, TX",
  },
  description:
    "Grounds maintenance, janitorial, and facilities support for public agencies and institutions. Serving Greater Houston, TX. IT support is also available.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      ...coreServices.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
      {
        "@type": "Offer",
        position: coreServices.length + 1,
        itemOffered: {
          "@type": "Service",
          name: itAlsoAvailable.title,
          description: itAlsoAvailable.description,
        },
      },
    ],
  },
};
