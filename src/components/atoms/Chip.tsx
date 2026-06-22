import type { CSSProperties, ReactNode } from "react";

type ChipColor = "pink" | "lav" | "mint" | "butter" | "sky";

/** mono tech chip / tag — optional pastel fill */
export function Chip({
  color,
  className = "",
  style,
  children,
}: {
  color?: ChipColor;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <span className={`chip${color ? ` ${color}` : ""}${className ? ` ${className}` : ""}`} style={style}>
      {children}
    </span>
  );
}
