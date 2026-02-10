"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, Download, Linkedin, MapPin, ArrowDown } from 'lucide-react'
import { toast } from 'sonner'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const roles = [
  "Digital Marketing Specialist",
  "Social Media Strategist",
  "Growth Strategist",
  "Brand Growth Expert",
  "Content Strategist",
]

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export default function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayRole, setDisplayRole] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[roleIndex]

    if (isTyping) {
      if (displayRole.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayRole(currentRole.slice(0, displayRole.length + 1))
        }, 80)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayRole.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayRole(displayRole.slice(0, -1))
        }, 40)
        return () => clearTimeout(timeout)
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setIsTyping(true)
      }
    }
  }, [displayRole, isTyping, roleIndex])

  const handleDownload = () => {
    toast.success('Resume download started!')
    window.open('/resume.pdf', '_blank')
  }

  const handleContact = () => {
    window.location.href = 'mailto:goyaltripti3096@gmail.com'
  }

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+917044217703')
    toast.success('Phone number copied!')
  }

  return (
    <section className="relative min-h-screen flex items-center py-16 md:py-24 overflow-hidden" id="home">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 gradient-bg" />

      <div className="container relative mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            className="space-y-6 md:space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Status badge */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary px-4 py-2 rounded-full bg-primary/10">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Open to Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              variants={fadeInUp}
            >
              Hi, I&apos;m{' '}
              <span className="text-gradient">Tripti Kumari</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              className="flex items-center gap-2 text-lg md:text-xl text-muted-foreground"
              variants={fadeInUp}
            >
              <span>I&apos;m a</span>
              <span className="font-semibold text-foreground">
                {displayRole}
                <span className="inline-block w-0.5 h-5 md:h-6 bg-primary ml-1 animate-pulse" />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
              variants={fadeInUp}
            >
              Result-driven Social Media & Digital Marketing Professional with{' '}
              <span className="font-semibold text-foreground">4+ years</span> of experience
              driving brand growth, engagement and lead generation across multi-platform
              ecosystems. Expertise in content strategy, performance marketing, analytics-driven
              optimization and community building.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-3 pt-2"
              variants={fadeInUp}
            >
              <Button
                onClick={handleContact}
                size="lg"
                className="gap-2 rounded-xl"
              >
                <Mail className="h-4 w-4" />
                Let&apos;s Connect
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownload}
                className="gap-2 rounded-xl"
              >
                <Download className="h-4 w-4" />
                Resume
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-xl"
                onClick={() => window.open('https://linkedin.com', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </motion.div>

            {/* Contact info - simplified */}
            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              variants={fadeInUp}
            >
              <button
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={handleCopyPhone}
              >
                <Phone className="h-4 w-4 text-primary" />
                +91 7044217703
              </button>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                New Delhi, India
              </span>
            </motion.div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            className="flex justify-center lg:justify-end order-first lg:order-last"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative">
              {/* Simple glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl" />

              {/* Profile image */}
              <div className="relative h-64 w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 rounded-full border-4 border-background shadow-2xl overflow-hidden bg-muted">
                <Image
                  src="/profile-pic.png"
                  alt="Tripti Kumari"
                  width={320}
                  height={320}
                  className="object-cover"
                  loading="eager"
                  quality={90}
                  onLoad={() => setImageLoaded(true)}
                  style={{
                    opacity: imageLoaded ? 1 : 0,
                    transition: 'opacity 0.5s ease-out'
                  }}
                />
              </div>

              {/* Experience badge */}
              <motion.div
                className="absolute -bottom-2 -right-2 glass px-4 py-2 rounded-full shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <span className="text-sm font-bold text-gradient">4+ Years</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span className="text-xs text-muted-foreground">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="h-4 w-4 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}