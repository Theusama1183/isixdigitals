import type { Metadata } from "next";

import { SiteShell, PageIntro, ContactBand, TextLink } from "@/components/site-shell";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { pageHead } from "@/lib/site-content";

const title = "Videographer Portfolio Website Design | iSixDigitals";
const description =
  "Portfolio websites for videographers, filmmakers and photographers. Fast reels, work grouped by what clients hire for, and one clear way to enquire.";

export const metadata: Metadata = pageHead(title, description, "/studios/film");

const faq = [
  {
    question: "Can you work with the reels we already have on Vimeo?",
    answer:
      "Yes. Reels hosted on Vimeo or YouTube can be embedded in the site, so there is no need to upload them again. I set how they load so the page stays fast.",
  },
  {
    question: "How do you handle large image and video files?",
    answer:
      "Images are resized and compressed into several versions so each device downloads only what it needs. Video is usually best left with a video host, with the site loading the player when a visitor chooses to watch.",
  },
  {
    question: "Do we need to host video ourselves?",
    answer:
      "Usually not. A video host handles streaming, different connection speeds and different devices better than a standard web host. Self-hosting can make sense for short silent loops. I will say which applies to your work.",
  },
  {
    question: "Can the site handle client login or screener links?",
    answer:
      "Private screener links are straightforward: an unlisted or password-protected video, linked from a page that is not in the navigation. A full client login area is a larger piece of work. Tell me what it needs to do and I will say whether it is the right tool for that.",
  },
  {
    question: "How long does it take?",
    answer:
      "It depends on how many projects and pages the site needs, how ready your content is and whether you want video, photography or both. I give a timeline after reading your brief.",
  },
  {
    question: "Can we add new projects ourselves?",
    answer:
      "That is decided during the build, based on how often you add work and who will do it. I plan for it as a requirement, because a portfolio that is hard to update stops being updated.",
  },
];

