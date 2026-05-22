"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What does the FCC actually require for cell sites?",
    answer:
      "Under 47 CFR § 1.1310, the FCC sets Maximum Permissible Exposure (MPE) limits for RF energy at cell sites. Operators must demonstrate compliance through a study — typically annually or whenever the site materially changes. FCC OET Bulletin 65 details the evaluation methods. The rules distinguish between Occupational/Controlled environments (trained workers who are aware of the exposure) and General Population/Uncontrolled environments (everyone else, with stricter limits).",
  },
  {
    question: "Why hire an independent engineer instead of trusting the carrier's report?",
    answer:
      "The carrier's RF compliance report is real engineering, but the carrier is the party with the equity in the outcome. They get to define the controlled vs. uncontrolled boundary, the assumptions about who's on the rooftop, and the remediation that goes in the file. An independent review verifies the inputs, validates the assumptions, and gives you — the landlord, district, or jurisdiction — a defensible second opinion that doesn't rely on the regulated party grading their own homework.",
  },
  {
    question: "What's the difference between RF (non-ionizing) and X-ray (ionizing) radiation?",
    answer:
      "They're different physics. Ionizing radiation (X-rays, gamma rays) has enough energy per photon to strip electrons from atoms and damage DNA directly. RF radiation from cell antennas is non-ionizing — its primary biological effect at exposure levels above the FCC limits is tissue heating. The FCC MPE limits are set well below known thermal-effect thresholds, with substantial safety margins. The job of a compliance study isn't to debate the science — it's to verify that no person who could be at the site exceeds the limits the FCC has already set.",
  },
  {
    question: "Does a cell site near a school pose a danger to children?",
    answer:
      "Cell sites that are compliant with FCC 47 CFR § 1.1310 — verified by actual measurement or modeling — produce RF levels well below the General Population/Uncontrolled exposure limits, even at fence-line distances. The honest concern isn't usually the operating site; it's whether the site has actually been verified. We do that verification, in writing, with measurements you can defend at a board meeting or in a parent forum.",
  },
  {
    question: "When does my building need an annual RF compliance study?",
    answer:
      "If you own a building with rooftop antennas — or any structure hosting wireless equipment — you have a real interest in an annual compliance study, even if the carriers handle their own. Your insurer, your own workers (HVAC, roofers, maintenance), and your tenants are all exposed to whatever the actual RF environment is. The carrier's study covers their compliance; yours covers your liability.",
  },
  {
    question: "What's involved in an on-site RF compliance test?",
    answer:
      "A field engineer arrives with calibrated broadband isotropic RF probes (typically Narda or equivalent), surveys the antenna locations, measures actual power density at all accessible points around and on the site, and compares those measurements against the applicable FCC MPE limits for each category of person who could be present. The output is a written report with photographs, measurement points marked on a site plan, MPE percentages at each point, and any required mitigations (signage, barriers, training, lockouts).",
  },
  {
    question: "How long does a study take, and what does it cost?",
    answer:
      "Most rooftop sites take a half-day on-site plus 5–10 business days for the written report. Theoretical (desk-based) studies — appropriate for proposed sites or where on-site access is impractical — typically deliver within 7–14 days. Pricing varies with site complexity (number of antennas, accessibility, mitigation work required); a 20-minute intake call lets us scope it accurately. Annual compliance studies for previously-assessed sites are significantly less than first-time visits.",
  },
  {
    question: "We have a dispute with our carrier about lease language or site modifications. Can you help?",
    answer:
      "Yes. We review proposed lease amendments, antenna modifications, and co-location requests for technical accuracy, RF impact, and compliance implications — then write a plain-English memo your attorney and board can actually use. We don't practice law; we provide the engineering input your attorney needs to negotiate from a position of knowing what they're signing.",
  },
  {
    question: "Do you train site workers in RF safety?",
    answer:
      "Yes. Site-specific RF safety awareness training is the practical bridge between the FCC's Occupational/Controlled limits and the people actually doing work near transmitting antennas. Training records become part of your site file and are typically a prerequisite for the higher-limit Occupational classification to actually apply.",
  },
  {
    question: "What FCC and industry standards do you cite in your work?",
    answer:
      "Primary regulatory: 47 CFR § 1.1310 (FCC MPE limits), FCC OET Bulletin 65 (evaluation methods), 47 CFR § 1.1307(b) (categorical exclusion thresholds). Industry-consensus: ANSI/IEEE C95.1 (RF safety standard). Worker safety: OSHA 29 CFR 1910.268 (telecommunications). Every report cites the specific provisions that apply.",
  },
];

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-slate-950 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 relative z-10">
          <span className="text-red-400 text-sm font-heading font-semibold tracking-wider uppercase">
            FAQs
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-extrabold text-white leading-tight max-w-4xl">
            Straight answers on FCC RF compliance.
          </h1>
          <p className="mt-5 text-xl text-slate-300 max-w-2xl">
            Written for landlords, school boards, attorneys, and anyone who needs
            to understand what the carriers are actually doing on their site.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-heading font-semibold text-slate-900 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-slate-700 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-5">Question we didn&apos;t cover?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-heading font-semibold rounded-lg hover:bg-slate-800 transition-colors"
          >
            Ask Craig directly
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* FAQ JSON-LD for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
