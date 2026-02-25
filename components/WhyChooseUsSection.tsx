'use client'

import { Zap, Box, Globe, ShieldCheck } from 'lucide-react'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

const FEATURES = [
  {
    title: '24 Hour Quotation Response',
    description: 'Get competitive pricing on any connector product within 24 hours.',
    icon: Zap,
  },
  {
    title: '70% In-Stock Availability',
    description: 'Extensive inventory ensures faster delivery and reduced lead times.',
    icon: Box,
  },
  {
    title: 'Global Sourcing Network',
    description: 'Access to premium manufacturers worldwide with authentic products.',
    icon: Globe,
  },
  {
    title: 'Quality Guarantee',
    description: 'All products certified authentic with comprehensive quality assurance.',
    icon: ShieldCheck,
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="py-[80px] bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading - Corporate/Industrial */}
        <div className="mb-[40px]">
          <h2 className="text-3xl font-bold text-[#0A1F33] mb-4 tracking-[-0.02em]">
            Why Choose Us
          </h2>
          <div className="w-12 h-1 bg-[#D8232A]" />
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <ScrollAnimationWrapper key={idx} delay={idx * 0.1}>
              <div
                className="h-full bg-white rounded-sm p-8 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="mb-6">
                  <feature.icon
                    className="w-8 h-8 text-[#D8232A] group-hover:scale-105 transition-transform duration-300"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-[#0A1F33] mb-3 tracking-tight group-hover:text-[#D8232A] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[15px] text-gray-600 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

      </div>
    </section>
  )
}
