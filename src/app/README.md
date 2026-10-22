# App routes

Next.js uses the **App Router**. Every route lives in this directory.

## Conventions

| File | URL |
| --- | --- |
| `page.tsx` (in `app/`) | `/` |
| `about/page.tsx` | `/about` |
| `users/page.tsx` | `/users` |
| `users/[id]/page.tsx` | `/users/:id` (dynamic — square brackets) |
| `users/[...slug]/page.tsx` | `/users/*` (catch-all) |
| `users/[[...slug]]/page.tsx` | `/users/*` (optional catch-all) |
| `layout.tsx` | shared layout for the segment and everything under it |
| `route.ts` | API route handler (e.g. `sitemap.xml/route.ts` → `/sitemap.xml`) |
| `error.tsx` | error boundary for this segment (`"use client"`) |
| `global-error.tsx` | last-resort error boundary, replaces the root layout |
| `not-found.tsx` | 404 page |
| `loading.tsx` | loading UI while a segment suspends |

`src/app/layout.tsx` is the only root layout — it renders `<html>` and `<body>`.

## Rules

- Every public route must also be listed in `src/lib/routes.ts` with an explicit
  sitemap decision. A test fails the build if the manifest and this directory
  disagree.
- Page metadata comes from `pageHead()` in `src/lib/site-content.ts`, exported
  as a `metadata` const. Do not hand-write `<title>` tags.
- Anything that uses hooks, browser APIs, or event handlers needs
  `"use client"` at the top of the file. Keep those in a separate file next to
  the page so the page itself stays a Server Component.
- Contact details are never hard-coded: read them from `src/lib/contact.ts` in a
  Server Component and pass the values down as props (see `site-shell.tsx` →
  `site-chrome.tsx`).
