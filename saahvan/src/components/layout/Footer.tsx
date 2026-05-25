import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const serviceLinks = [
  { label: "Enterprise Architecture", href: "/services/enterprise-architecture" },
  { label: "AI & Automation", href: "/services/ai-automation" },
  { label: "Cloud Transformation", href: "/services/cloud-transformation" },
  { label: "Data Engineering", href: "/services/data-engineering" },
  { label: "Cybersecurity", href: "/services/cybersecurity" },
  { label: "App Modernization", href: "/services/application-modernization" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Products", href: "/products" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Careers", href: "/careers" },
];

const resourceLinks = [
  { label: "Blog & Insights", href: "/blog" },
  { label: "Whitepapers", href: "/blog?type=whitepaper" },
  { label: "AI Trends Report", href: "/blog?type=report" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      className="bg-ink text-bone/70"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Top section */}
      <div className="container-xl section-py-sm border-b border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-5 group"
              aria-label="Saahvan Solutions"
            >
              <div className="flex flex-col leading-none">
                <span className="font-sans font-bold tracking-[0.2em] uppercase text-sm text-bone">
                  SAAHVAN
                </span>
                <span className="font-sans font-light tracking-[0.18em] uppercase text-[0.5rem] text-gold">
                  SOLUTIONS
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Engineering certainty for enterprise transformation. Advisory for organizations demanding delivery excellence.
            </p>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 text-accent flex-shrink-0" />
                <span>Amaravati, Andhra Pradesh, India </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-accent flex-shrink-0" />
                <a
                  href="mailto:sales@saahvan.com"
                  className="hover:text-bone transition-colors"
                >
                  sales@saahvan.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-accent flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-bone transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="label text-bone/50 mb-5">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-bone transition-colors link-hover"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm text-accent hover:text-accent-light transition-colors flex items-center gap-1 mt-1"
                >
                  All services <ArrowUpRight size={12} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="label text-bone/50 mb-5">Company</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-bone transition-colors link-hover"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + CTA */}
          <div>
            <h3 className="label text-bone/50 mb-5">Resources</h3>
            <ul className="space-y-2.5 mb-8">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-bone transition-colors link-hover"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="p-4 border border-white/[0.08] rounded-md bg-white/[0.03]">
              <p className="text-xs text-bone/50 mb-1 label">Ready to start?</p>
              <p className="text-sm text-bone mb-3">
                Book a strategic scoping session with our team.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-light transition-colors"
              >
                Book a Call <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-xl py-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-bone/40">
            © {new Date().getFullYear()} Saahvan Solutions Private Limited. All
            rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-bone/40">
            <Link href="/privacy" className="hover:text-bone/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-bone/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
