import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { siteConfig } from "@/data/siteConfig";

/** Merge Tailwind class names, resolving conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Build a WhatsApp click-to-chat URL to the firm's number with a prefilled,
 * URL-encoded message.
 */
export function whatsappLink(message: string): string {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** WhatsApp link with a prefilled "I'd like to discuss <title>." message. */
export function whatsappMessageFor(title: string): string {
  return whatsappLink(`I'd like to discuss ${title}.`);
}

/** Google Maps embed URL (no API key) centered on a search query. */
export function mapsEmbedUrl(query: string): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

/** Google Maps directions URL to a destination query. */
export function mapsDirectionsUrl(query: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
}
