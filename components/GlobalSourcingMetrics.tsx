'use client'

import ScrollAnimationWrapper from './ScrollAnimationWrapper'
import AnimatedCounter from './AnimatedCounter'

export default function GlobalSourcingMetrics() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#0A1F33] mb-3 tracking-tight">Operational Scale</h2>
          <p className="text-gray-500 font-medium text-base max-w-2xl mx-auto">
            Measured operational capacity and sourcing reach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-center justify-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
          <ScrollAnimationWrapper>
            <div className="px-4 py-8 md:py-0 text-center group">
              <AnimatedCounter
                to={50}
                label="Factory Partners"
                sublabel="Verified manufacturers"
                format={(val) => `${val}+`}
                className="text-4xl font-extrabold text-[#0A1F33] mb-2 block group-hover:-translate-y-1 transition-transform duration-300"
              />
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper delay={0.1}>
            <div className="px-4 py-8 md:py-0 text-center group">
              <AnimatedCounter
                to={70}
                label="In-Stock Availability"
                sublabel="Immediate dispatch readiness"
                format={(val) => `${val}%`}
                className="text-4xl font-extrabold text-[#0A1F33] mb-2 block group-hover:-translate-y-1 transition-transform duration-300"
              />
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper delay={0.2}>
            <div className="px-4 py-8 md:py-0 text-center group">
              <AnimatedCounter
                to={100}
                label="Authentic Products"
                sublabel="Guaranteed original components"
                format={(val) => `${val}%`}
                className="text-4xl font-extrabold text-[#0A1F33] mb-2 block group-hover:-translate-y-1 transition-transform duration-300"
              />
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}
