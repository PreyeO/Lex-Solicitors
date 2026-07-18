import type { ConsultationCtaContent, ContactContent } from "@/types";
import { siteConfig } from "@/data/siteConfig";
import { CONSULTATION_MESSAGE, CONTACT_LINKS } from "@/lib/constants";
import { mapsDirectionsUrl, whatsappLink } from "@/lib/utils";

const mapQuery = `${siteConfig.name}, ${siteConfig.address}`;

export const consultationCtaContent: ConsultationCtaContent = {
  eyebrow: "Get Started",
  title: "Let's talk about what your business needs.",
  subtitle:
    "Book a consultation and get clear, practical counsel from a team that treats your objectives as its own.",
  primaryCta: { label: "Book a Consultation", type: "whatsapp" },
  secondaryCta: { label: "Email Us", type: "email" },
};

export const contactContent: ContactContent = {
  eyebrow: "Contact Us",
  title: "Reach the firm.",
  intro:
    "Send us a message or call during working hours — we'll respond promptly and arrange a time to discuss your matter.",
  channels: [
    {
      id: "whatsapp",
      icon: "whatsapp",
      label: "WhatsApp",
      value: siteConfig.phone,
      href: whatsappLink(CONSULTATION_MESSAGE),
      external: true,
    },
    {
      id: "phone",
      icon: "phone",
      label: "Phone",
      value: siteConfig.phone,
      href: CONTACT_LINKS.phone,
    },
    {
      id: "email",
      icon: "mail",
      label: "Email",
      value: siteConfig.email,
      href: CONTACT_LINKS.email,
    },
    {
      id: "address",
      icon: "map-pin",
      label: "Office",
      value: siteConfig.address,
      href: mapsDirectionsUrl(mapQuery),
      external: true,
    },
    {
      id: "hours",
      icon: "clock",
      label: "Working Hours",
      value: siteConfig.hours,
    },
  ],
  mapQuery,
};
