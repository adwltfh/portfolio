interface Job {
  title: string
  company: string
  date: string
  bullet: string
  dotColor: string
  items: (string | { text: string; highlights?: { word: string; type: 'bold' | 'italic' }[] })[]
}

const JOBS: Job[] = [
  {
    title: 'Frontend Developer',
    company: 'PT Integra Solusi Mandiri',
    date: 'Dec 2023 — now',
    bullet: '✿',
    dotColor: 'bg-resume-butter',
    items: [
      'delivered 3 enterprise web apps end-to-end — Carolina (job portal), Cherry (HRIS revamp), and Redkendi (microsite) — owning the frontend stack across Nuxt, AngularJS, REST & SQL',
      'defined application architecture, frontend structure & business flows for each product to keep them scalable and maintainable',
      'acted as frontend lead, partnering with UI/UX, backend & BA teams to translate complex requirements into production-ready interfaces',
      'kept performance & responsive design tight across every release',
    ],
  },
  {
    title: 'Frontend Developer · ExcloLab',
    company: 'PT Pengendali Sistem Nusantara · project-based',
    date: 'Jul — Oct 2025',
    bullet: '★',
    dotColor: 'bg-resume-pink',
    items: [
      'tuned the site to Lighthouse 100 desktop / 90 mobile — strong scores for speed, accessibility & SEO',
      'initialized the full project from scratch with Next.js',
      'implemented a comprehensive SEO strategy covering technical SEO, metadata & search visibility',
      'turned UI/UX designs into responsive pages and integrated RESTful APIs for dynamic content',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Elektronik Ilmu Indonesia · Elmu.id',
    date: 'Aug 2022 — Aug 2023',
    bullet: '♥',
    dotColor: 'bg-resume-sky',
    items: [
      'improved user engagement by 30%+ through targeted UI optimization and frontend performance work on a React / Next public site',
      'integrated a custom in-site sales workflow to replace a manual Google Forms process — better conversions, fewer steps',
      'iterated on user testing & feedback for steady, detail-focused improvements',
      'collaborated cross-functionally to refine domain models & business processes',
    ],
  },
]

// Render item text with bold/highlighted segments
function renderItem(text: string, bullet: string) {
  // Bold: wrap **word** in butter bg span
  // Italic: wrap _word_ in pink bg span
  // We parse simple bold markers: text wrapped in `**` and code-italic markers wrapped in ` `
  // Original uses <b> for bold and <i> for inline code-style highlights
  // We'll do a simple string parse approach:
  const parts: React.ReactNode[] = []
  let rest = text
  let key = 0

  while (rest.length > 0) {
    const boldIdx = rest.indexOf('**')
    const italIdx = rest.indexOf('`')

    if (boldIdx === -1 && italIdx === -1) {
      parts.push(rest)
      break
    }

    const nextBold = boldIdx === -1 ? Infinity : boldIdx
    const nextItal = italIdx === -1 ? Infinity : italIdx

    if (nextBold < nextItal) {
      parts.push(rest.slice(0, boldIdx))
      const endIdx = rest.indexOf('**', boldIdx + 2)
      if (endIdx === -1) { parts.push(rest); break }
      const word = rest.slice(boldIdx + 2, endIdx)
      parts.push(
        <b key={key++} className="bg-resume-butter px-[3px] rounded-[3px] font-bold">{word}</b>
      )
      rest = rest.slice(endIdx + 2)
    } else {
      parts.push(rest.slice(0, italIdx))
      const endIdx = rest.indexOf('`', italIdx + 1)
      if (endIdx === -1) { parts.push(rest); break }
      const word = rest.slice(italIdx + 1, endIdx)
      parts.push(
        <i key={key++} className="not-italic font-bold text-[13px] bg-resume-pink px-[5px] rounded-[4px]">{word}</i>
      )
      rest = rest.slice(endIdx + 1)
    }
  }
  return parts
}

export default function Experience() {
  return (
    <section className="mt-[72px] relative reveal">
      <div className="flex items-center gap-[14px] mb-6">
        <h2 className="font-caprasimo text-[32px] leading-[1.1] m-0">
          recent{' '}
          <span style={{ background: 'linear-gradient(transparent 65%, #fff3a8 65%)', padding: '0 4px' }}>
            experience
          </span>
        </h2>
        <span className="font-caprasimo text-resume-pink-deep text-[28px] ml-auto rotate-[15deg]">♡</span>
      </div>

      <div className="timeline-track">
        {JOBS.map((job) => (
          <div key={job.title} className="relative mb-7 last:mb-0">
            {/* Timeline dot */}
            <span
              className={`absolute left-[-32px] top-[18px] w-[25px] h-[25px] rounded-full border-2 border-resume-ink ${job.dotColor}`}
            />

            {/* Job card */}
            <div className="bg-resume-paper border-2 border-resume-ink rounded-[18px] px-5 py-[18px] shadow-[4px_4px_0_#b59cf0] transition-transform duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0_#b59cf0]">
              <div className="flex justify-between items-baseline gap-3 flex-wrap mb-[6px]">
                <h3 className="font-caprasimo text-[20px] m-0 leading-[1.15]">{job.title}</h3>
                <span className="font-dm-mono text-[10px] uppercase bg-resume-lilac-2 px-[10px] py-1 rounded-full border-[1.5px] border-resume-ink whitespace-nowrap">
                  {job.date}
                </span>
              </div>
              <div className="font-fraunces italic text-[14px] text-resume-pink-deep mb-3 font-semibold">
                {job.company}
              </div>
              <ul className="list-none p-0 m-0">
                {job.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-[14px] leading-[1.55] text-resume-ink pl-5 relative mb-2 last:mb-0"
                    style={{ textWrap: 'pretty' } as React.CSSProperties}
                  >
                    <span className="absolute left-0 top-[1px] text-[12px] text-resume-pink-deep">
                      {job.bullet}
                    </span>
                    {renderItem(typeof item === 'string' ? item : item.text, job.bullet)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
