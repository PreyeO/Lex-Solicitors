import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { PracticeAreaCard } from "@/components/landing/PracticeAreas/PracticeAreaCard";
import { services } from "@/data/services";

/** Practice Areas: four data-driven cards across the firm's disciplines. */
export function PracticeAreas() {
  return (
    <Section id="practice-areas" variant="default">
      <div className="flex flex-col gap-10 lg:gap-14">
        <SectionHeading
          as="h2"
          align="center"
          eyebrow="Our Practice Areas"
          title="Advisory across the disciplines your business depends on."
          subtitle="Four connected disciplines, delivered by one joined-up team — so your legal, regulatory, governance and tax needs are handled in concert, not in silos."
          className="mx-auto max-w-2xl"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <PracticeAreaCard
              key={service.id}
              service={service}
              index={i + 1}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
