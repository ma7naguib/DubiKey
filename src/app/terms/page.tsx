import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | DubiKey',
  description: 'Terms of Service for DubiKey - Dubai real estate insights and tools.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 font-display">
            Terms of Service
          </h1>
          
          <div className="prose prose-invert prose-gold max-w-none">
            <p className="text-midnight-300 mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="space-y-8 text-midnight-300">
              <section>
                <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using DubiKey (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">2. Description of Service</h2>
                <p>
                  DubiKey provides educational tools, calculators, and content related to Dubai real estate investment. Our services include the DubiKey Score calculator, educational content for investors and brokers, and related resources.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">3. Disclaimer</h2>
                <p>
                  The information provided by DubiKey is for educational and informational purposes only. It should not be considered as financial, investment, or legal advice. We strongly recommend consulting with licensed professionals before making any investment decisions.
                </p>
                <p className="mt-4">
                  The DubiKey Score and other calculations are estimates based on the information you provide and should not be relied upon as the sole basis for investment decisions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">4. User Responsibilities</h2>
                <p>You agree to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Provide accurate information when using our calculators and tools</li>
                  <li>Use the Service only for lawful purposes</li>
                  <li>Not attempt to disrupt or compromise the Service</li>
                  <li>Not reproduce or distribute our content without permission</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">5. Intellectual Property</h2>
                <p>
                  All content, including text, graphics, logos, and software, is the property of DubiKey and is protected by intellectual property laws. You may not use, reproduce, or distribute our content without prior written consent.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                <p>
                  DubiKey shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the Service or reliance on any information provided.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">7. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Continued use of the Service after changes constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">8. Contact</h2>
                <p>
                  For questions about these Terms of Service, please contact us at support@dubikey.com.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
