"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EyeOff } from "lucide-react";

const stealthExamples = [
  "Artificial palm trees",
  "Saguaro cactus",
  "Flagpoles",
  "Faux rocks",
  "Faux water tanks",
  "Church steeples and bell towers",
  "Building penthouses and parapets",
  "Billboard structures",
];

export function StealthCallout() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs font-heading font-semibold tracking-wider uppercase">
              <EyeOff className="w-3.5 h-3.5" />
              Hidden in plain sight
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 leading-tight">
              Many cell antennas are deliberately hidden.
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Modern cellular installations are routinely concealed inside
              ordinary-looking structures so they blend into the landscape.
              That&apos;s good urban design — and it&apos;s exactly why RF
              compliance is so often overlooked. If you can&apos;t see the
              antenna, it&apos;s easy to forget the FCC exposure rules still
              apply to anyone working near it.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-slate-700">
              {stealthExamples.map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-500">
              OSC Engineering finds these installations, verifies compliance against{" "}
              <span className="font-mono font-semibold">47 CFR § 1.1310</span>, and
              documents what&apos;s actually there — not just what&apos;s visible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5"
          >
            <Image
              src="/images/stealth-montage.jpg"
              alt="Four stealth cellular installations side by side: a saguaro cactus, a flagpole with a wider top housing, a faux rock outcrop, and a church bell tower with louvered openings"
              width={1536}
              height={1024}
              className="w-full h-auto object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950/80 to-transparent">
              <p className="text-white text-xs font-heading font-semibold tracking-wider uppercase">
                Cactus &middot; Flagpole &middot; Faux Rock &middot; Steeple
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
