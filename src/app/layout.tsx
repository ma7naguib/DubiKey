import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import './globals.css'

const baseUrl = 'https://www.dubikey.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'DubiKey - Dubai Off-Plan Property Affordability Calculator',
    template: '%s | DubiKey',
  },
  description: 'Free calculator to check if you can afford a Dubai off-plan property. Get instant affordability scores based on your income, savings, and payment plan.',
  keywords: [
    'Dubai property calculator',
    'off-plan affordability',
    'Dubai real estate',
    'property investment Dubai',
    'off-plan payment plan',
    'Dubai property guide',
    'can I afford property Dubai',
    'off-plan risk calculator',
  ],
  authors: [{ name: 'DubiKey' }],
  creator: 'DubiKey',
  publisher: 'DubiKey',
  
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'DubiKey',
    title: 'DubiKey - Dubai Off-Plan Property Affordability Calculator',
    description: 'Free calculator to check if you can afford a Dubai off-plan property. Instant results, no signup required.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DubiKey - Dubai Property Calculator',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'DubiKey - Dubai Off-Plan Property Calculator',
    description: 'Free calculator to check if you can afford a Dubai off-plan property.',
    images: ['/og-image.png'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: baseUrl,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'DubiKey',
  description: 'Free Dubai off-plan property affordability calculator',
  url: baseUrl,
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  author: {
    '@type': 'Organization',
    name: 'DubiKey',
    url: baseUrl,
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
        <head>
          <GoogleAnalytics />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </head>
        <body className="antialiased">
          <div className="noise-overlay" />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
