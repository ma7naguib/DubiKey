import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | DubiKey',
  description: 'Privacy Policy for DubiKey - How we collect, use, and protect your information.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 font-display">
            Privacy Policy
          </h1>
          
          <div className="prose prose-invert prose-gold max-w-none">
            <p className="text-midnight-300 mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="space-y-8 text-midnight-300">
              <section>
                <h2 className="text-xl font-bold text-white mb-4">1. Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email address, and contact details when you sign up or contact us</li>
                  <li><strong>Calculator Data:</strong> Financial information you enter into our calculators (this data is processed locally and not stored on our servers)</li>
                  <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited and time spent</li>
                  <li><strong>Device Information:</strong> Browser type, IP address, and device identifiers</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <p>We use collected information to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Provide and improve our services</li>
                  <li>Communicate with you about updates and offerings</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Analyze usage patterns to enhance user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">3. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">4. Calculator Data Privacy</h2>
                <p>
                  Financial data entered into the DubiKey Score calculator is processed entirely in your browser. We do not store, transmit, or have access to your financial calculations unless you explicitly choose to share them with us.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">5. Cookies and Tracking</h2>
                <p>
                  We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content. You can control cookie preferences through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">6. Third-Party Services</h2>
                <p>
                  We may use third-party services for analytics, authentication, and payment processing. These services have their own privacy policies, and we encourage you to review them.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">7. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">8. Data Retention</h2>
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">9. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">10. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us at support@dubikey.com.
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
