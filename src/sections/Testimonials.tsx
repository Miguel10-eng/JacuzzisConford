import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'
import { Reveal } from '../shared/Reveal'

type Testimonial = {
  name: string
  role: string
  text: string
  rating: number
}

export function Testimonials() {
  const items: Testimonial[] = useMemo(
    () => [
      {
        name: 'Cliente Premium',
        role: 'Residencial · Jacuzzi personalizado',
        text: 'El resultado se siente de hotel boutique: silencioso, elegante y con una experiencia de hidroterapia impecable.',
        rating: 5,
      },
      {
        name: 'Arquitectura & Obra',
        role: 'Piscina a medida · Diseño moderno',
        text: 'Excelente coordinación y acabados de alta gama. La iluminación y las líneas limpias elevan todo el espacio.',
        rating: 5,
      },
      {
        name: 'Administración',
        role: 'Mantenimiento · Optimización',
        text: 'Plan claro y preventivo. Equipos estables, agua perfecta y respuesta rápida. Muy profesional.',
        rating: 5,
      },
    ],
    [],
  )

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % items.length), 6500)
    return () => window.clearInterval(id)
  }, [items.length])

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)
  const next = () => setIndex((i) => (i + 1) % items.length)

  const active = items[index]

  return (
    <section id="resenas" className="relative overflow-hidden pb-40 pt-36 sm:pb-56 sm:pt-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#ffffff,#f7fbff)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[-220px] z-0 h-[560px] sm:top-[-260px] sm:h-[620px]"
      >
        <svg className="h-full w-full" viewBox="0 0 1440 420" preserveAspectRatio="none">
          <defs>
            <linearGradient id="reviewsWaveTop" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#001B5B" stopOpacity="0.12" />
              <stop offset="55%" stopColor="#007BFF" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#19B5FE" stopOpacity="0.16" />
            </linearGradient>
            <linearGradient id="reviewsWaveTop2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#19B5FE" stopOpacity="0.10" />
              <stop offset="50%" stopColor="#007BFF" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#001B5B" stopOpacity="0.10" />
            </linearGradient>
          </defs>
          <path
            d="M0,260 C220,340 460,150 720,250 C980,350 1180,290 1440,210 L1440,0 L0,0 Z"
            fill="url(#reviewsWaveTop)"
          />
          <path
            d="M0,300 C240,380 460,240 720,310 C980,380 1180,340 1440,260 L1440,0 L0,0 Z"
            fill="url(#reviewsWaveTop2)"
            opacity="0.95"
          />
        </svg>
        <div className="absolute inset-0 bg-white/35 blur-2xl" />
      </div>
      <Container>
        <div className="relative z-10">
        <SectionHeading
          eyebrow="Reseñas"
          title="Testimonios con look enterprise"
          description="Slider elegante con microinteracciones y animaciones suaves. Sustituye los nombres y fotos por los reales."
        />

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-[#007BFF]/14 bg-white p-7 shadow-[0_26px_90px_rgba(0,123,255,0.14)]">
                <div className="absolute -right-24 -top-28 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(25,181,254,0.22),transparent_60%)] blur-2xl" />
                <div className="absolute -left-24 -bottom-28 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,123,255,0.14),transparent_60%)] blur-2xl" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#001B5B] via-[#007BFF] to-[#19B5FE] opacity-70" />

              <div className="relative flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-950/60">
                  <Quote className="h-4 w-4 text-[#007BFF]" />
                  Opiniones verificadas
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    className="grid h-10 w-10 place-items-center rounded-2xl border border-[#007BFF]/14 bg-white text-slate-800 shadow-[0_14px_40px_rgba(0,123,255,0.12)] transition hover:-translate-y-0.5 hover:border-[#007BFF]/25 hover:bg-[#007BFF]/[0.04]"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="grid h-10 w-10 place-items-center rounded-2xl border border-[#007BFF]/14 bg-white text-slate-800 shadow-[0_14px_40px_rgba(0,123,255,0.12)] transition hover:-translate-y-0.5 hover:border-[#007BFF]/25 hover:bg-[#007BFF]/[0.04]"
                    aria-label="Siguiente"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 18, rotateX: 10, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -14, rotateX: -8, filter: 'blur(10px)' }}
                    transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                  >
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < active.rating ? 'text-[#19B5FE]' : 'text-slate-300'}`}
                          fill={i < active.rating ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>
                    <p className="mt-5 text-pretty text-base leading-relaxed text-slate-950/80 sm:text-lg">
                      “{active.text}”
                    </p>
                    <div className="mt-6 flex items-center justify-between gap-4">
                      <div>
                        <div className="text-sm font-semibold text-slate-950">{active.name}</div>
                        <div className="mt-1 text-xs font-semibold text-slate-950/60">{active.role}</div>
                      </div>
                      <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#007BFF]/14 bg-white">
                        <div className="h-7 w-7 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(25,181,254,0.25),rgba(0,123,255,0.12))] shadow-[0_0_28px_rgba(25,181,254,0.45)]" />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-7 flex items-center justify-center gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Ir a reseña ${i + 1}`}
                    className={`h-1.5 w-6 rounded-full transition ${
                      i === index
                        ? 'bg-[#19B5FE] shadow-[0_0_18px_rgba(25,181,254,0.55)]'
                        : 'bg-black/10 hover:bg-black/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-4">
              {items.map((t, i) => (
                <motion.button
                  key={t.name}
                  type="button"
                  onClick={() => setIndex(i)}
                  whileHover={{ y: -6, rotateX: -2, rotateY: 3 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                  className={`rounded-3xl border p-5 text-left transition will-change-transform ${
                    i === index
                      ? 'border-[#007BFF]/20 bg-white shadow-[0_22px_70px_rgba(0,123,255,0.16)]'
                      : 'border-black/10 bg-white/70 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:border-[#007BFF]/18 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold text-slate-950">{t.name}</div>
                      <div className="mt-1 text-xs font-semibold text-slate-950/60">{t.role}</div>
                    </div>
                    <div className="flex items-center gap-1 text-slate-600">
                      <Star className="h-4 w-4 text-[#19B5FE]" fill="currentColor" />
                      <span className="text-xs">{t.rating}.0</span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </Reveal>
        </div>
        </div>
      </Container>
    </section>
  )
}
