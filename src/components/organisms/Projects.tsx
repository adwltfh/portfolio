"use client";

import { useState } from "react";
import type { Project } from "@/lib/types";
import { SectionHead } from "../molecules/SectionHead";
import { Reveal } from "../molecules/Reveal";
import { Highlight } from "../atoms/Highlight";
import { ImageSlot } from "../atoms/ImageSlot";
import { ProjectModal } from "./ProjectModal";
import type { CSSProperties } from "react";

const CHIP_COLORS = ["pink", "sky", "lav", "mint", "butter", "lav"] as const;

/** card shadow accent per 1-based `cover` variant (falls back to grid position) */
const COVER_SHADOW = [
  "var(--pink-deep)",
  "var(--butter-deep)",
  "var(--lav-deep)",
  "var(--mint-deep)",
  "var(--sky-deep)",
  "var(--lav-deep)",
] as const;

/** polaroid-card grid of secondary projects; each opens a gallery modal */
export function Projects({ items }: { items: Project[] }) {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section className="section section--alt" id="projects">
      <div className="container">
        <SectionHead
          eyebrow="selected builds"
          title={
            <>
              other <Highlight color="var(--lav)">projects</Highlight>
            </>
          }
          lead="Client work, internships & experiments — tap any card for the story behind it."
        />
        <div className="proj-grid">
          {items.map((pr, i) => (
            <Reveal
              key={pr.id}
              delay={(i % 2) * 80}
              as="article"
              className="card card--pop polaroid"
              style={
                {
                  ["--shadowcol" as string]:
                    COVER_SHADOW[(pr.cover ?? i + 1) - 1] ?? COVER_SHADOW[i % COVER_SHADOW.length],
                } as CSSProperties
              }
              onClick={() => setOpen(pr)}
              role="button"
              tabIndex={0}
              onKeyDown={(e: React.KeyboardEvent) => (e.key === "Enter" || e.key === " ") && setOpen(pr)}
            >
              <div className="shot ph-stripe">
                <ImageSlot
                  alt={`${pr.name} screenshot`}
                  src={pr.images?.[0]}
                  fit={pr.imageFit}
                  glyph={pr.glyph}
                />
              </div>
              <h4>{pr.name}</h4>
              <div className="kind">{pr.kind}</div>
              <div className="stack">
                {pr.stack.map((s) => (
                  <span className={`chip ${CHIP_COLORS[i % CHIP_COLORS.length]}`} key={s}>
                    {s}
                  </span>
                ))}
              </div>
              <div className="more">
                view details <span aria-hidden="true">→</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
