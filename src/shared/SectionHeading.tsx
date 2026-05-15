import { Reveal } from './Reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-3 py-1 text-xs font-medium text-sky-700 shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset] backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_20px_rgba(25,181,254,0.55)]" />
          {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-4 text-pretty text-sm leading-relaxed text-[var(--app-muted)] sm:text-base">
          {description}
        </p>
      </Reveal>
    </div>
  )
}
