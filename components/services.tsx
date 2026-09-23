"use client"

import { Globe, Settings, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Globe,
    title: 'Desenvolvimento Web',
    description: 'Sites, landing pages e aplicações web responsivas com HTML, CSS, JavaScript e PHP.',
    features: ['Sites institucionais', 'Landing pages', 'E-commerce básico', 'Blogs'],
  },
  {
    icon: Settings,
    title: 'Sistemas Web',
    description: 'Desenvolvimento de sistemas web com Node.js, React e banco de dados.',
    features: ['Painéis administrativos', 'APIs RESTful', 'Integrações', 'Automações'],
  },
  {
    icon: BarChart3,
    title: 'Análise de Sistemas',
    description: 'Levantamento de requisitos e tradução das necessidades do negócio em soluções tecnológicas.',
    features: ['Levantamento de requisitos', 'Documentação', 'Prototipação', 'Consultoria'],
  },
]

export function Services() {
  const whatsappMessage = encodeURIComponent(
    'Olá Carlos! Vim pelo seu portfólio e gostaria de fazer um orçamento.'
  )
  const whatsappLink = `https://wa.me/5581999070229?text=${whatsappMessage}`

  return (
    <section id="servicos" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm mb-4 block">
            {'// Serviços'}
          </span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Como posso{' '}
            <span className="gradient-text">ajudar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Serviços que ofereço para transformar suas ideias em realidade digital.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-8 glow-hover transition-all duration-300 group flex flex-col"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="text-accent" size={28} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8 flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                asChild
                variant="outline"
                className="w-full border-accent/50 text-accent hover:bg-accent/10"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Solicitar Orçamento
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
