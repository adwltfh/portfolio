import type { FeaturedProject } from "@/lib/types";
import { Reveal } from "../molecules/Reveal";
import { BrowserMockup } from "../molecules/BrowserMockup";
import { Eyebrow } from "../atoms/Eyebrow";
import { Chip } from "../atoms/Chip";
import { Button } from "../atoms/Button";

/** one live product — browser mockup + copy; sides alternate down the column */
export function FeatureRow({
  f,
  index,
  onStudy,
}: {
  f: FeaturedProject;
  index: number;
  onStudy: (f: FeaturedProject) => void;
}) {
  const rev = index % 2 === 1;
  /* card summary: explicit blurb, else the first paragraph of the overview */
  const blurb = f.blurb ?? f.overview?.split(/\n{2,}/)[0].trim();
  return (
    <div className={`featured feat-row${rev ? " feat-row--rev" : ""}`}>
      <Reveal className="browser">
        <BrowserMockup
          url={f.url}
          shotId={`shot-${f.id}-0`}
          alt={`${f.name} — main screenshot`}
          src={f.images?.[0]}
        />
      </Reveal>
      <Reveal delay={120} className="feat-copy">
        <Eyebrow spark={false} className="label">
          ★ {f.tag || "featured project"}
        </Eyebrow>
        <h3>{f.name}</h3>
        {blurb && <p>{blurb}</p>}
        <div className="stack">
          {f.stack.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>
        <div className="actions">
          <Button variant="primary" href={f.href} target="_blank" rel="noopener">
            visit site ↗
          </Button>
          <Button as="button" onClick={() => onStudy(f)}>
            read the case study →
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
