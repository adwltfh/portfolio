"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/lib/types";
import { Modal } from "../molecules/Modal";
import { ProjectGallery } from "../molecules/ProjectGallery";
import { Lightbox, type LightboxShot } from "../molecules/Lightbox";
import { IconButton } from "../atoms/IconButton";
import { Chip } from "../atoms/Chip";

interface Zoom {
  shots: LightboxShot[];
  startIndex: number;
}

/** screenshot gallery + about / role / tech-stack for a secondary project. Ported from sections.jsx. */
export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const [zoom, setZoom] = useState<Zoom | null>(null);

  useEffect(() => {
    setZoom(null);
  }, [project]);

  const paragraphs = project
    ? Array.isArray(project.about)
      ? project.about
      : String(project.about).split(/\n{2,}/)
    : [];

  return (
    <>
      <Modal open={!!project} onClose={onClose} disableEsc={!!zoom} label={project?.name}>
        {project && (
          <>
            <IconButton className="modal__close" onClick={onClose} aria-label="Close">
              ✕
            </IconButton>
            <ProjectGallery
              projectId={project.id}
              name={project.name}
              shots={project.images?.length ?? 3}
              srcs={project.images}
              fit={project.imageFit}
              onZoom={(shots, startIndex) => setZoom({ shots, startIndex })}
            />
            <div className="modal__body">
              <h3>{project.name}</h3>
              <div className="kind">{project.kind}</div>
              <div className="modal__lbl">about</div>
              {paragraphs.map((para, i) => (
                <p key={i}>{para.trim()}</p>
              ))}
              <div className="modal__lbl">my role</div>
              <Chip color="butter" style={{ fontSize: 13, padding: "7px 13px" }}>
                {project.role}
              </Chip>
              <div className="modal__lbl">tech stack</div>
              <div className="stack" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {project.stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </div>
          </>
        )}
      </Modal>
      {zoom && <Lightbox shots={zoom.shots} startIndex={zoom.startIndex} onClose={() => setZoom(null)} />}
    </>
  );
}
