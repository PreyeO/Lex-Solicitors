import type { AboutFact } from "@/types";

export interface AboutFactsProps {
  facts: AboutFact[];
}

/** Definition-style list of truthful firm facts (not stat counters). */
export function AboutFacts({ facts }: AboutFactsProps) {
  return (
    <dl className="grid grid-cols-1 gap-x-8 gap-y-5 border-t border-border pt-6 sm:grid-cols-2">
      {facts.map((fact) => (
        <div key={fact.label} className="flex flex-col gap-1">
          <dt className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            {fact.label}
          </dt>
          <dd className="text-sm font-medium text-ink sm:text-base">
            {fact.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
