import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        resume: {
          lilac: '#efe6ff',
          'lilac-2': '#e1d2ff',
          'lilac-deep': '#b59cf0',
          pink: '#ffd5e5',
          'pink-deep': '#ff8fb3',
          butter: '#fff3a8',
          'butter-deep': '#f5d96b',
          sky: '#c9e7ff',
          'sky-deep': '#82c2f0',
          mint: '#c9f3d8',
          'mint-deep': '#7ad6a0',
          ink: '#3a2a55',
          'ink-soft': '#6b5a85',
          paper: '#fdfaff',
        },
      },
      fontFamily: {
        caprasimo: ['var(--font-caprasimo)', 'serif'],
        fraunces: ['var(--font-fraunces)', 'serif'],
        nunito: ['var(--font-nunito)', 'sans-serif'],
        'dm-mono': ['var(--font-dm-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
