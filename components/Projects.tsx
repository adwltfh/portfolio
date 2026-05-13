"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { PROJECT_LIST, type Project } from "@/lib/projects";

// Per-index config for polaroids
const POLAROID_CONFIG = [
  {
    rotate: "-rotate-2",
    shadow: "shadow-[4px_4px_0_#ff8fb3]",
    imgBg: "linear-gradient(135deg,#ffd5e5 50%,#fff3a8 50%)",
  },
  {
    rotate: "rotate-2",
    shadow: "shadow-[4px_4px_0_#f5d96b]",
    imgBg: "#e1d2ff",
  },
  {
    rotate: "rotate-1",
    shadow: "shadow-[4px_4px_0_#82c2f0]",
    imgBg: "linear-gradient(135deg,#c9e7ff 50%,#c9f3d8 50%)",
  },
  {
    rotate: "-rotate-1",
    shadow: "shadow-[4px_4px_0_#b59cf0]",
    imgBg: "#fff3a8",
  },
  {
    rotate: "-rotate-2",
    shadow: "shadow-[4px_4px_0_#ff8fb3]",
    imgBg: "linear-gradient(135deg,#c9f3d8 50%,#ffd5e5 50%)",
  },
  {
    rotate: "rotate-2",
    shadow: "shadow-[4px_4px_0_#f5d96b]",
    imgBg: "#c9e7ff",
  },
];

// Modal cover background per cover index (1-based)
const COVER_BG: Record<number, string> = {
  1: "linear-gradient(135deg,#ffd5e5 50%,#fff3a8 50%)",
  2: "#e1d2ff",
  3: "linear-gradient(135deg,#c9e7ff 50%,#c9f3d8 50%)",
  4: "#fff3a8",
  5: "linear-gradient(135deg,#c9f3d8 50%,#ffd5e5 50%)",
  6: "#c9e7ff",
};

