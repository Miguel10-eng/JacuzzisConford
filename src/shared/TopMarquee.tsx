import { Droplets } from 'lucide-react'

const items = [
  'Asesorías',
  'Trabajos impecables',
  'Venta de equipos',
  'Fabricación de jacuzzi',
  'Mantenimiento',
]

export function TopMarquee() {
  const row = items.flatMap((t) => [t, '•'])

  return (
    <div className="relative z-50 border-b border-[#007BFF]/15 bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_80%_at_50%_0%,rgba(25,181,254,0.18),transparent_60%),linear-gradient(to_right,rgba(0,123,255,0.08),transparent,rgba(25,181,254,0.08))]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 water-sheen opacity-35" />
      <div className="relative overflow-hidden py-2">
        <div className="marquee">
          <div className="marquee__track">
            {[0, 1].map((k) => (
              <div key={k} className="marquee__segment">
                <span className="inline-flex items-center gap-3 pr-6 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#001B5B]">
                  <Droplets className="h-3.5 w-3.5 shrink-0 text-[#007BFF]" />
                  {row.map((x, i) => (
                    <span key={`${k}-${i}`} className={x === '•' ? 'text-[#19B5FE]' : ''}>
                      {x}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
