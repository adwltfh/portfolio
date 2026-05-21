"use client";

import { useState } from "react";
import Image from "next/image";
import { LIVE_PRODUCTS, LiveProduct } from "@/lib/liveProducts";

function ProductCard({ p }: { p: LiveProduct }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article
      key={p.key}
      className="group w-full bg-resume-paper border-2 border-resume-ink rounded-[16px] overflow-hidden hover:shadow-[0_4px_24px_0_rgba(58,42,85,0.10)] transition-transform duration-[250ms] hover:rotate-0 hover:scale-[1.03]"
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

      {/* Screenshot — tap target on mobile */}
      <div
        className="aspect-video overflow-hidden relative bg-resume-lilac-2 cursor-pointer"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close description" : "Read description"}
      >
        <span className="absolute inset-0 flex items-center justify-center font-caprasimo text-[36px] text-resume-ink opacity-20 select-none z-0">
          {p.title[0]}
        </span>
        <Image
          fill
          src={p.image}
          alt={`${p.title} screenshot`}
          className="object-cover z-[1]"
          sizes="(max-width: 640px) 100vw, 400px"
        />
        {/* Hint badge */}
        <span
          className={`absolute bottom-[8px] right-[8px] z-[3] font-dm-mono text-[9px] text-resume-ink bg-resume-paper/80 border border-resume-ink rounded-full px-[7px] py-[2px] transition-opacity duration-200 pointer-events-none
            ${isOpen ? "opacity-0" : "opacity-70 group-hover:opacity-0"}`}
        >
          ▾ details
        </span>
      </div>

      {/* Inline expandable desc */}
      <div
        className={`overflow-hidden ${isOpen ? "max-h-[280px]" : "max-h-0 group-hover:max-h-[280px]"}`}
        style={{ transition: "max-height 0.4s ease-out" }}
      >
        <div className="border-t-2 border-resume-ink px-[12px] pt-[8px] pb-[2px]">
          <p className="font-dm-mono text-[9px] text-resume-ink-soft uppercase tracking-widest mb-[6px] flex items-center justify-between">
            <span>about this project</span>
            <button
              onClick={() => setIsOpen(false)}
              className="normal-case tracking-normal text-[11px] leading-none hover:text-resume-ink transition-colors"
              aria-label="Collapse description"
            >
              ▴
            </button>
          </p>
          <div className="overflow-y-auto max-h-[210px] live-desc-scroll pb-[8px]">
            {p.desc.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="font-nunito text-[11px] leading-[1.65] text-resume-ink m-0 mb-[8px] last:mb-0"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="p-[12px_14px_14px] border-t-2 border-resume-ink">
        <h3 className="font-caprasimo text-[18px] leading-[1.1] mb-[3px]">
          {p.title}
        </h3>
        <p className="font-fraunces italic text-[12px] text-resume-ink-soft leading-[1.45] mb-[8px] m-0">
          {p.kicker}
        </p>
        <div className="flex flex-wrap gap-x-[10px] gap-y-[4px] mb-[10px]">
          {p.stack.map((tech) => (
            <span
              key={`${p.key}-${tech}`}
              className="font-dm-mono text-[10px] text-resume-ink pb-[1px]"
              style={{ borderBottom: `2px solid ${p.accent}` }}
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-dm-mono text-[9px] text-resume-ink-soft uppercase tracking-[0.1em] opacity-70 hover:opacity-100 transition-opacity duration-150 after:content-['_↗']"
        >
          visit site
        </a>
      </div>
    </article>
  );
}

export default function LiveProducts() {
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
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[18px] gap-y-[22px]">
        {LIVE_PRODUCTS.map((p) => (
          <ProductCard key={p.key} p={p} />
        ))}
      </div>
    </section>
  );
}
