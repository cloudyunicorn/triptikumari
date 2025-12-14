"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone, Download, Linkedin, Github, Sparkles, ChevronRight } from 'lucide-react'
import { toast } from 'sonner'

export default function HeroSection() {
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
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Modern animated gradient background */}
      <div className="absolute inset-0 bg-hero-gradient">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        
        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 from-portfolio-blue/20 to-portfolio-purple/20 bg-gradient-to-br rounded-full blur-3xl animate-float opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 from-portfolio-purple/15 to-portfolio-blue/15 bg-gradient-to-br rounded-full blur-3xl animate-float opacity-30" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-6">
            {/* Glass effect badge */}
            <div className="inline-flex items-center gap-2 animate-in fade-in slide-in-from-left-5 duration-700">
              <div className="glass-morphism px-4 py-2 rounded-full">
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
              Hi, I&apos;m <span className="text-gradient">Tripti Goyal</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl animate-in fade-in slide-in-from-left-5 duration-700 delay-200">
              Result-driven Marketing Professional with 3+ years of experience specializing in digital strategy, 
              content creation, social media management, and brand growth.
            </p>
            
            {/* Modern button group */}
            <div className="flex flex-wrap gap-4 pt-4 animate-in fade-in slide-in-from-left-5 duration-700 delay-300">
              <Button 
                onClick={handleContact} 
                className="gap-2 group shadow-modern hover:shadow-lg transition-all duration-300"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                Contact Me
              </Button>
              <Button 
                variant="outline" 
                onClick={handleDownload} 
                className="gap-2 group hover:shadow-modern transition-all duration-300"
              >
                <Download className="h-4 w-4 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-accent hover:shadow-sm transition-all duration-300"
                  onClick={() => toast.info('LinkedIn profile coming soon!')}
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-accent hover:shadow-sm transition-all duration-300"
                  onClick={() => toast.info('GitHub profile coming soon!')}
                >
                  <Github className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Contact info with modern styling */}
            <div className="flex flex-wrap gap-6 pt-8 animate-in fade-in slide-in-from-left-5 duration-700 delay-400">
              <div className="group cursor-pointer" onClick={handleCopyPhone}>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-300 group">
                  <div className="p-2 from-portfolio-blue/10 to-portfolio-blue/5 bg-gradient-to-br rounded-lg">
                    <Phone className="h-4 w-4 text-portfolio-blue group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">+91 7044217703</p>
                  </div>
                </div>
              </div>
              
              <a href="mailto:goyaltripti3096@gmail.com" className="group">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-300">
                  <div className="p-2 from-portfolio-purple/10 to-portfolio-purple/5 bg-gradient-to-br rounded-lg">
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
          
          {/* Profile image with modern effects */}
          <div className="flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-5 duration-700 delay-300">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 from-portfolio-blue to-portfolio-purple bg-gradient-to-r rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              
              {/* Floating animation container */}
              <div className="relative animate-float" style={{ animationDuration: '6s' }}>
                <Avatar className="h-64 w-64 border-4 border-background shadow-2xl shadow-black/10 relative z-10 overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                  <AvatarImage 
                    src="/profile.jpg" 
                    alt="Tripti Goyal"
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                  <AvatarFallback className="text-4xl from-portfolio-blue to-portfolio-purple bg-gradient-to-br">
                    TG
                  </AvatarFallback>
                </Avatar>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 from-portfolio-blue/30 to-portfolio-purple/30 bg-gradient-to-br rounded-2xl rotate-12 -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 from-portfolio-purple/20 to-portfolio-blue/20 bg-gradient-to-br rounded-xl -rotate-12 -z-10" />
              </div>
              
              {/* Status indicator */}
              <div className="absolute -bottom-2 -right-2 z-20">
                <div className="flex items-center gap-2 bg-background px-3 py-1 rounded-full shadow-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}