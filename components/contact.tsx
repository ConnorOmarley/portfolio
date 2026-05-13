"use client"

import { Phone, Mail, Linkedin, MapPin, MessageCircle, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

const contactInfo = [
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+55 (81) 97115-2754',
    href: 'https://wa.me/5581971152754',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'alberttcarlosu.u@gmail.com',
    href: 'mailto:alberttcarlosu.u@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'carlos-mchagas',
    href: 'https://linkedin.com/in/carlos-mchagas',
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: 'Recife, PE – Brasil',
    href: null,
  },
]

export function Contact() {
  const whatsappMessage = encodeURIComponent(
    'Olá Carlos! Vim pelo seu portfólio e gostaria de conversar.'
  )
  const whatsappLink = `https://wa.me/5581971152754?text=${whatsappMessage}`

  return (
    <section id="contato" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm mb-4 block">
            {'// Contato'}
          </span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Vamos{' '}
            <span className="gradient-text">conversar</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estou disponível para novos projetos, estágios ou oportunidades de trabalho.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Informações de contato
            </h3>
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="text-accent" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  {info.href ? (
                    <a 
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-accent transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-foreground">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="glass-card rounded-xl p-8 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#25d366]/20 flex items-center justify-center mb-6">
              <MessageCircle className="text-[#25d366]" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Fale diretamente comigo
            </h3>
            <p className="text-muted-foreground mb-6 max-w-sm">
              A forma mais rápida de me contatar. Respondo o mais breve possível!
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#25d366] hover:bg-[#25d366]/90 text-white font-semibold px-8 glow-hover w-full max-w-xs"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} className="mr-2" />
                Iniciar Conversa no WhatsApp
              </a>
            </Button>
            <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
              <Clock size={14} />
              <span>Tempo médio de resposta: menos de 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
