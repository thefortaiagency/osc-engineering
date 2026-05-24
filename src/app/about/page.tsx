import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Radio, ShieldCheck, Building2, GraduationCap, Landmark, AlertTriangle } from "lucide-react";
import { HeroWatermark } from "@/components/HeroWatermark";

export const metadata: Metadata = {
  title: "About OSC Engineering — Independent RF Compliance",
  description:
    "OSC Engineering provides independent FCC RF compliance for landlords, school districts, local planning departments, and attorneys — plus workers near antennas and wireless carriers. Led by Craig VanDyke, President, with deep expertise in 47 CFR § 1.1310, FCC OET 65, and ANSI/IEEE C95.1.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center bg-slate-950 overflow-hidden">
        <HeroWatermark />
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Stealth cell tower disguised as a palm tree in a suburban Southern California setting"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/20 lg:hidden" />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-slate-950 from-15% via-slate-950/55 to-slate-950/10" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 py-16 relative z-10 w-full">
          <div className="max-w-3xl">
            <span className="text-red-400 text-sm font-heading font-semibold tracking-wider uppercase">
              About
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-extrabold text-white leading-tight">
              The independent RF expert your insurer, attorney, and board want to see on the file.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 italic">
              Pictured: a stealth cellular installation disguised as a palm tree — a common reason RF compliance gets overlooked.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 prose prose-slate prose-lg">
          <h2>What we do</h2>
          <p>
            OSC Engineering — Occupational Safety &amp; Compliance Engineering — provides
            Radio Frequency (RF) Electromagnetic Emissions (EME) technical services to
            landlords, school districts, local planning departments, and attorneys
            who need to verify and document compliance with FCC RF exposure limits.
            We also serve workers who are exposed to RF on the job and wireless
            carriers and their contractors.
          </p>

          <p>
            The FCC sets human exposure limits to RF energy under{" "}
            <strong>47 CFR § 1.1310</strong> and details the methods for evaluating compliance
            in <strong>FCC OET Bulletin 65</strong>. Wireless operators are required to perform
            compliance studies — but the property owner or jurisdiction often has no
            independent way to verify the numbers, the assumptions, or the proposed mitigations.
          </p>

          <p>
            That&rsquo;s where we come in. We measure, model, document, and train. We don&rsquo;t
            sell carrier services. We don&rsquo;t take referral fees from operators. The report
            you get is the report that holds up.
          </p>

          <h2>Who we work with</h2>
          <p>
            Four primary client groups, each with a different need but the same
            underlying question:
            <em> &ldquo;Should I be worried about these antennas?&rdquo;</em>
          </p>

          <ul>
            <li>
              <strong>Landlords</strong> — anyone hosting or considering hosting cellular
              equipment on their property. That includes residential owners, churches and
              other faith buildings, office buildings, hotels, shopping centers, water
              towers / tanks, billboard structures, industrial and warehouse property,
              hospitals and clinics, self-storage facilities, parking structures, HOAs and
              condo associations. The lease pays — but the liability if compliance lapses
              sits with the property.
            </li>
            <li>
              <strong>School districts</strong> facing parent or community concerns about cell
              sites near schools, especially when a new lease, modification, or co-location is
              proposed.
            </li>
            <li>
              <strong>Local planning departments &amp; municipalities</strong> — planners,
              zoning boards, and elected officials who need an independent technical opinion
              on proposed wireless installations during permitting review.
            </li>
            <li>
              <strong>Attorneys</strong> representing landlords, school districts, or
              jurisdictions in lease negotiations, permitting disputes, or community
              concerns. We provide the engineering input that attorneys need to
              negotiate or defend from a position of knowing what the report actually says.
            </li>
          </ul>

          <p>
            We also serve <strong>workers exposed to RF on the job</strong> — HVAC,
            roofing, antenna riggers, building maintenance, and anyone working near
            transmitting equipment. Compliance training is what moves a site from
            General Population/Uncontrolled limits to Occupational/Controlled limits.
          </p>

          <p>
            And <strong>wireless operators &amp; contractors</strong> who want a
            third-party compliance study, RF safety training for crews, or an independent
            review of a site they&rsquo;re inheriting.
          </p>

          <h2>Our president</h2>
          <p>
            <strong>Craig VanDyke, President,</strong> leads OSC Engineering. He&rsquo;s spent his career
            inside the FCC RF compliance world — reading the rules, walking the sites, and
            translating dense regulatory language into mitigations people can actually
            execute. He knows the difference between an Occupational/Controlled environment
            and a General Population/Uncontrolled environment matters not in theory but in the
            very specific question of who&rsquo;s standing on which side of the lockout when
            the antenna is energized.
          </p>

          <p>
            That&rsquo;s the kind of detail an annual compliance study should catch — and
            most of the time it doesn&rsquo;t.
          </p>

          <h2>The OSC Engineering promise</h2>
          <ul>
            <li>
              <strong>Independent.</strong> No carrier equity, no kickbacks. We work for whoever
              wrote the check.
            </li>
            <li>
              <strong>Rules-cited.</strong> Every report quotes the applicable FCC, OSHA, and
              ANSI/IEEE provisions so a reader can verify the work.
            </li>
            <li>
              <strong>Plain-English.</strong> The 47 CFR is a hard read. The OSC Engineering report
              isn&rsquo;t.
            </li>
            <li>
              <strong>Photo-documented.</strong> If we said the antenna is 14&rsquo; from the
              walking surface, we show you the photo with the tape measure.
            </li>
          </ul>

          <div className="not-prose mt-12 p-8 rounded-2xl bg-red-50 border border-red-200">
            <p className="text-slate-700 leading-relaxed">
              <strong className="text-slate-900">Have a site that needs a real answer?</strong>{" "}
              The first call is free. We&rsquo;ll tell you whether it&rsquo;s a desk review, a
              site visit, or just lease language work.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-3 px-6 py-3 bg-red-500 text-white font-heading font-semibold rounded-lg hover:bg-red-400 transition-colors"
            >
              Schedule the intake call
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Client types row */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, label: "Property Owners" },
              { icon: GraduationCap, label: "School Districts" },
              { icon: Landmark, label: "Local Jurisdictions" },
              { icon: Radio, label: "Wireless Operators" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="bg-white rounded-xl p-6 border border-slate-200 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-heading font-semibold text-slate-900">{c.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
