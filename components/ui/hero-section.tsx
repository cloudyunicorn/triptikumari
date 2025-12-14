"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone, Download, Linkedin, Github, Sparkles } from 'lucide-react'
import { toast } from 'sonner'

export default function HeroSection() {
  const handleDownload = () => {
    toast.success('Resume download started!', {
      description: 'Your resume is being downloaded as PDF'
    })
    // In a real app, you would link to your actual resume PDF
    window.open('/resume.pdf', '_blank')
  }

  const handleContact = () => {
    toast.info('Opening email client...', {
      description: 'Preparing to send email to goyaltripti3096@gmail.com'
    })
    setTimeout(() => {
      window.location.href = 'mailto:goyaltripti3096@gmail.com'
    }, 1000)
  }

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+917044217703')
    toast.success('Phone number copied!', {
      description: '+91 7044217703 copied to clipboard'
    })
  }

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,var(--color-blue-50),white,var(--color-purple-50))] dark:bg-[linear-gradient(to_bottom_right,oklch(0.15_0_0),oklch(0.145_0_0),oklch(0.17_0_0))]" />
      
      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2 animate-in fade-in slide-in-from-left-5 duration-700">
              <Sparkles className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                Senior Social Media & Digital Marketing
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-in fade-in slide-in-from-left-5 duration-700 delay-100">
              Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Tripti Kumari</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl animate-in fade-in slide-in-from-left-5 duration-700 delay-200">
              Result-driven Marketing Professional with 3+ years of experience specializing in digital strategy, 
              content creation, social media management, and brand growth.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 animate-in fade-in slide-in-from-left-5 duration-700 delay-300">
              <Button onClick={handleContact} className="gap-2">
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="outline" onClick={handleDownload} className="gap-2">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => toast.info('LinkedIn profile coming soon!')}
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => toast.info('GitHub profile coming soon!')}
                >
                  <Github className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-6 pt-8 animate-in fade-in slide-in-from-left-5 duration-700 delay-400">
              <button 
                onClick={handleCopyPhone}
                className="flex items-center gap-2 hover:text-blue-600 transition-colors cursor-pointer group"
              >
                <Phone className="h-4 w-4 text-blue-600 group-hover:scale-110 transition-transform" />
                <span className="text-foreground">+91 7044217703</span>
              </button>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-600" />
                <span className="text-foreground">goyaltripti3096@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-5 duration-700 delay-300">
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-20 animate-pulse" />
              <Avatar className="h-64 w-64 border-4 border-background shadow-2xl relative z-10">
                <AvatarImage src="/profile.jpg" alt="Tripti Kumari" />
                <AvatarFallback className="text-4xl bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                  TG
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}