import type { Metadata } from "next";

import { SiteShell, PageIntro, ContactBand, TextLink } from "@/components/site-shell";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { pageHead } from "@/lib/site-content";

const title = "Website Design for Artists and Music Spaces | iSixDigitals";
const description =
  "Website design for artists, recording studios and art spaces: portfolios that organise a body of work, and booking paths for sessions and workshops.";

export const metadata: Metadata = pageHead(title, description, "/studios/music-art");

const faq = [
  {
    question: "How do I start an artist website?",
    answer:
      "Make three decisions first: who you want to reach, which selection of your strongest work represents you, and what you want a visitor to do. Then gather images and captions before design begins. A site built from finished material goes much faster than one built around gaps.",
  },
  {
    question: "What should an artist website include?",
    answer:
      "Selected work with captions, a short statement about you and the work, a CV or exhibition list, and a clear way to make contact. Add commission information or a shop only if they match how you actually work.",
  },
  {
    question: "Do I need a shop or can I take commissions by email?",
    answer:
      "If each piece is unique or you work mainly on commission, an enquiry route usually serves you better than a shop. A shop makes sense when you have works or editions at fixed prices and can pack and ship them reliably.",
  },
  {
    question: "Can I update the portfolio myself?",
    answer:
      "That is decided during the build, based on how often you add work and who will do it. I plan for it as a requirement, because a portfolio that is awkward to update tends to fall behind.",
  },
  {
    question: "How many works should I show?",
    answer:
      "Fewer than you think. Enough to show range and consistency, without burying the strongest pieces. A selected set at the front with the archive one click behind works for many artists.",
  },
  {
    question: "Do I need new photography of my work?",
    answer:
      "Often yes. Photos taken in uneven light or at an angle undersell the work. They do not need to be elaborate, but they need to be sharp, consistent and true to colour. I can tell you what is usable once I have seen what you have.",
  },
];

