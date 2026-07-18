import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/common/Container";

export interface SectionProps {
  /** Anchor id for in-page navigation / scroll-spy. Required. */
  id: string;
  children: ReactNode;
  className?: string;
  /** Background treatment, mapped to design tokens. */
  variant?: "default" | "muted" | "ink";
  /** Wrap children in a Container. Defaults to true. */
  contained?: boolean;
}

const sectionVariants: Record<NonNullable<SectionProps["variant"]>, string> = {
  default: "bg-background text-foreground",
  muted: "bg-muted text-foreground",
  ink: "bg-primary text-primary-foreground",
};

/** Semantic `<section>` with anchor id, vertical rhythm, and token background. */
export function Section({
  id,
  children,
  className,
  variant = "default",
  contained = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-16 sm:py-20 lg:py-24",
        sectionVariants[variant],
        className,
      )}
    >
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
