import type { ReactNode } from "react";
import { Spark } from "./Spark";

/** mono uppercase eyebrow label, optionally prefixed with a sparkle */
export function Eyebrow({
  children,
  spark = true,
  className = "",
}: {
  children: ReactNode;
  spark?: boolean;
  className?: string;
}) {
  return (
    <span className={`eyebrow${className ? ` ${className}` : ""}`}>
      {spark && <Spark className="spark" style={{ width: 13, height: 13 }} />}
      {children}
    </span>
  );
}
