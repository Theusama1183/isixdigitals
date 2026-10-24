import type { Metadata } from "next";

import { SiteShell, PageIntro, ContactBand, TextLink } from "@/components/site-shell";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { pageHead } from "@/lib/site-content";

const title = "Dance Studio Website Design for Schools | iSixDigitals";
const description =
  "Website design for dance studios and schools: timetables that work on a phone, clear trial class booking and separate paths for parents and adults.";

export const metadata: Metadata = pageHead(title, description, "/studios/dance");

const faq = [
  {
    question: "Do we need to move off our current platform?",
    answer:
      "Not necessarily. If your current platform can show a clear timetable, separate the three kinds of enquiry and load quickly on a phone, the work is in structure and content rather than in switching. If it cannot, moving is worth discussing. I will tell you which applies once I have seen what you have now.",
  },
  {
    question: "Can you work with our existing timetable software?",
    answer:
      "In most cases the site links to or embeds the booking or registration tool you already use. Name the software in your project brief and I will confirm what it supports before anything is agreed.",
  },
  {
    question: "How long does a studio website take?",
    answer:
      "It depends on how many classes and pages the site needs, how ready your content is and which booking tool is involved. I give a timeline after reading your brief, once I know those three things.",
  },
  {
    question: "What do you need from us?",
    answer:
      "Your class list with levels and age ranges, the current timetable, fees, teacher details, photographs and the name of any booking or registration software. Rough notes are fine for most of it. I will ask for whatever is missing.",
  },
  {
    question: "Can we update the timetable ourselves?",
    answer:
      "That depends on how the timetable is built, and it is decided early, based on how often your classes change and who on your team will do the editing. A timetable that is hard to change goes out of date, so I treat this as a design requirement.",
  },
  {
    question: "Should adult and children’s classes sit on the same site?",
    answer:
      "Yes, on separate paths. Children’s, adult and vocational classes get their own sections, so a parent never has to scan past adult evening classes to find an age group, and an adult student never has to read through children’s listings.",
  },
];

