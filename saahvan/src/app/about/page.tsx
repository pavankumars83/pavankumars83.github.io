import type { Metadata } from "next";
import AnimateIn from "@/components/shared/AnimateIn";
import CTABanner from "@/components/sections/CTABanner";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Saahvan Solutions is a global enterprise IT consulting firm built by practitioners who understand both the technical depth and strategic nuance of large-scale transformation.",
};

const values = [
  {
    title: "Engineering Rigour",
    description:
      "Every deliverable is held to the highest engineering standards. We ship architectures that stand up to enterprise-scale stress.",
  },
  {
    title: "Client Ownership",
    description:
      "We act as trusted partners, not vendors. Our success is measured by your business outcomes, not project completion metrics.",
  },
  {
    title: "Strategic Clarity",
    description:
      "We translate complex technical realities into clear business decisions. No jargon. No ambiguity. Just strategic direction.",
  },
  {
    title: "Delivery Maturity",
    description:
      "We bring battle-tested delivery frameworks that account for real-world complexity, stakeholder dynamics, and organizational change.",
  },
];

const leadership = [
  {
    name: "Priya Sharma",
    role: "Founder & Chief Architect",
    bio: "20+ years architecting enterprise systems across BFSI, healthcare, and manufacturing. Former principal architect at a Tier 1 global consulting firm.",
    expertise: ["Enterprise Architecture", "Digital Transformation", "AI Strategy"],
  },
  {
    name: "Arjun Mehta",
    role: "Head of AI & Data Practice",
    bio: "Led AI transformation programs for Fortune 500 companies. Deep expertise in MLOps, large-scale data platforms, and responsible AI governance.",
    expertise: ["AI/ML", "Data Engineering", "MLOps"],
  },
  {
    name: "Kavitha Nair",
    role: "Head of Cloud & Security",
    bio: "Cloud-native architect with 15+ years across AWS, Azure, and GCP. Specializes in zero-trust security architectures for regulated industries.",
    expertise: ["Cloud Architecture", "Cybersecurity", "FinOps"],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-bone section-py pt-[120px]" aria-labelledby="about-heading">
        <div className="container">
          <AnimateIn>
            <p className="label text-accent mb-4">About Saahvan</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1
              id="about-heading"
              className="font-serif font-light text-bone text-balance mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Built by practitioners.
              <br />
              <em className="text-accent not-italic">Proven in the field.</em>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p
              className="text-bone/65 max-w-2xl leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)" }}
            >
              Saahvan Solutions Private Limited was founded with a clear mandate:
              to deliver the calibre of architecture, strategy, and engineering
              rigor that global enterprises demand — without the overhead and
              bureaucracy of legacy consulting firms.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-bone section-py" aria-label="Mission">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn direction="left">
              <p className="label text-accent mb-4">Our Mission</p>
              <h2
                className="font-serif font-light text-ink mb-6 text-balance"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
              >
                Engineering certainty
                into every transformation
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Technology transformation fails not because of bad intentions,
                but because of unclear architecture, unmanaged risk, and
                misaligned stakeholders. Saahvan exists to solve these root
                causes.
              </p>
              <p className="text-muted leading-relaxed">
                We bring structured thinking, deep technical expertise, and
                enterprise governance frameworks to every engagement — ensuring
                your technology investments deliver the outcomes they promise.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-ink text-bone hover:bg-ink-2 transition-colors text-sm font-medium rounded-sm"
              >
                Start a conversation <ArrowRight size={14} />
              </Link>
            </AnimateIn>
            <AnimateIn direction="right" delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "150+", label: "Enterprise clients globally" },
                  { value: "40+", label: "Countries served" },
                  { value: "98%", label: "Client satisfaction" },
                  { value: "12+", label: "Years of excellence" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-surface border border-border rounded-md p-6 text-center"
                  >
                    <div
                      className="font-serif text-accent mb-1"
                      style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                    >
                      {stat.value}
                    </div>
                    <p className="text-xs text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ink text-bone section-py" aria-labelledby="values-heading">
        <div className="container">
          <AnimateIn className="mb-14">
            <p className="label text-accent mb-3">Our Values</p>
            <h2
              id="values-heading"
              className="font-serif font-light text-bone"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Principles that guide
              <br />
              <em>every engagement</em>
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <AnimateIn key={v.title} delay={i * 0.1}>
                <div className="flex gap-4">
                  <CheckCircle2
                    size={20}
                    className="text-accent mt-1 flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-serif text-lg text-bone mb-2">
                      {v.title}
                    </h3>
                    <p className="text-bone/60 text-sm leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-bone section-py" aria-labelledby="leadership-heading">
        <div className="container">
          <AnimateIn className="mb-14">
            <p className="label text-accent mb-3">Leadership</p>
            <h2
              id="leadership-heading"
              className="font-serif font-light text-ink"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Meet the team
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((person, i) => (
              <AnimateIn key={person.name} delay={i * 0.1}>
                <div className="bg-surface border border-border rounded-md p-6 h-full">
                  <div className="w-14 h-14 rounded-full bg-accent-light flex items-center justify-center mb-4">
                    <span className="font-serif text-xl text-accent">
                      {person.name[0]}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-ink mb-1">
                    {person.name}
                  </h3>
                  <p className="text-xs font-medium text-accent mb-3 label">
                    {person.role}
                  </p>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {person.bio}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {person.expertise.map((e) => (
                      <span
                        key={e}
                        className="text-xs px-2 py-1 bg-bone-2 text-muted rounded-sm"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to work with us?"
        subheading="Tell us about your transformation goals and we'll design a programme that delivers measurable outcomes."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
        variant="dark"
      />
    </>
  );
}
