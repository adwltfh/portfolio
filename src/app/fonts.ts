import { Gloock, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";

/* chunky retro serif — headings */
export const display = Gloock({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-display",
});

/* body */
export const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-body",
});

/* mono — eyebrow labels + tech chips */
export const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-mono",
});
