import { About } from "@/components/landing/About";
import { Approach } from "@/components/landing/Approach";
import { ConsultationCta } from "@/components/landing/ConsultationCta";
import { Contact } from "@/components/landing/Contact";
import { Faq } from "@/components/landing/Faq";
import { Hero } from "@/components/landing/Hero";
import { PracticeAreas } from "@/components/landing/PracticeAreas";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { Values } from "@/components/landing/Values";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";

/**
 * Home page — the full landing composition (Phase 8, complete):
 * Hero → TrustStrip → About → WhyChooseUs → PracticeAreas → Approach → Values →
 * Faq → ConsultationCta → Contact. The Footer follows from the root layout.
 */
export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <TrustStrip />
      <About />
      <WhyChooseUs />
      <PracticeAreas />
      <Approach />
      <Values />
      <Faq />
      <ConsultationCta />
      <Contact />
    </main>
  );
}
