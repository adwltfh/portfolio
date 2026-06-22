"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

/** marker-highlight word that "draws in" when scrolled into view (HL) */
export function Highlight({ children, color }: { children: ReactNode; color?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("lit");
            io.disconnect();
          }
        });
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style = color ? ({ "--mark": color } as CSSProperties) : undefined;
  return (
    <span className="hl" ref={ref} style={style}>
      <span>{children}</span>
    </span>
  );
}
