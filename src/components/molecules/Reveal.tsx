"use client";

import { createElement, useEffect, useRef } from "react";
import type { CSSProperties, ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  [key: string]: unknown;
};

/**
 * Reveal-on-scroll wrapper: fades/translates its content in once near the
 * viewport, respecting prefers-reduced-motion / the motion setting (handled in
 * CSS). Visible by default; only armed once <html> has the reveal-ready class.
 * Ported from sections.jsx.
 */
export function Reveal({ children, as = "div", delay = 0, className = "", ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const show = () => el.classList.add("in");

    if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
      const t = setTimeout(show, delay);
      return () => clearTimeout(t);
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(show, delay);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    const safety = setTimeout(show, 1600);
    return () => {
      io.disconnect();
      clearTimeout(safety);
    };
  }, [delay]);

  return createElement(
    as,
    { ref, className: `reveal ${className}`.trim(), ...rest },
    children
  );
}
