"use client";

import { useEffect, useState } from "react";

/**
 * Returns `true` once the window has scrolled past `threshold` pixels.
 * SSR-safe: `window` is only read inside the effect.
 */
export function useScrolled(threshold = 0): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > threshold);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [threshold]);

  return scrolled;
}
