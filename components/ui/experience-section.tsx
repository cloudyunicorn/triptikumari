"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ChevronDown, Rocket, Palette, BarChart, Briefcase, Megaphone, ShoppingBag, Shirt, Heart, Users } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const experiences = [
  {
    title: "Senior Social Media Marketing",
    company: "Astroport Global (Space Group of Companies) | New Delhi",
    period: "Jan 2025 – Dec 2025",
    description: [
      "Scaled Instagram presence from 200 → 4.9K followers in 12 months through strategic content planning, collaborations, and trend-driven campaigns",
      "Managed performance-driven campaigns using analytics and creative storytelling, achieving ~10K daily reel views and consistent engagement growth",
      "Optimised organic reach via Meta Ads and WhatsApp (Interakt) automation, increasing monthly reach to 60K–115K accounts (+129%) and improving conversions",
      "Oversaw end-to-end content creation, maintaining consistent brand voice across graphics and video assets while driving community interaction"
    ],
    tags: ["Social Media", "Meta Ads", "Content Strategy", "Instagram Growth", "WhatsApp Automation"],
    icon: Rocket
  },
  {
    title: "Merchandise & Design",
    company: "Gnomon Astrotech Pvt. Ltd. (Space Group of Companies) | New Delhi",
    period: "May 2024 – Dec 2024",
    description: [
      "Managed digital launch of 150+ official ISRO merchandise products across 30+ SKUs with integrated social promotion",
      "Developed digital and social media creatives, boosting brand visibility and engagement",
      "Optimized SEO-driven e-commerce listings, boosting organic discoverability and online sales performance",
      "Collaborated on product design, packaging, pricing and positioning to maintain a premium brand image",
      "Coordinated vendors on sampling and quality checks to ensure timely market-ready delivery"
    ],
    tags: ["Merchandise Design", "SEO", "E-commerce", "Product Marketing"],
    icon: ShoppingBag
  },
  {
    title: "Merchandise Designer",
    company: "Astroport Global (Space Group of Companies) | New Delhi",
    period: "April 2023 – May 2024",
    description: [
      "Built and launched the Astroport merchandise line with a focus on branding and market readiness",
      "Executed performance marketing creatives and supported Meta Ads campaigns for lead generation",
      "Scaled customer outreach using Interakt WhatsApp automation for 10,000+ users"
    ],
    tags: ["Branding", "Meta Ads", "WhatsApp Automation", "Lead Generation"],
    icon: Palette
  },
  {
    title: "Project Lead: Space Apparel & Prototypes",
    company: "Space India Pvt. Ltd. | New Delhi",
    period: "Jan 2023 – March 2023",
    description: [
      "Led an educational prototype project featuring a high-fidelity Gaganyaan Astronaut Suit for public showcases",
      "Designed functional uniforms for astronomy professionals, combining practicality with visual storytelling"
    ],
    tags: ["Project Leadership", "Product Design", "Visual Storytelling"],
    icon: Shirt
  },
  {
    title: "Social Media Manager & Analyst",
    company: "Space Foundation",
    period: "Aug 2022 – Dec 2022",
    description: [
      "Managed and executed social media strategy to promote science education, astronomy and space sciences across public, educational and media audiences",
      "Created engaging, platform-specific content and analyzed performance using data-driven tools to optimize reach, engagement and impact",
      "Managed social media and digital communication for social impact campaigns",
      "Created posters, videos and promotional creatives for 50+ events and initiatives",
      "Executed digital event promotion and coordinated with internal teams to ensure consistent brand messaging"
    ],
    tags: ["Social Media", "Analytics", "Content Strategy", "Digital Communication"],
    icon: BarChart
  },
  {
    title: "Senior Executive – Social Media Marketing (Freelance)",
    company: "Pariyaat | Assam (Hybrid)",
    period: "June 2021 – Oct 2023",
    description: [
      "Managed end-to-end social media strategy and visual storytelling, directing professional photoshoots to elevate brand positioning in the fashion market",
      "Leveraged trend research to produce high-impact digital campaigns that maintained consistent audience engagement and brand relevance"
    ],
    tags: ["Social Media", "Fashion Marketing", "Visual Storytelling", "Freelance"],
    icon: Megaphone
  },
  {
    title: "Social Media & Marketing Coordinator (Non-Profit)",
    company: "Parikalpana | Assam (Hybrid)",
    period: "Nov 2020 – Dec 2023",
    description: [
      "Managed social media and digital communication for social impact campaigns",
      "Created posters, videos and promotional creatives for 50+ events and initiatives",
      "Executed digital event promotion and coordinated with internal teams to ensure consistent brand messaging"
    ],
    tags: ["Non-Profit", "Social Media", "Event Promotion", "Digital Communication"],
    icon: Heart
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
            4+ years across digital marketing, social media management, product marketing and brand growth
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