"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, ExternalLink, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const clients = [
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
    category: "Apparel & Lifestyle",
    url: "https://studiosalt.in/",
    logo: "/clients/studiosalt.png",
    logoBg: "bg-zinc-600 dark:bg-zinc-500",
    description: "Brand growth strategy, fashion marketing & creative content"
  },
  {
    name: "Space India",
    category: "Space Tech & Education",
    url: "https://space-india.com/",
    logo: "/clients/space-india.png",
    logoClassName: "invert dark:invert-0",
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
    transition: { staggerChildren: 0.08 }
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
  return (
    <section className="py-16 md:py-24 relative" id="clients">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 gradient-bg opacity-40 pointer-events-none" />

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4">
            <Building2 className="h-4 w-4" />
            Brand Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Brands Scaled & <span className="text-gradient">Clients</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Performance marketing, paid media strategy, and digital growth campaigns delivered for industry leaders and fast-growing brands
          </p>
        </motion.div>

        {/* 3x3 Client Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {clients.map((client, index) => (
            <motion.div key={index} variants={itemVariants}>
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full group focus:outline-none focus:ring-2 focus:ring-primary rounded-xl"
              >
                <Card className="h-full hover-lift border-border/50 bg-card/60 backdrop-blur-sm group-hover:border-primary/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                  <CardContent className="p-6 flex flex-col h-full justify-between">
                    <div>
                      {/* Logo Container */}
                      <div className={`relative w-full h-24 rounded-xl ${client.logoBg || 'bg-white dark:bg-zinc-900'} border border-border/40 p-4 flex items-center justify-center mb-5 group-hover:border-primary/30 transition-colors shadow-sm`}>
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={client.logo}
                            alt={`${client.name} logo`}
                            fill
                            className={`object-contain p-2 transition-transform duration-300 group-hover:scale-105 ${client.logoClassName || ''}`}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      </div>

                      {/* Brand Info */}
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <h3 className="font-bold text-base md:text-lg text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                          {client.name}
                        </h3>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                      </div>

                      <Badge variant="secondary" className="text-xs font-normal mb-3">
                        {client.category}
                      </Badge>

                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {client.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground group-hover:text-primary transition-colors font-medium">
                      <span>Visit Website</span>
                      <span className="text-primary font-semibold">→</span>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
