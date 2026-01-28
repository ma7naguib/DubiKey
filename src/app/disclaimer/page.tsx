import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer | DubiKey',
  description: 'Important disclaimer about DubiKey educational tools and services.',
}

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Disclaimer</h1>
          
          <div className="prose prose-invert max-w-none">
            <div className="card-dark rounded-2xl p-8 space-y-6">
              
              <section>
                <h2 className="text-xl font-semibold text-gold-500 mb-4">Educational Purpose Only</h2>
                <p className="text-midnight-300">
                  DubiKey and the DubiKey Score calculator are provided for <strong>educational and informational purposes only</strong>. 
                  The tools, content, and materials on this website are designed to help users understand general concepts 
                  related to property affordability and financial planning in the context of Dubai real estate.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gold-500 mb-4">Not Financial or Investment Advice</h2>
                <p className="text-midnight-300">
                  The information provided by DubiKey does not constitute financial advice, investment advice, 
                  legal advice, or any other type of professional advice. The DubiKey Score and related calculations 
                  are simplified estimates based on user-provided data and should not be relied upon as the sole 
                  basis for making any financial or investment decisions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gold-500 mb-4">Not a Real Estate Broker</h2>
                <p className="text-midnight-300">
                  DubiKey is <strong>not a licensed real estate broker, agent, or advisor</strong>. We do not:
                </p>
                <ul className="list-disc list-inside text-midnight-300 mt-2 space-y-1">
                  <li>Sell or market any properties</li>
                  <li>Receive commissions from property sales</li>
                  <li>Act as an intermediary in property transactions</li>
                  <li>Provide property valuations or appraisals</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gold-500 mb-4">Consult Qualified Professionals</h2>
                <p className="text-midnight-300">
                  Before making any property purchase or investment decision, we strongly recommend that you:
                </p>
                <ul className="list-disc list-inside text-midnight-300 mt-2 space-y-1">
                  <li>Consult with a licensed financial advisor</li>
                  <li>Seek advice from a qualified real estate professional</li>
                  <li>Engage a legal professional familiar with UAE property law</li>
                  <li>Conduct thorough due diligence on any property</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gold-500 mb-4">No Guarantees</h2>
                <p className="text-midnight-300">
                  While we strive to provide accurate and up-to-date information, DubiKey makes no representations 
                  or warranties of any kind, express or implied, about the completeness, accuracy, reliability, 
                  or suitability of the information, tools, or calculations provided. Any reliance you place on 
                  such information is strictly at your own risk.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gold-500 mb-4">Market Conditions</h2>
                <p className="text-midnight-300">
                  Real estate markets are dynamic and can change rapidly. The Dubai property market is subject 
                  to various factors including but not limited to economic conditions, regulatory changes, 
                  and market sentiment. Past performance is not indicative of future results.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gold-500 mb-4">Limitation of Liability</h2>
                <p className="text-midnight-300">
                  In no event shall DubiKey, its owners, operators, or affiliates be liable for any direct, 
                  indirect, incidental, consequential, or punitive damages arising out of your access to, 
                  use of, or reliance on any information or tools provided on this website.
                </p>
              </section>

              <div className="border-t border-midnight-700 pt-6 mt-8">
                <p className="text-midnight-500 text-sm">
                  Last updated: January 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
