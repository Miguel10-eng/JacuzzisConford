import { WhatsAppIcon } from './WhatsAppIcon'

const WHATSAPP_E164 = '573144861821'

export function WhatsAppFloating() {
  const href = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent('Hola, quiero una cotización / asesoría.')}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="group fixed bottom-5 right-5 z-[60] grid h-14 w-14 place-items-center rounded-2xl border border-emerald-400/35 bg-emerald-500 text-white shadow-[0_26px_90px_rgba(16,185,129,0.35)] transition hover:-translate-y-1 hover:border-emerald-300/60 hover:shadow-[0_34px_120px_rgba(16,185,129,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(0,0,0,0.14),transparent_60%)] opacity-90"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-1 rounded-[1.2rem] bg-emerald-400/30 blur-xl opacity-70 transition group-hover:opacity-100"
      />
      <WhatsAppIcon className="relative h-6 w-6 text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.22)]" />
    </a>
  )
}
