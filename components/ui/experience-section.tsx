"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Rocket, Briefcase, Megaphone, Heart, Building2, TrendingUp, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const experiences = [
  {
    title: "Digital Marketing Manager",
    company: "Mooncre Martech LLP",
    location: "New Delhi",
    period: "March 2026 – Present",
    isCurrent: true,
    description: [
      "Lead end-to-end digital marketing for 10+ client brands, driving business growth through performance marketing, paid media, and integrated campaign strategies.",
      "Manage ₹1–2L monthly Meta ad budgets per client, optimizing audience targeting, bidding strategies, and campaign performance to maximize ROI, ROAS, and conversions.",
      "Drive ₹15–20L+ revenue per client through data-driven Meta campaigns, conversion-focused funnels, and continuous performance optimization.",
      "Strategize and execute content marketing initiatives, aligning campaign calendars with brand objectives, audience insights, and market trends to maximize engagement.",
      "Leverage Meta Ads Manager, GA4, and Google Search Console to analyze campaign performance, deliver actionable insights, and optimize digital strategies in collaboration with clients."
    ],
    tags: ["Performance Marketing", "10+ Client Brands", "Meta Ads Manager", "GA4", "Search Console", "ROAS & ROI", "Growth Strategy"],
    icon: TrendingUp
  },
  {
    title: "Senior Social Media Marketing",
    subtitle: "ISRO Licensed Products & Space Education",
    company: "Space Group of Companies",
    location: "New Delhi",
    period: "Aug 2022 – December 2025",
    isCurrent: false,
    description: [
      "Managed ₹2L+ Meta Ads budget, executing full-funnel campaigns to maximize ROAS, improve CTR, optimize CPC, and drive revenue growth.",
      "Increased monthly reach by 120% through data-driven paid media, audience targeting, and content optimization.",
      "Led the launch of 150+ Official ISRO merchandise products across 30+ SKUs, generating ₹10L+ revenue through integrated digital marketing and e-commerce optimization.",
      "Built a 50,000+ WhatsApp community via Interakt, strengthening remarketing and customer retention.",
      "Enhanced organic visibility through SEO and landing page optimization, improving conversion performance."
    ],
    tags: ["Meta Ads", "ISRO Official Merchandise", "120% Reach Growth", "50K+ WhatsApp Community", "E-commerce SEO", "ROAS"],
    icon: Rocket
  },
  {
    title: "Senior Executive – Social Media Marketing",
    company: "Pariyaat",
    location: "New Delhi",
    period: "Nov 2021 – Aug 2022",
    isCurrent: false,
    description: [
      "Generated ₹20L+ revenue through performance-driven digital campaigns and integrated social media strategies.",
      "Developed conversion-focused marketing funnels and optimized content strategy to strengthen brand positioning, engagement, and customer acquisition."
    ],
    tags: ["₹20L+ Revenue", "Conversion Funnels", "Brand Positioning", "Performance Marketing"],
    icon: Megaphone
  },
  {
    title: "Social Media & Marketing Coordinator",
    company: "Parikalpana",
    location: "New Delhi",
    period: "Nov 2020 – Oct 2021",
    isCurrent: false,
    description: [
      "Managed social media and digital communication for awareness campaigns and community initiatives.",
      "Created promotional creatives for 50+ events, ensuring consistent brand messaging across digital platforms.",
      "Coordinated digital campaign execution with cross-functional teams to maximize campaign reach and engagement."
    ],
    tags: ["Awareness Campaigns", "50+ Events", "Digital Communication", "Creative Content"],
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
            5+ years across performance marketing, multi-brand growth, paid media, and revenue-driven campaigns
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

          {/* Experience entries */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-10 md:pl-16 pb-8 last:pb-0"
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className={`absolute left-4 md:left-6 -translate-x-1/2 top-6 rounded-full flex items-center justify-center ${
                exp.isCurrent
                  ? 'w-4 h-4 bg-primary ring-4 ring-primary/20'
                  : 'w-3 h-3 accent-dot'
              }`}>
                {exp.isCurrent && (
                  <span className="w-1.5 h-1.5 rounded-full bg-background animate-pulse" />
                )}
              </div>

              <Card className={`hover-lift border-border/50 transition-all ${
                exp.isCurrent ? 'border-primary/30 shadow-sm' : ''
              }`}>
                <CardHeader className="pb-3 px-4 md:px-6">
                  {/* Period & Location & Status */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5 shrink-0 text-primary" />
                      <span className="font-medium text-foreground">{exp.period}</span>
                      {exp.location && (
                        <>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </span>
                        </>
                      )}
                    </div>
                    {exp.isCurrent && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Current Role
                      </span>
                    )}
                  </div>

                  {/* Title and company */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                      <exp.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <CardTitle className="text-base md:text-lg leading-snug break-words">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="mt-1 text-xs md:text-sm font-medium text-foreground/80 break-words flex flex-wrap items-center gap-1.5">
                        <Building2 className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                        <span>{exp.company}</span>
                        {exp.subtitle && (
                          <span className="text-muted-foreground text-xs font-normal">
                            — {exp.subtitle}
                          </span>
                        )}
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
                  <ul className="space-y-2.5">
                    {exp.description.map((item, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}