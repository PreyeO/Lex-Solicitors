import type { Faq } from "@/types";
import { siteConfig } from "@/data/siteConfig";

/** A schema.org FAQPage object built from the site's FAQ data. */
export interface FaqJsonLd {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: {
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }[];
}

/**
 * Build a valid schema.org FAQPage object from `faqs`, so the on-page copy and
 * the structured data are generated from the same source and never drift.
 */
export function buildFaqJsonLd(faqs: Faq[]): FaqJsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** A schema.org WebSite object for the site. */
export interface WebsiteJsonLd {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
  publisher: { "@type": "Organization"; name: string; url: string };
}

/** Build a schema.org WebSite object from `siteConfig` (home route). */
export function buildWebsiteJsonLd(): WebsiteJsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

/** A schema.org LegalService (LocalBusiness subtype) for the firm. */
export interface LegalServiceJsonLd {
  "@context": "https://schema.org";
  "@type": "LegalService";
  name: string;
  url: string;
  email: string;
  telephone: string;
  image: string;
  logo: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  openingHours: string;
  areaServed: string;
}

/**
 * Build a valid schema.org LegalService object from `siteConfig`, so the firm's
 * on-page details and its structured data are generated from one source. The
 * PostalAddress parts are derived from `siteConfig.address`.
 */
export function buildLocalBusinessJsonLd(): LegalServiceJsonLd {
  const [streetAddress, locality, area, region] =
    siteConfig.address.split(", ");

  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: `+${siteConfig.whatsapp}`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    logo: `${siteConfig.url}/images/logo.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality: `${locality}, ${area}`,
      addressRegion: region,
      addressCountry: "NG",
    },
    openingHours: "Mo-Fr 08:00-17:00",
    areaServed: "Lagos, Nigeria",
  };
}
