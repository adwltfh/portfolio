export interface LiveProduct {
  key: string;
  title: string;
  kicker: string;
  desc: string;
  url: string;
  image: string;
  stack: string[];
  accent: string; // tailwind bg class for card shadow / dot accent
}

export const LIVE_PRODUCTS: LiveProduct[] = [
  {
    key: "shoply",
    title: "Shoply",
    kicker: "Marketplace website — built from scratch.",
    desc: "Shoply is a personal marketplace project I built to sharpen and modernize my frontend engineering skills after spending the last two years primarily focused on Vue.js and Nuxt.js in professional environments.\n\nRather than creating a simple portfolio project, I intentionally chose to build a marketplace platform because it naturally contains more complex and realistic frontend challenges — such as product listing, filtering, state synchronization, cart management, asynchronous API handling, dynamic routing, and scalable component architecture. I wanted a project that could genuinely simulate production-level frontend development while giving me room to experiment with newer technologies and best practices in the React ecosystem.\n\nThe project was developed using Next.js, TypeScript, Tailwind CSS, Zustand, and TanStack Query, with a strong focus on improving state management, caching strategies, and frontend performance. I explored how to balance global state and server state efficiently while maintaining clean and reusable code structures across multiple pages and features.\n\nFor the UI/UX process, I used AI-generated design concepts as visual references, then translated and implemented the entire interface manually into responsive and fully functional frontend components. This project also became a way for me to continuously practice adaptability, self-learning, and staying up to date with modern frontend development trends outside of my day-to-day professional work.",
    url: "https://shoply-marketplace.vercel.app",
    image: "https://cdn.jsdelivr.net/gh/adwltfh/portfolio@assets/public/projects/shoply/1.png",
    stack: ["Next.js", "Tailwind", "React Query", "Zustand"],
    accent: "#ff8fb3",
  },
  // {
  //   key: "elmu",
  //   title: "Elmu.id",
  //   desc: "Public education platform — +30% engagement via UI optimization.",
  //   url: "https://elmu.id",
  //   image: "/live/elmu.png",
  //   stack: ["React.js", "Next.js", "TypeScript"],
  //   accent: "#82c2f0",
  // },
  // {
  //   key: "redkendi",
  //   title: "KendiXpress",
  //   desc: "Product microsite — full frontend stack, shipped to production.",
  //   url: "https://kendixpress.com",
  //   image: "/live/redkendi.png",
  //   stack: ["React.js", "TypeScript", "Tailwind"],
  //   accent: "#f5d96b",
  // },
];
