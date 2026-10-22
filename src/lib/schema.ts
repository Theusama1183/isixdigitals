// Structured data.
//
// Everything here describes the studio as it actually operates: a service-area
// business run by one person, working with creative studios from Lahore. Fields
// that depend on unset environment variables are omitted rather than invented,
// so the markup never claims a phone number, address, or profile that does not
// exist.
import type { Service } from "@/lib/site-content";
import { contact } from "@/lib/contact";
import { OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const organizationId = `${SITE_URL}/#organization`;
export const websiteId = `${SITE_URL}/#website`;
export const founderId = `${SITE_URL}/about#usama-adeel`;

const COUNTRY_CODES: Record<string, string> = {
  pakistan: "PK",
  india: "IN",
  "united arab emirates": "AE",
  uae: "AE",
  "united kingdom": "GB",
  uk: "GB",
  "united states": "US",
  usa: "US",
  canada: "CA",
  australia: "AU",
};

type PostalAddress = {
  "@type": "PostalAddress";
  addressLocality?: string;
  addressCountry?: string;
};

// "Lahore, Pakistan" -> locality + ISO country code. Anything unusual is kept
// as a plain area name instead of being guessed at.
function addressFromServiceArea(serviceArea: string | undefined): PostalAddress | undefined {
  if (!serviceArea) return undefined;
  const parts = serviceArea
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
  if (parts.length < 2) return undefined;
  const countryName = parts[parts.length - 1];
  if (!countryName) return undefined;
  const country = COUNTRY_CODES[countryName.toLowerCase()];
  if (!country) return undefined;
  return {
    "@type": "PostalAddress",
    addressLocality: parts.slice(0, -1).join(", "),
    addressCountry: country,
  };
}

export function areaServedSchema(serviceArea: string | undefined) {
  if (!serviceArea) return undefined;
  const parts = serviceArea
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
  if (parts.length === 2) {
    return {
      "@type": "City",
      name: parts[0],
      containedInPlace: { "@type": "Country", name: parts[1] },
    };
  }
  return { "@type": "Place", name: serviceArea };
}

export function breadcrumbSchema({ path, name }: { path: string; name: string }) {
  const itemUrl = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  return {
    "@type": "BreadcrumbList",
    "@id": `${itemUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: itemUrl,
      },
    ],
  };
}

export function organizationSchema() {
  const address = addressFromServiceArea(contact.serviceArea);
  const areaServed = areaServedSchema(contact.serviceArea);
  return {
    "@type": "ProfessionalService",
    "@id": organizationId,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    description: SITE_DESCRIPTION,
    image: [`${SITE_URL}${OG_IMAGE.url}`, `${SITE_URL}/images/studio-hero-1280.webp`],
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/isixdigitals-logo.png`,
      width: 1408,
      height: 381,
    },
    founder: { "@id": founderId },
    foundingDate: "2021",
    ...(contact.email ? { email: contact.email } : {}),
    ...(contact.phone ? { telephone: contact.phone } : {}),
    ...(address ? { address } : {}),
    ...(areaServed ? { areaServed } : {}),
    knowsAbout: [
      "Studio website design",
      "Website redesign",
      "Portfolio websites for photography and film studios",
      "Class and booking pages for dance studios",
      "Inquiry journeys",
    ],
    ...(contact.bookingUrl
      ? { potentialAction: { "@type": "ReserveAction", target: contact.bookingUrl } }
      : {}),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: "en",
    publisher: { "@id": organizationId },
  };
}

// The founder, described once and referenced elsewhere by @id.
export function founderSchema() {
  const areaServed = areaServedSchema(contact.serviceArea);
  return {
    "@type": "Person",
    "@id": founderId,
    name: "Usama Adeel",
    jobTitle: "Founder, designer and developer",
    url: `${SITE_URL}/about`,
    description:
      "Designer and developer behind iSixDigitals, building websites for creative studios since 2021.",
    worksFor: { "@id": organizationId },
    ...(areaServed ? { homeLocation: areaServed } : {}),
    knowsAbout: [
      "Website design",
      "Front-end development",
      "Content structure",
      "Accessibility",
      "Search foundations",
    ],
  };
}

export type WebPageType = "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";

export function webPageSchema({
  path,
  name,
  description,
  type = "WebPage",
  mainEntity,
  breadcrumb,
  about,
}: {
  path: string;
  name: string;
  description: string;
  type?: WebPageType;
  mainEntity?: object;
  breadcrumb?: object;
  about?: object;
}) {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "en",
    isPartOf: { "@id": websiteId },
    about: about ?? { "@id": organizationId },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_URL}${OG_IMAGE.url}`,
      width: OG_IMAGE.width,
      height: OG_IMAGE.height,
    },
    ...(mainEntity ? { mainEntity } : {}),
    ...(breadcrumb ? { breadcrumb } : {}),
  };
}

export function servicesSchema(items: readonly Service[]) {
  const areaServed = areaServedSchema(contact.serviceArea);
  const catalogId = `${SITE_URL}/services#services`;
  return {
    "@type": "ItemList",
    "@id": catalogId,
    name: "Studio website services",
    url: `${SITE_URL}/services`,
    itemListElement: items.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        "@id": `${SITE_URL}/services#service-${service.number}`,
        name: service.title,
        description: service.description,
        serviceType: service.title,
        provider: { "@id": organizationId },
        ...(areaServed ? { areaServed } : {}),
      },
    })),
  };
}

export function faqSchema(items: readonly { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function contactPointSchema() {
  const areaServed = areaServedSchema(contact.serviceArea);
  return {
    "@type": "ContactPoint",
    "@id": `${SITE_URL}/contact#contactpoint`,
    contactType: "sales",
    ...(contact.email ? { email: contact.email } : {}),
    ...(areaServed ? { areaServed } : {}),
    availableLanguage: ["English"],
  };
}

// One script tag per page, with a @graph so nodes can reference each other by
// @id instead of repeating the studio description everywhere.
export function graph(nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
