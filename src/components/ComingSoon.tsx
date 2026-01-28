'use client'

import { Key, Bell, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface ComingSoonProps {
  title: string
  description: string
  icon?: React.ReactNode
}

export default function ComingSoon({ title, description, icon }: ComingSoonProps) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        {/* Icon */}
        <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-400/20 to-gold-600/20 border border-gold-500/30">
          {icon || <Key className="w-10 h-10 text-gold-500" />}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
          {title}
        </h1>

        {/* Description */}
        <p className="text-midnight-400 mb-8">
          {description}
        </p>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-500 text-sm font-medium mb-8">
          <Bell className="w-4 h-4" />
          Coming Soon
        </div>

        {/* CTA */}
        <div className="space-y-4">
          <p className="text-sm text-midnight-500">
            In the meantime, try our calculator:
          </p>
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 btn-gold"
          >
            DubiKey Score Calculator
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
