"use client";

import { Container } from "@/components/common/Container";
import { CTAButton } from "@/components/common/CTAButton";
import { Logo } from "@/components/common/Logo";
import { DesktopNav } from "@/components/layout/Navbar/DesktopNav";
import { MobileNav } from "@/components/layout/MobileNav";
import { navItems, navSectionIds } from "@/data/nav";
import { useScrolled } from "@/hooks/useScrolled";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn, whatsappLink } from "@/lib/utils";

// Prefilled WhatsApp consultation link, built once.
const consultationHref = whatsappLink(
  "Hello Lex Haven Solicitors, I'd like to book a consultation.",
);

/**
 * Sticky primary navigation. Transparent at the top of the page, transitioning
 * to a solid blurred surface once scrolled. (When a dark hero lands in a later
 * phase, revisit the top-state text color.)
 */
export function Navbar() {
  const scrolled = useScrolled(24);
  const activeId = useScrollSpy(navSectionIds);

  return (
    <nav
      aria-label="Primary"
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/85 text-foreground shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-ink",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo priority />
        <DesktopNav items={navItems} activeId={activeId} />
        <div className="flex items-center gap-2">
          <CTAButton
            href={consultationHref}
            variant="gold"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Book a Consultation
          </CTAButton>
          <MobileNav activeId={activeId} consultationHref={consultationHref} />
        </div>
      </Container>
    </nav>
  );
}
