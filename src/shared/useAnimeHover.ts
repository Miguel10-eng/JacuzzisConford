import { useEffect } from 'react'
import { animate } from 'animejs'

export function useAnimeHover(selector: string) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector))
    const cleanups: Array<() => void> = []

    for (const el of nodes) {
      const icon = el.querySelector<HTMLElement>('[data-anime-icon]')
      const underline = el.querySelector<HTMLElement>('[data-anime-underline]')
      const glow = el.querySelector<HTMLElement>('[data-anime-glow]')

      const enter = () => {
        if (underline) {
          animate(underline, {
            scaleX: [0.2, 1],
            opacity: [0.6, 1],
            duration: 520,
            easing: 'easeOutExpo',
          })
        }
        if (icon) {
          animate(icon, {
            translateY: [-1, -6],
            rotate: [0, 6],
            duration: 600,
            easing: 'easeOutElastic(1, .6)',
          })
        }
        if (glow) {
          animate(glow, {
            opacity: [0, 1],
            scale: [0.98, 1.06],
            duration: 650,
            easing: 'easeOutQuart',
          })
        }
      }

      const leave = () => {
        if (underline) {
          animate(underline, {
            scaleX: 0.55,
            opacity: 0.7,
            duration: 420,
            easing: 'easeOutCubic',
          })
        }
        if (icon) {
          animate(icon, {
            translateY: 0,
            rotate: 0,
            duration: 520,
            easing: 'easeOutElastic(1, .7)',
          })
        }
        if (glow) {
          animate(glow, {
            opacity: 0,
            scale: 1,
            duration: 380,
            easing: 'easeOutCubic',
          })
        }
      }

      el.addEventListener('pointerenter', enter)
      el.addEventListener('pointerleave', leave)
      cleanups.push(() => {
        el.removeEventListener('pointerenter', enter)
        el.removeEventListener('pointerleave', leave)
      })
    }

    return () => cleanups.forEach((c) => c())
  }, [selector])
}