const PILL_COLORS = ["bg-resume-sky", "bg-resume-mint", "bg-resume-lilac-2"];

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [zoomIndex, setZoomIndex] = useState(0);

  const openProject = useCallback((p: Project) => {
    setProject(p);
    setCarouselIndex(0);
    setImgLoaded(false);
    setOpen(true);
    document.body.classList.add("modal-open");
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    document.body.classList.remove("modal-open");
  }, []);

  const openZoom = useCallback((idx: number) => {
    setZoomIndex(idx);
    setZoomOpen(true);
  }, []);

  const closeZoom = useCallback(() => setZoomOpen(false), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (zoomOpen) {
        if (e.key === "Escape") {
          closeZoom();
          return;
        }
        const images = project?.images ?? [];
        if (e.key === "ArrowLeft")
          setZoomIndex((i) => (i - 1 + images.length) % images.length);
        if (e.key === "ArrowRight")
          setZoomIndex((i) => (i + 1) % images.length);
        return;
      }
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeModal, closeZoom, zoomOpen, project]);

  return (
    <>
      {/* Section header */}
      <section className="section mt-[72px] relative reveal">
        <div className="flex items-center gap-[14px] mb-6">
          <h2 className="font-caprasimo text-[32px] leading-[1.1] m-0">
            other{" "}
            <span
              style={{
                background: "linear-gradient(transparent 65%, #fff3a8 65%)",
                padding: "0 4px",
              }}
            >
              projects
            </span>
          </h2>
          <span className="font-caprasimo text-resume-pink-deep text-[28px] ml-auto rotate-[15deg]">
            ✦
          </span>
        </div>

        {/* Polaroid grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[18px] gap-y-[22px]">
          {PROJECT_LIST.map((p, i) => {
            const cfg = POLAROID_CONFIG[i] ?? POLAROID_CONFIG[0];
            return (
              <article
                key={p.key}
                className={`bg-resume-paper border-2 border-resume-ink p-3 pb-4 cursor-pointer transition-transform duration-[250ms] hover:rotate-0 hover:scale-[1.03] ${cfg.rotate} ${cfg.shadow}`}
                tabIndex={0}
                role="button"
                aria-label={`Open ${p.title} details`}
                onClick={() => openProject(p)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openProject(p);
                  }
                }}
              >
                {/* Polaroid image area */}
                <div
                  className="aspect-[5/4] rounded-[4px] border-2 border-resume-ink mb-3 overflow-hidden relative"
                  style={{ background: cfg.imgBg }}
                >
                  {/* Glyph — visible while image is loading / as fallback */}
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-resume-paper border-2 border-resume-ink w-16 h-16 rounded-full flex items-center justify-center font-caprasimo italic">
                      {p.glyph}
                    </span>
                  </span>
                  {/* Image sits on top once loaded */}
                  {p.images?.[0] && (
                    <Image
                      fill
                      src={p.images[0]}
                      alt={p.title}
                      className="object-cover"
                      sizes="300px"
                    />
                  )}
                </div>

                <h4 className="font-caprasimo text-[18px] leading-[1.1] mb-[2px]">
                  {p.title}
                </h4>
                <div className="font-fraunces italic text-[12px] text-resume-ink-soft mb-[6px]">
                  {p.kicker}
                </div>
                <span className="font-dm-mono text-[10px] text-resume-ink bg-resume-lilac-2 px-2 py-[3px] rounded-[4px] inline-block mb-[6px]">
                  {p.stack.slice(0, 4).join(" · ")}
                </span>
                <div className="font-dm-mono text-[9px] text-resume-ink-soft uppercase tracking-[0.1em] mt-[6px] opacity-70 after:content-['_→']">
                  view details
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Modal */}
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{
          background: "rgba(58,42,85,0.45)",
          backdropFilter: "blur(4px)",
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}
      >
        <div
          className={`bg-resume-paper border-2 border-resume-ink rounded-[28px] shadow-[10px_10px_0_#b59cf0] max-w-[520px] w-full max-h-[90vh] overflow-y-auto relative transition-transform duration-300 cubic-bezier-modal ${open ? "scale-100 rotate-0" : "scale-[0.92] -rotate-1"}`}
          style={{ transitionTimingFunction: "cubic-bezier(0.2,0.9,0.3,1.2)" }}
        >
          {/* Close button */}
          <button
            className="absolute top-[14px] right-[14px] w-9 h-9 rounded-full border-2 border-resume-ink bg-resume-paper font-caprasimo text-[18px] text-resume-ink cursor-pointer grid place-items-center transition-transform duration-200 hover:bg-resume-pink hover:rotate-90 z-10"
            onClick={closeModal}
            aria-label="Close"
          >
            ×
          </button>

          {/* Cover */}
          {project && (
            <>
              {/* Carousel cover */}
              {project &&
                (() => {
                  const images = project.images ?? [];
                  const hasImages = images.length > 0;
                  const hasMultiple = images.length > 1;
                  const bg = COVER_BG[project.cover];

                  const goTo = (idx: number) => {
                    setCarouselIndex(idx);
                    setImgLoaded(false);
                  };
                  const goPrev = (e: React.MouseEvent) => {
                    e.stopPropagation();
                    goTo((carouselIndex - 1 + images.length) % images.length);
                  };
                  const goNext = (e: React.MouseEvent) => {
                    e.stopPropagation();
                    goTo((carouselIndex + 1) % images.length);
                  };

                  return (
                    <div
                      className="relative aspect-video border-b-2 border-resume-ink rounded-t-[26px] overflow-hidden"
                      style={{ background: bg }}
                    >
                      {/* Actual image */}
                      {hasImages && (
                        <Image
                          fill
                          key={`${project.key}-${carouselIndex}`}
                          src={images[carouselIndex]}
                          alt={`${project.title} preview ${carouselIndex + 1}`}
                          className={`${project.imageFit === "contain" ? "object-contain" : "object-cover"} transition-opacity duration-500 ${imgLoaded ? "opacity-100" : "opacity-0"} cursor-zoom-in`}
                          onLoad={() => setImgLoaded(true)}
                          onClick={(e) => {
                            e.stopPropagation();
                            openZoom(carouselIndex);
                          }}
                          sizes="(max-width: 640px) 100vw, 520px"
                        />
                      )}

                      {/* Glyph — loading state / fallback when no images */}
                      <div
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${!hasImages || !imgLoaded ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                      >
                        <span className="bg-resume-paper border-2 border-resume-ink w-24 h-24 rounded-full flex items-center justify-center font-caprasimo text-[32px] italic select-none">
                          {project.glyph}
                        </span>
                      </div>

                      {/* Left / Right nav */}
                      {hasMultiple && (
                        <>
                          <button
                            onClick={goPrev}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border-2 border-resume-ink bg-resume-paper font-caprasimo text-[16px] grid place-items-center opacity-30 hover:opacity-75 focus-visible:opacity-75 transition-opacity duration-200 z-10"
                            aria-label="Previous image"
                          >
                            ←
                          </button>
                          <button
                            onClick={goNext}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border-2 border-resume-ink bg-resume-paper font-caprasimo text-[16px] grid place-items-center opacity-30 hover:opacity-75 focus-visible:opacity-75 transition-opacity duration-200 z-10"
                            aria-label="Next image"
                          >
                            →
                          </button>
                        </>
                      )}

                      {/* Dot indicators */}
                      {hasMultiple && (
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-[6px] z-10">
                          {images.map((_, i) => (
                            <button
                              key={i}
                              onClick={(e) => {
                                e.stopPropagation();
                                goTo(i);
                              }}
                              className={`w-[7px] h-[7px] rounded-full border border-resume-ink transition-all duration-200 ${i === carouselIndex ? "bg-resume-ink opacity-80 scale-110" : "bg-resume-paper opacity-35 hover:opacity-60"}`}
                              aria-label={`Go to image ${i + 1}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })()}

              {/* Body */}
              <div className="p-[16px_18px_20px] sm:p-[26px_28px_28px]">
                <h3
                  id="modal-title"
                  className="font-caprasimo text-[24px] sm:text-[32px] leading-[1.05] mb-1"
                >
                  {project.title}
                </h3>
                <div className="font-fraunces italic text-[14px] text-resume-pink-deep font-semibold mb-[22px]">
                  {project.kicker}
                </div>

                <div className="mb-[22px]">
                  <div className="modal-label">about</div>
                  <p className="font-fraunces text-[17px] leading-[1.5] text-resume-ink m-0 whitespace-pre-line">
                    {project.desc}
                  </p>
                </div>

                <div className="mb-[22px]">
                  <div className="modal-label">my role</div>
                  <span className="font-nunito text-[15px] font-bold text-resume-ink bg-resume-butter border-[1.5px] border-resume-ink px-[14px] py-2 rounded-xl inline-block">
                    {project.role}
                  </span>
                </div>

                <div>
                  <div className="modal-label">tech stack</div>
                  <div className="flex flex-wrap gap-[6px]">
                    {project.stack.map((tech, i) => (
                      <span
                        key={tech}
                        className={`font-dm-mono text-[11px] px-[11px] py-[5px] rounded-full border-[1.5px] border-resume-ink ${PILL_COLORS[i % 3]}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {/* Lightbox */}
      {zoomOpen && project?.images && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{
            background: "rgba(20,12,35,0.92)",
            backdropFilter: "blur(8px)",
          }}
          onClick={closeZoom}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full border-2 border-resume-ink bg-resume-paper font-caprasimo text-[20px] grid place-items-center transition-transform duration-200 hover:rotate-90 z-10"
            onClick={(e) => {
              e.stopPropagation();
              closeZoom();
            }}
            aria-label="Close zoom"
          >
            ×
          </button>

          {/* Prev */}
          {project.images.length > 1 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-resume-ink bg-resume-paper font-caprasimo text-[18px] grid place-items-center opacity-60 hover:opacity-100 transition-opacity z-10"
              onClick={(e) => {
                e.stopPropagation();
                setZoomIndex(
                  (i) =>
                    (i - 1 + project.images!.length) % project.images!.length,
                );
              }}
              aria-label="Previous image"
            >
              ←
            </button>
          )}

          {/* Image */}
          <img
            src={project.images[zoomIndex]}
            alt={`${project.title} ${zoomIndex + 1}`}
            className="max-w-[92vw] max-h-[88vh] object-contain rounded-[6px] shadow-2xl cursor-zoom-out select-none"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          {project.images.length > 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-resume-ink bg-resume-paper font-caprasimo text-[18px] grid place-items-center opacity-60 hover:opacity-100 transition-opacity z-10"
              onClick={(e) => {
                e.stopPropagation();
                setZoomIndex((i) => (i + 1) % project.images!.length);
              }}
              aria-label="Next image"
            >
              →
            </button>
          )}

          {/* Counter */}
          {project.images.length > 1 && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 font-dm-mono text-[12px] text-white/60">
              {zoomIndex + 1} / {project.images.length}
            </div>
          )}
        </div>
      )}
    </>
  );
}
