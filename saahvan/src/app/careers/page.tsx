import type { Metadata } from "next";
import AnimateIn from "@/components/shared/AnimateIn";
import CTABanner from "@/components/sections/CTABanner";
import { ArrowUpRight, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Saahvan Solutions. We're hiring senior engineers, architects, and consultants who want to work on complex enterprise transformation challenges.",
};

const openings = [
  {
    title: "Senior Enterprise Architect",
    team: "Architecture Practice",
    location: "Mumbai / Remote",
    type: "Full-time",
    description:
      "Lead architecture design for complex enterprise transformation programs. Requires 10+ years of enterprise architecture experience and strong stakeholder management skills.",
    skills: ["Enterprise Architecture", "AWS/Azure/GCP", "Microservices", "TOGAF"],
  },
  {
    title: "AI / ML Engineer",
    team: "AI & Data Practice",
    location: "Mumbai / Bangalore / Remote",
    type: "Full-time",
    description:
      "Design and build production AI systems for enterprise clients. Requires deep expertise in ML engineering, MLOps, and experience deploying LLMs in regulated environments.",
    skills: ["Python", "PyTorch/TensorFlow", "MLOps", "LLMs", "AWS SageMaker"],
  },
  {
    title: "Cloud Solutions Architect",
    team: "Cloud Practice",
    location: "Mumbai / Remote",
    type: "Full-time",
    description:
      "Architect and deliver cloud transformation programs for enterprise clients across AWS, Azure, and GCP. Strong infrastructure-as-code and FinOps knowledge required.",
    skills: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "FinOps"],
  },
  {
    title: "Data Platform Engineer",
    team: "Data Engineering Practice",
    location: "Remote (India)",
    type: "Full-time",
    description:
      "Design and build enterprise data platforms, data lakehouses, and streaming pipelines for large-scale analytics and AI workloads.",
    skills: ["Apache Spark", "dbt", "Databricks", "Kafka", "Snowflake"],
  },
  {
    title: "Cybersecurity Architect",
    team: "Security Practice",
    location: "Mumbai / Remote",
    type: "Full-time",
    description:
      "Design zero-trust security architectures and lead security programs for regulated enterprise clients. CISSP or similar certification preferred.",
    skills: ["Zero Trust", "Cloud Security", "SIEM", "SOC 2", "ISO 27001"],
  },
];

const benefits = [
  {
    title: "Senior-only teams",
    description:
      "You'll work alongside experienced practitioners — not manage junior consultants. Every engagement is architect-led.",
  },
  {
    title: "Real complexity",
    description:
      "We take on the hardest problems — not staff augmentation or feature factory work. Expect challenging, meaningful work.",
  },
  {
    title: "Flexible work",
    description:
      "Remote-first with optional offices in Mumbai and Bangalore. We care about outcomes, not hours at a desk.",
  },
  {
    title: "Continuous learning",
    description:
      "Annual learning budget, conference attendance, certification support, and internal knowledge sharing rituals.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-ink text-bone section-py pt-[120px]" aria-labelledby="careers-heading">
        <div className="container">
          <AnimateIn>
            <p className="label text-accent mb-4">Careers</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1
              id="careers-heading"
              className="font-serif font-light text-bone text-balance mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Work on problems
              <br />
              <em className="text-accent not-italic">that actually matter</em>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p
              className="text-bone/65 max-w-2xl leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)" }}
            >
              We&apos;re building a team of exceptional practitioners — people who
              bring both deep technical expertise and the strategic thinking to
              drive enterprise change. If that&apos;s you, we want to talk.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-bone section-py-sm border-b border-border" aria-label="Why join us">
        <div className="container">
          <AnimateIn className="mb-10">
            <h2 className="font-serif text-2xl font-medium text-ink">
              Why join Saahvan?
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <AnimateIn key={b.title} delay={i * 0.08}>
                <div className="bg-surface border border-border rounded-md p-5 h-full">
                  <h3 className="font-serif text-base font-medium text-ink mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{b.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="bg-surface section-py" aria-labelledby="openings-heading">
        <div className="container">
          <AnimateIn className="mb-10">
            <h2 id="openings-heading" className="font-serif text-2xl font-medium text-ink">
              Open positions
            </h2>
          </AnimateIn>
          <div className="space-y-4">
            {openings.map((role, i) => (
              <AnimateIn key={role.title} delay={i * 0.07}>
                <div className="group bg-bone border border-border hover:border-accent/30 rounded-md p-6 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="font-serif text-lg font-medium text-ink group-hover:text-accent transition-colors">
                          {role.title}
                        </h3>
                        <span className="label text-xs px-2 py-0.5 bg-accent-light text-accent rounded-sm">
                          {role.team}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="flex items-center gap-1 text-xs text-muted">
                          <MapPin size={11} /> {role.location}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted">
                          <Clock size={11} /> {role.type}
                        </span>
                      </div>
                      <p className="text-sm text-muted leading-relaxed mb-3">
                        {role.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {role.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs px-2 py-0.5 bg-bone-2 text-muted rounded-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="flex-shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 border border-border text-sm font-medium text-ink hover:border-accent hover:text-accent transition-all rounded-sm self-start"
                    >
                      Apply <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.3} className="mt-10">
            <div className="bg-ink text-bone rounded-md p-8 text-center">
              <h3 className="font-serif text-xl mb-2">
                Don&apos;t see the right role?
              </h3>
              <p className="text-bone/65 text-sm mb-5 max-w-md mx-auto">
                We&apos;re always looking for exceptional practitioners. Send us a
                note and tell us how you can contribute.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white hover:bg-accent-dark transition-colors text-sm font-medium rounded-sm"
              >
                Send an Open Application <ArrowUpRight size={14} />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <CTABanner
        heading="Ready to do the best work of your career?"
        subheading="We're selective — and we're building something exceptional. If you have the calibre, we'd love to talk."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        secondaryLabel="Learn About Us"
        secondaryHref="/about"
        variant="bone"
      />
    </>
  );
}
