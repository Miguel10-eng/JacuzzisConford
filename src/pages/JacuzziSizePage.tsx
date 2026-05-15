import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'
import { PageShell } from './PageShell'

import jacuzziHero from '../assets/hero-jacuzzi-ai.png'
import jacuzziImg1 from '../assets/jacuzzisss.png'
import jacuzziImg2 from '../assets/Proyectos1.png'
import jacuzziImg4 from '../assets/Proyectos3.png'
import jacuzziImg6 from '../assets/Acabados.png'
import jacuzziImg7 from '../assets/acabados3.png'
import jacuzzi4p1 from '../assets/jacuzzi-4p-1.png'
import jacuzzi4p2 from '../assets/jacuzzi-4p-2.png'
import jacuzzi4p3 from '../assets/jacuzzi-4p-3.png'
import jacuzzi6p1 from '../assets/jacuzzi-6p-1.png'
import jacuzzi6p2 from '../assets/jacuzzi-6p-2.png'
import jacuzzi6p3 from '../assets/jacuzzi-6p-3.png'
import jacuzziPets1 from '../assets/jacuzzi-mascotas-1.png'
import jacuzziPets2 from '../assets/jacuzzi-mascotas-2.png'

type SizeSection = {
  size: number
  image: string
  eyebrow: string
  title: string
  description: string
  cards: Array<{
    id: string
    title: string
    subtitle: string
    image: string
    bullets: string[]
  }>
}

