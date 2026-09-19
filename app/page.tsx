import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Sprout,
  Trees,
  Leaf,
  Building2,
  CalendarDays,
  ClipboardCheck,
  MessageSquare,
  MapPin,
} from "lucide-react";
import { coreServices, company, pageMetadata } from "@/lib/site";
import { CTA, StatementLink } from "@/components/shared";
export const metadata = pageMetadata(
  "Facilities & Grounds Services",
  "Ironwood Support Services provides mowing, landscaping, groundskeeping, and seasonal site care for public agencies and institutions.",
  "/",
);
const icons = [Sprout, Trees, Leaf, Building2];
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" /> GROUNDED IN SERVICE. BUILT TO
              GROW.
            </p>
            <h1>
              Facilities and
              <br />
              <span>grounds services.</span>
            </h1>
            <p className="hero-audience">
              For public agencies and institutions.
            </p>
            <p className="hero-description">
              Mowing, landscaping, and site care — with capacity to support
              broader facility and business needs as clients require.
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
                alt="Maintained lawn and landscaped grounds around an institutional building; illustrative stock photograph"
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
          <p>Landscaping</p>
          <i />
          <p>Seasonal site care</p>
          <i />
          <p>Facility site support</p>
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
              Well-supported operations.
            </h2>
          </div>
          <p>
            From everyday grounds maintenance to the tasks that keep a property
            ready for use, we start with your site’s needs.
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
          <p className="eyebrow">ROOM TO SUPPORT MORE</p>
          <h2>
            One company.
            <br />A broader service outlook.
          </h2>
          <p>
            Our foundation is facilities and grounds. Additional capabilities
            include janitorial and custodial services, facilities support
            coordination, and technology and systems support for facility
            operations and administrative environments.
          </p>
          <p className="muted">
            Availability is confirmed against each project’s scope, staffing,
            and requirements.
          </p>
          <StatementLink />
        </div>
        <aside className="area-card">
          <MapPin size={29} strokeWidth={1.4} />
          <p className="eyebrow">SERVICE AREA</p>
          <h3>
            Local attention.
            <br />
            Site-specific planning.
          </h3>
          <p className="placeholder">{company.serviceArea}</p>
          <p>
            Share your site location so we can discuss service availability and
            scheduling.
          </p>
          <Link href="/contact" className="text-link">
            Discuss your location <ArrowRight size={18} />
          </Link>
        </aside>
      </section>
      <CTA />
    </>
  );
}
