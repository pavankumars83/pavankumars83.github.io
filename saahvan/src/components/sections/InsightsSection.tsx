import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import AnimateIn from "@/components/shared/AnimateIn";

const insights = [
  {
    slug: "enterprise-ai-governance-2025",
    category: "AI & Automation",
    title: "Enterprise AI Governance: Building Responsible AI at Scale",
    excerpt:
      "As AI adoption accelerates, governance frameworks are no longer optional. We examine the key pillars of enterprise AI governance and how to implement them without sacrificing velocity.",
    readTime: "8 min read",
    date: "May 2025",
  },
  {
    slug: "cloud-finops-maturity-model",
    category: "Cloud Transformation",
    title: "The FinOps Maturity Model: From Cost Chaos to Cloud Excellence",
    excerpt:
      "Most organizations waste 30-40% of their cloud spend. Our FinOps maturity model helps enterprises move from reactive cost management to proactive cloud financial discipline.",
    readTime: "6 min read",
    date: "April 2025",
  },
  {
    slug: "data-lakehouse-architecture-guide",
    category: "Data Engineering",
    title: "Data Lakehouse Architecture: When and How to Make the Move",
    excerpt:
      "The data lakehouse paradigm promises to unify analytics and AI workloads. We break down the architecture trade-offs and provide a decision framework for enterprise adoption.",
    readTime: "10 min read",
    date: "April 2025",
  },
];

export default function InsightsSection() {
  return (
    <section
      className="bg-surface border-t border-border section-py"
      aria-labelledby="insights-heading"
    >
      <div className="container">
        <AnimateIn className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p className="label text-accent mb-3">Insights</p>
              <h2
                id="insights-heading"
                className="font-serif font-light text-ink text-balance"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
              >
                Thinking at the
                <br />
                <em>intersection of tech & strategy</em>
              </h2>
            </div>
            <Link
              href="/blog"
              className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dark transition-colors self-start sm:self-end whitespace-nowrap"
            >
              All insights <ArrowUpRight size={14} />
            </Link>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((post, i) => (
            <AnimateIn key={post.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full border border-border hover:border-accent/30 rounded-md p-6 hover:shadow-md transition-all duration-300 bg-bone/30 hover:bg-surface"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="label text-accent text-xs bg-accent-light px-2 py-1 rounded-sm">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted">{post.date}</span>
                </div>
                <h3 className="font-serif text-lg font-medium text-ink mb-3 group-hover:text-accent transition-colors leading-snug flex-1">
                  {post.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-5 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-1.5 text-xs text-muted">
                    <Clock size={12} />
                    {post.readTime}
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-muted group-hover:text-accent transition-colors"
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
