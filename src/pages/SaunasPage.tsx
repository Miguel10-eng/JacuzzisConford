import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

import { Iphone } from '../components/ui/iphone'
import saunaHero from '../assets/Sauna-ai.png'
import saunaImg1 from '../assets/Sauna-ai.png'
import saunaImg2 from '../assets/Saunas1.png'
import saunaImg3 from '../assets/saunasimg2.png'
import saunaVideo1 from '../assets/sauna-video-1.png'
import saunaVideo2 from '../assets/sauna-video-2.png'
import saunaVideo3 from '../assets/sauna-video-3.png'
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

export function SaunasPage() {
  const waBase = 'https://wa.me/573144861821?text='
  const [activeImage, setActiveImage] = useState<string | null>(null)

  useEffect(() => {
    if (!activeImage) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveImage(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeImage])

  const cards: Card[] = useMemo(
    () => [
      {
        id: 'seco',
        title: 'Sauna seco',
        subtitle: 'Calor tradicional y confort',
        image: saunaImg1,
        bullets: ['Madera y aislamiento', 'Control de temperatura', 'Diseño a medida'],
        waText: 'Hola, quiero cotizar un sauna seco.',
      },
      {
        id: 'vapor',
        title: 'Sauna a vapor',
        subtitle: 'Relajación con vapor suave',
        image: saunaVideo2,
        bullets: ['Revestimientos fáciles de limpiar', 'Generador de vapor', 'Iluminación LED'],
        waText: 'Hola, quiero cotizar un sauna a vapor.',
      },
      {
        id: 'acabados',
        title: 'Acabados',
        subtitle: 'Detalles que elevan el proyecto',
        image: saunaImg2,
        bullets: ['Iluminación', 'Bancas', 'Herrajes y protección'],
        waText: 'Hola, quiero cotizar acabados para sauna.',
      },
      {
        id: 'esquina',
        title: 'Sauna de esquina',
        subtitle: 'Optimiza espacios pequeños',
        image: saunaVideo3,
        bullets: ['Distribución compacta', 'Madera resistente', 'Ventilación adecuada'],
        waText: 'Hola, quiero cotizar un sauna de esquina.',
      },
      {
        id: 'instalacion',
        title: 'Instalación',
        subtitle: 'Montaje y recomendaciones técnicas',
        image: saunaImg3,
        bullets: ['Ventilación', 'Seguridad eléctrica', 'Garantía y soporte'],
        waText: 'Hola, quiero una asesoría para instalar un sauna.',
      },
      {
        id: 'mantenimiento',
        title: 'Mantenimiento',
        subtitle: 'Cuida tu sauna y alarga su vida',
        image: saunaVideo1,
        bullets: ['Limpieza y sellado', 'Revisión de equipos', 'Recomendaciones de uso'],
        waText: 'Hola, quiero mantenimiento para mi sauna.',
      },
    ],
    [],
  )

  return (
    <PageShell>
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_55%_at_50%_0%,rgba(0,123,255,0.14),transparent_60%),linear-gradient(to_bottom,#ffffff,#f8fafc)]"
        />

        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-22">
          <img src={saunaHero} alt="" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.95),rgba(255,255,255,0.74),rgba(255,255,255,1))]" />
        </div>

        <Container>
          <div className="relative">
            <SectionHeading
              eyebrow="Saunas"
              title="Saunas para hogar y proyectos"
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

                  <button
                    type="button"
                    className="relative block h-44 w-full overflow-hidden text-left"
                    onClick={() => setActiveImage(c.image)}
                    aria-label={`Ver imagen completa: ${c.title}`}
                  >
                    <img
                      src={c.image}
                      alt={c.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                      loading="lazy"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,255,255,0.98),rgba(255,255,255,0.22),transparent)]" />
                  </button>

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
                  Diseños reales
                </div>
                <h3 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Inspiración para tu sauna
                </h3>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-slate-950/70 sm:text-base">
                  Ideas de saunas normales, bonitas y funcionales. Te asesoramos con medidas, ventilación, materiales y acabados.
                </p>
                <div className="mt-7">
                  <a
                    href={`${waBase}${encodeURIComponent('Hola, quiero cotizar un sauna. ¿Me asesoras?')}`}
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
                    <img src={saunaVideo1} alt="" className="phone-slide" draggable={false} />
                    <img src={saunaVideo2} alt="" className="phone-slide" draggable={false} />
                    <img src={saunaVideo3} alt="" className="phone-slide" draggable={false} />
                  </div>
                </Iphone>
              </div>
            </section>
          </div>
        </Container>
      </section>

      {activeImage && (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-black/70 px-4 py-10 backdrop-blur-[2px]"
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setActiveImage(null)
          }}
        >
          <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute right-4 top-4 z-10 inline-flex items-center justify-center rounded-full border border-black/10 bg-white/90 px-4 py-2 text-xs font-semibold text-slate-950 shadow-sm transition hover:bg-white"
            >
              Cerrar
            </button>
            <div className="h-[82dvh] bg-black">
              <img src={activeImage} alt="" className="h-full w-full object-contain" draggable={false} />
            </div>
          </div>
        </div>
      )}
    </PageShell>
  )
}
