import AnimateIn from "@/components/shared/AnimateIn";

const differentiators = [
  {
    num: "01",
    title: "Architectural Rigor",
    description:
      "We eliminate systemic bugs and scope creep at the design phase — before they compound into delivery risk. Every engagement starts with a structured architecture review.",
  },
  {
    num: "02",
    title: "IP Protection",
    description:
      "Robust legal and structural frameworks safeguard your proprietary logic, source code, and competitive advantage from day one of the engagement.",
  },
  {
    num: "03",
    title: "AI-Native Mindset",
    description:
      "We integrate AI not as a bolt-on feature but as a core delivery accelerator — embedded in our architecture, review cycles, and delivery methodology.",
  },
  {
    num: "04",
    title: "Enterprise Governance",
    description:
      "We bring enterprise-grade governance frameworks, clear accountability structures, and audit-ready delivery artefacts to every engagement.",
  },
];

export default function WhySaahvan() {
  return (
    <section
      className="bg-ink text-bone section-py"
      aria-labelledby="why-heading"
    >
      <div className="container">
        <AnimateIn className="mb-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <p className="label text-accent mb-3">Differentiators</p>
              <h2
                id="why-heading"
                className="font-serif font-light text-bone text-balance"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
              >
                Why enterprises
                <br />
                choose <em className="text-accent not-italic">Saahvan</em>
              </h2>
            </div>
            <p className="text-bone/60 max-w-sm lg:text-right text-sm leading-relaxed">
              Four operational principles that separate our advisory from
              conventional technology consulting firms.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
          {differentiators.map((item, i) => (
            <AnimateIn key={item.num} delay={i * 0.1}>
              <div className="bg-ink/50 hover:bg-white/[0.03] p-8 transition-colors group h-full">
                <div className="flex items-start gap-5">
                  <span className="label text-accent/60 mt-1">{item.num}</span>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-bone mb-3 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-bone/60 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
