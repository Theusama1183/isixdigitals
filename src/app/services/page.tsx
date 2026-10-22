import type { Metadata } from "next";
import { Check } from "lucide-react";

import { SiteShell, PageIntro, ContactBand, TextLink } from "@/components/site-shell";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, graph, servicesSchema, webPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import { services, pageHead } from "@/lib/site-content";

const title = "Studio website design & redesign services";
const description =
  "Studio website design, redesign, inquiry and booking journeys, and search foundations — what each service covers, who it suits, and where to start.";

export const metadata: Metadata = pageHead(title, description, "/services");

const answers = [
  {
    question: "Which service should we start with?",
    answer:
      "It depends on what is holding the site back. If the content and structure still fit but the site feels dated or slow, a redesign is usually the shorter path. If the site cannot present your work or explain your services clearly, start with a new build. If people find you but rarely get in touch, the inquiry journey is the place to begin.",
  },
  {
    question: "Can you work with our existing booking or CRM tool?",
    answer:
      "Yes, where that tool supports links, embeds, or an API. We review what it can do first, then design the handoff so people move from your website to a booking without repeating information or guessing what happens next.",
  },
  {
    question: "What is included in a typical project?",
    answer:
      "Page design and build, mobile layouts, content structure, image preparation, accessibility checks, page titles and search descriptions, and a launch review of links, forms, and redirects. Everything included is agreed in writing before work starts.",
  },
  {
    question: "Can we improve one part of the site first?",
    answer:
      "Often, yes. A focused piece of work — a services page, a class schedule, or the inquiry path — can be scoped on its own when the rest of the site is holding up. We will say so if a partial fix would create more work later.",
  },
];

export default function Services() {
  return (
    <SiteShell>
      <JsonLd
        id="services-schema"
        data={graph([
          webPageSchema({
            path: "/services",
            name: `${title} | iSixDigitals`,
            description,
            type: "CollectionPage",
            mainEntity: { "@id": `${SITE_URL}/services#services` },
            breadcrumb: breadcrumbSchema({ path: "/services", name: "Services" }),
          }),
          servicesSchema(services),
          breadcrumbSchema({ path: "/services", name: "Services" }),
        ])}
      />
      <PageIntro
        label="Our services"
        title={
          <>
            Website design for studios,
            <br /> <em>built to work better.</em>
          </>
        }
      >
        A focused set of digital services for creative studios. Start with the changes your website
        needs, not a package full of things it doesn’t.
      </PageIntro>
      <section className="detail-section section-inner">
        {services.map((service) => (
          <article className="detail-service" key={service.number} data-reveal>
            <span>{service.number}</span>
            <div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <p className="mt-4 text-sm text-[var(--muted-foreground)]">
                <strong>Who this suits:</strong> {service.suits}
              </p>
            </div>
            <ul>
              {service.details.map((detail) => (
                <li key={detail}>
                  <Check />
                  {detail}
                </li>
              ))}
            </ul>
          </article>
        ))}
        <div className="section-end">
          <TextLink to="/process">See how a project runs</TextLink>
          <TextLink to="/studios">Find your studio type</TextLink>
          <TextLink to="/about">About the studio</TextLink>
        </div>
        <div className="faq-section">
          <h2>A few useful answers.</h2>
          {answers.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <ContactBand />
    </SiteShell>
  );
}
