"use client"

import { useEffect, useState } from 'react'
import { MapPin, Github, Linkedin, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Particles } from '@/components/particles'

const titles = [
  'Junior Full Stack Developer',
  'Analista de Sistemas',
  'Aberto a oportunidades',
]

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTitle = titles[titleIndex]
    const typeSpeed = isDeleting ? 50 : 100
    const pauseTime = 2000

    if (!isDeleting && displayText === currentTitle) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setTitleIndex((prev) => (prev + 1) % titles.length)
      return
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length - 1))
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length + 1))
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, titleIndex])

  const whatsappMessage = encodeURIComponent(
    'Olá Carlos! Vim pelo seu portfólio e gostaria de fazer um orçamento.'
  )
  const whatsappLink = `https://wa.me/5581999070229?text=${whatsappMessage}`

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-background">
      {/* Radial glow */}
      <div className="absolute inset-0 radial-glow" />
      
      {/* Particles */}
      <Particles />

      {/* Decorative code elements */}
      <div className="absolute top-20 left-10 text-accent/20 font-mono text-6xl hidden lg:block">
        {'<'}
      </div>
      <div className="absolute bottom-20 right-10 text-purple/20 font-mono text-6xl hidden lg:block">
        {'/>'}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full pulse-dot" />
            <span className="text-sm text-muted-foreground">
              Disponível para estágio / Open to work
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4" style={{ fontFamily: 'var(--font-syne)' }}>
            <span className="gradient-text">Carlos Alberto</span>
          </h1>

          {/* Typing animation */}
          <div className="h-10 mb-4">
            <p className="text-xl md:text-2xl text-accent font-mono">
              <span>{displayText}</span>
              <span className="typing-cursor" />
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin size={18} className="text-accent" />
            <span>Recife, PE</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 glow-hover"
            >
              <a href="#projetos">Ver Projetos</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-accent/50 text-accent hover:bg-accent/10 px-8"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Fazer Orçamento
              </a>
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/ConnorOmarley"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/carlos-mchagas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://instagram.com/connoromarley01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  )
}
