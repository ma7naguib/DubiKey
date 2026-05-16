import Link from 'next/link'
import { Key, Shield, Calculator, ArrowRight, CheckCircle, Users, Zap } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section - NEW */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 dubai-pattern opacity-30" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-500 text-sm font-medium mb-8">
            <Key className="w-4 h-4" />
            Free Calculator — No Signup Required
          </div>

          {/* Main Headline - NEW */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Avoid Risky Dubai Off-Plan Deals
            <span className="text-gold-gradient block mt-2">Before You Commit</span>
          </h1>

          {/* Subheadline - NEW */}
          <p className="text-xl text-midnight-300 mb-10 max-w-2xl mx-auto">
            A free calculator that shows whether you can actually afford an off-plan property — based on cash flow, not hype.
          </p>

          {/* Single CTA - NEW */}
          <Link
            href="/calculator"
            className="inline-flex items-center gap-3 btn-gold text-lg px-10 py-5 rounded-xl gold-glow"
          >
            <Calculator className="w-6 h-6" />
            Calculate Your DubiKey Score — Free
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-midnight-400">
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-emerald-400" /> Instant Results</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-emerald-400" /> 100% Free</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-emerald-400" /> No Registration</span>
          </div>
        </div>
      </section>

      {/* How It Works - NEW */}
      <section className="py-20 px-4 bg-midnight-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            How It Works
          </h2>
          <p className="text-midnight-400 text-center mb-12 max-w-xl mx-auto">
            Three simple steps to know if you can comfortably afford your dream property
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gold-500">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enter Your Finances</h3>
              <p className="text-midnight-400">Income, expenses, savings, and property details</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gold-500">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Get Your Score</h3>
              <p className="text-midnight-400">See a clear comfort score based on real numbers</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gold-500">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Decide with Confidence</h3>
              <p className="text-midnight-400">Know exactly where you stand before committing</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="/calculator"
              className="inline-flex items-center gap-2 btn-gold px-8 py-4 rounded-xl"
            >
              <Calculator className="w-5 h-5" />
              Calculate Your DubiKey Score — Free
            </Link>
          </div>
        </div>
      </section>

      {/* What DubiKey Is (and Isn't) - NEW TRUST SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="card-dark rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              What DubiKey Is <span className="text-midnight-400">(and Isn&apos;t)</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* What it IS */}
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  What We Are
                </h3>
                <ul className="space-y-3 text-midnight-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                    <span>A free educational tool for property buyers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                    <span>Data-driven affordability calculator</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                    <span>Transparent and unbiased analysis</span>
                  </li>
                </ul>
              </div>

              {/* What it ISN'T */}
              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  What We&apos;re Not
                </h3>
                <ul className="space-y-3 text-midnight-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 flex-shrink-0">✗</span>
                    <span>Not a real estate broker</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 flex-shrink-0">✗</span>
                    <span>No sales commissions involved</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 flex-shrink-0">✗</span>
                    <span>No pressure to buy anything</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-center text-midnight-500 text-sm mt-8 pt-6 border-t border-midnight-700">
              This tool provides general educational insights — not investment advice.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-midnight-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Why Use DubiKey Score?
          </h2>
          <p className="text-midnight-400 text-center mb-12 max-w-xl mx-auto">
            Make informed decisions with clarity and confidence
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-dark rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cash Flow Analysis</h3>
              <p className="text-midnight-400 text-sm">See exactly how the property fits your monthly budget — before and after handover</p>
            </div>

            <div className="card-dark rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Risk Assessment</h3>
              <p className="text-midnight-400 text-sm">Clear Go/Review/Stop recommendations based on your unique financial situation</p>
            </div>

            <div className="card-dark rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Instant Results</h3>
              <p className="text-midnight-400 text-sm">Get your personalized score in seconds — no waiting, no signup required</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - SIMPLIFIED */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-midnight-400 text-lg">
            Used by early-stage investors exploring Dubai off-plan opportunities
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Check Your Property?
          </h2>
          <p className="text-midnight-300 text-lg mb-8">
            Find out in 2 minutes if your target property fits your financial comfort zone.
          </p>
          <Link
            href="/calculator"
            className="inline-flex items-center gap-3 btn-gold text-lg px-10 py-5 rounded-xl gold-glow"
          >
            <Calculator className="w-6 h-6" />
            Calculate Your DubiKey Score — Free
          </Link>

          {/* Educational Disclaimer */}
          <p className="text-midnight-500 text-sm mt-6">
            This tool provides general educational insights — not investment advice.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
