'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

interface ProductCardProps {
  id: number
  brand: string
  partNumber: string
  category: string
  description: string
  image: string
}

export default function ProductCard({
  brand,
  partNumber,
  category,
  description,
  image,
}: ProductCardProps) {
  return (
    <ScrollAnimationWrapper>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
      >
        {/* Product Image */}
        <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center">
          <Image
            src={image}
            alt={partNumber}
            width={200}
            height={200}
            className="w-full h-full object-cover"
            quality={80}
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-xs font-semibold text-blue-600 uppercase">{brand}</p>
              <p className="text-sm font-bold text-gray-900">{partNumber}</p>
            </div>
            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              {category}
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contact"
              className="block w-full bg-orange-500 text-white text-center py-2 rounded font-medium hover:bg-orange-600 transition"
            >
              Request Quote
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </ScrollAnimationWrapper>
  )
}
