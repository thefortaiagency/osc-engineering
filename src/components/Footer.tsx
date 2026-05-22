import Link from "next/link";
import { Radio } from "lucide-react";

const services = [
  { label: "On-Site RF Testing", href: "/#services" },
  { label: "Theoretical RF Studies", href: "/#services" },
  { label: "Compliance Recommendations", href: "/#services" },
  { label: "Worker Safety Training", href: "/#services" },
  { label: "Lease & Document Review", href: "/#services" },
];

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "FAQs", href: "/faqs" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-slate-950">
      {/* CTA strip */}
      <div className="bg-red-500">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h3 className="text-lg font-heading font-bold text-white">
            Have a site that needs a compliance review?
          </h3>
          <div className="flex items-center gap-3">
            <a
              href="tel:858-436-4120"
              className="px-6 py-2.5 border border-white/30 text-white rounded-lg font-heading font-semibold hover:bg-white/10 transition-colors text-sm"
            >
              (858) 436-4120
            </a>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-white text-red-600 rounded-lg font-heading font-semibold hover:bg-slate-100 transition-colors text-sm"
            >
              Request Assessment
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-400/20 flex items-center justify-center">
                <Radio className="w-5 h-5 text-red-400" />
              </div>
              <span className="text-white font-heading font-semibold text-lg">
                OSC Engineering
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Independent FCC RF compliance studies, on-site testing, and worker
              safety training for cell sites — protecting property owners, school
              districts, jurisdictions, and the workers who maintain these sites.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4 text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-red-300 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4 text-sm tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-red-300 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4 text-sm tracking-wider uppercase">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <span className="text-white/40 text-xs uppercase tracking-wider block mb-1">
                  Office
                </span>
                <a href="tel:858-436-4120" className="hover:text-red-300 transition-colors">
                  (858) 436-4120
                </a>
              </li>
              <li>
                <span className="text-white/40 text-xs uppercase tracking-wider block mb-1">
                  Email
                </span>
                <a
                  href="mailto:craig@oscengineering.com"
                  className="hover:text-red-300 transition-colors"
                >
                  craig@oscengineering.com
                </a>
              </li>
              <li>
                <span className="text-white/40 text-xs uppercase tracking-wider block mb-1">
                  Service Area
                </span>
                Nationwide on-site &amp; remote
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>&copy; {new Date().getFullYear()} OSC Engineering. All rights reserved.</span>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="text-slate-500">
              Built by{" "}
              <a href="https://thefortaiagency.ai" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-red-300 transition-colors font-medium">
                The Fort AI Agency
              </a>
              {" "}&times;{" "}
              <a href="https://aimpactnexus.ai" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-red-300 transition-colors font-medium">
                AImpact Nexus
              </a>
            </span>
            <span className="hidden sm:inline w-px h-3 bg-slate-700" />
            <Link href="/privacy-policy" className="hover:text-red-300 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-red-300 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
