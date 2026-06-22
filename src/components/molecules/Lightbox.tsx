"use client";

import { useEffect, useRef, useState } from "react";
import { useFocusTrap } from "@/lib/hooks/useFocusTrap";

export interface LightboxShot {
  src: string;
  alt: string;
}

/** fullscreen zoom of the gallery shots, with prev/next (←/→/Esc). Ported from gallery.jsx. */
export function Lightbox({
  shots,
  startIndex = 0,
  onClose,
}: {
  shots: LightboxShot[];
  startIndex?: number;
  onClose: () => void;
}) {
  const [i, setI] = useState(startIndex);
  const ref = useRef<HTMLDivElement>(null);
  useFocusTrap(ref, shots.length > 0);

  useEffect(() => {
    const go = (d: number) => setI((p) => (p + d + shots.length) % shots.length);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight" && shots.length > 1) go(1);
      else if (e.key === "ArrowLeft" && shots.length > 1) go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [shots.length, onClose]);

  if (!shots.length) return null;
  const go = (d: number) => setI((p) => (p + d + shots.length) % shots.length);
  const multi = shots.length > 1;
  const cur = shots[i];

  return (
    <div
      ref={ref}
      className="lightbox"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Screenshot viewer"
      tabIndex={-1}
    >
      <button className="lightbox__close" onClick={onClose} aria-label="Close viewer">
        ✕
      </button>
      {multi && (
        <button
          className="lightbox__nav prev"
          onClick={(e) => {
            e.stopPropagation();
            go(-1);
          }}
          aria-label="Previous"
        >
          ‹
        </button>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="lightbox__img" src={cur.src} alt={cur.alt} onClick={(e) => e.stopPropagation()} />
      {multi && (
        <button
          className="lightbox__nav next"
          onClick={(e) => {
            e.stopPropagation();
            go(1);
          }}
          aria-label="Next"
        >
          ›
        </button>
      )}
      {multi && (
        <div className="lightbox__count">
          {i + 1} / {shots.length}
        </div>
      )}
    </div>
  );
}
