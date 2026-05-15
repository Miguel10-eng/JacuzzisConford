import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useMemo } from 'react'

import equiposHero from '../assets/Acabados.png'
import maestroJacuzzi from '../assets/maestro-jacuzzi.png'
import maestroJacuzzi2 from '../assets/maestro-jacuzzi-2.png'
import maestroPiscina from '../assets/maestro-piscina.png'
import maestroPiscina2 from '../assets/maestro-piscina-2.png'
import maestroSauna from '../assets/maestro-sauna.png'
import maestroSauna2 from '../assets/maestro-sauna-2.png'
import maestroEquipos1 from '../assets/maestro-equipos-1.png'
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

export function EquiposPage() {
  const waBase = 'https://wa.me/573144861821?text='

  const cards: Card[] = useMemo(
    () => [
      {
        id: 'inst-jacuzzi',
        title: 'Instalación de jacuzzi',
        subtitle: 'Montaje limpio y funcional',
        image: maestroJacuzzi,
        bullets: ['Conexiones y pruebas', 'Recomendación de equipos', 'Acompañamiento'],
        waText: 'Hola, quiero cotizar equipos e instalación para un jacuzzi.',
      },
      {
        id: 'obra-piscina',
        title: 'Construcción de piscina',
        subtitle: 'Obra civil y equipos',
        image: maestroPiscina,
        bullets: ['Tubería y filtración', 'Iluminación', 'Asesoría por presupuesto'],
        waText: 'Hola, quiero cotizar equipos para una piscina.',
      },
      {
        id: 'montaje-sauna',
        title: 'Montaje de sauna',
        subtitle: 'Materiales y accesorios',
        image: maestroSauna,
        bullets: ['Iluminación LED', 'Protecciones y herrajes', 'Recomendación de equipos'],
        waText: 'Hola, quiero cotizar equipos y accesorios para un sauna.',
      },
      {
        id: 'inst-jacuzzi-2',
        title: 'Ajustes y puesta a punto',
        subtitle: 'Jacuzzi listo para usar',
        image: maestroJacuzzi2,
        bullets: ['Revisión de conexiones', 'Pruebas de funcionamiento', 'Recomendación de repuestos'],
        waText: 'Hola, quiero cotizar equipos/repuestos para mi jacuzzi.',
      },
      {
        id: 'obra-piscina-2',
        title: 'Acabados de piscina',
        subtitle: 'Enchape, luces y detalles',
        image: maestroPiscina2,
        bullets: ['Recomendación de materiales', 'Iluminación LED', 'Equipos de filtración'],
        waText: 'Hola, quiero cotizar equipos y acabados para mi piscina.',
      },
      {
        id: 'montaje-sauna-2',
        title: 'Instalación interior',
        subtitle: 'Bancas, paneles e iluminación',
        image: maestroSauna2,
        bullets: ['Maderas y protección', 'Iluminación LED cálida', 'Asesoría en ventilación'],
        waText: 'Hola, quiero cotizar materiales/equipos para sauna.',
      },
      {
        id: 'cuarto-tecnico',
        title: 'Cuarto técnico',
        subtitle: 'Bombas, filtros y tubería',
        image: maestroEquipos1,
        bullets: ['Selección de equipos', 'Instalación recomendada', 'Soporte y mantenimiento'],
        waText: 'Hola, quiero cotizar equipos para el cuarto técnico (bomba/filtro).',
      },
    ],
    [],
  )

  return (
    <PageShell>
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_55%_at_50%_0%,rgba(25,181,254,0.16),transparent_55%),linear-gradient(to_bottom,#ffffff,#f8fafc)]"
        />

        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-22">
          <img src={equiposHero} alt="" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.95),rgba(255,255,255,0.74),rgba(255,255,255,1))]" />
        </div>

        <Container>
          <div className="relative">
            <SectionHeading
              eyebrow="Venta de equipos"
              title="Equipos, accesorios y soporte"
              description="Solicita cotización por WhatsApp y te asesoramos según tu proyecto."
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

            <section className="mt-16">
              <div className="rounded-3xl border border-[#007BFF]/14 bg-white p-8 shadow-[0_22px_90px_rgba(0,123,255,0.10)]">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#007BFF]/18 bg-[#007BFF]/[0.05] px-3 py-1 text-xs font-semibold text-slate-900/70">
                  Cotizar equipos
                </div>
                <h3 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Te asesoramos según tu proyecto
                </h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-slate-950/70 sm:text-base">
                  Dinos si es para jacuzzi, piscina o sauna y te recomendaremos equipos, potencias y accesorios según tu espacio y presupuesto.
                </p>
                <div className="mt-7">
                  <a
                    href={`${waBase}${encodeURIComponent('Hola, quiero cotizar equipos. ¿Me asesoran según mi proyecto?')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#007BFF] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(0,123,255,0.22)] transition hover:bg-[#19B5FE]"
                  >
                    Cotizar equipos por WhatsApp
                  </a>
                </div>
              </div>
            </section>
          </div>
        </Container>
      </section>
    </PageShell>
  )
}
