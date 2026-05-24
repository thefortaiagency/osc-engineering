"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-sm border-t border-slate-200 px-4 py-3 flex items-center gap-3 shadow-lg">
      <a
        href="tel:858-436-4120"
        className="flex-1 py-3 px-4 border border-slate-200 text-slate-900 font-heading font-semibold text-sm rounded-lg text-center hover:bg-slate-50 transition-colors"
      >
        Call OSC
      </a>
      <Link
        href="/contact"
        className="flex-1 py-3 px-4 bg-red-500 text-white font-heading font-semibold text-sm rounded-lg text-center hover:bg-red-400 transition-colors"
      >
        Request Assessment
      </Link>
    </div>
  );
}
