export interface Project {
  key: string;
  title: string;
  kicker: string;
  cover: number;
  glyph: string;
  desc: string;
  role: string;
  stack: string[];
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
  },
  cherry: {
    key: "cherry",
    title: "Cherry",
    kicker: "HRIS revamp · frontend dev",
    cover: 2,
    glyph: "Ch",
    desc: 'tl;dr — Cherry Apps is a comprehensive HRIS built to streamline and modernize people operations.\n\nWhat began as a UI revamp evolved into a full migration from AngularJS to Nuxt.js. Without a predefined blueprint, I led the frontend effort to rebuild features, improve UX, rebrand the product, and introduce new functional requirements.',
    role: "Frontend Developer",
    stack: ["Nuxt.js", "TypeScript", "Tailwind"],
  },
  redkendi: {
    key: "redkendi",
    title: "Redkendi",
    kicker: "microsite · frontend dev",
    cover: 3,
    glyph: "R",
    desc: "A product microsite shipped to production — owned the full frontend stack from architecture to deploy.",
    role: "Frontend Developer",
    stack: ["React.js", "AngularJS", "TypeScript", "Tailwind", "Material UI"],
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
  },
};

export const PROJECT_LIST = Object.values(PROJECTS);
