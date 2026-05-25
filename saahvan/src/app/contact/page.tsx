import type { Metadata } from "next";
import AnimateIn from "@/components/shared/AnimateIn";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Saahvan Solutions. Book a strategic scoping session, discuss a project, or talk to one of our architects.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink text-bone section-py pt-[120px]" aria-labelledby="contact-heading">
        <div className="container">
          <AnimateIn>
            <p className="label text-accent mb-4">Contact</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1
              id="contact-heading"
              className="font-serif font-light text-bone text-balance mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Let&apos;s build something
              <br />
              <em className="text-accent not-italic">exceptional together</em>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p
              className="text-bone/65 max-w-xl leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)" }}
            >
              Whether you&apos;re starting a transformation journey, evaluating a
              technology decision, or need a trusted architectural partner — we&apos;re
              here to help.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-bone section-py" aria-label="Contact form and info">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimateIn direction="left">
                <div className="bg-surface border border-border rounded-md p-8">
                  <h2 className="font-serif text-2xl font-medium text-ink mb-6">
                    Book a strategic session
                  </h2>
                  <form
                    className="space-y-5"
                    aria-label="Contact form"
                    noValidate
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="first-name"
                          className="block label text-muted mb-2"
                        >
                          First name *
                        </label>
                        <input
                          type="text"
                          id="first-name"
                          name="firstName"
                          required
                          autoComplete="given-name"
                          className="w-full px-4 py-3 border border-border rounded-sm text-sm text-ink bg-bone/50 focus:outline-none focus:border-accent focus:bg-white transition-colors"
                          placeholder="Priya"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="last-name"
                          className="block label text-muted mb-2"
                        >
                          Last name *
                        </label>
                        <input
                          type="text"
                          id="last-name"
                          name="lastName"
                          required
                          autoComplete="family-name"
                          className="w-full px-4 py-3 border border-border rounded-sm text-sm text-ink bg-bone/50 focus:outline-none focus:border-accent focus:bg-white transition-colors"
                          placeholder="Sharma"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block label text-muted mb-2"
                      >
                        Work email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        autoComplete="email"
                        className="w-full px-4 py-3 border border-border rounded-sm text-sm text-ink bg-bone/50 focus:outline-none focus:border-accent focus:bg-white transition-colors"
                        placeholder="priya@company.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block label text-muted mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        autoComplete="organization"
                        className="w-full px-4 py-3 border border-border rounded-sm text-sm text-ink bg-bone/50 focus:outline-none focus:border-accent focus:bg-white transition-colors"
                        placeholder="Acme Corp"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block label text-muted mb-2"
                      >
                        What are you looking for?
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-3 border border-border rounded-sm text-sm text-ink bg-bone/50 focus:outline-none focus:border-accent focus:bg-white transition-colors"
                      >
                        <option value="">Select a service area</option>
                        <option>Enterprise Architecture</option>
                        <option>AI &amp; Automation</option>
                        <option>Cloud Transformation</option>
                        <option>Data Engineering</option>
                        <option>Cybersecurity</option>
                        <option>Application Modernization</option>
                        <option>ERP / CRM Consulting</option>
                        <option>Managed Services</option>
                        <option>Not sure — need advice</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block label text-muted mb-2"
                      >
                        Tell us about your challenge
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 border border-border rounded-sm text-sm text-ink bg-bone/50 focus:outline-none focus:border-accent focus:bg-white transition-colors resize-none"
                        placeholder="Describe your current situation, goals, and timeline..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-accent text-white font-medium hover:bg-accent-dark transition-colors rounded-sm text-sm"
                    >
                      Send Message
                    </button>

                    <p className="text-xs text-muted text-center">
                      We respond within 1 business day. No spam, ever.
                    </p>
                  </form>
                </div>
              </AnimateIn>
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <AnimateIn direction="right" delay={0.1}>
                <div className="bg-surface border border-border rounded-md p-6">
                  <h3 className="font-serif text-lg text-ink mb-5">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: Mail,
                        label: "Email",
                        value: "sales@saahvan.com",
                        href: "mailto:sales@saahvan.com",
                      },
                      {
                        icon: Phone,
                        label: "Phone",
                        value: "+91 98765 43210",
                        href: "tel:+919876543210",
                      },
                      {
                        icon: MapPin,
                        label: "Office",
                        value: "Amaravati, Andhra Pradesh, India",
                        href: undefined,
                      },
                      {
                        icon: Clock,
                        label: "Response time",
                        value: "Within 1 business day",
                        href: undefined,
                      },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-3">
                        <item.icon
                          size={16}
                          className="text-accent mt-0.5 flex-shrink-0"
                        />
                        <div>
                          <p className="text-xs text-muted label mb-0.5">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-sm text-ink hover:text-accent transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm text-ink">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn direction="right" delay={0.2}>
                <div className="bg-ink text-bone rounded-md p-6">
                  <h3 className="font-serif text-lg mb-3">
                    Strategic Scoping Sprint
                  </h3>
                  <p className="text-bone/65 text-sm leading-relaxed mb-4">
                    Not sure where to start? Our 2-week Sprint delivers a
                    structured assessment and clear roadmap for your
                    transformation.
                  </p>
                  <ul className="space-y-2 text-sm text-bone/70">
                    {[
                      "Architecture assessment",
                      "Risk & opportunity register",
                      "90-day roadmap",
                      "Technology recommendations",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>

              <AnimateIn direction="right" delay={0.3}>
                <div className="border border-border rounded-md p-6">
                  <h3 className="font-serif text-base text-ink mb-2">
                    Global delivery capability
                  </h3>
                  <p className="text-sm text-muted">
                    Headquartered in Amaravati with delivery teams spanning across Globe.
                    We work across time zones to match your operational rhythm.
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