export default function DanceStudios() {
  return (
    <SiteShell>
      <JsonLd
        id="studios-dance-schema"
        data={graph([
          webPageSchema({
            path: "/studios/dance",
            name: title,
            description,
            type: "Service",
            breadcrumb: breadcrumbSchema({
              path: "/studios/dance",
              name: "Dance studio website design",
            }),
          }),
          breadcrumbSchema({
            path: "/studios",
            name: "Who we work with",
          }),
          breadcrumbSchema({
            path: "/studios/dance",
            name: "Dance studio website design",
          }),
        ])}
      />
      <PageIntro
        label="Dance studios & schools"
        title={<>Dance studio website design built around the timetable</>}
      >
        This page is for dance studio owners and school principals who need a website that
        helps a new student choose a class and book it. Most dance studio websites go wrong
        in the same three places: the timetable, the levels and the first class.
      </PageIntro>
      <article className="section section-inner prose max-w-4xl">
        <h2>What a dance studio website has to do</h2>
        <p>A dance studio website has five jobs. If it does these well, most of the rest follows.</p>
        <ol>
          <li>
            <strong>Help a new student find the right class and level.</strong> Someone arriving
            cold does not know whether they are Beginner, Grade 2 or Intermediate. Every class
            needs a plain description of who it is for, what happens in the room and what
            experience is expected.
          </li>
          <li>
            <strong>Make the timetable legible on a phone.</strong> Timetables get checked on
            phones, often in a hurry. If the timetable only works on a desktop screen, it is not
            working.
          </li>
          <li>
            <strong>Explain what a trial class involves.</strong> First-time students and parents
            want to know what to wear, how long it lasts, whether they can watch and what
            happens afterwards. Answer those before they have to ask.
          </li>
          <li>
            <strong>Separate adult classes, children’s classes and vocational training.</strong>{" "}
            These audiences have different questions, different schedules and different reasons
            to choose you. One mixed list makes all three harder to read.
          </li>
          <li>
            <strong>Give parents and adult students different paths.</strong> A parent is looking
            for an age group, a safe environment and a time that fits around school. An adult
            student is looking for a level, an evening slot and a low-pressure first visit. One
            route through the site cannot serve both well.
          </li>
        </ol>

        <h2>The pages a dance studio actually needs</h2>
        <p>
          Website design for dance studios is not the generic home, about, services and contact
          set. These are the pages that carry the weight:
        </p>
        <ul>
          <li>
            <strong>Home:</strong> who the studio is for, the class types on offer, and direct
            routes to the timetable and to booking a first class.
          </li>
          <li>
            <strong>Timetable and classes:</strong> every class by day, age group and level,
            filterable, and readable on a phone.
          </li>
          <li>
            <strong>Class detail:</strong> one page per class or class family, covering level,
            age range, what to wear, the teacher and the booking route.
          </li>
          <li>
            <strong>About and teachers:</strong> who teaches, their training and the studio’s
            approach, written for a nervous parent as much as a keen dancer.
          </li>
          <li>
            <strong>Fees:</strong> what a trial class, a drop-in and a term cost, stated plainly,
            or a clear way to ask when fees vary.
          </li>
          <li>
            <strong>Trial class booking:</strong> a short form built for first-time students
            only.
          </li>
          <li>
            <strong>Contact:</strong> location, access and parking, and a way to ask a general
            question.
          </li>
        </ul>

        <h2>Timetables, levels and the mobile problem</h2>
        <p>Three failures turn up again and again on dance studio websites.</p>
        <h3>The PDF timetable</h3>
        <p>
          A PDF has to be downloaded, pinched and zoomed. It cannot be filtered by age or level,
          it cannot link to a class page, and it goes out of date the moment a class changes. A
          visitor on a phone will often give up before finding their class.
        </p>
        <h3>The grid that breaks on a phone</h3>
        <p>
          A seven-column week grid works on a large screen. On a phone it either shrinks until
          it cannot be read or scrolls sideways and hides most of the week. The fix is a
          different layout, not a smaller grid. On small screens, show the timetable one day at
          a time or as a list grouped by day, with filters for age group and level, and let
          each class open its own detail page.
        </p>
        <h3>Levels with no explanation</h3>
        <p>
          “Level 2” means something different in every studio. Describe each level by what a
          dancer can already do, and say how a student moves up. A newcomer should be able to
          place themselves without phoning the front desk.
        </p>
        <p>
          Behind all three sits one rule: the timetable lives in one place and is shown wherever
          it is needed. If you are weighing a template against a custom build, see{" "}
          <TextLink to="/notes/dance-studio-website-templates">
            what dance studio website templates get wrong
          </TextLink>
          .
        </p>

        <h2>Trial classes and enquiries</h2>
        <p>
          A dance studio receives three different kinds of enquiry, and each needs its own
          handling.
        </p>
        <ul>
          <li>
            <strong>A trial booking</strong> needs a class, a date, the student’s age and any
            experience. It should take a minute.
          </li>
          <li>
            <strong>A term registration</strong> needs fuller details: contact information,
            emergency contacts, medical notes and consent, usually collected through the
            registration tool the studio already uses.
          </li>
          <li>
            <strong>A general question</strong> needs a message box and nothing else.
          </li>
        </ul>
        <p>
          One form cannot serve all three. A trial form that asks for medical and emergency
          details puts people off at the moment they are least committed. A single contact form
          used for bookings leaves the studio chasing missing details by email.
        </p>
        <p>
          The better structure is separate routes. A “book a trial class” button sits on every
          class page. Registration links go to the right tool for that class, with the class
          already chosen. A short contact form handles everything else.
        </p>

        <h2>What working together looks like</h2>
        <p>
          iSixDigitals is a one-person practice run by Usama Adeel, and I have worked with
          studios since 2021. You deal with the person doing the work from the first
          conversation to launch. The sequence of a project is set out on{" "}
          <TextLink to="/process">how a project runs</TextLink>.
        </p>
        <p>
          Scope is decided after I have read your project brief: how many classes, age groups
          and teachers you have, which booking or registration tool you use, and how much of
          the content is ready. I do not state prices on this page because the work differs too
          much between a single-room school and a studio with several programmes.
        </p>

        <h2>Questions dance studios ask</h2>
        <div className="faq-section">
          {faq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>

        <p>
          If you run a dance studio and want the website to handle the timetable, the trial
          class and the enquiry properly,{" "}
          <TextLink to="/contact">send a project brief</TextLink>.
        </p>
      </article>
      <ContactBand />
    </SiteShell>
  );
}
