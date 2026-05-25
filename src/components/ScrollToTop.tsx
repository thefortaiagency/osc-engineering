"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Force the window to scroll to the top of the document whenever the
 * pathname changes. Next.js App Router usually handles this, but in
 * practice the scroll position can land mid-page when the previous page
 * was tall and the new page is short, or when a hash anchor was the
 * last navigation. This guarantees a clean top on every route change.
 *
 * Uses `behavior: "instant"` so it doesn't animate (the html element
 * has `scroll-behavior: smooth` for in-page anchors).
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
