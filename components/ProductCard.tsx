'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { BRANDS } from '@/lib/data'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'
import { ArrowRight } from 'lucide-react'

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
  const [imageError, setImageError] = useState(false)
  const brandData = BRANDS.find((b) => b.name === brand)
  const brandLogo = brandData?.logo

  return (
    <ScrollAnimationWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl hover:border-gray-300 transition-all duration-300 flex flex-col h-full"
      >
        {/* Product Image Section - Fixed Height & Clean Background */}
        <div className="relative w-full h-[250px] bg-white p-6 flex items-center justify-center border-b border-gray-50 overflow-hidden">
          {!imageError ? (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex items-center justify-center"
            >
              <Image
                src={image}
                alt={partNumber}
                width={300}
                height={300}
                className="w-auto h-auto max-w-full max-h-full object-contain"
                onError={() => setImageError(true)}
              />
            </motion.div>
          ) : (
            /* Industrial Fallback */
            <div className="flex flex-col items-center justify-center text-center opacity-60">
              {brandLogo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={brandLogo} alt={brand} className="h-12 w-auto mb-4 grayscale" />
              ) : (
                <span className="text-2xl font-bold text-gray-300 mb-2 uppercase">{brand}</span>
              )}
              <div className="flex flex-col items-center">
                <span className="w-8 h-[1px] bg-gray-300 my-2"></span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Image Available on Request
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Product Info - Strict Hierarchy */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Top: Brand & Category */}
          <div className="flex justify-between items-start mb-2">
            <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">{brand}</span>
            <span className="border border-gray-200 text-gray-400 text-[10px] font-bold px-2 py-[2px] rounded-full uppercase tracking-wider bg-white">
              {category}
            </span>
          </div>

          {/* Product Code */}
          <h3 className="text-lg font-bold text-[#0A1F33] font-mono tracking-tight mb-2 group-hover:text-[#D8232A] transition-colors">
            {partNumber}
          </h3>

          {/* Middle: Description */}
          <p className="text-[13px] text-gray-500 line-clamp-2 leading-relaxed min-h-[3em] mb-5 font-normal">
            {description}
          </p>

          {/* CTA: Brand Red & Full Width */}
          <div className="mt-auto">
            <Link
              href="/contact"
              className="group/btn flex items-center justify-center w-full bg-[#D8232A] text-white py-3 rounded-[4px] text-sm font-bold border border-transparent hover:bg-[#B91C22] shadow-sm hover:shadow-md transition-all duration-300"
            >
              Request Quote
              <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </motion.div>
    </ScrollAnimationWrapper>
  )
}
