import type { ApproachContent, ValuesContent } from "@/types";

export const approachContent: ApproachContent = {
  eyebrow: "Our Approach",
  title: "A clear, considered way of working.",
  subtitle:
    "Every engagement follows a disciplined path — so you always know where things stand and what happens next.",
  steps: [
    {
      id: "understand",
      number: 1,
      title: "Understand",
      description:
        "We start by listening. We take time to understand your business, your objectives and the commercial realities behind the legal question — because good counsel begins with the right context.",
    },
    {
      id: "advise",
      number: 2,
      title: "Advise",
      description:
        "We translate complexity into clear, practical options. You get advice you can act on: the risks, the trade-offs, and our considered recommendation, in plain language.",
    },
    {
      id: "execute",
      number: 3,
      title: "Execute",
      description:
        "We move from advice to action — drafting, filing, structuring or liaising with the relevant authorities — with precision and attention to detail at every step.",
    },
    {
      id: "partner",
      number: 4,
      title: "Partner",
      description:
        "We stay with you beyond the immediate matter, providing the ongoing counsel that helps you stay compliant, well-governed and ready for what's next.",
    },
  ],
};

export const valuesContent: ValuesContent = {
  eyebrow: "Our Values",
  title: "The principles behind every engagement.",
  items: [
    {
      id: "expertise",
      title: "Expertise",
      description:
        "We combine deep technical knowledge with practical experience to deliver sound, commercially focused solutions.",
    },
    {
      id: "integrity",
      title: "Integrity",
      description:
        "We uphold the highest standards of ethics, professionalism and transparency in every engagement.",
    },
    {
      id: "results",
      title: "Results",
      description:
        "We are committed to delivering measurable outcomes that create lasting value for our clients.",
    },
  ],
  cta: { label: "Start the conversation", type: "whatsapp" },
};
