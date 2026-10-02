import { PageIntro } from "@/components/shared";
import { company, contactLinks, pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Privacy",
  "How Ironwood Support Services uses information submitted through the contact form.",
  "/privacy",
);
export default function Privacy() {
  return (
    <>
      <PageIntro label="PRIVACY" title="How we handle inquiries.">
        <p>
          This page explains what the contact form collects and how{" "}
          {company.name} uses it.
        </p>
      </PageIntro>
      <section className="section container privacy-copy">
        <h2>What the form collects</h2>
        <p>
          The quote form asks for your name, organization, email, phone if you
          choose to provide one, city and state, the service you need, and
          project details. A hidden field is used only to catch automated
          submissions.
        </p>
        <h2>How it is used</h2>
        <p>
          {`That information is used only to respond to your inquiry. It is emailed to ${company.email}. It is not sold or shared with anyone else for their own marketing.`}
        </p>
        <h2>Cookies and tracking</h2>
        <p>
          This site does not use tracking scripts or tracking cookies. The form
          does not create an account.
        </p>
        <h2>Removal</h2>
        <p>
          To ask us to delete an inquiry you sent, email{" "}
          <a href={contactLinks.email}>{company.email}</a>.
        </p>
      </section>
    </>
  );
}
