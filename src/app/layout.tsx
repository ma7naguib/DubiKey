import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import './globals.css'

export const metadata: Metadata = {
  title: 'DubiKey - Dubai Off-Plan Property Calculator',
  description: 'Avoid risky Dubai off-plan deals. A free calculator that shows whether you can actually afford an off-plan property — based on cash flow, not hype.',
  keywords: 'Dubai property, off-plan calculator, Dubai investment, property affordability, Dubai real estate',
  authors: [{ name: 'DubiKey' }],
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'DubiKey - Dubai Off-Plan Property Calculator',
    description: 'Avoid risky Dubai off-plan deals. Free affordability calculator for Dubai property investors.',
    type: 'website',
    locale: 'en_US',
    siteName: 'DubiKey',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DubiKey - Dubai Off-Plan Property Calculator',
    description: 'Avoid risky Dubai off-plan deals. Free affordability calculator.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: '#d4a000',
          colorBackground: '#0f172a',
          colorText: '#f1f5f9',
        },
      }}
    >
      <html lang="en">
        <body className="antialiased">
          <div className="noise-overlay" />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
