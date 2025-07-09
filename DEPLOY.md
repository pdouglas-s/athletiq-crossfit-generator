# AthletIQ - Deploy Guide

## 🚀 Publicação na Web

### 1. Vercel (Recomendado)

**Passo a Passo:**

1. **Criar conta na Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com GitHub, GitLab ou Bitbucket

2. **Subir código para GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - AthletIQ CrossFit Generator"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/athletiq-crossfit.git
   git push -u origin main
   ```

3. **Deploy na Vercel:**
   - No dashboard da Vercel, clique em "New Project"
   - Conecte seu repositório GitHub
   - A Vercel detectará automaticamente que é um projeto Next.js
   - Clique em "Deploy"
   - Seu site estará online em poucos minutos!

**URL de exemplo:** `https://athletiq-crossfit.vercel.app`

### 2. Netlify (Alternativa)

1. **Criar conta no Netlify:**
   - Acesse [netlify.com](https://netlify.com)
   - Faça login com GitHub

2. **Deploy direto do GitHub:**
   - No dashboard, clique "New site from Git"
   - Conecte seu repositório
   - Build command: `npm run build`
   - Publish directory: `.next`

### 3. GitHub Pages + Export Estático

Para usar GitHub Pages gratuito, precisamos configurar export estático:

1. **Adicionar configuração no `next.config.js`:**
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   module.exports = nextConfig
   ```

2. **Build estático:**
   ```bash
   npm run build
   ```

3. **Deploy no GitHub Pages:**
   - Commit e push para GitHub
   - Vá em Settings > Pages
   - Source: Deploy from a branch
   - Branch: main, folder: /docs (copiar conteúdo de `.next` para `docs/`)

### 4. Railway (Deploy com Banco de Dados)

1. **Criar conta no Railway:**
   - Acesse [railway.app](https://railway.app)
   - Conecte com GitHub

2. **Deploy direto:**
   - "New Project" > "Deploy from GitHub repo"
   - Selecione seu repositório
   - Railway detecta Next.js automaticamente

### 5. Heroku (Opção Paga)

1. **Criar `package.json` script:**
   ```json
   {
     "scripts": {
       "start": "next start -p $PORT"
     }
   }
   ```

2. **Deploy:**
   ```bash
   heroku create athletiq-crossfit
   git push heroku main
   ```

## 🔧 Configurações de Produção

### Variáveis de Ambiente

Crie arquivo `.env.local` (não commitar):
```
NEXT_PUBLIC_APP_URL=https://seu-dominio.vercel.app
NEXT_PUBLIC_GA_ID=SEU_GOOGLE_ANALYTICS_ID
```

### Performance

O app já está otimizado com:
- ✅ Static Site Generation (SSG)
- ✅ Tailwind CSS purging
- ✅ Next.js Image optimization
- ✅ TypeScript para menor bundle
- ✅ Component lazy loading

### SEO

Adicionar ao `layout.tsx`:
```tsx
export const metadata = {
  title: 'AthletIQ - Gerador Inteligente de Treinos CrossFit',
  description: 'Gere treinos personalizados de CrossFit com aquecimento, técnica e WOD balanceados.',
  keywords: 'crossfit, treino, fitness, workout, wod, exercicios',
  openGraph: {
    title: 'AthletIQ - Treinos de CrossFit Inteligentes',
    description: 'Gere treinos personalizados com IA',
    url: 'https://seu-dominio.vercel.app',
    siteName: 'AthletIQ'
  }
}
```

## 🌐 Domínio Personalizado

### Vercel
- No dashboard: Settings > Domains
- Adicione seu domínio personalizado
- Configure DNS conforme instruções

### Registro de Domínio
- **Namecheap:** ~$12/ano (.com)
- **GoDaddy:** ~$15/ano (.com)
- **Google Domains:** ~$12/ano (.com)

## 📊 Analytics e Monitoramento

### Google Analytics
```bash
npm install @next/third-parties
```

### Vercel Analytics
- Gratuito para projetos Vercel
- Ativar no dashboard: Analytics tab

## 🚀 Status de Deploy

Após seguir os passos:
- [ ] Código no GitHub
- [ ] Deploy na Vercel/Netlify
- [ ] Domínio configurado
- [ ] Analytics configurado
- [ ] SSL ativo (automático)

**Resultado:** Seu AthletIQ estará acessível mundialmente em HTTPS!
