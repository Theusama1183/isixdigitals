import { contact } from "@/lib/contact";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

// Generated from SITE_URL instead of being a static file in /public, so the
// URLs in the AI-reading guide always match the canonical host used by the
// sitemap and page metadata.
export const dynamic = "force-static";

const LAST_UPDATED = "2026-10-22";

const pages = [
  {
    path: "/",
    title: "Home",
    summary:
      "What iSixDigitals does, the four core services, concept directions, and answers to common questions.",
  },
  {
    path: "/services",
    title: "Services",
    summary:
      "Studio website design, website redesign, inquiry and booking journeys, and search and measurement foundations.",
  },
  {
    path: "/studios",
    title: "Who we work with",
    summary:
      "Website considerations for film and photography studios, dance studios and schools, and music, art and other creative spaces.",
  },
  {
    path: "/process",
    title: "Process",
    summary:
      "Four stages — listen and discover, find the direction, design and build, launch and learn — and what each stage works toward.",
  },
  {
    path: "/about",
    title: "About",
    summary:
      "Usama Adeel on why iSixDigitals exists, how projects run, and why the studio focus is deliberately narrow.",
  },
  {
    path: "/contact",
    title: "Contact",
    summary:
      "Prepare a downloadable project brief, or email the studio. Phone and booking links appear only when configured.",
  },
  { path: "/privacy", title: "Privacy", summary: "What the site does and does not collect." },
  { path: "/cookies", title: "Cookies", summary: "Cookie and storage policy." },
  {
    path: "/terms",
    title: "Terms",
    summary: "Terms for using the site and how project scope, pricing, and ownership are agreed.",
  },
] as const;

export function GET() {
  const body = `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

## Key facts

- Studio: ${SITE_NAME}
- Founder: Usama Adeel — designer and developer, the person who does the work
- Working with creative studios since 2021
${contact.serviceArea ? `- Service area: ${contact.serviceArea}; works locally and remotely\n` : ""}${contact.email ? `- Contact: ${contact.email}\n` : ""}- Homepage: ${SITE_URL}/

## Pages

${pages.map((page) => `- [${page.title}](${SITE_URL}${page.path === "/" ? "/" : page.path}): ${page.summary}`).join("\n")}

## Notes for readers

- The visual directions shown on the site are concept directions, not completed client projects.
- No client testimonials, prices, or performance guarantees are published.
- The site sets no cookies of its own, runs no analytics or advertising scripts, and self-hosts its fonts and images.
- The contact form generates a project brief in the browser. It does not send or store the submission.
- Sitemap: ${SITE_URL}/sitemap.xml

Last updated: ${LAST_UPDATED}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
