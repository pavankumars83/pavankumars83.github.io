import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AnimateIn from "@/components/shared/AnimateIn";
import CTABanner from "@/components/sections/CTABanner";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Saahvan's full-stack enterprise technology services: Enterprise Architecture, AI & Automation, Cloud Transformation, Data Engineering, Cybersecurity, and more.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-ink text-bone section-py pt-[120px]" aria-labelledby="services-heading">
        <div className="container">
          <AnimateIn>
            <p className="label text-accent mb-4">Our Services</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1
              id="services-heading"
              className="font-serif font-light text-bone text-balance mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Deep expertise across
              <br />
              <em className="text-accent not-italic">the full technology stack</em>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p
              className="text-bone/65 max-w-2xl leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)" }}
            >
              Every engagement is led by senior architects and domain experts — not
              junior consultants with slide decks. We deliver structured advisory,
              hands-on engineering, and governance-driven outcomes.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-bone section-py" aria-label="Services list">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <AnimateIn key={service.slug} delay={i * 0.07}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col bg-surface border border-border hover:border-accent/30 hover:shadow-lg rounded-md p-7 transition-all duration-300 h-full"
                >
                  <div className="flex items-start justify-between mb-5">
                    <h2 className="font-serif text-xl font-medium text-ink group-hover:text-accent transition-colors">
                      {service.title}
                    </h2>
                    <ArrowUpRight
                      size={18}
                      className="text-muted group-hover:text-accent mt-1 flex-shrink-0 transition-colors"
                    />
                  </div>
                  <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <div>
                    <p className="label text-muted/70 mb-3">Key Capabilities</p>
                    <div className="flex flex-wrap gap-2">
                      {service.capabilities.slice(0, 3).map((cap) => (
                        <span
                          key={cap}
                          className="text-xs px-2.5 py-1 bg-accent-light text-accent rounded-sm"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="bg-surface border-y border-border section-py" aria-labelledby="engagement-heading">
        <div className="container">
          <AnimateIn className="mb-14 text-center">
            <p className="label text-accent mb-3">Engagement Models</p>
            <h2
              id="engagement-heading"
              className="font-serif font-light text-ink"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
            >
              Work with us your way
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "Strategic Sprint",
                duration: "2–4 Weeks",
                description:
                  "A focused, time-boxed engagement that delivers a clear architecture blueprint, risk register, and delivery roadmap. Ideal for organizations starting a transformation or evaluating technology decisions.",
                outcomes: [
                  "Architecture Assessment Report",
                  "Risk & Opportunity Register",
                  "90-day Delivery Roadmap",
                  "Technology Recommendation Brief",
                ],
                cta: "Start a Sprint",
              },
              {
                name: "Retainer Advisory",
                duration: "Ongoing",
                description:
                  "A continuous advisory relationship that embeds Saahvan expertise into your technology governance. Ideal for organizations undergoing multi-phase transformation or managing complex vendor ecosystems.",
                outcomes: [
                  "Weekly Architecture Reviews",
                  "Continuous Risk Monitoring",
                  "Strategic Decision Support",
                  "Quarterly Transformation Review",
                ],
                cta: "Explore Retainer",
              },
            ].map((model, i) => (
              <AnimateIn key={model.name} delay={i * 0.1}>
                <div className="border border-border rounded-md p-7 h-full bg-bone/30">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-serif text-xl text-ink">{model.name}</h3>
                    <span className="label text-accent text-xs bg-accent-light px-2 py-1 rounded-sm">
                      {model.duration}
                    </span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed mb-5">
                    {model.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {model.outcomes.map((o) => (
                      <li key={o} className="flex items-center gap-2 text-sm text-ink">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {o}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dark transition-colors"
                  >
                    {model.cta} <ArrowUpRight size={14} />
                  </Link>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Not sure which service you need?"
        subheading="Our architects will assess your situation and recommend the right engagement model for your context."
        primaryLabel="Talk to an Architect"
        primaryHref="/contact"
        secondaryLabel="View Case Studies"
        secondaryHref="/case-studies"
        variant="dark"
      />
    </>
  );
}
