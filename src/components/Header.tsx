"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Resources", href: "/resources" },
  { label: "FAQs", href: "/faqs" },
];

function isActive(pathname: string, href: string): boolean {
  // Only highlight route-based nav items. Hash-only anchors (e.g. /#services,
  // /#how-it-works) aren't tracked here — they'd otherwise all light up
  // together whenever the user is on the home page. A scroll-spy could be
  // added later if Craig wants them to track scroll position.
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-slate-950 text-sm hidden md:block">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6 text-slate-400">
            <a href="tel:858-436-4120" className="hover:text-white transition-colors">
              (858) 436-4120
            </a>
            <span className="w-px h-4 bg-slate-700" />
            <a href="mailto:info@OSCengineering.com" className="hover:text-white transition-colors">
              info@OSCengineering.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group hover:no-underline">
            <Image
              src="/images/osc-logo.png"
              alt="OSC Engineering"
              width={160}
              height={80}
              priority
              className="h-12 w-auto object-contain"
            />
            <span className="hidden lg:block text-[10px] text-slate-500 tracking-widest uppercase">
              RF Compliance &amp; Site Safety
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`px-4 py-2 text-sm rounded-lg transition-colors font-medium underline-offset-4 ${
                    active
                      ? "text-slate-900 underline decoration-red-600 decoration-2"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-50 decoration-slate-300"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex px-6 py-2.5 bg-red-500 text-white font-heading font-semibold text-sm rounded-lg hover:bg-red-400 transition-colors"
            >
              Request Assessment
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-50 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5 w-5">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 w-full bg-slate-900 rounded-full"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block h-0.5 w-full bg-slate-900 rounded-full"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 w-full bg-slate-900 rounded-full"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-slate-200"
            >
              <nav className="px-6 py-4 flex flex-col gap-1 bg-white">
                {navItems.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`px-4 py-3 rounded-lg transition-colors font-medium underline-offset-4 ${
                        active
                          ? "text-slate-900 underline decoration-red-600 decoration-2"
                          : "text-slate-700 hover:text-slate-900 hover:bg-slate-50 decoration-slate-300"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 px-6 py-3.5 bg-red-500 text-white font-heading font-semibold text-center rounded-lg hover:bg-red-400 transition-colors"
                >
                  Request Assessment
                </Link>
                <a href="tel:858-436-4120" className="px-4 py-3 text-red-600 text-center font-semibold">
                  Call (858) 436-4120
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
