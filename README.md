# 👤 Portfolio

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

Meu site pessoal — apresentação, stack, projetos, certificações e contato. Uma página em português, com tema claro/escuro.

🌐 **No ar:** [portfolio-mauve-two-57.vercel.app](https://portfolio-mauve-two-57.vercel.app)

---

## ✨ O que tem aqui

Site de uma página em português, com as seções montadas em `app/page.tsx` nessa ordem:

`Navbar` → `Hero` → `About` → `Stack` → `Projects` → `Services` → `Certifications` → `Contact` → `Footer` + botão flutuante de WhatsApp

Visual em tema claro/escuro, com fundo de grid, brilho radial, cards de vidro (`glass-card`), borda em gradiente e texto em gradiente. 30 partículas flutuam no fundo.

## 🛠️ Stack

- **Next.js 16** (App Router) e **React 19**
- **TypeScript 5.7** e **Tailwind CSS 4**, com tokens em `@theme`
- **shadcn/ui** — 57 componentes em `components/ui/`, sobre Radix UI
- **lucide-react** nos ícones, **Recharts** nos gráficos, **sonner** nos avisos
- **react-hook-form + Zod + @hookform/resolvers** declarados no `package.json`
- **Vercel Analytics** e deploy automático pela Vercel

## 🚀 Rodar localmente

```bash
npm install
npm run dev     # http://localhost:3000

npm run build   # build de produção
npm run start
npm run lint
```

## 📁 Estrutura

```
app/
├── layout.tsx          # metadata, fonte e providers
├── page.tsx            # monta as seções na ordem
├── globals.css         # tokens do Tailwind 4 e estilos (grid, glass, gradiente, partículas)
└── components/ui/      # 57 componentes shadcn/ui
components/
├── navbar.tsx          # esconde ao rolar para baixo, volta ao subir
├── hero.tsx  about.tsx  stack.tsx  projects.tsx
├── services.tsx  certifications.tsx  contact.tsx
├── particles.tsx       # 30 partículas com posição e duração aleatórias
├── theme-provider.tsx  footer.tsx  whatsapp-button.tsx
lib/                    # utilitários (cn) e dados das seções
```

## Limites conhecidos

- **Não tem suíte de testes.** Validação manual e por `npm run build`.
- **Não há formulário de contato.** A seção de contato é só exibição: WhatsApp, e-mail, LinkedIn e localização, com um botão de deep-link para o WhatsApp (`wa.me` com mensagem pré-preenchida). Nada é enviado a servidor nenhum.
- **Projetos e certificações estão hardcoded no componente** (`components/projects.tsx`, `components/certifications.tsx`). Hoje são 2 projetos e 1 certificação (AWS Cloud Practitioner) — o terceiro card é um placeholder de "mais projetos em breve". Virar CMS ou fetch é o próximo passo.
- **As partículas usam `Math.random()` na renderização** (`particles.tsx:42`), então a opacidade delas muda a cada re-render do componente. Não quebra nada, mas é um efeito colateral evitável — o valor deveria sair do `useState`.

## 📝 Licença

MIT
