import type { Metadata } from "next";
import styles from "./page.module.css";
import { ParallaxBackground, RevealOnScroll } from "./ScrollEffects";

export const metadata: Metadata = {
  title: "Adawiyyah Latifah ⋆˚ Resume",
  description:
    "Frontend developer with 3+ years building enterprise web apps — React, Next.js, Vue, Nuxt. Lighthouse 100. Based in Palembang, Indonesia.",
  keywords: [
    "Adawiyyah Latifah",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Vue Developer",
    "Indonesia",
    "Palembang",
    "Portfolio",
    "Resume",
  ],
  openGraph: {
    title: "Adawiyyah Latifah ⋆˚ Resume",
    description:
      "Frontend developer with 3+ years building enterprise web apps — React, Next.js, Vue, Nuxt.",
    type: "profile",
  },
  alternates: {
    canonical: "/cute",
  },
};

const jsonLd = {
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
    "AngularJS",
    "Pinia",
    "Redux",
    "Laravel",
    "Python",
    "REST API",
    "MySQL",
    "Firebase",
    "AWS",
    "BigQuery",
    "Tableau",
    "SEO",
    "Web Performance",
  ],
  worksFor: {
    "@type": "Organization",
    name: "PT Integra Solusi Mandiri",
  },
};

const skills = [
  {
    label: "Frontend",
    color: "pink" as const,
    items: ["React.js", "Next.js", "Vue.js", "Nuxt.js", "Angular.js"],
  },
  {
    label: "Languages",
    color: "sky" as const,
    items: ["JavaScript", "TypeScript"],
  },
  {
    label: "Styling & State",
    color: "butter" as const,
    items: ["Tailwind CSS", "Redux", "Pinia"],
  },
  {
    label: "Backend & API",
    color: "mint" as const,
    items: ["REST API", "Laravel"],
  },
  {
    label: "Database & Cloud",
    color: "lilac" as const,
    items: ["MySQL", "Firebase", "AWS (S3, EC2, RDS)"],
  },
  {
    label: "Data & Analytics",
    color: "butter" as const,
    items: ["Python", "BigQuery", "Tableau", "Google Data Studio"],
  },
  {
    label: "Soft Skills",
    color: "pink" as const,
    items: [
      "Problem Solving",
      "Critical Thinking",
      "Attention to Detail",
      "Cross-functional Collaboration",
      "Mentoring",
    ],
  },
];

const skillBgMap = {
  pink: styles.skillP,
  sky: styles.skillS,
  butter: styles.skillB,
  mint: styles.skillM,
  lilac: styles.skillL,
};

