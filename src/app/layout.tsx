import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://osc.fort-solutions.com"),
  title: {
    default: "OSC Engineering — FCC RF Compliance for Landlords, School Districts & Planning Departments",
    template: "%s | OSC Engineering",
  },
  description:
    "Independent FCC RF compliance for landlords (residential, churches, office buildings, water towers, billboards), school districts, local planning departments / municipalities, and attorneys. On-site testing, expert review of carrier reports, worker RF safety training. Carrier-neutral, grounded in 47 CFR § 1.1310 and FCC OET 65. Also serves wireless carriers.",
  keywords: [
    "FCC RF compliance",
    "FCC RF compliance for landlords",
    "RF compliance for school districts",
    "RF compliance for planning departments",
    "RF compliance for municipalities",
    "rooftop antenna landlord compliance",
    "church cell tower compliance",
    "office building rooftop antenna RF",
    "water tower antenna lease RF",
    "billboard cell antenna landlord",
    "HOA condo cell antenna",
    "hotel rooftop antenna compliance",
    "school cell tower safety",
    "school district RF assessment",
    "RF exposure near schools",
    "planning department cellular site review",
    "zoning board wireless permit",
    "municipality cell tower review",
    "independent third-party RF engineer",
    "cell tower lease review for landlords",
    "carrier-neutral RF compliance",
    "RF safety compliance study",
    "cell site safety",
    "47 CFR 1.1310",
    "FCC OET 65",
    "RF exposure assessment",
    "MPE Maximum Permissible Exposure",
    "non-ionizing radiation compliance",
    "ANSI IEEE C95.1",
    "RF worker safety training",
    "cell tower radiation safety",
    "wireless site compliance audit",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "OSC Engineering",
    title: "OSC Engineering — FCC RF Compliance for Landlords, School Districts & Planning Departments",
    description:
      "Independent FCC RF compliance for landlords, school districts, local planning departments, and attorneys. On-site testing, expert review of carrier reports, worker RF safety training.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OSC Engineering",
  alternateName: "Occupational Safety & Compliance Engineering",
  description:
    "Independent FCC RF compliance for landlords (residential, churches, office buildings, water towers, billboards), school districts, local planning departments, and attorneys. On-site testing, expert review of carrier reports, worker RF safety training.",
  url: "https://osc.fort-solutions.com",
  telephone: "+1-858-436-4120",
  email: "info@OSCengineering.com",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  audience: [
    {
      "@type": "Audience",
      audienceType: "Property owners and landlords hosting cellular equipment",
    },
    {
      "@type": "EducationalAudience",
      audienceType: "K-12 school districts with cellular installations on or near campuses",
    },
    {
      "@type": "Audience",
      audienceType: "Local planning departments, zoning boards, and municipal officials reviewing wireless permits",
    },
    {
      "@type": "Audience",
      audienceType: "Attorneys representing landlords, school districts, or jurisdictions in lease negotiations, permitting disputes, or community concerns",
    },
    {
      "@type": "Audience",
      audienceType: "Workers exposed to RF energy on the job (HVAC, roofers, antenna riggers, building maintenance)",
    },
    {
      "@type": "BusinessAudience",
      audienceType: "Wireless carriers and contractors needing independent third-party RF compliance",
    },
  ],
  knowsAbout: [
    "FCC RF Compliance",
    "47 CFR § 1.1310",
    "FCC OET Bulletin 65",
    "RF Maximum Permissible Exposure (MPE)",
    "Non-ionizing Radiation Safety",
    "Cell Site Safety",
    "ANSI/IEEE C95.1",
    "RF Worker Safety Training",
  ],
  founder: {
    "@type": "Person",
    name: "Craig VanDyke",
    jobTitle: "President",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "RF Compliance Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "On-Site RF Testing",
          description:
            "Direct measurement of RF energy at antenna sites using calibrated broadband probes to verify compliance with FCC MPE limits.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Theoretical RF Studies",
          description:
            "Computer-simulated modeling of antenna patterns and exposure contours for proposed or existing sites.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "RF Worker Safety Training",
          description:
            "Site-specific RF safety awareness training so workers qualify as Occupational/Controlled under FCC rules.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lease & Document Review",
          description:
            "Independent review of carrier-submitted RF compliance reports and proposed lease language for landlords and jurisdictions.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`} style={{ textRendering: "optimizeLegibility" }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
