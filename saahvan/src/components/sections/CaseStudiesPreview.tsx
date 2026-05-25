import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AnimateIn from "@/components/shared/AnimateIn";

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
    tags: ["Cloud Transformation", "App Modernization"],
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
    tags: ["AI & Automation", "Data Engineering"],
  },
  {
    slug: "cloud-cost-optimization",
    client: "Global Telecom Operator",
    industry: "Telecom",
    title: "Multi-Cloud Cost Optimization & FinOps",
    description:
      "Redesigned cloud infrastructure across AWS and Azure, implementing FinOps practices and automated cost governance that delivered 38% cloud cost reduction within 90 days.",
    metrics: [
      { value: "38%", label: "Cloud cost reduction" },
      { value: "90", label: "Days to value" },
      { value: "$1.8M", label: "Annualized savings" },
    ],
    tags: ["Cloud Transformation", "Enterprise Architecture"],
  },
];

export default function CaseStudiesPreview() {
  return (
    <section
      className="bg-bone section-py"
      aria-labelledby="case-studies-heading"
    >
      <div className="container">
        <AnimateIn className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p className="label text-accent mb-3">Case Studies</p>
              <h2
                id="case-studies-heading"
                className="font-serif font-light text-ink text-balance"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
              >
                Results that
                <br />
                <em>speak for themselves</em>
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dark transition-colors self-start sm:self-end whitespace-nowrap"
            >
              All case studies <ArrowUpRight size={14} />
            </Link>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <AnimateIn key={study.slug} delay={i * 0.1}>
              <Link
                href={`/case-studies/${study.slug}`}
                className="group flex flex-col bg-surface border border-border hover:border-accent/30 hover:shadow-lg rounded-md overflow-hidden transition-all duration-300"
              >
                {/* Top accent */}
                <div className="h-1 bg-accent w-0 group-hover:w-full transition-all duration-500" />

                <div className="p-6 flex flex-col flex-1">
                  {/* Meta */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="label text-muted text-xs">{industry(study.industry)}</span>
                  </div>

                  <h3 className="font-serif text-xl font-medium text-ink mb-3 group-hover:text-accent transition-colors leading-snug">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed flex-1 mb-6">
                    {study.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 pt-5 border-t border-border">
                    {study.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <div className="font-serif text-lg font-medium text-accent">
                          {m.value}
                        </div>
                        <div className="text-xs text-muted mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-6 pb-5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 bg-bone-2 text-muted rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-muted group-hover:text-accent transition-colors flex-shrink-0"
                  />
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function industry(name: string) {
  return name;
}
