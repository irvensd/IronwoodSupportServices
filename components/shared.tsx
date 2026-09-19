import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import { Brand } from "./brand";
import { company, registration } from "@/lib/site";
export function CTA() {
  return (
    <section className="cta-section no-print">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">LET’S TALK ABOUT YOUR SITE</p>
          <h2>
            Good service starts with
            <br />a clear understanding.
          </h2>
          <p>Tell us about your property, schedule, and scope.</p>
        </div>
        <Link href="/contact" className="button button-light">
          Request a quote <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="site-footer no-print">
      <div className="container footer-main">
        <div>
          <Brand />
          <p>
            Facilities and grounds services
            <br />
            for public agencies and institutions.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/capabilities">Capabilities</Link>
          <Link href="/about">About Ironwood</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h3>Connect</h3>
          <p>
            {company.email}
            <br />
            {company.phone}
          </p>
          <p>Service area: {company.serviceArea}</p>
        </div>
        <div>
          <h3>Contracting</h3>
          <p>
            Primary NAICS: 561730
            <br />
            PSC: S208
          </p>
          <Link
            href="/capability-statement"
            className="inline-flex items-center gap-2"
          >
            Capability statement <ArrowUpRight size={15} />
          </Link>
          <p className="small">{registration.summary}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {company.name}
        </span>
        <span>Grounded in service. Built to grow.</span>
      </div>
    </footer>
  );
}
export function PageIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="page-intro">
      <div className="container">
        <p className="eyebrow">{label}</p>
        <h1>{title}</h1>
        <div className="intro-copy">{children}</div>
      </div>
    </section>
  );
}
export function StatementLink() {
  return (
    <Link className="statement-link" href="/capability-statement">
      <FileText size={23} />
      <span>
        Capability statement
        <small>A concise, print-ready company overview</small>
      </span>
      <ArrowRight size={20} />
    </Link>
  );
}
