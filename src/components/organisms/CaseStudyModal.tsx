"use client";

import { useEffect, useState } from "react";
import type { FeaturedProject } from "@/lib/types";
import { Modal } from "../molecules/Modal";
import { ProjectGallery } from "../molecules/ProjectGallery";
import { Lightbox, type LightboxShot } from "../molecules/Lightbox";
import { MetricCard } from "../molecules/MetricCard";
import { IconButton } from "../atoms/IconButton";
import { Chip } from "../atoms/Chip";
import { Button } from "../atoms/Button";

interface Zoom {
  shots: LightboxShot[];
  startIndex: number;
}

/** richer modal for live products: challenge → approach → impact → outcome. Ported from casestudy.jsx. */
export function CaseStudyModal({
  project,
  onClose,
}: {
  project: FeaturedProject | null;
  onClose: () => void;
}) {
  const [zoom, setZoom] = useState<Zoom | null>(null);

  /* reset any open lightbox when the project changes/closes */
  useEffect(() => {
    setZoom(null);
  }, [project]);

  const s = project?.study;
  const overviewParas = project?.overview
    ? project.overview.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean)
    : [];
  const shotCount = project?.images?.length ?? project?.shots ?? 3;

  return (
    <>
      <Modal
        open={!!project}
        onClose={onClose}
        className="modal--study"
        disableEsc={!!zoom}
        label={project ? `Case study: ${project.name}` : undefined}
      >
        {project && (
          <>
            <IconButton className="modal__close" onClick={onClose} aria-label="Close">
              ✕
            </IconButton>
            <ProjectGallery
              projectId={project.id}
              name={project.name}
              shots={shotCount}
              srcs={project.images}
              onZoom={(shots, startIndex) => setZoom({ shots, startIndex })}
            />

            <div className="modal__body">
              <span className="cs-eyebrow">
                <span className="dot-live" />
                case study · live in production
              </span>
              <h3>{project.name}</h3>
              <div className="kind">{project.kind}</div>

              {overviewParas.length > 0 && (
                <>
                  <div className="modal__lbl">overview</div>
                  {overviewParas.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </>
              )}

              {s?.problem && (
                <>
                  <div className="modal__lbl">the challenge</div>
                  <p>{s.problem}</p>
                </>
              )}

              {s?.approach && s.approach.length > 0 && (
                <>
                  <div className="modal__lbl">how i approached it</div>
                  <ul className="cs-list">
                    {s.approach.map((pt, i) => (
                      <li key={i}>
                        <span className="mk">✦</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {s?.metrics && s.metrics.length > 0 && (
                <>
                  <div className="modal__lbl">impact</div>
                  <div className="cs-metrics">
                    {s.metrics.map((m, i) => (
                      <MetricCard key={i} value={m.v} label={m.k} />
                    ))}
                  </div>
                </>
              )}

              {s?.outcome && (
                <>
                  <div className="modal__lbl">the outcome</div>
                  <p>{s.outcome}</p>
                </>
              )}

              <div className="cs-foot">
                {(project.role || project.timeline) && (
                  <div className="cs-foot__cols">
                    {project.role && (
                      <div className="cs-foot__col">
                        <span className="cs-foot__k">my role</span>
                        <Chip color="butter">{project.role}</Chip>
                      </div>
                    )}
                    {project.timeline && (
                      <div className="cs-foot__col">
                        <span className="cs-foot__k">timeline</span>
                        <span className="cs-foot__v">{project.timeline}</span>
                      </div>
                    )}
                  </div>
                )}
                <div className="cs-foot__col">
                  <span className="cs-foot__k">built with</span>
                  <div className="stack" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {project.stack.map((x) => (
                      <Chip key={x}>{x}</Chip>
                    ))}
                  </div>
                </div>
                <Button variant="primary" className="cs-foot__cta" href={project.href} target="_blank" rel="noopener">
                  visit live site ↗
                </Button>
              </div>
            </div>
          </>
        )}
      </Modal>
      {zoom && <Lightbox shots={zoom.shots} startIndex={zoom.startIndex} onClose={() => setZoom(null)} />}
    </>
  );
}
