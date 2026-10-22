import type { Metadata } from "next";

import { SiteShell, PageIntro, ContactBand, Eyebrow, TextLink } from "@/components/site-shell";
import { JsonLd } from "@/components/json-ld";
import { contact } from "@/lib/contact";
import { breadcrumbSchema, founderSchema, graph, webPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import { pageHead } from "@/lib/site-content";

const title = "Studio websites by Usama Adeel since 2021";
const description =
  "iSixDigitals is Usama Adeel’s studio practice: websites for film, photography, dance, music and art studios, designed and built with care since 2021.";

export const metadata: Metadata = pageHead(title, description, "/about");

export default function About() {
  return (
    <SiteShell>
      <JsonLd
        id="about-schema"
        data={graph([
          webPageSchema({
            path: "/about",
            name: `${title} | iSixDigitals`,
            description,
            type: "AboutPage",
            mainEntity: { "@id": `${SITE_URL}/about#usama-adeel` },
            breadcrumb: breadcrumbSchema({ path: "/about", name: "About" }),
          }),
          founderSchema(),
          breadcrumbSchema({ path: "/about", name: "About" }),
        ])}
      />
      <PageIntro
        label="About iSixDigitals"
        title={
          <>
            Websites for creative studios,
            <br /> <em>built by Usama Adeel.</em>
          </>
        }
      >
        Creative businesses put care into their craft. We believe their digital presence deserves
        the same attention — without losing sight of the practical things a website needs to do.
      </PageIntro>
      <section className="about-statement">
        <div className="section-inner" data-reveal>
          <Eyebrow>Our point of view</Eyebrow>
          <h2 className="mt-7">
            A website should express your studio’s personality and help people understand how to
            work with you.
          </h2>
        </div>
      </section>
      <section className="section-inner founder">
        <div>
          <Eyebrow>The person behind the work</Eyebrow>
          <h2 className="mt-6">Usama Adeel</h2>
          <p>Founder, designer, and builder at iSixDigitals.</p>
        </div>
        <div>
          <p>
            iSixDigitals started in 2021 with a pattern that kept repeating: the studios doing the
            most interesting work were often the hardest to find online. The work was there — the
            way to discover it, book it, or ask about it was not.
          </p>
          <p>
            Since then the focus has stayed narrow on purpose. Film and photography, dance and
            music, art and other creative spaces. Every project begins with the same two questions:
            what makes this studio worth paying attention to, and what should a visitor do next?
          </p>
          <p>
            I design and build each site myself, so the person you speak to on the first call is the
            person shipping the pages. Projects stay small and direct — no layers of account
            managers, and nothing added to the scope because it looked good in a proposal.
          </p>
          {contact.serviceArea && (
            <p>
              Working with studios in {contact.serviceArea} — and remotely with studios further
              away.
            </p>
          )}
        </div>
      </section>
      <section className="section section-inner">
        <div className="section-heading" data-reveal>
          <h2>
            How the work
            <br /> <em>actually happens.</em>
          </h2>
          <p>
            A studio website is not a design exercise that ends at launch. It is a working part of
            how people find you, assess your work, and decide whether to get in touch.
          </p>
        </div>
        <div className="two-col">
          <div>
            <h3>Start from the studio, not the template</h3>
            <p>
              The first conversation is about your work and the clients, students, or collaborators
              you would like more of. Page structure, tone, and imagery follow from that.
            </p>
          </div>
          <div>
            <h3>Make the practical parts invisible</h3>
            <p>
              Load speed, keyboard access, readable type on a phone, and forms that do not lose
              people halfway through. None of it is the reason someone hires you, but all of it
              decides whether they stay long enough to see the work.
            </p>
          </div>
        </div>
        <div className="section-end">
          <TextLink to="/services">What we do</TextLink>
          <TextLink to="/process">How a project runs</TextLink>
          <TextLink to="/studios">Who we work with</TextLink>
        </div>
      </section>
      <ContactBand />
    </SiteShell>
  );
}
