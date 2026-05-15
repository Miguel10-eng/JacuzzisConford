import { motion } from 'framer-motion'
import { Award, ShieldCheck, Timer } from 'lucide-react'
import logoPng from '../assets/JacuzzisConfordlogo.png'
import { Container } from '../shared/Container'

export function AboutUs() {
  return (
    <section id="nosotros" className="relative -mt-10 overflow-hidden pb-44 pt-32 sm:-mt-14 sm:pb-56 sm:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-white" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 right-0 bg-[linear-gradient(to_bottom,#ffffff,rgba(248,250,252,0.92)_50%,#ffffff)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_52%,rgba(0,123,255,0.10),transparent_62%),radial-gradient(70%_60%_at_10%_45%,rgba(25,181,254,0.10),transparent_64%)] opacity-80"
      />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18, rotateX: 6, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '0px 0px -120px 0px' }}
          transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          className="relative overflow-hidden rounded-[32px] border border-[#007BFF]/14 bg-white shadow-[0_26px_110px_rgba(0,123,255,0.12)] will-change-transform"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_80%_at_0%_0%,rgba(25,181,254,0.16),transparent_55%),radial-gradient(70%_70%_at_100%_20%,rgba(0,123,255,0.10),transparent_60%)]"
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.65),transparent)] opacity-0"
            animate={{ x: ['-25%', '240%'], opacity: [0, 0.55, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#007BFF]/18 bg-[#007BFF]/[0.05] px-3 py-1 text-xs font-semibold text-slate-900/70">
                Acerca de nosotros
              </div>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                JacuzzisConford
              </h2>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-slate-950/70 sm:text-base">
                Somos una empresa con más de <span className="font-semibold text-slate-950">20 años de experiencia</span> en la
                construcción de piscinas, jacuzzis y saunas. Acompañamos tu proyecto desde el diseño hasta la instalación y el
                soporte.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  { title: 'Experiencia', desc: 'Más de 20 años', Icon: Timer },
                  { title: 'Calidad', desc: 'Obra y acabados', Icon: Award },
                  { title: 'Respaldo', desc: 'Soporte y garantía', Icon: ShieldCheck },
                ].map((i) => (
                  <motion.div
                    key={i.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '0px 0px -120px 0px' }}
                    transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-black/10 bg-white px-4 py-4 shadow-[0_18px_55px_rgba(0,123,255,0.08)] will-change-transform"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-2xl border border-[#007BFF]/14 bg-white">
                        <i.Icon className="h-5 w-5 text-[#007BFF]" />
                      </span>
                      <div>
                        <div className="text-xs font-semibold text-slate-950/70">{i.title}</div>
                        <div className="mt-0.5 text-sm font-semibold text-slate-950">{i.desc}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
              <div className="mt-6 text-sm font-semibold text-slate-950">Qué hacemos</div>
              <div className="mt-3 grid gap-2 text-sm text-slate-950/75 sm:grid-cols-2">
                {[
                  'Diseño y construcción a medida',
                  'Instalación y puesta a punto',
                  'Venta de equipos y repuestos',
                  'Mantenimiento y soporte',
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#007BFF]" />
                    <span className="leading-relaxed">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -120px 0px' }}
                transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1], delay: 0.05 }}
                className="rounded-3xl border border-[#007BFF]/14 bg-white p-8 shadow-[0_26px_90px_rgba(0,123,255,0.10)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-xs font-semibold uppercase tracking-widest text-slate-950/60">Empresa</div>
                  <motion.div
                    className="h-2 w-2 rounded-full bg-[#19B5FE] shadow-[0_0_22px_rgba(25,181,254,0.55)]"
                    animate={{ opacity: [0.35, 1, 0.35] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>
                <div className="mt-6 flex items-center justify-center">
                  <img src={logoPng} alt="JacuzzisConford" className="h-12 w-auto sm:h-14" draggable={false} />
                </div>
                <div className="mt-6 text-center text-sm font-semibold text-slate-950">Construcción & Equipos</div>
                <div className="mt-2 text-center text-sm leading-relaxed text-slate-950/70">
                  Piscinas · Jacuzzis · Saunas · Accesorios
                </div>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
                <div className="mt-6 rounded-2xl border border-black/10 bg-[#007BFF]/[0.04] p-4 text-sm text-slate-950/75">
                  Trabajamos con enfoque profesional, materiales adecuados y una ejecución limpia, para resultados durables y
                  presentables.
                </div>
              </motion.div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(25,181,254,0.20),transparent_60%)] blur-2xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 -left-20 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,123,255,0.14),transparent_60%)] blur-2xl"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
