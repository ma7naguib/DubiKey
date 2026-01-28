import Link from 'next/link'
import { Key, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  product: [
    { name: 'DubiKey Score', href: '/calculator' },
    { name: 'For Investors', href: '/investors' },
    { name: 'For Brokers', href: '/brokers' },
    { name: 'Pricing', href: '/pricing' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Refund Policy', href: '/refund' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-midnight-950 border-t border-gold-500/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <Key className="w-5 h-5 text-midnight-950" />
              </div>
              <span className="text-2xl font-bold">
                <span className="text-gold-gradient">Dubi</span>
                <span className="text-white">Key</span>
              </span>
            </Link>
            <p className="text-midnight-400 text-sm max-w-xs mb-6">
              Your key to Dubai real estate. Expert insights for investors and comprehensive training for brokers.
            </p>
            <div className="space-y-2 text-sm text-midnight-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-500" />
                <span>support@dubikey.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-500" />
                <span>Dubai, UAE</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-midnight-400 hover:text-gold-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-midnight-400 hover:text-gold-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-midnight-400 hover:text-gold-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-midnight-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-midnight-500">
              © {new Date().getFullYear()} DubiKey. All rights reserved.
            </p>
            <p className="text-xs text-midnight-600">
              DubiKey provides educational content and tools. Always consult with licensed professionals for investment decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
