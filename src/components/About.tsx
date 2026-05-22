"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Radio, ShieldCheck, BookOpen, Building2 } from "lucide-react";

export function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual block (no photo; engineering-themed badge) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-slate-900 to-red-950 p-12 flex flex-col justify-center shadow-2xl">
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(56,189,248,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.5) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="relative z-10 space-y-8">
                <div className="w-16 h-16 rounded-xl bg-red-500/10 border border-red-400/20 flex items-center justify-center">
                  <Radio className="w-8 h-8 text-red-400" />
                </div>
                <blockquote className="text-2xl text-white font-heading font-medium leading-tight">
                  &ldquo;The FCC rules aren&rsquo;t the hard part. Knowing where they actually apply at <em>your</em> site is.&rdquo;
                </blockquote>
                <p className="text-red-300 font-heading">— Craig VanDyke, Principal Engineer</p>
              </div>
            </div>
            {/* Credential card */}
            <div className="absolute -bottom-6 right-4 lg:right-8 bg-white rounded-xl shadow-2xl p-5 ring-1 ring-black/5">
              <p className="text-red-600 font-heading font-bold text-2xl">FCC OET 65</p>
              <p className="text-slate-600 text-sm mt-1">Trained &middot; Independent &middot; Carrier-Neutral</p>
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-red-600 text-sm font-heading font-semibold tracking-wider uppercase">
              About OSC Engineering
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 leading-tight">
              An independent expert on your side.
            </h2>

            <p className="mt-6 text-slate-700 leading-relaxed text-lg">
              Cell antennas produce non-ionizing radiation, and the FCC sets exposure
              limits under <strong>47 CFR § 1.1310</strong>. Wireless operators are
              required to perform compliance studies — but the building owner, school
              district, or jurisdiction often has no independent way to verify the
              numbers, the site walk, or the proposed mitigations.
            </p>

            <p className="mt-4 text-slate-700 leading-relaxed text-lg">
              That&rsquo;s where we come in. We test, model, document, and train —
              with no equity in any carrier&rsquo;s outcome. The report you get is
              the report the regulator and your insurer will accept.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10 mb-10">
              {[
                { icon: ShieldCheck, title: "Carrier-Neutral", desc: "No conflicts of interest — your file, your protection" },
                { icon: BookOpen, title: "Rules-First", desc: "FCC OET 65 + 47 CFR § 1.1310 + ANSI/IEEE C95.1" },
                { icon: Building2, title: "Real Sites", desc: "Rooftops, monopoles, water towers, schools, churches" },
                { icon: Radio, title: "Plain English", desc: "Reports your board, attorney, or insurer can actually read" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-heading font-semibold text-base">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-heading font-semibold rounded-lg hover:bg-slate-800 transition-colors"
            >
              Talk to an Engineer
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
