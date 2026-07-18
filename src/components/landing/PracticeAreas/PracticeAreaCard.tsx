import {
  ArrowRight,
  Calculator,
  Check,
  ClipboardCheck,
  FileText,
  Landmark,
  type LucideIcon,
} from "lucide-react";
import { whatsappMessageFor } from "@/lib/utils";
import type { Service } from "@/types";

const iconMap: Record<Service["icon"], LucideIcon> = {
  "file-text": FileText,
  "clipboard-check": ClipboardCheck,
  landmark: Landmark,
  calculator: Calculator,
};

export interface PracticeAreaCardProps {
  service: Service;
  /** 1-based position, shown as a subtle 01–04 index. */
  index: number;
}

/** Presentational practice-area card: icon, index, title, description, list, link. */
export function PracticeAreaCard({ service, index }: PracticeAreaCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <article className="flex flex-col gap-5 rounded-2xl border border-border bg-background p-8 transition-colors hover:border-accent/40">
      <div className="flex items-center justify-between">
        <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
          <Icon aria-hidden className="size-6" />
        </span>
        <span
          aria-hidden
          className="font-display text-2xl font-semibold text-muted-foreground"
        >
          {String(index).padStart(2, "0")}
        </span>
      </div>

      <h3 className="font-display text-2xl font-semibold text-ink">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
        {service.description}
      </p>

      <ul className="flex flex-col gap-2.5">
        {service.capabilities.map((capability) => (
          <li
            key={capability}
            className="flex items-start gap-2.5 text-sm text-body"
          >
            <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" />
            <span>{capability}</span>
          </li>
        ))}
      </ul>

      <a
        href={whatsappMessageFor(service.title)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Discuss ${service.title} on WhatsApp`}
        className="group/cta mt-auto inline-flex items-center gap-1.5 self-start rounded-sm pt-1 text-sm font-semibold text-ink underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
      >
        <span>Discuss {service.title}</span>
        <ArrowRight
          aria-hidden
          className="size-4 shrink-0 text-accent transition-transform group-hover/cta:translate-x-0.5"
        />
      </a>
    </article>
  );
}
