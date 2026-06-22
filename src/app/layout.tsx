import type { Metadata, Viewport } from "next";
import { body, display, mono } from "./fonts";
import { data, site } from "@/lib/data";
import { ThemeProvider } from "@/lib/theme/ThemeProvider";
import { ThemeScript } from "@/lib/theme/ThemeScript";
import { JsonLd } from "@/components/atoms/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: data.person.name }],
  creator: data.person.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: site.shortTitle,
    description: site.ogDescription,
    url: site.url,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.shortTitle,
    description: site.twitterDescription,
  },
};

/** mobile browser-chrome colour, matched to the light/dark --paper surfaces */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf6f7" },
    { media: "(prefers-color-scheme: dark)", color: "#14101f" },
  ],
};

/** JSON-LD Person schema — mirrors the block in the prototype's index.html <head> */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: data.person.name,
  url: site.url,
  jobTitle: data.person.role,
  email: `mailto:${data.person.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "South Jakarta",
    addressCountry: "ID",
  },
  sameAs: [data.person.githubUrl, data.person.linkedinUrl],
  knowsAbout: [
    "React", "Next.js", "Vue.js", "Nuxt.js", "TypeScript",
    "Tailwind CSS", "Frontend Development", "Web Performance", "SEO",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-bg="soft"
      data-motion="full"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
        <JsonLd data={personSchema} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
