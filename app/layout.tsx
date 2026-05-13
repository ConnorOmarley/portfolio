import type { Metadata } from 'next'
import { Inter, Space_Mono, Syne } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const spaceMono = Space_Mono({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-space-mono'
})

const syne = Syne({ 
  subsets: ["latin"],
  variable: '--font-syne'
})

export const metadata: Metadata = {
  title: 'Carlos Alberto | Full Stack Developer',
  description: 'Desenvolvedor Full Stack Júnior em Recife, PE. Especializado em Node.js, React, TypeScript e AWS. Disponível para estágio e projetos freelance.',
  keywords: ['desenvolvedor', 'full stack', 'react', 'node.js', 'typescript', 'recife', 'freelancer'],
  authors: [{ name: 'Carlos Alberto' }],
  openGraph: {
    title: 'Carlos Alberto | Full Stack Developer',
    description: 'Desenvolvedor Full Stack Júnior em Recife, PE. Disponível para estágio e projetos freelance.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.variable} ${spaceMono.variable} ${syne.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
