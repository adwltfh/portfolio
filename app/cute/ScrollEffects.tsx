"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.css";

/* Parallax on fixed sticker elements */
export function ParallaxBackground() {
  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      document
        .querySelectorAll<HTMLElement>("[data-speed]")
        .forEach((el) => {
          const speed = parseFloat(el.dataset.speed ?? "0.3");
          el.style.transform = `translateY(${-y * speed}px) rotate(${y * speed * 0.05}deg)`;
        });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}

/* IntersectionObserver to trigger .revealIn */
export function RevealOnScroll() {
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.revealIn);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document
      .querySelectorAll<HTMLElement>(`.${styles.reveal}`)
      .forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
