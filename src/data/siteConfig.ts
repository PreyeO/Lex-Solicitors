import type { SiteConfig } from "@/types";

/**
 * Single source of truth for firm details and SEO defaults.
 * Referenced by metadata (layout), structured data (JsonLd), and UI.
 */
export const siteConfig: SiteConfig = {
  name: "Lex Haven Solicitors",
  tagline: "Expertise. Integrity. Results.",
  description:
    "Lex Haven Solicitors is a Lagos law firm for legal advisory, regulatory compliance, corporate governance and tax consulting — practical, principled counsel.",
  shortAbout:
    "A multidisciplinary advisory firm delivering legal advisory, regulatory compliance, corporate governance and tax consulting to support sustainable business growth.",
  // Prefers the production URL from the environment (set on Vercel); falls back
  // to the canonical domain so metadata/sitemap/canonical stay correct locally.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lexhavensolicitors.com",
  ogImage: "/og-image.png",
  keywords: [
    "Lex Haven Solicitors",
    "law firm Lagos",
    "solicitors Nigeria",
    "legal services Lagos",
    "corporate law",
    "commercial law",
    "dispute resolution",
    "legal counsel Nigeria",
  ],
  email: "contact-us@lexhavensolicitors.com",
  phone: "08066672405",
  whatsapp: "2348066672405",
  address: "15 Ebun Otti Estate, Mende, Maryland, Lagos",
  hours: "Mon – Fri, 8:00am – 5:00pm",
  established: 2025,
  // No social profiles provided yet.
  social: {},
};
