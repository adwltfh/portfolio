const CONTACT_ITEMS = [
  {
    href: 'tel:+6282177538199',
    cls: 'phone',
    ico: '☏',
    icoColor: 'bg-resume-mint',
    label: 'phone',
    value: '+62 821 7753 8199',
  },
  {
    href: 'mailto:adawiyyahlatifah@gmail.com',
    cls: 'mail',
    ico: '✉',
    icoColor: 'bg-resume-pink',
    label: 'email',
    value: 'adawiyyahlatifah@gmail.com',
  },
  {
    href: undefined,
    cls: 'loc',
    ico: '◎',
    icoColor: 'bg-resume-sky',
    label: 'based in',
    value: 'Palembang, Indonesia',
  },
  {
    href: '#',
    cls: 'port',
    ico: '★',
    icoColor: 'bg-resume-butter',
    label: 'portfolio',
    value: 'view my work',
  },
]

export default function Contact() {
  return (
    <section className="mt-20 bg-resume-paper border-2 border-resume-ink rounded-[28px] px-8 pt-9 pb-8 relative shadow-[8px_8px_0_#ff8fb3] text-center reveal sm:px-6 sm:pt-7 sm:pb-6">
      {/* Floating tag */}
      <span className="absolute top-[-16px] left-1/2 -translate-x-1/2 -rotate-2 bg-resume-butter border-2 border-resume-ink px-[18px] py-[6px] rounded-full font-caprasimo text-[14px] italic text-resume-ink whitespace-nowrap">
        ⋆ get in touch ⋆
      </span>

      <h2 className="font-caprasimo text-[34px] sm:text-[26px] mt-[6px] mb-1 leading-[1.05]" style={{ textWrap: 'balance' } as React.CSSProperties}>
        let&apos;s build something{' '}
        <span className="text-resume-pink-deep">♥</span>
        {' '}together
      </h2>
      <p className="font-fraunces italic text-[16px] text-resume-ink-soft m-0 mb-[22px]">
        open to frontend roles, freelance &amp; collaborations
      </p>

      {/* Contact rows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px] text-left mb-6">
        {CONTACT_ITEMS.map((item) => {
          const Tag = item.href ? 'a' : 'div'
          return (
            <Tag
              key={item.label}
              {...(item.href ? { href: item.href } : {})}
              className="flex items-center gap-[10px] px-[14px] py-[10px] border-[1.5px] border-resume-ink rounded-[14px] font-dm-mono text-[12px] text-resume-ink no-underline bg-resume-paper transition-transform duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px]"
            >
              <span
                className={`w-[26px] h-[26px] rounded-[8px] grid place-items-center font-caprasimo text-[14px] text-resume-ink border-[1.5px] border-resume-ink flex-shrink-0 ${item.icoColor}`}
              >
                {item.ico}
              </span>
              <span>
                <span className="font-fraunces italic text-[10px] text-resume-ink-soft block mb-[1px] lowercase">
                  {item.label}
                </span>
                <span className="block font-medium break-all">{item.value}</span>
              </span>
            </Tag>
          )
        })}
      </div>

      {/* CTA buttons */}
      <div className="flex gap-3 justify-center flex-wrap">
        <a
          href="https://www.linkedin.com/in/adawiyyahlatifah"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-resume-ink text-resume-paper px-[26px] py-[14px] rounded-full font-nunito font-extrabold text-[14px] border-2 border-resume-ink shadow-[4px_4px_0_#f5d96b] transition-all duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0_#f5d96b] no-underline group"
        >
          connect on linkedin{' '}
          <span className="font-caprasimo transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
        <a
          href="mailto:adawiyyahlatifah@gmail.com"
          className="inline-flex items-center gap-2 bg-resume-paper text-resume-ink px-[26px] py-[14px] rounded-full font-nunito font-extrabold text-[14px] border-2 border-resume-ink shadow-[4px_4px_0_#b59cf0] transition-all duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0_#b59cf0] no-underline"
        >
          send a note
        </a>
      </div>

      <div className="mt-[22px] font-dm-mono text-[10px] text-resume-ink-soft uppercase tracking-[0.15em]">
        ⋆ thanks for stopping by ⋆
      </div>
    </section>
  )
}