export default function FilmStudios() {
  return (
    <SiteShell>
      <JsonLd
        id="studios-film-schema"
        data={graph([
          webPageSchema({
            path: "/studios/film",
            name: title,
            description,
            type: "Service",
            breadcrumb: breadcrumbSchema({
              path: "/studios/film",
              name: "Videographer portfolio website design",
            }),
          }),
          breadcrumbSchema({
            path: "/studios",
            name: "Who we work with",
          }),
          breadcrumbSchema({
            path: "/studios/film",
            name: "Videographer portfolio website design",
          }),
        ])}
      />
      <PageIntro
        label="Film, video & photography"
        title={<>A videographer portfolio website built to win project enquiries</>}
      >
        You make good work and your website does not show it. Clients find you through
        Instagram or Vimeo, send a message, and the conversation starts without the
        information either side needs.
      </PageIntro>
      <article className="section section-inner prose max-w-4xl">
        <h2>Why a reel alone does not win the project</h2>
        <p>
          A reel answers one question: can this person make good work? The person watching it is
          asking several more. Do you handle projects like theirs? Is your work in the right
          range for their budget? Are you free when they need you? Can you deliver the formats
          they require?
        </p>
        <p>
          A site that shows only a reel leaves those questions to a back-and-forth by message.
          A site that answers them in advance tends to get enquiries that arrive with more of
          the detail you need, and fewer good prospects go quiet.
        </p>

        <h2>How to structure a videographer portfolio</h2>
        <p>
          Start with how a client searches, not how you filed your hard drive. Organise projects
          by the work clients are looking for. There are three common ways to group them, and
          each has a cost.
        </p>
        <ul>
          <li>
            <strong>By client type</strong> (weddings, corporate, charity, hospitality). This
            matches how buyers think. The cost is deciding where work that fits two groups
            should live.
          </li>
          <li>
            <strong>By format</strong> (documentary, music video, brand film, social cut). This
            suits people who already know what they want to commission. Many buyers do not know
            the format name for what they need.
          </li>
          <li>
            <strong>By outcome</strong> (a product launch, a fundraising appeal, an event
            recap). This is persuasive, but every project needs enough context to show the
            outcome, and that takes more writing.
          </li>
        </ul>
        <p>
          For most videographers, client type is the safest primary grouping, with format as a
          label on each project. Whatever you choose, show fewer pieces. Twelve strong projects
          serve a visitor better than sixty, because every weak piece lowers the impression of
          the strong ones.
        </p>
        <p>
          Each project page needs four things: the brief in a sentence or two, what you
          delivered, your credit and role, and the runtime. That is enough for a producer to
          judge fit without a call. The typical set of pages is home, a work index, project
          pages, about and contact.
        </p>
        <p>
          For public examples of how other videographers group and present their work, see{" "}
          <TextLink to="/notes/videographer-website-examples">
            videographer website examples
          </TextLink>
          .
        </p>

        <h2>Reels and video that behave on a phone</h2>
        <p>
          Video-led sites are heavy by nature, so the decisions that matter are decisions about
          restraint.
        </p>
        <h3>Autoplay and sound</h3>
        <p>
          A short, muted loop at the top of the page is fine on a desktop. Do not autoplay
          anything with sound. Phones and data-saving modes often block autoplay, so the page
          has to look finished without it.
        </p>
        <h3>Poster frames</h3>
        <p>
          The still image shown before a video plays is the first impression on mobile. Choose
          a frame that says what the project is, not a blurred mid-motion frame.
        </p>
        <h3>File weight</h3>
        <p>
          One embedded player is light. A work index with twenty players loading at once is not.
          Load a poster image first and the player only when someone taps it.
        </p>
        <h3>What fast means</h3>
        <p>
          For a video site, fast means the visitor can see work and use the navigation quickly.
          It does not mean the video file is small. Reels and image galleries must stay fast
          and accessible, which includes captions or transcripts where the work depends on
          dialogue, and controls that work from a keyboard.
        </p>
        <h3>Runtime</h3>
        <p>
          On a landing page, a 90-second showreel does more than a six-minute one. Visitors
          give a page seconds, not minutes. Keep the longer cut on its own page for people
          who want to keep watching.
        </p>
        <p>
          Photographers have the same problem with images: serve sizes that suit the screen,
          load images below the fold as the visitor scrolls, and write real alt text.
        </p>

        <h2>Turning a portfolio into an enquiry</h2>
        <p>
          Project enquiries need a clear place to begin. A production client needs three things
          before they write to you.
        </p>
        <ol>
          <li>
            <strong>Availability.</strong> A line saying whether you are taking projects, and
            roughly when.
          </li>
          <li>
            <strong>Typical project shape.</strong> What you usually make, the size of team you
            bring and the deliverables that come with it.
          </li>
          <li>
            <strong>A clear next step.</strong> One button, one form, and a sentence saying
            what happens after they send it.
          </li>
        </ol>
        <p>
          One form beats a contact page full of email addresses and social links because it can
          ask the questions you would ask anyway: the type of project, the timeline, the
          location, the deliverables and, if you want it, a budget range. You can then reply
          with something useful instead of opening with questions.
        </p>

        <h2>Film, video and photography: one page or three?</h2>
        <p>
          These kinds of work attract different clients and need different emphasis.
          Photographers need image-first galleries and licensing language. Videographers need
          reels, runtime and credits. Production companies need capabilities, past credits and
          a way to scope a larger project.
        </p>
        <p>
          If one practice does several of these, the home page has to know which visitor it is
          talking to, and the structure follows from which work leads. One undifferentiated
          page tends to serve none of them well. For a look at how photographers handle this,
          see{" "}
          <TextLink to="/notes/photography-website-examples">
            photography website examples
          </TextLink>
          .
        </p>

        <h2>What working together looks like</h2>
        <p>
          iSixDigitals is a one-person practice run by Usama Adeel, and I have worked with
          studios since 2021. You deal with the person doing the work from the first
          conversation to launch. The sequence of a project is set out on{" "}
          <TextLink to="/process">how a project runs</TextLink>.
        </p>
        <p>
          Scope is decided after I have read your project brief: whether you shoot video,
          photography or both, where your reels are hosted, how many projects the site needs
          to show and how much content is ready. I do not state prices on this page because
          those factors change the work too much.
        </p>

        <h2>Questions filmmakers ask</h2>
        <div className="faq-section">
          {faq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>

        <p>
          If you want a videographer portfolio website that brings the right project
          enquiries, <TextLink to="/contact">get in touch</TextLink> with a short brief.
        </p>
      </article>
      <ContactBand />
    </SiteShell>
  );
}
