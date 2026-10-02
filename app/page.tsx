import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Sprout,
  Brush,
  Building2,
  Trees,
  CloudRain,
  CalendarDays,
  ClipboardCheck,
  MessageSquare,
  Landmark,
  Monitor,
} from "lucide-react";
import {
  coreServices,
  itAlsoAvailable,
  pageMetadata,
  serviceArea,
} from "@/lib/site";
import { CTA, StatementLink } from "@/components/shared";
export const metadata = pageMetadata(
  "Grounds, Janitorial & Facilities Support",
  "Ironwood Support Services provides grounds maintenance, janitorial, and facilities support for public agencies and institutions. IT support is also available.",
  "/",
);
const icons = [Sprout, Brush, Building2, Trees, CloudRain];
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" /> {serviceArea.toUpperCase()}
            </p>
            <h1>
              Grounds, janitorial,
              <br />
              <span>and facilities support.</span>
            </h1>
            <p className="hero-audience">
              For public agencies and institutions.
            </p>
            <p className="hero-description">
              Mowing, cleaning, and practical site care for Greater Houston —
              with IT support also available when a defined scope is needed.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="button button-green">
                Request a quote <ArrowUpRight size={18} />
              </Link>
              <Link href="/capabilities" className="text-link">
                View capabilities <ArrowRight size={18} />
              </Link>
            </div>
            <div className="hero-note">
              A U.S. small business focused on the places people depend on.
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo">
              {/* TODO(owner): Replace this illustrative stock photo with an approved
                  company photo when available; update alt text and README credit. */}
              <Image
                src="/images/grounds.jpg"
                alt="Illustrative photograph of a worker trimming a grassy slope; not a photo of Ironwood’s work"
                fill
                priority
                sizes="(max-width: 800px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="photo-caption">
              <span>
                CARE THAT SHOWS.
                <br />
                SERVICE THAT FOLLOWS THROUGH.
              </span>
              <span className="caption-number">
                01 /<small>GROUNDS & FACILITIES</small>
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="scope-strip">
        <div className="container">
          <span>OUR CORE FOCUS</span>
          <p>Grounds maintenance</p>
          <i />
          <p>Janitorial</p>
          <i />
          <p>Facilities support</p>
          <i />
          <p>Landscaping</p>
          <i />
          <p>Storm & drainage care</p>
        </div>
      </div>
      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              PRACTICAL SERVICES. PROFESSIONAL STANDARDS.
            </p>
            <h2>
              Well-kept sites.
              <br />
              Well-supported facilities.
            </h2>
          </div>
          <p>
            Grounds maintenance, janitorial, and facilities support start with
            a defined scope and a clear plan.
          </p>
        </div>
        <div className="services-grid">
          {coreServices.map((service, i) => {
            const Icon = icons[i];
            return (
              <article className="service-card" key={service.title}>
                <div className="service-top">
                  <Icon size={29} strokeWidth={1.4} />
                  <span>0{i + 1}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link
                  href={`/capabilities#service-${i + 1}`}
                  aria-label={`Explore ${service.title}`}
                >
                  <ArrowUpRight size={21} />
                </Link>
              </article>
            );
          })}
        </div>
        <Link className="text-link mt-8" href="/capabilities">
          Explore our full capabilities <ArrowRight size={18} />
        </Link>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ALSO AVAILABLE</p>
            <h2>IT support, when the scope calls for it.</h2>
          </div>
          <p>{itAlsoAvailable.description}</p>
        </div>
        <article className="service-card also-card">
          <div className="service-top">
            <Monitor size={29} strokeWidth={1.4} />
            <span>Also available</span>
          </div>
          <h3>{itAlsoAvailable.title}</h3>
          <p>
            Help desk, systems support, and focused development — confirmed
            against each requirement before work begins.
          </p>
          <Link
            href="/capabilities#it-support"
            aria-label="Explore IT support"
          >
            <ArrowUpRight size={21} />
          </Link>
        </article>
      </section>
      <section className="why-section">
        <div className="container why-grid">
          <div>
            <p className="eyebrow">THE IRONWOOD APPROACH</p>
            <h2>
              Clear expectations.
              <br />
              Consistent attention.
            </h2>
            <p>
              We’re a new company built around a straightforward commitment:
              understand the work, agree on the plan, and take care of the
              details.
            </p>
            <Link className="text-link" href="/about">
              Get to know Ironwood <ArrowRight size={18} />
            </Link>
          </div>
          <div className="principles">
            {[
              {
                icon: CalendarDays,
                title: "Reliable scheduling",
                copy: "A service plan aligned with your site’s needs, access requirements, and operating hours.",
              },
              {
                icon: ClipboardCheck,
                title: "Quality control",
                copy: "Defined tasks, routine checks, and a clear process for addressing work that needs attention.",
              },
              {
                icon: MessageSquare,
                title: "Responsive local performance",
                copy: "Direct communication, practical updates, and an accountable point of contact.",
              },
            ].map(({ icon: Icon, title, copy }) => (
              <div className="principle" key={title}>
                <Icon size={25} strokeWidth={1.5} />
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section container support-grid">
        <div>
          <p className="eyebrow">HOW THE WORK FITS TOGETHER</p>
          <h2>
            Grounds, janitorial,
            <br />
            and facilities support.
          </h2>
          <p>
            Those three are the services we lead with in Greater Houston. IT
            support is also available when a project needs a defined technical
            scope.
          </p>
          <p className="muted">
            Availability is confirmed against each project’s scope, staffing,
            and requirements.
          </p>
          <StatementLink />
        </div>
        <aside className="area-card">
          <Landmark size={29} strokeWidth={1.4} />
          <p className="eyebrow">CONTRACTING</p>
          <h3>
            Built for public-sector
            <br />
            requirements.
          </h3>
          <p>
            Share the site, scope, and solicitation details so we can discuss
            fit and delivery.
          </p>
          <Link href="/contact" className="text-link">
            Discuss a requirement <ArrowRight size={18} />
          </Link>
        </aside>
      </section>
      <CTA />
    </>
  );
}
