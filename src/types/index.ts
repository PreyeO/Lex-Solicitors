/**
 * Shared, app-wide TypeScript interfaces.
 *
 * Data-model shapes (content-as-data in `src/data`) live here. Component prop
 * interfaces are co-located with their components and exported per convention
 * #10; add them in later phases as components are built.
 */

/** A single navigation entry (top bar, navbar, footer, mobile nav). */
export interface NavItem {
  label: string;
  href: string;
  /** Optional nested links for dropdown / grouped menus. */
  children?: NavItem[];
}

/** A practice area / legal service offered by the firm. */
export interface Service {
  id: string;
  slug: string;
  title: string;
  summary: string;
}

/** A core firm value (e.g. Integrity, Diligence). */
export interface Value {
  title: string;
  description: string;
}

/** A frequently asked question entry. */
export interface Faq {
  question: string;
  answer: string;
}

/** Outbound social profile links. All optional — none provided yet. */
export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
  x?: string;
}

/** Central firm + SEO configuration consumed across the app. */
export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  /** Short one-to-two sentence firm blurb (footer, About teaser). */
  shortAbout: string;
  url: string;
  ogImage: string;
  keywords: string[];
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  hours: string;
  established: number;
  social: SocialLinks;
}
