import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

// Generated from SITE_URL so the Sitemap line can never drift from the host the
// sitemap actually lists. The crawler groups below are explicit because a bare
// `*` rule is easy to override by accident in a CDN or edge config.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
