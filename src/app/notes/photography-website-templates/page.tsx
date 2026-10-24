import type { Metadata } from "next";

import { SiteShell, PageIntro, ContactBand, TextLink } from "@/components/site-shell";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { pageHead } from "@/lib/site-content";

const title = "Photography Website Templates: Honest Guide | iSixDigitals";
const description =
  "What photography website templates give you, where they break down, and a ten-minute test for judging one before you spend your money on it.";

export const metadata: Metadata = pageHead(title, description, "/notes/photography-website-templates");

export default function PhotographyTemplates() {
  return (
    <SiteShell>
      <JsonLd
        id="notes-photography-templates-schema"
        data={graph([
          webPageSchema({
            path: "/notes/photography-website-templates",
            name: title,
            description,
            type: "Article",
            breadcrumb: breadcrumbSchema({
              path: "/notes/photography-website-templates",
              name: "Photography website templates",
            }),
          }),
          breadcrumbSchema({
            path: "/studios",
            name: "Who we work with",
          }),
          breadcrumbSchema({
            path: "/notes/photography-website-templates",
            name: "Photography website templates",
          }),
        ])}
      />
      <PageIntro
        label="Notes"
        title={<>Photography website templates: what you get and what you give up</>}
      >
        A template is the fastest way to get a photography website live. It is also the
        choice that most often disappoints once the first enquiries arrive.
      </PageIntro>
      <article className="section section-inner prose max-w-4xl">
        <h2>What a photography template actually gives you</h2>
        <p>
          A template gives you a finished layout on a platform that hosts it, usually with a
          handful of colour and font options. For a photographer who needs to be online soon,
          that has real value.
        </p>
        <p><strong>What you get:</strong></p>
        <ul>
          <li>
            <strong>Speed.</strong> You can have something live much sooner than with a custom
            build, because the structure already exists.
          </li>
          <li>
            <strong>A lower starting cost.</strong> There is no design stage to pay for, and
            updates to the underlying software come from the provider.
          </li>
          <li>
            <strong>A tested layout.</strong> Responsive behaviour, basic accessibility and
            browser quirks have mostly been handled by someone else.
          </li>
        </ul>
        <p><strong>What you give up:</strong></p>
        <ul>
          <li>
            <strong>Distinctiveness.</strong> Other photographers can pick the same template.
            Clients who browse several sites in a week notice it.
          </li>
          <li>
            <strong>Control over structure.</strong> The template decides how many levels of
            navigation you have, how galleries are arranged and what the contact page looks
            like. Those decisions were made for a generic photographer.
          </li>
          <li>
            <strong>Enquiry logic.</strong> Most templates ship a contact form with a name, an
            email address and a message box. That is rarely enough for a booking.
          </li>
        </ul>
        <p>
          What you are buying is a layout, not a plan for how a visitor becomes an enquiry.
          If your work is simple and your enquiries are simple, a layout may be all you need.
          If not, the gaps show up quickly.
        </p>

        <h2>Where templates break down</h2>
        <h3>Tall galleries on mobile</h3>
        <p>
          Many photography templates stack images in one long column on a phone. A gallery of
          forty images becomes forty screens of scrolling, often with every image loading at
          once. Visitors stop before the end, and the best work is usually not at the top.
          Better handling groups images into smaller sets, loads them as the visitor scrolls
          and offers thumbnails that open a larger view.
        </p>
        <h3>No project context</h3>
        <p>
          A grid of images does not say what the shoot was, who it was for, where it took
          place or how the pictures were used. A wedding client wants to see a whole day. A
          commercial client wants to see a brief and the deliverables. An editorial client
          wants to see where the work appeared. Template galleries are built to hold images,
          not projects, so the context has nowhere to go.
        </p>
        <h3>No booking path</h3>
        <p>
          A photographer needs different information depending on the job. A wedding needs a
          date, a venue and a rough guest count. A commercial job needs usage, licence length
          and a deadline. A portrait session needs a session type and a location. A name, an
          email address and a message box produces a first reply that is a list of questions,
          and some visitors will not wait for it.
        </p>
        <h3>Demo images flatter the layout</h3>
        <p>
          Template demos use images chosen and cropped to suit the design. Your own set will
          include portrait and landscape frames, a few weaker pictures and some awkward crops.
          A template that looks balanced with the demo content can look uneven with yours.
          That is why the test below starts by putting your own images in.
        </p>

        <h2>How to judge a template in ten minutes</h2>
        <p>
          You can learn most of what you need before committing. Run these checks in order, on
          a phone where you can.
        </p>
        <ol>
          <li>
            <strong>Open the demo on your phone, not on the desktop preview.</strong> Scroll the
            main gallery and the work index. Note where it becomes tiring.
          </li>
          <li>
            <strong>Put your own images in.</strong> Use a mix of portrait and landscape
            frames, including your weakest crops. See how the layout copes.
          </li>
          <li>
            <strong>Try a gallery of forty images and one of twelve.</strong> Check that
            neither feels wrong, and that a short gallery does not leave a large empty space.
          </li>
          <li>
            <strong>Count the taps from a gallery to a message.</strong> If a visitor who
            likes a picture has to hunt for the contact page, the enquiry path is weak.
          </li>
          <li>
            <strong>Look at the form.</strong> Can you add fields for date, location, project
            type or usage? If the form cannot change, your enquiries will arrive without the
            detail you need.
          </li>
          <li>
            <strong>Check page weight on a slow connection.</strong> Use a free speed test and
            a throttled mobile setting. Pay attention to how long it takes before you can see
            an image and use the menu.
          </li>
          <li>
            <strong>Check alt text and keyboard use.</strong> You should be able to add a
            description to each image, and you should be able to move through the navigation
            without a mouse.
          </li>
          <li>
            <strong>Find a place for licensing and usage language.</strong> Commercial and
            editorial photographers need somewhere to say how work can be used. If there is
            no natural place, you will end up bolting it on.
          </li>
          <li>
            <strong>Check your exit.</strong> Find out whether you can export your images and
            text if you leave the platform. Moving later is easier when you can take your
            content with you.
          </li>
          <li>
            <strong>Write real copy for each block.</strong> If you would have to pad the
            layout with filler to make it look full, the structure does not match what you
            have to say.
          </li>
        </ol>
        <p>
          A template that passes most of these is a reasonable choice. One that fails three or
          four is probably costing you enquiries.
        </p>

        <h2>Template, builder or custom build</h2>
        <p>
          There are three routes. A template is a ready-made theme on a platform. A builder
          is a platform where you assemble your own pages with design tools. A custom build
          is a site designed around your work and your enquiries.
        </p>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Template</th>
                <th>Builder</th>
                <th>Custom build</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Speed to launch</td>
                <td>Fastest</td>
                <td>Fast</td>
                <td>Slowest</td>
              </tr>
              <tr>
                <td>Control over structure</td>
                <td>Low</td>
                <td>Medium</td>
                <td>Full</td>
              </tr>
              <tr>
                <td>Enquiry logic</td>
                <td>The form as supplied</td>
                <td>Depends on the platform’s form tools</td>
                <td>Designed around your work</td>
              </tr>
              <tr>
                <td>Looks distinct from others</td>
                <td>Rarely</td>
                <td>Sometimes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Editing it yourself</td>
                <td>Easy within limits</td>
                <td>Easy within limits</td>
                <td>Decided during the build</td>
              </tr>
              <tr>
                <td>Best when</td>
                <td>You need to be online soon and your enquiries are simple</td>
                <td>You are comfortable assembling pages yourself</td>
                <td>Your enquiries need dates, usage or project detail</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Choose a template if you are starting out, your work is varied but your enquiries
          are simple, and you accept that the site will look like others. Choose a builder if
          you want more control and are willing to put in the time. Choose a custom build if
          the site has to carry real detail, such as booking dates, licensing terms or project
          stories, and if a weak enquiry path is costing you work.
        </p>
        <p>
          If you land on the third route, the work is described on the page about{" "}
          <TextLink to="/studios/film">
            portfolio website design for photographers and filmmakers
          </TextLink>
          . To see how working photographers structure their own sites first, look at{" "}
          <TextLink to="/notes/photography-website-examples">
            photography website examples
          </TextLink>
          .
        </p>

        <h2>Questions about photography website templates</h2>
        <div className="faq-section">
          <details>
            <summary>Is a template good enough for a photographer who is just starting out?</summary>
            <p>
              Often, yes. If you need to be online quickly and your enquiries are simple, a
              template is a sensible start. Run the ten-minute test first, and keep your images
              and text in a form you can move later.
            </p>
          </details>
          <details>
            <summary>Can I change a template later?</summary>
            <p>
              You can usually change the colours, fonts and content. Changing the structure is
              harder, and moving to a different template often means rebuilding pages. Plan on
              moving your content rather than the design.
            </p>
          </details>
          <details>
            <summary>Will a template hurt my search rankings?</summary>
            <p>
              Not by itself. Search visibility depends more on your content, how quickly pages
              load and who links to you than on whether the site began as a template. A
              template with heavy pages and no text is a problem for those reasons.
            </p>
          </details>
          <details>
            <summary>Should I buy a template or use a website builder?</summary>
            <p>
              A template is a fixed design, and a builder lets you rearrange it. If you want to
              change the structure yourself, choose a builder. If you want the quickest result
              and are content with the layout, a template is fine.
            </p>
          </details>
        </div>
      </article>
      <ContactBand />
    </SiteShell>
  );
}
