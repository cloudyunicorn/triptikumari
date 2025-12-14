import Navigation from '@/components/ui/navigation'
import HeroSection from '@/components/ui/hero-section'
import SkillsSection from '@/components/ui/skills-section'
import ExperienceSection from '@/components/ui/experience-section'
import EducationSection from '@/components/ui/education-section'
import StrengthsSection from '@/components/ui/strengths-section'
import Footer from '@/components/ui/footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="skills">
          <SkillsSection />
        </section>
        
        <section id="experience">
          <ExperienceSection />
        </section>
        
        <section id="education">
          <EducationSection />
        </section>
        
        <section id="strengths">
          <StrengthsSection />
        </section>
      </main>
      
      <Footer />
    </div>
  )
}