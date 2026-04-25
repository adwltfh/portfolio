"use client";

import { useState, useCallback, useEffect } from "react";
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

  const openProject = useCallback((p: Project) => {
    setProject(p);
    setOpen(true);
    document.body.classList.add("modal-open");
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    document.body.classList.remove("modal-open");
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeModal]);

  return (
    <>
      {/* Section header */}
      <section className="section mt-[72px] relative reveal">
        <div className="flex items-center gap-[14px] mb-6">
          <h2 className="font-caprasimo text-[32px] leading-[1.1] m-0">
            selected{" "}
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
                  className="aspect-[5/4] rounded-[4px] border-2 border-resume-ink mb-3 flex items-center justify-center font-caprasimo text-[36px] text-resume-ink overflow-hidden relative"
                  style={{ background: cfg.imgBg }}
                >
                  <span className="bg-resume-paper border-2 border-resume-ink w-16 h-16 rounded-full flex items-center justify-center italic">
                    {p.glyph}
                  </span>
                </div>

                <h4 className="font-caprasimo text-[18px] leading-[1.1] mb-[2px]">
                  {p.title}
                </h4>
                <div className="font-fraunces italic text-[12px] text-resume-ink-soft mb-[6px]">
                  {p.kicker}
                </div>
                <span className="font-dm-mono text-[10px] text-resume-ink bg-resume-lilac-2 px-2 py-[3px] rounded-[4px] inline-block mb-[6px]">
                  {p.stack.slice(0, 3).join(" · ")}
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
        className={`fixed inset-0 z-[100] flex items-center justify-center p-6 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
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
              <div
                className="aspect-video border-b-2 border-resume-ink flex items-center justify-center font-caprasimo text-[64px] text-resume-ink rounded-t-[26px] overflow-hidden"
                style={{ background: COVER_BG[project.cover] }}
              >
                <span className="bg-resume-paper border-2 border-resume-ink w-24 h-24 rounded-full flex items-center justify-center italic">
                  {project.glyph}
                </span>
              </div>

              {/* Body */}
              <div className="p-[26px_28px_28px]">
                <h3
                  id="modal-title"
                  className="font-caprasimo text-[32px] leading-[1.05] mb-1"
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
    </>
  );
}
