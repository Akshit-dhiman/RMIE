import Link from 'next/link'
import { FEATURES, CORE_OFFERINGS } from '@/lib/data'
import BrandGrid from '@/components/BrandGrid'
import CoreOfferingsSection from '@/components/CoreOfferingsSection'
import InfrastructureSection from '@/components/InfrastructureSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import HeroButtons from '@/components/HeroButtons'
import Counter from '@/components/Counter'
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { ShieldCheck, FileText, Truck, Phone } from 'lucide-react'

export const metadata = {
  title: 'Radha Madhav India Enterprise - Imported Connector Supplier in India',
  description:
    'Radha Madhav India Enterprise is a trusted importer and supplier of original automotive and industrial connectors including TE, Molex, JST and more.',
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      {/* Hero Section */}
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-[480px] flex flex-col justify-center overflow-hidden bg-gradient-to-r from-[#081C29] to-[#0F2A3D] text-gray-100 pt-32 pb-24">
        {/* Subtle Radial Highlight (Option B) - Behind Text */}
        <div className="absolute top-1/2 left-0 w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none -translate-y-1/2" />

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-5xl">
            {/* Headline - Refined Weights & Leading */}
            <h1 className="text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] font-black mb-8 leading-[0.74] tracking-[-0.01em] text-left">
              <span className="text-gray-100 block font-black">ENGINEERING</span>
              <span className="text-gray-100 block font-black">PRECISION.</span>
              <span className="text-[#7C8FA1] block font-extrabold">DELIVERED.</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-[58%] leading-[1.6] font-medium tracking-wide">
              Trusted Importer & Supplier of Original Automotive & Industrial Connectors.
              Direct sourcing from verified global manufacturers.
            </p>

            <HeroButtons />
          </div>
        </div>
      </section>

      {/* Key Value Propositions - Industrial Feature Strip */}
      <ScrollAnimationWrapper>
        <section className="relative z-30 -mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[4px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100 border border-gray-100 overflow-hidden">
            <div className="py-8 px-8 group hover:bg-white transition-all duration-300 flex flex-col items-start hover:-translate-y-[5px]">
              <ShieldCheck strokeWidth={1.5} className="text-[#0A1F33] w-10 h-10 mb-5 group-hover:text-[var(--accent)] transition-colors" />
              <h3 className="font-bold text-[var(--primary)] text-lg mb-2">100% Authentic</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">Original manufacturer CoC with every shipment.</p>
            </div>
            <div className="py-8 px-8 group hover:bg-white transition-all duration-300 flex flex-col items-start hover:-translate-y-[5px]">
              <FileText strokeWidth={1.5} className="text-[#0A1F33] w-10 h-10 mb-5 group-hover:text-[var(--accent)] transition-colors" />
              <h3 className="font-bold text-[var(--primary)] text-lg mb-2">GST Compliant</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">Input tax credit available on all invoices.</p>
            </div>
            <div className="py-8 px-8 group hover:bg-white transition-all duration-300 flex flex-col items-start hover:-translate-y-[5px]">
              <Truck strokeWidth={1.5} className="text-[#0A1F33] w-10 h-10 mb-5 group-hover:text-[var(--accent)] transition-colors" />
              <h3 className="font-bold text-[var(--primary)] text-lg mb-2">Pan-India Delivery</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">Reliable logistics to 18,000+ pin codes.</p>
            </div>
            <div className="py-8 px-8 group hover:bg-white transition-all duration-300 flex flex-col items-start hover:-translate-y-[5px]">
              <Phone strokeWidth={1.5} className="text-[#0A1F33] w-10 h-10 mb-5 group-hover:text-[var(--accent)] transition-colors" />
              <h3 className="font-bold text-[var(--primary)] text-lg mb-2">24/7 Procurement</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">Dedicated support for critical requirements.</p>
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      <BrandGrid />
      <CoreOfferingsSection />
      <WhyChooseUsSection />
      <InfrastructureSection />

      {/* Final Corporate CTA - Revised per User Request */}
      {/* Final Corporate CTA - Revised per User Request */}
      {/* Final Corporate CTA - Strict Industrial Redesign */}
      <section className="bg-[#0E2A38] text-white pt-[90px] pb-[70px] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">

          <h2 className="text-[48px] font-bold text-white tracking-[-0.5px] leading-tight max-w-[800px]">
            Ready to Streamline Your Procurement?
          </h2>

          <p className="text-[#C7D3DA] text-[18px] mt-5 max-w-[600px] leading-relaxed">
            Get competitive pricing and verified availability for your critical components today.
          </p>

          <div className="relative mt-10 group">
            {/* Subtle Radial Glow Behind Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[radial-gradient(circle_at_center,rgba(227,30,36,0.25)_0%,rgba(227,30,36,0.08)_35%,transparent_65%)] pointer-events-none z-0" />

            <Link
              href="/contact"
              className="relative z-10 inline-flex items-center justify-center bg-[#E31E24] text-white py-[16px] px-[48px] rounded-[6px] text-[18px] font-semibold transition-all duration-250 ease-out hover:shadow-[0_10px_25px_rgba(227,30,36,0.35)] hover:-translate-y-[2px]"
            >
              REQUEST QUOTATION
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}
