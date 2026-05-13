"use client"

import { Github, Linkedin, Instagram, Heart } from 'lucide-react'

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/ConnorOmarley',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/carlos-mchagas',
    label: 'LinkedIn',
  },
  {
    icon: Instagram,
    href: 'https://instagram.com/connoromarley01',
    label: 'Instagram',
  },
]

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Carlos Alberto © 2026</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Recife, PE</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline flex items-center gap-1">
              Desenvolvido com <Heart size={14} className="text-accent fill-accent" />
            </span>
          </div>

          {/* Mobile only heart */}
          <div className="sm:hidden flex items-center gap-1 text-muted-foreground text-sm">
            Desenvolvido com <Heart size={14} className="text-accent fill-accent" />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
