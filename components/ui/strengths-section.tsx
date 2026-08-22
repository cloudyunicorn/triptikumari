"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Zap, Target, Layers, Users, Handshake, Star, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"

const strengths = [
  {
    title: "Performance & Paid Media",
    icon: Target,
    color: "blue",
    description: "Managing ₹1–2L monthly Meta ad budgets per client across 10+ brands, optimizing audience targeting, bidding strategies, ROI, ROAS, CPC, CTR, and customer acquisition.",
    highlights: ["Meta Ads Manager", "ROAS & ROI Optimization", "A/B Testing"]
  },
  {
    title: "Revenue Growth & Funnel Optimization",
    icon: Zap,
    color: "green",
    description: "Proven ability driving ₹15–20L+ client revenue, ₹20L+ campaign revenue at Pariyaat, and ₹10L+ in ISRO merchandise through data-backed conversion funnels and performance optimization.",
    highlights: ["₹15–20L+ Client Sales", "Funnel Optimization", "Revenue-Led Strategy"]
  },
  {
    title: "Brand Strategy & Digital Launches",
    icon: Layers,
    color: "purple",
    description: "Content-led brand building and product marketing, spearheading the digital launch of 150+ official ISRO merchandise products across 30+ SKUs and driving 120%+ brand reach growth.",
    highlights: ["150+ Products Launched", "120%+ Reach Growth", "Influencer Marketing"]
  },
  {
    title: "WhatsApp Automation & Retention",
    icon: Users,
    color: "orange",
    description: "Built and automated a 50,000+ WhatsApp user community via Interakt, setting up remarketing and retargeting funnels to strengthen customer retention and repeat conversions.",
    highlights: ["50K+ WhatsApp Community", "Interakt Automation", "Retargeting Funnels"]
  },
  {
    title: "Analytics & Performance Insights",
    icon: Handshake,
    color: "amber",
    description: "Leveraging GA4, Google Search Console, Meta Ads Manager, and AI tools to analyze full-funnel campaign metrics, extract actionable insights, and optimize digital strategies.",
    highlights: ["GA4 & Search Console", "AI Marketing Tools", "Data-Driven ROI"]
  },
  {
    title: "Cross-Functional & Client Leadership",
    icon: Star,
    color: "rose",
    description: "Leading end-to-end digital marketing for 10+ client brands, coordinating cross-functional teams, agency stakeholders, and vendor management to ensure seamless execution.",
    highlights: ["10+ Client Brands", "Vendor Management", "Cross-Functional Leadership"]
  }
]

const colorMap = {
  blue: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  green: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  purple: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  orange: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  rose: "bg-rose-500/10 text-rose-500 border-rose-500/20",
  amber: "bg-amber-500/10 text-amber-500 border-amber-500/20",
}

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
                    <div className={cn(
                      "p-2.5 rounded-xl border transition-colors shrink-0",
                      colorMap[strength.color as keyof typeof colorMap]
                    )}>
                      <strength.icon className="h-5 w-5" />
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