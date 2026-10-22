import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { contact } from "@/lib/contact";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import { pageHead } from "@/lib/site-content";

const title = "Privacy policy";
const description =
  "What iSixDigitals does with information when you visit this website: no tracking scripts, no advertising cookies, and a project brief that stays on your device.";

export const metadata: Metadata = pageHead(title, description, "/privacy");

export default function Privacy() {
  return (
    <SiteShell>
      <JsonLd
        id="privacy-schema"
        data={graph([
          webPageSchema({
            path: "/privacy",
            name: `${title} | iSixDigitals`,
            description,
            breadcrumb: breadcrumbSchema({ path: "/privacy", name: "Privacy" }),
          }),
          breadcrumbSchema({ path: "/privacy", name: "Privacy" }),
        ])}
      />
      <PageIntro label="Legal" title="Privacy policy.">
        What this website does with your information, written to match how the site actually works.
      </PageIntro>
      <section className="section-inner legal-section">
        <div className="legal-body">
          <p className="legal-meta">Last updated 22 October 2026</p>

          <h2>The short version</h2>
          <p>
            This site does not use analytics, advertising, or tracking scripts, and it does not set
            cookies of its own. The project brief form runs entirely in your browser: nothing you
            type into it is transmitted to or stored on a server. If you email or call iSixDigitals,
            the information you share is used to reply to you and to work on your project.
          </p>

          <h2>Information you choose to send</h2>
          <p>
            The <Link href="/contact">contact page</Link> includes a short form. When you complete
            it, your browser generates a text file on your device containing the details you
            entered. That file is not uploaded, emailed, or stored automatically. You decide whether
            to send it, and you send it from your own email account.
          </p>
          <p>
            If you contact iSixDigitals by email, phone, or a scheduling link, the information you
            provide — your name, studio, contact details, and anything about your project — is used
            only to answer your enquiry and to deliver work you have asked for.
          </p>

          <h2>Technical information</h2>
          <p>
            Like most websites, the servers that deliver this site record basic technical
            information for security, performance, and troubleshooting. This typically includes the
            requested address, the time of the request, a browser user-agent string, and an IP
            address. Those logs are not used to build profiles or to target advertising, and they
            are retained only as long as the hosting provider needs them for operations.
          </p>

          <h2>Cookies and local storage</h2>
          <p>
            This site does not set advertising or analytics cookies and does not write project
            information to local storage. Typefaces and images are served from the site itself, so
            visiting a page does not make requests to third-party font or image networks. The{" "}
            <Link href="/cookies">cookie policy</Link> covers this in more detail.
          </p>

          <h2>Third-party services</h2>
          <p>
            Some links lead to services operated by other companies — for example an email provider,
            a phone network, or an optional scheduling tool. When you follow one of those links,
            that provider&apos;s own privacy policy applies to what happens next. iSixDigitals does
            not control those services and does not receive information from them beyond what you
            choose to share.
          </p>

          <h2>How long information is kept</h2>
          <p>
            Correspondence about a project is kept for as long as needed to answer your enquiry,
            deliver the work, and meet ordinary record-keeping obligations. If you ask for an email
            thread to be deleted and there is no legal or contractual reason to keep it, it is
            deleted.
          </p>

          <h2>Your choices</h2>
          <ul>
            <li>Ask what information is held about you and request a copy.</li>
            <li>Ask for information to be corrected or deleted.</li>
            <li>Withdraw a project enquiry at any time before work begins.</li>
            <li>
              Use this website without submitting a form — everything here is readable without it.
            </li>
          </ul>

          <h2>Children</h2>
          <p>
            This website is intended for people running or working with creative studios. It is not
            directed at children, and iSixDigitals does not knowingly collect information from
            children.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If the way this site handles information changes — for example if analytics or a booking
            integration is added — this page is updated before that change goes live, and the date
            at the top is revised.
          </p>

          <h2>Contact</h2>
          {contact.email ? (
            <p>
              Questions about this policy can be sent to{" "}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>.
            </p>
          ) : (
            <p>
              Questions about this policy can be sent through the{" "}
              <Link href="/contact">contact page</Link>.
            </p>
          )}
        </div>
      </section>
    </SiteShell>
  );
}
