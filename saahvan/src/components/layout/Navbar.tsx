"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { services } from "@/content/services";

const mainLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Products", href: "/products" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const megaRef = useRef<HTMLDivElement>(null);

  const isHeroPage = pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Close mega menu on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const navBg =
    scrolled || !isHeroPage || mobileOpen
      ? "bg-ink/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]"
      : "bg-transparent";

  const textColor = "text-white";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
        role="banner"
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-[68px]">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="Saahvan Solutions home"
            >
              <div className="flex flex-col leading-none">
                <span className={`font-sans font-bold tracking-[0.2em] uppercase text-sm ${textColor}`}>
                  SAAHVAN
                </span>
                <span className="font-sans font-light tracking-[0.18em] uppercase text-[0.5rem] text-gold">
                  SOLUTIONS
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Primary navigation"
            >
              {/* Services mega menu trigger */}
              <div ref={megaRef} className="relative">
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium ${textColor} opacity-80 hover:opacity-100 transition-opacity rounded-sm`}
                  onClick={() => setServicesOpen(!servicesOpen)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-[640px] bg-surface border border-border rounded-lg shadow-2xl overflow-hidden"
                      role="menu"
                    >
                      <div className="px-6 py-4 border-b border-border bg-bone">
                        <p className="label text-muted">Our Services</p>
                      </div>
                      <div className="grid grid-cols-2 gap-px bg-border">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="bg-surface p-4 hover:bg-bone transition-colors group"
                            role="menuitem"
                          >
                            <div className="flex items-start justify-between">
                              <div>
                                <p className="text-sm font-medium text-ink group-hover:text-accent transition-colors">
                                  {service.shortTitle}
                                </p>
                                <p className="text-xs text-muted mt-0.5 leading-snug">
                                  {service.tagline}
                                </p>
                              </div>
                              <ArrowUpRight
                                size={14}
                                className="text-muted group-hover:text-accent mt-0.5 flex-shrink-0 transition-colors"
                              />
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="px-6 py-3 border-t border-border bg-bone">
                        <Link
                          href="/services"
                          className="text-sm font-medium text-accent hover:text-accent-dark transition-colors flex items-center gap-1"
                        >
                          View all services <ArrowUpRight size={13} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium ${textColor} transition-opacity rounded-sm ${
                    pathname === link.href ? "opacity-100" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/blog"
                className={`px-3 py-2 text-sm font-medium ${textColor} opacity-70 hover:opacity-100 transition-opacity rounded-sm`}
              >
                Insights
              </Link>
            </nav>

            {/* CTA + Mobile trigger */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium bg-accent text-white hover:bg-accent-dark transition-colors rounded-sm"
              >
                Book a Call
              </Link>

              <button
                className={`lg:hidden p-2 ${textColor} opacity-80 hover:opacity-100`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-ink flex flex-col pt-[68px]"
            aria-modal="true"
            role="dialog"
          >
            <nav className="flex flex-col p-6 gap-1 overflow-y-auto">
              <p className="label text-muted mb-4">Services</p>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="py-3 border-b border-white/[0.06] text-bone/80 hover:text-white transition-colors text-sm"
                >
                  {service.shortTitle}
                </Link>
              ))}

              <p className="label text-muted mt-6 mb-4">Navigation</p>
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3 border-b border-white/[0.06] text-bone/80 hover:text-white transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/blog"
                className="py-3 border-b border-white/[0.06] text-bone/80 hover:text-white transition-colors font-medium"
              >
                Insights
              </Link>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-white font-medium rounded-sm hover:bg-accent-dark transition-colors"
              >
                Book a Consultation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
