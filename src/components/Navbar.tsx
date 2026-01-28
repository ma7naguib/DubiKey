'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Key } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'DubiKey Score', href: '/calculator' },
  { name: 'Investors', href: '/investors' },
  { name: 'Brokers', href: '/brokers' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-midnight-950/80 backdrop-blur-xl border-b border-gold-500/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <Key className="w-5 h-5 text-midnight-950" />
            </div>
            <span className="text-2xl font-bold">
              <span className="text-gold-gradient">Dubi</span>
              <span className="text-white">Key</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-midnight-300 hover:text-gold-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/calculator"
              className="btn-gold text-sm"
            >
              Calculate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-midnight-300 hover:text-gold-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300',
            mobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          )}
        >
          <div className="space-y-2 pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-base font-medium text-midnight-300 hover:text-gold-500 hover:bg-midnight-800/50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/calculator"
              className="block mx-4 mt-4 btn-gold text-center text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Calculate Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
