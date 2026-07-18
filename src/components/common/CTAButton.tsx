import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        gold: "bg-accent text-accent-foreground hover:bg-accent/90",
        outline:
          "border border-input bg-transparent text-foreground hover:bg-muted",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface CTAButtonProps extends VariantProps<typeof ctaVariants> {
  children: ReactNode;
  className?: string;
  /** When set, renders a link; otherwise a `<button>`. */
  href?: string;
  /** Force external-link treatment (target=_blank + rel). Auto-detected for http(s). */
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  "aria-label"?: string;
}

/** Polymorphic call-to-action: `<a>` / Next `<Link>` when `href` is set, else `<button>`. */
export function CTAButton({
  children,
  className,
  variant,
  size,
  href,
  external,
  type = "button",
  disabled,
  "aria-label": ariaLabel,
}: CTAButtonProps) {
  const classes = cn(ctaVariants({ variant, size }), className);

  if (href) {
    const isProtocol = /^(https?:|mailto:|tel:)/.test(href);
    const isExternal = external ?? /^https?:/.test(href);

    if (isProtocol || href.startsWith("#")) {
      return (
        <a
          href={href}
          className={classes}
          aria-label={ariaLabel}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
