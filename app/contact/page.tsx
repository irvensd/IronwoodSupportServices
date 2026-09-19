import { Mail, Phone } from "lucide-react";
import { PageIntro, StatementLink } from "@/components/shared";
import { ContactForm } from "@/components/contact-form";
import { company, contactLinks, pageMetadata, registration } from "@/lib/site";
export const metadata = pageMetadata(
  "Contact & Request a Quote",
  "Discuss grounds maintenance, landscaping, seasonal site care, and facility support needs with Ironwood Support Services.",
  "/contact",
);
export default function Contact() {
  return (
    <>
      <PageIntro label="CONTACT IRONWOOD" title="Let’s put a plan in place.">
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
              <dd>
                <a href={contactLinks.email}>{company.email}</a>
              </dd>
            </div>
            <div>
              <Phone size={21} />
              <dt>Phone</dt>
              <dd>
                <a href={contactLinks.phone}>{company.phone}</a>
              </dd>
            </div>
          </dl>
          <StatementLink />
          <p className="small muted">{registration.contactNote}</p>
        </aside>
      </section>
    </>
  );
}
