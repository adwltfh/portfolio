import type { CSSProperties } from "react";
import { data } from "@/lib/data";
import { Reveal } from "../molecules/Reveal";
import { AvailabilityBadge } from "../atoms/AvailabilityBadge";
import { Button } from "../atoms/Button";
import { Highlight } from "../atoms/Highlight";
import { Spark } from "../atoms/Spark";
import { CodeEditor } from "./CodeEditor";

const sparkStyle = (extra: CSSProperties): CSSProperties => extra;

/** hero: availability badge, value-prop <h1>, CTAs, quick stats + the code-editor object */
export function Hero() {
  const p = data.person;
  return (
    <header className="hero container" id="top">
      <div className="hero__grid">
        <div>
          <Reveal>
            <AvailabilityBadge>OPEN TO WORK · FREELANCE &amp; ROLES</AvailabilityBadge>
          </Reveal>
          <Reveal delay={60}>
            <h1>
              i&apos;m <span className="pink">adawiyyah</span>,<br />a{" "}
              <Highlight color="var(--accent-soft)">frontend dev</Highlight>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="hero__sub">
              crafting clean, performant interfaces <i>with care</i> — turning complex requirements into
              delightful, accessible products.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="hero__cta">
              <Button variant="primary" href="#work">
                view my work →
              </Button>
              <Button href={`mailto:${p.email}`}>get in touch</Button>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="hero__meta">
              <div>
                <span className="k">experience</span>
                <span className="v">{p.yearsExp} years</span>
              </div>
              <div>
                <span className="k">shipped</span>
                <span className="v">{p.shipped} products</span>
              </div>
              <div>
                <span className="k">based in</span>
                <span className="v">{p.location}</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="collage">
          <span className="sticker float" style={sparkStyle({ top: "-6%", right: "10%", ["--r" as string]: "0deg" } as CSSProperties)}>
            <Spark className="spark twk" style={{ width: 30, height: 30 }} />
          </span>
          <span className="sticker" style={{ bottom: "-3%", left: "8%" }}>
            <Spark className="spark twk" style={{ width: 20, height: 20, color: "var(--sky-deep)" }} />
          </span>
          <div className="washi" style={{ top: "-4%", left: "44%", transform: "rotate(-8deg)", zIndex: 3 }} />
          <div className="hero-stage">
            <CodeEditor motion="full" />
          </div>
        </Reveal>
      </div>
    </header>
  );
}
