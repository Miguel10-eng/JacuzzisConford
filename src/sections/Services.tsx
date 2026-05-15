import {
  Bath,
  Heater,
  Hammer,
  Settings,
  Sparkles,
  Waves,
} from 'lucide-react'
import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'
import { Reveal } from '../shared/Reveal'
import { TiltCard } from '../shared/TiltCard'
import { motion } from 'framer-motion'
import { useAnimeHover } from '../shared/useAnimeHover'
import { useAnimeInView } from '../shared/useAnimeInView'

const services = [
  {
    title: 'Jacuzzis',
    desc: 'Diseño, construcción y personalización. Hidromasaje, iluminación y acabados premium.',
    Icon: Bath,
  },
  {
    title: 'Piscinas',
    desc: 'Piscinas a medida con look arquitectónico, iluminación y sistemas hidráulicos eficientes.',
    Icon: Waves,
  },
  {
    title: 'Saunas',
    desc: 'Saunas modernos para hogar u hotel. Confort térmico, ventilación y diseño minimal.',
    Icon: Heater,
  },
  {
    title: 'Venta de equipos',
    desc: 'Bombas, filtros, calefacción, jets, iluminación y accesorios seleccionados.',
    Icon: Sparkles,
  },
  {
    title: 'Reparaciones',
    desc: 'Diagnóstico y solución: fugas, tuberías, bombas, filtración, jets y recirculación.',
    Icon: Hammer,
  },
  {
    title: 'Mantenimientos',
    desc: 'Planes preventivos, tratamiento de agua y optimización de equipos para máximo rendimiento.',
    Icon: Settings,
  },
]

