import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "default" | "primary" | "ghost";

function variantClass(variant: Variant) {
  return variant === "primary" ? "btn btn--primary" : variant === "ghost" ? "btn btn--ghost" : "btn";
}

type LinkButtonProps = {
  as?: "a";
  variant?: Variant;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type RealButtonProps = {
  as: "button";
  variant?: Variant;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

/** signature sticker button — hard offset shadow that grows on hover.
 *  Renders an <a> by default, or a real <button> when `as="button"`. */
export function Button(props: LinkButtonProps | RealButtonProps) {
  const { variant = "default", className = "", children } = props;
  const cls = `${variantClass(variant)}${className ? ` ${className}` : ""}`;

  if (props.as === "button") {
    const { as: _as, variant: _v, className: _c, children: _ch, ...rest } = props;
    return (
      <button className={cls} {...rest}>
        {children}
      </button>
    );
  }

  const { as: _as, variant: _v, className: _c, children: _ch, ...rest } = props;
  return (
    <a className={cls} {...rest}>
      {children}
    </a>
  );
}
