"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { useScrollLock } from "@/lib/hooks/useScrollLock";
import { useFocusTrap } from "@/lib/hooks/useFocusTrap";

/**
 * Scrim + dialog shell. Stays mounted so the fade transition runs both ways;
 * content renders only while open. Closes on scrim click and Esc (unless an
 * overlay above it, e.g. the lightbox, asks to suspend Esc via `disableEsc`).
 * Focus is trapped inside and restored to the trigger on close; the Tab trap is
 * suspended while a nested overlay (disableEsc) is up so it can manage its own.
 */
export function Modal({
  open,
  onClose,
  className = "",
  disableEsc = false,
  label,
  children,
}: {
  open: boolean;
  onClose: () => void;
  className?: string;
  disableEsc?: boolean;
  /** accessible name for the dialog, announced by screen readers */
  label?: string;
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  useScrollLock(open);
  useFocusTrap(dialogRef, open && !disableEsc, open);

  useEffect(() => {
    if (!open || disableEsc) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, disableEsc, onClose]);

  return (
    <div className={`modal-scrim${open ? " open" : ""}`} onClick={onClose}>
      {open && (
        <div
          ref={dialogRef}
          className={`modal${className ? ` ${className}` : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label={label}
          tabIndex={-1}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      )}
    </div>
  );
}
