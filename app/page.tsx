import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Adawiyyah Latifah — Frontend Developer",
  description:
    "Resume of Adawiyyah Latifah, Frontend Developer with 3+ years experience in React, Next.js, Vue, and Nuxt. Choose a style to view.",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Adawiyyah Latifah",
  jobTitle: "Frontend Developer",
  email: "adawiyyahlatifah@gmail.com",
  telephone: "+62 821 7753 8199",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Palembang",
    addressCountry: "ID",
  },
  knowsAbout: [
    "React.js",
    "Next.js",
    "Vue.js",
    "Nuxt.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Frontend Development",
    "SEO",
    "Web Performance",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universitas Sriwijaya",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <main className="min-h-screen flex flex-col items-center justify-center p-10"
        style={{ background: "linear-gradient(135deg, #efe6ff 0%, #ffd5e5 50%, #c9e7ff 100%)" }}
      >
        <h1
          className="text-4xl md:text-5xl font-bold text-center mb-2"
          style={{ color: "#3a2a55", fontFamily: "var(--font-caprasimo, serif)" }}
        >
          Adawiyyah Latifah
        </h1>
        <p className="text-lg text-center mb-12" style={{ color: "#6b5a85" }}>
          Frontend Developer · React · Next · Vue · Nuxt
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
          <Link href="/cute" className="no-underline group">
            <div
              className="rounded-3xl p-8 border-2 cursor-pointer transition-transform duration-200 group-hover:-translate-y-1"
              style={{
                background: "#fdfaff",
                borderColor: "#3a2a55",
                boxShadow: "6px 6px 0 #b59cf0",
              }}
            >
              <div className="text-4xl mb-3">✿</div>
              <h2
                className="text-2xl mb-2"
                style={{
                  fontFamily: "var(--font-caprasimo, serif)",
                  color: "#3a2a55",
                }}
              >
                Cute Version
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#6b5a85" }}>
                Playful, pastel, and full of personality. Stickers, polaroids &
                scroll animations.
              </p>
            </div>
          </Link>

          <Link href="/professional" className="no-underline group">
            <div
              className="rounded-3xl p-8 border-2 cursor-pointer transition-transform duration-200 group-hover:-translate-y-1"
              style={{
                background: "#f6f2ea",
                borderColor: "#1a1a18",
                boxShadow: "6px 6px 0 #c9a96e",
              }}
            >
              <div className="text-4xl mb-3">◆</div>
              <h2
                className="text-2xl mb-2"
                style={{
                  fontFamily: "var(--font-newsreader, serif)",
                  color: "#1a1a18",
                }}
              >
                Professional Version
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#6b665c" }}>
                Editorial, clean, and print-ready. Typography-first design.
              </p>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}
