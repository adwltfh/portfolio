export interface Project {
  key: string;
  title: string;
  kicker: string;
  cover: number;
  glyph: string;
  desc: string;
  role: string;
  stack: string[];
  images?: string[];
  imageFit?: "cover" | "contain";
}

export const PROJECTS: Record<string, Project> = {
  carolina: {
    key: "carolina",
    title: "Carolina",
    kicker: "job portal · frontend dev",
    cover: 1,
    glyph: "C",
    desc: "Carolina is a job portal website.\n\nMy first project at PT Integra Solusi Mandiri, where I contributed to system architecture, database design, and recruitment flow planning. As the sole frontend developer in a small team, I built the interface using Nuxt.js, delivering the project in around six months.",
    role: "Frontend Developer",
    stack: ["Nuxt.js", "TypeScript", "Tailwind"],
    images: [
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/carolina/1.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/carolina/2.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/carolina/3.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/carolina/4.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/carolina/5.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/carolina/6.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/carolina/7.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/carolina/8.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/carolina/9.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/carolina/10.png",
    ],
  },
  cherry: {
    key: "cherry",
    title: "Cherry",
    kicker: "HRIS revamp · frontend dev",
    cover: 2,
    glyph: "Ch",
    desc: "tl;dr — Cherry Apps is a comprehensive HRIS built to streamline and modernize people operations.\n\nWhat began as a UI revamp evolved into a full migration from AngularJS to Nuxt.js. Without a predefined blueprint, I led the frontend effort to rebuild features, improve UX, rebrand the product, and introduce new functional requirements.",
    role: "Frontend Developer",
    stack: ["Nuxt.js", "TypeScript", "Tailwind", "Pinia"],
    images: [
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/cherry/1.jpeg",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/cherry/2.jpeg",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/cherry/3.jpeg",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/cherry/4.jpeg",
    ],
  },
  redkendi: {
    key: "redkendi",
    title: "KendiXpress",
    kicker: "microsite · frontend dev",
    cover: 3,
    glyph: "R",
    desc: "A product microsite shipped to production — owned the full frontend stack from architecture to deploy.",
    role: "Frontend Developer",
    stack: ["React.js", "AngularJS", "TypeScript", "Tailwind", "Material UI"],
    images: [
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/redkendi/1.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/redkendi/2.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/redkendi/3.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/redkendi/4.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/redkendi/5.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/redkendi/6.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/redkendi/7.png",
    ],
    imageFit: "contain",
  },
  exclolab: {
    key: "exclolab",
    title: "ExcloLab",
    kicker: "marketing site · frontend dev",
    cover: 4,
    glyph: "E",
    desc: "Marketing website built from scratch with a focus on speed, accessibility & SEO — Lighthouse 100 desktop / 90 mobile.",
    role: "Frontend Developer",
    stack: ["Next.js", "TypeScript", "Tailwind", "SEO"],
    images: [
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/exclolab/1.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/exclolab/2.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/exclolab/3.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/exclolab/4.png",
    ],
  },
  elmu: {
    key: "elmu",
    title: "Elmu.id",
    kicker: "edu platform · frontend dev",
    cover: 5,
    glyph: "El",
    desc: "Public education platform — drove +30% user engagement through targeted UI optimization and a custom in-site sales workflow.",
    role: "Frontend Developer",
    stack: ["React.js", "Next.js", "TypeScript", "Tailwind", "Material UI"],
    images: [
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/elmu/1.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/elmu/2.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/elmu/3.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/elmu/4.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/elmu/5.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/elmu/6.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/elmu/7.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/elmu/8.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/elmu/9.png",
    ],
  },
  kalla: {
    key: "kalla",
    title: "Kalla Friends",
    kicker: "back-office app · intern",
    cover: 6,
    glyph: "K",
    desc: "Back-office application for the Kalla Friends app — built reusable components for key project data; awarded Best Team across cohorts.",
    role: "Frontend Engineer Intern",
    stack: ["React.js", "Inertia.js"],
    images: [
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/kalla/1.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/kalla/2.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/kalla/3.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/kalla/4.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/kalla/5.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/kalla/6.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/kalla/7.png",
      "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/kalla/8.png",
    ],
  },
};

export const PROJECT_LIST = Object.values(PROJECTS);
