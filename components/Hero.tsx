const badges = [
  { label: 'React', bg: 'bg-resume-paper', rotate: '-rotate-1' },
  { label: 'Next.js', bg: 'bg-resume-butter', rotate: 'rotate-2' },
  { label: 'Vue', bg: 'bg-resume-sky', rotate: '-rotate-2' },
  { label: 'Nuxt', bg: 'bg-resume-pink', rotate: 'rotate-1' },
  { label: 'TypeScript', bg: 'bg-resume-mint', rotate: '-rotate-1' },
]

export default function Hero() {
  return (
    <header className="reveal relative bg-resume-paper border-2 border-resume-ink rounded-[32px] shadow-[8px_8px_0_#b59cf0] text-center px-9 pt-14 pb-12 -rotate-1 sm:rotate-0 sm:px-6 sm:pt-11 sm:pb-9">
      {/* Tape strip */}
      <span
        className="absolute top-[-14px] left-1/2 w-[110px] h-7 -translate-x-1/2 -rotate-3 pointer-events-none"
        style={{ background: 'rgba(255,209,102,0.7)', border: '1px dashed rgba(58,42,85,0.3)' }}
      />

      {/* Corner decoration — hidden on small screens to avoid clipping */}
      <span className="absolute pointer-events-none font-caprasimo text-[36px] leading-none text-resume-pink-deep top-[-18px] left-[-22px] -rotate-[15deg] hidden md:block">
        ✿
      </span>
      <span className="absolute pointer-events-none font-caprasimo text-[32px] leading-none text-resume-butter-deep bottom-[-24px] right-[-18px] rotate-[20deg] hidden md:block">
        ★
      </span>
      <span
        className="absolute pointer-events-none w-11 h-11 bg-resume-sky rounded-full border-2 border-resume-ink hidden md:block"
        style={{ top: '30%', right: '-28px' }}
      />
      <span
        className="absolute pointer-events-none w-9 h-9 bg-resume-mint border-2 border-resume-ink rounded-lg rotate-[15deg] hidden md:block"
        style={{ bottom: '20%', left: '-28px' }}
      />

      {/* Greeting */}
      <div className="font-dm-mono text-[12px] uppercase tracking-[0.18em] text-resume-ink-soft mb-2">
        ∗ ⋆ portfolio &amp; resume ⋆ ∗
      </div>

      {/* Name */}
      <h1 className="font-caprasimo text-[64px] sm:text-[48px] leading-none text-resume-ink tracking-[-0.01em] mb-1 mt-0">
        i&apos;m{' '}
        <span className="inline-block bg-resume-pink px-3 rounded-2xl -rotate-2 mx-[-2px]">
          adawiyyah
        </span>
        <br />
        ꒰a frontend dev꒱
      </h1>

      {/* Role tagline */}
      <p className="font-fraunces italic font-normal text-[22px] text-resume-ink-soft mt-[14px] mb-[22px]">
        crafting clean, performant interfaces{' '}
        <span className="not-italic text-resume-pink-deep">♥</span>
        {' '}with care
      </p>

      {/* Skill badges */}
      <div className="flex justify-center gap-2 flex-wrap">
        {badges.map(({ label, bg, rotate }) => (
          <span
            key={label}
            className={`font-dm-mono text-[11px] px-3 py-[6px] rounded-full border-[1.5px] border-resume-ink ${bg} ${rotate}`}
          >
            {label}
          </span>
        ))}
      </div>
    </header>
  )
}
