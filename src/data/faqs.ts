import type { Faq } from "@/types";

/** Frequently asked questions (source of truth for both UI and JSON-LD). */
export const faqs: Faq[] = [
  {
    id: "services",
    question: "What services does Lex Haven Solicitors offer?",
    answer:
      "We are a multidisciplinary advisory firm providing legal advisory, regulatory compliance, corporate governance advisory, and tax consulting. We help businesses stay compliant, strengthen their governance, and make commercially sound decisions that support sustainable growth.",
  },
  {
    id: "clients",
    question: "What types of clients do you work with?",
    answer:
      "We work with businesses across sectors — from startups establishing their foundations to established organizations navigating regulatory, governance and tax matters. If your business faces legal or regulatory complexity, we can help you approach it with confidence.",
  },
  {
    id: "book-consultation",
    question: "How do I book a consultation?",
    answer:
      "The quickest way is to message us on WhatsApp using any of the 'Book a Consultation' buttons on this page, or email us at contact-us@lexhavensolicitors.com. Tell us briefly what you need and we'll arrange a time to talk.",
  },
  {
    id: "location",
    question: "Where are you located?",
    answer:
      "Our office is at 15 Ebun Otti Estate, Mende, Maryland, Lagos. We work with clients across Lagos and beyond, and can advise remotely where that's more convenient.",
  },
  {
    id: "hours",
    question: "What are your working hours?",
    answer:
      "We're open Monday to Friday, 8:00am to 5:00pm. Messages sent outside those hours will be answered on the next working day.",
  },
  {
    id: "difference",
    question: "What makes Lex Haven different from other firms?",
    answer:
      "We bring legal, regulatory, governance and tax expertise together under one roof, so you get joined-up advice rather than fragmented opinions. We're commercially minded, uphold the highest standards of integrity, and measure our success by the lasting value we create for clients.",
  },
  {
    id: "regulatory",
    question: "Do you help with regulatory approvals and compliance?",
    answer:
      "Yes. We help businesses obtain the licences, permits and approvals they need, and keep them aligned with statutory and regulatory obligations — including compliance reviews, policies and liaison with the relevant authorities.",
  },
  {
    id: "tax",
    question: "Can you advise on tax planning and compliance?",
    answer:
      "Yes. Our tax consulting covers strategic tax planning and efficient structuring, ongoing compliance and filings, and advisory support to help you meet your obligations while optimizing tax efficiency.",
  },
];

/** Closing prompt shown beneath the accordion. */
export const faqContactPrompt = "Still have a question? We're happy to help.";
