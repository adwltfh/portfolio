import FloatingStickers from "@/components/FloatingStickers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adawiyyah's ⋆˚࿔ resume | Frontend Developer",
  description:
    "Portfolio & resume of Adawiyyah Latifah — frontend developer crafting clean, performant interfaces with React and Next.js. Projects, experience, and contact info.",
  keywords: [
    "Adawiyyah Latifah",
    "frontend developer",
    "portfolio",
    "resume",
    "React",
    "Next.js",
    "web developer",
    "UI",
    "JavaScript",
    "TypeScript",
    "projects",
    "experience",
    "contact",
  ],
  alternates: {
    canonical: "https://adawiyyahlatifah.com/",
  },
  openGraph: {
    title: "Adawiyyah Latifah ⋆˚࿔ resume | Frontend Developer",
    description:
      "Portfolio & resume of Adawiyyah Latifah — frontend developer crafting clean, performant interfaces with React and Next.js. Projects, experience, and contact info.",
    url: "https://adawiyyahlatifah.com/",
    siteName: "Adawiyyah Latifah Resume",
    images: [
      {
        url: "https://adawiyyahlatifah.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adawiyyah Latifah Resume Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adawiyyah Latifah ⋆˚࿔ resume | Frontend Developer",
    description:
      "Portfolio & resume of Adawiyyah Latifah — frontend developer crafting clean, performant interfaces with React and Next.js. Projects, experience, and contact info.",
    site: "@adawiyyahlatifah",
    creator: "@adawiyyahlatifah",
    images: ["https://adawiyyahlatifah.com/og-image.png"],
  },
};
import ScrollReveal from "@/components/ScrollReveal";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <FloatingStickers />
      <ScrollReveal />
      <main className="max-w-[740px] mx-auto px-7 pt-[60px] pb-20 relative z-[2] sm:px-4 sm:pt-10 sm:pb-12">
        <Hero />
        <Projects />
        <Tools />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
