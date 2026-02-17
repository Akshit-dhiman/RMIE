import Link from 'next/link'
import { FEATURES, CORE_OFFERINGS } from '@/lib/data'
import BrandGrid from '@/components/BrandGrid'
import CoreOfferingsSection from '@/components/CoreOfferingsSection'
import InfrastructureSection from '@/components/InfrastructureSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import HeroButtons from '@/components/HeroButtons'

export const metadata = {
  title: 'TCH Enterprises - Imported Connector Supplier in India',
  description:
    'TCH Enterprises is a trusted importer and supplier of original automotive and industrial connectors including TE, Molex, JST and more.',
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[var(--primary)] pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-[var(--border)]">
        {/* Technical Grid Overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-8 border border-white/20 bg-white/5 py-1.5 px-4 rounded-[2px] backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">Global Supply Chain Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-[0.9] tracking-tighter">
              ENGINEERING<br />
              PRECISION.<br />
              <span className="text-white/50">DELIVERED.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl leading-relaxed font-light">
              Trusted Importer & Supplier of Original Automotive & Industrial Connectors.
              Direct sourcing from verified global manufacturers.
            </p>

            <HeroButtons />
          </div>
        </div>
      </section>

      {/* Corporate Metrics Strip */}
      <div className="bg-[var(--secondary)] border-b border-[var(--border)] text-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border-x border-white/10">
            <div className="py-8 px-6 group hover:bg-white/5 transition-colors">
              <div className="text-4xl font-bold text-white mb-1 group-hover:text-[var(--accent)] transition-colors">20+</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">Years Experience</div>
            </div>
            <div className="py-8 px-6 group hover:bg-white/5 transition-colors">
              <div className="text-4xl font-bold text-white mb-1 group-hover:text-[var(--accent)] transition-colors">50+</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">Global Brands</div>
            </div>
            <div className="py-8 px-6 group hover:bg-white/5 transition-colors">
              <div className="text-4xl font-bold text-white mb-1 group-hover:text-[var(--accent)] transition-colors">10k+</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">SKUs Available</div>
            </div>
            <div className="py-8 px-6 group hover:bg-white/5 transition-colors">
              <div className="text-4xl font-bold text-white mb-1 group-hover:text-[var(--accent)] transition-colors">24h</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">RFQ Response</div>
            </div>
          </div>
        </div>
      </div>

      <BrandGrid />
      <CoreOfferingsSection />
      <WhyChooseUsSection />
      <InfrastructureSection />

      {/* Final Corporate CTA */}
      <section className="bg-[var(--primary)] text-white py-32 border-t border-[var(--border)] relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--secondary)] opacity-50 skew-x-12 transform translate-x-1/4" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Ready to Streamline Your Procurement?
          </h2>
          <p className="text-xl mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Get competitive pricing and verified availability for your critical components today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--accent)] text-white px-10 py-5 rounded-[4px] text-lg font-bold tracking-wide hover:bg-[#B91C22] transition-colors shadow-lg shadow-red-900/20"
          >
            REQUEST QUOTATION
          </Link>
        </div>
      </section>
    </>
  )
}
