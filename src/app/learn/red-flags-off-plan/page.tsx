import Link from 'next/link'
import { ArrowLeft, Clock, Calculator, AlertTriangle, XCircle, Search, Building, TrendingDown, Users, FileWarning, Clock3, MapPin } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '7 Red Flags to Watch Out for in Off-Plan Deals | DubiKey',
  description: 'Protect yourself from bad off-plan investments in Dubai. Learn the warning signs experienced investors look for before committing.',
  keywords: 'off-plan red flags, Dubai property scams, bad property investment, off-plan risks Dubai, property warning signs',
}

export default function RedFlagsPage() {
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
              <span className="text-xs px-2 py-1 rounded bg-red-500/10 text-red-400">
                Risk
              </span>
              <span className="text-xs text-midnight-400 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                7 min read
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              7 Red Flags to Watch Out for in Off-Plan Deals
            </h1>
            <p className="text-xl text-midnight-300">
              Protect yourself from bad investments by learning the warning signs experienced investors look for.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-invert max-w-none">

            {/* Introduction */}
            <section className="mb-10">
              <p className="text-midnight-300 text-lg leading-relaxed">
                Dubai&apos;s off-plan market can be incredibly rewarding — but it&apos;s not without risks. While most developers are reputable, there are deals that look too good to be true (because they are). Here are 7 red flags that should make you pause and investigate further before signing anything.
              </p>
            </section>

            {/* Red Flag 1 */}
            <section className="mb-8">
              <div className="card-dark rounded-xl p-6 border-l-4 border-red-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-bold">1</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      <Building className="w-5 h-5 text-red-400" />
                      Unknown or New Developer
                    </h2>
                    <p className="text-midnight-300 mb-4">
                      A developer with no track record is a major risk. They might not have the experience or financial backing to complete your project.
                    </p>
                    <div className="p-3 rounded-lg bg-midnight-800/50">
                      <p className="text-sm text-midnight-400">
                        <strong className="text-white">What to do:</strong> Research completed projects. Visit them. Talk to residents. Check DLD registration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Red Flag 2 */}
            <section className="mb-8">
              <div className="card-dark rounded-xl p-6 border-l-4 border-red-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-bold">2</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      <TrendingDown className="w-5 h-5 text-red-400" />
                      Price Way Below Market
                    </h2>
                    <p className="text-midnight-300 mb-4">
                      If a property is priced 20-30% below similar projects in the area, ask yourself why. There&apos;s usually a reason — and it&apos;s rarely good.
                    </p>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                        <p className="text-sm text-red-300">
                          <strong>Possible reasons:</strong> Developer cash flow problems, inferior quality planned, or simply too good to be true.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Red Flag 3 */}
            <section className="mb-8">
              <div className="card-dark rounded-xl p-6 border-l-4 border-red-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-bold">3</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      <Users className="w-5 h-5 text-red-400" />
                      High-Pressure Sales Tactics
                    </h2>
                    <p className="text-midnight-300 mb-4">
                      &quot;This is the last unit!&quot; &quot;Price goes up tomorrow!&quot; &quot;Sign now or lose it!&quot; — These are classic pressure tactics. Good deals don&apos;t disappear in 24 hours.
                    </p>
                    <div className="p-3 rounded-lg bg-midnight-800/50">
                      <p className="text-sm text-midnight-400">
                        <strong className="text-white">Rule:</strong> Never sign anything on the same day you see it. Sleep on it. If it&apos;s a good deal today, it&apos;ll still be good tomorrow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Red Flag 4 */}
            <section className="mb-8">
              <div className="card-dark rounded-xl p-6 border-l-4 border-red-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-bold">4</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      <FileWarning className="w-5 h-5 text-red-400" />
                      Vague or Missing Documentation
                    </h2>
                    <p className="text-midnight-300 mb-4">
                      No escrow account number. No RERA registration. No clear SPA terms. If the paperwork is sketchy, the project probably is too.
                    </p>
                    <div className="space-y-2 mt-4">
                      <p className="text-sm text-white font-medium">You should always receive:</p>
                      <ul className="text-midnight-300 text-sm space-y-1 ml-4">
                        <li>• Escrow account details (verify with the bank)</li>
                        <li>• RERA project registration number</li>
                        <li>• Clear Sales & Purchase Agreement</li>
                        <li>• Floor plans and specifications</li>
                        <li>• Payment schedule</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Red Flag 5 */}
            <section className="mb-8">
              <div className="card-dark rounded-xl p-6 border-l-4 border-red-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-bold">5</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      <Clock3 className="w-5 h-5 text-red-400" />
                      History of Delays
                    </h2>
                    <p className="text-midnight-300 mb-4">
                      Some developers are notorious for delivering late — years late. Check their track record on previous projects.
                    </p>
                    <div className="p-3 rounded-lg bg-midnight-800/50">
                      <p className="text-sm text-midnight-400">
                        <strong className="text-white">How to check:</strong> Google &quot;[Developer name] delay&quot; or ask in Dubai property forums. Previous buyers will tell you the truth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Red Flag 6 */}
            <section className="mb-8">
              <div className="card-dark rounded-xl p-6 border-l-4 border-red-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-bold">6</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-red-400" />
                      Poor or Unproven Location
                    </h2>
                    <p className="text-midnight-300 mb-4">
                      A beautiful building in the middle of nowhere is still... in the middle of nowhere. Location matters more than anything for resale and rental.
                    </p>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                        <p className="text-sm text-amber-300">
                          <strong>Ask yourself:</strong> Would I actually live here? Is there infrastructure? Schools? Metro? Or is it &quot;upcoming&quot; with no concrete plans?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Red Flag 7 */}
            <section className="mb-8">
              <div className="card-dark rounded-xl p-6 border-l-4 border-red-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-bold">7</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                      Unrealistic Rental Promises
                    </h2>
                    <p className="text-midnight-300 mb-4">
                      &quot;Guaranteed 10% returns!&quot; — No. Nobody can guarantee rental returns. If someone promises you fixed yields, be very skeptical.
                    </p>
                    <div className="p-3 rounded-lg bg-midnight-800/50">
                      <p className="text-sm text-midnight-400">
                        <strong className="text-white">Reality check:</strong> Dubai rental yields are typically 5-7% gross. Anyone promising 10%+ is either lying or selling you something overpriced.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* How to Protect Yourself */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Search className="w-6 h-6 text-emerald-500" />
                How to Protect Yourself
              </h2>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <h3 className="font-semibold text-emerald-400 mb-1">1. Verify everything with DLD</h3>
                  <p className="text-midnight-300 text-sm">Check the project is registered: dubai.ae/en/department/DubaiLandDepartment</p>
                </div>
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <h3 className="font-semibold text-emerald-400 mb-1">2. Visit completed projects</h3>
                  <p className="text-midnight-300 text-sm">See the quality of their finished work. Talk to residents if possible.</p>
                </div>
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <h3 className="font-semibold text-emerald-400 mb-1">3. Check the escrow account</h3>
                  <p className="text-midnight-300 text-sm">Your money should go to an escrow account, not directly to the developer.</p>
                </div>
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <h3 className="font-semibold text-emerald-400 mb-1">4. Get legal advice</h3>
                  <p className="text-midnight-300 text-sm">Have a lawyer review the SPA before signing. It&apos;s worth the cost.</p>
                </div>
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <h3 className="font-semibold text-emerald-400 mb-1">5. Never skip due diligence</h3>
                  <p className="text-midnight-300 text-sm">If you feel rushed, that&apos;s a red flag. Take your time.</p>
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
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>Unknown developer = higher risk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>Too cheap usually means too risky</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>Pressure tactics = walk away</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>No proper documentation = don&apos;t sign</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>&quot;Guaranteed returns&quot; = probably a lie</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Final Note */}
            <section className="mb-10">
              <div className="p-6 rounded-xl bg-midnight-800/50 border border-midnight-700">
                <p className="text-midnight-300">
                  <strong className="text-white">Remember:</strong> Most off-plan deals in Dubai are legitimate. The market is well-regulated. But every market has bad actors. Taking time to verify and asking the right questions will protect you from the minority of deals that aren&apos;t worth your money.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="mt-12 p-6 rounded-xl bg-gradient-to-r from-gold-600/20 to-gold-500/10 border border-gold-500/30">
              <div className="flex items-start gap-4">
                <Calculator className="w-8 h-8 text-gold-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Found a Good Deal?
                  </h3>
                  <p className="text-midnight-300 mb-4">
                    Use our calculator to see if the numbers actually make sense for your budget.
                  </p>
                  <Link
                    href="/calculator"
                    className="inline-flex items-center gap-2 btn-gold px-5 py-2.5 rounded-lg"
                  >
                    <Calculator className="w-4 h-4" />
                    Check Affordability
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
