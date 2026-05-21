"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />
      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight">
            Get a defensible answer to{" "}
            <span className="text-sky-400">&ldquo;is this site safe?&rdquo;</span>
          </h2>

          <p className="mt-6 text-slate-400 text-xl max-w-xl mx-auto leading-relaxed">
            20-minute intake call is free. We&apos;ll tell you whether you actually
            need a site visit, a desk review, or just lease language help.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 bg-sky-500 text-white font-heading font-semibold rounded-lg hover:bg-sky-400 transition-colors flex items-center gap-3 text-lg shadow-lg shadow-sky-500/25"
            >
              Request Assessment
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="tel:858-436-4120"
              className="px-10 py-4 text-white font-heading font-medium rounded-lg border border-slate-600 hover:bg-white/10 transition-colors text-lg"
            >
              (858) 436-4120
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
