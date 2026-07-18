import { About } from "@/components/landing/About";
import { Approach } from "@/components/landing/Approach";
import { Hero } from "@/components/landing/Hero";
import { PracticeAreas } from "@/components/landing/PracticeAreas";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { Values } from "@/components/landing/Values";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";

/**
 * Home page.
 *
 * Phase 6: Hero → TrustStrip → About → WhyChooseUs → PracticeAreas → Approach →
 * Values. Remaining landing sections (Faq, Contact, …) are composed below in
 * later phases; the spacer keeps a seam for what follows.
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
      {/* Placeholder for the remaining sections (built in later phases). */}
      <div className="min-h-[24vh]" />
    </main>
  );
}
