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
    default: "OSC Engineering — FCC RF Compliance & Cellular Site Safety",
    template: "%s | OSC Engineering",
  },
  description:
    "Independent FCC RF compliance for landlords, school districts, and local planning departments. On-site testing, expert review of carrier reports, and worker RF safety training. Carrier-neutral expertise grounded in 47 CFR § 1.1310 and FCC OET 65. Also serves wireless carriers.",
  keywords: [
    "FCC RF compliance",
    "RF safety compliance study",
    "cell tower radiation safety",
    "47 CFR 1.1310",
    "FCC OET 65",
    "RF exposure assessment",
    "cell site safety",
    "rooftop antenna RF testing",
    "school district cell tower",
    "landlord cell tower lease",
    "MPE Maximum Permissible Exposure",
    "non-ionizing radiation compliance",
    "ANSI IEEE C95.1",
    "wireless site compliance audit",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "OSC Engineering",
    title: "OSC Engineering — FCC RF Compliance & Cellular Site Safety",
    description:
      "Independent FCC RF compliance studies, on-site testing, and worker safety training for cell sites.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OSC Engineering",
  alternateName: "Occupational Safety & Compliance Engineering",
  description:
    "Independent FCC RF compliance for landlords, school districts, and local planning departments. On-site testing, expert review of carrier reports, worker RF safety training.",
  url: "https://osc.fort-solutions.com",
  telephone: "+1-858-436-4120",
  email: "info@OSCengineering.com",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
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
