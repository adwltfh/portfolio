"use client";

import { useEffect, useState } from "react";

/**
 * IntersectionObserver-based scroll-spy. A detection band sits just below the
 * fixed nav (top edge at `line`px, ~30% of the viewport tall); the active link
 * is the lowest section currently crossing that band. When nothing is in the
 * band (page top / bottom) the last active section sticks, so Contact stays lit
 * at the very bottom. No per-scroll layout reads — far cheaper than measuring
 * every section on every scroll event.
 */
export function useScrollSpy(ids: string[], line = 140): string {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const intersecting = new Map<string, boolean>();

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) intersecting.set(e.target.id, e.isIntersecting);
        // lowest (last in DOM order) section currently in the band wins
        for (let i = ids.length - 1; i >= 0; i--) {
          if (intersecting.get(ids[i])) {
            setActive(ids[i]);
            return;
          }
        }
      },
      { rootMargin: `-${line}px 0px -70% 0px`, threshold: 0 }
    );

    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [ids, line]);

  return active;
}
