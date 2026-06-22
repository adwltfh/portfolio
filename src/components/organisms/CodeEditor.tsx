"use client";

import { useEffect, useRef, useState } from "react";

/** the hero's self-typing dev.tsx code card, with cursor parallax. Ported from hero-object.jsx. */
type Tok = [string, string];
const CODE_TOKENS: Tok[][] = [
  [["const ", "key"], ["dev", "fn"], [" = {", "punc"]],
  [["  name", "prop"], [": ", "punc"], ['"adawiyyah"', "str"], [",", "punc"]],
  [["  role", "prop"], [": ", "punc"], ['"frontend dev"', "str"], [",", "punc"]],
  [["  stack", "prop"], [": [", "punc"], ['"react"', "str"], [", ", "punc"], ['"next"', "str"], [", ", "punc"], ['"vue"', "str"], ["],", "punc"]],
  [["  available", "prop"], [": ", "punc"], ["true", "bool"], [",", "punc"]],
  [["};", "punc"]],
  [["", "punc"]],
  [["ship", "fn"], ["(dev)", "punc"], ["; ", "punc"], ["// ✨ with care", "com"]],
];
const TOTAL_CHARS =
  CODE_TOKENS.reduce((a, l) => a + l.reduce((b, t) => b + t[0].length, 0), 0) + CODE_TOKENS.length;

export function CodeEditor({ motion = "full" }: { motion?: "full" | "subtle" | "off" }) {
  const [n, setN] = useState(motion === "off" ? TOTAL_CHARS + 5 : 0);
  const cardRef = useRef<HTMLDivElement>(null);

  /* typing loop */
  useEffect(() => {
    if (motion === "off") {
      setN(TOTAL_CHARS + 5);
      return;
    }
    let raf = 0;
    let last = performance.now();
    let acc = 0;
    let count = 0;
    let hold = 0;
    const speed = 26; // chars/sec
    const loop = (now: number) => {
      const dt = now - last;
      last = now;
      if (count >= TOTAL_CHARS) {
        hold += dt;
        if (hold > 2600) {
          count = 0;
          hold = 0;
          setN(0);
        }
      } else {
        acc += (dt / 1000) * speed;
        while (acc >= 1 && count < TOTAL_CHARS) {
          acc -= 1;
          count++;
        }
        setN(count);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [motion]);

  /* cursor parallax */
  useEffect(() => {
    if (motion !== "full") return;
    const el = cardRef.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg)`;
    };
    const leave = () => {
      el.style.transform = "perspective(900px)";
    };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, [motion]);

  /* render tokens up to n chars + a caret at the typing position */
  const done = n >= TOTAL_CHARS;
  let left = n;
  let caretPlaced = false;
  const lines: React.ReactNode[] = [];
  CODE_TOKENS.forEach((line, li) => {
    const parts: React.ReactNode[] = [];
    line.forEach((tok, ti) => {
      const [txt, cls] = tok;
      const take = Math.max(0, Math.min(txt.length, left));
      if (take > 0)
        parts.push(
          <span className={`tok-${cls}`} key={ti}>
            {txt.slice(0, take)}
          </span>
        );
      left -= txt.length;
    });
    let showCaret = false;
    if (!caretPlaced && motion !== "off" && (left <= 0 || (done && li === CODE_TOKENS.length - 1))) {
      showCaret = true;
      caretPlaced = true;
    }
    lines.push(
      <span className="ln" key={li}>
        {parts}
        {showCaret && <span className="caret" />}
        &nbsp;
      </span>
    );
    left -= 1; // newline
  });

  return (
    <div className="obj-card code-card" ref={cardRef}>
      <div className="code-head">
        <span className="dots">
          <i style={{ background: "#ff6f6f" }} />
          <i style={{ background: "#ffd24a" }} />
          <i style={{ background: "#5fcf95" }} />
        </span>
        <span className="fn">dev.tsx</span>
        <span className="caret-tag">{done ? "saved ✓" : "typing…"}</span>
      </div>
      <div className="code-body">{lines}</div>
      <div className="code-status">
        <span className="ok">✓ ready</span>
        <span>·</span>
        <span>localhost:3000</span>
        <span style={{ marginLeft: "auto" }}>next + tailwind</span>
      </div>
    </div>
  );
}
