const MAIN_TOOLS = [
  { mark: '⚛', name: 'React',      cls: 'bg-resume-sky' },
  { mark: 'N',  name: 'Next.js',   cls: 'bg-resume-ink text-resume-paper [&_.mark]:text-resume-paper [&_.nm]:text-resume-paper' },
  { mark: 'V',  name: 'Vue.js',    cls: 'bg-resume-mint' },
  { mark: 'Nx', name: 'Nuxt.js',   cls: 'bg-resume-mint' },
  { mark: 'Ts', name: 'TypeScript',cls: 'bg-resume-sky' },
  { mark: 'Js', name: 'JavaScript',cls: 'bg-resume-butter' },
  { mark: '≋',  name: 'Tailwind',  cls: 'bg-resume-sky' },
  { mark: 'π',  name: 'Pinia',     cls: 'bg-resume-butter' },
  { mark: '⟲',  name: 'Redux',     cls: 'bg-resume-lilac-2' },
  { mark: 'A',  name: 'AngularJS', cls: 'bg-resume-pink' },
  { mark: 'L',  name: 'Laravel',   cls: 'bg-resume-pink' },
  { mark: '</>', name: 'HTML / CSS',cls: 'bg-resume-butter' },
]

const EXTRA_TOOLS = [
  { label: 'Python',           cls: 'bg-resume-mint' },
  { label: 'REST API',         cls: 'bg-resume-lilac-2' },
  { label: 'MySQL',            cls: 'bg-resume-butter' },
  { label: 'Firebase',         cls: 'bg-resume-pink' },
  { label: 'AWS · S3 / EC2 / RDS', cls: 'bg-resume-sky' },
  { label: 'BigQuery',         cls: 'bg-resume-mint' },
  { label: 'Tableau',          cls: 'bg-resume-butter' },
  { label: 'Looker Studio',    cls: 'bg-resume-pink' },
]

export default function Tools() {
  return (
    <section className="mt-[72px] relative reveal">
      <div className="flex items-center gap-[14px] mb-6">
        <h2 className="font-caprasimo text-[32px] leading-[1.1] m-0">
          tools of the{' '}
          <span style={{ background: 'linear-gradient(transparent 65%, #fff3a8 65%)', padding: '0 4px' }}>
            trade
          </span>
        </h2>
        <span className="font-caprasimo text-resume-pink-deep text-[28px] ml-auto rotate-[15deg]">★</span>
      </div>

      <div className="tools-board-wrap bg-resume-paper border-2 border-resume-ink rounded-[24px] p-[26px_24px] shadow-[6px_6px_0_#7ad6a0]">
        {/* Main tools grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-[22px]">
          {MAIN_TOOLS.map((t) => (
            <div
              key={t.name}
              className={`aspect-square border-2 border-resume-ink rounded-2xl flex flex-col items-center justify-center text-center px-[6px] py-2 transition-transform duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:-rotate-2 ${t.cls}`}
            >
              <div className="font-caprasimo text-[26px] leading-none text-resume-ink mb-1 mark">
                {t.mark}
              </div>
              <div className="font-nunito font-bold text-[11px] text-resume-ink leading-[1.15] nm">
                {t.name}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="tools-divider" />

        {/* Extra tools pills */}
        <div className="flex flex-wrap gap-2 justify-center">
          {EXTRA_TOOLS.map((t) => (
            <span
              key={t.label}
              className={`font-dm-mono text-[11px] px-3 py-[6px] border-[1.5px] border-resume-ink rounded-full whitespace-nowrap ${t.cls}`}
            >
              {t.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
