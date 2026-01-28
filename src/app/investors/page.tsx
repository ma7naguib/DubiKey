import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ComingSoon from '@/components/ComingSoon'
import { TrendingUp } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Investors | DubiKey',
  description: 'Expert insights, market analysis, and personalized consultations to maximize your Dubai real estate returns.',
}

export default function InvestorsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <ComingSoon 
          title="For Investors"
          description="Expert insights, market analysis, consultations, and our comprehensive investment guide are coming soon. Get ready to maximize your Dubai property returns."
          icon={<TrendingUp className="w-10 h-10 text-gold-500" />}
        />
      </div>
      <Footer />
    </main>
  )
}
