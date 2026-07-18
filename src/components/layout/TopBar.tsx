import { Clock, Mail, Phone } from "lucide-react";
import { Container } from "@/components/common/Container";
import { siteConfig } from "@/data/siteConfig";
import { CONTACT_LINKS } from "@/lib/constants";

const linkClass =
  "inline-flex items-center gap-1.5 rounded-sm transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary";

/** Thin utility bar above the navbar: hours, phone, email. Hidden on mobile. */
export function TopBar() {
  return (
    <div className="hidden border-b border-primary-foreground/15 bg-primary text-primary-foreground md:block">
      <Container className="flex h-10 items-center justify-end gap-6 text-xs">
        <span className="inline-flex items-center gap-1.5 text-primary-foreground/80">
          <Clock aria-hidden className="size-3.5 text-accent" />
          <span>{siteConfig.hours}</span>
        </span>
        <a href={CONTACT_LINKS.phone} className={linkClass}>
          <Phone aria-hidden className="size-3.5 text-accent" />
          <span>{siteConfig.phone}</span>
        </a>
        <a href={CONTACT_LINKS.email} className={linkClass}>
          <Mail aria-hidden className="size-3.5 text-accent" />
          <span>{siteConfig.email}</span>
        </a>
      </Container>
    </div>
  );
}
