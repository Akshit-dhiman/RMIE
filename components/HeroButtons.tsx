'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-6 items-center justify-start mt-4">
      <motion.div whileHover={{ scale: 1.0 }} whileTap={{ scale: 0.99 }}>
        <Link
          href="/products"
          className="block bg-[#D8232A] text-white px-8 py-3.5 md:py-4 md:px-10 rounded-[4px] text-lg font-bold tracking-wide hover:bg-[#B71C22] transition-colors border border-transparent shadow-none"
          style={{ height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          VIEW CATALOG
        </Link>
      </motion.div>
      <motion.div whileHover={{ x: 2 }}>
        <Link
          href="/contact"
          className="group flex items-center gap-3 text-white font-bold tracking-wide hover:opacity-90 transition-opacity"
          style={{ height: '52px' }}
        >
          <span className="text-lg">REQUEST QUOTE</span>
          <span className="text-xl group-hover:translate-x-1 transition-transform">&rarr;</span>
        </Link>
      </motion.div>
    </div>
  )
}
