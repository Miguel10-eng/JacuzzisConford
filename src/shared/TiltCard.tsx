import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'
import { useEffect, useRef, useState } from 'react'

export function TiltCard({
  children,
  className = '',
  maxTiltX = 8,
  maxTiltY = 10,
  animeEnter,
  animeFrom,
}: PropsWithChildren<{
  className?: string
  maxTiltX?: number
  maxTiltY?: number
  animeEnter?: boolean
  animeFrom?: 'left' | 'right'
}>) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })
  const [pos, setPos] = useState({ x: 0.5, y: 0.35 })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = (e.clientX - cx) / r.width
      const dy = (e.clientY - cy) / r.height
      const rx = Math.max(-1, Math.min(1, -dy)) * maxTiltX
      const ry = Math.max(-1, Math.min(1, dx)) * maxTiltY
      setTilt({ rx, ry })
      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height
      setPos({ x: Math.max(0, Math.min(1, px)), y: Math.max(0, Math.min(1, py)) })
    }

    const onLeave = () => setTilt({ rx: 0, ry: 0 })

    el.addEventListener('pointermove', onMove, { passive: true })
    el.addEventListener('pointerleave', onLeave, { passive: true })
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [maxTiltX, maxTiltY])

  return (
    <motion.div
      ref={ref}
      className={className}
      data-anime-enter={animeEnter ? '' : undefined}
      data-anime-from={animeFrom}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transition: 'transform 180ms cubic-bezier(0.2,0.8,0.2,1)',
      }}
      whileHover={{ y: -10, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22, mass: 0.8 }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${pos.x * 100}% ${pos.y * 100}%, rgba(255,255,255,0.70), transparent 55%)`,
          mixBlendMode: 'soft-light',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent)',
          maskImage:
            'radial-gradient(70% 55% at 50% 50%, black, transparent 70%)',
        }}
      />
      {children}
    </motion.div>
  )
}
