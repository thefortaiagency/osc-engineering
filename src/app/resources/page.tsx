import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, FileText, Radio, ShieldAlert, BookOpen, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "RF Compliance Resources & References",
  description:
    "Authoritative references on FCC RF compliance, 47 CFR § 1.1310, FCC OET Bulletin 65, ANSI/IEEE C95.1, and OSHA telecommunications safety — with plain-English explanations of what they actually mean for property owners, school districts, and jurisdictions.",
};

const standards = [
  {
    title: "47 CFR § 1.1310 — FCC Maximum Permissible Exposure (MPE) Limits",
    description:
      "The core federal regulation that sets human exposure limits to RF energy. Distinguishes between Occupational/Controlled environments (trained workers, higher limits) and General Population/Uncontrolled (everyone else, stricter limits).",
    href: "https://www.ecfr.gov/current/title-47/chapter-I/subchapter-A/part-1/subpart-A/section-1.1310",
    cite: "47 CFR § 1.1310",
  },
  {
    title: "47 CFR § 1.1307(b) — Categorical Exclusion Thresholds",
    description:
      "Defines which installations are categorically excluded from routine RF evaluation and which require a compliance study. Important for knowing when the carrier is — and isn't — required to file.",
    href: "https://www.ecfr.gov/current/title-47/chapter-I/subchapter-A/part-1/subpart-A/section-1.1307",
    cite: "47 CFR § 1.1307",
  },
  {
    title: "FCC OET Bulletin 65 — Evaluating RF Exposure",
    description:
      "The FCC's detailed methodology document on how RF exposure compliance is actually evaluated. Covers prediction methods, measurement protocols, and supplementary guidance for specific antenna types.",
    href: "https://transition.fcc.gov/Bureaus/Engineering_Technology/Documents/bulletins/oet65/oet65.pdf",
    cite: "OET Bulletin 65 (PDF)",
  },
  {
    title: "ANSI/IEEE C95.1 — Safety Levels for Human Exposure to RF",
    description:
      "Industry-consensus standard that informs much of the underlying science. Used alongside the FCC limits, especially in independent peer review.",
    href: "https://standards.ieee.org/ieee/C95.1/7894/",
    cite: "ANSI/IEEE C95.1",
  },
  {
    title: "OSHA 29 CFR 1910.268 — Telecommunications Safety",
    description:
      "Workplace safety standard covering work near transmitting equipment. Relevant for any building owner whose own staff (roofers, HVAC, maintenance) might access antenna areas.",
    href: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.268",
    cite: "29 CFR 1910.268",
  },
  {
    title: "FCC Wireless Telecommunications Bureau — RF Safety Resources",
    description:
      "Public-facing FCC consumer and operator resources, including FAQ documents and exposure-level explanations suitable for board meetings and parent communications.",
    href: "https://www.fcc.gov/general/radio-frequency-safety-0",
    cite: "FCC.gov RF Safety",
  },
];

const explainers = [
  {
    icon: Radio,
    title: "What is RF energy, and is it dangerous?",
    summary:
      "RF energy from cell antennas is non-ionizing — it doesn't directly damage DNA the way X-rays do. Its primary biological effect above the FCC limits is tissue heating. The compliance question isn't a science debate; it's whether the actual measurements at your site exceed the limits the FCC has already set.",
  },
  {
    icon: ShieldAlert,
    title: "Why does Occupational vs. General Population matter?",
    summary:
      "The FCC sets two exposure limits. The Occupational/Controlled limit (higher) only applies to workers who've received RF safety training. The General Population/Uncontrolled limit (5x stricter) applies to everyone else. A site that's 'compliant for workers' isn't automatically compliant for the public — that distinction is where compliance studies live or die.",
  },
  {
    icon: BookOpen,
    title: "What's MPE, and how is it expressed?",
    summary:
      "Maximum Permissible Exposure — the FCC limit on RF power density (typically expressed in mW/cm²) at a given frequency. Compliance reports show what percentage of the MPE was measured at each accessible point. Anything under 100% is compliant; anything over requires mitigation.",
  },
  {
    icon: AlertTriangle,
    title: "What does a non-compliant finding actually mean?",
    summary:
      "A finding above the MPE limit doesn't mean the site is dangerous — it means access to that specific location needs to be controlled (signage, barriers, training, lockouts) or the antenna configuration needs to change (power, orientation, height). Most non-compliances are administratively remediated, not torn down.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-slate-950 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-resources.jpg"
            alt="Cellular antenna tower at sunset with stylized RF exposure contour rings over a coastal urban skyline"
            fill
            className="object-cover object-right"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/60" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(56,189,248,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 relative z-10">
          <span className="text-red-400 text-sm font-heading font-semibold tracking-wider uppercase">
            Resources
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-extrabold text-white leading-tight max-w-4xl">
            FCC RF compliance, in plain English.
          </h1>
          <p className="mt-5 text-xl text-slate-300 max-w-2xl">
            The regulations and standards that actually govern cell site safety —
            with short explainers for the questions we get from property owners,
            school boards, attorneys, and concerned residents.
          </p>
        </div>
      </section>

      {/* Explainers */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-heading font-semibold text-red-600 tracking-wider uppercase">
              Common Questions
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
              The four concepts behind every site assessment.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {explainers.map((e) => {
              const Icon = e.icon;
              return (
                <div
                  key={e.title}
                  className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-red-300 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-heading font-bold text-slate-900">{e.title}</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed text-sm">{e.summary}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/faqs"
              className="inline-flex items-center gap-2 text-red-600 font-heading font-semibold hover:text-red-700"
            >
              See the full FAQ
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-heading font-semibold text-red-600 tracking-wider uppercase">
              Primary Sources
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
              The regulations &amp; standards we cite.
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Every OSC Engineering report names the specific provisions that apply to your site,
              so a reader — attorney, insurer, board member, parent — can verify the
              work themselves. Here&apos;s where those citations live.
            </p>
          </div>

          <div className="space-y-4">
            {standards.map((s) => (
              <a
                key={s.cite}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 rounded-xl border border-slate-200 bg-white hover:border-red-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-heading font-bold text-slate-900 text-base sm:text-lg group-hover:text-red-600 transition-colors">
                        {s.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-red-500 transition-colors" />
                    </div>
                    <p className="mt-2 text-slate-600 leading-relaxed text-sm">{s.description}</p>
                    <p className="mt-2 text-xs text-slate-500 font-mono">{s.cite}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
            Need an interpretation, not just a citation?
          </h2>
          <p className="mt-5 text-slate-600 text-lg leading-relaxed">
            We translate the regulations into site-specific findings, photos, and a
            written report you can hand to your insurer or board. Start with a
            20-minute intake call — free, no pressure.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-red-500 text-white font-heading font-semibold rounded-lg hover:bg-red-400 transition-colors shadow-lg shadow-red-500/25"
          >
            Schedule the intake call
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
