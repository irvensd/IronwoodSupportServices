import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { CTA, PageIntro, StatementLink } from "@/components/shared";
import {
  coreServices,
  itServices,
  naics,
  company,
  pageMetadata,
  registration,
  samIsActive,
  serviceArea,
} from "@/lib/site";
export const metadata = pageMetadata(
  "Capabilities",
  "Explore Ironwood’s grounds maintenance, janitorial, and facilities support. IT support is also available.",
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
          Grounds maintenance, janitorial, and facilities support for public
          agencies and institutions. {`${serviceArea}.`} Every engagement begins
          with a defined scope and a practical service plan.
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
            </article>
          ))}
        </div>
      </section>
      <section className="section container" id="it-support">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ALSO AVAILABLE</p>
            <h2>IT support with a defined scope.</h2>
          </div>
          <p>
            Help desk, systems support, and focused development when a
            technical scope is needed. Availability is confirmed against each
            requirement.
          </p>
        </div>
        <div className="detail-grid">
          {itServices.map((s, i) => (
            <article
              className="service-detail"
              id={`it-service-${i + 1}`}
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
                {!samIsActive && "UEI and CAGE code will be listed once issued. "}
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
              <br />
              <strong>PSC D302</strong> IT and Telecom–Systems Development
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
