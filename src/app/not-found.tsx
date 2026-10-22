import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteShell, PageIntro, TextLink } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "This page does not exist. Head back to the homepage or start a conversation about your studio website.",
  // Next.js emits noindex for not-found pages; avoid duplicate robots meta and
  // clear inherited canonical/OG so the 404 does not self-identify as the homepage.
  robots: undefined,
  alternates: null,
  openGraph: null,
};

export default function NotFound() {
  return (
    <SiteShell>
      <PageIntro label="404" title={<>This page isn’t here.</>}>
        The link may be out of date, or the page may have moved. Start from the homepage, or tell us
        what you were looking for.
      </PageIntro>
      <section className="section-inner section">
        <div className="flex flex-wrap items-center gap-5">
          <Button asChild size="lg">
            <Link href="/">
              Back to the homepage <ArrowUpRight />
            </Link>
          </Button>
          <TextLink to="/contact">Talk about a studio website</TextLink>
        </div>
      </section>
    </SiteShell>
  );
}
