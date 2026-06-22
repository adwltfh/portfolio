import type { Skills as SkillsData } from "@/lib/types";
import { SectionHead } from "../molecules/SectionHead";
import { Reveal } from "../molecules/Reveal";
import { Highlight } from "../atoms/Highlight";
import { Chip } from "../atoms/Chip";
import { SkillTile } from "../molecules/SkillTile";

/** "tools of the trade" — minimal mono grid (the shipped layout) + supporting cast */
export function Skills({ skills }: { skills: SkillsData }) {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead
          eyebrow="daily drivers"
          title={
            <>
              tools of the <Highlight color="var(--butter)">trade</Highlight>
            </>
          }
        />
        <Reveal className="skills-card">
          <span className="ribbon">★ frontend stack</span>
          <div className="mono-grid">
            {skills.daily.map((t) => (
              <SkillTile key={t.nm} tile={t} />
            ))}
          </div>
          <div className="support">
            <span className="lbl">+ supporting cast</span>
            {skills.support.map((x) => (
              <Chip key={x}>{x}</Chip>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
