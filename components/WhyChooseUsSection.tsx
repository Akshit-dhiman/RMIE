'use client'

import { FEATURES } from '@/lib/data'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'
import { motion } from 'framer-motion'

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-white border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[var(--border)] border border-[var(--border)] bg-[var(--background)]">
          {FEATURES.slice(0, 4).map((feature, idx) => (
            <ScrollAnimationWrapper key={idx} delay={idx * 0.08}>
              <div className="p-10 h-full bg-white hover:bg-[var(--background)] transition-colors duration-300 group">
                <div className="text-3xl mb-6 text-[var(--accent)] opacity-80 group-hover:opacity-100 transition-opacity">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[var(--primary)] mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
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
