import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import './globals.css'

export const metadata: Metadata = {
  title: 'DubiKey - Your Key to Dubai Real Estate',
  description: 'DubiKey Score: See if you can comfortably afford your Dubai off-plan property — instantly. Expert insights for investors and training for brokers.',
  keywords: 'Dubai real estate, off-plan property, Dubai investment, property calculator, Dubai broker training',
  authors: [{ name: 'DubiKey' }],
  openGraph: {
    title: 'DubiKey - Your Key to Dubai Real Estate',
    description: 'See if you can comfortably afford your Dubai off-plan property — instantly.',
    url: 'https://dubikey.com',
    siteName: 'DubiKey',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DubiKey - Your Key to Dubai Real Estate',
    description: 'See if you can comfortably afford your Dubai off-plan property — instantly.',
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
          colorInputBackground: '#1e293b',
          colorInputText: '#f1f5f9',
        },
      }}
    >
      <html lang="en">
        <body className="antialiased">
          {/* Noise Overlay */}
          <div className="noise-overlay" />
          
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
