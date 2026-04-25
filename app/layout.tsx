import type { Metadata } from "next";
import {
  Caprasimo,
  Fraunces,
  Nunito,
  DM_Mono,
  Newsreader,
  Inter_Tight,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const caprasimo = Caprasimo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-caprasimo",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-newsreader",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Adawiyyah Latifah — Frontend Developer",
    template: "%s | Adawiyyah Latifah",
  },
  description:
    "Frontend Developer with 3+ years building enterprise web apps with React, Next.js, Vue, and Nuxt. Based in Palembang, ID.",
  keywords: [
    "Adawiyyah Latifah",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "Vue.js",
    "Nuxt.js",
    "TypeScript",
    "Indonesia",
    "Palembang",
    "Resume",
  ],
  authors: [{ name: "Adawiyyah Latifah", url: "mailto:adawiyyahlatifah@gmail.com" }],
  creator: "Adawiyyah Latifah",
  openGraph: {
    type: "profile",
    locale: "en_US",
    title: "Adawiyyah Latifah — Frontend Developer",
    description:
      "Frontend Developer with 3+ years building enterprise web apps with React, Next.js, Vue, and Nuxt.",
    firstName: "Adawiyyah",
    lastName: "Latifah",
    username: "adawiyyahlatifah",
  },
  twitter: {
    card: "summary",
    title: "Adawiyyah Latifah — Frontend Developer",
    description:
      "Frontend Developer with 3+ years building enterprise web apps with React, Next.js, Vue, and Nuxt.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={[
        caprasimo.variable,
        fraunces.variable,
        nunito.variable,
        dmMono.variable,
        newsreader.variable,
        interTight.variable,
        jetbrainsMono.variable,
      ].join(" ")}
    >
      <body>{children}</body>
    </html>
  );
}
