import Hero from '../sections/Hero.jsx'
import Services from '../sections/Services.jsx'
import Portfolio from '../sections/Portfolio.jsx'
import Compare from '../sections/Compare.jsx'
import Testimonials from '../sections/Testimonials.jsx'
import ROI from '../sections/ROI.jsx'
import Process from '../sections/Process.jsx'
import Pricing from '../sections/Pricing.jsx'
import { Tooling, Partnership, Ownership, Team, FAQ, SmashCTA } from '../sections/Misc.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Compare />
      <Testimonials />
      <ROI />
      <Tooling />
      <Process />
      <Partnership />
      <Ownership />
      <Pricing />
      <Team />
      <FAQ />
      <SmashCTA />
    </>
  )
}
