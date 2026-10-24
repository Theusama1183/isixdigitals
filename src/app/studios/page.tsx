import type { Metadata } from "next";

import { SiteShell, PageIntro, ContactBand, TextLink } from "@/components/site-shell";
import { JsonLd } from "@/components/json-ld";
import { ResponsiveImage } from "@/components/responsive-image";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { pageHead } from "@/lib/site-content";

const title = "Websites for film, photo & dance studios";
const description =
  "How iSixDigitals designs websites for film and photography studios, dance schools, and music, art and creative spaces — with the pages and details each one needs.";

export const metadata: Metadata = pageHead(title, description, "/studios");

const industries = [
  {
    title: "Film & photography studios",
    href: "/studios/film" as const,
    image: { name: "studio-hero", widths: [768, 1280], width: 1920, height: 1024 },
    alt: "Professional camera in a bright film studio",
    text: "Your work needs room to speak. Your visitors also need context: what you create, who it is for, and how a project starts. We balance visual portfolios with useful information.",
    points: [
      "Organize projects by the work clients are looking for.",
      "Keep reels and image galleries fast and accessible.",
      "Give project inquiries a clear place to begin.",
    ],
  },
  {
    title: "Dance studios & schools",
    href: "/studios/dance" as const,
    image: { name: "dance-studio", widths: [480, 960], width: 1024, height: 768 },
    alt: "Two contemporary dancers rehearsing",
    text: "New students should not have to decode your timetable. Help them understand your classes, find the right level, and feel confident taking the next step.",
    points: [
      "Make styles, levels, and class schedules easy to compare.",
      "Clarify what to expect at a first or trial class.",
      "Connect class pages to the right registration or booking tool.",
    ],
  },
  {
    title: "Music, art & creative spaces",
    href: "/studios/music-art" as const,
    image: { name: "music-studio", widths: [480, 960], width: 1024, height: 768 },
    alt: "Equipment in a professional recording studio",
    text: "Whether people are booking a session, joining a workshop, or discussing a collaboration, make your space and its possibilities easy to understand.",
    points: [
      "Show the space, equipment, and services that matter.",
      "Separate session inquiries from workshops and collaborations.",
      "Explain preparation, availability, and the next step clearly.",
    ],
  },
];

export default function Studios() {
  return (
    <SiteShell>
      <JsonLd
        id="studios-schema"
        data={graph([
          webPageSchema({
            path: "/studios",
            name: `${title} | iSixDigitals`,
            description,
            type: "CollectionPage",
            breadcrumb: breadcrumbSchema({ path: "/studios", name: "Who we work with" }),
          }),
          breadcrumbSchema({ path: "/studios", name: "Who we work with" }),
        ])}
      />
      <PageIntro
        label="Who we work with"
        title={
          <>
            Websites for film, dance,
            <br /> <em>photography and music studios.</em>
          </>
        }
      >
        A creative studio website should respond to the way your audience chooses, books, and
        collaborates — not squeeze every studio into the same template. The details change by
        discipline; the fundamentals do not.
      </PageIntro>
      <section className="detail-section section-inner">
        {industries.map((studio, index) => (
          <article className="editorial-row" key={studio.title} data-reveal>
            <div className="editorial-image">
              <ResponsiveImage
                name={studio.image.name}
                widths={studio.image.widths}
                sizes="(max-width: 1000px) 100vw, 50vw"
                alt={studio.alt}
                width={studio.image.width}
                height={studio.image.height}
                parallax
                priority={index === 0}
              />
            </div>
            <div>
              <h2>
                <TextLink to={studio.href}>{studio.title}</TextLink>
              </h2>
              <p>{studio.text}</p>
              <p className="mt-4 text-sm text-[var(--muted-foreground)]">
                Typical pages: home, work/index, project pages, about, and a way to get in touch.
              </p>
              <ul>
                {studio.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="mt-6">
                <TextLink to={studio.href}>Learn more</TextLink>
              </div>
            </div>
          </article>
        ))}
      </section>
      <section className="section section-inner">
        <div className="section-heading" data-reveal>
          <h2>
            Different work.
            <br /> <em>The same three questions.</em>
          </h2>
          <p>
            Whatever the studio, visitors arrive with the same three questions: is this for me, is
            it any good, and what happens if I get in touch? A studio website is doing its job when
            all three are answered without scrolling through guesswork.
          </p>
        </div>
        <div className="process-list">
          <div className="process-step" data-reveal>
            <span className="step-number">01</span>
            <h3>Is this for me?</h3>
            <p>
              A clear first screen, plain language about who you work with, and the services or
              classes you actually offer. Specifics beat adjectives: discipline, format, location,
              level, and availability.
            </p>
          </div>
          <div className="process-step" data-reveal>
            <span className="step-number">02</span>
            <h3>Is it any good?</h3>
            <p>
              Work shown with context — the project, the brief, the result. Fast-loading images and
              reels that behave on a phone, because that is where a lot of first visits happen.
            </p>
          </div>
          <div className="process-step" data-reveal>
            <span className="step-number">03</span>
            <h3>What happens next?</h3>
            <p>
              One obvious step: an inquiry form, a booking link, a class signup, or an email
              address. Not four competing calls to action on every page.
            </p>
          </div>
        </div>
        <div className="section-end">
          <TextLink to="/services">See the services</TextLink>
          <TextLink to="/process">How a project runs</TextLink>
        </div>
      </section>
      <ContactBand />
    </SiteShell>
  );
}
