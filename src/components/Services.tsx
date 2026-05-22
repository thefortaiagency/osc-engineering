"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Activity, Radio, ClipboardCheck, GraduationCap, Wrench, FileText } from "lucide-react";

const services = [
  {
    title: "On-Site RF Testing",
    description:
      "Direct measurement of RF energy at antenna sites using calibrated broadband probes — to verify compliance with the FCC Maximum Permissible Exposure (MPE) limits for both Occupational/Controlled and General Population/Uncontrolled environments.",
    icon: Activity,
    deliverable: "Field measurement report with MPE % at every accessible point",
  },
  {
    title: "Theoretical RF Studies",
    description:
      "Computer-simulated modeling of antenna patterns, ERP, and exposure contours for proposed or existing sites — useful for planning, zoning submissions, and identifying restricted areas before construction.",
    icon: Radio,
    deliverable: "Predictive RF safety study with contour maps",
  },
  {
    title: "Compliance Recommendations",
    description:
      "Specific, actionable mitigations to bring a non-compliant site into FCC compliance: signage, barriers, lockout procedures, antenna repositioning, power reductions, or worker training requirements.",
    icon: ClipboardCheck,
    deliverable: "Written remediation plan with prioritized actions",
  },
  {
    title: "Worker Safety Training",
    description:
      "Site-specific RF safety awareness training for technicians, roofers, antenna riggers, building maintenance, and anyone working near transmitting equipment — so an Occupational/Controlled limit actually applies.",
    icon: GraduationCap,
    deliverable: "Training records & certificates for site files",
  },
  {
    title: "Mitigation & Implementation Labor",
    description:
      "Hands-on installation of compliance signage, barriers, and lockout hardware. Coordination with carriers when antenna access requires power-down or rotation. End-to-end execution, not just paperwork.",
    icon: Wrench,
    deliverable: "Photo-documented site close-out package",
  },
  {
    title: "Document & Lease Review",
    description:
      "Independent review of carrier-submitted RF compliance reports, lease language, and proposed modifications — so landlords, school boards, and jurisdictions know what they're actually signing.",
    icon: FileText,
    deliverable: "Plain-English memo flagging risks & ambiguities",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs font-heading font-semibold text-red-600 tracking-wider uppercase">
            Services
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 leading-tight">
            What we do — and what you get when we&apos;re done.
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Every engagement ends in a written, defensible deliverable.
            That&apos;s what regulators ask for. That&apos;s what landlords
            need to sleep at night. And that&apos;s what your file should
            show the next time someone asks &ldquo;is this site safe?&rdquo;
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group p-8 rounded-2xl border border-slate-200 hover:border-red-300 hover:shadow-lg transition-all bg-white"
              >
                <div className="w-12 h-12 rounded-lg bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-6 text-xl font-heading font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>
                <p className="mt-5 pt-4 border-t border-slate-100 text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">You get:</span>{" "}
                  {service.deliverable}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-heading font-semibold rounded-lg hover:bg-slate-800 transition-colors"
          >
            Request a Site Assessment
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
