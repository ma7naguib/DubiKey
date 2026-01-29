import Link from 'next/link'
import { ArrowLeft, Clock, BookOpen, CheckCircle, AlertTriangle, Calculator } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What is Off-Plan Property? A Complete Guide for Dubai Investors | DubiKey',
  description: 'Learn everything about off-plan property in Dubai - what it means, how it works, the risks and rewards, and how to protect yourself as a buyer.',
  keywords: 'off-plan property Dubai, what is off-plan, Dubai property investment, off-plan risks, off-plan benefits',
}

export default function WhatIsOffPlanPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <article className="pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 text-midnight-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Learn
          </Link>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs px-2 py-1 rounded bg-gold-500/10 text-gold-400">
                Basics
              </span>
              <span className="text-xs text-midnight-400 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                8 min read
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What is Off-Plan Property? A Complete Guide for Dubai Investors
            </h1>
            <p className="text-xl text-midnight-300">
              Everything you need to know about buying property before it&apos;s built — the risks, rewards, and how to protect yourself.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            
            {/* Introduction */}
            <section className="mb-10">
              <p className="text-midnight-300 text-lg leading-relaxed">
                If you&apos;ve been exploring Dubai&apos;s property market, you&apos;ve probably heard the term &quot;off-plan&quot; thrown around a lot. Developers advertise attractive payment plans, agents promise huge returns, and it all sounds very exciting. But what does it actually mean to buy off-plan, and is it right for you?
              </p>
            </section>

            {/* What is Off-Plan */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-gold-500" />
                What Does &quot;Off-Plan&quot; Mean?
              </h2>
              <div className="card-dark rounded-xl p-6 mb-4">
                <p className="text-midnight-300">
                  <strong className="text-white">Off-plan property</strong> is real estate that you purchase before it&apos;s been built — or while it&apos;s still under construction. You&apos;re essentially buying based on architectural plans, 3D renderings, and the developer&apos;s promises.
                </p>
              </div>
              <p className="text-midnight-300">
                Think of it like pre-ordering a product that doesn&apos;t exist yet. You pay money now (usually in installments) and receive the finished product later — typically 2-4 years down the line.
              </p>
            </section>

            {/* How It Works */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">
                How Does Off-Plan Buying Work in Dubai?
              </h2>
              <p className="text-midnight-300 mb-4">
                Here&apos;s the typical process:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-midnight-800/50">
                  <span className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <strong className="text-white">Choose a project</strong>
                    <p className="text-midnight-400 text-sm">Browse developer launches, visit showrooms, review floor plans</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-midnight-800/50">
                  <span className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <strong className="text-white">Reserve with a deposit</strong>
                    <p className="text-midnight-400 text-sm">Typically 5-10% to hold your unit</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-midnight-800/50">
                  <span className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div>
                    <strong className="text-white">Sign the Sales & Purchase Agreement (SPA)</strong>
                    <p className="text-midnight-400 text-sm">The legal contract with the developer</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-midnight-800/50">
                  <span className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center font-bold flex-shrink-0">4</span>
                  <div>
                    <strong className="text-white">Pay in installments</strong>
                    <p className="text-midnight-400 text-sm">Following a payment plan (e.g., 40% during construction, 60% on handover)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-midnight-800/50">
                  <span className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center font-bold flex-shrink-0">5</span>
                  <div>
                    <strong className="text-white">Receive handover</strong>
                    <p className="text-midnight-400 text-sm">Get your keys once construction is complete</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-emerald-500" />
                Benefits of Buying Off-Plan
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <h3 className="font-semibold text-emerald-400 mb-1">Lower entry price</h3>
                  <p className="text-midnight-300 text-sm">Off-plan properties are usually priced 10-30% below ready properties in the same area.</p>
                </div>
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <h3 className="font-semibold text-emerald-400 mb-1">Flexible payment plans</h3>
                  <p className="text-midnight-300 text-sm">Spread your payments over 2-5 years instead of paying everything upfront.</p>
                </div>
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <h3 className="font-semibold text-emerald-400 mb-1">Capital appreciation potential</h3>
                  <p className="text-midnight-300 text-sm">If the market rises during construction, your property could be worth more at handover.</p>
                </div>
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <h3 className="font-semibold text-emerald-400 mb-1">Modern specifications</h3>
                  <p className="text-midnight-300 text-sm">New builds come with the latest designs, amenities, and energy efficiency.</p>
                </div>
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <h3 className="font-semibold text-emerald-400 mb-1">Choice of units</h3>
                  <p className="text-midnight-300 text-sm">Early buyers get first pick of floor, view, and layout.</p>
                </div>
              </div>
            </section>

            {/* Risks */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
                Risks to Be Aware Of
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <h3 className="font-semibold text-amber-400 mb-1">Construction delays</h3>
                  <p className="text-midnight-300 text-sm">Projects can be delayed by months or even years. This is common in Dubai.</p>
                </div>
                <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <h3 className="font-semibold text-amber-400 mb-1">Market fluctuations</h3>
                  <p className="text-midnight-300 text-sm">Property values can go down as well as up. You might end up with a property worth less than you paid.</p>
                </div>
                <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <h3 className="font-semibold text-amber-400 mb-1">Quality differences</h3>
                  <p className="text-midnight-300 text-sm">The finished product may differ from the showroom or renders you saw.</p>
                </div>
                <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <h3 className="font-semibold text-amber-400 mb-1">Developer risk</h3>
                  <p className="text-midnight-300 text-sm">In extreme cases, developers can face financial difficulties. Always research the developer&apos;s track record.</p>
                </div>
                <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <h3 className="font-semibold text-amber-400 mb-1">Cash flow pressure</h3>
                  <p className="text-midnight-300 text-sm">You&apos;re committed to payments for years with no rental income until handover.</p>
                </div>
              </div>
            </section>

            {/* Who Should Buy */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Is Off-Plan Right for You?
              </h2>
              <p className="text-midnight-300 mb-4">
                Off-plan buying works best if you:
              </p>
              <ul className="space-y-2 text-midnight-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Have stable income to cover payments for 2-4 years</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Don&apos;t need the property immediately</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Have emergency savings beyond your payment obligations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Are comfortable with some level of risk</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Have done research on the developer and location</span>
                </li>
              </ul>
            </section>

            {/* Key Takeaways */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Key Takeaways
              </h2>
              <div className="card-dark rounded-xl p-6">
                <ul className="space-y-3 text-midnight-300">
                  <li className="flex items-start gap-2">
                    <span className="text-gold-500">•</span>
                    <span>Off-plan means buying property before or during construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-500">•</span>
                    <span>Main benefits: lower prices, flexible payments, capital growth potential</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-500">•</span>
                    <span>Main risks: delays, market changes, cash flow pressure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-500">•</span>
                    <span>Always research the developer&apos;s track record</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-500">•</span>
                    <span>Make sure you can afford the payments even if your situation changes</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <section className="mt-12 p-6 rounded-xl bg-gradient-to-r from-gold-600/20 to-gold-500/10 border border-gold-500/30">
              <div className="flex items-start gap-4">
                <Calculator className="w-8 h-8 text-gold-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Thinking About a Specific Property?
                  </h3>
                  <p className="text-midnight-300 mb-4">
                    Use our free calculator to see if you can comfortably afford the payments — before you commit.
                  </p>
                  <Link
                    href="/calculator"
                    className="inline-flex items-center gap-2 btn-gold px-5 py-2.5 rounded-lg"
                  >
                    <Calculator className="w-4 h-4" />
                    Try the Calculator
                  </Link>
                </div>
              </div>
            </section>

          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
