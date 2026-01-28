import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-md mx-auto text-center">
          {/* 404 Number */}
          <div className="text-9xl font-bold text-gold-gradient mb-4 font-display">
            404
          </div>
          
          {/* Message */}
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-midnight-400 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="btn-gold flex items-center gap-2">
              <Home className="w-4 h-4" />
              Go Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="btn-outline flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
