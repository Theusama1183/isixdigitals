import Link from "next/link";
import { ArrowUpRight, Plus, Compass, MessagesSquare, ScanEye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResponsiveImage } from "@/components/responsive-image";
import { Eyebrow, TextLink } from "@/components/site-shell";
import { contact, mailtoHref, telHref } from "@/lib/contact";

const film = { name: "studio-hero", widths: [768, 1280], width: 1920, height: 1024 };
const dance = { name: "dance-studio", widths: [480, 960], width: 1024, height: 768 };
const music = { name: "music-studio", widths: [480, 960], width: 1024, height: 768 };

const directions = [
  {
    number: "01",
    title: "Let the work lead.",
    category: "Film & photography",
    image: film,
    alt: "Cinema camera and equipment in a film studio",
    text: "A portfolio-led direction with space for your reel, project context, and a focused production inquiry.",
    tags: ["Portfolio", "Project inquiries"],
  },
  {
    number: "02",
    title: "Make room for movement.",
    category: "Dance & movement",
    image: dance,
    alt: "Contemporary dancers rehearsing in a bright studio",
    text: "A welcoming class-led direction that connects styles, levels, and schedules to the right booking step.",
    tags: ["Class discovery", "Trial bookings"],
  },
  {
    number: "03",
    title: "Set the right tone.",
    category: "Music & creative spaces",
    image: music,
    alt: "Mixing desk and recording studio equipment",
    text: "A space-led direction that brings equipment, sessions, and collaboration opportunities into focus.",
    tags: ["Studio facilities", "Session inquiries"],
  },
];
const values = [
  {
    Icon: Compass,
    title: "Your identity, not a template.",
    text: "Your craft, audience, and way of working shape the direction. The website should feel like an extension of your studio.",
  },
  {
    Icon: MessagesSquare,
    title: "Decisions made together.",
    text: "A shared direction, focused feedback, and clear priorities keep the project grounded in what your studio needs.",
  },
  {
    Icon: ScanEye,
    title: "Attention beyond the surface.",
    text: "Content, accessibility, search foundations, and inquiry journeys deserve as much care as the visual design.",
  },
];
const notes = [
  {
    number: "01",
    category: "Website strategy",
    title: "Refresh or rebuild? Start with the friction.",
    text: "An unclear message, a buried service, or an awkward inquiry form can matter more than a new look.",
    to: "/services",
  },
  {
    number: "02",
    category: "Studio experience",
    title: "A portfolio needs a next step.",
    text: "Give visitors context around your work and a relevant way to begin a conversation, book a class, or discuss a session.",
    to: "/studios",
  },
  {
    number: "03",
    category: "Project planning",
    title: "Better projects begin with better questions.",
    text: "Know your audience, gather your content, and agree what the website needs to help people do.",
    to: "/process",
  },
] as const;
// Exported so the homepage can publish the same answers as FAQ structured data.
export const homeFaqItems = [
  {
    question: "Is this a good fit for our studio?",
    answer:
      "Our focus is creative studios: film and video production, photography, dance, music, art, and other creative spaces. The starting point is your audience and the journey from discovering your work to getting in touch.",
  },
  {
    question: "Can we refresh our website instead of starting again?",
    answer:
      "Yes, where the existing foundations support it. We can review the content, structure, and visitor journey to understand whether a focused refresh or a fuller redesign is the more useful approach.",
  },
  {
    question: "Can our current booking system stay?",
    answer:
      "We can assess the integration options your booking tool supports. The aim is to connect relevant pages to the right class, session, or conversation without creating unnecessary steps.",
  },
  {
    question: "What do we need before a project starts?",
    answer:
      "Bring your current website, brand assets, examples of your work, an overview of your services, and the questions people commonly ask. Missing content and priorities can be identified during discovery.",
  },
  {
    question: "What will the project cost, and how long will it take?",
    answer:
      "Every studio needs a slightly different set of pages, so each project is scoped on its own. After a short conversation we agree what is included, what it costs, and when it will be ready — in writing, before any work starts.",
  },
];