export default function CutePage() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ParallaxBackground />
      <RevealOnScroll />

      {/* Floating background stickers */}
      <div
        className={`${styles.stickerBg} ${styles.star}`}
        data-speed="0.3"
        style={{ top: "8%", left: "4%" }}
      >
        ✦
      </div>
      <div
        className={`${styles.stickerBg} ${styles.star}`}
        data-speed="0.5"
        style={{
          top: "22%",
          right: "6%",
          color: "var(--pink-deep)",
          fontSize: "22px",
        }}
      >
        ✦
      </div>
      <div
        className={`${styles.stickerBg} ${styles.blob}`}
        data-speed="0.2"
        style={{
          top: "38%",
          left: "2%",
          width: "80px",
          height: "90px",
          background: "var(--pink)",
        }}
      ></div>
      <div
        className={`${styles.stickerBg} ${styles.ring}`}
        data-speed="0.4"
        style={{ top: "52%", right: "3%", width: "70px", height: "70px" }}
      ></div>
      <div
        className={`${styles.stickerBg} ${styles.blob}`}
        data-speed="0.25"
        style={{
          top: "70%",
          left: "6%",
          width: "60px",
          height: "70px",
          background: "var(--butter)",
        }}
      ></div>
      <div
        className={`${styles.stickerBg} ${styles.squiggle}`}
        data-speed="0.6"
        style={{ top: "64%", right: "5%" }}
      >
        ⌇
      </div>
      <div
        className={`${styles.stickerBg} ${styles.star}`}
        data-speed="0.35"
        style={{
          top: "86%",
          left: "5%",
          color: "var(--sky-deep)",
          fontSize: "26px",
        }}
      >
        ✦
      </div>
      <div
        className={`${styles.stickerBg} ${styles.blob}`}
        data-speed="0.4"
        style={{
          top: "90%",
          right: "4%",
          width: "60px",
          height: "60px",
          background: "var(--sky)",
        }}
      ></div>

      <div className={styles.wrap}>
        {/* HERO */}
        <header className={`${styles.hero} ${styles.reveal}`}>
          <span className={styles.tape}></span>
          <span className={`${styles.heroDeco} ${styles.heroDecoS1}`}>✿</span>
          <span className={`${styles.heroDeco} ${styles.heroDecoS2}`}>★</span>
          <span className={`${styles.heroDeco} ${styles.heroDecoS3}`}></span>
          <span className={`${styles.heroDeco} ${styles.heroDecoS4}`}></span>

          <div className={styles.greeting}>∗ ⋆ hello, world! ⋆ ∗</div>
          <h1 className={styles.heroH1}>
            i&apos;m <span className={styles.pop}>ada</span>
            <br />
            ꒰a frontend dev꒱
          </h1>
          <p className={styles.role}>
            turning ideas into pixels <span className={styles.heart}>♥</span>{" "}
            with a side of cute
          </p>

          <div className={styles.badges}>
            <span className={styles.badge}>React</span>
            <span className={styles.badge}>Next.js</span>
            <span className={styles.badge}>Vue</span>
            <span className={styles.badge}>Nuxt</span>
            <span className={styles.badge}>TypeScript</span>
          </div>
        </header>

        {/* CONTACT */}
        <div className={`${styles.contact} ${styles.reveal}`}>
          <span>+62 821 7753 8199</span>
          <span className={styles.contactDot}></span>
          <a href="mailto:adawiyyahlatifah@gmail.com">
            adawiyyahlatifah@gmail.com
          </a>
          <span className={styles.contactDot}></span>
          <a
            href="https://www.linkedin.com/in/adawiyyahlatifah"
            rel="noopener noreferrer"
            target="_blank"
          >
            linkedin
          </a>
          <span className={styles.contactDot}></span>
          <a
            href="https://www.linkedin.com/in/adawiyyahlatifah"
            rel="noopener noreferrer"
            target="_blank"
          >
            linkedin
          </a>
        </div>

        {/* PROJECTS */}
        <section
          className={`${styles.section} ${styles.reveal}`}
          aria-labelledby="projects-heading"
        >
          <div className={styles.secHead}>
            <span className={styles.secNum} aria-hidden="true">
              01
            </span>
            <h2 id="projects-heading" className={styles.secTitle}>
              things <span className={styles.secTitleUnderline}>i made</span>
            </h2>
            <span className={styles.secEmoji} aria-hidden="true">
              ✦
            </span>
          </div>

          <div className={styles.polaroids}>
            {[
              {
                glyph: "C",
                name: "Carolina",
                role: "job portal · frontend lead",
                stack: "Nuxt · REST · SQL",
                note: "end-to-end architecture & delivery",
              },
              {
                glyph: "Ch",
                name: "Cherry",
                role: "HRIS revamp · frontend lead",
                stack: "Nuxt · REST · SQL",
                note: "full frontend stack ownership",
              },
              {
                glyph: "R",
                name: "Redkendi",
                role: "microsite · frontend lead",
                stack: "AngularJS · REST",
                note: "production deployment",
              },
              {
                glyph: "E",
                name: "ExcloLab",
                role: "marketing site · frontend dev",
                stack: "Next.js",
                note: "Lighthouse 100/90 · full SEO",
              },
              {
                glyph: "El",
                name: "Elmu.id",
                role: "edu platform · frontend dev",
                stack: "React · Next",
                note: "+30% user engagement",
              },
              {
                glyph: "K",
                name: "Kalla Friends",
                role: "back-office · intern",
                stack: "React · Inertia.js",
                note: "★ best team award",
              },
            ].map((p) => (
              <article key={p.name} className={styles.polaroid}>
                <div className={styles.polImg}>
                  <span className={styles.polGlyph}>{p.glyph}</span>
                </div>
                <h3 className={styles.polName}>{p.name}</h3>
                <div className={styles.polRole}>{p.role}</div>
                <span className={styles.polStack}>{p.stack}</span>
                <p className={styles.polNote}>{p.note}</p>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section
          className={`${styles.section} ${styles.reveal}`}
          aria-labelledby="skills-heading"
        >
          <div className={styles.secHead}>
            <span className={styles.secNum} aria-hidden="true">
              02
            </span>
            <h2 id="skills-heading" className={styles.secTitle}>
              my <span className={styles.secTitleUnderline}>toolkit</span>
            </h2>
            <span className={styles.secEmoji} aria-hidden="true">
              ★
            </span>
          </div>

          <div className="flex flex-col gap-5">
            {skills.map((group) => (
              <div key={group.label}>
                <h3 className={styles.skillGroupTitle}>{group.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`${styles.skill} ${skillBgMap[group.color]}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          className={`${styles.section} ${styles.reveal}`}
          aria-labelledby="experience-heading"
        >
          <div className={styles.secHead}>
            <span className={styles.secNum} aria-hidden="true">
              03
            </span>
            <h2 id="experience-heading" className={styles.secTitle}>
              where{" "}
              <span className={styles.secTitleUnderline}>i&apos;ve been</span>
            </h2>
            <span className={styles.secEmoji} aria-hidden="true">
              ♡
            </span>
          </div>

          <div className={styles.timeline}>
            <article className={styles.job}>
              <div className={`${styles.jobCard} ${styles.cardShadowLilac}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className={styles.jobTitle}>Frontend Developer</h3>
                  <span className={styles.jobDate}>Dec 2023 — now</span>
                </div>
                <div className={styles.jobCo}>PT Integra Solusi Mandiri</div>
                <ul className={styles.jobList}>
                  <li>
                    shipped <b>3 enterprise web apps</b> end-to-end —{" "}
                    <i>Carolina</i> (job portal), <i>Cherry</i> (HRIS revamp),{" "}
                    <i>Redkendi</i> (microsite) — owning the full frontend stack
                    with Nuxt, AngularJS &amp; REST
                  </li>
                  <li>
                    designed app architecture, frontend structure &amp; business
                    flows so they stay scalable and maintainable
                  </li>
                  <li>
                    played <b>frontend lead</b> — bridging UI/UX, backend &amp;
                    BA teams, turning fuzzy requirements into real interfaces
                  </li>
                </ul>
              </div>
            </article>

            <article className={`${styles.job} ${styles.jobAlt1}`}>
              <div className={`${styles.jobCard} ${styles.cardShadowPink}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className={styles.jobTitle}>
                    Frontend Developer · ExcloLab
                  </h3>
                  <span className={styles.jobDate}>Jul — Oct 2025</span>
                </div>
                <div className={styles.jobCo}>
                  PT Pengendali Sistem Nusantara · project-based
                </div>
                <ul className={styles.jobList}>
                  <li>
                    tuned the site to <b>Lighthouse 100 desktop / 90 mobile</b>{" "}
                    — speedy, accessible &amp; SEO-friendly
                  </li>
                  <li>
                    built &amp; initialized the full project from scratch with{" "}
                    <b>Next.js</b>
                  </li>
                  <li>
                    turned UI/UX designs into responsive pages &amp; wired
                    RESTful APIs
                  </li>
                </ul>
              </div>
            </article>

            <article className={`${styles.job} ${styles.jobAlt2}`}>
              <div className={`${styles.jobCard} ${styles.cardShadowSky}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className={styles.jobTitle}>Frontend Developer</h3>
                  <span className={styles.jobDate}>Aug 2022 — Aug 2023</span>
                </div>
                <div className={styles.jobCo}>
                  Elektronik Ilmu Indonesia · Elmu.id
                </div>
                <ul className={styles.jobList}>
                  <li>
                    boosted <b>user engagement +30%</b> with UI &amp; perf wins
                    on a React/Next public site
                  </li>
                  <li>
                    built a custom in-site sales workflow to replace Google
                    Forms — better conversions, fewer clicks
                  </li>
                  <li>
                    worked cross-functionally on domain models &amp; business
                    processes
                  </li>
                </ul>
              </div>
            </article>
          </div>

          {/* LinkedIn CTA */}
          <div className={`${styles.linkedinCta} ${styles.reveal}`}>
            <p className={styles.linkedinNote}>
              want the full picture? my complete work history is on linkedin ✦
            </p>
            <a
              href="https://www.linkedin.com/in/adawiyyahlatifah"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedinBtn}
            >
              view full profile →
            </a>
          </div>
        </section>

        {/* FOOTER CTA */}
        <footer className={`${styles.footer} ${styles.reveal}`}>
          <h2 className={styles.footerH2}>
            let&apos;s build something <span className={styles.heart}>♥</span>{" "}
            cute
          </h2>
          <p className={styles.footerDesc}>
            open to frontend roles, freelance, &amp; pretty pixels
          </p>
          <a className={styles.cta} href="mailto:adawiyyahlatifah@gmail.com">
            say hi →
          </a>
          <div className={styles.signoff}>⋆ made with care by ada ⋆</div>
        </footer>
      </div>
    </div>
  );
}
