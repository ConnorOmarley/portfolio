"use client"

import { ExternalLink, Github, Cloud, Code, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Project {
  title: string
  description: string
  tags: string[]
  image?: string
  demoUrl?: string
  githubUrl?: string
  status: 'completed' | 'in-progress' | 'coming-soon'
  icon: React.ReactNode
}

const projects: Project[] = [
  {
    title: 'Projeto AWS Cloud',
    description: 'Projeto de certificação AWS Cloud Practitioner em desenvolvimento. Aplicação prática dos conceitos de cloud computing.',
    tags: ['AWS', 'Cloud', 'DevOps'],
    status: 'in-progress',
    icon: <Cloud className="text-[#FF9900]" size={32} />,
  },
  {
    title: 'Aplicação Web',
    description: 'Projeto web full stack utilizando tecnologias modernas. Landing page responsiva com funcionalidades dinâmicas.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    status: 'completed',
    icon: <Code className="text-accent" size={32} />,
    demoUrl: '#',
    githubUrl: 'https://github.com/ConnorOmarley',
  },
  {
    title: 'Mais projetos em breve',
    description: 'Estou constantemente trabalhando em novos projetos. Em breve mais novidades aqui!',
    tags: ['React', 'Node.js', 'TypeScript'],
    status: 'coming-soon',
    icon: <Clock className="text-purple" size={32} />,
  },
]

const statusLabels = {
  'completed': 'Concluído',
  'in-progress': 'Em desenvolvimento',
  'coming-soon': 'Em breve',
}

const statusColors = {
  'completed': 'bg-green-500/20 text-green-400',
  'in-progress': 'bg-amber-500/20 text-amber-400',
  'coming-soon': 'bg-purple/20 text-purple',
}

export function Projects() {
  return (
    <section id="projetos" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm mb-4 block">
            {'// Projetos'}
          </span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Meus{' '}
            <span className="gradient-text">trabalhos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Projetos que demonstram minha experiência e evolução como desenvolvedor.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-xl overflow-hidden gradient-border glow-hover transition-all duration-300 group"
            >
              {/* Project Image/Icon Area */}
              <div className="h-48 bg-gradient-to-br from-secondary to-background flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="relative z-10 float-animation">
                  {project.icon}
                </div>
                {/* Status Badge */}
                <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                  {statusLabels[project.status]}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary rounded text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                {project.status === 'completed' && (
                  <div className="flex gap-3">
                    {project.demoUrl && (
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Ver Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="flex-1 border-accent/50 text-accent hover:bg-accent/10"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
