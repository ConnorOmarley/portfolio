"use client"

import { useState } from 'react'

interface Tech {
  name: string
  category: 'backend' | 'frontend' | 'tools'
  color: string
}

const technologies: Tech[] = [
  // Backend
  { name: 'Node.js', category: 'backend', color: '#339933' },
  { name: 'NestJS', category: 'backend', color: '#E0234E' },
  { name: 'TypeScript', category: 'backend', color: '#3178C6' },
  { name: 'PostgreSQL', category: 'backend', color: '#4169E1' },
  { name: 'Redis', category: 'backend', color: '#DC382D' },
  { name: 'Docker', category: 'backend', color: '#2496ED' },
  { name: 'AWS', category: 'backend', color: '#FF9900' },
  // Frontend
  { name: 'React', category: 'frontend', color: '#61DAFB' },
  { name: 'Next.js', category: 'frontend', color: '#ffffff' },
  { name: 'HTML5', category: 'frontend', color: '#E34F26' },
  { name: 'CSS3', category: 'frontend', color: '#1572B6' },
  { name: 'JavaScript', category: 'frontend', color: '#F7DF1E' },
  { name: 'PHP', category: 'frontend', color: '#777BB4' },
  // Tools
  { name: 'Git', category: 'tools', color: '#F05032' },
  { name: 'GitHub', category: 'tools', color: '#ffffff' },
  { name: 'MySQL', category: 'tools', color: '#4479A1' },
  { name: 'VS Code', category: 'tools', color: '#007ACC' },
]

const categories = [
  { id: 'all', label: 'Todas' },
  { id: 'backend', label: 'Back-end' },
  { id: 'frontend', label: 'Front-end' },
  { id: 'tools', label: 'Ferramentas' },
]

export function Stack() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredTechs = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory)

  return (
    <section id="stack" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm mb-4 block">
            {'// Stack'}
          </span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Tecnologias que{' '}
            <span className="gradient-text">domino</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ferramentas e tecnologias que utilizo para transformar ideias em soluções reais.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-accent text-accent-foreground'
                  : 'glass-card text-muted-foreground hover:text-foreground'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {filteredTechs.map((tech, index) => (
            <div
              key={tech.name}
              className="glass-card rounded-xl p-4 flex flex-col items-center justify-center aspect-square glow-hover transition-all duration-300 group cursor-pointer"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
                style={{ 
                  backgroundColor: `${tech.color}20`,
                  boxShadow: `0 0 20px ${tech.color}00`,
                }}
              >
                <span 
                  className="text-2xl font-bold font-mono"
                  style={{ color: tech.color }}
                >
                  {tech.name.charAt(0)}
                </span>
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
