"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Contact } from "@/lib/contact";
import { exploreLinks, legalLinks, navigationLinks } from "@/lib/routes";
import { services } from "@/lib/site-content";

const HeaderLogo = "/images/isixdigitals-logo.webp";
const FooterLogo = "/images/isixdigitals-logo.png";

const links = navigationLinks;

// The interactive chrome (mobile menu, smooth scrolling, reveal/parallax
// effects, footer) receives contact details as props so it never reads
// server-side environment variables itself.
export function SiteChrome({ contact, children }: { contact: Contact; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // Close the mobile menu when the route changes. Adjusting state during
  // render (rather than in an effect) avoids a frame where the menu is still
  // open on the new page.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    // Anything already on screen stays visible. Marking it before the hiding
    // class applies means hydration never blanks content the visitor is reading.
    revealTargets.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.classList.add("revealed");
      }
    });
    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    revealTargets.forEach((element) => {
      if (!element.classList.contains("revealed")) observer.observe(element);
    });

    // Parallax reads the layout once per animation frame and only writes to
    // layers near the viewport, so a long page does not thrash on scroll.
    const layers = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let frame = 0;
    const applyParallax = () => {
      frame = 0;
      const viewport = window.innerHeight;
      for (const layer of layers) {
        const rect = layer.parentElement?.getBoundingClientRect();
        if (!rect) continue;
        if (rect.bottom < -200 || rect.top > viewport + 200) continue;
        const shift = Math.max(
          -70,
          Math.min(70, (viewport / 2 - rect.top - rect.height / 2) * 0.12),
        );
        layer.style.setProperty("--parallax-y", `${shift}px`);
      }
    };
    const scheduleParallax = () => {
      if (!frame) frame = window.requestAnimationFrame(applyParallax);
    };
    window.addEventListener("scroll", scheduleParallax, { passive: true });
    window.addEventListener("resize", scheduleParallax, { passive: true });
    applyParallax();

    // Smooth scrolling is a pointer-device affordance. On touch screens it
    // competes with native scrolling, so the library is only fetched when it
    // will actually be used.
    let lenis: { destroy: () => void } | undefined;
    let cancelled = false;
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      void import("lenis").then(({ default: Lenis }) => {
        if (cancelled) return;
        lenis = new Lenis({ autoRaf: true, duration: 1.05, smoothWheel: true });
      });
    }

    return () => {
      cancelled = true;
      lenis?.destroy();
      observer.disconnect();
      window.removeEventListener("scroll", scheduleParallax);
      window.removeEventListener("resize", scheduleParallax);
      if (frame) window.cancelAnimationFrame(frame);
      document.documentElement.classList.remove("motion-ready");
    };
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", close);
    };
  }, [open]);
  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <Link href="/" aria-label="iSixDigitals home" className="brand">
          <img src={HeaderLogo} width="372" height="101" alt="iSixDigitals" decoding="async" />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className={pathname === link.to ? "active" : undefined}
              aria-current={pathname === link.to ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Button asChild className="header-cta">
            <Link href="/contact">
              Let’s talk <ArrowUpRight />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
            className="menu-toggle"
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </header>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link, i) => (
            <Link
              key={link.to}
              href={link.to}
              aria-current={pathname === link.to ? "page" : undefined}
            >
              <span>0{i + 1}</span>
              {link.label}
              <ArrowUpRight />
            </Link>
          ))}
          <Link href="/contact">
            <span>0{links.length + 1}</span>Let’s talk
            <ArrowUpRight />
          </Link>
          <p>For studios. For what’s next.</p>
        </nav>
      )}
      <main id="main">{children}</main>
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand-col">
            <Link href="/" className="footer-brand" aria-label="iSixDigitals home">
              <img
                src={FooterLogo}
                alt="iSixDigitals"
                width="372"
                height="101"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p>
              Creative websites and clearer next steps for film, photography, dance, music, and art
              studios. Independent studio practice, working with creative businesses since 2021.
            </p>
            <Button asChild variant="outline">
              <Link href="/contact">
                Start a conversation <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <div className="footer-col">
              <h2 className="footer-heading">Explore</h2>
              <ul>
                {exploreLinks.map((link) => (
                  <li key={link.to}>
                    <Link href={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h2 className="footer-heading">Services</h2>
              <ul>
                {services.map((service) => (
                  <li key={service.number}>
                    <Link href="/services">{service.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h2 className="footer-heading">Get in touch</h2>
              <ul>
                {contact.email && (
                  <li>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </li>
                )}
                {contact.phone && (
                  <li>
                    <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}>{contact.phone}</a>
                  </li>
                )}
                {contact.serviceArea && <li>{contact.serviceArea}</li>}
                {contact.bookingUrl && (
                  <li>
                    <a href={contact.bookingUrl}>Book a conversation</a>
                  </li>
                )}
                <li>
                  <Link href="/contact">Prepare a project brief</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} iSixDigitals. All rights reserved.</span>
          <nav className="footer-legal" aria-label="Legal">
            {legalLinks.map((link) => (
              <Link key={link.to} href={link.to}>
                {link.label}
              </Link>
            ))}
          </nav>
          <span>Built for creative businesses.</span>
        </div>
      </footer>
    </div>
  );
}
