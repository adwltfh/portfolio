import type { Metadata } from "next";
import Link from "next/link";
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
    "React.js", "Next.js", "Vue.js", "Nuxt.js", "TypeScript",
    "JavaScript", "Tailwind CSS", "AngularJS", "Pinia", "Redux",
    "Laravel", "Python", "REST API", "MySQL", "Firebase",
    "AWS", "BigQuery", "Tableau", "SEO", "Web Performance",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universitas Sriwijaya",
  },
  worksFor: {
    "@type": "Organization",
    name: "PT Integra Solusi Mandiri",
  },
};

export default function CutePage() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Client-side scroll effects */}
      <ParallaxBackground />
      <RevealOnScroll />

      {/* Back navigation */}
      <Link href="/" className={styles.backLink}>← back</Link>

      {/* Floating background stickers */}
      <div className={`${styles.stickerBg} ${styles.star}`} data-speed="0.3" style={{ top: "8%", left: "4%" }}>✦</div>
      <div className={`${styles.stickerBg} ${styles.star}`} data-speed="0.5" style={{ top: "22%", right: "6%", color: "var(--pink-deep)", fontSize: "22px" }}>✦</div>
      <div className={`${styles.stickerBg} ${styles.blob}`} data-speed="0.2" style={{ top: "38%", left: "2%", width: "80px", height: "90px", background: "var(--pink)" }}></div>
      <div className={`${styles.stickerBg} ${styles.ring}`} data-speed="0.4" style={{ top: "52%", right: "3%", width: "70px", height: "70px" }}></div>
      <div className={`${styles.stickerBg} ${styles.blob}`} data-speed="0.25" style={{ top: "70%", left: "6%", width: "60px", height: "70px", background: "var(--butter)" }}></div>
      <div className={`${styles.stickerBg} ${styles.squiggle}`} data-speed="0.6" style={{ top: "64%", right: "5%" }}>⌇</div>
      <div className={`${styles.stickerBg} ${styles.star}`} data-speed="0.35" style={{ top: "86%", left: "5%", color: "var(--sky-deep)", fontSize: "26px" }}>✦</div>
      <div className={`${styles.stickerBg} ${styles.blob}`} data-speed="0.4" style={{ top: "90%", right: "4%", width: "60px", height: "60px", background: "var(--sky)" }}></div>

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
            <br />꒰a frontend dev꒱
          </h1>
          <p className={styles.role}>
            turning ideas into pixels <span className={styles.heart}>♥</span> with a side of cute
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
          <a href="mailto:adawiyyahlatifah@gmail.com">adawiyyahlatifah@gmail.com</a>
          <span className={styles.contactDot}></span>
          <a href="https://www.linkedin.com/in/adawiyyahlatifah" rel="noopener noreferrer" target="_blank">linkedin</a>
          <span className={styles.contactDot}></span>
          <a href="#" rel="noopener noreferrer">portfolio</a>
        </div>

        {/* ABOUT */}
        <section className={`${styles.section} ${styles.reveal}`} aria-labelledby="about-heading">
          <div className={styles.secHead}>
            <span className={styles.secNum} aria-hidden="true">01</span>
            <h2 id="about-heading" className={styles.secTitle}>
              about <span className={styles.secTitleUnderline}>me</span>
            </h2>
            <span className={styles.secEmoji} aria-hidden="true">✿</span>
          </div>
          <div className={styles.about}>
            hi! i&apos;m ada — a frontend developer with <b>3+ years</b> of experience making enterprise web apps
            that are fast, friendly, and (hopefully) a little delightful. i love living in <b>React</b>, <b>Next</b>,{" "}
            <b>Vue</b> &amp; <b>Nuxt</b>, taking products from architecture all the way to production. extras include
            data analytics &amp; mentoring <span className={styles.heart}>♥</span>
            <div className={styles.aboutStats}>
              <div>
                <div className={styles.statN}>3+</div>
                <div className={styles.statL}>years building</div>
              </div>
              <div>
                <div className={styles.statN}>6</div>
                <div className={styles.statL}>products shipped</div>
              </div>
              <div>
                <div className={styles.statN}>+30%</div>
                <div className={styles.statL}>user engagement</div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className={`${styles.section} ${styles.reveal}`} aria-labelledby="skills-heading">
          <div className={styles.secHead}>
            <span className={styles.secNum} aria-hidden="true">02</span>
            <h2 id="skills-heading" className={styles.secTitle}>
              my <span className={styles.secTitleUnderline}>toolkit</span>
            </h2>
            <span className={styles.secEmoji} aria-hidden="true">★</span>
          </div>

          <div className={styles.skillGroup}>
            <h3 className={styles.skillGroupTitle}>everyday faves</h3>
            <div className={styles.skillCloud}>
              <span className={`${styles.skill} ${styles.skillInk}`}>React.js</span>
              <span className={`${styles.skill} ${styles.skillP}`}>Next.js</span>
              <span className={`${styles.skill} ${styles.skillB}`}>Vue.js</span>
              <span className={`${styles.skill} ${styles.skillS}`}>Nuxt.js</span>
              <span className={`${styles.skill} ${styles.skillM}`}>TypeScript</span>
              <span className={`${styles.skill} ${styles.skillL}`}>JavaScript</span>
              <span className={`${styles.skill} ${styles.skillP}`}>Tailwind</span>
              <span className={`${styles.skill} ${styles.skillB}`}>Pinia</span>
              <span className={`${styles.skill} ${styles.skillS}`}>Redux</span>
              <span className={styles.skill}>AngularJS</span>
              <span className={styles.skill}>Laravel</span>
            </div>
          </div>

          <div className={styles.skillGroup}>
            <h3 className={styles.skillGroupTitle}>also in the bag</h3>
            <div className={styles.skillCloud}>
              <span className={`${styles.skill} ${styles.skillM}`}>Python</span>
              <span className={`${styles.skill} ${styles.skillL}`}>REST API</span>
              <span className={`${styles.skill} ${styles.skillB}`}>MySQL</span>
              <span className={`${styles.skill} ${styles.skillP}`}>Firebase</span>
              <span className={`${styles.skill} ${styles.skillS}`}>AWS · S3 / EC2 / RDS</span>
              <span className={`${styles.skill} ${styles.skillM}`}>BigQuery</span>
              <span className={`${styles.skill} ${styles.skillB}`}>Tableau</span>
              <span className={`${styles.skill} ${styles.skillP}`}>Data Studio</span>
            </div>
          </div>

          <div className={styles.skillGroup}>
            <h3 className={styles.skillGroupTitle}>vibes i bring</h3>
            <div className={styles.skillCloud}>
              <span className={`${styles.skill} ${styles.skillP}`}>data brain</span>
              <span className={`${styles.skill} ${styles.skillB}`}>critical thinking</span>
              <span className={`${styles.skill} ${styles.skillS}`}>problem solving</span>
              <span className={`${styles.skill} ${styles.skillM}`}>detail-obsessed</span>
              <span className={`${styles.skill} ${styles.skillL}`}>team player</span>
              <span className={`${styles.skill} ${styles.skillP}`}>mentoring</span>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className={`${styles.section} ${styles.reveal}`} aria-labelledby="experience-heading">
          <div className={styles.secHead}>
            <span className={styles.secNum} aria-hidden="true">03</span>
            <h2 id="experience-heading" className={styles.secTitle}>
              where <span className={styles.secTitleUnderline}>i&apos;ve been</span>
            </h2>
            <span className={styles.secEmoji} aria-hidden="true">♡</span>
          </div>

          <div className={styles.timeline}>
            <article className={styles.job}>
              <div className={styles.jobCard}>
                <div className={styles.jobMeta}>
                  <h3 className={styles.jobTitle}>Frontend Developer</h3>
                  <span className={styles.jobDate}>Dec 2023 — now</span>
                </div>
                <div className={styles.jobCo}>PT Integra Solusi Mandiri</div>
                <ul className={styles.jobList}>
                  <li>shipped <b>3 enterprise web apps</b> end-to-end — <i>Carolina</i> (job portal), <i>Cherry</i> (HRIS revamp), <i>Redkendi</i> (microsite) — owning the full frontend stack with Nuxt, AngularJS, REST &amp; SQL</li>
                  <li>designed app architecture, frontend structure &amp; business flows for each product so they stay scalable and maintainable</li>
                  <li>played <b>frontend lead</b> — bridging UI/UX, backend &amp; BA teams, turning fuzzy requirements into real interfaces</li>
                  <li>kept performance &amp; responsive design tight across every project</li>
                </ul>
              </div>
            </article>

            <article className={styles.job}>
              <div className={styles.jobCard}>
                <div className={styles.jobMeta}>
                  <h3 className={styles.jobTitle}>Frontend Developer · ExcloLab</h3>
                  <span className={styles.jobDate}>Jul — Oct 2025</span>
                </div>
                <div className={styles.jobCo}>PT Pengendali Sistem Nusantara · project-based</div>
                <ul className={styles.jobList}>
                  <li>tuned the site to <b>Lighthouse 100 desktop / 90 mobile</b> — speedy, accessible &amp; SEO-friendly</li>
                  <li>built &amp; initialized the full project from scratch with <b>Next.js</b></li>
                  <li>set up a comprehensive SEO strategy: technical SEO, metadata, search visibility</li>
                  <li>turned UI/UX designs into responsive pages &amp; wired RESTful APIs</li>
                </ul>
              </div>
            </article>

            <article className={styles.job}>
              <div className={styles.jobCard}>
                <div className={styles.jobMeta}>
                  <h3 className={styles.jobTitle}>Frontend Developer</h3>
                  <span className={styles.jobDate}>Aug 2022 — Aug 2023</span>
                </div>
                <div className={styles.jobCo}>Elektronik Ilmu Indonesia · Elmu.id</div>
                <ul className={styles.jobList}>
                  <li>boosted <b>user engagement +30%</b> with UI &amp; perf wins on a React/Next public site</li>
                  <li>built a custom in-site sales workflow to replace Google Forms — better conversions, fewer clicks</li>
                  <li>iterated on user testing &amp; feedback — small details, big impact</li>
                  <li>worked cross-functionally on domain models &amp; business processes</li>
                </ul>
              </div>
            </article>

            <article className={styles.job}>
              <div className={styles.jobCard}>
                <div className={styles.jobMeta}>
                  <h3 className={styles.jobTitle}>Frontend Engineer Intern</h3>
                  <span className={styles.jobDate}>Aug — Dec 2022</span>
                </div>
                <div className={styles.jobCo}>PT DOT Indonesia</div>
                <ul className={styles.jobList}>
                  <li>got the <b>Best Team award</b> across all intern cohorts for the Kalla Friends back-office</li>
                  <li>built features in React + Inertia.js — improving usability &amp; squashing bugs</li>
                  <li>made reusable components for key project data, speeding up dev for everyone</li>
                  <li>teamed up with backend &amp; QA for smooth releases</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* PROJECTS */}
        <section className={`${styles.section} ${styles.reveal}`} aria-labelledby="projects-heading">
          <div className={styles.secHead}>
            <span className={styles.secNum} aria-hidden="true">04</span>
            <h2 id="projects-heading" className={styles.secTitle}>
              things <span className={styles.secTitleUnderline}>i made</span>
            </h2>
            <span className={styles.secEmoji} aria-hidden="true">✦</span>
          </div>

          <div className={styles.polaroids}>
            {[
              { glyph: "C", name: "Carolina", role: "job portal · frontend lead", stack: "Nuxt · REST · SQL", note: "end-to-end architecture & delivery" },
              { glyph: "Ch", name: "Cherry", role: "HRIS revamp · frontend lead", stack: "AngularJS · REST · SQL", note: "full frontend stack ownership" },
              { glyph: "R", name: "Redkendi", role: "microsite · frontend lead", stack: "Nuxt · REST", note: "production deployment" },
              { glyph: "E", name: "ExcloLab", role: "marketing site · frontend dev", stack: "Next.js", note: "Lighthouse 100/90 · full SEO" },
              { glyph: "El", name: "Elmu.id", role: "edu platform · frontend dev", stack: "React · Next", note: "+30% user engagement" },
              { glyph: "K", name: "Kalla Friends", role: "back-office · intern", stack: "React · Inertia.js", note: "★ best team award" },
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

        {/* EDUCATION */}
        <section className={`${styles.section} ${styles.reveal}`} aria-labelledby="education-heading">
          <div className={styles.secHead}>
            <span className={styles.secNum} aria-hidden="true">05</span>
            <h2 id="education-heading" className={styles.secTitle}>
              school <span className={styles.secTitleUnderline}>stuff</span>
            </h2>
            <span className={styles.secEmoji} aria-hidden="true">❀</span>
          </div>

          <article className={styles.eduCard}>
            <div className={styles.eduMeta}>
              <h3 className={styles.eduTitle}>B.Sc. Computer Science</h3>
              <span className={styles.eduDate}>Aug 2019 — Aug 2023</span>
            </div>
            <div className={styles.eduSchool}>Universitas Sriwijaya</div>
            <ul className={styles.eduList}>
              <li>graduated <b>Cum Laude</b> with GPA <b>3.73 / 4.00</b> — top of the faculty</li>
              <li>thesis: sentiment analysis of MBKM on Twitter using VADER</li>
              <li>programming lab assistant · head of secretarial division (BEM) · head of performance management (Fasilkom Science Community)</li>
            </ul>
          </article>

          <article className={styles.eduCard}>
            <div className={styles.eduMeta}>
              <h3 className={styles.eduTitle}>Full-Stack Data Analytics</h3>
              <span className={styles.eduDate}>May — Sep 2023</span>
            </div>
            <div className={styles.eduSchool}>RevoU</div>
            <ul className={styles.eduList}>
              <li>finished with <b>95.45 / 100</b> — selected through a competitive process with <b>&lt;10% acceptance</b></li>
              <li><b>200+ hours</b> across Python, SQL, AWS &amp; data viz</li>
              <li>real-world analyses (Iowa liquor sales!) with actual business recs</li>
            </ul>
          </article>

          <article className={styles.eduCard}>
            <div className={styles.eduMeta}>
              <h3 className={styles.eduTitle}>GIGIH 2.0 — Frontend Apprenticeship</h3>
              <span className={styles.eduDate}>Feb — Jul 2022</span>
            </div>
            <div className={styles.eduSchool}>GoTo Impact Foundation</div>
            <ul className={styles.eduList}>
              <li>advanced React.js training + career &amp; soft-skills sessions led by GoTo employees</li>
            </ul>
          </article>
        </section>

        {/* AWARDS */}
        <section className={`${styles.section} ${styles.reveal}`} aria-labelledby="awards-heading">
          <div className={styles.secHead}>
            <span className={styles.secNum} aria-hidden="true">06</span>
            <h2 id="awards-heading" className={styles.secTitle}>
              tiny <span className={styles.secTitleUnderline}>trophies</span>
            </h2>
            <span className={styles.secEmoji} aria-hidden="true">★</span>
          </div>

          <div className={styles.stickers}>
            <div className={styles.sticker}>
              <div className={styles.stickerYr}>2021</div>
              <div className={styles.stickerTtl}>1st Winner — National Business Plan Comp</div>
              <div className={styles.stickerSub}>Univ. Sriwijaya</div>
            </div>
            <div className={styles.sticker}>
              <div className={styles.stickerYr}>2022</div>
              <div className={styles.stickerTtl}>Best Team Award</div>
              <div className={styles.stickerSub}>PT DOT Indonesia</div>
            </div>
            <div className={styles.sticker}>
              <div className={styles.stickerYr}>2023</div>
              <div className={styles.stickerTtl}>Full-Stack Data Analytics Cert</div>
              <div className={styles.stickerSub}>RevoU · 95.45/100</div>
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <footer className={`${styles.footer} ${styles.reveal}`}>
          <h2 className={styles.footerH2}>
            let&apos;s build something <span className={styles.heart}>♥</span> cute
          </h2>
          <p className={styles.footerDesc}>open to frontend roles, freelance, &amp; pretty pixels</p>
          <a className={styles.cta} href="mailto:adawiyyahlatifah@gmail.com">
            say hi →
          </a>
          <div className={styles.signoff}>⋆ made with care by ada ⋆</div>
        </footer>

      </div>
    </div>
  );
}
