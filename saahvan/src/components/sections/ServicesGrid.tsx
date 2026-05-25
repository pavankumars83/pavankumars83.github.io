import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { StaggerChildren, fadeUpVariant } from "@/components/shared/AnimateIn";
import AnimateIn from "@/components/shared/AnimateIn";
import { services } from "@/content/services";
import { motion } from "framer-motion";

// Server-safe icon map using SVG paths
const iconPaths: Record<string, string> = {
  "grid-3x3":
    "M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z",
  cpu: "M9 3H5a2 2 0 0 0-2 2v4m6-6h6m-6 0v18m6-18h4a2 2 0 0 1 2 2v4m-6-6v18m6-12H3m18 0v6m0-6a0 0 0 0 0 0 0m0 6H3m18 0v4a2 2 0 0 1-2 2h-4m-6 0H5a2 2 0 0 1-2-2v-4",
  cloud:
    "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z",
  database:
    "M12 2C6.48 2 2 3.79 2 6v12c0 2.21 4.48 4 10 4s10-1.79 10-4V6c0-2.21-4.48-4-10-4zm0 2c4.42 0 8 1.34 8 3s-3.58 3-8 3-8-1.34-8-3 3.58-3 8-3zm0 16c-4.42 0-8-1.34-8-3V9.87C5.72 11.16 8.68 12 12 12s6.28-.84 8-2.13V17c0 1.66-3.58 3-8 3z",
  shield:
    "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  layers:
    "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83zM2 12a1 1 0 0 0 .58.91l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9A1 1 0 0 0 22 12m0 5a1 1 0 0 0 .58.91l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9A1 1 0 0 0 22 17",
  briefcase:
    "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16m8 0H8m8 0h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2",
  settings:
    "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
};

// Client wrapper needed for motion.div inside server component
import { type ReactNode } from "react";

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const path = iconPaths[service.icon] ?? iconPaths["settings"];
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col p-6 bg-surface border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 rounded-md overflow-hidden"
      aria-label={service.title}
    >
      {/* Hover accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center rounded-md bg-accent-light text-accent mb-5 group-hover:bg-accent group-hover:text-white transition-colors duration-200">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d={path} />
        </svg>
      </div>

      <h3 className="font-serif text-lg font-medium text-ink mb-2 group-hover:text-accent transition-colors">
        {service.title}
      </h3>
      <p className="text-sm text-muted leading-relaxed flex-1 mb-4">
        {service.tagline}
      </p>
      <div className="flex items-center gap-1 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
        Explore <ArrowUpRight size={12} />
      </div>
    </Link>
  );
}

export default function ServicesGrid() {
  return (
    <section
      className="bg-bone section-py"
      aria-labelledby="services-heading"
    >
      <div className="container">
        <AnimateIn className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p className="label text-accent mb-3">Our Services</p>
              <h2
                id="services-heading"
                className="font-serif font-light text-ink text-balance"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
              >
                Deep expertise across the
                <br />
                <em>full technology stack</em>
              </h2>
            </div>
            <Link
              href="/services"
              className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dark transition-colors self-start sm:self-end whitespace-nowrap"
            >
              All capabilities <ArrowUpRight size={14} />
            </Link>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <AnimateIn key={service.slug} delay={i * 0.06}>
              <ServiceCard service={service} index={i} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
