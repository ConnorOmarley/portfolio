"use client"

import { useState } from 'react'
import { ExternalLink, Github, Calendar, Scissors, Server, Link2, Store, ShoppingBag, Monitor, Globe, Wrench, Sparkles, Car } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PAGE_SIZE = 6

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
    title: 'Sistema de Gestão Financeira para Barbearia',
    description: 'Gestão financeira completa, vendida a um cliente real por R$ 500: caixa, atendimentos e comissões por barbeiro, 100% offline — roda direto do pen drive em qualquer PC Windows, com relatórios protegidos por senha.',
    tags: ['Node.js', 'Express', 'JavaScript', 'SQLite (sql.js)'],
    status: 'completed',
    icon: <Scissors className="text-[#7c3aed]" size={32} />,
    image: '/barbearia-preview.jpg',
    githubUrl: 'https://github.com/ConnorOmarley/sistema-gestao-barbearia',
  },
  {
    title: 'SOS Tudo pelo Social',
    description: 'Plataforma web da ONG (Paulista/PE), feita em dupla: site em React e API REST em Laravel com painel de gestão, doações por Pix e cadastro de voluntários. Fui responsável pelo backend: código, testes, versionamento e regras de negócio.',
    tags: ['PHP', 'Laravel', 'React', 'MySQL', 'Docker'],
    status: 'in-progress',
    icon: <Server className="text-[#7c3aed]" size={32} />,
    image: '/sos-painel-preview.png',
    githubUrl: 'https://github.com/Matheus-Br09/InterADS4M',
  },
  {
    title: 'Impulso Tech',
    description: 'Site da nossa agência: sites, landing pages, aplicativos e sistemas sob medida para negócios.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    status: 'completed',
    icon: <Globe className="text-[#7c3aed]" size={32} />,
    image: '/impulso-tech-preview.png',
    demoUrl: 'https://impulso-tech-site.vercel.app/',
  },
  {
    title: 'Portfólio',
    description: 'Este site: apresentação, stack, projetos, certificações e contato, com tema claro/escuro.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    status: 'completed',
    icon: <Globe className="text-[#7c3aed]" size={32} />,
    image: '/portfolio-preview.png',
    demoUrl: 'https://portfolio-mauve-two-57.vercel.app/',
    githubUrl: 'https://github.com/ConnorOmarley/portfolio',
  },
  {
    title: 'Acompanha',
    description: 'SaaS para pedagogos e psicopedagogos — agenda de sessões, prontuários e cobranças com assinatura recorrente.',
    tags: ['Next.js', 'Supabase', 'TypeScript', 'SaaS'],
    status: 'in-progress',
    icon: <Calendar className="text-[#7c3aed]" size={32} />,
    image: '/acompanha-preview.jpeg',
    githubUrl: 'https://github.com/ConnorOmarley/sistema_agendamento',
  },
  {
    title: 'Bio Site com agendamento',
    description: 'Página de link na bio com agendamento por WhatsApp, Pix e QR Code.',
    tags: ['WhatsApp', 'Pix', 'QR Code'],
    status: 'completed',
    icon: <Link2 className="text-[#7c3aed]" size={32} />,
    image: '/bio-site-preview.png',
    demoUrl: 'https://connoromarley.github.io/bio-site/',
    githubUrl: 'https://github.com/ConnorOmarley/bio-site',
  },
  {
    title: 'Chaveiro Maré Alta',
    description: 'Site de demonstração para chaveiro 24 horas no Recife: serviços, preços, dúvidas e orçamento pelo WhatsApp.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    status: 'completed',
    icon: <Wrench className="text-[#7c3aed]" size={32} />,
    image: '/chaveiro-preview.webp',
    demoUrl: 'https://chaveiro-site.vercel.app/',
  },
  {
    title: 'Aura Estética',
    description: 'Site de demonstração para clínica de estética e bem-estar: procedimentos, equipe e agendamento de avaliação.',
    tags: ['Landing page', 'Demonstração'],
    status: 'completed',
    icon: <Sparkles className="text-[#7c3aed]" size={32} />,
    image: '/aura-estetica-preview.webp',
    demoUrl: 'https://aura-estetica-six.vercel.app/',
  },
  {
    title: 'Blackline Detailing',
    description: 'Site de demonstração para estética automotiva premium: serviços, resultados, localização e pedido de orçamento.',
    tags: ['Landing page', 'Demonstração'],
    status: 'completed',
    icon: <Car className="text-[#7c3aed]" size={32} />,
    image: '/blackline-preview.webp',
    demoUrl: 'https://esteticaautomotiva-azure.vercel.app/',
  },
  {
    title: 'Oficina Prime',
    description: 'Site de demonstração para centro automotivo premium: serviços, avaliações e solicitação de orçamento.',
    tags: ['Landing page', 'Demonstração'],
    status: 'completed',
    icon: <Wrench className="text-[#7c3aed]" size={32} />,
    image: '/oficina-prime-preview.webp',
    demoUrl: 'https://oficina-prime.vercel.app/',
  },
  {
    title: 'BarberFlow',
    description: 'Gestão para barbearia: agenda, financeiro, comissões e pacotes. Multi-tenant com Supabase e Asaas.',
    tags: ['Supabase', 'PostgreSQL', 'Multi-tenant', 'Asaas'],
    status: 'completed',
    icon: <Scissors className="text-[#7c3aed]" size={32} />,
    githubUrl: 'https://github.com/ConnorOmarley/barberflow-saas',
  },
  {
    title: 'Boutique Chat Chic',
    description: 'Site de demonstração para boutique feminina: vitrine, coleção, depoimentos, perguntas frequentes e atendimento pelo WhatsApp.',
    tags: ['TanStack Start', 'React', 'TypeScript', 'Tailwind CSS'],
    status: 'completed',
    icon: <ShoppingBag className="text-[#7c3aed]" size={32} />,
    image: '/boutique-preview.png',
    githubUrl: 'https://github.com/ConnorOmarley/boutique-chat-chic',
  },
  {
    title: 'Encanto Feminino',
    description: 'Catálogo para WhatsApp em landing page: zero build, zero dependência.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    status: 'completed',
    icon: <Store className="text-[#7c3aed]" size={32} />,
    image: '/encanto-feminino-preview.png',
    githubUrl: 'https://github.com/ConnorOmarley/Encanto_feminino',
  },
  {
    title: 'TecSuporte Recife',
    description: 'Landing page de suporte técnico para computador.',
    tags: ['HTML', 'CSS'],
    status: 'completed',
    icon: <Monitor className="text-[#7c3aed]" size={32} />,
    image: '/tecsuporte-preview.png',
    githubUrl: 'https://github.com/ConnorOmarley/tecsuporte-recife',
  },
]