export function Services() {
  useAnimeHover('[data-anime-service-card]')
  useAnimeInView('[data-anime-enter]')

  return (
    <section id="servicios" className="relative overflow-hidden pb-44 pt-16 sm:pb-56 sm:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-white"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(85%_60%_at_50%_0%,rgba(25,181,254,0.26),transparent_56%),radial-gradient(65%_55%_at_0%_35%,rgba(0,123,255,0.18),transparent_64%),radial-gradient(60%_55%_at_100%_30%,rgba(0,27,91,0.07),transparent_62%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[linear-gradient(to_bottom,rgba(0,123,255,0.10),transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-56 opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent)]"
      >
        <div className="absolute inset-0 water-waves" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(25,181,254,0.22),transparent_60%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,123,255,0.18),transparent_60%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(to_top,#ffffff,rgba(255,255,255,0.96),transparent)]"
      />
      <Container>
        <div className="relative">
          <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div className="lg:sticky lg:top-24">
              <SectionHeading
                eyebrow="Servicios"
                title="Diseño, instalación y soporte premium"
                description="Jacuzzis, piscinas y saunas. También venta de equipos, reparaciones y mantenimientos con respuesta rápida."
              />

              <Reveal delay={0.12}>
                <div className="mt-8 overflow-hidden rounded-3xl border border-[#007BFF]/15 bg-white shadow-[0_24px_80px_rgba(0,123,255,0.10)]">
                  <div className="relative p-6">
                    <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_10%_10%,rgba(25,181,254,0.18),transparent_58%),radial-gradient(70%_60%_at_90%_0%,rgba(0,123,255,0.14),transparent_62%)]" />
                    <div className="relative grid gap-4">
                      <div className="text-xs font-semibold uppercase tracking-widest text-slate-950/70">
                        Lo que obtienes
                      </div>
                      <div className="grid gap-3 text-sm text-slate-950/85">
                        {[
                          'Asesoría y diseño a medida',
                          'Instalación y puesta a punto',
                          'Optimización de equipos y agua',
                          'Soporte y mantenimiento preventivo',
                        ].map((t) => (
                          <div key={t} className="flex items-start gap-3">
                            <span className="mt-1.5 h-2 w-2 rounded-full bg-[#007BFF] shadow-[0_0_18px_rgba(0,123,255,0.35)]" />
                            <span>{t}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { k: 'Entrega', v: 'Llave en mano' },
                          { k: 'Enfoque', v: 'Premium' },
                          { k: 'Soporte', v: 'Continuo' },
                        ].map((s) => (
                          <div
                            key={s.k}
                            className="rounded-2xl border border-[#007BFF]/15 bg-white/90 p-3 text-center shadow-[0_18px_55px_rgba(0,123,255,0.08)]"
                          >
                            <div className="text-xs font-extrabold text-slate-950">{s.k}</div>
                            <div className="mt-1 text-[11px] text-slate-950/75">{s.v}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((s, idx) => (
                <Reveal key={s.title} delay={0.03 * idx}>
                  <TiltCard
                    animeEnter
                    animeFrom={idx % 2 === 0 ? 'left' : 'right'}
                    className="group relative h-full overflow-hidden rounded-3xl border border-[#007BFF]/15 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.98),rgba(248,250,252,0.92))] p-6 shadow-[0_24px_80px_rgba(0,123,255,0.12)] hover:border-[#19B5FE]/30 hover:shadow-[0_36px_140px_rgba(0,123,255,0.22)]"
                  >
                    <div data-anime-service-card className="absolute inset-0 opacity-0" />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#001B5B] via-[#007BFF] to-[#19B5FE] opacity-70 transition duration-500 group-hover:opacity-100" />
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 [background:radial-gradient(900px_circle_at_10%_10%,rgba(25,181,254,0.18),transparent_55%)]" />
                    <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,123,255,0.14),transparent_60%)] blur-2xl transition duration-700 group-hover:scale-110" />
                    <motion.div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.55),transparent)] opacity-0 group-hover:opacity-70"
                      animate={{ x: ['-25%', '240%'] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-28 -left-24 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(25,181,254,0.28),transparent_62%)] blur-2xl"
                      animate={{ x: [0, 18, 0], y: [0, -12, 0], scale: [1, 1.05, 1] }}
                      transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.12 }}
                    />
                    <motion.div
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-28 -right-28 h-60 w-60 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,123,255,0.22),transparent_62%)] blur-2xl"
                      animate={{ x: [0, -14, 0], y: [0, 10, 0], scale: [1.02, 1, 1.02] }}
                      transition={{ duration: 7.4, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.1 }}
                    />
                    <div
                      data-anime-glow
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-0 [background:radial-gradient(800px_circle_at_40%_20%,rgba(25,181,254,0.22),transparent_60%)]"
                    />

                    <div className="relative">
                      <div className="flex items-center justify-between gap-3">
                        <motion.div
                          data-anime-icon
                          className="grid h-12 w-12 place-items-center rounded-2xl border border-[#007BFF]/14 bg-white shadow-[0_18px_55px_rgba(0,123,255,0.10)] transition duration-500 group-hover:border-[#19B5FE]/35 group-hover:shadow-[0_22px_75px_rgba(0,123,255,0.16)]"
                          animate={{ y: [0, -3, 0], rotate: [0, 1.5, 0] }}
                          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.15 }}
                          style={{ transform: 'translateZ(32px)' }}
                        >
                          <s.Icon className="h-5 w-5 text-[#007BFF] transition duration-500 group-hover:text-[#19B5FE]" />
                        </motion.div>
                        <div
                          className="h-6 w-6 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(25,181,254,0.55),rgba(0,123,255,0.16))] opacity-70 shadow-[0_0_24px_rgba(0,123,255,0.22)] transition duration-500 group-hover:opacity-100"
                          style={{ transform: 'translateZ(18px)' }}
                        />
                      </div>

                      <h3 className="mt-5 text-base font-semibold tracking-tight text-slate-950" style={{ transform: 'translateZ(20px)' }}>
                        {s.title}
                      </h3>
                      <div
                        data-anime-underline
                        className="mt-2 h-0.5 w-10 rounded-full bg-gradient-to-r from-[#007BFF] to-[#19B5FE] opacity-80 transition duration-500 group-hover:w-16 group-hover:opacity-100"
                        style={{ transform: 'translateZ(18px)' }}
                      />

                      <p className="mt-4 text-sm leading-relaxed text-slate-950/80" style={{ transform: 'translateZ(14px)' }}>
                        {s.desc}
                      </p>

                      <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
                      <div className="mt-4 text-xs font-semibold text-slate-950/70" style={{ transform: 'translateZ(12px)' }}>
                        Movimiento · Glow · Hover divertido
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
