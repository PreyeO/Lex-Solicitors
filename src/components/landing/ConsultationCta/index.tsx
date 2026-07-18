import { Container } from "@/components/common/Container";
import { CTAButton } from "@/components/common/CTAButton";
import { PillarMotif } from "@/components/common/PillarMotif";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { consultationCtaContent } from "@/data/contactContent";
import { CONSULTATION_MESSAGE, CONTACT_LINKS } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

/** Primary conversion band: confident ink section with WhatsApp + email CTAs. */
export function ConsultationCta() {
  const { eyebrow, title, subtitle, primaryCta, secondaryCta } =
    consultationCtaContent;

  return (
    <Section
      id="consultation"
      variant="ink"
      contained={false}
      className="relative isolate overflow-hidden"
    >
      <PillarMotif className="pointer-events-none absolute inset-y-0 right-0 -z-10 h-full w-2/3 text-primary-foreground/5 sm:w-1/2" />
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
          <SectionHeading
            as="h2"
            align="center"
            tone="inverted"
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <CTAButton
              href={whatsappLink(CONSULTATION_MESSAGE)}
              variant="gold"
              size="lg"
              aria-label={`${primaryCta.label} on WhatsApp`}
            >
              {primaryCta.label}
            </CTAButton>
            <CTAButton
              href={CONTACT_LINKS.email}
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              {secondaryCta.label}
            </CTAButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
