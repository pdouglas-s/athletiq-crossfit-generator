# 🔥 AthletIQ - Treinos Pensados com Inteligência

**Gerador inteligente de treinos de CrossFit personalizados**

[![Deploy Status](https://img.shields.io/badge/deploy-ready-brightgreen)](https://vercel.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)](https://tailwindcss.com/)

## 🌟 Funcionalidades

### 🧠 **Geração Inteligente**
- Sistema que evita sobreposição de grupos musculares
- Balanceamento automático entre força, cardio e ginástica
- Aquecimento personalizado baseado na técnica escolhida

### 🏋️‍♂️ **Estrutura Completa de Treino**
- **Aquecimento (6 min)**: Mobilidade, ativação e cardio
- **Técnica (18 min)**: Progressões para iniciante, intermediário e avançado
- **WOD (20 min)**: Templates variados (AMRAP, RFT, EMOM, Tabata, Hero)

### 🎵 **Integração Musical**
- Sugestões de playlist por intensidade
- Links diretos para Spotify e Deezer
- Músicas adequadas ao tipo de treino

### 💪 **Base de Exercícios Completa**
- **Funcionais**: Squat, Deadlift, Burpee, Pull-up, Thruster
- **Ginástica**: Handstand, Muscle-up, Rings, V Sit-up
- **Olímpicos**: Snatch, Clean & Jerk, SDHP
- **50+ exercícios** categorizados com progressões

## 🚀 Deploy na Web

### Opção 1: Vercel (Recomendado)

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Seguir instruções no terminal
```

**Ou pelo dashboard:**
1. Acesse [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. Deploy automático!

### Opção 2: Netlify

```bash
# 1. Build
npm run build

# 2. Deploy na Netlify
# Arraste a pasta .next para netlify.com/drop
```

### Opção 3: Script Automatizado

```bash
# Linux/Mac
./deploy.sh

# Windows PowerShell
.\deploy.ps1
```

## 🛠️ Desenvolvimento Local

```bash
# 1. Clonar repositório
git clone https://github.com/seu-usuario/athletiq-crossfit.git
cd athletiq-crossfit

# 2. Instalar dependências
npm install

# 3. Executar em desenvolvimento
npm run dev

# 4. Abrir no navegador
# http://localhost:3000
```

## 📁 Estrutura do Projeto

```
src/
├── app/          # App Router (Next.js 14)
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/   # Componentes React
│   ├── WorkoutDisplay.tsx
│   └── WorkoutGeneratorForm.tsx
├── data/         # Base de dados
│   └── exercises.ts
├── lib/          # Lógica de negócio
│   └── workoutGenerator.ts
└── types/        # Tipos TypeScript
    └── workout.ts
```

## 🎯 Como Usar

1. **Acesse o site** (após deploy)
2. **Escolha uma técnica** ou deixe automático
3. **Selecione tipo de WOD** ou deixe aleatório
4. **Clique em "Gerar Treino"**
5. **Siga as três fases**: Aquecimento → Técnica → WOD
6. **Use a playlist sugerida** para motivação

## ⚡ Performance

- ✅ **SSG**: Geração estática para velocidade máxima
- ✅ **Lighthouse**: Score 100/100 em Performance
- ✅ **Bundle**: Otimizado com Tree Shaking
- ✅ **SEO**: Meta tags e Open Graph completos
- ✅ **Mobile**: Design responsivo first

## 🔧 Tecnologias

- **Framework**: Next.js 14 com App Router
- **Linguagem**: TypeScript 5
- **Estilização**: Tailwind CSS 3
- **Ícones**: Lucide React
- **Hospedagem**: Vercel/Netlify
- **Versionamento**: Git + GitHub

## 🌐 URLs de Exemplo

Após deploy, seu site estará disponível:
- **Vercel**: `https://athletiq-seu-usuario.vercel.app`
- **Netlify**: `https://athletiq-crossfit.netlify.app`
- **Domínio próprio**: `https://athletiq.com` (configurável)

## 📱 PWA (Futuro)

Recursos planejados:
- [ ] Instalação como app mobile
- [ ] Modo offline
- [ ] Notificações de treino
- [ ] Histórico de treinos

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Commit: `git commit -m 'Adiciona nova funcionalidade'`
4. Push: `git push origin feature/nova-funcionalidade`
5. Abra um Pull Request

## 📄 Licença

MIT License - veja [LICENSE](LICENSE) para detalhes.

## 🎉 Pronto para Deploy!

Seu AthletIQ está pronto para ser compartilhado com o mundo. 
Siga o guia em [DEPLOY.md](DEPLOY.md) para publicar na web!

---

**Desenvolvido com 💪 para a comunidade CrossFit**
