export interface Project {
  key: string
  title: string
  kicker: string
  cover: number
  glyph: string
  desc: string
  role: string
  stack: string[]
}

export const PROJECTS: Record<string, Project> = {
  carolina: {
    key: 'carolina',
    title: 'Carolina',
    kicker: 'job portal · frontend lead',
    cover: 1,
    glyph: 'C',
    desc: 'A web-based job portal connecting candidates with companies — built end-to-end with a focus on clean architecture and smooth UX.',
    role: 'Frontend Lead',
    stack: ['Nuxt.js', 'JavaScript', 'REST API', 'SQL', 'Tailwind'],
  },
  cherry: {
    key: 'cherry',
    title: 'Cherry',
    kicker: 'HRIS revamp · frontend lead',
    cover: 2,
    glyph: 'Ch',
    desc: 'Full revamp of an internal HRIS platform — modernized the frontend stack while preserving complex business logic.',
    role: 'Frontend Lead',
    stack: ['AngularJS', 'JavaScript', 'REST API', 'SQL'],
  },
  redkendi: {
    key: 'redkendi',
    title: 'Redkendi',
    kicker: 'microsite · frontend lead',
    cover: 3,
    glyph: 'R',
    desc: 'A product microsite shipped to production — owned the full frontend stack from architecture to deploy.',
    role: 'Frontend Lead',
    stack: ['Nuxt.js', 'JavaScript', 'REST API', 'Tailwind'],
  },
  exclolab: {
    key: 'exclolab',
    title: 'ExcloLab',
    kicker: 'marketing site · frontend dev',
    cover: 4,
    glyph: 'E',
    desc: 'Marketing website built from scratch with a focus on speed, accessibility & SEO — Lighthouse 100 desktop / 90 mobile.',
    role: 'Frontend Developer',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'REST API', 'SEO'],
  },
  elmu: {
    key: 'elmu',
    title: 'Elmu.id',
    kicker: 'edu platform · frontend dev',
    cover: 5,
    glyph: 'El',
    desc: 'Public education platform — drove +30% user engagement through targeted UI optimization and a custom in-site sales workflow.',
    role: 'Frontend Developer',
    stack: ['React.js', 'Next.js', 'JavaScript', 'REST API'],
  },
  kalla: {
    key: 'kalla',
    title: 'Kalla Friends',
    kicker: 'back-office app · intern',
    cover: 6,
    glyph: 'K',
    desc: 'Back-office application for the Kalla Friends app — built reusable components for key project data; awarded Best Team across cohorts.',
    role: 'Frontend Engineer Intern',
    stack: ['React.js', 'Inertia.js', 'Laravel'],
  },
}

export const PROJECT_LIST = Object.values(PROJECTS)
