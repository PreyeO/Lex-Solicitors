import { CTAButton } from "@/components/common/CTAButton";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ValueCard } from "@/components/landing/Values/ValueCard";
import { valuesContent } from "@/data/approachContent";
import { CONSULTATION_MESSAGE } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

/**
 * Our Values on a deep-navy band — the emotional close before Contact. The
 * three values (Expertise · Integrity · Results) echo the brand tagline, then a
 * single gold CTA nudges conversion.
 */
export function Values() {
  return (
    <Section id="values" variant="ink">
      <div className="flex flex-col items-center gap-12">
        <SectionHeading
          as="h2"
          align="center"
          tone="inverted"
          eyebrow={valuesContent.eyebrow}
          title={valuesContent.title}
          className="max-w-2xl"
        />
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {valuesContent.items.map((item, i) => (
            <ValueCard key={item.id} item={item} index={i + 1} />
          ))}
        </div>
        <CTAButton
          href={whatsappLink(CONSULTATION_MESSAGE)}
          variant="gold"
          size="lg"
          aria-label={`${valuesContent.cta.label} on WhatsApp`}
        >
          {valuesContent.cta.label}
        </CTAButton>
      </div>
    </Section>
  );
}
