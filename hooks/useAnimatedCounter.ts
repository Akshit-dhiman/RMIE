'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface UseAnimatedCounterProps {
  from: number
  to: number
  duration?: number
  format?: (value: number) => string
}

export function useAnimatedCounter({
  from,
  to,
  duration = 2,
  format = (val) => val.toString(),
}: UseAnimatedCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [displayValue, setDisplayValue] = useState(from)

  useEffect(() => {
    if (!isInView) return

    let animationFrameId: number
    const startTime = performance.now()
    const frameDuration = 1000 / 60 // 60fps

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)

      // Easing function for smooth animation
      const easeProgress = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress

      const currentValue = Math.floor(from + (to - from) * easeProgress)
      setDisplayValue(currentValue)

      if (progress < 1) {
        animationFrameId = setTimeout(
          () => animate(performance.now()),
          frameDuration
        )
      }
    }

    animationFrameId = setTimeout(
      () => animate(performance.now()),
      frameDuration
    )

    return () => clearTimeout(animationFrameId)
  }, [isInView, from, to, duration])

  return {
    ref,
    displayValue: format(displayValue),
  }
}
