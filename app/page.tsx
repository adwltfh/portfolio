import FloatingStickers from '@/components/FloatingStickers'
import ScrollReveal from '@/components/ScrollReveal'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Tools from '@/components/Tools'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'

export default function Page() {
  return (
    <>
      <FloatingStickers />
      <ScrollReveal />
      <main className="max-w-[740px] mx-auto px-7 pt-[60px] pb-20 relative z-[2] sm:px-4 sm:pt-10 sm:pb-12">
        <Hero />
        <Projects />
        <Tools />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
