import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDown,
  Monitor,
  RefreshCw,
  MousePointer2,
  ChartNoAxesCombined,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell, Eyebrow, ContactBand, TextLink } from "@/components/site-shell";
import { JsonLd } from "@/components/json-ld";
import { ResponsiveImage } from "@/components/responsive-image";
import { faqSchema, graph, webPageSchema } from "@/lib/schema";
import { pageHead, services } from "@/lib/site-content";
import {
  WebsiteDirections,
  PartnershipSection,
  StudioNotes,
  HomeFAQ,
  ImpactSection,
  CapabilitiesSection,
  ContactChannels,
  homeFaqItems,
} from "@/components/home-sections";

const title = "Studio website design & redesign";
const description =
  "Websites for film, photography, dance, music and art studios — designed and built by iSixDigitals in Lahore, Pakistan since 2021.";

export const metadata: Metadata = pageHead(title, description, "/");

const icons = [Monitor, RefreshCw, MousePointer2, ChartNoAxesCombined];
const studios = [
  {
    title: "Film & photography",
    text: "Put your best work in the frame. Turn a portfolio visit into a project conversation.",
    image: "studio-hero",
    widths: [768, 1280],
    width: 1920,
    height: 1024,
    alt: "Professional cinema camera in a photography studio",
  },
  {
    title: "Dance & movement",
    text: "Make classes, schedules, and trial bookings as welcoming as your studio.",
    image: "dance-studio",
    widths: [480, 960],
    width: 1024,
    height: 768,
    alt: "Dancers rehearsing in a light-filled dance studio",
  },
  {
    title: "Music, art & more",
    text: "Give your creative space a distinct presence and a simple way to get in touch.",
    image: "music-studio",
    widths: [480, 960],
    width: 1024,
    height: 768,
    alt: "Mixing console in a music recording studio",
  },
];
export const steps = [
  {
    title: "Listen & discover",
    text: "Your studio, your audience, your goals. We start with the things that make you different.",
  },
  {
    title: "Find the direction",
    text: "A focused plan for your content, your visual identity, and your visitor journey.",
  },
  {
    title: "Design & build",
    text: "Thoughtful pages, purposeful interactions, and a website that works across screens.",
  },
  {
    title: "Launch & learn",
    text: "Check the details, launch with care, and define what to measure next.",
  },
];
export default function Index() {
  return (
    <SiteShell>
      <JsonLd
        id="faq-schema"
        data={graph([
          webPageSchema({ path: "/", name: `${title} | iSixDigitals`, description }),
          faqSchema(homeFaqItems),
        ])}
      />
      <section className="hero">
        <ResponsiveImage
          className="hero-image"
          name="studio-hero"
          widths={[768, 1280, 1920]}
          sizes="100vw"
          alt="A bright filmmaking studio with a professional cinema camera"
          width={1920}
          height={1024}
          priority
          parallax
        />
        <div className="hero-inner section-inner">
          <Eyebrow>Digital partners for creative studios</Eyebrow>
          <h1>
            Your studio.
            <br /> A stronger <em>digital</em>
            <br /> presence.
          </h1>
          <p className="hero-copy">
            You create work worth seeing. We build the website that does it justice — for film,
            photography, dance, music and art studios, from Lahore since 2021.
          </p>
          <div className="hero-actions">
            <Button asChild size="lg">
              <Link href="/contact">
                Let’s talk about your studio <ArrowUpRight />
              </Link>
            </Button>
            <TextLink to="/services">Explore our services</TextLink>
          </div>
          <p className="hero-note">
            <ArrowDown size={13} />
            Made for studios. Designed for what’s next.
          </p>
          <div className="hero-label">
            <span />
            Creativity, with a clear direction.
          </div>
        </div>
      </section>
      <div className="marquee" aria-label="Studios we serve">
        <div className="marquee-track">
          {[0, 1, 2, 3].map((n) => (
            <span key={n} aria-hidden={n > 0 ? true : undefined}>
              Film & production studios{"\u3000"}✳{"\u3000"}Photography studios{"\u3000"}✳{"\u3000"}
              Dance & movement{"\u3000"}✳{"\u3000"}Music & art studios{"\u3000"}✳{"\u3000"}
            </span>
          ))}
        </div>
      </div>
      <section className="section section-inner">
        <Eyebrow>What we bring to the table</Eyebrow>
        <div className="section-heading" data-reveal>
          <h2>
            Creative thinking.
            <br /> <em>Practical impact.</em>
          </h2>
          <p>
            A beautiful website is just the beginning. We connect design, content, and the right
            next steps to help your studio move forward.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <Link href="/services" key={service.number} className="service-card" data-reveal>
                <div className="service-card-top">
                  {Icon && <Icon size={25} strokeWidth={1.3} />}
                  <span>/{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <ArrowUpRight className="card-arrow" size={21} />
              </Link>
            );
          })}
        </div>
        <div className="section-end">
          <TextLink to="/services">A closer look at our services</TextLink>
        </div>
      </section>
      <section className="section studio-section">
        <div className="section-inner">
          <Eyebrow>For people who create</Eyebrow>
          <div className="section-heading" data-reveal>
            <h2>
              Different studios.
              <br /> The same <em>creative spirit.</em>
            </h2>
            <p>
              From your first impression to the first conversation, your website should reflect how
              you work — and who you work with.
            </p>
          </div>
          <div className="studio-grid">
            {studios.map((studio) => (
              <Link href="/studios" className="studio-card" key={studio.title} data-reveal>
                <div className="image-wrap">
                  <ResponsiveImage
                    name={studio.image}
                    widths={studio.widths}
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    alt={studio.alt}
                    width={studio.width}
                    height={studio.height}
                    parallax
                  />
                </div>
                <h3>
                  {studio.title}
                  <ArrowUpRight size={18} />
                </h3>
                <p>{studio.text}</p>
              </Link>
            ))}
          </div>
          <div className="section-end">
            <TextLink to="/studios">Find the right fit for your studio</TextLink>
          </div>
        </div>
      </section>
      <ImpactSection />
      <WebsiteDirections />
      <CapabilitiesSection />
      <PartnershipSection />
      <section className="section section-inner">
        <Eyebrow>From first conversation to launch</Eyebrow>
        <div className="section-heading" data-reveal>
          <h2>
            A little clarity.
            <br /> A lot of <em>possibility.</em>
          </h2>
          <p>
            No mystery. No unnecessary complexity. Just a collaborative process that keeps your
            studio’s goals at the center.
          </p>
        </div>
        <div className="process-list">
          {steps.map((step, i) => (
            <div className="process-step" key={step.title} data-reveal>
              <span className="step-number">0{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
        <div className="section-end">
          <TextLink to="/process">How we work together</TextLink>
        </div>
      </section>
      <div className="section-inner principles">
        {[
          "Studio-first thinking",
          "Design with purpose",
          "Clear communication",
          "Measure what matters",
        ].map((p) => (
          <span key={p}>
            <Check />
            {p}
          </span>
        ))}
      </div>
      <StudioNotes />
      <HomeFAQ />
      <ContactChannels />
      <ContactBand />
    </SiteShell>
  );
}
