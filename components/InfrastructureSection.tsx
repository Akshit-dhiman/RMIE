'use client'

import { motion } from 'framer-motion'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

const CAPABILITIES = [
  {
    title: 'Global Procurement Network',
    description: 'Direct sourcing channels from authorized distributors in Europe, USA, and Asia.',
  },
  {
    title: 'Bonded Warehouse Storage',
    description: 'Climate-controlled local inventory ensuring immediate availability for critical components.',
  },
  {
    title: 'Quality Verification Lab',
    description: 'In-house inspection protocols to guarantee 100% authenticity and compliance.',
  },
  {
    title: 'Custom Logistics Solutions',
    description: 'End-to-end supply chain management with real-time tracking and diverse shipping options.',
  },
]

export default function InfrastructureSection() {
  return (
    <section className="py-24 bg-[var(--secondary)] border-y border-[var(--border)] relative overflow-hidden">
      {/* Background Texture similar to Hero */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Industrial Image Placeholder */}
          <ScrollAnimationWrapper delay={0}>
            <div className="bg-gradient-to-br from-[#1A2C3D] to-[#0A1624] border border-white/10 h-[500px] flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#0A1F33] opacity-50 mix-blend-multiply" />
              <div className="relative z-10 text-center p-8">
                <div className="w-16 h-16 border-2 border-white/20 mx-auto mb-6 flex items-center justify-center rounded-full">
                  <span className="text-2xl text-white/50">🏭</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-widest uppercase">Global Logistics Hub</h3>
                <p className="text-white/40 text-sm font-mono">Restricted Access Area</p>
              </div>

              {/* Technical Crosshairs */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/20" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/20" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/20" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/20" />
            </div>
          </ScrollAnimationWrapper>

          {/* Right: Capability List */}
          <div>
            <ScrollAnimationWrapper delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Infrastructure Backbone</h2>
              <div className="h-1 w-20 bg-[var(--accent)] mb-10" />
            </ScrollAnimationWrapper>

            <div className="space-y-4">
              {CAPABILITIES.map((item, idx) => (
                <ScrollAnimationWrapper key={idx} delay={0.1 + idx * 0.1}>
                  <motion.div
                    className="border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <h3 className="text-lg font-bold mb-2 text-white flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full" />
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm pl-4.5 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
