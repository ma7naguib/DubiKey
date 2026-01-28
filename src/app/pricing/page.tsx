import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ComingSoon from '@/components/ComingSoon'
import { CreditCard } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing | DubiKey',
  description: 'Affordable pricing plans for investors and brokers. DubiKey Score calculator is free forever.',
}

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <ComingSoon 
          title="Pricing"
          description="Our pricing plans for premium features, consultations, and broker training courses are coming soon. The DubiKey Score calculator will always be free."
          icon={<CreditCard className="w-10 h-10 text-gold-500" />}
        />
      </div>
      <Footer />
    </main>
  )
}
