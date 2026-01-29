import Link from 'next/link'
import { ArrowLeft, Clock, Calculator, CheckCircle, AlertTriangle, Percent } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Understanding Dubai Payment Plans: 80/20, 70/30, and Post-Handover | DubiKey',
  description: 'Learn about different off-plan payment structures in Dubai. Compare 80/20, 70/30, 60/40, and post-handover plans to find what fits your budget.',
  keywords: 'Dubai payment plan, 80/20 payment plan, post-handover payment, off-plan installments, Dubai property payment',
}

export default function PaymentPlansPage() {
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
                Payment Plans
              </span>
              <span className="text-xs text-midnight-400 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                6 min read
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Understanding Dubai Payment Plans: 80/20, 70/30, and Post-Handover
            </h1>
            <p className="text-xl text-midnight-300">
              Break down the different payment structures and learn which one fits your financial situation best.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-invert max-w-none">

            {/* Introduction */}
            <section className="mb-10">
              <p className="text-midnight-300 text-lg leading-relaxed">
                One of the biggest advantages of buying off-plan in Dubai is the flexible payment plan. Instead of paying everything upfront, you spread payments over the construction period — and sometimes even after you get the keys. But not all payment plans are created equal. Let&apos;s break down the most common structures and help you figure out which one works for you.
              </p>
            </section>

            {/* What is a Payment Plan */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">
                What is a Payment Plan?
              </h2>
              <div className="card-dark rounded-xl p-6 mb-4">
                <p className="text-midnight-300">
                  A <strong className="text-white">payment plan</strong> is how the developer structures your payments for an off-plan property. Instead of paying the full price at once, you pay in installments — typically split between booking, construction milestones, handover, and sometimes post-handover.
                </p>
              </div>
            </section>

            {/* Common Payment Plans */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Common Payment Plan Structures
              </h2>

              {/* 80/20 */}
              <div className="card-dark rounded-xl p-6 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold">80/20</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">80% During Construction / 20% On Handover</h3>
                    <p className="text-sm text-midnight-400">Most common structure</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-midnight-700">
                    <span className="text-midnight-400">Down payment</span>
                    <span className="text-white">10-20%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-midnight-700">
                    <span className="text-midnight-400">During construction</span>
                    <span className="text-white">60-70%</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-midnight-400">On handover</span>
                    <span className="text-white">20%</span>
                  </div>
                </div>
                <div className="mt-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <p className="text-emerald-300 text-sm">
                    <strong>Best for:</strong> Buyers who want to pay most before handover and have steady monthly income.
                  </p>
                </div>
              </div>

              {/* 70/30 */}
              <div className="card-dark rounded-xl p-6 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-400 font-bold">70/30</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">70% During Construction / 30% On Handover</h3>
                    <p className="text-sm text-midnight-400">Balanced approach</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-midnight-700">
                    <span className="text-midnight-400">Down payment</span>
                    <span className="text-white">10-20%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-midnight-700">
                    <span className="text-midnight-400">During construction</span>
                    <span className="text-white">50-60%</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-midnight-400">On handover</span>
                    <span className="text-white">30%</span>
                  </div>
                </div>
                <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <p className="text-amber-300 text-sm">
                    <strong>Best for:</strong> Buyers who want lower monthly payments during construction but can handle a larger lump sum at handover.
                  </p>
                </div>
              </div>

              {/* 60/40 */}
              <div className="card-dark rounded-xl p-6 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <span className="text-blue-400 font-bold">60/40</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">60% During Construction / 40% On Handover</h3>
                    <p className="text-sm text-midnight-400">Lower monthly burden</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-midnight-700">
                    <span className="text-midnight-400">Down payment</span>
                    <span className="text-white">10-20%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-midnight-700">
                    <span className="text-midnight-400">During construction</span>
                    <span className="text-white">40-50%</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-midnight-400">On handover</span>
                    <span className="text-white">40%</span>
                  </div>
                </div>
                <div className="mt-4 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <p className="text-blue-300 text-sm">
                    <strong>Best for:</strong> Buyers who need breathing room during construction and plan to arrange financing or sell before handover.
                  </p>
                </div>
              </div>

              {/* Post-Handover */}
              <div className="card-dark rounded-xl p-6 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center">
                    <span className="text-gold-400 font-bold text-xs">POST</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Post-Handover Payment Plan</h3>
                    <p className="text-sm text-midnight-400">Continue paying after you get keys</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-midnight-700">
                    <span className="text-midnight-400">Down payment</span>
                    <span className="text-white">10-20%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-midnight-700">
                    <span className="text-midnight-400">During construction</span>
                    <span className="text-white">30-50%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-midnight-700">
                    <span className="text-midnight-400">On handover</span>
                    <span className="text-white">10-20%</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-midnight-400">Post-handover (1-5 years)</span>
                    <span className="text-white">20-40%</span>
                  </div>
                </div>
                <div className="mt-4 p-3 rounded-lg bg-gold-500/10 border border-gold-500/20">
                  <p className="text-gold-300 text-sm">
                    <strong>Best for:</strong> Investors who plan to rent out the property and use rental income to cover post-handover payments.
                  </p>
                </div>
              </div>
            </section>

            {/* Example Calculation */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-gold-500" />
                Real Example: AED 1,000,000 Property
              </h2>
              <p className="text-midnight-300 mb-4">
                Let&apos;s see how the same property looks under different payment plans:
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-midnight-700">
                      <th className="text-left py-3 text-midnight-400 font-medium">Payment</th>
                      <th className="text-right py-3 text-midnight-400 font-medium">80/20</th>
                      <th className="text-right py-3 text-midnight-400 font-medium">60/40</th>
                      <th className="text-right py-3 text-midnight-400 font-medium">Post-Handover</th>
                    </tr>
                  </thead>
                  <tbody className="text-midnight-300">
                    <tr className="border-b border-midnight-700/50">
                      <td className="py-3">Down payment</td>
                      <td className="text-right text-white">200,000</td>
                      <td className="text-right text-white">200,000</td>
                      <td className="text-right text-white">200,000</td>
                    </tr>
                    <tr className="border-b border-midnight-700/50">
                      <td className="py-3">Monthly (36 months)</td>
                      <td className="text-right text-white">16,667</td>
                      <td className="text-right text-white">11,111</td>
                      <td className="text-right text-white">8,333</td>
                    </tr>
                    <tr className="border-b border-midnight-700/50">
                      <td className="py-3">On handover</td>
                      <td className="text-right text-white">200,000</td>
                      <td className="text-right text-white">400,000</td>
                      <td className="text-right text-white">100,000</td>
                    </tr>
                    <tr>
                      <td className="py-3">Post-handover (24 months)</td>
                      <td className="text-right text-midnight-500">—</td>
                      <td className="text-right text-midnight-500">—</td>
                      <td className="text-right text-white">12,500/mo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* How to Choose */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">
                How to Choose the Right Plan
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-midnight-800/50 border border-midnight-700">
                  <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    Choose 80/20 if:
                  </h3>
                  <ul className="text-midnight-300 text-sm space-y-1 ml-7">
                    <li>You have stable, predictable income</li>
                    <li>You want to minimize the handover lump sum</li>
                    <li>You&apos;re buying to live in (end-user)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-midnight-800/50 border border-midnight-700">
                  <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-400" />
                    Choose 60/40 or 70/30 if:
                  </h3>
                  <ul className="text-midnight-300 text-sm space-y-1 ml-7">
                    <li>You need lower monthly payments during construction</li>
                    <li>You expect a bonus, inheritance, or asset sale before handover</li>
                    <li>You might flip the property before completion</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-midnight-800/50 border border-midnight-700">
                  <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-gold-400" />
                    Choose Post-Handover if:
                  </h3>
                  <ul className="text-midnight-300 text-sm space-y-1 ml-7">
                    <li>You&apos;re an investor planning to rent immediately</li>
                    <li>Rental income can cover your post-handover payments</li>
                    <li>You want maximum flexibility</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Warning */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
                Watch Out For
              </h2>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <h3 className="font-semibold text-amber-400 mb-1">The handover cash crunch</h3>
                  <p className="text-midnight-300 text-sm">Many buyers underestimate how hard it is to come up with 30-40% at handover. Plan ahead.</p>
                </div>
                <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <h3 className="font-semibold text-amber-400 mb-1">Post-handover ≠ free money</h3>
                  <p className="text-midnight-300 text-sm">You still owe the full amount. If you can&apos;t pay, the developer can take legal action.</p>
                </div>
                <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <h3 className="font-semibold text-amber-400 mb-1">Construction delays</h3>
                  <p className="text-midnight-300 text-sm">If the project is delayed, you&apos;re still committed to the payment schedule. Build a buffer.</p>
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
                    <span>80/20 = higher monthly, lower handover stress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-500">•</span>
                    <span>60/40 = lower monthly, bigger handover payment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-500">•</span>
                    <span>Post-handover = most flexible, but you&apos;re still obligated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-500">•</span>
                    <span>Always calculate your monthly surplus before committing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-500">•</span>
                    <span>Have a plan for the handover lump sum — don&apos;t wing it</span>
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
                    Which Plan Works for You?
                  </h3>
                  <p className="text-midnight-300 mb-4">
                    Use our calculator to see exactly how different payment plans affect your monthly cash flow.
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
