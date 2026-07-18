import type { Service } from "@/types";

/** Practice areas / legal services offered by the firm. */
export const services: Service[] = [
  {
    id: "legal-advisory",
    slug: "legal-advisory",
    title: "Legal Advisory",
    summary:
      "Practical legal guidance and solutions to help clients navigate complex legal issues and make informed business decisions.",
  },
  {
    id: "regulatory-compliance",
    slug: "regulatory-compliance",
    title: "Regulatory Compliance",
    summary:
      "Helping businesses meet statutory and regulatory requirements while minimizing compliance risks.",
  },
  {
    id: "corporate-governance-advisory",
    slug: "corporate-governance-advisory",
    title: "Corporate Governance Advisory",
    summary:
      "Advising on governance frameworks, board effectiveness, and best practices that promote accountability and sustainable growth.",
  },
  {
    id: "tax-consulting",
    slug: "tax-consulting",
    title: "Tax Consulting",
    summary:
      "Strategic tax planning, compliance, and advisory services to optimize tax efficiency and meet regulatory obligations.",
  },
];
