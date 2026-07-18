import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";
import { FooterColumn } from "@/components/layout/Footer/FooterColumn";
import { navItems } from "@/data/nav";
import { services } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";
import { CONTACT_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const linkClass =
  "rounded-sm text-sm text-primary-foreground/70 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary";

/** Site footer: brand, quick links, practice areas, contact, and bottom bar. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div className="flex flex-col gap-4">
          <Logo variant="light" />
          <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            {siteConfig.shortAbout}
          </p>
        </div>

        <FooterColumn title="Quick Links">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </FooterColumn>

        <FooterColumn title="Practice Areas">
          <ul className="flex flex-col gap-3">
            {services.map((service) => (
              <li key={service.id}>
                <a href="#practice-areas" className={linkClass}>
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </FooterColumn>

        <FooterColumn title="Contact">
          <address className="flex flex-col gap-3 text-sm text-primary-foreground/70 not-italic">
            <span className="flex items-start gap-2.5">
              <MapPin
                aria-hidden
                className="mt-0.5 size-4 shrink-0 text-accent"
              />
              <span>{siteConfig.address}</span>
            </span>
            <a
              href={CONTACT_LINKS.phone}
              className={cn(linkClass, "flex items-center gap-2.5")}
            >
              <Phone aria-hidden className="size-4 shrink-0 text-accent" />
              <span>{siteConfig.phone}</span>
            </a>
            <a
              href={CONTACT_LINKS.email}
              className={cn(linkClass, "flex items-center gap-2.5")}
            >
              <Mail aria-hidden className="size-4 shrink-0 text-accent" />
              <span>{siteConfig.email}</span>
            </a>
            <span className="flex items-start gap-2.5">
              <Clock
                aria-hidden
                className="mt-0.5 size-4 shrink-0 text-accent"
              />
              <span>{siteConfig.hours}</span>
            </span>
          </address>
        </FooterColumn>
      </Container>

      <div className="border-t border-primary-foreground/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-primary-foreground/60 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-medium text-primary-foreground/80">
            {siteConfig.tagline}
          </p>
        </Container>
      </div>
    </footer>
  );
}
