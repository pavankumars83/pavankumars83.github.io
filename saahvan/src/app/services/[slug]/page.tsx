import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import AnimateIn from "@/components/shared/AnimateIn";
import CTABanner from "@/components/sections/CTABanner";
import { services, getServiceBySlug } from "@/content/services";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const currentIndex = services.findIndex((s) => s.slug === slug);
  const nextService = services[currentIndex + 1] ?? services[0];

  return (
    <>
      {/* Breadcrumb + Hero */}
      <section className="bg-ink text-bone pt-[120px] section-py" aria-labelledby="service-heading">
        <div className="container">
          <AnimateIn>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 label text-bone/50">
                <li>
                  <Link href="/" className="hover:text-bone/80 transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/services" className="hover:text-bone/80 transition-colors">
                    Services
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-accent">{service.shortTitle}</li>
              </ol>
            </nav>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <p className="label text-accent mb-4">Service</p>
            <h1
              id="service-heading"
              className="font-serif font-light text-bone text-balance mb-5"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
            >
              {service.title}
            </h1>
            <p
              className="text-bone/65 max-w-2xl leading-relaxed mb-8"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)" }}
            >
              {service.description}
            </p>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white hover:bg-accent-dark transition-colors rounded-sm text-sm font-medium"
            >
              Book a Consultation <ArrowRight size={15} />
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* Capabilities + Outcomes */}
      <section className="bg-bone section-py" aria-label="Capabilities and outcomes">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Capabilities */}
            <AnimateIn direction="left">
              <h2 className="font-serif text-2xl font-medium text-ink mb-6">
                What we deliver
              </h2>
              <ul className="space-y-3">
                {service.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-accent mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm text-ink">{cap}</span>
                  </li>
                ))}
              </ul>
            </AnimateIn>

            {/* Outcomes */}
            <AnimateIn direction="right" delay={0.1}>
              <h2 className="font-serif text-2xl font-medium text-ink mb-6">
                Outcomes you can expect
              </h2>
              <div className="space-y-4">
                {service.outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="flex items-start gap-3 p-4 bg-surface border border-border rounded-md"
                  >
                    <TrendingUp
                      size={16}
                      className="text-accent mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm text-ink">{outcome}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-surface border-y border-border section-py-sm" aria-label="Relevant industries">
        <div className="container">
          <AnimateIn>
            <div className="flex flex-wrap items-center gap-6">
              <p className="label text-muted">Relevant industries:</p>
              {service.industries.map((ind) => (
                <span
                  key={ind}
                  className="px-4 py-2 border border-border rounded-sm text-sm text-ink hover:border-accent/30 hover:text-accent transition-colors cursor-default"
                >
                  {ind}
                </span>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Next service */}
      <section className="bg-bone section-py-sm border-b border-border" aria-label="Next service">
        <div className="container">
          <AnimateIn>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Link
                  href="/services"
                  className="flex items-center gap-1.5 text-sm text-muted hover:text-ink transition-colors"
                >
                  <ArrowLeft size={14} /> All Services
                </Link>
              </div>
              <Link
                href={`/services/${nextService.slug}`}
                className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dark transition-colors"
              >
                Next: {nextService.shortTitle} <ArrowRight size={14} />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <CTABanner
        heading={`Ready to explore ${service.shortTitle}?`}
        subheading="Book a focused scoping session and we'll assess your current state and design a delivery approach tailored to your needs."
        primaryLabel="Book a Session"
        primaryHref="/contact"
        secondaryLabel="View Case Studies"
        secondaryHref="/case-studies"
        variant="dark"
      />
    </>
  );
}
