'use client'

import Link from 'next/link'
import { CORE_OFFERINGS } from '@/lib/data'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'
import { motion } from 'framer-motion'

export default function CoreOfferingsSection() {
  return (
    <section className="py-32 bg-[#F4F6F8] border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-[var(--primary)] mb-6 tracking-tight">Core Product Categories</h2>
          <div className="w-24 h-1.5 bg-[var(--accent)]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-12">
          {CORE_OFFERINGS.map((offering, idx) => (
            <ScrollAnimationWrapper key={idx} delay={idx * 0.1}>
              <Link
                href={`/products?category=${encodeURIComponent(offering.category)}`}
                className="group block h-full bg-white border border-[#E3E8EE] hover:border-gray-200 transition-all duration-200 ease-out hover:-translate-y-2 hover:shadow-xl rounded-[var(--radius)] overflow-hidden relative"
              >
                <div className="p-10 h-full flex flex-col relative z-10">
                  {/* Top Accent Line (Hidden by default, visible on hover) - Made clearer */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-[var(--accent)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <h3 className="text-3xl font-bold text-[var(--primary)] mb-4 group-hover:text-[var(--accent)] transition-colors tracking-tight">
                    {offering.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] text-base leading-relaxed mb-8 flex-grow">
                    {offering.description}
                  </p>

                  <div className="pt-6 border-t border-[var(--border)] flex items-center justify-between">
                    <span className="text-[var(--primary)] font-bold text-sm tracking-wide uppercase group-hover:text-[var(--accent)] transition-colors">
                      View Specifications
                    </span>
                    <span className="text-[var(--accent)] text-xl group-hover:translate-x-1 transition-transform duration-200">
                      &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
