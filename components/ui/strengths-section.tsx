"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Zap, Target, Layers, Users, Handshake, Star, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const strengths = [
  {
    title: "Performance Marketing",
    icon: Target,
    description: "Expert in managing Meta Ads budgets, executing full-funnel campaigns with A/B testing to optimise ROAS, CPC, CTR, and drive revenue-led growth.",
    highlights: ["Paid Media Strategy", "ROAS", "Conversion Optimization"]
  },
  {
    title: "Strategy & Optimization",
    icon: Zap,
    description: "Revenue-focused strategist with expertise in funnel optimization, A/B testing, and campaign experimentation to maximize business outcomes.",
    highlights: ["Revenue Growth", "Funnel Optimization", "A/B Testing"]
  },
  {
    title: "Brand & Content Strategy",
    icon: Layers,
    description: "Content-led brand building with social media growth strategy, product marketing, and digital launch execution across platforms.",
    highlights: ["Brand Building", "Content Strategy", "Digital Launch"]
  },
  {
    title: "Automation & Retargeting",
    icon: Users,
    description: "Built and automated 50,000+ WhatsApp user base through Interakt, strengthening retargeting funnels and improving repeat conversions.",
    highlights: ["WhatsApp Automation", "Retargeting Funnels", "E-commerce"]
  },
  {
    title: "Product Marketing & Launch",
    icon: Handshake,
    description: "Led digital launch of 150+ ISRO merchandise products, generating ₹10L+ in revenue through integrated campaigns and e-commerce optimization.",
    highlights: ["Product Launch", "₹10L+ Revenue", "150+ Products"]
  },
  {
    title: "Collaboration & Management",
    icon: Star,
    description: "Cross-functional collaboration and vendor management ensuring timely execution, quality assurance, and consistent brand messaging.",
    highlights: ["Cross-Functional", "Vendor Management", "Team Coordination"]
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