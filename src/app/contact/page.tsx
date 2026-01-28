import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | DubiKey',
  description: 'Get in touch with DubiKey for consultations, support, or inquiries about Dubai real estate.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
              Get in <span className="text-gold-gradient">Touch</span>
            </h1>
            <p className="text-midnight-300 text-lg">
              Have questions? We&apos;re here to help you make smarter property decisions.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a 
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="card-dark rounded-2xl p-8 hover:gold-glow transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-midnight-400 mb-4">Quick responses, usually within hours</p>
              <span className="text-gold-500 font-medium">Chat with us →</span>
            </a>

            <a 
              href="mailto:support@dubikey.com"
              className="card-dark rounded-2xl p-8 hover:gold-glow transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-midnight-400 mb-4">support@dubikey.com</p>
              <span className="text-gold-500 font-medium">Send email →</span>
            </a>
          </div>

          {/* Info Box */}
          <div className="card-dark rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-2 text-midnight-400 mb-4">
              <MapPin className="w-5 h-5 text-gold-500" />
              <span>Dubai, United Arab Emirates</span>
            </div>
            <p className="text-midnight-300">
              DubiKey provides educational content and tools for Dubai real estate. 
              For professional investment advice, please consult with licensed advisors.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
