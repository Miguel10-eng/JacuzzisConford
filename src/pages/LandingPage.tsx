import { CursorGlow } from '../shared/CursorGlow'
import { TopMarquee } from '../shared/TopMarquee'
import { Navbar } from '../shared/Navbar'
import { WhatsAppFloating } from '../shared/WhatsAppFloating'
import { Hero } from '../sections/Hero'
import { Services } from '../sections/Services'
import { AboutUs } from '../sections/AboutUs'
import { Portfolio } from '../sections/Portfolio'
import { WhyUs } from '../sections/WhyUs'
import { Testimonials } from '../sections/Testimonials'
import { FinalCta } from '../sections/FinalCta'
import { Footer } from '../sections/Footer'

export function LandingPage() {
  return (
    <div className="min-h-dvh bg-[var(--app-bg)] text-[var(--app-fg)] selection:bg-sky-400/30 selection:text-[var(--app-fg)]">
      <CursorGlow />
      <TopMarquee />
      <Navbar />
      <WhatsAppFloating />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <Portfolio />
        <WhyUs />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
