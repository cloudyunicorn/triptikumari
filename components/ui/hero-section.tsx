"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, Download, Linkedin, Github, Sparkles, ChevronRight } from 'lucide-react'
import { toast } from 'sonner'
import Image from 'next/image'
import { useState } from 'react'

export default function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleDownload = () => {
    toast.success('Resume download started!', {
      description: 'Your resume is being downloaded as PDF'
    })
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
    <section className="relative py-20 md:py-28 overflow-hidden" id="home">
      {/* Static gradient background - no animations */}
      <div className="absolute inset-0 from-portfolio-blue/5 via-background to-portfolio-purple/5 bg-linear-to-br" />
      
      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-6">
            {/* Glass effect badge */}
            <div className="inline-flex items-center gap-2 animate-in fade-in slide-in-from-left-5 duration-700">
              <div className="bg-background/80 backdrop-blur-sm border px-4 py-2 rounded-full">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-portfolio-yellow" />
                  <span className="text-sm font-medium text-foreground">
                    Senior Social Media & Digital Marketing
                  </span>
                  <ChevronRight className="h-3 w-3 text-muted-foreground" />
                </div>
              </div>
            </div>
            
            {/* Modern gradient text for name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-in fade-in slide-in-from-left-5 duration-700 delay-100">
              Hi, I&apos;m <span className="text-gradient">Tripti Kumari</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl animate-in fade-in slide-in-from-left-5 duration-700 delay-200">
              Result-driven Marketing Professional with 3+ years of experience specializing in digital strategy, 
              content creation, social media management, and brand growth.
            </p>
            
            {/* Modern button group */}
            <div className="flex flex-wrap gap-4 pt-4 animate-in fade-in slide-in-from-left-5 duration-700 delay-300">
              <Button 
                onClick={handleContact} 
                className="gap-2 group shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                Contact Me
              </Button>
              <Button 
                variant="outline" 
                onClick={handleDownload} 
                className="gap-2 group border-2 hover:shadow-lg transition-shadow duration-300"
              >
                <Download className="h-4 w-4 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-accent transition-colors duration-300"
                  onClick={() => toast.info('LinkedIn profile coming soon!')}
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-accent transition-colors duration-300"
                  onClick={() => toast.info('GitHub profile coming soon!')}
                >
                  <Github className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Contact info with modern styling */}
            <div className="flex flex-wrap gap-6 pt-8 animate-in fade-in slide-in-from-left-5 duration-700 delay-400">
              <div className="group cursor-pointer" onClick={handleCopyPhone}>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background/80 hover:bg-background transition-all duration-300 group">
                  <div className="p-2 bg-portfolio-blue/10 rounded-lg">
                    <Phone className="h-4 w-4 text-portfolio-blue group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">+91 7044217703</p>
                  </div>
                </div>
              </div>
              
              <a href="mailto:goyaltripti3096@gmail.com" className="group">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background/80 hover:bg-background transition-all duration-300">
                  <div className="p-2 bg-portfolio-purple/10 rounded-lg">
                    <Mail className="h-4 w-4 text-portfolio-purple group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">goyaltripti3096@gmail.com</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          
          {/* Profile image without complex animations */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Simple glow effect on hover only */}
              <div className="absolute -inset-2 from-portfolio-blue/20 to-portfolio-purple/20 bg-linear-to-r rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                {/* Optimized Image component with fixed size */}
                <div className="relative h-48 w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-full border-4 border-background shadow-xl overflow-hidden">
                  <Image
                    src="/profile-pic.png"
                    alt="Tripti Kumari - Senior Social Media & Digital Marketing Professional"
                    width={256}
                    height={256}
                    sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                    className="object-cover"
                    loading="eager"
                    quality={85}
                    onLoad={() => setImageLoaded(true)}
                    style={{
                      opacity: imageLoaded ? 1 : 0,
                      transition: 'opacity 0.3s ease-out'
                    }}
                  />
                  {/* Loading placeholder */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-muted animate-pulse" />
                  )}
                </div>
              </div>
              
              {/* Status indicator */}
              <div className="absolute -bottom-2 -right-2 z-20">
                <div className="flex items-center gap-2 bg-background px-3 py-1 rounded-full shadow-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-xs font-medium">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Simple scroll indicator */}
        
      </div>
    </section>
  )
}