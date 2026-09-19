import { Mail, Phone, MapPin } from "lucide-react";
import { PageIntro, StatementLink } from "@/components/shared";
import { ContactForm } from "@/components/contact-form";
import { company, pageMetadata, registration } from "@/lib/site";
export const metadata = pageMetadata(
  "Contact & Request a Quote",
  "Discuss grounds maintenance, landscaping, seasonal site care, and facility support needs with Summit Site Services LLC.",
  "/contact",
);
export default function Contact() {
  return (
    <>
      <PageIntro label="CONTACT SUMMIT" title="Let’s put a plan in place.">
        <p>
          Have a site that needs attention or a scope to discuss? Share the
          details of your property, schedule, and service needs.
        </p>
      </PageIntro>
      <section className="section container contact-grid">
        <ContactForm />
        <aside className="contact-aside">
          <p className="eyebrow">START A CONVERSATION</p>
          <h2>
            Every site is different.
            <br />
            We’re ready to listen.
          </h2>
          <dl className="contact-details">
            <div>
              <Mail size={21} />
              <dt>Email</dt>
              <dd>{company.email}</dd>
            </div>
            <div>
              <Phone size={21} />
              <dt>Phone</dt>
              <dd>{company.phone}</dd>
            </div>
            <div>
              <MapPin size={21} />
              <dt>Service area</dt>
              <dd>{company.serviceArea}</dd>
            </div>
          </dl>
          <StatementLink />
          <p className="small muted">{registration.contactNote}</p>
        </aside>
      </section>
    </>
  );
}
