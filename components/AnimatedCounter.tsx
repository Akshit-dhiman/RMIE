'use client'

import { useAnimatedCounter } from '@/hooks/useAnimatedCounter'

interface AnimatedCounterProps {
  to: number
  format?: (value: number) => string
  duration?: number
  label: string
  sublabel?: string
}

export default function AnimatedCounter({
  to,
  format,
  duration = 2,
  label,
  sublabel,
}: AnimatedCounterProps) {
  const { ref, displayValue } = useAnimatedCounter({
    from: 0,
    to,
    duration,
    format,
  })

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-2">{displayValue}</div>
      <p className="text-gray-700 font-semibold text-lg">{label}</p>
      {sublabel && <p className="text-gray-600 text-sm mt-2">{sublabel}</p>}
    </div>
  )
}
