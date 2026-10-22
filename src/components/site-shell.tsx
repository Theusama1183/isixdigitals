import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteChrome } from "@/components/site-chrome";
import { contact } from "@/lib/contact";
import type { SiteLinkPath } from "@/lib/routes";

// Server wrapper: resolves contact details once, then hands the interactive
// chrome its props. Pages keep using `<SiteShell>` and stay server components.
export function SiteShell({ children }: { children: ReactNode }) {
  return <SiteChrome contact={contact}>{children}</SiteChrome>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <span />
      {children}
    </p>
  );
}

export function PageIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="page-intro section-inner">
      <Eyebrow>{label}</Eyebrow>
      <h1>{title}</h1>
      <p className="intro-copy">{children}</p>
    </section>
  );
}

export function ContactBand() {
  return (
    <section className="contact-band">
      <div className="section-inner" data-reveal>
        <Eyebrow>A new chapter for your studio</Eyebrow>
        <div className="contact-band-row">
          <h2>
            Good work deserves
            <br /> a better website.
          </h2>
          <Button asChild size="lg">
            <Link href="/contact">
              Let’s make it happen <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function TextLink({ to, children }: { to: SiteLinkPath; children: ReactNode }) {
  return (
    <Link href={to} className="text-link">
      {children}
      <ArrowRight size={18} />
    </Link>
  );
}
