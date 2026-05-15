import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logoPng from '../assets/JacuzzisConfordlogo.png'
import { Button } from './Button'
import { Container } from './Container'

const navItems = [
  { to: '/piscinas', label: 'Piscinas' },
  { to: '/saunas', label: 'Sauna' },
  { to: '/equipos', label: 'Venta de equipos' },
] as const

function NavItem({ to, label, onClick }: { to: string; label: string; onClick?: () => void }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          'group relative text-[15px] font-semibold text-slate-950 transition hover:text-black',
          isActive ? 'text-black' : '',
        ].join(' ')
      }
    >
      {label}
      <span className="pointer-events-none absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-[#007BFF] transition-all duration-300 group-hover:w-full" />
    </NavLink>
  )
}

export function Navbar() {
  const { scrollY, scrollYProgress } = useScroll()
  const y = useTransform(scrollY, [0, 120], [0, -6])
  const opacity = useTransform(scrollY, [0, 140], [1, 1])

  const [open, setOpen] = useState(false)
  const loc = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [loc.pathname])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [loc.pathname])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const nav = useMemo(() => navItems, [])
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <motion.header
      style={{ y, opacity }}
      className="sticky top-0 z-40 border-b border-black/10 bg-white/95 backdrop-blur-xl"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-[#001B5B] via-[#007BFF] to-[#19B5FE]"
        style={{ scaleX: scrollYProgress }}
      />
      <Container>
        <div className="flex h-[72px] items-center justify-between">
          <Link to="/" className="group inline-flex items-center" onClick={scrollToTop}>
            <img
              src={logoPng}
              alt="JacuzzisConford"
              draggable={false}
              className="h-10 w-auto sm:h-11 md:h-12 [filter:drop-shadow(0_18px_35px_rgba(0,123,255,0.28))]"
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <NavItem to="/" label="Inicio" onClick={scrollToTop} />
            <NavItem to="/jacuzzis" label="Jacuzzis" onClick={scrollToTop} />
            {nav.map((n) => (
              <NavItem key={n.to} to={n.to} label={n.label} onClick={scrollToTop} />
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button variant="secondary" href="/#proyectos">
              Ver Proyectos <ArrowRight className="h-4 w-4 opacity-80 transition group-hover:translate-x-0.5" />
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03] text-slate-800 backdrop-blur transition hover:bg-black/[0.05] md:hidden"
            aria-label="Abrir menú"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </Container>

      {open && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-40 bg-slate-950/25 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="fixed inset-x-4 top-4 z-50 rounded-2xl border border-black/10 bg-white/90 p-5 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-900">Menú</span>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03] text-slate-800 transition hover:bg-black/[0.05]"
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 grid gap-3">
              <Link
                to="/"
                onClick={scrollToTop}
                className="rounded-xl border border-black/10 bg-black/[0.03] px-4 py-3 text-sm font-semibold text-slate-900"
              >
                Inicio
              </Link>
              <Link
                to="/jacuzzis"
                onClick={scrollToTop}
                className="rounded-xl border border-black/10 bg-black/[0.03] px-4 py-3 text-sm font-semibold text-slate-900"
              >
                Jacuzzis
              </Link>
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={scrollToTop}
                  className="rounded-xl border border-black/10 bg-black/[0.03] px-4 py-3 text-sm font-semibold text-slate-900"
                >
                  {n.label}
                </Link>
              ))}

              <div className="mt-2 grid gap-3">
                <Button variant="secondary" href="/#proyectos">
                  Ver Proyectos
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  )
}

