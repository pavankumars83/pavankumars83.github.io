import type { Metadata } from "next";
import AnimateIn from "@/components/shared/AnimateIn";
import CTABanner from "@/components/sections/CTABanner";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Saahvan's proprietary technology products: enterprise-grade platforms built from years of consulting engagements and IP development.",
};

const products = [
  {
    name: "ArchGuard",
    tagline: "Architecture governance, automated.",
    status: "Generally Available",
    description:
      "ArchGuard is an enterprise architecture governance platform that continuously monitors your software architecture against defined standards, flags deviations, and generates audit-ready compliance reports. Built for organizations operating at scale.",
    capabilities: [
      "Automated architecture compliance scanning",
      "Dependency graph visualization",
      "Technical debt quantification",
      "Integration with CI/CD pipelines",
      "Executive-ready governance dashboards",
    ],
    audience: "Enterprise Engineering Teams · CTOs · Architecture Governance Boards",
  },
  {
    name: "DataNexus",
    tagline: "One platform. All your data. Real-time.",
    status: "Beta",
    description:
      "DataNexus is an enterprise data orchestration platform that unifies disparate data sources, applies governance policies at ingestion, and delivers clean, certified data to analytics and AI workloads — with lineage tracking from source to consumption.",
    capabilities: [
      "Universal data ingestion adapters",
      "Real-time and batch processing",
      "Data quality scoring & certification",
      "Full data lineage and audit trail",
      "Self-service data marketplace",
    ],
    audience: "Data Engineering Teams · Chief Data Officers · Analytics Leaders",
  },
  {
    name: "SecureFrame",
    tagline: "Compliance-as-code for regulated enterprises.",
    status: "Coming Soon",
    description:
      "SecureFrame automates the continuous assessment and reporting of security and compliance posture across cloud environments. It translates complex regulatory requirements (SOC 2, ISO 27001, GDPR) into actionable engineering controls.",
    capabilities: [
      "Automated compliance control mapping",
      "Continuous cloud security posture monitoring",
      "Regulatory evidence collection",
      "Remediation workflow automation",
      "Board-ready compliance dashboards",
    ],
    audience: "Security Teams · CISOs · Compliance Officers",
  },
];

const statusColors: Record<string, string> = {
  "Generally Available": "bg-emerald-50 text-emerald-700",
  Beta: "bg-accent-light text-accent",
  "Coming Soon": "bg-bone-2 text-muted",
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-ink text-bone section-py pt-[120px]" aria-labelledby="products-heading">
        <div className="container">
          <AnimateIn>
            <p className="label text-accent mb-4">Products</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1
              id="products-heading"
              className="font-serif font-light text-bone text-balance mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Proprietary platforms
              <br />
              <em className="text-accent not-italic">built from the field up</em>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p
              className="text-bone/65 max-w-2xl leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)" }}
            >
              Our products emerge directly from enterprise consulting engagements
              — solving real problems that no existing product addressed adequately.
              Each is designed for enterprise scale, governance, and integration.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-bone section-py" aria-label="Products list">
        <div className="container space-y-6">
          {products.map((product, i) => (
            <AnimateIn key={product.name} delay={i * 0.1}>
              <div className="bg-surface border border-border rounded-md p-8 hover:border-accent/20 hover:shadow-md transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-3">
                      <h2 className="font-serif text-2xl font-medium text-ink">
                        {product.name}
                      </h2>
                      <span
                        className={`label text-xs px-2.5 py-1 rounded-sm ${statusColors[product.status]}`}
                      >
                        {product.status}
                      </span>
                    </div>
                    <p className="text-accent font-medium text-sm mb-4">
                      {product.tagline}
                    </p>
                    <p className="text-muted text-sm leading-relaxed mb-6">
                      {product.description}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-bone hover:bg-ink-2 transition-colors text-sm font-medium rounded-sm"
                    >
                      Request Access <ArrowRight size={14} />
                    </Link>
                  </div>
                  <div>
                    <p className="label text-muted/70 mb-3">Capabilities</p>
                    <ul className="space-y-2 mb-6">
                      {product.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                          <span className="text-sm text-ink">{cap}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="label text-muted/70 mb-1">Built for</p>
                    <p className="text-xs text-muted">{product.audience}</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      <CTABanner
        heading="Enterprise-grade products from day one."
        subheading="Our products are designed for the governance, scalability, and security requirements of large enterprises. Talk to us about how they fit your ecosystem."
        primaryLabel="Request a Demo"
        primaryHref="/contact"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
        variant="dark"
      />
    </>
  );
}
