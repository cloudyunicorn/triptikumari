"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ChevronDown, Rocket, Palette, BarChart, Briefcase } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const experiences = [
  {
    title: "Senior Executive - Social Media Marketing",
    company: "Astroport Global (A unit of Space India Pvt Ltd.)",
    period: "May 2024 - Dec 2024",
    description: [
      "Lead & Execute comprehensive social media and digital strategies",
      "Manage performance-driven campaigns using analytics and creative storytelling",
      "Oversee end-to-end content creation, including graphics and videos",
      "Optimise organic campaigns through Meta Ads and WhatsApp",
      "Drive digital growth by leveraging trends and fostering community interaction"
    ],
    tags: ["Social Media", "Digital Strategy", "Meta Ads", "Content Creation"],
    icon: Rocket
  },
  {
    title: "Merchandise Designer",
    company: "Gnomon Astrotech Pvt. Ltd.",
    period: "2023 - 2024",
    description: [
      "Spearheaded Official ISRO Merchandise launch with 150+ products",
      "Directed product design and detailing with brand alignment",
      "Coordinated vendor sourcing and sample testing",
      "Created e-commerce website listings with SEO-friendly content",
      "Managed daily WhatsApp outreach to 10,000+ users"
    ],
    tags: ["Merchandise Design", "Product Lifecycle", "E-commerce"],
    icon: Palette
  },
  {
    title: "Social Media Manager and Analyst",
    company: "Space Foundation",
    period: "2022 - 2023",
    description: [
      "Conceptualised high-fidelity Gaganyaan Astronaut Suit Prototype",
      "Designed functional glow-in-the-dark uniforms",
      "Managed engaging content on various social media platforms",
      "Analyzed performance using data-driven tools and strategies"
    ],
    tags: ["Social Media", "Analytics", "Content Strategy"],
    icon: BarChart
  }
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 }
  }
}

export default function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4">
            <Briefcase className="h-4 w-4" />
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            3+ years across digital marketing, social media management, and product design
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="max-w-3xl mx-auto relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-10 md:pl-16 pb-8 last:pb-0"
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-6 -translate-x-1/2 top-6 w-3 h-3 rounded-full accent-dot" />

              <Card
                className={`cursor-pointer hover-lift border-border/50 transition-all ${expandedIndex === index ? 'ring-1 ring-primary/20' : ''
                  }`}
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <CardHeader className="pb-3 px-4 md:px-6">
                  {/* Period - on its own line on mobile */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Calendar className="h-3 w-3 shrink-0" />
                    <span>{exp.period}</span>
                  </div>

                  {/* Title and company */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                      <exp.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <CardTitle className="text-sm md:text-base leading-snug break-words">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="mt-1 text-xs md:text-sm break-words">
                        {exp.company}
                      </CardDescription>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {exp.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardContent className="pt-0 border-t border-border/50">
                        <ul className="space-y-2 mt-4">
                          {exp.description.map((item, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Expand indicator */}
                <div className="px-6 pb-4 flex justify-center">
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}