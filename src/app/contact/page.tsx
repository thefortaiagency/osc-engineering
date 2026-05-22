import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact OSC Engineering",
  description:
    "Request a site assessment, lease review, or RF compliance consultation. Independent FCC RF expertise — nationwide. Call (858) 436-4120 or email craig@oscengineering.com.",
};

export default function ContactPage() {
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
            Contact
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-extrabold text-white leading-tight">
            Let&apos;s talk about your site.
          </h1>
          <p className="mt-5 text-xl text-slate-300 max-w-2xl">
            20-minute intake calls are free. We&apos;ll tell you whether you need
            a site visit, a desk-based study, or just lease language help — before
            quoting anything.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2 space-y-6">
              <ContactCard
                icon={Phone}
                title="Call us"
                primary="(858) 436-4120"
                primaryHref="tel:858-436-4120"
                secondary="Cell: (407) 923-9605"
                secondaryHref="tel:407-923-9605"
              />
              <ContactCard
                icon={Mail}
                title="Email"
                primary="craig@oscengineering.com"
                primaryHref="mailto:craig@oscengineering.com"
                secondary="Response within one business day"
              />
              <ContactCard
                icon={MapPin}
                title="Service area"
                primary="Nationwide"
                secondary="On-site work in CA, AZ, NV, FL & adjacent. Remote desk reviews anywhere in the US."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon: Icon,
  title,
  primary,
  primaryHref,
  secondary,
  secondaryHref,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  primary: string;
  primaryHref?: string;
  secondary?: string;
  secondaryHref?: string;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h3 className="font-heading font-bold text-slate-900 text-base">{title}</h3>
          <p className="mt-1">
            {primaryHref ? (
              <a href={primaryHref} className="text-slate-900 font-semibold hover:text-red-600">
                {primary}
              </a>
            ) : (
              <span className="text-slate-900 font-semibold">{primary}</span>
            )}
          </p>
          {secondary && (
            <p className="mt-1 text-sm text-slate-600">
              {secondaryHref ? (
                <a href={secondaryHref} className="hover:text-red-600">
                  {secondary}
                </a>
              ) : (
                secondary
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
