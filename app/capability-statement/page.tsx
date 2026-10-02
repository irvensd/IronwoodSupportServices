import Link from "next/link";
import { PrintButton } from "@/components/print-button";
import { Brand } from "@/components/brand";
import {
  company,
  contactLinks,
  naics,
  pageMetadata,
  phoneIsPublished,
  registration,
  samIsActive,
  samPendingStatement,
  serviceArea,
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
            Grounds, janitorial, and facilities support for public agencies and
            institutions.
          </h1>
          <p>
            {company.name} is a Houston-based small business. {`${serviceArea}.`} IT
            support is also available when a defined scope is needed.
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
                  Scheduled mowing, edging, and trimming, roughly March through
                  November.
                </li>
                <li>
                  <strong>Janitorial & custodial</strong>
                  <br />
                  Routine cleaning for facility and administrative spaces.
                </li>
                <li>
                  <strong>Facilities support</strong>
                  <br />
                  Exterior upkeep and scope-specific site tasks.
                </li>
                <li>
                  <strong>Landscaping & groundskeeping</strong>
                  <br />
                  Bed upkeep, weeding, mulch, and common-area care.
                </li>
                <li>
                  <strong>Storm, drainage & heat-season care</strong>
                  <br />
                  Debris cleanup, drainage upkeep, and irrigation checks.
                </li>
                <li>
                  <strong>IT support (also available)</strong>
                  <br />
                  Help desk, systems support, and scoped development.
                </li>
              </ul>
            </section>
            <section>
              <h2>Differentiators</h2>
              <ul className="compact-list">
                <li>Site-specific scheduling and defined scopes.</li>
                <li>Quality checks and corrective-work coordination.</li>
                <li>Responsive local communication and accountability.</li>
              </ul>
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
                <dd>Houston-based small business</dd>
                <dt>Area</dt>
                <dd>Greater Houston, TX</dd>
                <dt>SAM.gov</dt>
                <dd>
                  {samIsActive ? "Registration active" : samPendingStatement}
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
              <p className="statement-code">
                <strong>PSC D302</strong>
                <br />
                IT and Telecom–Systems Development
              </p>
            </section>
          </aside>
        </div>
        <footer className="statement-footer">
          <strong>Let’s discuss your site.</strong>
          <p>
            <a href={contactLinks.email}>{company.email}</a>
            {phoneIsPublished && contactLinks.phone ? (
              <>
                &nbsp; | &nbsp;
                <a href={contactLinks.phone}>{company.phone}</a>
              </>
            ) : null}
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
