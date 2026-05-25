import type { Metadata } from "next";
import AnimateIn from "@/components/shared/AnimateIn";
import CTABanner from "@/components/sections/CTABanner";
import { Clock, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Strategic thinking at the intersection of technology and business. AI, cloud, data engineering, and digital transformation insights from the Saahvan team.",
};

const posts = [
  {
    slug: "enterprise-ai-governance-2025",
    category: "AI & Automation",
    title: "Enterprise AI Governance: Building Responsible AI at Scale",
    excerpt:
      "As AI adoption accelerates, governance frameworks are no longer optional. We examine the key pillars of enterprise AI governance and how to implement them without sacrificing velocity.",
    readTime: "8 min read",
    date: "May 15, 2025",
    type: "Article",
  },
  {
    slug: "cloud-finops-maturity-model",
    category: "Cloud Transformation",
    title: "The FinOps Maturity Model: From Cost Chaos to Cloud Excellence",
    excerpt:
      "Most organizations waste 30-40% of their cloud spend. Our FinOps maturity model helps enterprises move from reactive cost management to proactive cloud financial discipline.",
    readTime: "6 min read",
    date: "April 28, 2025",
    type: "Guide",
  },
  {
    slug: "data-lakehouse-architecture-guide",
    category: "Data Engineering",
    title: "Data Lakehouse Architecture: When and How to Make the Move",
    excerpt:
      "The data lakehouse paradigm promises to unify analytics and AI workloads. We break down the architecture trade-offs and provide a decision framework for enterprise adoption.",
    readTime: "10 min read",
    date: "April 12, 2025",
    type: "Guide",
  },
  {
    slug: "legacy-modernization-patterns",
    category: "App Modernization",
    title: "The Strangler Fig Pattern at Enterprise Scale: A Practitioner's Guide",
    excerpt:
      "The strangler fig is the gold standard for legacy modernization — but most teams get it wrong at enterprise scale. Here's what actually works.",
    readTime: "12 min read",
    date: "March 30, 2025",
    type: "Article",
  },
  {
    slug: "zero-trust-implementation-roadmap",
    category: "Cybersecurity",
    title: "Zero Trust in Practice: A 12-Month Implementation Roadmap",
    excerpt:
      "Zero trust is a strategic shift, not a product. This roadmap guides enterprise security teams through the organizational, architectural, and technical dimensions of a successful implementation.",
    readTime: "15 min read",
    date: "March 18, 2025",
    type: "Whitepaper",
  },
  {
    slug: "enterprise-llm-deployment",
    category: "AI & Automation",
    title: "Deploying LLMs in Regulated Enterprises: A Safety-First Framework",
    excerpt:
      "Financial services, healthcare, and government organizations face unique constraints when deploying large language models. We outline a framework that addresses security, compliance, and accuracy.",
    readTime: "14 min read",
    date: "March 5, 2025",
    type: "Whitepaper",
  },
];

const typeColors: Record<string, string> = {
  Article: "bg-bone-2 text-muted",
  Guide: "bg-accent-light text-accent",
  Whitepaper: "bg-ink text-bone",
};

const categories = ["All", "AI & Automation", "Cloud Transformation", "Data Engineering", "App Modernization", "Cybersecurity"];

export default function BlogPage() {
  return (
    <>
      <section className="bg-ink text-bone section-py pt-[120px]" aria-labelledby="blog-heading">
        <div className="container">
          <AnimateIn>
            <p className="label text-accent mb-4">Insights</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1
              id="blog-heading"
              className="font-serif font-light text-bone text-balance mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Thinking at the intersection
              <br />
              <em className="text-accent not-italic">of tech & strategy</em>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p
              className="text-bone/65 max-w-xl leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)" }}
            >
              Practical perspectives from practitioners who build and operate
              enterprise technology systems at scale every day.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-surface border-b border-border sticky top-[68px] z-30" aria-label="Category filter">
        <div className="container">
          <div className="flex gap-1 overflow-x-auto py-3 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`flex-shrink-0 px-4 py-2 rounded-sm text-xs font-medium transition-colors ${
                  cat === "All"
                    ? "bg-ink text-bone"
                    : "text-muted hover:text-ink hover:bg-bone-2"
                }`}
                aria-pressed={cat === "All"}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone section-py" aria-label="Blog posts">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <AnimateIn key={post.slug} delay={i * 0.07}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full bg-surface border border-border hover:border-accent/30 rounded-md overflow-hidden hover:shadow-md transition-all duration-300"
                >
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="label text-xs text-accent bg-accent-light px-2 py-1 rounded-sm">
                        {post.category}
                      </span>
                      <span
                        className={`label text-xs px-2 py-1 rounded-sm ${typeColors[post.type]}`}
                      >
                        {post.type}
                      </span>
                    </div>
                    <h2 className="font-serif text-lg font-medium text-ink mb-3 group-hover:text-accent transition-colors leading-snug flex-1">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted leading-relaxed mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-3 text-xs text-muted">
                        <span className="flex items-center gap-1">
                          <Clock size={11} />
                          {post.readTime}
                        </span>
                        <span>{post.date}</span>
                      </div>
                      <ArrowUpRight
                        size={14}
                        className="text-muted group-hover:text-accent transition-colors"
                      />
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-surface border-t border-border section-py-sm" aria-label="Newsletter signup">
        <div className="container-md text-center">
          <AnimateIn>
            <h2 className="font-serif text-2xl font-medium text-ink mb-3">
              Stay ahead of the curve
            </h2>
            <p className="text-muted text-sm mb-6 max-w-sm mx-auto">
              Monthly perspectives on enterprise technology strategy, delivered to
              your inbox. No spam.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              aria-label="Newsletter signup"
              noValidate
            >
              <input
                type="email"
                placeholder="your@company.com"
                required
                className="flex-1 px-4 py-3 border border-border rounded-sm text-sm text-ink bg-bone focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-ink text-bone hover:bg-ink-2 transition-colors text-sm font-medium rounded-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </AnimateIn>
        </div>
      </section>

      <CTABanner
        heading="Want these insights applied to your context?"
        subheading="Our team can translate these strategic themes into concrete recommendations for your organization."
        primaryLabel="Book a Conversation"
        primaryHref="/contact"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
        variant="dark"
      />
    </>
  );
}
