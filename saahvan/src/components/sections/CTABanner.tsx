import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimateIn from "@/components/shared/AnimateIn";

interface CTABannerProps {
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "dark" | "accent" | "bone";
}

export default function CTABanner({
  heading = "Ready to engineer certainty into your transformation?",
  subheading = "Book a Strategic Scoping Sprint with our team. In 2 weeks, we'll deliver a clear architecture blueprint, risk assessment, and delivery roadmap.",
  primaryLabel = "Book a Strategic Sprint",
  primaryHref = "/contact",
  secondaryLabel = "View Case Studies",
  secondaryHref = "/case-studies",
  variant = "dark",
}: CTABannerProps) {
  const bgMap = {
    dark:   "bg-ink text-bone",
    accent: "bg-accent text-white",
    bone:   "bg-bone-2 text-ink border-t border-b border-border",
  };

  const primaryMap = {
    dark:   "bg-accent text-white hover:bg-accent-dark",
    accent: "bg-white text-accent hover:bg-bone",
    bone:   "bg-ink text-bone hover:bg-ink-2",
  };

  const secondaryMap = {
    dark:   "border border-white/20 text-bone/70 hover:border-white/40 hover:text-bone",
    accent: "border border-white/30 text-white/80 hover:border-white/60 hover:text-white",
    bone:   "border border-border text-ink/70 hover:border-ink hover:text-ink",
  };

  return (
    <section className={`${bgMap[variant]} section-py`} aria-label="Call to action">
      <div className="container-md text-center">
        <AnimateIn>
          <h2
            className="font-serif font-light text-balance mx-auto mb-5"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            {heading}
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <p
            className={`max-w-2xl mx-auto leading-relaxed mb-10 text-pretty ${
              variant === "bone" ? "text-muted" : "opacity-65"
            }`}
            style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)" }}
          >
            {subheading}
          </p>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href={primaryHref}
              className={`inline-flex items-center gap-2 px-8 py-3.5 font-medium rounded-sm text-sm transition-colors ${primaryMap[variant]}`}
            >
              {primaryLabel}
              <ArrowRight size={15} />
            </Link>
            {secondaryLabel && (
              <Link
                href={secondaryHref!}
                className={`inline-flex items-center px-8 py-3.5 font-medium rounded-sm text-sm transition-all ${secondaryMap[variant]}`}
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
