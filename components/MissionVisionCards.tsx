'use client'

import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function MissionVisionCards() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Mission */}
          <ScrollAnimationWrapper>
            <div className="bg-white p-8 rounded-lg border border-gray-100 border-t-[3px] border-t-[#D8232A] shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#0A1F33] mb-4 tracking-tight">Our Mission</h3>
              <p className="text-[#334155] leading-relaxed font-medium text-lg">
                To execute structured sourcing and verified import procurement for automotive and industrial manufacturers.
              </p>
            </div>
          </ScrollAnimationWrapper>

          {/* Vision */}
          <ScrollAnimationWrapper delay={0.1}>
            <div className="bg-white p-8 rounded-lg border border-gray-100 border-t-[3px] border-t-[#D8232A] shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#0A1F33] mb-4 tracking-tight">Our Vision</h3>
              <p className="text-[#334155] leading-relaxed font-medium text-lg">
                To become a dependable long-term procurement partner for Indian OEM and industrial supply chains.
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}
