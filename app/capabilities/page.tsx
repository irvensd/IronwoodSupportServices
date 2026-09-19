import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { CTA, PageIntro, StatementLink } from "@/components/shared";
import {
  coreServices,
  growthNaics,
  naics,
  company,
  pageMetadata,
  registration,
  samIsActive,
} from "@/lib/site";
export const metadata = pageMetadata(
  "Capabilities",
  "Explore Summit’s grounds maintenance, landscaping, seasonal care, facility support, and contracting capability areas.",
  "/capabilities",
);
export default function Capabilities() {
  return (
    <>
      <PageIntro
        label="OUR CAPABILITIES"
        title="Built around the needs of your site."
      >
        <p>
          Focused grounds and facility services, with a broader support-services
          outlook. Every engagement begins with a defined scope and a practical
          service plan.
        </p>
        <StatementLink />
      </PageIntro>
      <section className="section container">
        <div className="detail-grid">
          {coreServices.map((s, i) => (
            <article
              className="service-detail"
              id={`service-${i + 1}`}
              key={s.title}
            >
              <span className="detail-number">0{i + 1}</span>
              <h2>{s.title}</h2>
              <p>{s.description}</p>
              <ul className="check-list">
                {s.details.map((d) => (
                  <li key={d}>
                    <Check size={17} />
                    {d}
                  </li>
                ))}
              </ul>
              {i === 2 && (
                <p className="small muted">
                  Snow and ice services are a future option only, subject to
                  equipment, staffing, and site requirements. They are not part
                  of our current core offering.
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
      <section className="why-section">
        <div className="container">
          <p className="eyebrow">HOW WE WORK</p>
          <h2>A clear plan from the ground up.</h2>
          <div className="process-grid">
            {[
              [
                "01",
                "Walk the site",
                "Review the property, access, priorities, safety requirements, and the requested scope together.",
              ],
              [
                "02",
                "Set the schedule",
                "Agree on tasks, service frequency, communication, and a schedule that fits your operations.",
              ],
              [
                "03",
                "Check the work",
                "Use scope-based checks, document concerns, and coordinate corrective work with your point of contact.",
              ],
            ].map(([n, t, d]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ADDITIONAL CAPABILITY AREAS</p>
            <h2>Support that can grow with you.</h2>
          </div>
          <p>
            We assess additional work individually and confirm staffing and
            delivery readiness before accepting a scope.
          </p>
        </div>
        <div className="additional-grid">
          <article>
            <h3>Janitorial & custodial</h3>
            <p>
              Routine cleaning and custodial support for facility and
              administrative environments.
            </p>
          </article>
          <article>
            <h3>Facilities support coordination</h3>
            <p>
              Coordination of service tasks, schedules, and communication across
              facility needs.
            </p>
          </article>
          <article>
            <h3>Technology & systems support</h3>
            <p>
              Practical systems support for facility operations and
              administrative environments.
            </p>
          </article>
        </div>
      </section>
      <section className="contracting-section">
        <div className="container contracting-grid">
          <div>
            <p className="eyebrow">CONTRACTING INFORMATION</p>
            <h2>
              A clear starting point
              <br />
              for procurement.
            </h2>
            <p>{registration.opportunities}</p>
            <div className="registration-box">
              <strong>{registration.label}</strong>
              <p>
                UEI: {company.uei}
                <br />
                CAGE: {company.cage}
              </p>
              <p className="small">
                {!samIsActive &&
                  "Identifiers will be added once registration is complete. "}
                No socioeconomic certifications or contract vehicles are
                claimed.
              </p>
            </div>
            <Link href="/capability-statement" className="text-link">
              View printable statement <ArrowUpRight size={18} />
            </Link>
          </div>
          <div>
            <h3>NAICS capability areas</h3>
            <dl className="naics-list">
              {naics.map(([code, name, type]) => (
                <div key={code}>
                  <dt>{code}</dt>
                  <dd>
                    {name}
                    {type === "Primary" && (
                      <span className="badge">PRIMARY</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="psc">
              <strong>PSC S208</strong> Housekeeping–Landscaping/Groundskeeping
            </p>
            <div className="growth-codes">
              <h4>Secondary / growth areas</h4>
              {growthNaics.map(([code, name]) => (
                <p key={code}>
                  <strong>{code}</strong> {name}
                </p>
              ))}
              <p className="small muted">
                Capability areas for future growth; availability is confirmed
                for each scope. Listing is not a current IT service commitment.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
