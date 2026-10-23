import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { JsonLd } from "@/components/json-ld";
import { founderSchema, graph, organizationSchema, websiteSchema } from "@/lib/schema";
import { OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

import "./globals.css";

// Self-hosted, subset to Latin. `next/font` preloads the files the first paint
// needs and generates size-adjusted fallback metrics, so the swap from the
// fallback face does not shift the layout. Only the weights the public pages
// actually render are declared: a 600 preload would cost every visitor ~13KB for
// a face used solely by the error boundary, which can synthesize bold.
const grotesk = localFont({
  src: [
    { path: "../fonts/space-grotesk-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/space-grotesk-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-grotesk",
  display: "swap",
  fallback: ["sans-serif"],
  adjustFontFallback: "Arial",
});

const instrument = localFont({
  src: [
    { path: "../fonts/instrument-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/instrument-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument",
  display: "swap",
  fallback: ["Georgia", "serif"],
  adjustFontFallback: "Times New Roman",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — studio website design & redesign`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  creator: "Usama Adeel",
  publisher: SITE_NAME,
  category: "Web design",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — studio website design & redesign`,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — studio website design & redesign`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48 64x64", type: "image/x-icon" },
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f7f3",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${grotesk.variable} ${instrument.variable}`}>
      {/*
        Browser extensions (Grammarly, password managers, translators) inject
        attributes onto <body> before React hydrates. Suppressing the warning on
        this element keeps a harmless extension mutation from being reported as
        an app-level hydration mismatch.
      */}
      <body suppressHydrationWarning>
        <JsonLd
          id="site-schema"
          data={graph([organizationSchema(), founderSchema(), websiteSchema()])}
        />
        {children}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="lmADDLSHDT4bDmnX3l1ZTw"
          async
        />
      </body>
    </html>
  );
}
