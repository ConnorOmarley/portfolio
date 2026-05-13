"use client"

import { Award, Clock } from 'lucide-react'

const certifications = [
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    status: 'in-progress',
    hours: 344,
    totalHours: 500,
    description: 'Certificação fundamental de cloud computing que valida o conhecimento geral sobre AWS.',
    color: '#FF9900',
  },
]

export function Certifications() {
  return (
    <section id="certificacoes" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm mb-4 block">
            {'// Certificações'}
          </span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Aprendizado{' '}
            <span className="gradient-text">contínuo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Certificações e cursos que estou realizando para me manter atualizado.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="max-w-2xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 md:p-8 glow-hover transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                {/* Badge Icon */}
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${cert.color}20` }}
                >
                  <Award size={32} style={{ color: cert.color }} />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {cert.title}
                    </h3>
                    <span className="px-2 py-1 bg-amber-500/20 text-amber-400 text-xs rounded-full flex items-center gap-1">
                      <Clock size={12} />
                      Em andamento
                    </span>
                  </div>
                  
                  <p className="text-accent text-sm mb-3">{cert.issuer}</p>
                  <p className="text-muted-foreground text-sm mb-4">{cert.description}</p>

                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progresso</span>
                      <span className="text-foreground font-medium">
                        {cert.hours}h de {cert.totalHours}h
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-500"
                        style={{ 
                          width: `${(cert.hours / cert.totalHours) * 100}%`,
                          backgroundColor: cert.color,
                        }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground text-right">
                      {Math.round((cert.hours / cert.totalHours) * 100)}% concluído
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
