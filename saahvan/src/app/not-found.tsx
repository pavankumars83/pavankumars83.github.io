import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-bone flex flex-col items-center justify-center min-h-[70vh] text-center section-py">
      <div className="container-sm">
        <p className="label text-accent mb-4">404</p>
        <h1
          className="font-serif font-light text-ink mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          Page not found
        </h1>
        <p className="text-muted mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get
          you back on track.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-bone hover:bg-ink-2 transition-colors text-sm font-medium rounded-sm"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-border text-ink hover:border-ink text-sm font-medium rounded-sm transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
