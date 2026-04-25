import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Adawiyyah Latifah — Frontend Developer Resume",
  description:
    "Frontend Developer with 3+ years building enterprise-grade web applications across React, Next.js, Vue, and Nuxt. Delivers end-to-end from architecture to production. Based in Palembang, Indonesia.",
  keywords: [
    "Adawiyyah Latifah",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Vue Developer",
    "TypeScript",
    "Nuxt.js",
    "Indonesia",
    "Palembang",
    "Resume",
    "CV",
    "Portfolio",
  ],
  openGraph: {
    title: "Adawiyyah Latifah — Frontend Developer",
    description:
      "Frontend Developer with 3+ years building enterprise-grade web applications — React, Next.js, Vue, Nuxt. Lighthouse 100.",
    type: "profile",
  },
  alternates: {
    canonical: "/professional",
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

export default function ProfessionalPage() {
  return (
    <div className={styles.outer}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ maxWidth: "880px", margin: "0 auto" }}>
        <Link href="/" className={styles.backLink}>← all versions</Link>
      </div>

      <div className={styles.page}>

        {/* HEADER */}
        <header className={styles.header}>
          <h1 className={styles.name}>
            Adawiyyah<br />
            <em className={styles.nameItalic}>Latifah</em>
          </h1>
          <div className={styles.roleStack}>
            <div className={styles.roleStackPos}>Frontend Developer</div>
            <div>React · Next · Vue · Nuxt</div>
            <div>Palembang, ID</div>
          </div>
        </header>

        {/* META BAR */}
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <span className={styles.metaLbl}>Phone</span>
            <span className={styles.metaVal}>+62 821 7753 8199</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLbl}>Email</span>
            <a
              href="mailto:adawiyyahlatifah@gmail.com"
              className={styles.metaVal}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              adawiyyahlatifah@gmail.com
            </a>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLbl}>Web</span>
            <span className={styles.metaVal}>
              <a
                href="https://www.linkedin.com/in/adawiyyahlatifah"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                linkedin
              </a>
              {" · "}
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>portfolio</a>
            </span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLbl}>Experience</span>
            <span className={styles.metaVal}>3+ years</span>
          </div>
        </div>

        {/* BODY */}
        <div className={styles.body}>

          {/* ABOUT */}
          <div className={styles.secLabel}>
            <span className={styles.secNum}>01</span>
            About
          </div>
          <section className={styles.row} aria-labelledby="about-heading">
            <h2 id="about-heading" className="sr-only">About</h2>
            <p className={styles.intro}>
              Frontend developer with <b>3+ years</b> building enterprise-grade web applications across{" "}
              <span className={styles.introAccent}>React, Next, Vue, and Nuxt</span>. I deliver products
              end-to-end — from architecture to production — with a focus on performance, clean structure,
              and user-centered design. A background in data analytics and mentoring rounds out the work.
            </p>
          </section>

          <div className={styles.divider}></div>

          {/* SKILLS */}
          <div className={styles.secLabel}>
            <span className={styles.secNum}>02</span>
            Capabilities
          </div>
          <section className={styles.row} aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="sr-only">Capabilities</h2>

            <div className={styles.skillGroup}>
              <h3 className={styles.skillGroupTitle}>Core Stack</h3>
              <div className={styles.chips}>
                {["React.js", "Next.js", "Vue.js", "Nuxt.js"].map((s) => (
                  <span key={s} className={`${styles.chip} ${styles.chipPrimary}`}>{s}</span>
                ))}
                {["Angular.js", "TypeScript", "JavaScript", "Tailwind CSS", "Pinia", "Redux", "Laravel"].map((s) => (
                  <span key={s} className={styles.chip}>{s}</span>
                ))}
              </div>
            </div>

            <div className={styles.skillGroup}>
              <h3 className={styles.skillGroupTitle}>Supporting</h3>
              <div className={styles.chips}>
                {["Python", "REST API", "MySQL", "Firebase", "AWS · S3 / EC2 / RDS", "BigQuery", "Tableau", "Data Studio"].map((s) => (
                  <span key={s} className={styles.chip}>{s}</span>
                ))}
              </div>
            </div>

            <div className={styles.skillGroup}>
              <h3 className={styles.skillGroupTitle}>Practice</h3>
              <p className={styles.softSkills}>
                {["Data Analytics", "Critical Thinking", "Problem Solving", "Attention to Detail", "Cross-functional Collaboration", "Mentoring"].map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </p>
            </div>
          </section>

          <div className={styles.divider}></div>

          {/* EXPERIENCE */}
          <div className={styles.secLabel}>
            <span className={styles.secNum}>03</span>
            Experience
          </div>
          <section className={styles.row} aria-labelledby="experience-heading">
            <h2 id="experience-heading" className="sr-only">Experience</h2>

            <article className={styles.job}>
              <div className={styles.jobHead}>
                <h3 className={styles.jobTitle}>Frontend Developer</h3>
                <div className={styles.jobDate}>Dec 2023 — Present</div>
              </div>
              <div className={styles.jobCompany}>PT Integra Solusi Mandiri</div>
              <ul className={styles.bullets}>
                <li>Architected and delivered <b>3 enterprise web applications</b> end-to-end — a job portal (<i>Carolina</i>), HRIS revamp (<i>Cherry</i>), and microsite (<i>Redkendi</i>) — owning the full frontend stack from architecture to production using Nuxt.js, AngularJS, REST APIs, and SQL.</li>
                <li>Designed application architecture, frontend structure, and business process flows for each product, ensuring scalability and maintainability.</li>
                <li>Served as the <b>frontend lead</b> bridging UI/UX, backend, and business analyst teams — translating complex requirements into production-ready interfaces.</li>
                <li>Implemented performance optimization and responsive design best practices across all projects.</li>
              </ul>
            </article>

            <article className={styles.job}>
              <div className={styles.jobHead}>
                <h3 className={styles.jobTitle}>Frontend Developer — ExcloLab</h3>
                <div className={styles.jobDate}>Jul — Oct 2025</div>
              </div>
              <div className={styles.jobCompany}>PT Pengendali Sistem Nusantara · Project-based</div>
              <ul className={styles.bullets}>
                <li>Optimized website performance to achieve <b>Lighthouse 100 (desktop) and 90 (mobile)</b> — top-tier results for speed, accessibility, and SEO.</li>
                <li>Built and initialized full project architecture from scratch using <b>Next.js</b>.</li>
                <li>Implemented comprehensive SEO strategy covering technical SEO, metadata management, and search visibility.</li>
                <li>Converted UI/UX designs into fully responsive pages and integrated RESTful APIs for dynamic data rendering.</li>
              </ul>
            </article>

            <article className={styles.job}>
              <div className={styles.jobHead}>
                <h3 className={styles.jobTitle}>Frontend Developer</h3>
                <div className={styles.jobDate}>Aug 2022 — Aug 2023</div>
              </div>
              <div className={styles.jobCompany}>Elektronik Ilmu Indonesia · Elmu.id</div>
              <ul className={styles.bullets}>
                <li>Improved <b>user engagement by 30%+</b> through targeted UI optimization and frontend performance enhancements on the public-facing site (React.js / Next.js).</li>
                <li>Integrated a custom sales workflow directly into the website, replacing a manual Google Forms process and improving conversion flow.</li>
                <li>Applied user-centered design through iterative testing and feedback-driven improvements.</li>
                <li>Collaborated cross-functionally to design and optimize domain models and business processes.</li>
              </ul>
            </article>

            <article className={styles.job}>
              <div className={styles.jobHead}>
                <h3 className={styles.jobTitle}>Frontend Engineer Intern</h3>
                <div className={styles.jobDate}>Aug — Dec 2022</div>
              </div>
              <div className={styles.jobCompany}>PT DOT Indonesia</div>
              <ul className={styles.bullets}>
                <li>Recognized with the <b>Best Team award</b> among all intern cohorts for delivering an outstanding client experience on the Kalla Friends App back-office.</li>
                <li>Developed features using React.js and Inertia.js, improving usability, reducing bugs, and enhancing efficiency.</li>
                <li>Built reusable components handling key project data, streamlining development and boosting client satisfaction.</li>
                <li>Collaborated with backend developers and QA to ensure seamless integration and high-quality releases.</li>
              </ul>
            </article>
          </section>

          <div className={styles.divider}></div>

          {/* PROJECTS */}
          <div className={styles.secLabel}>
            <span className={styles.secNum}>04</span>
            Selected Projects
          </div>
          <section className={styles.row} aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="sr-only">Selected Projects</h2>
            <table className={styles.projects}>
              <thead>
                <tr>
                  <th style={{ width: "38%" }}>Project</th>
                  <th style={{ width: "18%" }}>Role</th>
                  <th>Stack &amp; Highlight</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Carolina", type: "Job portal", role: "Frontend Lead", stack: "Nuxt.js · REST · SQL", highlight: "End-to-end architecture & delivery" },
                  { name: "Cherry", type: "HRIS revamp", role: "Frontend Lead", stack: "AngularJS · REST · SQL", highlight: "Full frontend stack ownership" },
                  { name: "Redkendi", type: "Microsite", role: "Frontend Lead", stack: "Nuxt.js · REST", highlight: "Production deployment" },
                  { name: "ExcloLab", type: "Marketing site", role: "Frontend Dev", stack: "Next.js", highlight: "Lighthouse 100 / 90 · Full SEO strategy" },
                  { name: "Elmu.id", type: "Education platform", role: "Frontend Dev", stack: "React.js · Next.js", highlight: "+30% user engagement" },
                  { name: "Kalla Friends", type: "Back-office app", role: "Intern", stack: "React.js · Inertia.js", highlight: "Best Team Award" },
                ].map((p) => (
                  <tr key={p.name}>
                    <td>
                      <span className={styles.pName}>
                        {p.name}
                        <small className={styles.pNameSub}>{p.type}</small>
                      </span>
                    </td>
                    <td className={styles.pRole}>{p.role}</td>
                    <td>
                      <span className={styles.pStack}>{p.stack}</span>
                      <br />
                      {p.highlight}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <div className={styles.divider}></div>

          {/* EDUCATION */}
          <div className={styles.secLabel}>
            <span className={styles.secNum}>05</span>
            Education
          </div>
          <section className={styles.row} aria-labelledby="education-heading">
            <h2 id="education-heading" className="sr-only">Education</h2>

            <article className={styles.edu}>
              <div className={styles.eduHead}>
                <h3 className={styles.eduTitle}>Bachelor of Computer Science</h3>
                <div className={styles.jobDate}>Aug 2019 — Aug 2023</div>
              </div>
              <div className={styles.eduSchool}>Universitas Sriwijaya</div>
              <ul className={styles.bullets}>
                <li>Graduated <b>Cum Laude</b> with GPA <b>3.73 / 4.00</b> — top academic tier of the faculty.</li>
                <li><i>Thesis</i> — Sentiment Analysis of Merdeka Belajar Kampus Merdeka (MBKM) on Twitter Using VADER Analysis Method.</li>
                <li>Programming Lab Assistant (2021) · Head of Secretarial Division, Student Executive Board (2022) · Head of Performance Management, Fasilkom Science Community (2022).</li>
              </ul>
            </article>

            <article className={styles.edu}>
              <div className={styles.eduHead}>
                <h3 className={styles.eduTitle}>Full-Stack Data Analytics</h3>
                <div className={styles.jobDate}>May — Sep 2023</div>
              </div>
              <div className={styles.eduSchool}>RevoU</div>
              <ul className={styles.bullets}>
                <li>Completed with <b>95.45 / 100</b> — selected through competitive testing and interview with <b>&lt;10% acceptance rate</b>.</li>
                <li>Dedicated <b>200+ hours</b> across Python, SQL, AWS, and data visualization.</li>
                <li>End-to-end analysis on real-world datasets (e.g., Iowa liquor sales) with actionable business recommendations.</li>
              </ul>
            </article>

            <article className={styles.edu}>
              <div className={styles.eduHead}>
                <h3 className={styles.eduTitle}>GIGIH 2.0 — Frontend Engineer Apprenticeship</h3>
                <div className={styles.jobDate}>Feb — Jul 2022</div>
              </div>
              <div className={styles.eduSchool}>GoTo Impact Foundation</div>
              <ul className={styles.bullets}>
                <li>Advanced React.js training complemented by career readiness and professional skills sessions led by GoTo employees.</li>
              </ul>
            </article>
          </section>

          <div className={styles.divider}></div>

          {/* AWARDS */}
          <div className={styles.secLabel}>
            <span className={styles.secNum}>06</span>
            Recognition
          </div>
          <section className={styles.row} aria-labelledby="awards-heading">
            <h2 id="awards-heading" className="sr-only">Recognition</h2>
            <div className={styles.awards}>
              <div className={styles.award}>
                <div className={styles.awardYr}>2021</div>
                <div className={styles.awardTtl}>
                  1st Winner — National Business Plan Competition
                  <small className={styles.awardTtlSub}>Universitas Sriwijaya</small>
                </div>
                <div className={styles.awardTag}>Award</div>
              </div>
              <div className={styles.award}>
                <div className={styles.awardYr}>2022</div>
                <div className={styles.awardTtl}>
                  Best Team Award
                  <small className={styles.awardTtlSub}>PT DOT Indonesia · Intern Cohort</small>
                </div>
                <div className={styles.awardTag}>Award</div>
              </div>
              <div className={styles.award}>
                <div className={styles.awardYr}>2023</div>
                <div className={styles.awardTtl}>
                  Full-Stack Data Analytics Certification
                  <small className={styles.awardTtlSub}>RevoU · 95.45 / 100</small>
                </div>
                <div className={styles.awardTag}>Cert</div>
              </div>
            </div>
          </section>

        </div>

        {/* FOOTER */}
        <footer className={styles.footer}>
          <span>Adawiyyah Latifah · Frontend Developer</span>
          <span className={styles.footerMark}>— curriculum vitæ</span>
          <span>Updated 2026</span>
        </footer>

      </div>
    </div>
  );
}
