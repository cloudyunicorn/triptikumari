"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LogoLoopProps {
    items: React.ReactNode[]
    speed?: number // pixels per second
    direction?: 'left' | 'right'
    className?: string
    pauseOnHover?: boolean
}

export function LogoLoop({
    items,
    speed = 40,
    direction = 'left',
    className,
    pauseOnHover = true
}: LogoLoopProps) {
    const [duplicateCount, setDuplicateCount] = useState(2)
    const [isHovered, setIsHovered] = useState(false)

    // Ensure we have enough items to loop seamlessly even on large screens
    useEffect(() => {
        const handleResize = () => {
            // Very basic heuristic: roughly 1 set of items per 1000px of screen width
            const neededDuplicates = Math.max(2, Math.ceil(window.innerWidth / 800) + 1)
            if (neededDuplicates !== duplicateCount) {
                setDuplicateCount(neededDuplicates)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [duplicateCount])

    // Animation duration calculation based on speed
    // Assumes average item width is ~200px (just for CSS calculation)
    // Real duration depends on the container width but we'll use a fixed arbitrary width for the CSS animation
    // In Framer Motion we can animate x from 0 to -100% (or vice versa)

    const moveDirection = direction === 'left' ? -1 : 1

    return (
        <div
            className={cn(
                "w-full overflow-hidden flex relative",
                className
            )}
            style={{
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
            onMouseEnter={() => pauseOnHover && setIsHovered(true)}
            onMouseLeave={() => pauseOnHover && setIsHovered(false)}
        >
            {/* 
        Container that holds all sets of items.
        We animate this container continuously.
      */}
            <motion.div
                className="flex min-w-max gap-8 md:gap-12 lg:gap-16 pr-8 md:pr-12 lg:pr-16"
                animate={{
                    x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']
                }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 1000 / speed, // 1000px per `duration` seconds
                }}
                // Adjust animation speed when hovered
                style={{
                    animationPlayState: isHovered ? 'paused' : 'running'
                }}
            >
                {/* We duplicate the entire list of items multiple times to create the infinite effect */}
                {Array.from({ length: 4 }).map((_, setIndex) => (
                    <div key={`set-${setIndex}`} className="flex items-center gap-8 md:gap-12 lg:gap-16">
                        {items.map((item, itemIndex) => (
                            <div
                                key={`item-${setIndex}-${itemIndex}`}
                                className="whitespace-nowrap flex-shrink-0"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