export function WebsiteDirections() {
  return (
    <section className="section direction-section">
      <div className="section-inner">
        <Eyebrow>Studio website directions</Eyebrow>
        <div className="section-heading" data-reveal>
          <h2>
            Your work.
            <br /> <em>A different perspective.</em>
          </h2>
          <p>
            Different ways to put a studio’s work, people, and possibilities first. Concept
            directions rather than client case studies — starting points we adapt to your own work.
          </p>
        </div>
        <div className="direction-grid">
          {directions.map((direction) => (
            <article className="direction-item" key={direction.number} data-reveal>
              <Link
                href="/studios"
                className="direction-visual"
                aria-label={`Explore websites for ${direction.category.toLowerCase()}`}
              >
                <ResponsiveImage
                  name={direction.image.name}
                  widths={direction.image.widths}
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  alt={direction.alt}
                  width={direction.image.width}
                  height={direction.image.height}
                  parallax
                />
                <span className="direction-index">/{direction.number}</span>
                <span className="direction-category">
                  {direction.category}
                  <ArrowUpRight size={17} />
                </span>
              </Link>
              <h3>{direction.title}</h3>
              <p>{direction.text}</p>
              <div className="direction-tags">
                {direction.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="section-end">
          <TextLink to="/studios">A direction for your studio</TextLink>
        </div>
      </div>
    </section>
  );
}

export function PartnershipSection() {
  return (
    <section className="section partnership-section">
      <div className="section-inner partnership-layout">
        <div data-reveal>
          <Eyebrow>Let’s build something considered</Eyebrow>
          <h2>
            A creative partner.
            <br /> <em>Not just a supplier.</em>
          </h2>
          <p>
            You know your studio. We help translate that knowledge into a digital presence with
            purpose.
          </p>
          <Button asChild size="lg">
            <Link href="/about">
              Meet iSixDigitals <ArrowUpRight />
            </Link>
          </Button>
        </div>
        <div className="partnership-values">
          {values.map(({ Icon, title, text }) => (
            <article key={title} data-reveal>
              <Icon size={27} strokeWidth={1.3} />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StudioNotes() {
  return (
    <section className="section section-inner">
      <Eyebrow>Studio notes</Eyebrow>
      <div className="section-heading" data-reveal>
        <h2>
          A fresh look.
          <br /> <em>A little food for thought.</em>
        </h2>
        <p>
          Ideas worth considering before your next website project — from the first impression to
          the first inquiry.
        </p>
      </div>
      <div className="notes-grid">
        {notes.map((note) => (
          <Link href={note.to} className="note-item" key={note.number} data-reveal>
            <div className="note-meta">
              <span>{note.category}</span>
              <span>/{note.number}</span>
            </div>
            <h3>{note.title}</h3>
            <p>{note.text}</p>
            <span className="note-link">
              Explore the thinking <ArrowUpRight size={19} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function HomeFAQ() {
  return (
    <section className="section home-faq">
      <div className="section-inner home-faq-layout">
        <div data-reveal>
          <Eyebrow>Frequently asked questions</Eyebrow>
          <h2>
            A few questions.
            <br /> <em>Clearer answers.</em>
          </h2>
          <p>
            Every studio starts somewhere different. Here are a few things to know before we talk.
          </p>
          <TextLink to="/contact">Talk about your project</TextLink>
        </div>
        <div className="home-faq-list" data-reveal>
          {homeFaqItems.map((item) => (
            <details key={item.question} name="studio-faq">
              <summary>
                {item.question}
                <Plus size={19} aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
const facts = [
  {
    value: "04",
    label: "Core services",
    text: "Design, redesign, inquiry journeys, and search foundations.",
  },
  { value: "04", label: "Clear stages", text: "From first conversation to launch and learning." },
  {
    value: "03",
    label: "Studio focus areas",
    text: "Film & photo, dance & movement, music & art.",
  },
  {
    value: "2021",
    label: "Working with studios",
    text: "Designing and building studio websites since 2021.",
  },
];
const capabilities = [
  "Studio website design",
  "Website redesign for studios",
  "Portfolio presentation",
  "Class & schedule pages",
  "Booking handoffs",
  "Inquiry forms",
  "Content structure",
  "Search foundations",
  "Accessibility review",
  "Performance care",
  "Analytics setup",
  "Launch support",
];

export function ImpactSection() {
  return (
    <section className="section impact-section">
      <div className="section-inner">
        <Eyebrow>By the numbers</Eyebrow>
        <div className="section-heading" data-reveal>
          <h2>
            Focused by design.
            <br /> <em>Pragmatic by nature.</em>
          </h2>
          <p>
            No inflated figures — just the shape of the studio. A narrow set of services, four
            stages every project moves through, and one goal that never changes: helping the right
            people find a way to get in touch.
          </p>
        </div>
        <div className="impact-grid">
          {facts.map((f) => (
            <div key={f.label} className="impact-item" data-reveal>
              <strong>{f.value}</strong>
              <h3>{f.label}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CapabilitiesSection() {
  return (
    <section className="section section-inner">
      <Eyebrow>Let’s build with iSixDigitals</Eyebrow>
      <div className="section-heading" data-reveal>
        <h2>
          Everything a creative studio website
          <br /> <em>needs to work.</em>
        </h2>
        <p>Pick what matters now. Add the rest when your studio is ready.</p>
      </div>
      <div className="capability-grid">
        {capabilities.map((c, i) => (
          <Link href="/services" key={c} className="capability-item" data-reveal>
            <span>/{String(i + 1).padStart(2, "0")}</span>
            {c}
            <ArrowUpRight size={17} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export function ContactChannels() {
  type Channel = { title: string; value: string; href?: string; text: string };
  const items: Channel[] = [];

  if (contact.email) {
    items.push({
      title: "Send a message",
      value: contact.email,
      href: mailtoHref(contact.email),
      text: "Share a little about your studio and what you want to change.",
    });
  }
  if (contact.phone) {
    items.push({
      title: "Call us",
      value: contact.phone,
      href: telHref(contact.phone),
      text: "Prefer a conversation? A short call is a good place to start.",
    });
  }
  if (contact.serviceArea) {
    items.push({
      title: "Where we work",
      value: contact.serviceArea,
      text: "Working with creative studios in and around the area, and remotely further out.",
    });
  }
  if (items.length === 0) {
    items.push({
      title: "Start with a brief",
      value: "Project brief",
      text: "Answer a few questions about your studio and take the brief with you.",
    });
  }

  return (
    <section className="section section-inner">
      <Eyebrow>Get in touch</Eyebrow>
      <div className="channel-grid">
        {items.map((item) => {
          const content = (
            <>
              <h3>
                {item.title}
                <ArrowUpRight size={18} />
              </h3>
              <strong>{item.value}</strong>
              <p>{item.text}</p>
            </>
          );
          return item.href ? (
            <a key={item.title} href={item.href} className="channel-item" data-reveal>
              {content}
            </a>
          ) : (
            <Link key={item.title} href="/contact" className="channel-item" data-reveal>
              {content}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
