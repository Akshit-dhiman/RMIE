'use client'

import { BRANDS } from '@/lib/data'
import { motion } from 'framer-motion'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'
import { staggerContainerVariants } from '@/lib/animations'

export default function BrandGrid() {
  return (
    <div className="py-20 bg-white border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-sm font-bold text-[var(--muted-foreground)] uppercase tracking-widest whitespace-nowrap">
            Trusted By Global Industry Leaders
          </h2>
          <div className="h-px bg-[var(--border)] flex-grow" />
        </div>
        <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-5 border-t border-l border-[var(--border)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainerVariants}
          >
            {BRANDS.map((brand, idx) => (
              <motion.div
                key={brand.id}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 0.5 },
                  },
                }}
                className="group bg-white p-8 flex items-center justify-center h-40 border-r border-b border-[var(--border)] hover:bg-[var(--background)] transition-colors duration-300 cursor-default"
              >
                <div className="text-center grayscale opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xl font-bold text-[var(--foreground)]">{brand.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  )
}
