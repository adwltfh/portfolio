"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { LIVE_PRODUCTS } from "@/lib/liveProducts";

const PILL_COLORS = ["bg-resume-sky", "bg-resume-mint", "bg-resume-lilac-2"];

export default function LiveProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  // Update fade visibility on scroll
  const updateFades = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeftFade(el.scrollLeft > 8);
    setShowRightFade(el.scrollLeft + el.offsetWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    updateFades();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateFades);
    window.addEventListener("resize", updateFades);
    return () => {
      el.removeEventListener("scroll", updateFades);
      window.removeEventListener("resize", updateFades);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector("article");
    const cardW = (card?.offsetWidth ?? 278) + 18;
    scrollRef.current.scrollBy({
      left: dir === "right" ? cardW : -cardW,
      behavior: "smooth",
    });
    setTimeout(updateFades, 350); // allow scroll to finish
  };

  return (
    <section className="section mt-[72px] relative reveal">
      {/* Header */}
      <div className="flex items-center gap-[14px] mb-6">
        <h2 className="font-caprasimo text-[32px] leading-[1.1] m-0">
          live{" "}
          <span
            style={{
              background: "linear-gradient(transparent 65%, #c9f3d8 65%)",
              padding: "0 4px",
            }}
          >
            products
          </span>
        </h2>
        {LIVE_PRODUCTS.length > 1 && (
          <div className="ml-auto flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-9 h-9 rounded-full border-2 border-resume-ink bg-resume-paper font-caprasimo text-[16px] grid place-items-center opacity-35 hover:opacity-80 focus-visible:opacity-80 transition-opacity duration-200 shadow-[2px_2px_0_#b59cf0]"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-9 h-9 rounded-full border-2 border-resume-ink bg-resume-paper font-caprasimo text-[16px] grid place-items-center opacity-35 hover:opacity-80 focus-visible:opacity-80 transition-opacity duration-200 shadow-[2px_2px_0_#b59cf0]"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        )}
      </div>

      {/* Scroll container */}
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-[15]">
          {/* {showLeftFade && (
            <div
              className="absolute left-0 inset-y-0 w-10"
              style={{
                background: "linear-gradient(to right, #efe6ff, transparent)",
              }}
            />
          )} */}
          {showRightFade && (
            <div
              className="absolute right-0 inset-y-0 w-10"
              style={{
                background: "linear-gradient(to left, #efe6ff, transparent)",
              }}
            />
          )}
        </div>

        {/* Cards track */}
        <div
          ref={scrollRef}
          className="flex gap-[24px] overflow-x-auto snap-x snap-mandatory pb-3 live-scroll-track py-3 -my-3 pl-[4px] -ml-[4px]"
        >
          {LIVE_PRODUCTS.map((p) => (
            <article
              key={p.key}
              className="snap-start shrink-0 w-[260px] sm:w-[300px] bg-resume-paper border-2 border-resume-ink rounded-[16px] overflow-hidden hover:shadow-[0_4px_24px_0_rgba(58,42,85,0.10)] transition-transform duration-[250ms] hover:rotate-0 hover:scale-[1.03]"
              style={{ boxShadow: `4px 4px 0 ${p.accent}` }}
            >
              {/* Browser chrome bar */}
              <div className="flex items-center gap-[5px] px-[10px] py-[8px] border-b-2 border-resume-ink bg-resume-paper">
                <span className="w-[8px] h-[8px] rounded-full bg-resume-pink-deep border border-resume-ink shrink-0" />
                <span className="w-[8px] h-[8px] rounded-full bg-resume-butter-deep border border-resume-ink shrink-0" />
                <span className="w-[8px] h-[8px] rounded-full bg-resume-mint-deep border border-resume-ink shrink-0" />
                <span className="ml-2 flex-1 min-w-0 font-dm-mono text-[10px] text-resume-ink-soft bg-resume-paper border border-resume-ink rounded-full px-[8px] py-[2px] truncate">
                  {p.url.replace(/^https?:\/\//, "")}
                </span>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 ml-1 font-dm-mono text-[11px] text-resume-ink-soft hover:text-resume-ink transition-colors"
                  aria-label={`Visit ${p.title}`}
                >
                  ↗
                </a>
              </div>

              {/* Screenshot */}
              <div className="aspect-video overflow-hidden relative bg-resume-lilac-2">
                <span className="absolute inset-0 flex items-center justify-center font-caprasimo text-[36px] text-resume-ink opacity-20 select-none">
                  {p.title[0]}
                </span>
                <Image
                  fill
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 400px"
                />
              </div>

              {/* Card body */}
              <div className="p-[12px_14px_14px]">
                <h3 className="font-caprasimo text-[18px] leading-[1.1] mb-[3px]">
                  {p.title}
                </h3>
                <p className="font-fraunces italic text-[12px] text-resume-ink-soft leading-[1.45] mb-[8px] m-0">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-[4px]">
                  {p.stack.map((tech, ti) => (
                    <span
                      key={`${p.key}-${tech}`}
                      className={`font-dm-mono text-[10px] px-[8px] py-[3px] rounded-full border-[1.5px] border-resume-ink ${PILL_COLORS[ti % 3]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
