"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, ChevronDown, ChevronUp, Rocket, Palette, BarChart } from 'lucide-react'
import { useState } from 'react'

const experiences = [
  {
    title: "Senior Executive - Social Media Marketing",
    company: "Astroport Global (A unit of Space India Pvt Ltd.)",
    period: "May 2024 - Dec 2024",
    description: [
      "Lead & Execute comprehensive social media and digital strategies to strengthen brand visibility and lead generation",
      "Manage performance-driven campaigns using analytics and creative storytelling",
      "Oversee end-to-end content creation, including graphics and videos",
      "Optimise organic campaigns through Meta Ads and WhatsApp (interakt)",
      "Drive digital growth by leveraging trends and fostering community interaction"
    ],
    tags: ["Social Media", "Digital Strategy", "Meta Ads", "Content Creation"],
    icon: Rocket,
    color: "text-blue-500"
  },
  {
    title: "Merchandise Designer",
    company: "Gnomon Astrotech Pvt. Ltd.",
    period: "2023 - 2024",
    description: [
      "Spearheaded the Official ISRO Merchandise launch, managing 150+ products and 30+ SKUs",
      "Directed product design and detailing, ensuring alignment with brand guidelines",
      "Coordinated vendor sourcing and conducted multiple sample tests",
      "Developed packaging designs and executed pricing strategy",
      "Created and managed e-commerce website listings with SEO-friendly content",
      "Designed marketing creatives and social media content for ISRO partnership campaign",
      "Managed daily WhatsApp outreach to over 10,000+ users via Interakt automation"
    ],
    tags: ["Merchandise Design", "Product Lifecycle", "Vendor Management", "E-commerce"],
    icon: Palette,
    color: "text-purple-500"
  },
  {
    title: "Social Media Manager and Analyst",
    company: "Space Foundation",
    period: "2022 - 2023",
    description: [
      "Conceptualised and supervised the creation of a high-fidelity Gaganyaan Astronaut Suit Prototype",
      "Designed and produced functional glow-in-the-dark uniforms for astronomy professionals",
      "Managed engaging content on various social media platforms",
      "Analyzed performance and impact using data-driven tools and strategies"
    ],
    tags: ["Social Media", "Analytics", "Content Strategy", "Brand Management"],
    icon: BarChart,
    color: "text-green-500"
  }
]

export default function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-linear-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-in fade-in duration-700">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-in fade-in duration-700 delay-100">
            3+ years of experience across digital marketing, social media management, and product design
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="animate-in fade-in slide-in-from-bottom-5"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group border-l-4 border-l-transparent hover:border-l-blue-500"
                onClick={() => toggleExpand(index)}
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-muted rounded-lg group-hover:scale-110 transition-transform">
                        <exp.icon className={`h-5 w-5 ${exp.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-base mt-1">
                          {exp.company}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-3 ml-10">
                    {exp.tags.map((tag, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="bg-muted/50 hover:bg-muted transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                
                <Separator />
                
                <CardContent className="pt-6">
                  {expandedIndex === index ? (
                    <>
                      <ul className="space-y-3">
                        {exp.description.map((item, idx) => (
                          <li 
                            key={idx} 
                            className="flex items-start gap-3 animate-in fade-in slide-in-from-left-5"
                            style={{ animationDelay: `${idx * 100}ms` }}
                          >
                            <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0" />
                            <span className="text-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex justify-end mt-4">
                        <ChevronUp className="h-5 w-5 text-muted-foreground group-hover:text-blue-600 transition-colors" />
                      </div>
                    </>
                  ) : (
                    <div className="flex justify-between items-center">
                      <p className="text-muted-foreground line-clamp-2 ml-10">
                        {exp.description[0]}
                      </p>
                      <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-blue-600 transition-colors" />
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}