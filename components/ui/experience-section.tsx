"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Rocket, Briefcase, Megaphone, ShoppingBag, Heart, Building2 } from 'lucide-react'
import { motion } from 'framer-motion'

const experiences = [
  {
    title: "Senior Social Media Marketing",
    company: "Astroport Global",
    parentCompany: "Space Group of Companies | New Delhi",
    period: "Aug 2022 – Dec 2025",
    isParentHeader: true,
    description: [
      "Managed ₹2L+ Meta Ads budget, executing full-funnel campaigns with structured A/B testing to optimise ROAS, CPC, CTR, and drive revenue-led growth.",
      "Increased monthly reach by 92% through paid amplification and data-driven content optimisation.",
      "Delivered consistent high-performing Reels (20K+ views), improving overall engagement rate MoM.",
      "Built and automated a 50,000+ WhatsApp user base (Interakt) to strengthen retargeting funnels and improve repeat conversions.",
      "Led end-to-end content and creative strategy aligned with conversion KPIs, reducing CPC and improving ad relevance.",
      "Optimised website content and landing funnels to enhance user journey and campaign efficiency."
    ],
    tags: ["Meta Ads", "ROAS", "A/B Testing", "WhatsApp Automation", "Performance Marketing", "Conversion Funnels"],
    icon: Rocket
  },
  {
    title: "Merchandise & Digital Marketing",
    company: "Space Technology And Education Pvt. Ltd.",
    parentCompany: "Space Group of Companies | New Delhi",
    period: "Aug 2022 – Dec 2025",
    description: [
      "Led digital launch of 150+ official ISRO merchandise products across 30+ SKUs.",
      "Generated ₹10L+ in merchandise revenue through integrated social media campaigns and e-commerce optimisation.",
      "Improved product discoverability through SEO-led listing optimisation, increasing organic visibility.",
      "Collaborated on pricing, packaging, and positioning to maintain premium brand perception.",
      "Coordinated vendor sampling and quality checks for timely execution."
    ],
    tags: ["ISRO Merchandise", "E-commerce", "SEO", "Product Marketing", "Revenue Growth"],
    icon: ShoppingBag
  },
  {
    title: "Senior Executive – Social Media Marketing",
    company: "Pariyaat",
    period: "Nov 2021 – Aug 2022",
    description: [
      "Generated ₹10L+ in revenue through integrated digital campaigns and performance-led social strategies.",
      "Designed conversion-focused content funnels aligned with customer journey stages to improve sales efficiency.",
      "Strengthened brand positioning in the competitive fashion market through trend-backed campaign execution.",
      "Improved engagement and campaign performance through analytics-driven content optimisation."
    ],
    tags: ["Revenue Growth", "Content Funnels", "Fashion Marketing", "Performance Marketing"],
    icon: Megaphone
  },
  {
    title: "Social Media & Marketing Coordinator",
    company: "Parikalpana",
    period: "Nov 2020 – Oct 2021",
    description: [
      "Managed social media and digital communication for social impact campaigns.",
      "Created posters, videos, and promotional creatives for 50+ events and initiatives.",
      "Executed digital event promotion and coordinated with internal teams for consistent messaging."
    ],
    tags: ["Social Impact", "Event Promotion", "Digital Communication", "Creative Content"],
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

  // Group experiences: first 2 are under Space Group
  const spaceGroupExperiences = experiences.slice(0, 2)
  const otherExperiences = experiences.slice(2)

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
            5 years across digital marketing, performance marketing, brand building and revenue-driven campaigns
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

          {/* Space Group Parent Header */}
          <motion.div
            className="relative pl-10 md:pl-16 pb-4"
            variants={itemVariants}
          >
            <div className="absolute left-4 md:left-6 -translate-x-1/2 top-4 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
              <Building2 className="h-2.5 w-2.5 text-primary-foreground" />
            </div>
            <div className="flex items-center gap-3 py-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-base md:text-lg">Space Group of Companies</h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                  <Calendar className="h-3 w-3 shrink-0" />
                  <span>Aug 2022 – December 2025 • New Delhi</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Space Group sub-entries */}
          {spaceGroupExperiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-10 md:pl-16 pb-8 last:pb-8 ml-4 md:ml-6"
              variants={itemVariants}
            >
              {/* Timeline dot - smaller for sub entries */}
              <div className="absolute left-0 -translate-x-1/2 top-6 w-2.5 h-2.5 rounded-full accent-dot" />
              {/* Connector line from parent */}
              <div className="absolute left-0 top-0 bottom-0 -translate-x-1/2 w-px bg-border/60" />

              <Card className="hover-lift border-border/50 transition-all">
                <CardHeader className="pb-3 px-4 md:px-6">
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

                <CardContent className="pt-0 border-t border-border/50 mt-4">
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Other experiences */}
          {otherExperiences.map((exp, index) => {
            const globalIndex = index + spaceGroupExperiences.length
            return (
              <motion.div
                key={globalIndex}
                className="relative pl-10 md:pl-16 pb-8 last:pb-0"
                variants={itemVariants}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 -translate-x-1/2 top-6 w-3 h-3 rounded-full accent-dot" />

                <Card className="hover-lift border-border/50 transition-all">
                  <CardHeader className="pb-3 px-4 md:px-6">
                    {/* Period */}
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

                  <CardContent className="pt-0 border-t border-border/50 mt-4">
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}