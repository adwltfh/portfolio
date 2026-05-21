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
    desc: "Developed an end-to-end recruitment platform consisting of two integrated portals: a recruiter/headhunter portal and an applicant portal. The platform was designed to support the hiring workflow from both perspectives, including job posting management, applicant data handling, and application submission processes.\n\nAs a Frontend Developer, I was responsible for implementing responsive and user-friendly interfaces, integrating REST APIs, managing application state, and collaborating closely with the backend team to ensure smooth system functionality. I also contributed to frontend architecture decisions and reusable component development to maintain scalability and consistency across the platform.\n\nThis project was particularly significant because it was my first professional experience using Vue.js and Nuxt.js. Despite being new to the ecosystem at the time, I was able to adapt quickly, learn the framework in a short period, and successfully deliver production-ready features. The experience strengthened my adaptability, problem-solving skills, and confidence in learning new technologies while working in a fast-paced development environment.",
    role: "Frontend Developer",
    stack: ["Nuxt.js", "TypeScript", "Pinia", "Axios", "Tailwind"],
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
    desc: "Cherry Apps is a comprehensive HRIS platform built to streamline and modernize internal people operations across multiple business processes.\n\nWhat initially started as a UI revamp project eventually evolved into a large-scale frontend migration from AngularJS to Nuxt.js. As part of the frontend team, I contributed to rebuilding and modernizing existing features, improving overall user experience, rebranding the product interface, and implementing new business requirements while ensuring compatibility with the existing system.\n\nOne of the main challenges of this project was the complexity of the business requirements and the extensive customizations that had already been applied to the legacy product over time. Because of this, the migration and adjustment process required careful analysis and gradual implementation to avoid disrupting existing workflows and functionalities.\n\nAdditionally, the project was developed without a complete predefined blueprint or detailed migration guideline, which required strong adaptability, problem-solving, and close collaboration within the team throughout the development process. This experience strengthened my ability to work in complex enterprise-level systems, handle long-term migration projects, and quickly adapt to evolving technical and business requirements.",
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
    desc: "Contributed to the development of a catering microsite application integrated with WhatsApp Business to simplify the ordering experience for users. The platform allowed users to place catering orders without requiring account registration or login by using WhatsApp-based authentication and token generation flows.\n\nThe application was designed as an extension of the main platform, focusing on providing a lightweight and seamless ordering experience. Catering recommendations were also personalized based on the user’s location, allowing the system to suggest nearby catering vendors instead of displaying random results.\n\nAs a Frontend Developer, I worked on implementing and maintaining responsive UI features using React.js, TypeScript, Tailwind CSS, and Axios. Since the project shared components and design systems with the main platform, I continued and customized existing reusable components to accelerate development and maintain consistency across applications.",
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
    desc: "At Elektronik Ilmu Indonesia, I worked on a digital education ecosystem consisting of two connected platforms: a landing page platform for product distribution and an online exam portal for UTBK and CPNS tryout simulations.\n\nThe landing page platform functioned as the main entry point for users to explore products, purchase tryout packages, and receive access tokens connected to the exam portal. Before this migration, the company still relied heavily on manual workflows using Google Forms for registrations and tryout management. After receiving angel investment funding, the system was transformed into a fully integrated web platform to improve scalability, operational efficiency, and branding.\n\nThe exam portal itself was designed to support large-scale online examinations with a focus on functionality, stability, and smooth user experience. The system included features such as timer-based exam sessions, listening/audio tests, image zoom for visual questions, token-based authentication, and dynamic question rendering.\n\nOne of the key technical aspects of the project was the integration with a Python-based weighted scoring system used for automated result calculations and performance assessments. Since the platform needed to handle simultaneous exam sessions and maintain reliability during high-traffic usage, much of the development focused on API integration, system stability, and seamless user flows rather than purely visual complexity.\n\nUsing React.js, TypeScript, Tailwind CSS, Material UI, and Axios, I contributed to building responsive interfaces and integrating the frontend with multiple backend services. The migration from manual processes into a dedicated digital platform significantly improved user engagement and operational scalability, resulting in a 30%+ increase in engagement compared to the previous system.",
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
