"use client"

import { GraduationCap, Clock, MapPin, Briefcase } from 'lucide-react'

const stats = [
  {
    icon: GraduationCap,
    label: '3º Período ADS',
    description: 'UNIBRA',
  },
  {
    icon: Clock,
    label: '344h AWS',
    description: 'Em andamento',
  },
  {
    icon: MapPin,
    label: 'Recife, PE',
    description: 'Brasil',
  },
  {
    icon: Briefcase,
    label: 'Open to Work',
    description: 'Disponível',
  },
]

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <span className="text-accent font-mono text-sm mb-4 block">
              {'// Sobre mim'}
            </span>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Transformando ideias em{' '}
              <span className="gradient-text">código</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Desenvolvedor Full Stack Júnior com foco em construir soluções escaláveis e 
              eficientes utilizando tecnologias modernas do ecossistema JavaScript/TypeScript.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Formação em Análise e Desenvolvimento de Sistemas pela UNIBRA, com visão 
              orientada à resolução de problemas e tradução das necessidades do negócio 
              em soluções tecnológicas eficientes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Organizado, colaborativo e em constante evolução.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 glow-hover transition-all duration-300"
              >
                <stat.icon className="text-accent mb-4" size={28} />
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {stat.label}
                </h3>
                <p className="text-muted-foreground text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
