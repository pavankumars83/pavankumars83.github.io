import type { Metadata } from "next";
import AnimateIn from "@/components/shared/AnimateIn";
import CTABanner from "@/components/sections/CTABanner";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Purpose-built technology solutions from Saahvan: AI platforms, data modernization programs, cloud migration frameworks, and digital transformation accelerators.",
};

const solutions = [
  {
    category: "AI & Data",
    items: [
      {
        title: "Enterprise AI Readiness Platform",
        description:
          "A structured assessment and implementation program that moves organizations from AI experimentation to enterprise-grade AI in production. Includes governance frameworks, model ops infrastructure, and change management.",
        tags: ["AI Strategy", "MLOps", "Governance"],
      },
      {
        title: "Real-Time Data Intelligence Platform",
        description:
          "An end-to-end data platform architecture combining lakehouse design, real-time streaming, and self-service BI — designed for organizations ready to compete on data.",
        tags: ["Data Engineering", "Analytics", "Real-time"],
      },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      {
        title: "Cloud Migration Accelerator",
        description:
          "A proven methodology for migrating complex enterprise workloads to cloud with zero business disruption. Includes wave planning, dependency mapping, and automated testing frameworks.",
        tags: ["Cloud Migration", "AWS", "Azure", "GCP"],
      },
      {
        title: "FinOps Optimization Program",
        description:
          "A 90-day intensive that delivers measurable cloud cost reduction through architectural optimization, reserved capacity strategy, and ongoing governance automation.",
        tags: ["FinOps", "Cost Optimization", "Governance"],
      },
    ],
  },
  {
    category: "Digital Transformation",
    items: [
      {
        title: "Legacy Modernization Blueprint",
        description:
          "A systematic approach to transforming monolithic legacy systems into cloud-native architectures — with clear risk management, stakeholder alignment, and phased delivery.",
        tags: ["Modernization", "Microservices", "DevSecOps"],
      },
      {
        title: "Enterprise Integration Platform",
        description:
          "A modern API and integration layer that connects disparate enterprise systems — ERPs, CRMs, data platforms — into a coherent, governable enterprise ecosystem.",
        tags: ["Integration", "API Strategy", "ERP", "CRM"],
      },
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-ink text-bone section-py pt-[120px]" aria-labelledby="solutions-heading">
        <div className="container">
          <AnimateIn>
            <p className="label text-accent mb-4">Solutions</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1
              id="solutions-heading"
              className="font-serif font-light text-bone text-balance mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Purpose-built programs
              <br />
              <em className="text-accent not-italic">for enterprise outcomes</em>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p
              className="text-bone/65 max-w-2xl leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)" }}
            >
              Beyond bespoke engagements, Saahvan offers packaged solutions that
              combine proven methodology, accelerator tooling, and expert delivery
              — compressing timelines and de-risking complex transformations.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-bone section-py" aria-label="Solutions grid">
        <div className="container space-y-14">
          {solutions.map((category, ci) => (
            <div key={category.category}>
              <AnimateIn>
                <h2 className="font-serif text-xl font-medium text-ink mb-6 pb-4 border-b border-border">
                  {category.category}
                </h2>
              </AnimateIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {category.items.map((item, i) => (
                  <AnimateIn key={item.title} delay={(ci + i) * 0.06}>
                    <div className="bg-surface border border-border rounded-md p-6 h-full hover:border-accent/30 hover:shadow-md transition-all duration-300 group">
                      <h3 className="font-serif text-lg font-medium text-ink mb-3 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed mb-5">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 bg-accent-light text-accent rounded-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:text-accent-dark transition-colors"
                      >
                        Get details <ArrowUpRight size={12} />
                      </Link>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        heading="Ready to accelerate your transformation?"
        subheading="Our solutions are designed to compress timelines and reduce risk. Talk to our team about which is right for your context."
        primaryLabel="Speak to an Expert"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
        variant="dark"
      />
    </>
  );
}
