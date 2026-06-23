"use client";

import { useEffect, useState } from "react";

/**
 * IntersectionObserver-based scroll-spy. A detection band sits just below the
 * fixed nav (top edge at `line`px, ~30% of the viewport tall); the active link
 * is the lowest section currently crossing that band.
 *
 * The last section (Contact) is often too short to ever reach the band before
 * the page hits max scroll — so a lightweight scroll/resize check force-activates
 * it once we're at the bottom. Both paths share `pick()`; the only per-event work
 * is a couple of scalar reads (no per-section getBoundingClientRect).
 */
export function useScrollSpy(ids: string[], line = 140): string {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const intersecting = new Map<string, boolean>();

    const pick = () => {
      const se = document.scrollingElement || document.documentElement;
      const atBottom = window.innerHeight + window.scrollY >= se.scrollHeight - 2;
      if (atBottom) {
        setActive(ids[ids.length - 1]);
        return;
      }
      // lowest (last in DOM order) section currently in the band wins;
      // if none are in the band (page top / between sections) keep the current one
      for (let i = ids.length - 1; i >= 0; i--) {
        if (intersecting.get(ids[i])) {
          setActive(ids[i]);
          return;
        }
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) intersecting.set(e.target.id, e.isIntersecting);
        pick();
      },
      { rootMargin: `-${line}px 0px -70% 0px`, threshold: 0 }
    );

    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    els.forEach((el) => io.observe(el));

    window.addEventListener("scroll", pick, { passive: true });
    window.addEventListener("resize", pick);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", pick);
      window.removeEventListener("resize", pick);
    };
  }, [ids, line]);

  return active;
}
