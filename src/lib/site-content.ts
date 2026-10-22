import type { Metadata } from "next";

import { OG_IMAGE, SITE_NAME } from "@/lib/site";

export type Service = {
  number: string;
  title: string;
  short: string;
  description: string;
  details: string[];
  suits: string;
};

export const services: readonly Service[] = [
  {
    number: "01",
    title: "Studio website design",
    short: "A digital space that feels like your studio.",
    description:
      "Bring your identity, your work, and your services together in a creative studio website that feels considered from the first visit.",
    details: [
      "Visual direction & page design",
      "Mobile-first layouts",
      "Portfolio & service presentation",
    ],
    suits:
      "Studios launching for the first time, or whose current site does not show their work clearly.",
  },
  {
    number: "02",
    title: "Website redesign",
    short: "Keep what works. Rethink what doesn't.",
    description:
      "Website redesign for studios that have outgrown their current site. We clarify your message, reorganize your pages, and reduce friction on the way to an inquiry.",
    details: [
      "Content & website review",
      "Navigation & visitor journeys",
      "Performance & accessibility improvements",
    ],
    suits:
      "Studios with an existing site that looks dated, is hard to update, or loses people on the way to a booking.",
  },
  {
    number: "03",
    title: "Inquiry & booking journeys",
    short: "Make the next step clear.",
    description:
      "Help potential clients, students, and collaborators find the right action, whether that is a project discussion, a trial class, or a studio booking.",
    details: ["Clear calls to action", "Focused inquiry forms", "Booking tool integration"],
    suits:
      "Studios that get visits but few inquiries, or whose booking path is unclear on a phone.",
  },
  {
    number: "04",
    title: "Search & measurement",
    short: "Get the foundations right. Learn as you go.",
    description:
      "Give your pages a useful search foundation and define the actions worth measuring. Make future decisions with a clearer view of how people use your website.",
    details: [
      "Page titles & search descriptions",
      "Content structure & technical SEO",
      "Analytics & conversion event planning",
    ],
    suits:
      "Studios ready to improve discoverability, or who want to know which pages lead to inquiries.",
  },
];

// Per-page metadata for the Next.js App Router.
// `title` is absolute so the root layout template never appends a second
// "| iSixDigitals" suffix. Canonical, Open Graph, and Twitter all point at the
// same path and carry the shared social image.
export function pageHead(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
