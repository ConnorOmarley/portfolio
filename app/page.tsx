import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Stack } from '@/components/stack'
import { Projects } from '@/components/projects'
import { Services } from '@/components/services'
import { Certifications } from '@/components/certifications'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Services />
      <Certifications />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
