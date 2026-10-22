# iSixDigitals

Studio website design and website redesign for creative businesses — film and
video production, photography, dance, music, art, and other creative spaces.

Built with [Next.js](https://nextjs.org) (App Router), TypeScript, React, and
Tailwind CSS.

## Development

You need Node.js 20.9+ (or [bun](https://bun.sh)).

```sh
bun install     # or: npm install
bun dev         # or: npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact details

Email, phone, service area, and the optional booking link are read from the
environment (`src/lib/contact.ts`) so they never have to be edited in
components:

- `.env` — committed values used by local builds and the deployed site.
- `.env.local` — gitignored, overrides `.env` for your own machine.
- `.env.example` — documents every supported key.

Anything left empty is simply omitted from the footer, the contact page, and
the homepage contact block — no placeholder text is rendered. Public pages are
statically prerendered, so rebuild after changing these values.

## Search and sharing

One environment value drives every absolute URL:

| Key | Used by |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical tags, Open Graph URLs, `sitemap.xml`, `robots.txt`, `llms.txt`, JSON-LD |

Set it to the real production origin before deploying. Derived surfaces:

- `src/app/robots.ts` — generated from `SITE_URL`, with explicit groups for the
  main AI crawlers, so the `Sitemap:` line can never drift from the listed host.
- `src/app/sitemap.xml/route.ts` + `src/lib/sitemap.ts` — built from the route
  manifest; no `lastmod` unless a page has an authoritative timestamp.
- `src/app/llms.txt/route.ts` — a plain-text guide for AI readers, generated from
  the same origin.
- `src/lib/schema.ts` + `src/components/json-ld.tsx` — site-wide
  `ProfessionalService`/`WebSite` graph plus per-page `WebPage` types, `Person`,
  `OfferCatalog`, and `FAQPage`. Unset contact fields are omitted, never invented.
- `public/images/og-default.jpg` — 1200×630 social preview used by every page.
- `src/lib/site.ts` — `SITE_DESCRIPTION` and `OG_IMAGE` shared by metadata.

## Images and fonts

- Responsive WebP variants live beside the originals in `public/images`
  (`studio-hero-768.webp`, `dance-studio-480.webp`, and so on). They are used
  through `src/components/responsive-image.tsx`, which keeps the parallax hooks
  and lets the browser choose the smallest file.
- The header/footer logo uses the 372px WebP, not the 1408px PNG.
- Fonts are self-hosted through `next/font/local` from `src/fonts`, which
  preloads the Latin files and generates size-adjusted fallback metrics. Keep the
  OFL license files beside them.

## Scripts

| Script | What it does |
| --- | --- |
| `bun dev` | Start the development server |
| `bun build` | Production build |
| `bun start` | Serve the production build |
| `bun lint` | ESLint (flat config) |
| `bun typecheck` | TypeScript without emitting |
| `bun test` | Vitest unit tests |
| `bun format` | Prettier write |

## Structure

```
src/
  app/                 App Router routes
    layout.tsx         Root layout — <html>, fonts, metadata, site JSON-LD
    page.tsx           Home
    about/             /about
    contact/           /contact (+ contact-form.tsx client component)
    process/           /process
    services/          /services
    studios/           /studios
    privacy/           /privacy
    cookies/           /cookies
    terms/             /terms
    robots.ts          /robots.txt (generated)
    sitemap.xml/       /sitemap.xml route handler
    llms.txt/          /llms.txt (generated)
    error.tsx          Route error boundary
    global-error.tsx   Last-resort error boundary
    not-found.tsx      404 page
  components/          Site shell (server) + site chrome (client), sections, ui primitives
  fonts/               Self-hosted WOFF2 files and their OFL licenses
  lib/                 Site content, route manifest, sitemap, schema, contact config
  test/                Vitest suites
public/
  .well-known/         security.txt
  images/              Photography, logo, responsive WebP variants, social preview
```

## Conventions

- Public pages live under `src/app`. Each one exports its own `metadata` via
  `pageHead()` in `src/lib/site-content.ts`, which also supplies the canonical,
  Open Graph, and Twitter tags.
- Every public route is listed in `src/lib/routes.ts` with an explicit sitemap
  decision. The sitemap route handler reads that manifest — do not hand-maintain
  the path list. Metadata routes such as `robots.ts` and `llms.txt` are declared
  there too, with `sitemap: false`.
- Add new shadcn/ui primitives under `src/components/ui` and keep them
  framework-agnostic.
