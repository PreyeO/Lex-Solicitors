import { JsonLd } from "@/components/common/JsonLd";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ContactChannel } from "@/components/landing/Contact/ContactChannel";
import { ContactMap } from "@/components/landing/Contact/ContactMap";
import { contactContent } from "@/data/contactContent";
import { buildLocalBusinessJsonLd } from "@/lib/structuredData";

/** Contact section: data-driven channels + embedded map + LocalBusiness JSON-LD. */
export function Contact() {
  return (
    <Section id="contact" variant="default">
      <JsonLd data={buildLocalBusinessJsonLd()} />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-8">
          <SectionHeading
            as="h2"
            eyebrow={contactContent.eyebrow}
            title={contactContent.title}
            subtitle={contactContent.intro}
          />
          <ul className="flex flex-col gap-5">
            {contactContent.channels.map((channel) => (
              <li key={channel.id}>
                <ContactChannel channel={channel} />
              </li>
            ))}
          </ul>
        </div>
        <ContactMap query={contactContent.mapQuery} />
      </div>
    </Section>
  );
}
