import { ArrowRight, PhoneCall } from 'lucide-react'
import { Container } from '../shared/Container'
import { Button } from '../shared/Button'
import { Reveal } from '../shared/Reveal'
import { WhatsAppIcon } from '../shared/WhatsAppIcon'

export function FinalCta() {
  const waHref = `https://wa.me/573144861821?text=${encodeURIComponent('Hola, quiero una cotización / asesoría.')}`
  const telHref = 'tel:+573134926430'
  const mapsUrl = 'https://maps.app.goo.gl/hccWk7behaiU9zkW6'
  const mapsEmbedSrc = `https://www.google.com/maps?output=embed&hl=es&q=${encodeURIComponent('JacuzzisConford Piscinas')}`

  return (
    <section id="contacto" className="relative overflow-hidden py-16 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#f7fbff,#ffffff_55%)]"
      />

      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-white px-6 py-10 shadow-[0_26px_90px_rgba(0,123,255,0.14)] sm:px-10 sm:py-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(25,181,254,0.14),transparent_60%)] blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-28 -bottom-28 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,123,255,0.10),transparent_60%)] blur-2xl"
            />

            <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-900/70">
                  <PhoneCall className="h-4 w-4 text-[#007BFF]" />
                  Respuesta rápida · Asesoría premium
                </div>
                <h3 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Lleva tu zona húmeda al siguiente nivel.
                </h3>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-slate-950/70 sm:text-base">
                  Agenda una asesoría. Te ayudamos a definir diseño, presupuesto y tiempos con un estándar de lujo consistente.
                </p>

                <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                  <Button href={waHref} className="px-6" target="_blank" rel="noreferrer">
                    WhatsApp <WhatsAppIcon className="h-4 w-4 opacity-90" />
                  </Button>
                  <Button variant="secondary" href={telHref}>
                    Llamar <ArrowRight className="h-4 w-4 opacity-80 transition group-hover:translate-x-0.5" />
                  </Button>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_22px_80px_rgba(0,123,255,0.10)]">
                <div className="flex items-center justify-between gap-3 px-5 py-3 text-sm">
                  <div className="font-semibold text-slate-950">Ubicación</div>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-[#007BFF] transition hover:text-[#19B5FE]"
                  >
                    Abrir mapa
                  </a>
                </div>
                <div className="h-[220px] w-full bg-white sm:h-[260px]">
                  <iframe
                    title="Google Maps"
                    src={mapsEmbedSrc}
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
