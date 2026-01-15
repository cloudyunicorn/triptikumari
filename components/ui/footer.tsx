"use client"

import { Mail, Phone, Linkedin, MapPin, ArrowUp, Heart, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleEmailClick = () => {
    window.location.href = 'mailto:goyaltripti3096@gmail.com'
  }

  return (
    <footer id="contact" className="relative border-t border-border/50">
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <motion.div
          className="py-16 md:py-20 text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Let&apos;s Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I&apos;m open to new opportunities. Feel free to reach out!
          </p>
          <Button
            size="lg"
            onClick={handleEmailClick}
            className="gap-2 rounded-xl"
          >
            <Send className="h-4 w-4" />
            Get In Touch
          </Button>
        </motion.div>

        {/* Footer content */}
        <div className="py-8 md:py-12 border-t border-border/50">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold">Tripti Kumari</h3>
              <p className="text-sm text-muted-foreground">
                Digital Marketing Professional specializing in social media and brand growth.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h4 className="font-semibold">Contact</h4>
              <div className="space-y-2 text-sm">
                <a
                  href="tel:+917044217703"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  +91 7044217703
                </a>
                <a
                  href="mailto:goyaltripti3096@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  goyaltripti3096@gmail.com
                </a>
                <span className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  Kolkata, India
                </span>
              </div>
            </div>

            {/* Connect */}
            <div className="space-y-3">
              <h4 className="font-semibold">Connect</h4>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-xl"
                  onClick={() => window.open('https://linkedin.com', '_blank')}
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-xl"
                  onClick={handleEmailClick}
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            © {currentYear} Tripti Kumari. Made with
            <Heart className="h-3 w-3 text-primary fill-primary" />
          </p>

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="gap-2 text-xs"
          >
            Back to top
            <ArrowUp className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </footer>
  )
}