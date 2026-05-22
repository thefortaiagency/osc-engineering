"use client";

import { motion } from "framer-motion";
import { Building2, GraduationCap, Landmark, HardHat, Radio } from "lucide-react";

const clients = [
  { label: "Property Owners", icon: Building2 },
  { label: "School Districts", icon: GraduationCap },
  { label: "Local Jurisdictions", icon: Landmark },
  { label: "Wireless Operators", icon: Radio },
  { label: "Site Workers", icon: HardHat },
];

export function TrustBar() {
  return (
    <section className="bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 py-8">
        <p className="text-xs text-slate-500 font-heading font-semibold tracking-wider uppercase text-center mb-6">
          Who we work with
        </p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4"
        >
          {clients.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.label} className="flex items-center gap-3 justify-center">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-slate-800 font-heading font-semibold text-sm leading-tight">
                  {c.label}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
