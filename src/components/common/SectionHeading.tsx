import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  /** Small uppercase label above the title. */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  /** Heading level, to keep the document outline correct. */
  as?: "h1" | "h2" | "h3";
  className?: string;
}

/** Reusable eyebrow + display heading + subtitle block. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        centered && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
          {eyebrow}
        </span>
      ) : null}
      <Heading className="font-display text-3xl font-semibold text-balance text-foreground sm:text-4xl">
        {title}
      </Heading>
      {subtitle ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
            centered && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
