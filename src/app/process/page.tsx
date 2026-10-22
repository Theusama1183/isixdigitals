import type { Metadata } from "next";

import { SiteShell, PageIntro, ContactBand, TextLink } from "@/components/site-shell";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { pageHead } from "@/lib/site-content";

const title = "Our studio website design process";
const description =
  "From discovery and creative direction to design, build, launch checks and measurement — the four stages of an iSixDigitals studio website project.";

export const metadata: Metadata = pageHead(title, description, "/process");

const stages = [
  {
    title: "Listen & discover",
    text: "We discuss your studio, your audience, and the actions you want visitors to take. We review your current website and identify what deserves to stay and what needs to change.",
    output: "A shared understanding of priorities, scope, and the project’s next steps.",
  },
  {
    title: "Find the direction",
    text: "We shape the site structure, content priorities, and visual direction together. Your actual work and studio identity guide the decisions, rather than a generic industry template.",
    output: "A page plan, content checklist, and agreed creative direction.",
  },
  {
    title: "Design & build",
    text: "We develop the pages and visitor journeys, paying attention to mobile use, accessibility, loading speed, and purposeful animation. Feedback is collected against the agreed direction.",
    output: "A working website ready for content review and practical testing.",
  },
  {
    title: "Launch & learn",
    text: "We check forms, links, search information, and the booking journey before launch. Where measurement is included, we define useful events and a baseline for future review.",
    output: "A launch checklist and a clear plan for maintaining and evaluating the site.",
  },
];

const answers = [
  {
    question: "Who actually does the work?",
    answer:
      "Usama designs and builds each project. The person on the first call is the person writing the pages and shipping the site, which keeps decisions quick and the scope honest.",
  },
  {
    question: "How long will it take?",
    answer:
      "We agree a timeline once the scope, content readiness, and any integrations are understood — and you get it in writing before work begins. Content is usually the part that sets the pace.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Ownership, maintenance, training, and any ongoing support are agreed as part of the project scope. If something needs fixing in the weeks after launch, that is covered by the same agreement.",
  },
];

export default function Process() {
  return (
    <SiteShell>
      <JsonLd
        id="process-schema"
        data={graph([
          webPageSchema({
            path: "/process",
            name: `${title} | iSixDigitals`,
            description,
            breadcrumb: breadcrumbSchema({ path: "/process", name: "Process" }),
          }),
          breadcrumbSchema({ path: "/process", name: "Process" }),
        ])}
      />
      <PageIntro
        label="Our process"
        title={
          <>
            How a studio website
            <br /> <em>gets made.</em>
          </>
        }
      >
        The best projects are collaborative. You bring the knowledge of your studio. We bring a
        structured way to turn it into a clearer digital experience.
      </PageIntro>
      <section className="detail-section section-inner">
        {stages.map((stage, i) => (
          <article className="detail-service" key={stage.title} data-reveal>
            <span>0{i + 1}</span>
            <div>
              <h2>{stage.title}</h2>
              <p>{stage.text}</p>
            </div>
            <div>
              <p className="eyebrow">What we work toward</p>
              <p className="mt-4">{stage.output}</p>
            </div>
          </article>
        ))}
        <div className="section-end">
          <TextLink to="/services">What each service covers</TextLink>
          <TextLink to="/studios">Find your studio type</TextLink>
          <TextLink to="/about">About the studio</TextLink>
        </div>
      </section>
      <section className="section section-inner">
        <div className="section-heading" data-reveal>
          <h2>
            Fewer handoffs.
            <br /> <em>Clearer decisions.</em>
          </h2>
          <p>
            Most of the risk in a website project sits in the gaps: unclear scope, feedback that
            arrives in fragments, and nobody sure who is deciding what. Three simple agreements take
            most of that away.
          </p>
        </div>
        <div className="process-list">
          <div className="process-step" data-reveal>
            <span className="step-number">01</span>
            <h3>Everything in writing</h3>
            <p>
              Scope, cost, and timeline are agreed before work starts — including what is not
              included. If something changes mid-project, the effect on both time and cost is
              written down first.
            </p>
          </div>
          <div className="process-step" data-reveal>
            <span className="step-number">02</span>
            <h3>One point of contact</h3>
            <p>
              You speak to the person designing and building the site — usually{" "}
              <TextLink to="/about">Usama Adeel</TextLink>. No relaying decisions through a third
              party.
            </p>
          </div>
          <div className="process-step" data-reveal>
            <span className="step-number">03</span>
            <h3>Feedback at agreed points</h3>
            <p>
              Rather than an open-ended stream of changes, feedback happens at agreed stages,
              against the shared direction. It keeps the work focused and the timeline realistic.
            </p>
          </div>
        </div>
        <div className="faq-section">
          <h2>Before we begin.</h2>
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
