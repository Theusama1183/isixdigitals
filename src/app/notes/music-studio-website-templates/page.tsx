import type { Metadata } from "next";

import { SiteShell, PageIntro, ContactBand, TextLink } from "@/components/site-shell";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { pageHead } from "@/lib/site-content";

const title = "Music Studio Website Templates and Booking | iSixDigitals";
const description =
  "Why most music studio website templates fail at booking, what a recording studio site needs to show, and a checklist for choosing one that works.";

export const metadata: Metadata = pageHead(title, description, "/notes/music-studio-website-templates");

export default function MusicStudioTemplates() {
  return (
    <SiteShell>
      <JsonLd
        id="notes-music-studio-templates-schema"
        data={graph([
          webPageSchema({
            path: "/notes/music-studio-website-templates",
            name: title,
            description,
            type: "Article",
            breadcrumb: breadcrumbSchema({
              path: "/notes/music-studio-website-templates",
              name: "Music studio website templates",
            }),
          }),
          breadcrumbSchema({
            path: "/studios",
            name: "Who we work with",
          }),
          breadcrumbSchema({
            path: "/notes/music-studio-website-templates",
            name: "Music studio website templates",
          }),
        ])}
      />
      <PageIntro
        label="Notes"
        title={<>Music studio website templates: why booking is where they fail</>}
      >
        If you run a recording or rehearsal studio, a template looks like the quick answer.
        Most of them are built for something else.
      </PageIntro>
      <article className="section section-inner prose max-w-4xl">
        <h2>What a recording studio site has to show</h2>
        <p>
          Someone deciding whether to book your studio is asking practical questions. They
          want to see the room before they travel to it. A studio site needs to cover five
          things.
        </p>
        <ul>
          <li>
            <strong>The rooms.</strong> Photographs, dimensions, and what each room suits:
            tracking a full band, vocals, mixing, podcast recording or rehearsal. If you have
            several rooms, they should be easy to compare.
          </li>
          <li>
            <strong>The equipment.</strong> What is installed, what can be brought in and what
            is available on request. Keep to what a booker cares about, and skip a catalogue
            of every cable.
          </li>
          <li>
            <strong>Rates or a quote path.</strong> Publish rates if they are stable and
            simple. If they depend on the project, give a clear &ldquo;request a quote&rdquo; route that
            asks the questions you need answered.
          </li>
          <li>
            <strong>Availability.</strong> How a visitor finds out when a room is free, and
            how far ahead they should ask.
          </li>
          <li>
            <strong>House rules.</strong> Arrival and load-in, cancellations, noise and
            access, and anything a first-time client should know before turning up.
          </li>
        </ul>
        <p>
          A studio that answers these on the site answers fewer of the same questions by
          email.
        </p>

        <h2>Why most studio templates fail at booking</h2>
        <p>
          Templates are designed around what most buyers of templates are: bands and solo
          artists. Their natural content is music to play, shows to attend and merchandise to
          sell. A studio’s natural content is rooms, dates and specifications. The structure
          does not match, and the gaps appear in predictable places.
        </p>
        <h3>The layout is about listening, not booking</h3>
        <p>
          The strongest element on the page is usually a player or a video. A booker has to
          scroll past it to find out whether a room is available.
        </p>
        <h3>Rooms cannot be compared</h3>
        <p>
          Templates tend to present one venue or one act. If you have a live room, a vocal
          booth and a rehearsal space, you need a way to put them side by side, with specs,
          photographs and suitable uses.
        </p>
        <h3>The contact form is generic</h3>
        <p>
          A name, an email address and a message box does not separate a session booking from
          a workshop signup or a collaboration pitch. These are different people who need
          different replies. A single form leaves you sorting them by hand.
        </p>
        <h3>Booking widgets assume a simple appointment</h3>
        <p>
          Some templates include a calendar or appointment tool. These are often built for
          fixed-length appointments, not for sessions that involve an engineer, extra hours,
          equipment requests or a deposit. Check that the tool matches how you actually take
          bookings.
        </p>
        <h3>There is nowhere for preparation</h3>
        <p>
          A first-time client benefits from knowing what to bring, how long to allow and what
          to decide beforehand. Templates rarely have a natural place for that, so it ends up
          in a long email.
        </p>

        <h2>What to look for instead</h2>
        <p>
          If you are choosing a template anyway, test it against this checklist. Open the demo
          on a phone first.
        </p>
        <ul>
          <li>Can you give each room its own section with photographs, specs and suitable uses?</li>
          <li>Can you add an equipment list that is easy to scan?</li>
          <li>Is there a clear place for rates, or for a quote request with the right questions?</li>
          <li>Can you show availability or explain how to ask for it?</li>
          <li>Can the form separate session bookings, workshop signups and collaborations?</li>
          <li>Is there room for house rules and preparation, away from the footer?</li>
          <li>Does the first screen help a booker, rather than only showing a player?</li>
          <li>Do the images and any video stay fast on a phone?</li>
        </ul>
        <p>
          A template that meets most of these can work for a small studio with simple needs.
          If several fail, the site will spend its time looking good while you answer the same
          questions by hand. In that case the work is closer to what is described under{" "}
          <TextLink to="/studios/music-art">music and art space website design</TextLink>.
        </p>
        <p>
          For a look at how individual artists structure their own sites, see{" "}
          <TextLink to="/notes/artist-website-examples">artist website examples</TextLink>.
        </p>

        <h2>Questions about music studio websites</h2>
        <div className="faq-section">
          <details>
            <summary>Do I need online booking?</summary>
            <p>
              Not always. A clear enquiry form that asks for dates, room, session length and
              what the session involves is enough for many studios. Online booking helps when
              your availability is simple and your sessions follow a fixed pattern. If
              sessions vary a lot, a good enquiry path often works better.
            </p>
          </details>
          <details>
            <summary>Should I publish my rates?</summary>
            <p>
              If your rates are stable and simple, yes. It saves time for both sides. If they
              depend on the project, explain what affects the price and give a quote route, so
              visitors know what to expect.
            </p>
          </details>
          <details>
            <summary>Can a template handle several rooms?</summary>
            <p>
              Some can, but many present a single venue. Check whether you can give each room
              its own page or section, with separate photographs, specs and uses, before you
              commit.
            </p>
          </details>
        </div>
      </article>
      <ContactBand />
    </SiteShell>
  );
}
