"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Zap, Target, Layers, Users, Handshake } from 'lucide-react'
import { useEffect, useState } from 'react'

const strengths = [
  {
    title: "Blending Creativity & Data",
    icon: Zap,
    description: "Skilled in combining creative storytelling with data-driven insights to optimize campaigns",
    level: 95
  },
  {
    title: "Strategic Campaign Execution",
    icon: Target,
    description: "Proven ability to plan, execute and manage high-performing digital campaigns",
    level: 90
  },
  {
    title: "End-to-End Product Management",
    icon: Layers,
    description: "Experience in managing products from concept to launch, including design and marketing",
    level: 85
  },
  {
    title: "Cross-Functional Collaboration",
    icon: Users,
    description: "Strong interpersonal skills to collaborate effectively with multiple teams",
    level: 92
  },
  {
    title: "Vendor & Stakeholder Management",
    icon: Handshake,
    description: "Experienced in coordinating with vendors and stakeholders to achieve project goals",
    level: 88
  }
]

export default function StrengthsSection() {
  const [animatedLevels, setAnimatedLevels] = useState(strengths.map(() => 0))

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevels(strengths.map(s => s.level))
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-16 bg-linear-to-b from-background via-blue-50/10 to-background dark:via-blue-900/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] bg-size-[40px_40px] opacity-[0.02]" />
      
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-in fade-in duration-700">
            Key Strengths
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-in fade-in duration-700 delay-100">
            Core competencies that drive results and deliver value
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {strengths.map((strength, index) => (
            <Card 
              key={index} 
              className="hover:shadow-md transition-all duration-300 animate-in fade-in slide-in-from-left-5"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg group-hover:scale-110 transition-transform">
                    <strength.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                        {strength.title}
                      </h3>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400 animate-in fade-in">
                        {animatedLevels[index]}%
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      {strength.description}
                    </p>
                    <Progress 
                      value={animatedLevels[index]} 
                      className="h-2 bg-muted"
                      indicatorClassName="bg-gradient-to-r from-blue-500 to-purple-500 animate-in fade-in duration-1000"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}