"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const stats = [
  { value: "1+", label: "Enterprise clients" },
  { value: "2+", label: "Countries served" },
  { value: "98%", label: "Client retention" },
  { value: "1+", label: "Years of excellence" },
];

export default function Hero() {
  return (
    <section
      className="relative bg-ink text-bone overflow-hidden min-h-screen flex flex-col justify-center"
      aria-label="Hero"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 section-py">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-4 py-2 border border-white/[0.1] rounded-full text-xs font-medium text-bone/70 hover:border-white/20 hover:text-bone transition-all bg-white/[0.04]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Tier 1 Technology & Architecture Advisory
            <ChevronRight size={12} />
          </Link>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif font-light text-balance mb-6"
          style={{ fontSize: "clamp(2.75rem, 7vw, 6rem)", lineHeight: 1.05 }}
        >
          Engineering Certainty.
          <br />
          <em className="text-accent not-italic">Maximizing Velocity.</em>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-bone/65 max-w-2xl text-pretty leading-relaxed mb-10"
          style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}
        >
          We bridge the gap between high-level business vision and complex
          software execution. Saahvan&rsquo;s advisory is designed for enterprises,
          high-growth companies, and mid-market organizations seeking to
          de-risk technology investments and build scalable digital
          foundations.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-medium hover:bg-accent-dark transition-colors rounded-sm text-sm"
          >
            Strategic Scoping Sprint
            <ArrowRight size={15} />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-bone/80 hover:border-white/40 hover:text-bone transition-all rounded-sm text-sm"
          >
            View Capabilities
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded-md overflow-hidden"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 + i * 0.08 }}
              className="bg-ink/50 px-6 py-5 text-center backdrop-blur-sm"
            >
              <div
                className="font-serif text-bone mb-1"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-bone/50 label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bone to-transparent pointer-events-none" />
    </section>
  );
}
