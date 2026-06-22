/** one contact field cell — a link when `href` is given, otherwise a static cell */
export function ContactField({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <>
      <span className="k">{label}</span>
      <span className="v">{value}</span>
    </>
  );
  if (!href) return <div className="cfield">{inner}</div>;
  return (
    <a className="cfield" href={href} {...(external ? { target: "_blank", rel: "noopener" } : {})}>
      {inner}
    </a>
  );
}
