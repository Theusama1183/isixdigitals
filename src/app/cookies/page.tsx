import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { contact } from "@/lib/contact";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { pageHead } from "@/lib/site-content";

const title = "Cookie policy";
const description =
  "This website does not set cookies of its own, uses no analytics or advertising scripts, and serves fonts and images from the site itself.";

export const metadata: Metadata = pageHead(title, description, "/cookies");

export default function Cookies() {
  return (
    <SiteShell>
      <JsonLd
        id="cookies-schema"
        data={graph([
          webPageSchema({
            path: "/cookies",
            name: `${title} | iSixDigitals`,
            description,
            breadcrumb: breadcrumbSchema({ path: "/cookies", name: "Cookies" }),
          }),
          breadcrumbSchema({ path: "/cookies", name: "Cookies" }),
        ])}
      />
      <PageIntro label="Legal" title="Cookie policy.">
        What this site stores in your browser — which, at the moment, is nothing.
      </PageIntro>
      <section className="section-inner legal-section">
        <div className="legal-body">
          <p className="legal-meta">Last updated 22 October 2026</p>

          <h2>The short version</h2>
          <p>
            This website does not set cookies of its own. There are no analytics, advertising, or
            tracking scripts, no social media embeds, and nothing written to local or session
            storage. That is why you will not see a cookie banner here — there is nothing to consent
            to.
          </p>

          <h2>What cookies are</h2>
          <p>
            A cookie is a small text file a website asks your browser to store. Cookies are often
            used to keep you signed in, remember preferences, or measure how people move through a
            site. Similar storage — local storage and session storage — lives in your browser
            without being sent back with each request.
          </p>

          <h2>What this site uses</h2>
          <ul>
            <li>No first-party cookies for analytics, preferences, or tracking.</li>
            <li>No third-party cookies from advertising or social networks.</li>
            <li>No local or session storage of your details or browsing behaviour.</li>
            <li>
              Typefaces and images are served from this site, not from external font or image
              networks, so loading a page does not contact third parties.
            </li>
          </ul>
          <p>
            Smooth scrolling and the reveal animations on this site run entirely in the page. They
            respect your reduced-motion setting and do not record anything about your visit.
          </p>

          <h2>Cookies that may still appear</h2>
          <p>
            The service that hosts and delivers this website may set strictly necessary cookies for
            security or traffic management — for example bot protection — depending on where the
            site is deployed. Those cookies are not used to profile you or to target advertising,
            and they are controlled by the hosting provider rather than by iSixDigitals.
          </p>
          <p>
            Links to other services, such as an email provider, a phone link, or an optional
            scheduling tool, take you to a different website. Those sites set their own cookies and
            their own policies apply.
          </p>

          <h2>If this changes</h2>
          <p>
            If a tool that uses cookies is ever added — analytics, a scheduling embed, or a payment
            provider, for example — this page will list it, explain what it does, and a consent
            control will appear where the law requires one. The date at the top of this page will be
            updated at the same time.
          </p>

          <h2>Managing cookies in your browser</h2>
          <p>
            You can view, block, and delete cookies and site data from your browser&apos;s settings.
            Because this site does not rely on cookies, blocking them will not affect what you can
            read here. Clearing site data removes nothing belonging to this website, since none is
            stored.
          </p>
          <p>
            More detail about the information this site does and does not handle is in the{" "}
            <Link href="/privacy">privacy policy</Link>.
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
