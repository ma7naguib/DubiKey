import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { 
  Key, Calculator, TrendingUp, GraduationCap, Shield, 
  ArrowRight, CheckCircle, Star, Building2, Users 
} from 'lucide-react'

const features = [
  {
    icon: <Calculator className="w-6 h-6" />,
    title: 'DubiKey Score',
    description: 'Instantly assess if you can comfortably afford your off-plan property with our AI-powered calculator.',
    href: '/calculator',
    cta: 'Calculate Now',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'For Investors',
    description: 'Expert insights, market analysis, and personalized consultations to maximize your returns.',
    href: '/investors',
    cta: 'Learn More',
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'For Brokers',
    description: 'Comprehensive training programs and resources to launch and grow your real estate career.',
    href: '/brokers',
    cta: 'Start Learning',
  },
]

const stats = [
  { value: '100+', label: 'Properties Analyzed' },
  { value: '50+', label: 'Investors Helped' },
  { value: '4.9', label: 'Client Rating' },
]

const benefits = [
  'Instant risk assessment',
  'Detailed cash flow analysis',
  'Post-handover projections',
  'Expert recommendations',
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 dubai-pattern opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-500 text-sm font-medium mb-8 animate-fade-in">
              <Key className="w-4 h-4" />
              Your Key to Dubai Real Estate
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display animate-fade-in-up">
              Make{' '}
              <span className="text-gold-gradient">Smarter</span>
              <br />
              Property Decisions
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-midnight-300 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              DubiKey Score helps you instantly assess if you can comfortably afford your Dubai off-plan property — with expert insights and training.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Link href="/calculator" className="btn-gold flex items-center gap-2 text-lg px-8 py-4">
                <Calculator className="w-5 h-5" />
                Try DubiKey Score — Free
              </Link>
              <Link href="/about" className="btn-outline flex items-center gap-2">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gold-500">{stat.value}</div>
                  <div className="text-sm text-midnight-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Everything You Need for{' '}
              <span className="text-gold-gradient">Dubai Real Estate</span>
            </h2>
            <p className="text-midnight-400 max-w-2xl mx-auto">
              Whether you&apos;re an investor looking to maximize returns or a broker starting your career, DubiKey has you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-dark rounded-2xl p-8 hover:gold-glow transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-600/20 flex items-center justify-center text-gold-500 mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-midnight-400 mb-6">{feature.description}</p>
                <Link
                  href={feature.href}
                  className="inline-flex items-center gap-2 text-gold-500 font-medium hover:text-gold-400 transition-colors"
                >
                  {feature.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Preview Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-950 via-midnight-900/50 to-midnight-950" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6">
                <CheckCircle className="w-4 h-4" />
                Free Tool
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
                DubiKey Score
              </h2>
              
              <p className="text-lg text-midnight-300 mb-8">
                See if you can comfortably afford your Dubai off-plan property — instantly. Our calculator analyzes your finances and gives you a clear verdict.
              </p>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-midnight-300">
                    <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <Link href="/calculator" className="btn-gold inline-flex items-center gap-2">
                Try It Now — Free
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Preview Card */}
            <div className="relative">
              <div className="card-dark rounded-2xl p-8 gold-glow">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 border-2 border-emerald-500/50 mb-4">
                    <span className="text-3xl font-bold text-emerald-400">85</span>
                  </div>
                  <div className="badge-green inline-block">GO AHEAD</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-midnight-700">
                    <span className="text-midnight-400">Property Price</span>
                    <span className="text-white font-semibold">1,200,000 AED</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-midnight-700">
                    <span className="text-midnight-400">Monthly Payment</span>
                    <span className="text-white font-semibold">15,000 AED</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-midnight-700">
                    <span className="text-midnight-400">Risk Level</span>
                    <span className="text-emerald-400 font-semibold">Low</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-midnight-400">Rental Coverage</span>
                    <span className="text-gold-500 font-semibold">42%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-gold-500 fill-gold-500" />
            ))}
          </div>
          
          <blockquote className="text-2xl md:text-3xl text-white font-display italic mb-8">
            &ldquo;DubiKey Score saved me from a risky investment. The analysis was spot-on and helped me find a better option.&rdquo;
          </blockquote>
          
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-midnight-950 font-bold">
              AH
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">Ahmed H.</div>
              <div className="text-midnight-400 text-sm">Property Investor, Dubai</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="card-dark rounded-3xl p-12 text-center gold-glow-intense relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent" />
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                Ready to Make Your Move?
              </h2>
              <p className="text-midnight-300 mb-8 max-w-xl mx-auto">
                Join hundreds of investors who make smarter property decisions with DubiKey.
              </p>
              <Link href="/calculator" className="btn-gold inline-flex items-center gap-2 text-lg px-8 py-4">
                <Calculator className="w-5 h-5" />
                Calculate Your Score — Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
