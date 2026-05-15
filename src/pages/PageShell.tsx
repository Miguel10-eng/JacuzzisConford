import type { PropsWithChildren } from 'react'
import { Navbar } from '../shared/Navbar'
import { Footer } from '../sections/Footer'
import { CursorGlow } from '../shared/CursorGlow'
import { TopMarquee } from '../shared/TopMarquee'
import { WhatsAppFloating } from '../shared/WhatsAppFloating'

export function PageShell({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-dvh flex-col bg-white text-slate-950 selection:bg-sky-400/30 selection:text-slate-950">
      <CursorGlow />
      <TopMarquee />
      <Navbar />
      <WhatsAppFloating />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
