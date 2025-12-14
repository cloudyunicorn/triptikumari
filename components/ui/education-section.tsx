"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

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
      <div className="absolute inset-0 bg-linear-to-t from-background via-purple-50/10 to-background dark:via-purple-900/5" />
      
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-linear-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-lg group-hover:scale-110 transition-transform">
                      <GraduationCap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}