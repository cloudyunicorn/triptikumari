"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, Download, MapPin, ArrowDown } from 'lucide-react'

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)
import { toast } from 'sonner'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { LogoLoop } from './logo-loop'

const roles = [
  "Digital Marketing Strategist",
  "Performance Marketing Specialist",
  "Brand Growth Expert",
  "Revenue-Driven Campaigner",
]
const MetricItem = ({ value, label, highlight = false }: { value: string, label: string, highlight?: boolean }) => (
  <div className="flex flex-col items-center justify-center px-4">
    <span className={`text-3xl md:text-4xl font-bold tracking-tight mb-1 ${highlight ? 'text-primary' : 'text-foreground'}`}>
      {value}
    </span>
    <span className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">
      {label}
    </span>
  </div>
)

const loopItems = [
  <MetricItem key="1" value="5 Years" label="of Experience" highlight />,
  <MetricItem key="2" value="4+" label="Brands Scaled" />,
  <MetricItem key="3" value="₹2L+" label="Ad Budgets Managed" />,
  <MetricItem key="4" value="₹20L+" label="Revenue Generated" highlight />,
  <MetricItem key="5" value="50K+" label="Users Automated" />,
  <MetricItem key="6" value="150+" label="Products Launched" />,
  <MetricItem key="7" value="92%+" label="Reach Increased" />,
  <MetricItem key="8" value="20K+" label="Reel Views" />,
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
    window.open('/Resume.pdf', '_blank')
  }

  const handleContact = () => {
    window.location.href = 'mailto:goyaltripti3096@gmail.com'
  }

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+917044217703')
    toast.success('Phone number copied!')
  }

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col overflow-hidden" id="home">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 gradient-bg" />

      <div className="flex-1 flex items-center w-full pt-16 pb-8 md:pt-24 md:pb-10">
        <div className="container relative mx-auto px-4 z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
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
                Dedicated to scaling brands through performance-driven Meta Ads, conversion
                funnels, and data-backed strategies. With <span className="font-semibold text-foreground">4+ years</span> of
                experience, I have a proven track record of driving 90%+ reach along with
                multi-lakh revenue generation through integrated digital campaigns.
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
                  onClick={() => window.open('https://www.linkedin.com/in/tripti-kumari-3908aa131/', '_blank')}
                >
                  <LinkedinIcon className="h-5 w-5" />
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

              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Metrics Loop - now part of flex flow at bottom */}
      <div className="relative w-full border-y border-border/50 bg-background/50 backdrop-blur-sm py-4 z-20">
        <LogoLoop
          items={loopItems}
          speed={20}
          direction="left"
        />
      </div>
    </section>
  )
}