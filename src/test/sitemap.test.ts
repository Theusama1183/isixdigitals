import { readdirSync, statSync } from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import {
  exploreLinks,
  legalLinks,
  navigationLinks,
  publicRoutes,
  sitemapStaticPaths,
} from "@/lib/routes";
import { sitemapXML } from "@/lib/sitemap";

const APP_DIR = path.resolve(process.cwd(), "src", "app");

type AppRoute = { path: string; kind: "page" | "route" };

function walk(dir: string, segments: string[] = []): AppRoute[] {
  const routes: AppRoute[] = [];
  const routePath = segments.length ? `/${segments.join("/")}` : "/";

  if (statSync(path.join(dir, "page.tsx"), { throwIfNoEntry: false })) {
    routes.push({ path: routePath, kind: "page" });
  }
  if (statSync(path.join(dir, "route.ts"), { throwIfNoEntry: false })) {
    routes.push({ path: routePath, kind: "route" });
  }
  // Metadata routes are files rather than folders: `robots.ts` serves
  // /robots.txt and `sitemap.ts` serves /sitemap.xml.
  const metadataRoutes: Record<string, string> = {
    "robots.ts": "/robots.txt",
    "sitemap.ts": "/sitemap.xml",
    "manifest.ts": "/manifest.webmanifest",
  };
  for (const [file, route] of Object.entries(metadataRoutes)) {
    if (statSync(path.join(dir, file), { throwIfNoEntry: false })) {
      routes.push({ path: route, kind: "route" });
    }
  }

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    routes.push(...walk(path.join(dir, entry.name), [...segments, entry.name]));
  }

  return routes;
}

function appRoutes(): AppRoute[] {
  return walk(APP_DIR);
}

describe("Public sitemap", () => {
  it("includes every public page and excludes its own endpoint", () => {
    expect(sitemapStaticPaths()).toEqual([
      "/",
      "/about",
      "/contact",
      "/cookies",
      "/privacy",
      "/process",
      "/services",
      "/studios",
      "/terms",
    ]);
  });

  it("uses the public domain and omits unverified content timestamps", () => {
    const xml = sitemapXML("https://parallax-studio-site.lovable.app", [
      { path: "/" },
      { path: "/services" },
    ]);
    expect(xml).toContain("<loc>https://parallax-studio-site.lovable.app/services</loc>");
    expect(xml).not.toContain("<lastmod>");
  });

  it("rejects paths that could point outside the public site", () => {
    expect(() =>
      sitemapXML("https://parallax-studio-site.lovable.app", [{ path: "//other.example" }]),
    ).toThrow("Invalid sitemap path");
  });
});

describe("Public route manifest", () => {
  it("has an entry for every route in src/app", () => {
    const declared = publicRoutes.map((route) => route.path);

    for (const route of appRoutes()) {
      expect(declared).toContain(route.path);
    }
  });

  it("has no entry for a route that does not exist", () => {
    const existing = appRoutes().map((route) => route.path);

    for (const route of publicRoutes) {
      expect(existing).toContain(route.path);
    }
  });

  it("only links to declared public pages from the navigation", () => {
    const declared = publicRoutes.map((route) => route.path);

    for (const link of [...exploreLinks, ...legalLinks, ...navigationLinks]) {
      expect(declared).toContain(link.to);
    }
  });
});
