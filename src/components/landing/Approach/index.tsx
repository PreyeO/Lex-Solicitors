import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ApproachStep } from "@/components/landing/Approach/ApproachStep";
import { approachContent } from "@/data/approachContent";

/** Our Approach: a 4-step process timeline (horizontal desktop, vertical mobile). */
export function Approach() {
  const { steps } = approachContent;

  return (
    <Section id="approach" variant="muted">
      <div className="flex flex-col gap-10 lg:gap-14">
        <SectionHeading
          as="h2"
          eyebrow={approachContent.eyebrow}
          title={approachContent.title}
          subtitle={approachContent.subtitle}
          className="max-w-2xl"
        />
        <ol className="grid grid-cols-1 lg:grid-cols-4">
          {steps.map((step, i) => (
            <ApproachStep
              key={step.id}
              step={step}
              isLast={i === steps.length - 1}
            />
          ))}
        </ol>
      </div>
    </Section>
  );
}
