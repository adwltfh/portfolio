"use client";

import { useEffect, useState } from "react";
import { IconButton } from "../atoms/IconButton";
import { Button } from "../atoms/Button";
import { useIsScrolled } from "@/lib/hooks/useIsScrolled";
import { useScrollSpy } from "@/lib/hooks/useScrollSpy";
import { useTheme } from "@/lib/theme/ThemeProvider";

const LINKS: [string, string][] = [
  ["work", "Work"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["contact", "Contact"],
];

/** stable id list so the scroll-spy observer isn't re-created on every render */
const SECTION_IDS = LINKS.map(([id]) => id);

/** fixed pill nav: scroll-spy active state, glassier once scrolled, theme toggle,
 *  persistent "hire me" CTA, and a mobile burger dropdown. */
export function Nav() {
  const active = useScrollSpy(SECTION_IDS);
  const scrolled = useIsScrolled();
  const { dark, mounted, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  /* close the mobile menu on Esc or when resizing up to desktop */
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    const onResize = () => window.innerWidth > 880 && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  return (
    <div className={`nav-wrap${scrolled ? " is-scrolled" : ""}${menuOpen ? " menu-open" : ""}`}>
      <nav className="nav" aria-label="Primary">
        <a className="nav__brand" href="#top" onClick={() => setMenuOpen(false)}>
          adawiyyah<b>.</b>
        </a>
        <div className="nav__links">
          {LINKS.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={`nav__link${active === id ? " active" : ""}`}>
              {label}
            </a>
          ))}
        </div>
        <div className="nav__tools">
          <IconButton onClick={toggle} aria-label="Toggle dark mode" title="Toggle theme">
            {mounted && dark ? "☀" : "☾"}
          </IconButton>
          <Button variant="primary" className="nav__cta" href="#contact">
            hire me
          </Button>
          <IconButton
            className="nav__burger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            title="Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </IconButton>
        </div>
      </nav>

      {/* mobile dropdown */}
      <div className={`nav-mobile${menuOpen ? " open" : ""}`} role="menu" aria-hidden={!menuOpen}>
        {LINKS.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            role="menuitem"
            className={`nav-mobile__link${active === id ? " active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            <span>{label}</span>
            <span aria-hidden="true">→</span>
          </a>
        ))}
      </div>
    </div>
  );
}
