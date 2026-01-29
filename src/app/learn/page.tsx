import Link from 'next/link'
import { BookOpen, Clock, ArrowRight, TrendingUp, Shield, Calculator } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Learn - Dubai Off-Plan Property Guide | DubiKey',
  description: 'Free educational guides about Dubai off-plan property investment. Learn how to evaluate deals, understand payment plans, and avoid common mistakes.',
  keywords: 'Dubai property guide, off-plan investment guide, Dubai real estate education, property investment tips',
}

const articles = [
  {
    slug: 'what-is-off-plan-property',
    title: 'What is Off-Plan Property? A Complete Guide for Dubai Investors',
    excerpt: 'Everything you need to know about buying property before it\'s built - the risks, rewards, and how to protect yourself.',
    category: 'Basics',
    readTime: '8 min read',
    icon: BookOpen,
  },
  {
    slug: 'understanding-payment-plans',
    title: 'Understanding Dubai Payment Plans: 80/20, 70/30, and Post-Handover',
    excerpt: 'Break down the different payment structures and learn which one fits your financial situation best.',
    category: 'Payment Plans',
    readTime: '6 min read',
    icon: Calculator,
    comingSoon: true,
  },
  {
    slug: 'hidden-costs-dubai-property',
    title: 'Hidden Costs When Buying Property in Dubai',
    excerpt: 'DLD fees, service charges, agent commissions - all the costs nobody tells you about upfront.',
    category: 'Costs',
    readTime: '5 min read',
    icon: TrendingUp,
    comingSoon: true,
  },
  {
    slug: 'red-flags-off-plan',
    title: '7 Red Flags to Watch Out for in Off-Plan Deals',
    excerpt: 'Protect yourself from bad investments by learning the warning signs experienced investors look for.',
    category: 'Risk',
    readTime: '7 min read',
    icon: Shield,
    comingSoon: true,
  },
]

export default function LearnPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-500 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Free Guides
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Learn Before You <span className="text-gold-gradient">Invest</span>
            </h1>
            <p className="text-midnight-300 text-lg max-w-2xl mx-auto">
              Free educational content to help you make smarter property decisions in Dubai. No fluff, just practical knowledge.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="space-y-4">
            {articles.map((article) => (
              <article key={article.slug} className="group">
                {article.comingSoon ? (
                  <div className="card-dark rounded-xl p-6 opacity-60">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-midnight-700 flex items-center justify-center flex-shrink-0">
                        <article.icon className="w-6 h-6 text-midnight-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs px-2 py-1 rounded bg-midnight-700 text-midnight-400">
                            {article.category}
                          </span>
                          <span className="text-xs text-midnight-500 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </span>
                          <span className="text-xs px-2 py-1 rounded bg-gold-500/10 text-gold-500">
                            Coming Soon
                          </span>
                        </div>
                        <h2 className="text-lg font-semibold text-midnight-400 mb-2">
                          {article.title}
                        </h2>
                        <p className="text-midnight-500 text-sm">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link href={`/learn/${article.slug}`}>
                    <div className="card-dark rounded-xl p-6 hover:border-gold-500/40 transition-all">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                          <article.icon className="w-6 h-6 text-gold-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs px-2 py-1 rounded bg-gold-500/10 text-gold-400">
                              {article.category}
                            </span>
                            <span className="text-xs text-midnight-400 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {article.readTime}
                            </span>
                          </div>
                          <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors">
                            {article.title}
                          </h2>
                          <p className="text-midnight-400 text-sm mb-3">
                            {article.excerpt}
                          </p>
                          <span className="text-gold-500 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read article <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-midnight-400 mb-4">
              Ready to check if you can afford a specific property?
            </p>
            <Link
              href="/calculator"
              className="inline-flex items-center gap-2 btn-gold px-6 py-3 rounded-xl"
            >
              <Calculator className="w-5 h-5" />
              Try the Free Calculator
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
