/** Theme mode: "auto" follows the clock, "light"/"dark" are explicit overrides. */
export type ThemeMode = "auto" | "light" | "dark";

export const THEME_STORAGE_KEY = "theme-mode";

/** dark at night (7pm–7am), light through the day */
export function isNightNow(): boolean {
  const h = new Date().getHours();
  return h >= 19 || h < 7;
}

export function resolveDark(mode: ThemeMode): boolean {
  return mode === "dark" ? true : mode === "light" ? false : isNightNow();
}
