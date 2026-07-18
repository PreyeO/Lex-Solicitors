/**
 * Landing-section content types (copy-as-data in `src/data`).
 */

/** A call-to-action. `type` selects a channel (wa.me / mailto); else use `href`. */
export interface HeroCta {
  label: string;
  type?: "whatsapp" | "email";
  href?: string;
}

/** Hero section copy. */
export interface HeroContent {
  eyebrow: string;
  headline: string;
  /** Alternate headlines kept for preview / selection. */
  headlineAlternates: string[];
  subhead: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
  /** Short inline meta items (e.g. the tagline split into three). */
  meta: string[];
}

/** A labelled fact in the About definition list. */
export interface AboutFact {
  label: string;
  value: string;
}

/** About section copy. */
export interface AboutContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  facts: AboutFact[];
  cta: HeroCta;
}

/** A single "Why Choose Us" differentiator card. */
export interface Differentiator {
  id: string;
  icon: "layers" | "briefcase" | "shield-check" | "award";
  title: string;
  description: string;
}

/** Why Choose Us section copy. */
export interface WhyChooseUsContent {
  eyebrow: string;
  title: string;
  items: Differentiator[];
}

/** A single step in the "Our Approach" process timeline. */
export interface ApproachStep {
  id: string;
  number: number;
  title: string;
  description: string;
}

/** Our Approach section copy. */
export interface ApproachContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  steps: ApproachStep[];
}

/** A single firm value. */
export interface ValueItem {
  id: string;
  title: string;
  description: string;
}

/** Our Values section copy. */
export interface ValuesContent {
  eyebrow: string;
  title: string;
  items: ValueItem[];
  cta: HeroCta;
}

/** Consultation CTA band copy. */
export interface ConsultationCtaContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
}

/** A single contact channel (WhatsApp, phone, email, address, hours). */
export interface ContactChannel {
  id: string;
  icon: "whatsapp" | "phone" | "mail" | "map-pin" | "clock";
  label: string;
  value: string;
  /** Omitted for plain-text channels (e.g. working hours). */
  href?: string;
  external?: boolean;
}

/** Contact section copy. */
export interface ContactContent {
  eyebrow: string;
  title: string;
  intro: string;
  channels: ContactChannel[];
  mapQuery: string;
}
