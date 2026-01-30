import { Key, Mail, Bell } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DubiKey - Coming Soon',
  description: 'DubiKey Digital Solutions - Launching Soon.'
}

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-midnight-900 flex items-center justify-center px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-midnight-900 via-midnight-800 to-midnight-900" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-xl">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
            <Key className="w-6 h-6 text-midnight-900" />
          </div>
          <span className="text-3xl font-bold text-white">
            Dubi<span className="text-gold-500">Key</span>
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Coming <span className="text-gold-500">Soon</span>
        </h1>

        {/* Description */}
        <p className="text-xl text-midnight-300 mb-8">
          Smart digital tools for Dubai property investors.
          <br />
          We&apos;re putting the finishing touches on something great.
        </p>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="p-4 rounded-xl bg-midnight-800/50 border border-midnight-700">
            <div className="text-gold-500 font-semibold mb-1">Property Tools</div>
            <div className="text-midnight-400 text-sm">Smart calculators & analysis</div>
          </div>
          <div className="p-4 rounded-xl bg-midnight-800/50 border border-midnight-700">
            <div className="text-gold-500 font-semibold mb-1">Free Guides</div>
            <div className="text-midnight-400 text-sm">Educational content</div>
          </div>
          <div className="p-4 rounded-xl bg-midnight-800/50 border border-midnight-700">
            <div className="text-gold-500 font-semibold mb-1">Expert Insights</div>
            <div className="text-midnight-400 text-sm">Market knowledge</div>
          </div>
        </div>

        {/* Contact */}
        <div className="flex items-center justify-center gap-2 text-midnight-400">
          <Mail className="w-4 h-4" />
          <a href="mailto:hello@dubikey.com" className="hover:text-gold-500 transition-colors">
            hello@dubikey.com
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-midnight-600 text-sm">
          © {new Date().getFullYear()} DubiKey Digital Solutions. All rights reserved.
        </p>
      </div>
    </main>
  )
}