import { useEffect, useRef } from 'react'

export function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const set = (x: number, y: number) => {
      el.style.setProperty('--cx', `${x}px`)
      el.style.setProperty('--cy', `${y}px`)
    }

    const onMove = (ev: PointerEvent) => set(ev.clientX, ev.clientY)
    window.addEventListener('pointermove', onMove, { passive: true })
    set(window.innerWidth / 2, window.innerHeight / 3)

    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-40 [background:radial-gradient(650px_circle_at_var(--cx)_var(--cy),rgba(25,181,254,0.12),transparent_55%)]"
    />
  )
}
