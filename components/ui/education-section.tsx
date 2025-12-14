"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from 'lucide-react'

const education = [
  {
    degree: "Post Graduate Diploma, Fashion/Apparel Design",
    institution: "Pearl Academy",
    period: "Jul 2018 - May 2020",
    description: "Specialized in apparel design with focus on merchandise development"
  },
  {
    degree: "B.Com (Hons), Marketing",
    institution: "Shri Shikshayatan College",
    period: "2014 - 2017",
    description: "Graduated with honors in Marketing and Business Administration"
  }
]

export default function EducationSection() {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 from-background via-portfolio-purple-light/5 to-background dark:via-portfolio-purple-dark/5 bg-linear-to-t" />
      
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-in fade-in duration-700">
            Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-in fade-in duration-700 delay-100">
            Academic background combining creative design with business marketing
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="animate-in fade-in slide-in-from-bottom-5"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 from-portfolio-purple-light to-portfolio-blue-light dark:from-portfolio-purple-dark/30 dark:to-portfolio-blue-dark/30 bg-linear-to-br rounded-lg group-hover:scale-110 transition-transform">
                      <GraduationCap className="h-6 w-6 text-portfolio-purple" />
                    </div>
                    <div>
                      <CardTitle className="text-lg group-hover:text-portfolio-purple transition-colors">
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className="text-base mt-1">
                        {edu.institution}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    {edu.period}
                  </div>
                  <p className="text-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}