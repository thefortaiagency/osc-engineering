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
    "OSC Engineering provides FCC RF compliance studies, on-site testing, and worker safety training for cell sites, landlords, school districts, and local jurisdictions. Independent, expert review of RF emissions and exposure.",
  openGraph: {
    title: "OSC Engineering — FCC RF Compliance & Cellular Site Safety",
    description:
      "Independent FCC RF compliance studies, on-site testing, and expert review for cell sites — protecting workers, property owners, and the public.",
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
