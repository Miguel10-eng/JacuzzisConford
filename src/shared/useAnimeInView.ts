import { useEffect } from 'react'
import { animate } from 'animejs'

export function useAnimeInView(selector: string) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector))
    if (nodes.length === 0) return

    const played = new WeakSet<HTMLElement>()

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement
          if (!entry.isIntersecting) continue
          if (played.has(el)) continue
          played.add(el)

          const dir = el.dataset.animeFrom === 'right' ? 1 : -1

          animate(el, {
            opacity: [0, 1],
            translateX: [dir * 48, 0],
            translateY: [10, 0],
            scale: [0.98, 1],
            duration: 900,
            easing: 'easeOutExpo',
          })
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -120px 0px' },
    )

    for (const el of nodes) {
      el.style.opacity = '0'
      io.observe(el)
    }

    return () => io.disconnect()
  }, [selector])
}

