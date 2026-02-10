"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Zap, Target, Layers, Users, Handshake, Star, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const strengths = [
  {
    title: "Social Media Strategy & Growth",
    icon: Zap,
    description: "Drove multi-fold follower growth and 100%+ reach expansion across platforms through strategic content planning and trend-driven campaigns.",
    highlights: ["Follower Growth", "Reach Expansion", "Community Building"]
  },
  {
    title: "Performance Marketing & Digital Campaigns",
    icon: Target,
    description: "Delivered high-engagement campaigns with consistent 5-figure views, leveraging Meta Ads and data-driven optimization.",
    highlights: ["Meta Ads", "10K+ Daily Views", "Data-Driven"]
  },
  {
    title: "Content Strategy & Brand Storytelling",
    icon: Layers,
    description: "Visual and video-led brand building with consistent messaging across all digital assets and platforms.",
    highlights: ["Visual Content", "Brand Voice", "Digital Storytelling"]
  },
  {
    title: "Meta Ads & Interakt Automation",
    icon: Users,
    description: "Large-scale outreach and conversions through Meta Ads campaigns and WhatsApp automation reaching 10,000+ users.",
    highlights: ["WhatsApp Automation", "Lead Generation", "Conversions"]
  },
  {
    title: "Product Marketing & Launch",
    icon: Handshake,
    description: "Integrated digital promotion for multi-product launches including 150+ ISRO merchandise products across 30+ SKUs.",
    highlights: ["Product Launch", "E-commerce", "150+ Products"]
  },
  {
    title: "Collaboration & Vendor Management",
    icon: Star,
    description: "Multi-team coordination and timely delivery, managing vendor sourcing, sampling, quality checks and cross-functional execution.",
    highlights: ["Cross-Functional", "Vendor Relations", "Timely Delivery"]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
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

export default function StrengthsSection() {
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
            <Star className="h-4 w-4" />
            Core Competencies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key <span className="text-gradient">Strengths</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proven competencies that drive measurable business impact
          </p>
        </motion.div>

        {/* Strength cards - 2 column grid */}
        <motion.div
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Card className="h-full hover-lift border-border/50">
                <CardContent className="p-5 md:p-6">
                  {/* Header with icon */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2.5 rounded-xl bg-primary/10 shrink-0">
                      <strength.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-base md:text-lg pt-1">
                      {strength.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {strength.description}
                  </p>

                  {/* Highlight tags */}
                  <div className="flex flex-wrap gap-2">
                    {strength.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-primary/80 bg-primary/5 px-2.5 py-1 rounded-full"
                      >
                        <CheckCircle2 className="h-3 w-3" />
                        {highlight}
                      </span>
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