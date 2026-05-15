import type { ReactNode } from 'react'

type Props = {
  className?: string
  screenshot: ReactNode
}

export function IPhone({ className = '', screenshot }: Props) {
  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-[3.4rem] bg-[radial-gradient(60%_60%_at_50%_40%,rgba(0,123,255,0.22),transparent_70%)] blur-2xl"
      />

      <div className="relative rounded-[3.15rem] border border-black/50 bg-[#0B0F17] shadow-[0_32px_120px_rgba(0,123,255,0.22)]">
        <div className="absolute inset-0 rounded-[3.15rem] ring-1 ring-white/10" />

        <div aria-hidden="true" className="absolute left-0 top-28 h-14 w-[4px] -translate-x-[1px] rounded-full bg-white/25" />
        <div aria-hidden="true" className="absolute left-0 top-44 h-10 w-[4px] -translate-x-[1px] rounded-full bg-white/25" />
        <div aria-hidden="true" className="absolute left-0 top-56 h-10 w-[4px] -translate-x-[1px] rounded-full bg-white/25" />
        <div aria-hidden="true" className="absolute right-0 top-40 h-16 w-[4px] translate-x-[1px] rounded-full bg-white/25" />

        <div className="p-3">
          <div className="relative overflow-hidden rounded-[2.65rem] bg-black ring-1 ring-white/10">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 pt-3 text-[12px] font-semibold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
              <div className="tabular-nums tracking-tight">9:41</div>
              <div className="flex items-center gap-1.5">
                <div aria-hidden="true" className="h-2.5 w-4 rounded-[3px] border border-white/85" />
                <div aria-hidden="true" className="-ml-3 h-2.5 w-3.5 rounded-[3px] bg-white/85" />
                <div aria-hidden="true" className="h-2.5 w-4 rounded-[3px] bg-white/85" />
                <div aria-hidden="true" className="ml-0.5 h-2.5 w-6 rounded-[4px] border border-white/85 p-[1px]">
                  <div aria-hidden="true" className="h-full w-4 rounded-[3px] bg-white/95" />
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-3.5 z-20 h-8 w-[140px] -translate-x-1/2 rounded-full bg-black shadow-[0_10px_30px_rgba(0,0,0,0.55)] ring-1 ring-white/10"
            />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[21px] z-30 h-[6px] w-[44px] -translate-x-1/2 rounded-full bg-white/15"
            />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[18px] z-30 ml-[56px] h-[10px] w-[10px] -translate-x-1/2 rounded-full bg-white/12 ring-1 ring-white/10"
            />

            <div className="relative">{screenshot}</div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.45),rgba(0,0,0,0.12),transparent)]"
            />
          </div>
        </div>

        <div className="px-5 pb-5 pt-1">
          <div aria-hidden="true" className="mx-auto h-1.5 w-28 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  )
}

