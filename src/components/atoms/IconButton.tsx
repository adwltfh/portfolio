import type { ButtonHTMLAttributes, ReactNode } from "react";

/** round bordered icon button (theme toggle, modal close, burger, …) */
export function IconButton({
  children,
  className = "",
  ...rest
}: { children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`icon-btn${className ? ` ${className}` : ""}`} {...rest}>
      {children}
    </button>
  );
}
