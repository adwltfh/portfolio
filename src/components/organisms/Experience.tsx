import type { CSSProperties } from "react";
import type { ExperienceEntry } from "@/lib/types";
import { SectionHead } from "../molecules/SectionHead";
import { Reveal } from "../molecules/Reveal";
import { Highlight } from "../atoms/Highlight";

/** vertical timeline of roles, each a card with a colored node dot */
export function Experience({ items }: { items: ExperienceEntry[] }) {
  return (
    <section className="section section--alt" id="experience">
      <div className="container">
        <SectionHead
          eyebrow="the journey"
          title={
            <>
              recent <Highlight color="var(--pink)">experience</Highlight>
            </>
          }
        />
        <div className="timeline">
          {items.map((e, i) => (
            <Reveal key={i} className="tl-item" style={{ ["--dotcol" as string]: e.dot } as CSSProperties}>
              <div className="tl-card">
                <div className="tl-head">
                  <div>
                    <h4>{e.title}</h4>
                    <div className="tl-org">{e.org}</div>
                  </div>
                  <span className="tl-when">{e.when}</span>
                </div>
                <ul>
                  {e.points.map((pt, j) => (
                    <li key={j}>
                      <span className="mk">✦</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
