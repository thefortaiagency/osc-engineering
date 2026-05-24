import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { StealthCallout } from "@/components/StealthCallout";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { CTASection } from "@/components/CTASection";
import { FloatingCTA } from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "OSC Engineering — FCC RF Compliance & Cellular Site Safety",
  description:
    "OSC Engineering — independent FCC RF compliance for landlords, school districts, local planning departments, and attorneys. Site assessments, expert review of carrier reports, and worker RF safety training grounded in 47 CFR § 1.1310 and FCC OET Bulletin 65. Also serves wireless carriers.",
  openGraph: {
    title: "OSC Engineering — FCC RF Compliance & Cellular Site Safety",
    description:
      "Independent FCC RF compliance for landlords, school districts, planning departments, and attorneys. On-site testing, expert review, and worker safety training.",
    type: "website",
    url: "https://osc.fort-solutions.com",
    siteName: "OSC Engineering",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <StealthCallout />
      <HowItWorks />
      <About />
      <CTASection />
      <FloatingCTA />
    </>
  );
}
