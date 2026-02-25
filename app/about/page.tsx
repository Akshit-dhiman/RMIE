import Link from 'next/link'
import MissionVisionCards from '@/components/MissionVisionCards'
import GlobalSourcingMetrics from '@/components/GlobalSourcingMetrics'
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { ShieldCheck, Truck, Globe, Zap, FileCheck } from 'lucide-react'

export const metadata = {
  title: 'About Radha Madhav India Enterprise - Connector Sourcing',
  description: 'Company profile of Radha Madhav India Enterprise, sourcing partner for authentic TE, Molex, and JST connectors.',
}

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section - Polished */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-br from-[#0E2A38] to-[#12394F]">
        {/* Subtle Radial Depth */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
            About Radha Madhav<br />India Enterprise
            <span className="block h-1.5 w-24 bg-[#D8232A] mt-6" />
          </h1>

          <p className="text-xl text-[#B0C4D6] max-w-3xl font-medium leading-relaxed tracking-wide">
            Radha Madhav India Enterprise is an authorized importer and sourcing partner for automotive and industrial connectors. We support OEMs and manufacturers with verified components, structured procurement, and reliable supply execution.
          </p>
        </div>
      </section>

      {/* Company Overview - Tighter & Factual */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left Column: Text Overview */}
            <div className="max-w-[640px]">
              <div className="mb-6">
                <span className="text-[#D8232A] font-bold uppercase tracking-widest text-sm mb-2 block">Who We Are</span>
                <h2 className="text-3xl font-bold text-[#0A1F33] mb-4 tracking-[-0.02em]">
                  Company Overview
                </h2>
                <div className="h-[2px] w-16 bg-[#D8232A]" />
              </div>

              <div className="prose prose-lg text-[#334155] space-y-5 leading-[1.75]">
                <p className="text-[17px] font-medium">
                  We operate as a dedicated supply partner for original connectors, aggregating industrial demand from Indian manufacturing units. By maintaining direct access to manufacturer stock, we provide a stable, verified alternative to volatile spot markets.
                </p>
                <p className="text-[17px]">
                  Our focus is on executing the complete import lifecycle—from compliance and logistics to currency settlement—delivering a seamless "landed cost" purchase experience with guaranteed component authenticity.
                </p>
              </div>
            </div>

            {/* Right Column: Core Capabilities Card - Refined */}
            <div className="bg-[#F8FAFC] p-8 rounded-[4px] border-l-[3px] border-[#D8232A] border-t border-r border-b border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="text-lg font-bold text-[#0A1F33] mb-6 pb-4 border-b border-gray-200">
                Core Capabilities
              </h3>

              <ul className="space-y-0">
                <li className="flex items-start py-3 border-b border-gray-200 last:border-0">
                  <div className="mt-1 mr-4 text-[#D8232A]">
                    <Truck size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <span className="block font-bold text-[#0A1F33] text-[15px] mb-0.5">Global Procurement</span>
                    <span className="text-[#64748B] text-[13px] leading-tight block">Direct sourcing from authorized global distribution hubs.</span>
                  </div>
                </li>
                <li className="flex items-start py-3 border-b border-gray-200 last:border-0">
                  <div className="mt-1 mr-4 text-[#D8232A]">
                    <Zap size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <span className="block font-bold text-[#0A1F33] text-[15px] mb-0.5">Rapid Fulfillment</span>
                    <span className="text-[#64748B] text-[13px] leading-tight block">Structured processing for time-sensitive production requirements.</span>
                  </div>
                </li>
                <li className="flex items-start py-3 border-b border-gray-200 last:border-0">
                  <div className="mt-1 mr-4 text-[#D8232A]">
                    <ShieldCheck size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <span className="block font-bold text-[#0A1F33] text-[15px] mb-0.5">Risk Mitigation</span>
                    <span className="text-[#64748B] text-[13px] leading-tight block">Origin verification and documented lot traceability.</span>
                  </div>
                </li>
                <li className="flex items-start py-3 border-b border-gray-200 last:border-0">
                  <div className="mt-1 mr-4 text-[#D8232A]">
                    <FileCheck size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <span className="block font-bold text-[#0A1F33] text-[15px] mb-0.5">Compliance</span>
                    <span className="text-[#64748B] text-[13px] leading-tight block">GST-compliant invoicing with accurate HSN classification.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section - Structured Procurement Flow */}
      <section className="py-24 bg-[#f8f9fb] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-24 max-w-3xl">
            <h2 className="text-4xl font-extrabold text-[#0A1F33] mb-6 tracking-tight">How We Work</h2>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Standardized procurement workflow</p>
          </div>

          <div className="relative">
            {/* Desktop Connector Line - Running Through */}
            <div className="hidden md:block absolute top-[28px] left-0 right-0 h-[2px] bg-gray-200 w-full z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {/* Step 01 */}
              <ScrollAnimationWrapper>
                <div className="group relative bg-white md:bg-transparent p-8 md:p-0 rounded-lg md:rounded-none border md:border-0 border-gray-100 shadow-sm md:shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:hover:shadow-none">
                  {/* Desktop Card Content Container for Hover Effect */}
                  <div className="md:p-8 md:bg-white md:rounded-lg md:border md:border-gray-100 md:group-hover:shadow-xl md:transition-all md:duration-300">
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-[#D8232A] font-bold text-xl relative z-10 mb-8 group-hover:bg-[#D8232A] group-hover:border-[#D8232A] group-hover:text-white transition-colors duration-300 mx-auto md:mx-0">
                      01
                    </div>
                    <h3 className="font-bold text-[#0A1F33] text-xl mb-3 text-center md:text-left group-hover:text-[#D8232A] transition-colors">Requirement Analysis</h3>
                    <p className="text-[#64748B] text-sm leading-relaxed text-center md:text-left opacity-90 group-hover:opacity-100">
                      Technical validation of part numbers and quantity planning to ensure precise matching.
                    </p>
                  </div>
                </div>
              </ScrollAnimationWrapper>

              {/* Step 02 */}
              <ScrollAnimationWrapper delay={0.1}>
                <div className="group relative bg-white md:bg-transparent p-8 md:p-0 rounded-lg md:rounded-none border md:border-0 border-gray-100 shadow-sm md:shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:hover:shadow-none">
                  <div className="md:p-8 md:bg-white md:rounded-lg md:border md:border-gray-100 md:group-hover:shadow-xl md:transition-all md:duration-300">
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-[#D8232A] font-bold text-xl relative z-10 mb-8 group-hover:bg-[#D8232A] group-hover:border-[#D8232A] group-hover:text-white transition-colors duration-300 mx-auto md:mx-0">
                      02
                    </div>
                    <h3 className="font-bold text-[#0A1F33] text-xl mb-3 text-center md:text-left group-hover:text-[#D8232A] transition-colors">Source Verification</h3>
                    <p className="text-[#64748B] text-sm leading-relaxed text-center md:text-left opacity-90 group-hover:opacity-100">
                      Stock confirmation directly through authorized distributor networks and manufacturer allocation.
                    </p>
                  </div>
                </div>
              </ScrollAnimationWrapper>

              {/* Step 03 */}
              <ScrollAnimationWrapper delay={0.2}>
                <div className="group relative bg-white md:bg-transparent p-8 md:p-0 rounded-lg md:rounded-none border md:border-0 border-gray-100 shadow-sm md:shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:hover:shadow-none">
                  <div className="md:p-8 md:bg-white md:rounded-lg md:border md:border-gray-100 md:group-hover:shadow-xl md:transition-all md:duration-300">
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-[#D8232A] font-bold text-xl relative z-10 mb-8 group-hover:bg-[#D8232A] group-hover:border-[#D8232A] group-hover:text-white transition-colors duration-300 mx-auto md:mx-0">
                      03
                    </div>
                    <h3 className="font-bold text-[#0A1F33] text-xl mb-3 text-center md:text-left group-hover:text-[#D8232A] transition-colors">Secure Fulfillment</h3>
                    <p className="text-[#64748B] text-sm leading-relaxed text-center md:text-left opacity-90 group-hover:opacity-100">
                      Import clearance handling, quality inspection, and dispatched delivery with full documentation.
                    </p>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      <MissionVisionCards />

      <GlobalSourcingMetrics />

      {/* Corporate Information - Technical Grid */}
      <section className="py-20 bg-[#F7F8FA] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-[#0A1F33] uppercase tracking-wider">
            Corporate Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Left Card */}
            <div className="bg-white p-10 rounded-[4px] border border-gray-200 h-full flex flex-col justify-between hover:border-gray-300 transition-colors hover:-translate-y-1 duration-300 hover:shadow-lg">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <p className="text-xs font-bold text-[#D8232A] uppercase tracking-widest bg-red-50/50 px-2 py-1 rounded-[2px] inline-block border border-red-100">Partnership Firm</p>
                </div>
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-[#0A1F33] mb-3">Registered Office</h3>
                  <p className="text-[#334155] text-base leading-relaxed font-medium">
                    SHOP NO-1 VILLAGE JUNPAT<br />
                    HARKESH MARKET<br />
                    Noida Greater Noida Link Road<br />
                    Greater Noida, UP - 201310
                  </p>
                </div>
              </div>
              <div className="mt-auto">
                <div className="h-px w-full bg-gray-100 mb-6"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-r border-gray-100 pr-4">
                    <p className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mb-1">GSTIN</p>
                    <p className="text-[#0A1F33] font-mono font-medium text-sm">09BUPPS4694M1Z2</p>
                  </div>
                  <div className="pl-4">
                    <p className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mb-1">State</p>
                    <p className="text-[#0A1F33] font-mono font-medium text-sm">Uttar Pradesh (09)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-white p-10 rounded-[4px] border border-gray-200 h-full flex flex-col justify-between hover:border-gray-300 transition-colors hover:-translate-y-1 duration-300 hover:shadow-lg">
              <div className="mb-6">
                <p className="text-xs font-bold text-[#64748B] mb-6 uppercase tracking-widest">Direct Contact Channels</p>
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mb-1">Sales Hotline</p>
                    <a href="tel:+919211201778" className="text-[#0A1F33] hover:text-[#D8232A] text-3xl font-bold font-mono transition-colors block tracking-tight">
                      +91 92112 01778
                    </a>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mb-1">Email Support</p>
                    <a href="mailto:radhamadhavindia11@gmail.com" className="text-[#334155] hover:text-[#D8232A] text-lg transition-colors font-medium border-b border-gray-200 hover:border-[#D8232A] inline-block pb-0.5">
                      radhamadhavindia11@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                <div className="h-px w-full bg-gray-100 mb-6"></div>
                <p className="text-xs text-[#64748B] font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Operations Live: Mon-Sat, 9:00 AM - 6:00 PM IST
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section - Industrial */}
      <section className="bg-[#0A1F33] text-white py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 tracking-tight">Initiate Procurement</h2>
          <p className="text-lg mb-10 text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            Verify stock availability and pricing for your bill of materials.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#D8232A] text-white px-10 py-4 rounded-[4px] font-bold tracking-wide hover:bg-[#B91C22] hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-[#D8232A]/20"
          >
            REQUEST QUOTATION
          </Link>
        </div>
      </section>
    </div>
  )
}
