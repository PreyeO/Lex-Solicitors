import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

export interface LogoProps {
  className?: string;
  /** `light` swaps to the light mark for dark backgrounds (e.g. footer). */
  variant?: "default" | "light";
  /** Show the wordmark text next to the mark. Defaults to true. */
  showWordmark?: boolean;
  priority?: boolean;
}

const words = siteConfig.name.split(" ");
const primaryName = words.slice(0, -1).join(" ");
const secondaryName = words[words.length - 1];

/** Firm logo: monogram mark (next/image) + optional wordmark, linking home. */
export function Logo({
  className,
  variant = "default",
  showWordmark = true,
  priority = false,
}: LogoProps) {
  const markSrc =
    variant === "light" ? "/images/logo-light.svg" : "/images/logo.svg";

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
        className,
      )}
    >
      <Image
        src={markSrc}
        alt={showWordmark ? "" : siteConfig.name}
        width={40}
        height={40}
        priority={priority}
        unoptimized
        className="size-10 shrink-0"
      />
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-lg font-semibold tracking-tight",
              variant === "light" ? "text-canvas" : "text-ink",
            )}
          >
            {primaryName}
          </span>
          <span className="text-[0.65rem] font-medium tracking-[0.22em] text-accent uppercase">
            {secondaryName}
          </span>
        </span>
      ) : null}
    </Link>
  );
}
