import type { Metadata } from "next";
import AnimateIn from "@/components/shared/AnimateIn";
import CTABanner from "@/components/sections/CTABanner";
import { industries } from "@/content/industries";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Saahvan Solutions serves six major industry verticals with deep domain expertise: Banking, Healthcare, Manufacturing, Telecom, Retail, and Government.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-ink text-bone section-py pt-[120px]" aria-labelledby="industries-heading">
        <div className="container">
          <AnimateIn>
            <p className="label text-accent mb-4">Industries</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1
              id="industries-heading"
              className="font-serif font-light text-bone text-balance mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Sector expertise that
              <br />
              <em className="text-accent not-italic">drives outcomes</em>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p
              className="text-bone/65 max-w-2xl leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)" }}
            >
              We don&apos;t apply generic frameworks to every client. Our teams
              bring deep industry domain knowledge that allows us to speak the
              language of your business and solve problems that horizontal
              consultants miss.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-bone section-py" aria-label="Industry details">
        <div className="container">
          <div className="space-y-6">
            {industries.map((industry, i) => (
              <AnimateIn key={industry.slug} delay={i * 0.07}>
                <div
                  id={industry.slug}
                  className="bg-surface border border-border rounded-md p-8 scroll-mt-24"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h2 className="font-serif text-2xl font-medium text-ink mb-3">
                        {industry.name}
                      </h2>
                      <p className="text-muted leading-relaxed mb-5">
                        {industry.description}
                      </p>
                    </div>
                    <div>
                      <p className="label text-muted/70 mb-3">Key Use Cases</p>
                      <ul className="space-y-2">
                        {industry.useCases.map((uc) => (
                          <li key={uc} className="flex items-start gap-2">
                            <CheckCircle2
                              size={14}
                              className="text-accent mt-0.5 flex-shrink-0"
                            />
                            <span className="text-sm text-ink">{uc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Deep in your industry. Ahead on technology."
        subheading="Tell us your industry context and we'll match you with the right domain and technical expertise."
        primaryLabel="Talk to a Domain Expert"
        primaryHref="/contact"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
        variant="dark"
      />
    </>
  );
}
