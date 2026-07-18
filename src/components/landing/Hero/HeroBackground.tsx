import { PillarMotif } from "@/components/common/PillarMotif";

/**
 * Decorative hero backdrop over the ink (navy) section: a faint top sheen, two
 * soft brand-color glows in the corners, and a restrained pillar motif that
 * echoes the logo's columns. Purely decorative and low-opacity so it never
 * affects text contrast. Server Component.
 */
export function HeroBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Top sheen + a soft gold glow, top-right — both cheap gradients (no
          blur filters, which would delay the hero LCP paint). */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-foreground/6 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-radial-[at_85%_0%] from-accent/15 to-transparent to-70%" />

      {/* Pillar / column motif */}
      <PillarMotif className="absolute inset-y-0 right-0 h-full w-2/3 text-primary-foreground/5 sm:w-1/2" />
    </div>
  );
}
