import { animate, motion, useInView } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Award, Clock, Smile } from 'lucide-react'
import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'
import { Reveal } from '../shared/Reveal'

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const isInView = useInView(ref, { margin: '-120px 0px -120px 0px', once: true })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, to, {
      duration: 1.2,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (latest) => setValue(Math.round(latest)),
    })
    return () => controls.stop()
  }, [isInView, to])

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  )
}

export function WhyUs() {
  const stats = useMemo(
    () => [
      { label: 'Años de experiencia', to: 20, suffix: '', Icon: Clock },
      { label: 'Trabajos hechos', to: 200, suffix: '+', Icon: Award },
      { label: 'Clientes satisfechos', to: 300, suffix: '+', Icon: Smile },
    ],
    [],
  )

  return (
    <section
      id="por-que"
      className="relative -mt-12 overflow-hidden pb-52 pt-32 sm:-mt-16 sm:pb-64 sm:pt-40"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-white" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-white" />

      <Container>
        <div className="relative z-10">
          <SectionHeading
            eyebrow="Por qué elegirnos"
            title="Experiencia real, resultados impecables"
            description="Un proceso claro, asesoría honesta y ejecución precisa. Calidad consistente en diseño, instalación y soporte."
          />

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {stats.map((s, idx) => (
              <Reveal key={s.label} delay={0.05 * idx}>
                <motion.div
                  initial={{ opacity: 0, rotateY: -18, y: 18 }}
                  whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
                  viewport={{ once: true, margin: '0px 0px -120px 0px' }}
                  transition={{ type: 'spring', stiffness: 220, damping: 22, mass: 0.8 }}
                  whileHover={{ rotateY: 6, rotateX: -3, y: -6 }}
                  className="relative overflow-hidden rounded-3xl border border-[#007BFF]/15 bg-white p-7 shadow-[0_24px_80px_rgba(0,123,255,0.12)] will-change-transform"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#001B5B] via-[#007BFF] to-[#19B5FE] opacity-70" />
                  <div className="absolute -left-20 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(25,181,254,0.18),transparent_60%)] blur-2xl" />
                  <div className="absolute -right-24 -bottom-28 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,123,255,0.14),transparent_60%)] blur-2xl" />

                  <div className="relative" style={{ transform: 'translateZ(18px)' }}>
                    <div className="flex items-center justify-between">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#007BFF]/14 bg-white shadow-[0_18px_55px_rgba(0,123,255,0.10)]">
                        <s.Icon className="h-5 w-5 text-[#007BFF]" />
                      </div>
                      <motion.div
                        className="h-2 w-2 rounded-full bg-[#19B5FE] shadow-[0_0_22px_rgba(25,181,254,0.6)]"
                        animate={{ opacity: [0.25, 1, 0.25] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.2 }}
                      />
                    </div>

                    <div className="mt-6 text-4xl font-semibold tracking-tight text-slate-950">
                      <Counter to={s.to} />
                      {s.suffix ? <span className="text-[#007BFF]">{s.suffix}</span> : null}
                    </div>
                    <div className="mt-2 text-sm font-semibold text-slate-950/80">{s.label}</div>
                    <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
                    <div className="mt-5 text-xs leading-relaxed text-slate-950/70">
                      Animaciones fluidas · Construcción progresiva · Interacción premium
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-180px] z-0 h-[560px] sm:bottom-[-220px] sm:h-[620px]"
      >
        <svg className="h-full w-full" viewBox="0 0 1440 420" preserveAspectRatio="none">
          <defs>
            <linearGradient id="whyWaveBottom" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#001B5B" stopOpacity="0.14" />
              <stop offset="55%" stopColor="#007BFF" stopOpacity="0.20" />
              <stop offset="100%" stopColor="#19B5FE" stopOpacity="0.18" />
            </linearGradient>
            <linearGradient id="whyWaveBottom2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#19B5FE" stopOpacity="0.10" />
              <stop offset="50%" stopColor="#007BFF" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#001B5B" stopOpacity="0.10" />
            </linearGradient>
          </defs>
          <path
            d="M0,190 C220,80 460,280 720,200 C980,120 1180,190 1440,260 L1440,420 L0,420 Z"
            fill="url(#whyWaveBottom)"
          />
          <path
            d="M0,150 C260,40 460,200 720,130 C980,60 1180,120 1440,190 L1440,420 L0,420 Z"
            fill="url(#whyWaveBottom2)"
            opacity="0.95"
          />
        </svg>
        <div className="absolute inset-0 bg-white/35 blur-2xl" />
      </div>
    </section>
  )
}
