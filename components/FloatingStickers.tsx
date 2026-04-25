'use client'

import { useEffect, useRef } from 'react'

interface Sticker {
  id: number
  speed: number
  top: string
  left?: string
  right?: string
  style: React.CSSProperties
  children?: React.ReactNode
}

const STICKERS: Sticker[] = [
  {
    id: 1,
    speed: 0.3,
    top: '8%',
    left: '4%',
    style: {
      fontSize: '28px',
      lineHeight: 1,
      fontFamily: 'var(--font-caprasimo)',
      color: '#f5d96b',
    },
    children: '✦',
  },
  {
    id: 2,
    speed: 0.5,
    top: '22%',
    right: '6%',
    style: {
      fontSize: '22px',
      lineHeight: 1,
      fontFamily: 'var(--font-caprasimo)',
      color: '#ff8fb3',
    },
    children: '✦',
  },
  {
    id: 3,
    speed: 0.2,
    top: '38%',
    left: '2%',
    style: {
      width: '80px',
      height: '90px',
      background: '#ffd5e5',
      borderRadius: '50% 60% 55% 45% / 55% 45% 60% 40%',
      opacity: 0.55,
      filter: 'blur(0.5px)',
    },
  },
  {
    id: 4,
    speed: 0.4,
    top: '52%',
    right: '3%',
    style: {
      width: '70px',
      height: '70px',
      border: '3px dashed #b59cf0',
      borderRadius: '50%',
      opacity: 0.4,
    },
  },
  {
    id: 5,
    speed: 0.25,
    top: '70%',
    left: '6%',
    style: {
      width: '60px',
      height: '70px',
      background: '#fff3a8',
      borderRadius: '50% 60% 55% 45% / 55% 45% 60% 40%',
      opacity: 0.55,
      filter: 'blur(0.5px)',
    },
  },
  {
    id: 6,
    speed: 0.6,
    top: '64%',
    right: '5%',
    style: {
      fontSize: '40px',
      fontFamily: 'var(--font-caprasimo)',
      color: '#ff8fb3',
      opacity: 0.6,
    },
    children: '⌇',
  },
  {
    id: 7,
    speed: 0.35,
    top: '86%',
    left: '5%',
    style: {
      fontSize: '26px',
      lineHeight: 1,
      fontFamily: 'var(--font-caprasimo)',
      color: '#82c2f0',
    },
    children: '✦',
  },
  {
    id: 8,
    speed: 0.4,
    top: '90%',
    right: '4%',
    style: {
      width: '60px',
      height: '60px',
      background: '#c9e7ff',
      borderRadius: '50% 60% 55% 45% / 55% 45% 60% 40%',
      opacity: 0.55,
      filter: 'blur(0.5px)',
    },
  },
]

export default function FloatingStickers() {
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      STICKERS.forEach((s, i) => {
        const el = refs.current[i]
        if (el) {
          el.style.transform = `translateY(${-y * s.speed}px) rotate(${y * s.speed * 0.05}deg)`
        }
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {STICKERS.map((s, i) => (
        <div
          key={s.id}
          ref={(el) => { refs.current[i] = el }}
          style={{
            position: 'fixed',
            pointerEvents: 'none',
            zIndex: 0,
            willChange: 'transform',
            top: s.top,
            ...(s.left ? { left: s.left } : {}),
            ...(s.right ? { right: s.right } : {}),
            ...s.style,
          }}
        >
          {s.children}
        </div>
      ))}
    </>
  )
}
