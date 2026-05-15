import { Container } from '../shared/Container'
import { Reveal } from '../shared/Reveal'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import p1 from '../assets/Proyectos1.png'
import p2 from '../assets/Proyectos2.png'
import p3 from '../assets/Proyectos3.png'
import p4 from '../assets/Proyectos4.png'
import p5 from '../assets/Saunas1.png'

type ProjectSlide = {
  title: string
  tag: 'Jacuzzi' | 'Piscina' | 'Sauna'
  src: string
}

export function Portfolio() {
  const slides: ProjectSlide[] = useMemo(
    () => [
      { title: 'Jacuzzi', tag: 'Jacuzzi', src: p1 },
      { title: 'Piscina', tag: 'Piscina', src: p2 },
      { title: 'Jacuzzi', tag: 'Jacuzzi', src: p3 },
      { title: 'Piscina', tag: 'Piscina', src: p4 },
      { title: 'Sauna', tag: 'Sauna', src: p5 },
    ],
    [],
  )

  const [active, setActive] = useState(0)
  const stageRef = useRef<HTMLDivElement | null>(null)
  const [stageW, setStageW] = useState(1100)

  useEffect(() => {
    const id = window.setInterval(() => setActive((i) => (i + 1) % slides.length), 6500)
    return () => window.clearInterval(id)
  }, [slides.length])

  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width ?? 1100
      setStageW(w)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setActive((i) => (i + 1) % slides.length)

  return (
    <section id="proyectos" className="relative -mt-12 overflow-hidden pb-44 pt-28 sm:-mt-16 sm:pb-56 sm:pt-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 bg-white" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-1/2 bg-white"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[45%] z-0 h-[65%] bg-[radial-gradient(85%_60%_at_50%_0%,rgba(25,181,254,0.20),transparent_58%),radial-gradient(65%_55%_at_0%_35%,rgba(0,123,255,0.14),transparent_64%),radial-gradient(60%_55%_at_100%_30%,rgba(0,27,91,0.05),transparent_62%)] opacity-95"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[42%] z-0 h-56 bg-[linear-gradient(to_bottom,#ffffff,rgba(255,255,255,0.96),transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-56 bg-[linear-gradient(to_top,#ffffff,rgba(255,255,255,0.96),transparent)]"
      />
      <Container>
        <div className="relative z-10">
          <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#007BFF]/18 bg-white/90 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#001B5B] shadow-[0_24px_80px_rgba(0,123,255,0.10)]">
              <span className="h-2 w-2 rounded-full bg-[#19B5FE] shadow-[0_0_18px_rgba(25,181,254,0.55)]" />
              Trabajos realizados
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">
              Proyectos con estética moderna
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-slate-950/70 sm:text-base">
              Carrusel 3D para mostrar jacuzzis, piscinas y saunas. Reemplaza las imágenes por tus fotos reales.
            </p>
          </Reveal>
          </div>

          <div className="mt-8">
          <Reveal>
            <div className="mx-auto max-w-5xl">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-semibold text-slate-950">Proyectos</div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Anterior"
                    className="grid h-11 w-11 place-items-center rounded-2xl border border-[#007BFF]/16 bg-white shadow-[0_18px_55px_rgba(0,123,255,0.10)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_80px_rgba(0,123,255,0.14)]"
                  >
                    <ArrowLeft className="h-5 w-5 text-slate-950" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Siguiente"
                    className="grid h-11 w-11 place-items-center rounded-2xl border border-[#007BFF]/16 bg-white shadow-[0_18px_55px_rgba(0,123,255,0.10)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_80px_rgba(0,123,255,0.14)]"
                  >
                    <ArrowRight className="h-5 w-5 text-slate-950" />
                  </button>
                </div>
              </div>

              <div
                ref={stageRef}
                className="relative mt-6 h-[360px] sm:h-[420px] [perspective:1200px]"
              >
                <div className="absolute inset-0 grid place-items-center">
                  {slides.map((s, i) => {
                    const total = slides.length
                    let d = i - active
                    if (d > total / 2) d -= total
                    if (d < -total / 2) d += total

                    const cardW = Math.max(220, Math.min(360, stageW * 0.62))
                    const spacing = Math.max(120, Math.min(190, stageW * 0.30))

                    const isActive = d === 0
                    const x = d * spacing
                    const z = isActive ? 0 : -170 - Math.abs(d) * 38
                    const rY = d * -16
                    const scale = isActive ? 1 : 0.92
                    const opacity = Math.abs(d) > 2 ? 0 : 1

                    return (
                      <motion.button
                        key={`${s.title}-${i}`}
                        type="button"
                        onClick={() => setActive(i)}
                        className="absolute rounded-3xl border border-[#007BFF]/16 bg-white shadow-[0_30px_110px_rgba(0,123,255,0.14)] outline-none"
                        style={{ transformStyle: 'preserve-3d' }}
                        animate={{
                          opacity,
                          x,
                          scale,
                          rotateY: rY,
                          z,
                        }}
                        transition={{ type: 'spring', stiffness: 220, damping: 24, mass: 0.9 }}
                        whileHover={isActive ? { scale: 1.01, y: -4 } : {}}
                        aria-label={`Ver ${s.tag}`}
                      >
                        <div style={{ width: `${cardW}px` }}>
                        <div className="overflow-hidden rounded-3xl">
                          <div className="relative h-[320px] sm:h-[380px]">
                            <img
                              src={s.src}
                              alt={s.title}
                              className="absolute inset-0 h-full w-full object-cover"
                              draggable={false}
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.22))]" />
                            <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                              {s.tag}
                            </div>
                            <div className="absolute inset-x-0 bottom-0 p-4">
                              <div className="rounded-2xl border border-white/15 bg-black/35 p-3 text-left backdrop-blur">
                                <div className="text-sm font-semibold text-white">{s.title}</div>
                                <div className="mt-1 text-xs text-white/75">Proyecto real · Galería</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                      </motion.button>
                    )
                  })}
                </div>
              </div>
            </div>
          </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
