import Link from "next/link";
import { PrintButton } from "@/components/print-button";
import { Brand } from "@/components/brand";
import {
  company,
  contactLinks,
  naics,
  growthNaics,
  pageMetadata,
  samIsActive,
  registration,
} from "@/lib/site";
export const metadata = pageMetadata(
  "Capability Statement",
  "Print a one-page overview of Ironwood Support Services competencies, differentiators, NAICS codes, and contracting details.",
  "/capability-statement",
);
export default function CapabilityStatement() {
  return (
    <div className="statement-page">
      <div className="container statement-toolbar no-print">
        <Link href="/capabilities" className="text-link">
          ← Back to capabilities
        </Link>
        <PrintButton />
      </div>
      <article className="cap-statement">
        <header className="statement-header">
          <Brand />
          <div>
            CAPABILITY
            <br />
            <strong>STATEMENT</strong>
          </div>
        </header>
        <div className="statement-title">
          <h1>
            Facilities and grounds services for public agencies and
            institutions.
          </h1>
          <p>
            {company.name} is a new U.S. small business focused on reliable
            public-site care, with a broad support-services outlook.
          </p>
        </div>
        <div className="statement-columns">
          <div>
            <section>
              <h2>Core competencies</h2>
              <ul>
                <li>
                  <strong>Grounds maintenance & mowing</strong>
                  <br />
                  Scheduled mowing, edging, trimming, and cleanup.
                </li>
                <li>
                  <strong>Landscaping & groundskeeping</strong>
                  <br />
                  Landscape bed upkeep, weeding, mulch, and common-area care.
                </li>
                <li>
                  <strong>Seasonal site care</strong>
                  <br />
                  Leaf removal, seasonal cleanup, and site preparation.
                </li>
                <li>
                  <strong>Related facility site support</strong>
                  <br />
                  Exterior upkeep and scope-specific site tasks.
                </li>
              </ul>
            </section>
            <section>
              <h2>Differentiators</h2>
              <ul className="compact-list">
                <li>Site-specific scheduling and defined scopes.</li>
                <li>Quality checks and corrective-work coordination.</li>
                <li>Responsive local communication and accountability.</li>
                <li>Broader support capabilities as client needs grow.</li>
              </ul>
            </section>
            <section>
              <h2>Additional capability areas</h2>
              <p>
                Janitorial / custodial; facilities support coordination;
                technology and systems support for facility operations and
                administrative environments. Scope and delivery readiness
                confirmed per project.
              </p>
            </section>
            <section>
              <h2>How we work</h2>
              <p>
                Site visit → agreed scope and schedule → quality checks and
                responsive follow-through.
              </p>
            </section>
          </div>
          <aside>
            <section>
              <h2>Company data</h2>
              <dl className="statement-data">
                <dt>Business</dt>
                <dd>U.S. small business</dd>
                <dt>SAM.gov</dt>
                <dd>
                  {samIsActive ? "Registration active" : "Registration pending"}
                </dd>
                <dt>UEI</dt>
                <dd>{company.uei}</dd>
                <dt>CAGE</dt>
                <dd>{company.cage}</dd>
              </dl>
            </section>
            <section>
              <h2>NAICS / PSC</h2>
              {naics.map(([code, name, type]) => (
                <p className="statement-code" key={code}>
                  <strong>
                    {code}
                    {type === "Primary" ? " · Primary" : ""}
                  </strong>
                  <br />
                  {name}
                </p>
              ))}
              <p className="statement-code">
                <strong>PSC S208</strong>
                <br />
                Housekeeping–Landscaping/Groundskeeping
              </p>
              <p className="small">
                <strong>Secondary / growth NAICS</strong>
                <br />
                {growthNaics.map(([code]) => code).join(" · ")}
                <br />
                Secondary capability areas.
              </p>
            </section>
          </aside>
        </div>
        <footer className="statement-footer">
          <strong>Let’s discuss your site.</strong>
          <p>
            <a href={contactLinks.email}>{company.email}</a>
            &nbsp; | &nbsp;
            <a href={contactLinks.phone}>{company.phone}</a>
          </p>
          <p className="statement-disclaimer">
            New company; no federal past performance, contract vehicles, or
            socioeconomic certifications claimed. {registration.opportunities}
          </p>
        </footer>
      </article>
    </div>
  );
}
