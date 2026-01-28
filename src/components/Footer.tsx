import Link from 'next/link'
import { Key } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-midnight-950 border-t border-midnight-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
              <Key className="w-4 h-4 text-midnight-950" />
            </div>
            <span className="text-lg font-bold text-white">
              Dubi<span className="text-gold-500">Key</span>
            </span>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy" className="text-midnight-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-midnight-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="text-midnight-400 hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-midnight-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-midnight-500">
            <p>© {new Date().getFullYear()} DubiKey. All rights reserved.</p>
            <p>Educational tool — not investment advice.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
