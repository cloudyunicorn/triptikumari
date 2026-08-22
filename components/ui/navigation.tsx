"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun, Sparkles } from 'lucide-react'
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Clients', href: '#clients' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Strengths', href: '#strengths' },
  { label: 'Contact', href: '#contact' }
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Detect active section
      const sections = navItems.map(item => item.href.replace('#', ''))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    // Close menu first
    setIsOpen(false)

    // Small delay to allow menu to close, then scroll
    setTimeout(() => {
      const element = document.getElementById(id.replace('#', ''))
      if (element) {
        const navHeight = 64 // Height of the sticky nav
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - navHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  return (
    <motion.nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'glass shadow-sm' : 'bg-background/80'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            className="flex items-center gap-2.5 group"
            onClick={() => scrollToSection('#home')}
          >
            <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center group-hover:scale-105 transition-transform">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold">Tripti Kumari</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isActive
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                      layoutId="activeIndicator"
                    />
                  )}
                </button>
              )
            })}

            <div className="ml-2 pl-2 border-l border-border">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="rounded-lg"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
              </Button>
            </div>
          </div>

          {/* Mobile buttons */}
          <div className="flex md:hidden items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-lg"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden border-t border-border py-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="space-y-1">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.replace('#', '')
                  return (
                    <motion.button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className={`w-full px-4 py-2.5 text-left text-sm rounded-lg transition-colors flex items-center gap-2 ${isActive
                        ? 'bg-primary/10 text-foreground font-medium'
                        : 'text-muted-foreground hover:bg-muted'
                        }`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                      {item.label}
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}