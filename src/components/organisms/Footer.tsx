/** site footer line */
export function Footer({ name }: { name: string }) {
  return (
    <footer className="foot">
      © {new Date().getFullYear()} {name} · built with Next.js + Tailwind · made with ♥ in Jakarta
    </footer>
  );
}
