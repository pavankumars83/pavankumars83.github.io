import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AnimateIn from "@/components/shared/AnimateIn";
import { industries } from "@/content/industries";

export default function IndustriesSection() {
  return (
    <section
      className="bg-surface section-py border-y border-border"
      aria-labelledby="industries-heading"
    >
      <div className="container">
        <AnimateIn className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p className="label text-accent mb-3">Industries</p>
              <h2
                id="industries-heading"
                className="font-serif font-light text-ink text-balance"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
              >
                Sector expertise
                <br />
                <em>that drives outcomes</em>
              </h2>
            </div>
            <p className="text-muted max-w-xs text-sm leading-relaxed sm:text-right">
              Deep domain knowledge applied across six major industry verticals.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry, i) => (
            <AnimateIn key={industry.slug} delay={i * 0.07}>
              <Link
                href={`/industries#${industry.slug}`}
                className="group flex flex-col p-6 border border-border hover:border-accent/30 rounded-md hover:shadow-md transition-all duration-300 bg-bone/40 hover:bg-surface"
              >
                <h3 className="font-serif text-lg font-medium text-ink mb-2 group-hover:text-accent transition-colors">
                  {industry.name}
                </h3>
                <p className="text-sm text-muted leading-relaxed flex-1 mb-4">
                  {industry.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {industry.useCases.slice(0, 2).map((uc) => (
                    <span
                      key={uc}
                      className="text-xs px-2 py-1 bg-accent-light text-accent rounded-sm"
                    >
                      {uc}
                    </span>
                  ))}
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.3} className="mt-10 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-ink hover:border-ink hover:bg-ink hover:text-bone transition-all text-sm font-medium rounded-sm"
          >
            Explore all industries <ArrowUpRight size={14} />
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
