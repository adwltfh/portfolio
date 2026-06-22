"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * Screenshot slot. In the prototype this was a "drop an image" web component;
 * in production it becomes a real next/image + descriptive alt (SEO checklist).
 *
 * No raster assets ship with the design, so when `src` is omitted it renders the
 * striped placeholder showing the glyph/alt. When a `src` is supplied it shows an
 * animated skeleton until the image actually loads, then fades it in — and only
 * falls back to the glyph/alt placeholder if the image genuinely fails to load.
 */
export function ImageSlot({
  src,
  alt,
  className = "",
  fit = "cover",
  glyph,
}: {
  src?: string;
  alt: string;
  className?: string;
  /** how the image fills its frame (default "cover") */
  fit?: "cover" | "contain";
  /** monogram shown on the placeholder when no `src` / on load error */
  glyph?: string;
}) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  const imgRef = useRef<HTMLImageElement>(null);

  /* a cached image can finish before the onLoad handler attaches */
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) setStatus("loaded");
  }, [src]);

  if (!src) {
    return (
      <div
        className={`ph-stripe${className ? ` ${className}` : ""}`}
        style={{ width: "100%", height: "100%" }}
        role="img"
        aria-label={alt}
      >
        <span>{glyph ?? alt}</span>
      </div>
    );
  }

  return (
    <div className={className} style={{ position: "relative", width: "100%", height: "100%" }}>
      {status === "loading" && (
        <div className="img-skeleton is-loading" style={{ position: "absolute", inset: 0 }} aria-hidden="true" />
      )}
      {status === "error" && (
        <div
          className="ph-stripe"
          style={{ position: "absolute", inset: 0 }}
          role="img"
          aria-label={alt}
        >
          <span>{glyph ?? alt}</span>
        </div>
      )}
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 940px) 100vw, 50vw"
        /* remote CDN assets (jsdelivr) are already optimised + cached; skip the
           Next optimizer so a slow server-side fetch can't time out the image */
        unoptimized={/^https?:\/\//.test(src)}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
        style={{
          objectFit: fit,
          opacity: status === "loaded" ? 1 : 0,
          transition: "opacity .4s ease",
        }}
      />
    </div>
  );
}
