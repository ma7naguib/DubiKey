import Link from 'next/link'
import { ArrowLeft, Clock, Calculator, AlertTriangle, DollarSign, FileText, Users, Building, Wrench } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hidden Costs When Buying Property in Dubai | DubiKey',
  description: 'Discover all the hidden fees when buying Dubai property - DLD fees, service charges, agent commissions, and more. Know the true cost before you buy.',
  keywords: 'Dubai property fees, DLD fee, service charge Dubai, hidden costs property, Dubai real estate costs',
}

export default function HiddenCostsPage() {
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
                Costs
              </span>
              <span className="text-xs text-midnight-400 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                5 min read
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hidden Costs When Buying Property in Dubai
            </h1>
            <p className="text-xl text-midnight-300">
              DLD fees, service charges, agent commissions — all the costs nobody tells you about upfront.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-invert max-w-none">

            {/* Introduction */}
            <section className="mb-10">
              <p className="text-midnight-300 text-lg leading-relaxed">
                You found a property for AED 1,000,000 and you have AED 300,000 saved. Should be enough for a 20% down payment plus some buffer, right? Not so fast. By the time you add up all the &quot;extra&quot; costs, you might need closer to AED 350,000 — or more. Let&apos;s break down every cost you need to budget for.
              </p>
            </section>

            {/* Quick Overview */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-gold-500" />
                Quick Cost Overview
              </h2>
              <div className="card-dark rounded-xl p-6">
                <p className="text-midnight-300 mb-4">For a <strong className="text-white">AED 1,000,000</strong> property:</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-midnight-700">
                    <span className="text-midnight-400">DLD Fee (4%)</span>
                    <span className="text-white">40,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-midnight-700">
                    <span className="text-midnight-400">Admin/Registration</span>
                    <span className="text-white">~5,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-midnight-700">
                    <span className="text-midnight-400">Agent Commission (2%)</span>
                    <span className="text-white">20,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-midnight-700">
                    <span className="text-midnight-400">NOC Fee</span>
                    <span className="text-white">~1,000-5,000</span>
                  </div>
                  <div className="flex justify-between py-3 font-semibold">
                    <span className="text-gold-400">Total Extra Costs</span>
                    <span className="text-gold-400">~66,000 - 70,000</span>
                  </div>
                </div>
                <p className="text-midnight-500 text-xs mt-3">
                  That&apos;s 6-7% on top of your down payment!
                </p>
              </div>
            </section>

            {/* DLD Fee */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-emerald-500" />
                1. Dubai Land Department (DLD) Fee
              </h2>
              <div className="card-dark rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-emerald-400">4%</span>
                  <span className="text-midnight-400">of property price</span>
                </div>
                <p className="text-midnight-300 mb-4">
                  This is the government registration fee — non-negotiable and required to transfer ownership to your name.
                </p>
                <div className="p-3 rounded-lg bg-midnight-800/50">
                  <p className="text-sm text-midnight-400">
                    <strong className="text-white">Example:</strong> AED 1,000,000 property = AED 40,000 DLD fee
                  </p>
                </div>
              </div>
            </section>

            {/* Admin Fees */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Building className="w-6 h-6 text-blue-500" />
                2. Admin & Registration Fees
              </h2>
              <div className="card-dark rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-400">~AED 3,000-6,000</span>
                  <span className="text-midnight-400">varies</span>
                </div>
                <p className="text-midnight-300 mb-4">
                  These include:
                </p>
                <ul className="space-y-2 text-midnight-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong>Oqood registration</strong> (for off-plan): ~AED 2,000-3,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong>Title deed issuance</strong>: ~AED 500-1,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong>Trustee office fees</strong>: ~AED 2,000-4,000</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Agent Commission */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-amber-500" />
                3. Agent Commission
              </h2>
              <div className="card-dark rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-amber-400">2%</span>
                  <span className="text-midnight-400">of property price (typical)</span>
                </div>
                <p className="text-midnight-300 mb-4">
                  If you&apos;re buying through an agent or broker, you&apos;ll typically pay 2% commission.
                </p>
                <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <p className="text-sm text-amber-300">
                    <strong>Note:</strong> For off-plan, commission is often paid by the developer, not you. Always confirm upfront!
                  </p>
                </div>
              </div>
            </section>

            {/* NOC Fee */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">
                4. NOC (No Objection Certificate) Fee
              </h2>
              <div className="card-dark rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-white">AED 500-5,000</span>
                  <span className="text-midnight-400">varies by developer</span>
                </div>
                <p className="text-midnight-300">
                  Required from the developer to confirm you&apos;ve paid all dues before ownership transfer. Costs vary significantly by developer.
                </p>
              </div>
            </section>

            {/* Service Charge */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Wrench className="w-6 h-6 text-red-500" />
                5. Service Charges (Ongoing)
              </h2>
              <div className="card-dark rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-red-400">AED 10-30/sqft</span>
                  <span className="text-midnight-400">per year</span>
                </div>
                <p className="text-midnight-300 mb-4">
                  This is an <strong>annual</strong> fee for building maintenance, security, pools, gyms, etc. It starts from handover and continues forever.
                </p>
                <div className="p-3 rounded-lg bg-midnight-800/50">
                  <p className="text-sm text-midnight-400">
                    <strong className="text-white">Example:</strong> 800 sqft apartment × AED 15/sqft = AED 12,000/year (AED 1,000/month)
                  </p>
                </div>
                <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                  <p className="text-sm text-red-300">
                    <strong>Warning:</strong> Service charges can increase! Some buildings have seen 20-50% increases over time.
                  </p>
                </div>
              </div>
            </section>

            {/* Other Costs */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">
                6. Other Costs to Consider
              </h2>
              <div className="space-y-3">
                <div className="card-dark rounded-xl p-4">
                  <div className="flex justify-between">
                    <span className="text-white font-medium">DEWA connection</span>
                    <span className="text-midnight-300">~AED 2,000-3,000</span>
                  </div>
                  <p className="text-midnight-500 text-sm mt-1">Electricity and water connection deposit</p>
                </div>
                <div className="card-dark rounded-xl p-4">
                  <div className="flex justify-between">
                    <span className="text-white font-medium">Moving costs</span>
                    <span className="text-midnight-300">~AED 1,000-5,000</span>
                  </div>
                  <p className="text-midnight-500 text-sm mt-1">Depending on distance and items</p>
                </div>
                <div className="card-dark rounded-xl p-4">
                  <div className="flex justify-between">
                    <span className="text-white font-medium">Furnishing (if needed)</span>
                    <span className="text-midnight-300">AED 20,000-100,000+</span>
                  </div>
                  <p className="text-midnight-500 text-sm mt-1">Most off-plan units are unfurnished</p>
                </div>
                <div className="card-dark rounded-xl p-4">
                  <div className="flex justify-between">
                    <span className="text-white font-medium">Home insurance</span>
                    <span className="text-midnight-300">~AED 500-2,000/year</span>
                  </div>
                  <p className="text-midnight-500 text-sm mt-1">Optional but recommended</p>
                </div>
              </div>
            </section>

            {/* Total Cost Calculator */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-gold-500" />
                The Real Number
              </h2>
              <div className="card-dark rounded-xl p-6">
                <p className="text-midnight-300 mb-4">
                  For an <strong className="text-white">AED 1,000,000</strong> off-plan property with 20% down:
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-midnight-700">
                    <span className="text-midnight-400">Down payment (20%)</span>
                    <span className="text-white">200,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-midnight-700">
                    <span className="text-midnight-400">DLD Fee (4%)</span>
                    <span className="text-white">40,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-midnight-700">
                    <span className="text-midnight-400">Admin fees</span>
                    <span className="text-white">~5,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-midnight-700">
                    <span className="text-midnight-400">Agent (if applicable)</span>
                    <span className="text-white">0-20,000</span>
                  </div>
                  <div className="flex justify-between py-3 font-semibold text-lg">
                    <span className="text-gold-400">Total Cash Needed Upfront</span>
                    <span className="text-gold-400">~AED 245,000-265,000</span>
                  </div>
                </div>
              </div>
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
                    <span>Budget <strong className="text-white">6-7% extra</strong> on top of your down payment for fees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-500">•</span>
                    <span>DLD fee (4%) is the biggest cost — it&apos;s unavoidable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-500">•</span>
                    <span>For off-plan, agent commission is often paid by developer — confirm this!</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-500">•</span>
                    <span>Service charges are ongoing — factor them into your monthly budget</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-500">•</span>
                    <span>Always ask for a full cost breakdown before signing anything</span>
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
                    Calculate Your True Cost
                  </h3>
                  <p className="text-midnight-300 mb-4">
                    Our calculator includes all fees and shows you exactly what you need upfront.
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
