import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '../shared/Button'
import { Container } from '../shared/Container'
import { useEffect, useMemo, useRef, useState } from 'react'
import heroChatGpt from '../assets/ChatGPT Image 13 may 2026, 08_28_13 p.m..png'
import jacuzziCover from '../assets/jacuzzisss.png'
import proyecto2 from '../assets/Proyectos2.png'
import saunaImg from '../assets/Sauna-ai.png'

export function Hero() {
  const { scrollY } = useScroll()
  const blobY = useTransform(scrollY, [0, 600], [0, 90])
  const heroImgY = useTransform(scrollY, [0, 900], [0, 28])
  const heroImgScale = useTransform(scrollY, [0, 900], [1.02, 1.08])

  const heroRef = useRef<HTMLElement | null>(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })

  const slides = useMemo(
    () => [
      {
        src: jacuzziCover,
        alt: 'Jacuzzi',
        label: 'Jacuzzi',
      },
      {
        src: proyecto2,
        alt: 'Piscina',
        label: 'Piscina',
      },
      {
        src: saunaImg,
        alt: 'Sauna',
        label: 'Sauna',
      },
    ],
    [],
  )

  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState<1 | -1>(1)

  useEffect(() => {
    const id = window.setInterval(() => {
      setDir(1)
      setIndex((i) => (i + 1) % slides.length)
    }, 5500)
    return () => window.clearInterval(id)
  }, [slides.length])

  useEffect(() => {
    const el = heroRef.current
    if (!el) return

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = (e.clientX - cx) / r.width
      const dy = (e.clientY - cy) / r.height
      const rx = Math.max(-1, Math.min(1, -dy)) * 5
      const ry = Math.max(-1, Math.min(1, dx)) * 7
      setTilt({ rx, ry })
    }

    const onLeave = () => setTilt({ rx: 0, ry: 0 })

    el.addEventListener('pointermove', onMove, { passive: true })
    el.addEventListener('pointerleave', onLeave, { passive: true })
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  const prev = () => {
    setDir(-1)
    setIndex((i) => (i - 1 + slides.length) % slides.length)
  }
  const next = () => {
    setDir(1)
    setIndex((i) => (i + 1) % slides.length)
  }

  const content = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative overflow-hidden pt-10 sm:pt-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_55%_at_50%_0%,rgba(25,181,254,0.18),transparent_55%),radial-gradient(60%_55%_at_0%_35%,rgba(0,123,255,0.12),transparent_62%),radial-gradient(55%_55%_at_100%_30%,rgba(0,27,91,0.10),transparent_60%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <img
          src={heroChatGpt}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-55 [filter:saturate(1.12)_contrast(1.06)]"
          draggable={false}
        />
        <div className="absolute inset-0 bg-white/40 [mask-image:linear-gradient(to_bottom,black,transparent_62%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,255,255,0.35),transparent_55%)]" />
      </div>
      <Container>
        <div className="relative z-10 grid min-h-[calc(100dvh-72px)] items-center gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:gap-12">
          <motion.div
            style={{ transformOrigin: 'right center' }}
            initial={{ opacity: 0, x: 64, rotate: 2.5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } },
              }}
            >
            <motion.div variants={content}>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-3 py-1 text-xs font-semibold text-slate-950 shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset] backdrop-blur">
                <Sparkles className="h-4 w-4 text-[#007BFF]" />
                Diseño & construcción premium
              </div>
            </motion.div>

            <motion.h1
              variants={content}
              className="mt-5 text-balance text-5xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl"
            >
              <span className="relative inline-block">
                Jacuzzis, Piscinas y Saunas
              </span>{' '}
              <motion.span
                className="bg-gradient-to-r from-[#001B5B] via-[#007BFF] to-[#19B5FE] bg-clip-text text-transparent"
                animate={{ backgroundPositionX: ['0%', '100%', '0%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                style={{ backgroundSize: '200% 100%' }}
              >
                a medida
              </motion.span>
              <span className="text-[#001B5B]/80">.</span>
            </motion.h1>

            <motion.div variants={content} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#contacto">
                Solicitar Cotización{' '}
                <ArrowRight className="h-4 w-4 opacity-80 transition group-hover:translate-x-0.5" />
              </Button>
            </motion.div>
            </motion.div>
          </motion.div>

          <div className="relative">
            <motion.div style={{ y: blobY }} className="absolute -inset-10 z-0">
              <motion.div
                className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(25,181,254,0.30),transparent_58%)] blur-3xl"
                animate={{ scale: [1, 1.06, 1], opacity: [0.75, 1, 0.75] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute left-[16%] top-[22%] h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(0,123,255,0.22),transparent_60%)] blur-3xl"
                animate={{ scale: [1.02, 1, 1.02], opacity: [0.7, 0.95, 0.7] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -56, rotate: -2.2, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
              transition={{ duration: 0.95, ease: [0.2, 0.8, 0.2, 1], delay: 0.12 }}
              className="relative z-10 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_40px_120px_rgba(0,0,0,0.12)]"
              style={{
                transformStyle: 'preserve-3d',
                transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                transition: 'transform 220ms cubic-bezier(0.2,0.8,0.2,1)',
              }}
            >
              <div className="relative aspect-[16/12] sm:aspect-[16/11]">
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.img
                    key={index}
                    style={{ y: heroImgY, scale: heroImgScale }}
                    src={slides[index].src}
                    alt={slides[index].alt}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="eager"
                    draggable={false}
                    initial={{ opacity: 0, x: dir * 22, scale: 1.02 }}
                    animate={{ opacity: 1, x: 0, scale: 1.02 }}
                    exit={{ opacity: 0, x: dir * -22 }}
                    transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_20%_25%,rgba(25,181,254,0.12),transparent_60%),linear-gradient(to_bottom,rgba(0,0,0,0.10),transparent_62%)]" />
                <div className="absolute inset-0 water-sheen opacity-45" />
                <motion.div
                  className="absolute inset-x-5 bottom-5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur">
                    {slides[index].label}
                  </div>
                </motion.div>

                <div className="absolute right-4 top-4 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Imagen anterior"
                    className="grid h-10 w-10 place-items-center rounded-2xl border border-white/15 bg-black/35 text-white/90 backdrop-blur transition hover:bg-black/45 sm:h-11 sm:w-11"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Siguiente imagen"
                    className="grid h-10 w-10 place-items-center rounded-2xl border border-white/15 bg-black/35 text-white/90 backdrop-blur transition hover:bg-black/45 sm:h-11 sm:w-11"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        setDir(i > index ? 1 : -1)
                        setIndex(i)
                      }}
                      aria-label={`Ir a imagen ${i + 1}`}
                      className={`h-1.5 rounded-full transition ${
                        i === index
                          ? 'w-9 bg-[#19B5FE] shadow-[0_0_18px_rgba(25,181,254,0.55)]'
                          : 'w-5 bg-white/35 hover:bg-white/55'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-[-2px] h-24 opacity-70 [mask-image:linear-gradient(to_top,black,transparent)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="absolute inset-0 water-waves" />
      </motion.div>
    </section>
  )
}
