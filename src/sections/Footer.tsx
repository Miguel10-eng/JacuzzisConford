import { Mail, MapPin, PhoneCall } from 'lucide-react'
import logoPng from '../assets/JacuzzisConfordlogo.png'
import { Container } from '../shared/Container'
import { WhatsAppIcon } from '../shared/WhatsAppIcon'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.25.2 2.25.2v2.46h-1.27c-1.25 0-1.64.78-1.64 1.58V12h2.8l-.45 2.89h-2.35v6.99A10 10 0 0 0 22 12Z"
      />
    </svg>
  )
}

const WHATSAPP_E164 = '573144861821'
const TEL_E164 = '573134926430'
const MAPS_URL = 'https://maps.app.goo.gl/hccWk7behaiU9zkW6'
const FACEBOOK_URL = 'https://www.facebook.com/jacuzzicocinas.piscinas'
const TIKTOK_URL = 'https://www.tiktok.com/@jacuzzisypiscinas_'

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M16.6 5.82a4.63 4.63 0 0 0 2.67 1.16v2.27a6.9 6.9 0 0 1-2.67-.85v6.35a6.38 6.38 0 1 1-6.38-6.38c.25 0 .5.02.75.05v2.32a3.9 3.9 0 0 0-.75-.08 3.96 3.96 0 1 0 3.96 3.96V2.5h2.42c.05 1.3.58 2.55 1.5 3.32Z"
      />
    </svg>
  )
}

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#nosotros', label: 'Acerca de nosotros' },
  { href: '#resenas', label: 'Reseñas' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <Container>
        <div className="relative grid gap-10 border-t border-white/10 py-16 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-4">
              <img
                src={logoPng}
                alt="JacuzzisConford"
                draggable={false}
                className="h-12 w-auto [filter:drop-shadow(0_18px_45px_rgba(0,123,255,0.30))]"
              />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Diseño y construcción de jacuzzis, piscinas y zonas húmedas con un enfoque profesional, materiales adecuados y
              acabados presentables.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: WhatsAppIcon, label: 'WhatsApp', href: `https://wa.me/${WHATSAPP_E164}` },
                { Icon: PhoneCall, label: 'Llamada', href: `tel:+${TEL_E164}` },
                { Icon: Mail, label: 'Email', href: 'mailto:jacuzzicocinas@hotmail.com' },
                { Icon: FacebookIcon, label: 'Facebook', href: FACEBOOK_URL },
                { Icon: TikTokIcon, label: 'TikTok', href: TIKTOK_URL },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.label === 'WhatsApp' || s.label === 'Facebook' || s.label === 'TikTok' ? '_blank' : undefined}
                  rel={s.label === 'WhatsApp' || s.label === 'Facebook' || s.label === 'TikTok' ? 'noreferrer' : undefined}
                  aria-label={s.label}
                  className={`grid h-11 w-11 place-items-center rounded-2xl border bg-white/5 text-white/85 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] transition hover:bg-white/10 hover:text-white hover:shadow-[0_20px_70px_rgba(0,123,255,0.22)] ${
                    'border-white/12 hover:border-sky-300/40'
                  }`}
                >
                  <s.Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-3 text-sm">
            <div className="text-xs font-semibold uppercase tracking-widest text-white/55">Links</div>
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-white/75 transition hover:text-white">
                {l.label}
              </a>
            ))}
          </div>

          <div className="grid gap-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-white/55">Contacto</div>
            <div className="grid gap-3 text-sm text-white/75">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-sky-300/30 hover:bg-white/[0.07] hover:shadow-[0_22px_80px_rgba(0,123,255,0.22)]"
                aria-label="Ver ubicación en Google Maps"
              >
                <div className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 transition group-hover:border-sky-300/30">
                  <MapPin className="h-4 w-4 text-sky-300 transition group-hover:scale-110" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-semibold text-white/90">Ubicación</div>
                    <div className="text-xs font-semibold text-sky-300/90 opacity-0 transition group-hover:opacity-100">
                      Abrir mapa
                    </div>
                  </div>
                  <div className="mt-1 text-xs leading-relaxed text-white/65">Toca para ver la dirección y ruta en Google Maps.</div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-2xl border border-white/10 bg-white/5">
                  <PhoneCall className="h-4 w-4 text-sky-300" />
                </div>
                <div>
                  <div className="font-semibold text-white/90">+57 313 492 6430</div>
                  <div className="mt-1 text-white/65">Atención rápida</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-2xl border border-white/10 bg-white/5">
                  <Mail className="h-4 w-4 text-sky-300" />
                </div>
                <div>
                  <div className="font-semibold text-white/90">jacuzzicocinas@hotmail.com</div>
                  <div className="mt-1 text-white/65">Cotizaciones y soporte</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-between gap-3 border-t border-white/10 py-9 text-xs text-white/55 sm:flex-row">
          <div>© {new Date().getFullYear()} JacuzzisConford Piscinas. Todos los derechos reservados.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="transition hover:text-white">
              Política de privacidad
            </a>
            <a href="#" className="transition hover:text-white">
              Términos
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

