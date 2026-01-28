'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Key, Calculator } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/calculator', label: 'Calculator' },
    { href: '/learn', label: 'Learn' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight-950/80 backdrop-blur-lg border-b border-midnight-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
              <Key className="w-5 h-5 text-midnight-950" />
            </div>
            <span className="text-xl font-bold text-white">
              Dubi<span className="text-gold-500">Key</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-midnight-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/calculator"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 text-midnight-950 font-semibold rounded-lg hover:bg-gold-400 transition-colors"
            >
              <Calculator className="w-4 h-4" />
              Try Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-midnight-300 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          isOpen ? "max-h-64 pb-4" : "max-h-0"
        )}>
          <div className="flex flex-col gap-2 pt-4 border-t border-midnight-800">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-midnight-300 hover:text-white hover:bg-midnight-800 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/calculator"
              onClick={() => setIsOpen(false)}
              className="mx-4 mt-2 flex items-center justify-center gap-2 px-5 py-2.5 bg-gold-500 text-midnight-950 font-semibold rounded-lg"
            >
              <Calculator className="w-4 h-4" />
              Try Free
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
