"use client";

import { useEffect, useRef } from "react";
import type { RefObject } from "react";

const FOCUSABLE = [
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

/**
 * Accessible dialog focus management:
 *  - on open, remembers the trigger and moves focus into `ref`
 *  - while `trapActive`, keeps Tab / Shift+Tab inside `ref`
 *  - on close, restores focus to the trigger
 *
 * `trapActive` and `lifecycleActive` are split so a nested overlay (e.g. the
 * lightbox over a project modal) can suspend the Tab trap without triggering an
 * early focus-restore: pass `lifecycleActive = open` and `trapActive = open && !nestedOpen`.
 * The host element must be focusable (`tabIndex={-1}`).
 */
export function useFocusTrap(
  ref: RefObject<HTMLElement | null>,
  trapActive: boolean,
  lifecycleActive: boolean = trapActive
) {
  const restoreRef = useRef<HTMLElement | null>(null);

  /* remember the trigger on open, return focus to it on close */
  useEffect(() => {
    if (!lifecycleActive) return;
    restoreRef.current = document.activeElement as HTMLElement | null;
    return () => {
      const el = restoreRef.current;
      restoreRef.current = null;
      if (el && document.contains(el)) el.focus();
    };
  }, [lifecycleActive]);

  /* initial focus + Tab trap while active */
  useEffect(() => {
    if (!trapActive) return;
    const node = ref.current;
    if (!node) return;

    const visible = () =>
      Array.from(node.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null
      );

    (visible()[0] ?? node).focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const els = visible();
      if (els.length === 0) {
        e.preventDefault();
        node.focus();
        return;
      }
      const first = els[0];
      const last = els[els.length - 1];
      const here = document.activeElement;
      if (e.shiftKey && (here === first || !node.contains(here))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (here === last || !node.contains(here))) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [trapActive, ref]);
}
