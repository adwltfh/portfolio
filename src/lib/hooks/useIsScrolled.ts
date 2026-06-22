"use client";

import { useEffect, useState } from "react";

/** true once the page has scrolled past `threshold`px — drives the nav glass effect */
export function useIsScrolled(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.scrollingElement?.scrollTop || document.body.scrollTop || 0;
      setScrolled(y > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true, capture: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll, { capture: true } as EventListenerOptions);
    };
  }, [threshold]);

  return scrolled;
}
