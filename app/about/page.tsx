import Link from "next/link";
import { ArrowRight, Trees } from "lucide-react";
import { CTA, PageIntro } from "@/components/shared";
import { company, pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "About Ironwood",
  "Meet Ironwood Support Services, a new U.S. small business focused on reliable public-site care and broad facility support.",
  "/about",
);
export default function About() {
  return (
    <>
      <PageIntro
        label="ABOUT IRONWOOD"
        title="Grounded in service. Built to grow."
      >
        <p>
          A new U.S. small business with a practical focus: caring for the
          places where public service happens.
        </p>
      </PageIntro>
      <section className="section container about-grid">
        <div className="about-panel">
          <Trees size={64} strokeWidth={1} />
          <p>
            Reliable care for
            <br />
            the places that
            <br />
            <strong>serve people.</strong>
          </p>
          <span>IRONWOOD SUPPORT SERVICES</span>
        </div>
        <div>
          <p className="eyebrow">OUR FOUNDATION</p>
          <h2>
            Start with the site.
            <br />
            Keep the bigger picture in view.
          </h2>
          <p>
            Ironwood Support Services is entering government and public-sector
            contracting with facilities and grounds services at its core.
            Mowing, landscaping, groundskeeping, and seasonal site care are our
            starting point.
          </p>
          <p>
            We are building a broad support-services company that can grow with
            client needs. That outlook includes custodial work, facilities
            support coordination, and practical technology and systems support
            for facility operations.
          </p>
          <p>
            As a new company, we focus on clear scopes, realistic commitments,
            and accountable communication. Each opportunity is reviewed against
            the resources and requirements needed to perform it well.
          </p>
          <Link href="/capabilities" className="text-link">
            See how we work <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <section className="why-section">
        <div className="container owner-grid">
          <div>
            <p className="eyebrow">LEADERSHIP & EXPERIENCE</p>
            <h2>
              The people behind
              <br />
              the commitment.
            </h2>
          </div>
          <div className="owner-card">
            {/* TODO(owner): Add principal's name and factual commercial biography. Distinguish individual experience from Ironwood's company past performance. Add an owner-approved portrait only if desired. */}
            <p className="eyebrow">COMPANY PRINCIPAL</p>
            <h3>{company.ownerName}</h3>
            <p>{company.ownerBio}</p>
            <p className="muted">
              Principal’s commercial experience: [ADD VERIFIED COMMERCIAL
              EXPERIENCE]
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