function openProject(url?: string) {
  if (url) window.open(url, '_blank', 'noopener,noreferrer')
}

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
  const [visible, setVisible] = useState(PAGE_SIZE)
  const shown = projects.slice(0, visible)
  const hasMore = visible < projects.length
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
          {shown.map((project, index) => {
            const url = project.demoUrl || project.githubUrl
            return (
              <div
                key={index}
                role={url ? 'link' : undefined}
                tabIndex={url ? 0 : undefined}
                onClick={url ? () => openProject(url) : undefined}
                onKeyDown={(e) => {
                  if (url && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault()
                    openProject(url)
                  }
                }}
                className="glass-card rounded-xl overflow-hidden gradient-border glow-hover transition-all duration-300 group"
                style={url ? { cursor: 'pointer' } : undefined}
              >
                {/* Project Image/Icon Area */}
                <div className="h-48 bg-gradient-to-br from-secondary to-background flex items-center justify-center relative overflow-hidden">
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                      <div className="relative z-10 float-animation">
                        {project.icon}
                      </div>
                    </>
                  )}
                  {/* Status Badge */}
                  <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium z-10 ${statusColors[project.status]}`}>
                    {statusLabels[project.status]}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-5">
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
                  {(project.demoUrl || project.githubUrl) && (
                    <div className="flex gap-3">
                      {project.demoUrl && (
                        <Button
                          asChild
                          size="sm"
                          onClick={(e: React.MouseEvent) => e.stopPropagation()}
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
                          onClick={(e: React.MouseEvent) => e.stopPropagation()}
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
            )
          })}
        </div>

        {projects.length > PAGE_SIZE && (
          <div className="flex justify-center mt-10">
            <Button
              variant="outline"
              onClick={() => (hasMore ? setVisible((v) => v + PAGE_SIZE) : setVisible(PAGE_SIZE))}
              className="border-accent/50 text-accent hover:bg-accent/10"
            >
              {hasMore ? `Ver mais (${projects.length - visible})` : 'Ver menos'}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}