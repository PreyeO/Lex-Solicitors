import type { ValueItem } from "@/types";

export interface ValueCardProps {
  item: ValueItem;
  /** 1-based position, shown as a subtle gold numeral. */
  index: number;
}

/** A single value on the ink band: gold numeral, title, description (light text). */
export function ValueCard({ item, index }: ValueCardProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <span
        aria-hidden
        className="font-display text-3xl font-semibold text-accent"
      >
        {String(index).padStart(2, "0")}
      </span>
      <h3 className="font-display text-2xl font-semibold text-primary-foreground">
        {item.title}
      </h3>
      <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
        {item.description}
      </p>
    </div>
  );
}
