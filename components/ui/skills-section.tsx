"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Target, TrendingUp, BarChart3, Palette, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"

const skillCategories = [
  {
    title: "Performance & Paid Media",
    icon: Target,
    color: "blue",
    skills: ["Paid Media Strategy", "Meta Ads Manager", "ROAS Optimization", "CPC, CTR & Conversion", "Campaign Experimentation", "Budget Management"]
  },
  {
    title: "Growth & Funnel Strategy",
    icon: TrendingUp,
    color: "green",
    skills: ["Revenue Growth", "Funnel Optimization", "A/B Testing", "Customer Acquisition", "E-commerce Marketing", "Digital Marketing Strategy"]
  },
  {
    title: "Brand, Content & Influencer",
    icon: Palette,
    color: "purple",
    skills: ["Social Media Growth Strategy", "Content-Led Brand Building", "Influencer Marketing", "Product Marketing", "Digital Launch Execution", "Content Strategy"]
  },
  {
    title: "Automation & Retention",
    icon: Zap,
    color: "orange",
    skills: ["WhatsApp Automation", "Interakt CRM", "50K+ Community Funnels", "Retargeting Funnels", "Remarketing & Retention"]
  },
  {
    title: "Analytics & Performance",
    icon: BarChart3,
    color: "indigo",
    skills: ["GA4 (Google Analytics)", "Google Search Console", "Meta Business Suite", "SEO & Discoverability", "Performance Reporting", "Data-Driven Decision Making"]
  },
  {
    title: "Tools, AI & Management",
    icon: Brain,
    color: "rose",
    skills: ["AI Marketing Tools", "Canva", "Cross-Functional Collaboration", "Vendor Management", "Campaign Management", "Multi-Client Portfolio"]
  }
]

const colorMap = {
  blue: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  green: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  purple: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  orange: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  rose: "bg-rose-500/10 text-rose-500 border-rose-500/20",
  indigo: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
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

export default function SkillsSection() {
  return (
    <section className="py-16 md:py-24 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 gradient-bg opacity-50" />

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
            <Brain className="h-4 w-4" />
            Technical Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise in performance marketing, conversion funnels, brand building, and revenue-driven campaigns
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover-lift border-border/50 bg-card/50">
                <CardContent className="p-5 md:p-6">
                  {/* Icon and title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={cn(
                      "p-2.5 rounded-xl border transition-colors",
                      colorMap[category.color as keyof typeof colorMap]
                    )}>
                      <category.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}