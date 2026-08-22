"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, ExternalLink, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Client {
  name: string
  category: string
  url: string
  logo: string
  logoClassName?: string
  logoBg?: string
  description: string
}

const clients: Client[] = [
  {
    name: "Toreto",
    category: "Audio & Consumer Tech",
    url: "https://toreto.in/",
    logo: "/clients/toreto.png",
    description: "Meta ads, audience targeting & consumer tech D2C growth"
  },
  {
    name: "Stealth Supplements",
    category: "Health & Nutrition",
    url: "https://stealthsupps.in/",
    logo: "/clients/stealthsupps.png",
    logoClassName: "dark:invert",
    description: "Performance marketing, conversion funnels & customer acquisition"
  },
  {
    name: "Studio Salt",
    category: "Luxury Architecture & Interiors",
    url: "https://studiosalt.in/",
    logo: "/clients/studiosalt.png",
    logoBg: "bg-zinc-600 dark:bg-zinc-500",
    description: "Brand growth strategy, digital positioning & luxury interior lead generation"
  },
  {
    name: "Space India",
    category: "Space Tech & Education",
    url: "https://space-india.com/",
    logo: "/clients/space-india.png",
    logoBg: "bg-white dark:bg-white",
    description: "Full-funnel digital campaigns, community building & SEO"
  },
  {
    name: "Astroport Global",
    category: "Astronomy & Tourism",
    url: "https://astroportglobal.com/",
    logo: "/clients/astroport.png",
    description: "Paid amplification, 120% reach growth & lead generation"
  },
  {
    name: "Aditya Birla Group",
    category: "Enterprise Conglomerate",
    url: "https://www.adityabirla.com/",
    logo: "/clients/adityabirla.jpg",
    description: "Digital campaign execution & strategic brand communication"
  },
  {
    name: "Enhanced Labs",
    category: "Sports Nutrition & D2C",
    url: "https://www.enhancedlabs.in/",
    logo: "/clients/enhancedlabs.svg",
    description: "Paid media strategy, ROAS optimization & D2C scaling"
  },
  {
    name: "CWWS Plumbing",
    category: "Commercial & Home Services",
    url: "https://cwws.plumbing/",
    logo: "/clients/cwws.png",
    description: "Lead generation, local SEO & digital advertising"
  },
  {
    name: "Mooncre Martech",
    category: "MarTech & Growth Marketing",
    url: "https://www.mooncre.in/",
    logo: "/clients/mooncre.png",
    logoClassName: "invert dark:invert-0",
    description: "End-to-end digital marketing for 10+ client brands & ₹1-2L ad budgets"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
}

export default function ClientsSection() {
  const row1Clients = clients.slice(0, 5)
  const row2Clients = clients.slice(5, 9)

  const renderClientCard = (client: Client, index: number) => (
    <motion.div key={client.name} variants={itemVariants} className="h-full">
      <a
        href={client.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full group focus:outline-none focus:ring-2 focus:ring-primary rounded-xl"
      >
        <Card className="h-full hover-lift border-border/50 bg-card/60 backdrop-blur-sm group-hover:border-primary/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
          <CardContent className="p-2.5 sm:p-3 md:p-3.5 lg:p-5 flex flex-col h-full justify-between">
            <div>
              {/* Logo Container */}
              <div className={`relative w-full h-14 sm:h-16 md:h-18 lg:h-20 rounded-lg md:rounded-xl ${client.logoBg || 'bg-white dark:bg-zinc-900'} border border-border/40 p-1.5 sm:p-2 md:p-3 flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:border-primary/30 transition-colors shadow-sm`}>
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    className={`object-contain p-1 sm:p-1.5 transition-transform duration-300 group-hover:scale-105 ${client.logoClassName || ''}`}
                    sizes="(max-width: 768px) 33vw, 20vw"
                  />
                </div>
              </div>

              {/* Brand Info */}
              <div className="flex items-center justify-between gap-1 mb-1">
                <h3 className="font-bold text-xs sm:text-sm md:text-sm lg:text-base text-foreground group-hover:text-primary transition-colors truncate">
                  {client.name}
                </h3>
                <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-muted-foreground group-hover:text-primary transition-all shrink-0" />
              </div>

              <div className="mb-1.5 sm:mb-2 md:mb-2.5">
                <Badge variant="secondary" className="text-[9px] sm:text-[10px] md:text-[10px] lg:text-[11px] font-normal px-1.5 sm:px-2 py-0.5 max-w-full truncate inline-block">
                  {client.category}
                </Badge>
              </div>

              <p className="text-[10px] sm:text-[11px] md:text-xs text-muted-foreground line-clamp-2 md:line-clamp-3 leading-snug">
                {client.description}
              </p>
            </div>

            <div className="pt-2 md:pt-3 mt-2 md:mt-3 border-t border-border/40 flex items-center justify-between text-[10px] sm:text-xs text-muted-foreground group-hover:text-primary transition-colors font-medium">
              <span className="hidden sm:inline">Visit Website</span>
              <span className="sm:hidden">Visit</span>
              <span className="text-primary font-semibold">→</span>
            </div>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  )

  return (
    <section className="py-12 md:py-24 relative" id="clients">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 gradient-bg opacity-40 pointer-events-none" />

      <div className="container relative mx-auto px-3 sm:px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-primary mb-3 sm:mb-4">
            <Building2 className="h-4 w-4" />
            Brand Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Brands Scaled & <span className="text-gradient">Clients</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Performance marketing, paid media strategy, and digital growth campaigns delivered for industry leaders and fast-growing brands
          </p>
        </motion.div>

        {/* Smartphone Grid (screen < md): Exactly 3 logos per row */}
        <motion.div
          className="grid grid-cols-3 gap-2 sm:gap-3 md:hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {clients.map((client, idx) => renderClientCard(client, idx))}
        </motion.div>

        {/* Tablet & Desktop Grid (screen >= md): 2 Rows (5 in Row 1, 4 in Row 2) */}
        <motion.div
          className="hidden md:block space-y-4 lg:space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Row 1: 5 Logos */}
          <div className="grid grid-cols-5 gap-3.5 lg:gap-5">
            {row1Clients.map((client, idx) => renderClientCard(client, idx))}
          </div>

          {/* Row 2: 4 Logos centered */}
          <div className="grid grid-cols-4 gap-3.5 lg:gap-5 max-w-5xl lg:max-w-6xl mx-auto">
            {row2Clients.map((client, idx) => renderClientCard(client, idx + 5))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
