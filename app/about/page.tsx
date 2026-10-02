import Link from "next/link";
import { ArrowRight, Trees } from "lucide-react";
import { CTA, PageIntro } from "@/components/shared";
import {
  bioIsPublished,
  company,
  pageMetadata,
  serviceArea,
} from "@/lib/site";
export const metadata = pageMetadata(
  "About Ironwood",
  "Meet Ironwood Support Services, a new U.S. small business providing grounds maintenance, janitorial, and facilities support.",
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
          A new U.S. small business serving Greater Houston, TX, focused on
          the places where public service happens.
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
            Keep the facility in view.
          </h2>
          <p>
            Ironwood Support Services is entering government and public-sector
            contracting with grounds maintenance, janitorial, and facilities
            support at its core. {`${serviceArea}.`}
          </p>
          <p>
            IT support is also available when a defined technical scope is
            needed. Each opportunity is reviewed against the resources and
            requirements needed to perform it well.
          </p>
          <p>
            As a new company, we focus on clear scopes, realistic commitments,
            and accountable communication.
          </p>
          <Link href="/capabilities" className="text-link">
            See how we work <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <section className="why-section">
        <div className="container owner-grid">
          <div>
            <p className="eyebrow">LEADERSHIP</p>
            <h2>
              The person behind
              <br />
              the commitment.
            </h2>
          </div>
          <div className="owner-card">
            {/* TODO(owner): Replace TODO_BIO in lib/site.ts with a verified biography. Do not add commercial experience until it is verified. */}
            <p className="eyebrow">COMPANY PRINCIPAL</p>
            <h3>{company.ownerName}</h3>
            {bioIsPublished ? <p>{company.ownerBio}</p> : null}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
