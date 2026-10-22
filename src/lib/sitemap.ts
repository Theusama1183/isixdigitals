// Sitemap rendering.
//
// The list of published paths comes from the route manifest in
// `@/lib/routes` — fix missing decisions there, not in this helper.

export interface SitemapEntry {
  path: string;
  lastmod?: string;
}

function isSafeSitemapPath(pathname: string): boolean {
  if (!pathname.startsWith("/") || pathname.startsWith("//") || /[?#\\]/.test(pathname))
    return false;
  try {
    return decodeURI(new URL(pathname, "https://sitemap.invalid").pathname) === decodeURI(pathname);
  } catch {
    return false;
  }
}

export function sitemapXML(baseURL: string, entries: SitemapEntry[]): string {
  const origin = new URL(baseURL);
  if (
    !/^https?:$/.test(origin.protocol) ||
    origin.username ||
    origin.password ||
    origin.pathname !== "/" ||
    origin.search ||
    origin.hash
  ) {
    throw new Error("The sitemap base URL must be the public site origin");
  }
  const escape = (value: string) =>
    value.replace(
      /[&<>"']/g,
      (character) =>
        ({
          "&": "\u0026amp;",
          "<": "\u0026lt;",
          ">": "\u0026gt;",
          '"': "\u0026quot;",
          "'": "\u0026apos;",
        })[character] ?? character,
    );
  const seen = new Set<string>();
  const urls: string[] = [];
  for (const entry of entries) {
    if (!isSafeSitemapPath(entry.path)) throw new Error("Invalid sitemap path");
    const url = new URL(entry.path, origin);
    if (seen.has(url.href)) continue;
    seen.add(url.href);
    urls.push(
      `<url><loc>${escape(url.href)}</loc>${entry.lastmod ? `<lastmod>${escape(entry.lastmod)}</lastmod>` : ""}</url>`,
    );
  }
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join("")}</urlset>`;
}
