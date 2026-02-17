'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-start">
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link
          href="/products"
          className="block bg-[var(--accent)] text-white px-8 py-4 rounded-[4px] text-lg font-bold tracking-wide hover:bg-[#B91C22] transition-colors border border-[var(--accent)]"
        >
          VIEW CATALOG
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link
          href="/contact"
          className="block bg-transparent text-white border border-white px-8 py-4 rounded-[4px] text-lg font-bold tracking-wide hover:bg-white/10 transition-colors"
        >
          REQUEST QUOTE
        </Link>
      </motion.div>
    </div>
  )
}
