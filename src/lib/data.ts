import type { PortfolioData } from "./types";

/* Content for the portfolio — single source of truth.
   Ported verbatim from the design handoff (design_handoff_portfolio/design/data.js).
   Move to a CMS later if needed; the UI reads only from here. */
export const data: PortfolioData = {
  person: {
    name: "Adawiyyah Latifah",
    role: "Frontend Developer",
    tagline: "crafting clean, performant interfaces with care",
    location: "South Jakarta, Indonesia",
    email: "adawiyyahlatifah@gmail.com",
    github: "adwltfh",
    githubUrl: "https://github.com/adwltfh",
    linkedinUrl: "https://www.linkedin.com/",
    yearsExp: "3+",
    shipped: "9",
  },
  heroStack: ["React", "Next.js", "Vue", "Nuxt", "TypeScript"],
  marquee: [
    "React",
    "Next.js",
    "Vue.js",
    "Nuxt.js",
    "TypeScript",
    "Tailwind",
    "Pinia",
    "SEO",
    "Accessibility",
    "Performance",
  ],

  featured: [
    {
      id: "shoply",
      name: "Shoply",
      tag: "featured project",
      kind: "Marketplace website — built from scratch.",
      url: "shoply-marketplace.vercel.app",
      href: "https://shoply-marketplace.vercel.app",
      stack: ["Next.js", "Tailwind", "React Query", "Zustand"],
      accent: "#ff8fb3",
      images: [
        "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/shoply/1.png",
      ],
      role: "Frontend Developer · solo build",
      timeline: "2025 · ongoing",
      blurb:
        "A personal marketplace platform I built to push my frontend engineering past portfolio-toy territory — real product listing, filtering, cart & state sync, async API handling, dynamic routing and scalable component architecture, all simulating production-level work.",
      study: {
        problem:
          "I'd shipped plenty of client work, but I wanted a sandbox I fully owned — a storefront that behaves like production, not a portfolio toy. That meant solving the hard parts myself: server-rendered listings, fast filtering over a growing catalogue, a cart that stays in sync across every page, and an architecture that wouldn't buckle as features piled up.",
        approach: [
          "Built on Next.js with server-rendered, dynamically-routed product and category pages — shareable, SEO-friendly URLs out of the box.",
          "Modelled cart and UI state in Zustand and kept server data fresh with React Query: caching, background refetching and optimistic updates.",
          "Designed a small, composable component system — cards, filter rails, sheets — so new sections drop in without rewrites.",
          "Handled the unglamorous production details: loading and empty states, error boundaries, async edge cases and responsive layouts down to small phones.",
        ],
        outcome:
          "A marketplace that feels production-grade end to end — instant filtering, a cart that never loses its place, and clean Lighthouse scores. More than the screens, it became the proving ground that pushed my frontend engineering past portfolio-toy territory.",
        metrics: [
          { v: "100", k: "Lighthouse · performance" },
          { v: "40+", k: "reusable components" },
          { v: "0", k: "cumulative layout shift" },
          { v: "<1.2s", k: "time to interactive" },
        ],
      },
    },
  ],

  projects: [
    {
      id: "carolina",
      name: "Carolina",
      kind: "job portal · frontend dev",
      cover: 1,
      glyph: "C",
      role: "Frontend Developer",
      stack: ["Nuxt.js", "TypeScript", "Pinia", "Axios", "Tailwind"],
      about:
        "Developed an end-to-end recruitment platform consisting of two integrated portals: a recruiter/headhunter portal and an applicant portal. The platform was designed to support the hiring workflow from both perspectives, including job posting management, applicant data handling, and application submission processes.\n\nAs a Frontend Developer, I was responsible for implementing responsive and user-friendly interfaces, integrating REST APIs, managing application state, and collaborating closely with the backend team to ensure smooth system functionality. I also contributed to frontend architecture decisions and reusable component development to maintain scalability and consistency across the platform.\n\nThis project was particularly significant because it was my first professional experience using Vue.js and Nuxt.js. Despite being new to the ecosystem at the time, I was able to adapt quickly, learn the framework in a short period, and successfully deliver production-ready features. The experience strengthened my adaptability, problem-solving skills, and confidence in learning new technologies while working in a fast-paced development environment.",
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
    {
      id: "cherry",
      name: "Cherry",
      kind: "HRIS revamp · frontend dev",
      cover: 2,
      glyph: "Ch",
      role: "Frontend Developer",
      stack: ["Nuxt.js", "TypeScript", "Tailwind", "Pinia"],
      about:
        "Cherry Apps is a comprehensive HRIS platform built to streamline and modernize internal people operations across multiple business processes.\n\nWhat initially started as a UI revamp project eventually evolved into a large-scale frontend migration from AngularJS to Nuxt.js. As part of the frontend team, I contributed to rebuilding and modernizing existing features, improving overall user experience, rebranding the product interface, and implementing new business requirements while ensuring compatibility with the existing system.\n\nOne of the main challenges of this project was the complexity of the business requirements and the extensive customizations that had already been applied to the legacy product over time. Because of this, the migration and adjustment process required careful analysis and gradual implementation to avoid disrupting existing workflows and functionalities.\n\nAdditionally, the project was developed without a complete predefined blueprint or detailed migration guideline, which required strong adaptability, problem-solving, and close collaboration within the team throughout the development process. This experience strengthened my ability to work in complex enterprise-level systems, handle long-term migration projects, and quickly adapt to evolving technical and business requirements.",
      images: [
        "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/cherry/1.jpeg",
        "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/cherry/2.jpeg",
        "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/cherry/3.jpeg",
        "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/cherry/4.jpeg",
      ],
    },
    {
      id: "redkendi",
      name: "KendiXpress",
      kind: "microsite · frontend dev",
      cover: 3,
      glyph: "R",
      role: "Frontend Developer",
      stack: ["React.js", "AngularJS", "TypeScript", "Tailwind", "Material UI"],
      about:
        "Contributed to the development of a catering microsite application integrated with WhatsApp Business to simplify the ordering experience for users. The platform allowed users to place catering orders without requiring account registration or login by using WhatsApp-based authentication and token generation flows.\n\nThe application was designed as an extension of the main platform, focusing on providing a lightweight and seamless ordering experience. Catering recommendations were also personalized based on the user’s location, allowing the system to suggest nearby catering vendors instead of displaying random results.\n\nAs a Frontend Developer, I worked on implementing and maintaining responsive UI features using React.js, TypeScript, Tailwind CSS, and Axios. Since the project shared components and design systems with the main platform, I continued and customized existing reusable components to accelerate development and maintain consistency across applications.",
      imageFit: "contain",
      images: [
        "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/redkendi/1.png",
        "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/redkendi/2.png",
        "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/redkendi/3.png",
        "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/redkendi/4.png",
        "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/redkendi/5.png",
        "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/redkendi/6.png",
        "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/redkendi/7.png",
      ],
    },
    {
      id: "exclolab",
      name: "ExcloLab",
      kind: "marketing site · frontend dev",
      cover: 4,
      glyph: "E",
      role: "Frontend Developer",
      stack: ["Next.js", "TypeScript", "Tailwind", "SEO"],
      about:
        "Marketing website built from scratch with a focus on speed, accessibility & SEO — Lighthouse 100 desktop / 90 mobile.",
      images: [
        "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/exclolab/1.png",
        "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/exclolab/2.png",
        "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/exclolab/3.png",
        "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/exclolab/4.png",
      ],
    },
    {
      id: "elmu",
      name: "Elmu.id",
      kind: "edu platform · frontend dev",
      cover: 5,
      glyph: "El",
      role: "Frontend Developer",
      stack: ["React.js", "Next.js", "TypeScript", "Tailwind", "Material UI"],
      about:
        "At Elektronik Ilmu Indonesia, I worked on a digital education ecosystem consisting of two connected platforms: a landing page platform for product distribution and an online exam portal for UTBK and CPNS tryout simulations.\n\nThe landing page platform functioned as the main entry point for users to explore products, purchase tryout packages, and receive access tokens connected to the exam portal. Before this migration, the company still relied heavily on manual workflows using Google Forms for registrations and tryout management. After receiving angel investment funding, the system was transformed into a fully integrated web platform to improve scalability, operational efficiency, and branding.\n\nThe exam portal itself was designed to support large-scale online examinations with a focus on functionality, stability, and smooth user experience. The system included features such as timer-based exam sessions, listening/audio tests, image zoom for visual questions, token-based authentication, and dynamic question rendering.\n\nOne of the key technical aspects of the project was the integration with a Python-based weighted scoring system used for automated result calculations and performance assessments. Since the platform needed to handle simultaneous exam sessions and maintain reliability during high-traffic usage, much of the development focused on API integration, system stability, and seamless user flows rather than purely visual complexity.\n\nUsing React.js, TypeScript, Tailwind CSS, Material UI, and Axios, I contributed to building responsive interfaces and integrating the frontend with multiple backend services. The migration from manual processes into a dedicated digital platform significantly improved user engagement and operational scalability, resulting in a 30%+ increase in engagement compared to the previous system.",
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
    {
      id: "kalla",
      name: "Kalla Friends",
      kind: "back-office app · intern",
      cover: 6,
      glyph: "K",
      role: "Frontend Engineer Intern",
      stack: ["React.js", "Inertia.js"],
      about:
        "Back-office application for the Kalla Friends app — built reusable components for key project data; awarded Best Team across cohorts.",
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
  ],

  skills: {
    daily: [
      {
        sym: "teenyicons:react-outline",
        nm: "React",
        c: "c-sky",
        cat: "frameworks",
      },
      {
        sym: "teenyicons:nextjs-outline",
        nm: "Next.js",
        c: "c-ink",
        cat: "frameworks",
      },
      { sym: "mdi:vuejs", nm: "Vue.js", c: "c-mint", cat: "frameworks" },
      {
        sym: "teenyicons:nuxtjs-outline",
        nm: "Nuxt.js",
        c: "c-mint",
        cat: "frameworks",
      },
      { sym: "mdi:angularjs", nm: "AngularJS", c: "c-pink", cat: "frameworks" },
      {
        sym: "devicon-plain:typescript",
        nm: "TypeScript",
        c: "c-sky",
        cat: "languages",
      },
      {
        sym: "teenyicons:javascript-outline",
        nm: "JavaScript",
        c: "c-butter",
        cat: "languages",
      },
      {
        sym: "teenyicons:tailwind-solid",
        nm: "Tailwind CSS",
        c: "c-sky",
        cat: "styling",
      },
      { sym: "simple-icons:pinia", nm: "Pinia", c: "c-butter", cat: "styling" },
      { sym: "simple-icons:redux", nm: "Redux", c: "c-lav", cat: "styling" },
    ],
    support: [
      "Laravel",
      "Python",
      "REST API",
      "Jest",
      "PlayWright",
      "WordPress",
      "MySQL",
      "Firebase",
      "AWS · S3 / EC2 / RDS",
    ],
  },

  experience: [
    {
      title: "Frontend Developer",
      org: "PT Integra Solusi Mandiri",
      when: "DEC 2023 — NOW",
      dot: "var(--butter)",
      points: [
        "Delivered 3 enterprise web apps end-to-end — Carolina (job portal), Cherry (HRIS revamp) and KendiXpress (microsite) — owning the frontend stack across Nuxt, AngularJS, REST & SQL.",
        "Defined application architecture, frontend structure & business flows for each product to keep them scalable and maintainable.",
        "Acted as frontend lead, partnering with UI/UX, backend & BA teams to turn complex requirements into production-ready interfaces.",
        "Kept performance & responsive design tight across every release.",
      ],
    },
    {
      title: "Frontend Developer · ExcloLab",
      org: "PT Pengendali Sistem Nusantara · project-based",
      when: "JUL — OCT 2025",
      dot: "var(--pink)",
      points: [
        "Initialised the full project from scratch with Next.js.",
        "Implemented a comprehensive SEO strategy covering technical SEO, metadata & search visibility.",
        "Tuned the site to Lighthouse 100 desktop / 90 mobile — strong scores for speed, accessibility & SEO.",
        "Turned UI/UX designs into responsive pages and integrated RESTful APIs for dynamic content.",
      ],
    },
    {
      title: "Frontend Developer",
      org: "Elektronik Ilmu Indonesia · Elmu.id",
      when: "AUG 2022 — AUG 2023",
      dot: "var(--sky)",
      points: [
        "Improved user engagement by 30%+ through targeted UI optimisation and frontend performance work on a React / Next public site.",
        "Integrated a custom in-site sales workflow to replace a manual Google-Forms process — better conversions, fewer steps.",
        "Iterated on user testing & feedback for steady, detail-focused improvements.",
        "Collaborated cross-functionally to refine domain models & business processes.",
      ],
    },
  ],
};

/** site-wide constants pulled out of index.html <head> for SEO reuse */
export const site = {
  url: "https://cikin.dev",
  title: "Adawiyyah Latifah — Frontend Developer | React, Next.js & Vue",
  shortTitle: "Adawiyyah Latifah — Frontend Developer",
  description:
    "Adawiyyah Latifah is a frontend developer based in Jakarta crafting clean, performant, accessible interfaces with React, Next.js, Vue & TypeScript. Open to roles, freelance & collaborations.",
  ogDescription:
    "Crafting clean, performant, accessible interfaces with React, Next.js, Vue & TypeScript. Open to roles, freelance & collaborations.",
  twitterDescription:
    "Frontend developer crafting clean, performant interfaces with React, Next.js & Vue.",
  keywords: [
    "frontend developer",
    "React",
    "Next.js",
    "Vue",
    "Nuxt",
    "TypeScript",
    "Tailwind",
    "Jakarta",
    "web developer portfolio",
  ],
};
