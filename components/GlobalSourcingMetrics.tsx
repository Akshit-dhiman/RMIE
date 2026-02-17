'use client'

import AnimatedCounter from './AnimatedCounter'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function GlobalSourcingMetrics() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Global Sourcing Network</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollAnimationWrapper>
            <AnimatedCounter
              to={50}
              label="Factory Partners Globally"
              sublabel="Direct relationships with premier manufacturers"
              format={(val) => `${val}+`}
            />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper delay={0.1}>
            <AnimatedCounter
              to={70}
              label="In-Stock Availability"
              sublabel="Extensive inventory for faster delivery"
              format={(val) => `${val}%`}
            />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper delay={0.2}>
            <AnimatedCounter
              to={100}
              label="Authentic Products"
              sublabel="All products guaranteed original"
              format={(val) => `${val}%`}
            />
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}
