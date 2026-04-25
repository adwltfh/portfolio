import type { Metadata } from 'next'
import { Caprasimo, Fraunces, Nunito, DM_Mono } from 'next/font/google'
import './globals.css'

const caprasimo = Caprasimo({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-caprasimo',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-nunito',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Adawiyyah Latifah ⋆˚࿔ resume',
  description: 'Frontend developer portfolio & resume — crafting clean, performant interfaces',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${caprasimo.variable} ${fraunces.variable} ${nunito.variable} ${dmMono.variable}`}
    >
      <body className="font-nunito text-resume-ink antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
