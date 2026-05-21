"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Site intake call",
    description:
      "We talk for 20 minutes. Antenna count, mount type, accessibility, who has the lease, and what you actually need (annual study, lease review, dispute mediation, training, build-out). Free, no obligation.",
  },
  {
    number: "02",
    title: "On-site work or desk review",
    description:
      "Depending on scope: a half-day site visit with calibrated broadband probes, or a desk-based theoretical study from carrier-submitted RF specs. Either way, what we measure or model is what goes in the report.",
  },
  {
    number: "03",
    title: "Written report + recommendations",
    description:
      "Plain-English MPE compliance report with photos, contour maps, and a prioritized remediation plan if anything's out of spec. Cited to 47 CFR § 1.1310 and FCC OET 65 so your attorney, insurer, or board can defend it.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="text-sky-600 text-sm font-heading font-semibold tracking-wider uppercase">
            How It Works
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 leading-tight">
            From first call to defensible report.
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Typically 2–3 weeks for a full site assessment. Faster if you&apos;re
            up against a lease deadline or hearing.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow ring-1 ring-black/5"
            >
              {/* Step number */}
              <div className="w-12 h-12 rounded-xl bg-sky-500 text-white flex items-center justify-center font-heading font-bold text-lg mb-6">
                {step.number}
              </div>

              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {step.description}
              </p>

              {/* Connector line on desktop */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-14 -right-4 w-8 border-t-2 border-dashed border-sky-400/40 z-10" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-sky-500 text-white font-heading font-semibold rounded-lg hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/25"
          >
            Book a 20-min Intake Call
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
