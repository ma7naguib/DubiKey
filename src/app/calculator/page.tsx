import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { DubikeyCalculator } from '@/components/calculator'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DubiKey Score - Off-Plan Property Calculator | DubiKey',
  description: 'See if you can comfortably afford your Dubai off-plan property — instantly. Free risk assessment calculator for Dubai real estate investors.',
  keywords: 'Dubai property calculator, off-plan risk calculator, Dubai investment calculator, property affordability Dubai',
}

export default function CalculatorPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <DubikeyCalculator />
      </div>
      <Footer />
    </main>
  )
}