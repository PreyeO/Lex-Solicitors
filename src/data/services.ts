import type { Service } from "@/types";

/** Practice areas / legal services offered by the firm (client priority order). */
export const services: Service[] = [
  {
    id: "legal-advisory",
    slug: "legal-advisory",
    title: "Legal Advisory",
    summary:
      "Practical legal guidance and solutions to help clients navigate complex legal issues and make informed business decisions.",
    description:
      "We provide practical, business-focused legal guidance that helps clients understand their options and make confident, well-informed decisions. From day-to-day commercial questions to complex, high-stakes matters, we translate legal complexity into clear, actionable advice.",
    capabilities: [
      "Commercial contract drafting & review",
      "Business structuring & transactions",
      "Legal risk assessment & due diligence",
      "Legal opinions & advisory memoranda",
    ],
    icon: "file-text",
  },
  {
    id: "regulatory-compliance",
    slug: "regulatory-compliance",
    title: "Regulatory Compliance",
    summary:
      "Helping businesses meet statutory and regulatory requirements while minimizing compliance risks.",
    description:
      "We help businesses meet their statutory and regulatory obligations while minimizing exposure and risk. We keep clients aligned with an evolving regulatory landscape and confident in their standing with the authorities that govern their sector.",
    capabilities: [
      "Licensing, permits & regulatory approvals",
      "Sector-specific compliance guidance",
      "Compliance audits & gap assessments",
      "Policies, procedures & regulator liaison",
    ],
    icon: "clipboard-check",
  },
  {
    id: "corporate-governance-advisory",
    slug: "corporate-governance-advisory",
    title: "Corporate Governance Advisory",
    summary:
      "Advising on governance frameworks, board effectiveness, and best practices that promote accountability and sustainable growth.",
    description:
      "We advise organizations on the governance frameworks and practices that promote accountability, transparency and sustainable growth. We help boards and management build the structures that earn stakeholder trust and stand up to scrutiny.",
    capabilities: [
      "Governance frameworks & board effectiveness",
      "Corporate policies & best-practice standards",
      "Company secretarial & statutory support",
      "Shareholder & stakeholder governance",
    ],
    icon: "landmark",
  },
  {
    id: "tax-consulting",
    slug: "tax-consulting",
    title: "Tax Consulting",
    summary:
      "Strategic tax planning, compliance, and advisory services to optimize tax efficiency and meet regulatory obligations.",
    description:
      "We deliver strategic tax planning, compliance and advisory services that optimize tax efficiency and keep clients aligned with their obligations. Our counsel is proactive — structured to protect value and avoid costly surprises.",
    capabilities: [
      "Tax planning & efficient structuring",
      "Tax compliance, filings & reporting",
      "Tax advisory & regulatory obligations",
      "Tax controversy & dispute support",
    ],
    icon: "calculator",
  },
];
