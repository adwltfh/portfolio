"use client";

import { useState } from "react";
import type { FeaturedProject } from "@/lib/types";
import { SectionHead } from "../molecules/SectionHead";
import { Highlight } from "../atoms/Highlight";
import { FeatureRow } from "./FeatureRow";
import { CaseStudyModal } from "./CaseStudyModal";

/** "things I've shipped" — data-driven list of live products + case-study modal */
export function Featured({ items }: { items: FeaturedProject[] }) {
  const [study, setStudy] = useState<FeaturedProject | null>(null);

  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHead
          eyebrow="live & in production"
          title={
            <>
              things I&apos;ve <Highlight color="var(--mint)">shipped</Highlight>
            </>
          }
        />
        <div className="feat-list">
          {items.map((f, i) => (
            <FeatureRow key={f.id} f={f} index={i} onStudy={setStudy} />
          ))}
        </div>
      </div>
      <CaseStudyModal project={study} onClose={() => setStudy(null)} />
    </section>
  );
}
