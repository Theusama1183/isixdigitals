import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { SiteShell, PageIntro } from "@/components/site-shell";
import { JsonLd } from "@/components/json-ld";
import { contact, mailtoHref, telHref } from "@/lib/contact";
import { contactPointSchema, graph, webPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import { pageHead } from "@/lib/site-content";
import { ContactForm } from "./contact-form";

const title = "Contact iSixDigitals about a studio website";
const description =
  "Start a studio website project with iSixDigitals in Lahore, Pakistan. Prepare a project brief or email the studio about design, redesign, or booking journeys.";

export const metadata: Metadata = pageHead(title, description, "/contact");

export default function Contact() {
  const hasDetails = Boolean(
    contact.email || contact.phone || contact.serviceArea || contact.bookingUrl,
  );

  return (
    <SiteShell>
      <JsonLd
        id="contact-schema"
        data={graph([
          webPageSchema({
            path: "/contact",
            name: `${title} | iSixDigitals`,
            description,
            type: "ContactPage",
            mainEntity: { "@id": `${SITE_URL}/contact#contactpoint` },
          }),
          contactPointSchema(),
        ])}
      />
      <PageIntro
        label="Let’s talk"
        title={
          <>
            Talk about
            <br /> <em>your studio website.</em>
          </>
        }
      >
        A new website, a much-needed refresh, or a clearer booking journey. Start with where you are
        and what you would like to change.
      </PageIntro>
      <section className="section-inner contact-layout">
        <ContactForm email={contact.email} />
        <aside className="contact-info">
          <h2>
            A good conversation
            <br /> starts here.
          </h2>
          <p>
            Share the essentials and you will hear back with a few questions, an honest view of what
            your site needs, and a clear next step.
            {contact.serviceArea ? ` Based in ${contact.serviceArea}.` : ""}
          </p>
          {hasDetails && (
            <dl>
              {contact.email && (
                <>
                  <dt>Email</dt>
                  <dd>
                    <a href={mailtoHref(contact.email)}>{contact.email}</a>
                  </dd>
                </>
              )}
              {contact.phone && (
                <>
                  <dt>Phone</dt>
                  <dd>
                    <a href={telHref(contact.phone)}>{contact.phone}</a>
                  </dd>
                </>
              )}
              {contact.serviceArea && (
                <>
                  <dt>Service area</dt>
                  <dd>{contact.serviceArea}</dd>
                </>
              )}
              {contact.bookingUrl && (
                <>
                  <dt>Prefer to book a conversation?</dt>
                  <dd>
                    <a href={contact.bookingUrl}>
                      Choose a time <ArrowUpRight size={16} className="inline" />
                    </a>
                  </dd>
                </>
              )}
            </dl>
          )}
        </aside>
      </section>
    </SiteShell>
  );
}
