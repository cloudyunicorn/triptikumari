"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Target, TrendingUp, BarChart3 } from 'lucide-react'
import { useState } from 'react'

const skillCategories = [
  {
    title: "Core Skills",
    icon: Brain,
    skills: [
      "Social Media Management",
      "Content Creation",
      "Lead Generation",
      "Product Marketing",
      "Data & Insights"
    ],
    color: "bg-blue-500"
  },
  {
    title: "Analytical Skills",
    icon: BarChart3,
    skills: [
      "Campaign Optimization",
      "Trend Research",
      "Competitive Analysis",
      "Analytics Platforms"
    ],
    color: "bg-purple-500"
  },
  {
    title: "Technical Tools",
    icon: TrendingUp,
    skills: [
      "Scheduling Tools",
      "Meta Ads",
      "WhatsApp (Interakt)",
      "SEO Optimization"
    ],
    color: "bg-green-500"
  },
  {
    title: "Strategic",
    icon: Target,
    skills: [
      "Brand Strategy",
      "Digital Growth",
      "Community Building",
      "Performance Marketing"
    ],
    color: "bg-orange-500"
  }
]

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-50/20 to-transparent dark:via-blue-900/10" />
      
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-in fade-in duration-700">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-in fade-in duration-700 delay-100">
            Proficient in crafting data-driven campaigns and optimizing performance across multiple platforms
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`p-2 ${category.color} bg-opacity-10 rounded-lg`}>
                    <category.icon className={`h-5 w-5 ${category.color.replace('bg-', 'text-')}`} />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary"
                      className={`mb-2 transition-all duration-300 ${
                        hoveredSkill === skill ? 'scale-105 shadow-md' : ''
                      }`}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}