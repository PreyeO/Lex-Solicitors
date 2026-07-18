"use client";

import { Menu } from "lucide-react";
import { ctaVariants } from "@/components/common/CTAButton";
import { Logo } from "@/components/common/Logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/data/nav";
import { cn } from "@/lib/utils";

export interface MobileNavProps {
  activeId: string | null;
  consultationHref: string;
}

/**
 * Mobile navigation drawer. Radix Dialog (via shadcn Sheet) provides focus
 * trap, Esc/overlay close, scroll lock, and focus restore; links close on
 * click; animations respect prefers-reduced-motion (global rule).
 */
export function MobileNav({ activeId, consultationHref }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger
        aria-label="Open menu"
        className="inline-flex size-10 items-center justify-center rounded-md text-current transition-colors hover:text-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none md:hidden"
      >
        <Menu aria-hidden className="size-6" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-4/5 max-w-sm gap-0 bg-background p-0"
      >
        <SheetHeader className="border-b border-border p-5">
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
          <Logo />
        </SheetHeader>
        <nav aria-label="Mobile" className="flex flex-col p-5">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = activeId === item.href.replace(/^#/, "");
              return (
                <li key={item.href}>
                  <SheetClose asChild>
                    <a
                      href={item.href}
                      aria-current={active ? "true" : undefined}
                      className={cn(
                        "block rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                        active ? "text-accent" : "text-foreground",
                      )}
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                </li>
              );
            })}
          </ul>
          <SheetClose asChild>
            <a
              href={consultationHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                ctaVariants({ variant: "gold", size: "md" }),
                "mt-6 w-full",
              )}
            >
              Book a Consultation
            </a>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
