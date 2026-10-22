import { sitemapStaticPaths } from "@/lib/routes";
import { SITE_URL } from "@/lib/site";
import { sitemapXML, type SitemapEntry } from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  const entries: SitemapEntry[] = sitemapStaticPaths().map((path) => ({ path }));

  if (entries.length === 0) {
    return new Response(
      'No pages are included in this sitemap. Check route decisions and ancestor exclusions. Setting "exclude-subtree" on the root excludes the entire site.',
      { status: 404, headers: { "Cache-Control": "no-store" } },
    );
  }

  return new Response(sitemapXML(SITE_URL, entries), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
