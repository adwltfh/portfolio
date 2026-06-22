"use client";

import { useState } from "react";
import { ImageSlot } from "../atoms/ImageSlot";
import type { LightboxShot } from "./Lightbox";

/**
 * Horizontal carousel of screenshot slides shown inside a project / case-study
 * modal. No raster assets ship with the design, so slots render placeholders;
 * pass real screenshot URLs via `srcs` to enable the slides + fullscreen zoom.
 * Ported from gallery.jsx.
 */
export function ProjectGallery({
  projectId,
  name,
  shots,
  srcs,
  fit = "cover",
  onZoom,
}: {
  projectId: string;
  name: string;
  shots: number;
  srcs?: (string | undefined)[];
  fit?: "cover" | "contain";
  onZoom: (filled: LightboxShot[], startIndex: number) => void;
}) {
  const n = Math.max(1, shots || 3);
  const [active, setActive] = useState(0);
  const multi = n > 1;
  const go = (d: number) => setActive((a) => (a + d + n) % n);

  const altFor = (i: number) => (i === 0 ? `${name} — main screenshot` : `${name} screenshot ${i + 1}`);
  /* only slots that actually have an image are zoomable */
  const filled: LightboxShot[] = Array.from({ length: n }, (_, i) => srcs?.[i])
    .map((src, i) => (src ? { src, alt: altFor(i) } : null))
    .filter((s): s is LightboxShot => s !== null);

  const zoom = (i: number) => {
    const src = srcs?.[i];
    if (!src) return;
    const start = filled.findIndex((f) => f.src === src);
    onZoom(filled, start < 0 ? 0 : start);
  };

  return (
    <div className="carousel" data-count={n}>
      <div className="carousel__viewport">
        <div className="carousel__track" style={{ transform: `translateX(-${active * 100}%)` }}>
          {Array.from({ length: n }, (_, i) => (
            <div className="gshot ph-stripe" key={`${projectId}-${i}`} aria-hidden={i === active ? undefined : "true"}>
              <ImageSlot alt={altFor(i)} src={srcs?.[i]} fit={fit} />
              {srcs?.[i] && (
                <button
                  className="gshot__zoom"
                  onClick={(e) => {
                    e.stopPropagation();
                    zoom(i);
                  }}
                  tabIndex={i === active ? 0 : -1}
                  aria-label="View full size"
                  title="View full size"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3.2-3.2M11 8v6M8 11h6" />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>
        {multi && (
          <>
            <button className="carousel__arrow prev" onClick={() => go(-1)} aria-label="Previous screenshot">
              ‹
            </button>
            <button className="carousel__arrow next" onClick={() => go(1)} aria-label="Next screenshot">
              ›
            </button>
            <div className="carousel__index">
              {active + 1} / {n}
            </div>
          </>
        )}
      </div>
      {multi && (
        <div className="carousel__dots" role="tablist" aria-label="Screenshots">
          {Array.from({ length: n }, (_, i) => (
            <button
              key={`dot-${projectId}-${i}`}
              className={`cdot${i === active ? " on" : ""}`}
              onClick={() => setActive(i)}
              role="tab"
              aria-selected={i === active}
              aria-label={`Screenshot ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
