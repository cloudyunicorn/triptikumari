"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'

const education = [
  {
    degree: "Post Graduation in Fashion Design",
    institution: "Pearl Academy",
    period: "2018 – 2020",
    description: "Specialized in fashion design with focus on apparel and merchandise development",
    icon: Award
  },
  {
    degree: "B.Com (Hons) in Marketing",
    institution: "Shri Shikshayatan College",
    period: "2014 – 2017",
    description: "Graduated with honors in Marketing and Business Administration",
    icon: BookOpen
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
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

export default function EducationSection() {
  return (
    <section className="py-16 md:py-24 relative">
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
            <GraduationCap className="h-4 w-4" />
            Academic Background
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Education</span> Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combining creative design with business marketing
          </p>
        </motion.div>

        {/* Education cards */}
        <motion.div
          className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover-lift border-border/50">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-primary/10 shrink-0">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base md:text-lg leading-tight">
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className="mt-1 flex items-center gap-1.5">
                        <edu.icon className="h-3 w-3" />
                        {edu.institution}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="h-3 w-3" />
                    {edu.period}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {edu.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}