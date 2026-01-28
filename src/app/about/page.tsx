import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ComingSoon from '@/components/ComingSoon'
import { Users } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | DubiKey',
  description: 'Learn about DubiKey - your trusted partner for Dubai real estate insights and training.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <ComingSoon 
          title="About DubiKey"
          description="Learn about our mission to empower investors and brokers with real, actionable insights from the Dubai real estate market. Our full story is coming soon."
          icon={<Users className="w-10 h-10 text-gold-500" />}
        />
      </div>
      <Footer />
    </main>
  )
}
