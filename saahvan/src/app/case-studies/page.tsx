import type { Metadata } from "next";
import AnimateIn from "@/components/shared/AnimateIn";
import CTABanner from "@/components/sections/CTABanner";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real enterprise transformation outcomes delivered by Saahvan Solutions. Metrics-driven case studies across banking, healthcare, manufacturing, and more.",
};

const caseStudies = [
  {
    slug: "core-banking-modernization",
    client: "Leading Private Bank",
    industry: "Banking & Financial Services",
    title: "Core Banking Platform Modernization",
    description:
      "Transformed a monolithic core banking system into a cloud-native microservices architecture, enabling real-time transaction processing and new product launch in under 4 weeks.",
    metrics: [
      { value: "60%", label: "Faster deployments" },
      { value: "99.99%", label: "System uptime" },
      { value: "3x", label: "Team velocity" },
    ],
    services: ["Cloud Transformation", "App Modernization"],
    duration: "18 months",
  },
  {
    slug: "ai-clinical-operations",
    client: "Multi-Specialty Hospital Group",
    industry: "Healthcare",
    title: "AI-Powered Clinical Operations Platform",
    description:
      "Built an enterprise AI platform that automates clinical documentation, predicts patient readmission risk, and optimizes bed allocation — reducing administrative burden by 65%.",
    metrics: [
      { value: "65%", label: "Admin time saved" },
      { value: "40%", label: "Readmission reduction" },
      { value: "$2.4M", label: "Annual savings" },
    ],
    services: ["AI & Automation", "Data Engineering"],
    duration: "9 months",
  },
  {
    slug: "cloud-cost-optimization",
    client: "Global Telecom Operator",
    industry: "Telecom",
    title: "Multi-Cloud Cost Optimization & FinOps",
    description:
      "Redesigned cloud infrastructure across AWS and Azure, implementing FinOps practices and automated cost governance delivering 38% cloud cost reduction within 90 days.",
    metrics: [
      { value: "38%", label: "Cloud cost reduction" },
      { value: "90", label: "Days to value" },
      { value: "$1.8M", label: "Annualized savings" },
    ],
    services: ["Cloud Transformation", "Enterprise Architecture"],
    duration: "3 months",
  },
  {
    slug: "data-platform-manufacturing",
    client: "Global Auto Manufacturer",
    industry: "Manufacturing",
    title: "Real-Time Supply Chain Intelligence Platform",
    description:
      "Designed and built a unified supply chain data platform with real-time event streaming and predictive analytics — transforming reactive operations into proactive decision-making.",
    metrics: [
      { value: "72%", label: "Forecast accuracy" },
      { value: "45%", label: "Disruption response time" },
      { value: "8x", label: "Analytics speed" },
    ],
    services: ["Data Engineering", "AI & Automation"],
    duration: "12 months",
  },
  {
    slug: "zero-trust-security",
    client: "Tier 1 Insurance Group",
    industry: "Financial Services",
    title: "Enterprise Zero Trust Security Architecture",
    description:
      "Implemented a comprehensive zero-trust security architecture across a 45,000-employee enterprise, achieving SOC 2 Type II certification and significant risk reduction.",
    metrics: [
      { value: "78%", label: "Attack surface reduction" },
      { value: "SOC 2", label: "Type II certified" },
      { value: "100%", label: "Cloud workloads secured" },
    ],
    services: ["Cybersecurity", "Enterprise Architecture"],
    duration: "14 months",
  },
  {
    slug: "erp-retail-transformation",
    client: "National Retail Chain",
    industry: "Retail",
    title: "SAP S/4HANA Enterprise Transformation",
    description:
      "Led a full SAP S/4HANA implementation across 180 stores, integrating with custom omnichannel platforms and delivering a unified view of inventory, orders, and customers.",
    metrics: [
      { value: "35%", label: "Process efficiency gain" },
      { value: "180", label: "Stores integrated" },
      { value: "6mo", label: "Ahead of schedule" },
    ],
    services: ["ERP / CRM Consulting", "Data Engineering"],
    duration: "24 months",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-ink text-bone section-py pt-[120px]" aria-labelledby="case-studies-heading">
        <div className="container">
          <AnimateIn>
            <p className="label text-accent mb-4">Case Studies</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1
              id="case-studies-heading"
              className="font-serif font-light text-bone text-balance mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Transformation outcomes
              <br />
              <em className="text-accent not-italic">you can measure</em>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p
              className="text-bone/65 max-w-2xl leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)" }}
            >
              Every engagement is held accountable to business outcomes. These case
              studies represent real transformations — with real metrics — delivered
              for real enterprise clients.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-bone section-py" aria-label="Case studies grid">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {caseStudies.map((study, i) => (
              <AnimateIn key={study.slug} delay={i * 0.07}>
                <div className="group bg-surface border border-border hover:border-accent/30 hover:shadow-lg rounded-md overflow-hidden transition-all duration-300 flex flex-col h-full">
                  <div className="h-1 bg-accent w-0 group-hover:w-full transition-all duration-500" />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="label text-xs text-muted bg-bone-2 px-2 py-1 rounded-sm">
                        {study.industry}
                      </span>
                      <span className="label text-xs text-muted">{study.duration}</span>
                    </div>
                    <h2 className="font-serif text-xl font-medium text-ink mb-3 group-hover:text-accent transition-colors">
                      {study.title}
                    </h2>
                    <p className="text-sm text-muted leading-relaxed flex-1 mb-5">
                      {study.description}
                    </p>
                    <div className="grid grid-cols-3 gap-2 py-4 border-y border-border mb-4">
                      {study.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                          <div className="font-serif text-xl font-medium text-accent">
                            {m.value}
                          </div>
                          <div className="text-xs text-muted mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {study.services.map((s) => (
                          <span
                            key={s}
                            className="text-xs px-2 py-0.5 bg-accent-light text-accent rounded-sm"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <ArrowUpRight
                        size={14}
                        className="text-muted group-hover:text-accent transition-colors flex-shrink-0"
                      />
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to be our next success story?"
        subheading="Every case study started with a conversation. Tell us your challenge and let's explore what's possible."
        primaryLabel="Start a Conversation"
        primaryHref="/contact"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
        variant="dark"
      />
    </>
  );
}
