export interface LiveProduct {
  key: string;
  title: string;
  desc: string;
  url: string;
  image: string;
  stack: string[];
  accent: string; // tailwind bg class for card shadow / dot accent
}

export const LIVE_PRODUCTS: LiveProduct[] = [
  {
    key: "exclolab",
    title: "ExcloLab",
    desc: "Marketing website — Lighthouse 100 desktop, built from scratch.",
    url: "https://exclolab.com",
    image: "/live/exclolab.png",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    accent: "#ff8fb3",
  },
  {
    key: "elmu",
    title: "Elmu.id",
    desc: "Public education platform — +30% engagement via UI optimization.",
    url: "https://elmu.id",
    image: "/live/elmu.png",
    stack: ["React.js", "Next.js", "TypeScript"],
    accent: "#82c2f0",
  },
  {
    key: "redkendi",
    title: "KendiXpress",
    desc: "Product microsite — full frontend stack, shipped to production.",
    url: "https://kendixpress.com",
    image: "/live/redkendi.png",
    stack: ["React.js", "TypeScript", "Tailwind"],
    accent: "#f5d96b",
  },
];
