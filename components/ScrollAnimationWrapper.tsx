'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUpVariants } from '@/lib/animations'

interface ScrollAnimationWrapperProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function ScrollAnimationWrapper({
  children,
  delay = 0,
  className = '',
}: ScrollAnimationWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: 'easeOut',
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
