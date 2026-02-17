'use client'

import Link from 'next/link'
import { BRANDS } from '@/lib/data'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'
import { motion } from 'framer-motion'

export default function BrandsGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BRANDS.map((brand, idx) => (
          <ScrollAnimationWrapper key={brand.id} delay={idx * 0.08}>
            <motion.div whileHover={{ scale: 1.02 }}>
              <Link href={`/brands/${brand.slug}`}>
                <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition cursor-pointer h-full flex flex-col">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">{brand.name}</h2>
                  <p className="text-gray-600 text-center flex-grow">
                    Browse our selection of {brand.name} connectors and components.
                  </p>
                  <div className="mt-4 text-blue-600 font-medium text-center group-hover:text-blue-700">
                    View Products →
                  </div>
                </div>
              </Link>
            </motion.div>
          </ScrollAnimationWrapper>
        ))}
      </div>
    </div>
  )
}
