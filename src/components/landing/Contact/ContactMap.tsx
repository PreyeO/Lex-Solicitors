import { ArrowUpRight } from "lucide-react";
import { mapsDirectionsUrl, mapsEmbedUrl } from "@/lib/utils";

export interface ContactMapProps {
  query: string;
}

/** Lazy-loaded Google Maps embed + a "Get Directions" link (new tab). */
export function ContactMap({ query }: ContactMapProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-80 overflow-hidden rounded-2xl border border-border lg:h-auto lg:flex-1">
        <iframe
          title="Map showing Lex Haven Solicitors office location"
          src={mapsEmbedUrl(query)}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="size-full"
        />
      </div>
      <a
        href={mapsDirectionsUrl(query)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 self-start rounded-sm text-sm font-semibold text-ink underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
      >
        Get Directions
        <ArrowUpRight aria-hidden className="size-4 text-accent" />
      </a>
    </div>
  );
}
