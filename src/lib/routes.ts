// Public route manifest.
//
// Every public page lives under `src/app`. Each entry makes an explicit
// sitemap decision, so adding a page means adding a line here — TypeScript
// fails the build if the decision is missing.
//
// `sitemap: true`        -> the path is published in /sitemap.xml
// `sitemap: false`       -> the path is deliberately not published
// `sitemap: "exclude-subtree"` -> the path and everything nested under it is
//                                 not published (use for private sections)

export type SitemapDecision = boolean | "exclude-subtree";

export type RouteDefinition = {
  path: string;
  sitemap: SitemapDecision;
};

export const publicRoutes = [
  { path: "/", sitemap: true },
  { path: "/about", sitemap: true },
  { path: "/contact", sitemap: true },
  { path: "/cookies", sitemap: true },
  { path: "/privacy", sitemap: true },
  { path: "/process", sitemap: true },
  { path: "/services", sitemap: true },
  { path: "/studios", sitemap: true },
  { path: "/terms", sitemap: true },
  { path: "/llms.txt", sitemap: false },
  { path: "/robots.txt", sitemap: false },
  { path: "/sitemap.xml", sitemap: false },
] as const satisfies readonly RouteDefinition[];

export type PublicRoutePath = (typeof publicRoutes)[number]["path"];

// Paths a visitor can be linked to. Excludes non-page routes such as
// /sitemap.xml.
export type SiteLinkPath =
  | "/"
  | "/about"
  | "/contact"
  | "/cookies"
  | "/privacy"
  | "/process"
  | "/services"
  | "/studios"
  | "/terms";

// Main navigation, derived from the manifest so navigation and sitemap
// never drift apart.
export const navigationLinks = [
  { to: "/services", label: "Services" },
  { to: "/studios", label: "Who we work with" },
  { to: "/process", label: "Our process" },
  { to: "/about", label: "About" },
] as const satisfies readonly { to: SiteLinkPath; label: string }[];

// Footer navigation. `explore` covers every public page a visitor may want,
// `legal` stays separate so the policy pages do not compete with the main site.
export const exploreLinks = [
  { to: "/", label: "Home" },
  ...navigationLinks,
  { to: "/contact", label: "Contact" },
] as const satisfies readonly { to: SiteLinkPath; label: string }[];

export const legalLinks = [
  { to: "/privacy", label: "Privacy policy" },
  { to: "/cookies", label: "Cookie policy" },
  { to: "/terms", label: "Terms of use" },
] as const satisfies readonly { to: SiteLinkPath; label: string }[];

// Widened view of the manifest so the decision helpers can reason about every
// `SitemapDecision`, including "exclude-subtree", regardless of which
// decisions are currently used.
const routeDefinitions: readonly RouteDefinition[] = publicRoutes;

function isExcludedByAncestor(path: string): boolean {
  return routeDefinitions.some((route) => {
    if (route.sitemap !== "exclude-subtree") return false;
    const prefix = route.path === "/" ? "/" : `${route.path}/`;
    return path !== route.path && path.startsWith(prefix);
  });
}

export function isSitemapRouteIncluded(path: string): boolean {
  const route = routeDefinitions.find((entry) => entry.path === path);
  if (!route) return false;
  if (route.sitemap !== true) return false;
  return !isExcludedByAncestor(path);
}

export function sitemapStaticPaths(): string[] {
  return publicRoutes
    .map((route) => route.path)
    .filter((path) => isSitemapRouteIncluded(path))
    .sort();
}