export default function MusicArt() {
  return (
    <SiteShell>
      <JsonLd
        id="studios-music-art-schema"
        data={graph([
          webPageSchema({
            path: "/studios/music-art",
            name: title,
            description,
            type: "Service",
            breadcrumb: breadcrumbSchema({
              path: "/studios/music-art",
              name: "Website design for artists and music spaces",
            }),
          }),
          breadcrumbSchema({
            path: "/studios",
            name: "Who we work with",
          }),
          breadcrumbSchema({
            path: "/studios/music-art",
            name: "Website design for artists and music spaces",
          }),
        ])}
      />
      <PageIntro
        label="Music, art & creative spaces"
        title={
          <>Website design for artists, recording studios and creative spaces</>
        }
      >
        This page is for two kinds of reader. The first is an independent artist, such as a
        painter, ceramicist, illustrator or musician, who needs a portfolio and a clear way
        to be contacted. The second runs a recording studio, rehearsal room or art space and
        needs to present a physical space and take bookings.
      </PageIntro>
      <article className="section section-inner prose max-w-4xl">
        <h2>What an artist’s website is for</h2>
        <p>
          An artist’s website is not a gallery mirror. It is where a curator, a commissioner,
          a gallery, a journalist or a customer decides whether to get in touch. That
          reframes the design. The job is not to show everything you have made. It is to let
          a stranger understand your work quickly, see that you are active, and know how to
          reach you for the thing they want.
        </p>
        <p>
          Good artist website design starts from who is visiting and what they are deciding.
          The navigation, the caption style and the page order all follow from that.
        </p>

        <h2>The portfolio problem</h2>
        <p>
          A large, changing or partly unsold body of work needs decisions made on purpose.
        </p>
        <ul>
          <li>
            <strong>Series or singles.</strong> Group by series when works belong together and
            gain from being seen together. Show singles when each piece stands alone. Mixing
            both without labels leaves a visitor unsure what they are looking at.
          </li>
          <li>
            <strong>Chronological or thematic.</strong> Chronological suits an archive and
            shows development. Thematic suits a visitor who is deciding quickly. A common
            answer is a thematic front, with the archive one click behind.
          </li>
          <li>
            <strong>Captions.</strong> Give medium, dimensions and year for every work. Add
            status (available, sold, in a collection) only if you will keep it accurate.
          </li>
          <li>
            <strong>How much text.</strong> A line or two per work, and a longer statement
            for each series where the thinking matters. Long text beside every image is
            rarely read.
          </li>
        </ul>
        <p>
          Work that is not for sale still belongs on the site. Mark it clearly so no one
          writes to ask the price. To see how other artists organise and caption their sites,
          read{" "}
          <TextLink to="/notes/artist-website-examples">
            artist website examples worth studying
          </TextLink>
          .
        </p>

        <h2>Commissions, sales and enquiries</h2>
        <p>
          An artist usually receives three kinds of enquiry: a commission, an exhibition or
          representation approach, and a purchase. They need different paths because they need
          different information.
        </p>
        <ul>
          <li>
            A <strong>commission</strong> enquiry needs the brief, size, timeline and location.
          </li>
          <li>
            An <strong>exhibition or representation</strong> enquiry needs your statement, CV
            and links to recent work.
          </li>
          <li>
            A <strong>purchase</strong> enquiry needs availability, price and shipping.
          </li>
        </ul>
        <p>
          One contact form asks none of these well. A short selector at the start of the
          enquiry works better: “I’d like to commission a work”, “I’m a curator or gallery”,
          “I’d like to buy a work”, “Something else”. Each choice leads to the right
          questions.
        </p>
        <p>
          A shop makes sense when you have works or editions at fixed prices and can pack and
          ship them reliably. It is the wrong answer when every piece is unique and
          individually priced, when your practice is mostly commissions, or when stock is
          thin. An empty or half-empty shop looks worse than an enquiry route with images and
          availability.
        </p>

        <h2>For recording, rehearsal and art spaces</h2>
        <p>
          If you run a space rather than a practice, the site has a different job: it lets a
          stranger judge a room before they visit. Show the space, equipment and services
          that matter, and leave out the rest. A bookable space needs:
        </p>
        <ul>
          <li>
            <strong>Rooms and specs:</strong> size, the live room and control room, and what
            each room suits.
          </li>
          <li>
            <strong>Equipment:</strong> what is in the room and what can be brought, limited
            to what a booker cares about.
          </li>
          <li>
            <strong>Rates or a quote path:</strong> published rates if they are stable, or a
            “request a quote” route that asks the right questions.
          </li>
          <li>
            <strong>Availability:</strong> how people find out when rooms are free, and how
            far ahead to ask.
          </li>
          <li>
            <strong>House rules:</strong> arrival and load-in, cancellations, and what is and
            is not allowed.
          </li>
        </ul>
        <p>
          Separate session enquiries from workshops and collaborations. A band booking a day
          and a musician proposing a collaboration are different people with different
          questions. Each route should explain preparation, availability and the next step
          clearly.
        </p>
        <p>
          If you are considering a ready-made theme first, see{" "}
          <TextLink to="/notes/music-studio-website-templates">
            why music studio templates struggle with bookings
          </TextLink>
          .
        </p>

        <h2>Images, video and the weight problem</h2>
        <p>
          Artists and studios upload large files. A 12 MB JPEG straight from a camera loads
          slowly on a phone, and a visitor can leave before the work appears. The fix is
          routine. Compress images, create several sizes for different screens, and load
          images lower on the page as the visitor scrolls.
        </p>
        <p>Preparation before launch prevents most delays:</p>
        <ul>
          <li>consistent photography of each work, square-on, in even light, against a neutral background</li>
          <li>final crops decided</li>
          <li>captions drafted</li>
          <li>file names that describe the work</li>
          <li>short video clips exported at a sensible size</li>
        </ul>

        <h2>What working together looks like</h2>
        <p>
          iSixDigitals is a one-person practice run by Usama Adeel, and I have worked with
          studios since 2021. You deal with the person doing the work from the first
          conversation to launch. The sequence of a project is set out on{" "}
          <TextLink to="/process">how a project runs</TextLink>.
        </p>
        <p>
          Scope is decided after I have read your project brief: whether this is a portfolio,
          a bookable space or both, how many works and rooms the site needs to show, and how
          much of the content is ready. I do not state prices on this page because those
          factors change the work too much.
        </p>

        <h2>Questions artists ask</h2>
        <div className="faq-section">
          {faq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>

        <p>
          If you are an artist or run a creative space and want a site that explains the
          work and takes the right enquiries,{" "}
          <TextLink to="/contact">send a short project brief</TextLink>.
        </p>
      </article>
      <ContactBand />
    </SiteShell>
  );
}
