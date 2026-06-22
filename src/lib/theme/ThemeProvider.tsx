"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { resolveDark, THEME_STORAGE_KEY, type ThemeMode } from "./resolve";

interface ThemeContextValue {
  mode: ThemeMode;
  dark: boolean;
  mounted: boolean;
  setMode: (mode: ThemeMode) => void;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>("auto");
  const [mounted, setMounted] = useState(false);

  /* hydrate the stored mode after mount (server can't know it) */
  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
    if (stored === "auto" || stored === "light" || stored === "dark") setModeState(stored);
    setMounted(true);
  }, []);

  const dark = resolveDark(mode);

  /* apply the resolved theme to <html> + persist the mode */
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  }, [mode, dark, mounted]);

  /* on "auto", re-check the clock each minute so it flips across day/night */
  useEffect(() => {
    if (mode !== "auto") return;
    const id = setInterval(() => {
      document.documentElement.setAttribute("data-theme", resolveDark("auto") ? "dark" : "light");
    }, 60000);
    return () => clearInterval(id);
  }, [mode]);

  const setMode = useCallback((m: ThemeMode) => setModeState(m), []);
  /* nav toggle sets an explicit override opposite the current resolved theme */
  const toggle = useCallback(() => setModeState(resolveDark(mode) ? "light" : "dark"), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, dark, mounted, setMode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