export function JacuzziSizePage() {
  const { personas } = useParams()
  const n = Number(personas)

  const sizeSections: SizeSection[] = useMemo(
    () => [
      {
        size: 1,
        image: jacuzziImg1,
        eyebrow: 'Jacuzzis',
        title: 'Jacuzzi para 1 persona',
        description: 'Perfecto para espacios compactos y una experiencia de relajación personal.',
        cards: [
          {
            id: '1-1',
            title: 'Compacto',
            subtitle: 'Ideal para espacios pequeños',
            image: jacuzziImg1,
            bullets: ['Jets de hidroterapia', 'Luz LED', 'Acabado premium'],
          },
        ],
      },
      {
        size: 2,
        image: jacuzziImg2,
        eyebrow: 'Jacuzzis',
        title: 'Jacuzzi para 2 personas',
        description: 'Confort para pareja: compacto, cómodo y con una experiencia de hidroterapia equilibrada.',
        cards: [
          {
            id: '2-1',
            title: 'Confort',
            subtitle: 'Diseñado para dos',
            image: jacuzziImg2,
            bullets: ['Asientos ergonómicos', 'Jets estratégicos', 'Iluminación LED'],
          },
          {
            id: '2-2',
            title: 'Acabados',
            subtitle: 'Personalización',
            image: jacuzziImg6,
            bullets: ['Materiales a elección', 'Grifería y boquillas', 'Detalles premium'],
          },
          {
            id: '2-3',
            title: 'Instalación',
            subtitle: 'Lista de requisitos',
            image: jacuzziImg7,
            bullets: ['Punto eléctrico', 'Drenaje', 'Recomendaciones técnicas'],
          },
        ],
      },
      {
        size: 4,
        image: jacuzziImg2,
        eyebrow: 'Jacuzzis',
        title: 'Jacuzzi para 4 personas',
        description: 'Balance perfecto entre confort y tamaño. Ideal para familia o pareja con invitados.',
        cards: [
          {
            id: '4-1',
            title: 'Confort',
            subtitle: 'Distribución cómoda',
            image: jacuzzi4p1,
            bullets: ['Asientos ergonómicos', 'Jets estratégicos', 'Iluminación LED'],
          },
          {
            id: '4-2',
            title: 'Eficiencia',
            subtitle: 'Consumo optimizado',
            image: jacuzzi4p2,
            bullets: ['Aislamiento térmico', 'Filtración estable', 'Fácil mantenimiento'],
          },
          {
            id: '4-3',
            title: 'Personalización',
            subtitle: 'Acabados a elección',
            image: jacuzzi4p3,
            bullets: ['Colores y texturas', 'Accesorios', 'Diseño a medida'],
          },
        ],
      },
      {
        size: 6,
        image: jacuzziImg4,
        eyebrow: 'Jacuzzis',
        title: 'Jacuzzi para 6 personas',
        description: 'Capacidad ideal para reuniones y zonas sociales con experiencia de hidroterapia.',
        cards: [
          {
            id: '6-1',
            title: 'Hidroterapia',
            subtitle: 'Masaje completo',
            image: jacuzzi6p1,
            bullets: ['Zonas de masaje', 'Jets direccionables', 'Mayor potencia'],
          },
          {
            id: '6-2',
            title: 'Diseño',
            subtitle: 'Presencia premium',
            image: jacuzzi6p2,
            bullets: ['Estética moderna', 'Acabados resistentes', 'Integración arquitectónica'],
          },
          {
            id: '6-3',
            title: 'Soporte',
            subtitle: 'Asesoría completa',
            image: jacuzzi6p3,
            bullets: ['Instalación guiada', 'Recomendaciones técnicas', 'Garantía y soporte'],
          },
        ],
      },
    ],
    [],
  )

  const visibleSections = useMemo(() => {
    if (!Number.isFinite(n)) return sizeSections
    if ([1, 2, 4, 6].includes(n)) return sizeSections.filter((s) => s.size === n)
    return sizeSections
  }, [n, sizeSections])

  return (
    <PageShell>
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_55%_at_50%_0%,rgba(25,181,254,0.18),transparent_55%),linear-gradient(to_bottom,#ffffff,#f8fafc)]"
        />

        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-30">
          <img src={jacuzziHero} alt="" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.95),rgba(255,255,255,0.72),rgba(255,255,255,1))]" />
        </div>

        <Container>
          <div className="relative">
            <div className="mt-8 grid gap-14">
              {[...visibleSections].sort((a, b) => a.size - b.size).map((s) => {
                const waBySize = `https://wa.me/573144861821?text=${encodeURIComponent(
                  `Hola, quiero cotizar un jacuzzi para ${s.size} personas.`,
                )}`

                return (
                  <section key={s.size} className="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-white">
                    <div className="pointer-events-none absolute inset-0">
                      <img src={s.image} alt="" className="h-full w-full object-cover opacity-[0.16]" draggable={false} />
                      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.98),rgba(255,255,255,0.94),rgba(255,255,255,1))]" />
                    </div>

                    <div className="relative px-6 py-12 sm:px-10">
                      <SectionHeading eyebrow={s.eyebrow} title={s.title} description={s.description} />

                      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {s.cards.map((c, idx) => (
                          <motion.article
                            key={c.id}
                            initial={{
                              opacity: 0,
                              x: idx % 2 === 0 ? -18 : 18,
                              y: 14,
                              filter: 'blur(10px)',
                            }}
                            whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
                            viewport={{ once: true, margin: '0px 0px -120px 0px' }}
                            transition={{ type: 'spring', stiffness: 240, damping: 22, delay: idx * 0.06 }}
                            whileHover={{ y: -10, rotateX: -3, rotateY: 4 }}
                            className="group relative overflow-hidden rounded-3xl border border-[#007BFF]/14 bg-white shadow-[0_22px_90px_rgba(0,123,255,0.10)] will-change-transform"
                            style={{ transformStyle: 'preserve-3d' }}
                          >
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#001B5B] via-[#007BFF] to-[#19B5FE] opacity-60" />
                            <div className="relative h-40 overflow-hidden">
                              <img
                                src={c.image}
                                alt={c.title}
                                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                                loading="lazy"
                                draggable={false}
                              />
                              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,255,255,0.98),rgba(255,255,255,0.22),transparent)]" />
                            </div>

                            <div className="relative p-6" style={{ transform: 'translateZ(12px)' }}>
                              <div className="text-base font-semibold tracking-tight text-slate-950">{c.title}</div>
                              <div className="mt-1 text-sm font-semibold text-slate-950/60">{c.subtitle}</div>

                              <div className="mt-4 grid gap-2 text-sm text-slate-950/75">
                                {c.bullets.map((b) => (
                                  <div key={b} className="flex items-start gap-2">
                                    <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-lg border border-[#007BFF]/18 bg-[#007BFF]/[0.04]">
                                      <Check className="h-3.5 w-3.5 text-[#007BFF]" />
                                    </span>
                                    <span className="leading-relaxed">{b}</span>
                                  </div>
                                ))}
                              </div>

                              <div className="mt-5 flex items-center justify-end">
                                <a
                                  href={waBySize}
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
                    </div>
                  </section>
                )
              })}
            </div>

            <section className="mt-16 relative overflow-hidden rounded-[2.75rem] border border-[#007BFF]/14 bg-white px-6 py-14 shadow-[0_24px_90px_rgba(0,123,255,0.10)] sm:mt-20 sm:px-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-40 -top-40 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(25,181,254,0.20),transparent_60%)] blur-2xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-44 -bottom-44 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,123,255,0.16),transparent_60%)] blur-2xl"
              />

              <div className="relative grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#007BFF]/18 bg-[#007BFF]/[0.05] px-3 py-1 text-xs font-semibold text-slate-900/70">
                    Hecho a medida · Ingeniería & diseño
                  </div>
                  <h3 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                    Diseñamos tu jacuzzi a tu medida
                  </h3>
                  <p className="mt-4 text-pretty text-sm leading-relaxed text-slate-950/70 sm:text-base">
                    Cuéntanos tu espacio, cantidad de personas, estilo y acabados. Te enviamos propuesta, tiempos y cotización.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={`https://wa.me/573144861821?text=${encodeURIComponent(
                        'Hola, quiero diseñar un jacuzzi a mi medida. ¿Me ayudan con una propuesta?',
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-[#007BFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(0,123,255,0.22)] transition hover:bg-[#19B5FE]"
                    >
                      Solicitar por WhatsApp
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl border border-[#007BFF]/12 bg-white p-6 text-slate-950/75 shadow-[0_22px_80px_rgba(0,123,255,0.10)]">
                  <div className="text-sm font-semibold text-slate-950">Para cotizar más rápido</div>
                  <div className="mt-4 grid gap-3 text-sm">
                    <div className="flex gap-3">
                      <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-lg border border-[#007BFF]/18 bg-[#007BFF]/[0.05]">
                        <Check className="h-3.5 w-3.5 text-[#007BFF]" />
                      </span>
                      <span>Medidas aproximadas (largo × ancho × alto)</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-lg border border-[#007BFF]/18 bg-[#007BFF]/[0.05]">
                        <Check className="h-3.5 w-3.5 text-[#007BFF]" />
                      </span>
                      <span>Ubicación (interior / exterior) y ciudad</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-lg border border-[#007BFF]/18 bg-[#007BFF]/[0.05]">
                        <Check className="h-3.5 w-3.5 text-[#007BFF]" />
                      </span>
                      <span>Acabado: madera / acrílico / fibra</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-lg border border-[#007BFF]/18 bg-[#007BFF]/[0.05]">
                        <Check className="h-3.5 w-3.5 text-[#007BFF]" />
                      </span>
                      <span>Presupuesto estimado y fecha ideal</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-16 sm:mt-20">
              <div className="rounded-[2.75rem] border border-[#007BFF]/14 bg-white px-6 py-14 shadow-[0_24px_90px_rgba(0,123,255,0.10)] sm:px-10">
                <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#007BFF]/18 bg-[#007BFF]/[0.05] px-3 py-1 text-xs font-semibold text-slate-900/70">
                      Jacuzzis para mascotas
                    </div>
                    <h3 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                      Jacuzzi para mascotas
                    </h3>
                    <p className="mt-4 text-pretty text-sm leading-relaxed text-slate-950/70 sm:text-base">
                      Soluciones ideales para spa canino, grooming o uso en casa. Diseño práctico, materiales fáciles de limpiar y
                      acabados personalizados.
                    </p>

                    <div className="mt-8 grid gap-3 text-sm text-slate-950/75">
                      {[
                        'Estructura resistente y fácil mantenimiento',
                        'Opciones de tamaño y accesorios',
                        'Acabados personalizados (colores y paneles)',
                      ].map((t) => (
                        <div key={t} className="flex items-start gap-3">
                          <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-lg border border-[#007BFF]/18 bg-[#007BFF]/[0.05]">
                            <Check className="h-3.5 w-3.5 text-[#007BFF]" />
                          </span>
                          <span className="leading-relaxed">{t}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <a
                        href={`https://wa.me/573144861821?text=${encodeURIComponent(
                          'Hola, quiero cotizar un jacuzzi para mascotas. ¿Me envías opciones y precios?',
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-[#007BFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(0,123,255,0.22)] transition hover:bg-[#19B5FE]"
                      >
                        Cotizar por WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { src: jacuzziPets1, alt: 'Jacuzzi para mascotas (modelo rosado)' },
                      { src: jacuzziPets2, alt: 'Jacuzzi para mascotas (modelo azul)' },
                    ].map((img) => (
                      <motion.div
                        key={img.alt}
                        initial={{ opacity: 0, y: 14, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true, margin: '0px 0px -120px 0px' }}
                        transition={{ type: 'spring', stiffness: 240, damping: 22 }}
                        className="group relative overflow-hidden rounded-3xl border border-[#007BFF]/12 bg-white shadow-[0_22px_80px_rgba(0,123,255,0.10)]"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                            loading="lazy"
                            draggable={false}
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,255,255,0.85),transparent_55%)]" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Container>
      </section>
    </PageShell>
  )
}
