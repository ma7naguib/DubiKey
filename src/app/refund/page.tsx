import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund Policy | DubiKey',
  description: 'Refund Policy for DubiKey paid services and products.',
}

export default function RefundPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 font-display">
            Refund Policy
          </h1>
          
          <div className="prose prose-invert prose-gold max-w-none">
            <p className="text-midnight-300 mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="space-y-8 text-midnight-300">
              <section>
                <h2 className="text-xl font-bold text-white mb-4">Free Services</h2>
                <p>
                  The DubiKey Score calculator and basic educational content are provided free of charge. No refunds apply to free services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Consultation Services</h2>
                <p>
                  For paid consultation services:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Full refund if cancelled at least 24 hours before the scheduled session</li>
                  <li>50% refund if cancelled less than 24 hours before the scheduled session</li>
                  <li>No refund for no-shows or same-day cancellations</li>
                  <li>If we cancel or reschedule, you will receive a full refund or the option to reschedule</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Digital Products (Courses & E-books)</h2>
                <p>
                  For digital products such as courses and e-books:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>7-day money-back guarantee from the date of purchase</li>
                  <li>Refund requests must be submitted via email to support@dubikey.com</li>
                  <li>Refunds will be processed within 5-10 business days</li>
                  <li>Access to the product will be revoked upon refund</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Subscription Services</h2>
                <p>
                  For subscription-based services (when available):
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Cancel anytime before the next billing cycle</li>
                  <li>No partial refunds for unused portions of the current billing period</li>
                  <li>Access continues until the end of the current billing period</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">How to Request a Refund</h2>
                <p>
                  To request a refund, please contact us at support@dubikey.com with:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Your name and email address used for the purchase</li>
                  <li>Order number or transaction ID</li>
                  <li>Reason for the refund request</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Exceptions</h2>
                <p>
                  We reserve the right to refuse refunds in cases of:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Abuse of the refund policy</li>
                  <li>Violation of our Terms of Service</li>
                  <li>Fraudulent transactions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
                <p>
                  If you have questions about our Refund Policy, please contact us at support@dubikey.com.
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
