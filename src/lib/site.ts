// Single source of truth for the public origin of the site.
// Set NEXT_PUBLIC_SITE_URL when the domain changes; the sitemap, canonical
// URLs, robots.txt, and structured data all derive from it.
export const SITE_URL = (
  process.env["NEXT_PUBLIC_SITE_URL"] ?? "https://parallax-studio-site.lovable.app"
).replace(/\/+$/, "");

export const SITE_NAME = "iSixDigitals";

export const SITE_DESCRIPTION =
  "iSixDigitals designs and builds websites for creative studios — film, photography, dance, music and art — from Lahore, Pakistan, since 2021.";

// Social preview image. Also used as the structured-data image for the studio.
export const OG_IMAGE = {
  url: "/images/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "iSixDigitals — websites for creative studios, Lahore, Pakistan",
} as const;
