'use client'

import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface CounterProps {
    value: number
    duration?: number
    suffix?: string
}

export default function Counter({ value, duration = 1.5, suffix = '' }: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true, margin: '-20px' })
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => {
        // Round to integer
        const val = Math.round(latest)
        // Format 10000 as 10k if needed, but the user request 0 -> 10000 then "display as 10k"
        // The user requirement said: "0 -> 10000 (display as 10k after animation)"
        // But logically, scrolling numbers usually just count up.
        // If value is 10000, we want it to count to 10000.
        // We will handle the "k" in the display prop or transforming logic.
        // For simplicity and user request "display as 10k after animation", 
        // we can just count to the number and append suffix.

        if (val >= 1000 && suffix === 'k+') {
            // Special handling for 10k case if needed, or just let it count to 10
            // The user said "0 -> 10000".
            // If we count to 10000 it will show 10000.
            // If we want 10k, maybe we animate 0->10 and add 'k'.
            return val
        }
        return val
    })

    // To strictly follow: "0 -> 20", "0 -> 50", "0 -> 10000 (display as 10k)"
    // Wait, "display as 10k after animation" implies the end state is "10k".
    // The animation might be "0...10000" then snap to "10k"? Or animate "0...10" then "k"?
    // "0 -> 10000" implies the number grows.
    // Let's implement a standard counter that counts to the numeric value. 
    // For "10k", the numeric value is 10, and suffix is "k". 
    // User said "0 -> 10000 (display as 10k after animation)"
    // That's slightly contradictory unless we transition the format.
    // "display as 10k after animation" -> maybe the end result strings "10k".
    // Let's assume animate 0->10 for the "10k" case to be smooth, or 0->10000 and then format.
    // Actually, "0 -> 10000" means the user wants to see the big numbers rolling?
    // "0 -> 24" -> count 0 to 24.
    // "0 -> 10000" -> count 0 to 10000.
    // If I count 0-10000, it takes a lot of frames.
    // Let's try formatting: if target is 10, suffix 'k', we count 0->10.

    useEffect(() => {
        if (inView) {
            const controls = animate(count, value, {
                duration: duration,
                ease: 'easeOut',
            })
            return controls.stop
        }
    }, [count, inView, value, duration])

    return (
        <span ref={ref}>
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    )
}
