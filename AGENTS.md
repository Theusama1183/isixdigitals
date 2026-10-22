<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application conventions
- Public content pages use separate App Router routes under `src/app` and shared website navigation, footer, and metadata helpers so every page is independently shareable.
- Public route paths and their sitemap decisions live in `src/lib/routes.ts`; the manifest is the single source of truth for navigation, the sitemap route handler, and the route-parity test.
- Brand styling and animation behavior live in the global design system; use semantic tokens and the existing Button component for controls.
- Smooth scrolling and reveal/parallax enhancements initialize only in browser effects and respect reduced motion to preserve SSR and accessibility.
- Contact details (email, phone, service area, booking link) come from `NEXT_PUBLIC_*` variables read in `src/lib/contact.ts`; unset values are omitted rather than rendered as placeholders.
- The inquiry form prepares a downloadable project brief and never claims to send or store a submission; when an email is configured, it tells people where to send the brief.
- Interactive chrome lives in `src/components/site-chrome.tsx` (client) and receives contact details as props from the server `SiteShell`, so client code never reads server environment variables.
- Reference-inspired homepage additions live in a dedicated presentation module and link to existing public pages; illustrative directions must not imply completed client work.
- Public sitemap paths derive from the route manifest with required sitemap decisions; exclude private subtrees and omit lastmod without authoritative page-specific timestamps to keep discovery accurate.
- Keep `src/app/llms.txt/route.ts` limited to public content pages and factual summaries, generated from `SITE_URL`; it is an AI-reading guide, not a guarantee of citations or rankings.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
