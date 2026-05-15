import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useMemo } from 'react'

import { Iphone } from '../components/ui/iphone'
import piscinaHero from '../assets/Proyectos2.png'
import piscinaImg1 from '../assets/Piscinas1.png'
import piscinaImg2 from '../assets/Proyectos4.png'
import piscinaImg3 from '../assets/Proyectos2.png'
import piscinaVideo1 from '../assets/piscina-video-1.png'
import piscinaVideo2 from '../assets/piscina-video-2.png'
import piscinaVideo3 from '../assets/piscina-video-3.png'
import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'
import { PageShell } from './PageShell'

type Card = {
  id: string
  title: string
  subtitle: string
  image: string
  bullets: string[]
  waText: string
}

export function PiscinasPage() {
  const waBase = 'https://wa.me/573144861821?text='

  const cards: Card[] = useMemo(
    () => [
      {
        id: 'medida',
        title: 'Piscina a medida',
        subtitle: 'Diseño según espacio y uso',
        image: piscinaImg1,
        bullets: ['Propuesta arquitectónica', 'Obra civil completa', 'Acabados a elección'],
        waText: 'Hola, quiero cotizar una piscina a medida.',
      },
      {
        id: 'remodelacion',
        title: 'Remodelación',
        subtitle: 'Mejora estética y funcionamiento',
        image: piscinaImg2,
        bullets: ['Cambio de enchapes', 'Iluminación', 'Optimización hidráulica'],
        waText: 'Hola, quiero una asesoría para remodelar mi piscina.',
      },
      {
        id: 'acabados',
        title: 'Acabados & equipos',
        subtitle: 'Detalles que elevan el proyecto',
        image: piscinaImg3,
        bullets: ['Filtros y bombas', 'Calefacción', 'Accesorios'],
        waText: 'Hola, quiero cotizar equipos/acabados para piscina.',
      },
    ],
    [],
  )

  return (
    <PageShell>
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_55%_at_50%_0%,rgba(25,181,254,0.18),transparent_55%),linear-gradient(to_bottom,#ffffff,#f8fafc)]"
        />

        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-25">
          <img src={piscinaHero} alt="" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.95),rgba(255,255,255,0.72),rgba(255,255,255,1))]" />
        </div>

        <Container>
          <div className="relative">
            <SectionHeading
              eyebrow="Piscinas"
              title="Piscinas a medida con look arquitectónico"
              description="Explora opciones y solicita una cotización directa por WhatsApp."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {cards.map((c, idx) => (
                <motion.article
                  key={c.id}
                  initial={{
                    opacity: 0,
                    x: idx % 2 === 0 ? -22 : 22,
                    y: 18,
                    rotateX: 10,
                    filter: 'blur(10px)',
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0, rotateX: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '0px 0px -120px 0px' }}
                  transition={{ type: 'spring', stiffness: 240, damping: 22, delay: idx * 0.06 }}
                  whileHover={{ y: -10, rotateX: -3, rotateY: 4 }}
                  className="group relative overflow-hidden rounded-3xl border border-[#007BFF]/14 bg-white shadow-[0_22px_90px_rgba(0,123,255,0.12)] will-change-transform"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#001B5B] via-[#007BFF] to-[#19B5FE] opacity-70" />

                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                      loading="lazy"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,255,255,0.98),rgba(255,255,255,0.22),transparent)]" />
                  </div>

                  <div className="relative p-6" style={{ transform: 'translateZ(14px)' }}>
                    <div className="text-lg font-semibold tracking-tight text-slate-950">{c.title}</div>
                    <div className="mt-1 text-sm font-semibold text-slate-950/60">{c.subtitle}</div>

                    <div className="mt-5 grid gap-2 text-sm text-slate-950/75">
                      {c.bullets.map((b) => (
                        <div key={b} className="flex items-start gap-2">
                          <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-lg border border-[#007BFF]/18 bg-[#007BFF]/[0.04]">
                            <Check className="h-3.5 w-3.5 text-[#007BFF]" />
                          </span>
                          <span className="leading-relaxed">{b}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-end">
                      <a
                        href={`${waBase}${encodeURIComponent(c.waText)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-semibold text-[#007BFF] opacity-0 transition group-hover:opacity-100 hover:text-[#19B5FE]"
                      >
                        Solicitar cotización
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <section className="mt-16 grid items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#007BFF]/18 bg-[#007BFF]/[0.05] px-3 py-1 text-xs font-semibold text-slate-900/70">
                  Construcción de piscinas
                </div>
                <h3 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Piscinas de todos los gustos
                </h3>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-slate-950/70 sm:text-base">
                  Modernas, clásicas, minimalistas o tipo resort. Diseñamos y construimos según tu espacio, presupuesto y estilo.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`${waBase}${encodeURIComponent('Hola, quiero cotizar la construcción de una piscina. ¿Me asesoras?')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#007BFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(0,123,255,0.22)] transition hover:bg-[#19B5FE]"
                  >
                    Solicitar por WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <Iphone className="w-[292px] max-w-full sm:w-[336px]">
                  <div className="phone-slideshow">
                    <img src={piscinaVideo1} alt="" className="phone-slide" draggable={false} />
                    <img src={piscinaVideo2} alt="" className="phone-slide" draggable={false} />
                    <img src={piscinaVideo3} alt="" className="phone-slide" draggable={false} />
                  </div>
                </Iphone>
              </div>
            </section>
          </div>
        </Container>
      </section>
    </PageShell>
  )
}
