import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ComingSoon from '@/components/ComingSoon'
import { GraduationCap } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Brokers | DubiKey',
  description: 'Comprehensive training programs and resources to launch and grow your real estate career in Dubai.',
}

export default function BrokersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <ComingSoon 
          title="For Brokers"
          description="Comprehensive training programs, courses, and resources to launch and grow your real estate career in Dubai. Our broker academy is coming soon."
          icon={<GraduationCap className="w-10 h-10 text-gold-500" />}
        />
      </div>
      <Footer />
    </main>
  )
}
