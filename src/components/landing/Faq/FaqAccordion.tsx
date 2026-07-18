"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import type { Faq } from "@/types";

export interface FaqAccordionProps {
  faqs: Faq[];
}

/**
 * Single-open FAQ accordion (the only client boundary in this section). Each
 * question is a real <button> (aria-expanded + aria-controls) inside an <h3>;
 * each answer is a role="region" panel labelled by its button and hidden when
 * collapsed. Native buttons give Enter/Space + Tab operation and visible focus;
 * the reveal animation is gated behind `motion-safe`.
 */
export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const uid = useId();

  return (
    <div className="flex w-full flex-col divide-y divide-border border-y border-border">
      {faqs.map((faq) => {
        const open = openId === faq.id;
        const triggerId = `${uid}-t-${faq.id}`;
        const panelId = `${uid}-p-${faq.id}`;

        return (
          <div key={faq.id}>
            <h3 className="flex">
              <button
                id={triggerId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : faq.id)}
                className="flex flex-1 items-center justify-between gap-4 rounded-sm py-5 text-left font-display text-lg font-medium text-ink focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  aria-hidden
                  className={cn(
                    "size-5 shrink-0 text-accent transition-transform duration-200",
                    open && "rotate-180",
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!open}
              className="pb-5 text-base leading-relaxed text-muted-foreground motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-top-1"
            >
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
