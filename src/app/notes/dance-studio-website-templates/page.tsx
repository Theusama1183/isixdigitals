import type { Metadata } from "next";

import { SiteShell, PageIntro, ContactBand, TextLink } from "@/components/site-shell";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { pageHead } from "@/lib/site-content";

const title = "Dance Studio Website Templates: What to Check | iSixDigitals";
const description =
  "Dance studio website templates often ship a generic classes page. Here is what to check for timetables, levels and trial class booking on a phone.";

export const metadata: Metadata = pageHead(title, description, "/notes/dance-studio-website-templates");

export default function DanceStudioTemplates() {
  return (
    <SiteShell>
      <JsonLd
        id="notes-dance-studio-templates-schema"
        data={graph([
          webPageSchema({
            path: "/notes/dance-studio-website-templates",
            name: title,
            description,
            type: "Article",
            breadcrumb: breadcrumbSchema({
              path: "/notes/dance-studio-website-templates",
              name: "Dance studio website templates",
            }),
          }),
          breadcrumbSchema({
            path: "/studios",
            name: "Who we work with",
          }),
          breadcrumbSchema({
            path: "/notes/dance-studio-website-templates",
            name: "Dance studio website templates",
          }),
        ])}
      />
      <PageIntro
        label="Notes"
        title={<>Dance studio website templates: what to check before you buy</>}
      >
        A dance studio website template looks finished in the demo. The problems start when
        your real timetable goes in and a real parent tries to book a trial class on a
        phone.
      </PageIntro>
      <article className="section section-inner prose max-w-4xl">
        <h2>What a dance studio template usually ships</h2>
        <p>
          Most templates follow the same pattern. There is a home page with a large image, a
          classes page that lists each class as a card, a gallery, a page for teachers and a
          contact page with a form. That structure suits many small businesses. A dance
          studio has a few jobs it does not cover.
        </p>
        <p>
          A studio needs a timetable that people can actually read, a way to explain levels,
          a route for trial classes that differs from term registration, and separate paths
          for parents and adult students. These are the places where templates tend to give
          out.
        </p>

        <h2>Where dance studio templates fail</h2>
        <h3>The classes page is not a timetable</h3>
        <p>
          A list of class cards tells a visitor what you teach. It does not tell them when.
          If the template includes a timetable block, it is usually a week grid designed for
          a wide screen. On a phone that grid either shrinks until it cannot be read or
          scrolls sideways and hides most of the week. A visitor who cannot find a Tuesday
          evening class in a few seconds will often leave.
        </p>
        <p>
          A timetable that survives a phone shows one day at a time or a list grouped by
          day, lets people filter by age group and level, and links each slot to a class
          page.
        </p>
        <h3>Levels have nowhere to live</h3>
        <p>
          Templates have fields for a title and a description. They rarely have fields for
          level, age range or what a student needs to be able to do before joining. Studios
          end up squeezing these into the description, where they are inconsistent and easy
          to miss. A newcomer then has to phone the front desk to find out whether a class is
          right for them.
        </p>
        <h3>One form for every enquiry</h3>
        <p>
          A dance studio gets trial bookings, term registrations and general questions. The
          first needs a class, a date, an age and any experience. The second needs full
          contact details, emergency contacts, medical notes and consent. The third needs a
          message box. A single contact form cannot do all three. A form that asks for too
          much frightens off first-time visitors, and one that asks for too little leaves
          you chasing details by email.
        </p>
        <h3>Parents and adults share one path</h3>
        <p>
          Templates have a flat navigation: home, classes, about, contact. A parent looking
          for a children’s class has to scan past adult evening classes and vocational
          training, and an adult beginner has to scan past the children’s programme.
          Different audiences need different routes into the same site.
        </p>
        <h3>The booking tool does not connect</h3>
        <p>
          Many studios already use software for registration, payments or class booking. A
          template may not embed it cleanly, or may force a link to a separate site that
          looks different. The class page and the booking tool should feel like one journey,
          with the class already chosen when the visitor arrives.
        </p>

        <h2>What to check before you choose</h2>
        <p>Open the demo on a phone, and do these in order.</p>
        <ol>
          <li>
            <strong>Put in your real timetable.</strong> Use your actual classes, including
            the busiest day. See what happens to the layout.
          </li>
          <li>
            <strong>Look at the timetable on a phone.</strong> Can you read a whole day
            without zooming or scrolling sideways?
          </li>
          <li>
            <strong>Check for filters.</strong> Can a visitor narrow the timetable by age
            group and level?
          </li>
          <li>
            <strong>Check that each class can open its own page.</strong> That page should
            hold the level, age range, what to wear, the teacher and the booking route.
          </li>
          <li>
            <strong>Find where levels go.</strong> There should be a proper place for level
            and age range, not only a free-text description.
          </li>
          <li>
            <strong>Look at the form.</strong> Can you build a short trial form that is
            separate from the contact form? Can you add a registration route that goes to
            your existing tool?
          </li>
          <li>
            <strong>Test your booking software.</strong> Find out whether it embeds or links
            cleanly, and what the visitor sees when they arrive.
          </li>
          <li>
            <strong>Check the navigation.</strong> Can you give children’s, adult and
            vocational classes their own sections?
          </li>
          <li>
            <strong>Check how you edit the timetable.</strong> If a class changes, how many
            places do you have to update?
          </li>
          <li>
            <strong>Check page speed on a phone.</strong> Photographs are heavy in dance
            sites, so see how long it takes before the timetable appears.
          </li>
        </ol>
        <p>
          A template that meets most of these can serve a small studio with a simple
          timetable. If it fails several, the timetable will go out of date, the enquiries
          will arrive without the information you need, and you will end up fixing the site
          by hand.
        </p>

        <h2>When a template is enough and when it is not</h2>
        <p>
          A template is a sensible choice when you run a small number of classes, your
          timetable changes rarely, and your enquiries are simple. Be honest about the
          trade: you accept the template’s structure, and you work around its limits.
        </p>
        <p>
          A custom build is worth discussing when you have several age groups and
          programmes, when your timetable changes each term, when trial bookings and
          registrations need separate handling, or when you want the site to connect
          properly to your booking tool. That work is described on the page about{" "}
          <TextLink to="/studios/dance">dance studio website design</TextLink>. For the wider
          choice between ready-made and built-to-fit, see{" "}
          <TextLink to="/notes/photography-website-templates">
            template, builder or custom build
          </TextLink>
          .
        </p>

        <h2>Questions about dance studio website templates</h2>
        <div className="faq-section">
          <details>
            <summary>Can a template show a timetable properly?</summary>
            <p>
              Some can, if the timetable block adapts to small screens and lets visitors
              filter by age and level. Many cannot. Put your real timetable into the demo and
              look at it on a phone before you decide.
            </p>
          </details>
          <details>
            <summary>Can I take trial class bookings with a template?</summary>
            <p>
              It depends on the form tools. You need a short trial form that is separate from
              your general contact form, and ideally one that records the class and date. If
              the template only supports one contact form, you will need a workaround or a
              different tool.
            </p>
          </details>
          <details>
            <summary>Does a template save money?</summary>
            <p>
              It usually costs less to start, because there is no design stage. The cost shows
              up later if the timetable needs constant manual updating or if enquiries arrive
              without the details you need. Weigh the starting cost against the time you will
              spend running it.
            </p>
          </details>
        </div>
      </article>
      <ContactBand />
    </SiteShell>
  );
}
