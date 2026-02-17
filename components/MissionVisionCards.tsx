'use client'

import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function MissionVisionCards() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <ScrollAnimationWrapper>
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
              <div className="text-3xl font-bold text-blue-600 mb-4">Our Mission</div>
              <p className="text-gray-700 leading-relaxed">
                To be the most reliable and customer-focused connector supplier in India, providing
                authentic original products with exceptional service and competitive pricing. We aim
                to simplify the sourcing process for businesses of all sizes by offering a seamless
                experience from quotation to delivery.
              </p>
            </div>
          </ScrollAnimationWrapper>

          {/* Vision */}
          <ScrollAnimationWrapper delay={0.1}>
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
              <div className="text-3xl font-bold text-blue-600 mb-4">Our Vision</div>
              <p className="text-gray-700 leading-relaxed">
                To connect the world and connect the future by being the preferred partner for
                automotive and industrial connectors. We aspire to expand our reach globally while
                maintaining our commitment to quality, authenticity, and customer satisfaction.
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}
