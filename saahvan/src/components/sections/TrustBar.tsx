import AnimateIn from "@/components/shared/AnimateIn";

const partners = [
  "AWS",
  "Microsoft Azure",
  "Google Cloud",
  "Snowflake",
  "Databricks",
  "Salesforce",
  "SAP",
  "Kubernetes",
];

export default function TrustBar() {
  return (
    <section
      className="bg-bone-2 border-y border-border section-py-xs"
      aria-label="Technology partners"
    >
      <div className="container">
        <AnimateIn>
          <p className="label text-muted text-center mb-8">
            Trusted technology partnerships & certifications
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {partners.map((partner) => (
              <span
                key={partner}
                className="text-sm font-medium text-muted/70 tracking-wide hover:text-muted transition-colors select-none"
              >
                {partner}
              </span>
            ))}
          </div>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              "ISO 27001 Aligned",
              "SOC 2 Ready",
              "GDPR Compliant",
              "HIPAA Capable",
            ].map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface border border-border rounded-sm text-xs font-medium text-muted"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
                {cert}
              </span>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
