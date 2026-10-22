import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { contact } from "@/lib/contact";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { pageHead } from "@/lib/site-content";

const title = "Terms of use";
const description =
  "The terms that apply when you use the iSixDigitals website, and how project work is agreed before any engagement begins.";

export const metadata: Metadata = pageHead(title, description, "/terms");

export default function Terms() {
  return (
    <SiteShell>
      <JsonLd
        id="terms-schema"
        data={graph([
          webPageSchema({
            path: "/terms",
            name: `${title} | iSixDigitals`,
            description,
            breadcrumb: breadcrumbSchema({ path: "/terms", name: "Terms" }),
          }),
          breadcrumbSchema({ path: "/terms", name: "Terms" }),
        ])}
      />
      <PageIntro label="Legal" title="Terms of use.">
        The ground rules for using this website, and how project work is agreed before it starts.
      </PageIntro>
      <section className="section-inner legal-section">
        <div className="legal-body">
          <p className="legal-meta">Last updated 22 October 2026</p>

          <h2>Using this website</h2>
          <p>
            By browsing this site you accept these terms. If you do not agree with them, please stop
            using the site. These terms apply to the website itself; work on a client project is
            governed by a separate written agreement.
          </p>

          <h2>What this site is — and is not</h2>
          <p>
            This website describes the services and approach of iSixDigitals. It is information, not
            an offer, and browsing it does not create a client relationship. Descriptions of
            services, examples, and concept directions show how projects are approached; they are
            not promises of a particular result.
          </p>

          <h2>Enquiries, quotes, and scope</h2>
          <ul>
            <li>An enquiry is a conversation, not a booking or a contract.</li>
            <li>
              Scope, price, deliverables, and timing are confirmed in writing before work begins.
            </li>
            <li>
              Anything not included in the agreed scope is treated as a change to be discussed.
            </li>
            <li>
              Concept directions on this site are illustrative and are not completed client work.
            </li>
          </ul>

          <h2>Content and intellectual property</h2>
          <p>
            The text, layout, and design of this website belong to iSixDigitals unless stated
            otherwise. Please do not republish substantial parts of it without permission.
            Photography used on the site is presentational and does not represent client projects.
          </p>
          <p>
            Ownership of work created for a client — including design files and the delivered
            website — is set out in that project&apos;s written agreement. Until a project is agreed
            and paid for, no rights are transferred.
          </p>

          <h2>Acceptable use</h2>
          <ul>
            <li>Do not attempt to disrupt, overload, or gain unauthorised access to the site.</li>
            <li>Do not scrape or republish the content at scale without permission.</li>
            <li>Do not use the site to send unlawful, misleading, or abusive material.</li>
          </ul>

          <h2>Links to other websites</h2>
          <p>
            This site may link to services run by other companies, such as a scheduling tool or a
            social profile. Those services have their own terms and privacy policies, and
            iSixDigitals is not responsible for their content or availability.
          </p>

          <h2>Availability</h2>
          <p>
            The site is provided as it is. Pages may be updated, moved, or temporarily unavailable,
            and no guarantee is made that the site will always be online or free of errors.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the extent permitted by law, iSixDigitals is not liable for indirect or consequential
            loss arising from use of this website, from reliance on its content, or from a
            third-party service linked from it. Nothing in these terms limits liability that cannot
            lawfully be limited.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of the jurisdiction in which iSixDigitals operates.
          </p>

          <h2>Changes to these terms</h2>
          <p>
            These terms may be updated as the website changes. The date at the top of this page
            shows when they were last revised, and the version published here is the one that
            applies.
          </p>

          <h2>Contact</h2>
          {contact.email ? (
            <p>
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>.
            </p>
          ) : (
            <p>
              Questions about these terms can be sent through the{" "}
              <Link href="/contact">contact page</Link>.
            </p>
          )}
        </div>
      </section>
    </SiteShell>
  );
}
