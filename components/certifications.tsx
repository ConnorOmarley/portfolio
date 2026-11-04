"use client"

import { Award, CheckCircle2, ExternalLink } from 'lucide-react'

interface Certification {
  credentialUrl?: string
  title: string
  issuer: string
  status: 'completed' | 'in-progress'
  hours?: number
  totalHours?: number
  description: string
  color: string
}

const certifications: Certification[] = [
  {
    title: 'AWS re/Start Graduate',
    issuer: 'Amazon Web Services Training and Certification · Instituto Aliança com o Adolescente',
    status: 'completed',
    hours: 335,
    totalHours: 335,
    credentialUrl: 'https://www.credly.com/badges/edc0a699-f76d-42cd-b9a8-3d1f4cd9528e/public_url',
    description: 'Programa de formação em computação em nuvem com laboratórios práticos, concluído em out. de 2026. Curso de extensão universitária certificado pela Universidade Estadual do Ceará (UECE).',
    color: '#FF9900',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    status: 'in-progress',
    description: 'Certificação fundamental de cloud computing. Em preparação para a prova.',
    color: '#FF9900',
  },
]

// Cursos curtos concluídos na plataforma AWS Skill Builder (todos em português)
const awsCourses = [
  'Exploring Artificial Intelligence Use Cases and Applications',
  'Fundamentals of Machine Learning and Artificial Intelligence',
  'Introduction to Generative AI - Art of the Possible',
  'Planning a Generative AI Project',
  'Responsible Artificial Intelligence Practices',
  'Developing Machine Learning Solutions',
  'Developing Generative Artificial Intelligence Solutions',
  'Essentials of Prompt Engineering',
  'Foundations of Prompt Engineering',
  'Amazon Bedrock Getting Started',
  'Optimizing Foundation Models',
  'Security, Compliance, and Governance for AI Solutions',
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
            Certificações e cursos que concluí e que estou realizando para me manter atualizado.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="max-w-2xl mx-auto space-y-6">
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
                    {cert.status === 'completed' ? (
                      <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full flex items-center gap-1">
                        <CheckCircle2 size={12} />
                        Concluído
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-amber-500/20 text-amber-400 text-xs rounded-full">
                        Em preparação
                      </span>
                    )}
                  </div>
                  
                  <p className="text-accent text-sm mb-3">{cert.issuer}</p>
                  <p className="text-muted-foreground text-sm mb-4">{cert.description}</p>

                  {/* Progress (só para quem tem carga horária) */}
                  {cert.hours !== undefined && cert.totalHours !== undefined && (
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
                  )}

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-md border border-accent/50 text-accent text-sm font-medium hover:bg-accent/10 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Ver certificado
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Cursos curtos AWS Skill Builder */}
          <div className="glass-card rounded-xl p-6 md:p-8 glow-hover transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-foreground">
                Cursos AWS Skill Builder
              </h3>
              <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full flex items-center gap-1">
                <CheckCircle2 size={12} />
                {awsCourses.length} concluídos
              </span>
            </div>
            <p className="text-accent text-sm mb-3">Amazon Web Services · cursos em português</p>
            <p className="text-muted-foreground text-sm mb-4">
              Cursos curtos de inteligência artificial, aprendizado de máquina e engenharia de prompts.
            </p>
            <div className="flex flex-wrap gap-2">
              {awsCourses.map((course) => (
                <span
                  key={course}
                  className="px-2 py-1 bg-secondary rounded text-xs text-muted-foreground"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
