import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import TargetAudience from '@/components/TargetAudience'
import Features from '@/components/Features'
import EasySetup from '@/components/EasySetup'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

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
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </main>
  )
}