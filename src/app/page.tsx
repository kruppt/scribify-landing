import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import TargetAudience from '@/components/TargetAudience'
import Features from '@/components/Features'
import EasySetup from '@/components/EasySetup'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <TargetAudience />
      <Features />
      <EasySetup />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}