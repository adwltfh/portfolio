import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "../atoms/Eyebrow";

/** eyebrow + display <h2> (+ optional lead), revealed on scroll */
export function SectionHead({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <Reveal className="section-head">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="section-title">{title}</h2>
      {lead && <p>{lead}</p>}
    </Reveal>
  );
}
