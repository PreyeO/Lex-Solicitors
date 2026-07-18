"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view and returns its id, for nav
 * highlighting. Returns the last section whose top has passed the `offset`
 * line below the viewport top. SSR-safe; cleans up its listeners.
 */
export function useScrollSpy(
  sectionIds: string[],
  offset = 120,
): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const update = () => {
      const scrollPosition = window.scrollY + offset;
      let current: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          current = id;
        }
      }
      setActiveId(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sectionIds, offset]);

  return activeId;
}
