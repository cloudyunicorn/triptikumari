"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Target, TrendingUp, BarChart3, Palette, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: "Social Media & Content",
    icon: Brain,
    skills: ["Social Media Strategy", "Content Strategy", "Instagram & Reels Strategy", "Community Growth", "Digital Storytelling"]
  },
  {
    title: "Marketing & Campaigns",
    icon: Target,
    skills: ["Performance Marketing", "Campaign Management", "Meta Ads", "Product Marketing", "Brand Building"]
  },
  {
    title: "Analytics & Optimization",
    icon: BarChart3,
    skills: ["Analytics & Reporting", "SEO Content", "Data-Driven Optimization", "Competitive Analysis"]
  },
  {
    title: "Automation & Outreach",
    icon: TrendingUp,
    skills: ["WhatsApp Automation (Interakt)", "WhatsApp Automation (Neo Dove)", "Lead Generation", "Customer Outreach"]
  },
  {
    title: "Creative & Design",
    icon: Palette,
    skills: ["Visual Design", "Video Content", "Brand Identity", "Merchandise Design", "Copywriting"]
  },
  {
    title: "Strategy & Growth",
    icon: Zap,
    skills: ["Digital Growth Strategy", "Cross-Functional Collaboration", "Vendor Management", "E-commerce Optimization"]
  }
]

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
            Expertise in content strategy, performance marketing, analytics-driven optimization and community building
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
                    <div className="p-2.5 rounded-xl bg-primary/10">
                      <category.icon className="h-5 w-5 text-primary" />
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