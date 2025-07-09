#!/bin/bash

# Script de Deploy Automatizado para AthletIQ
echo "🚀 Iniciando deploy do AthletIQ..."

# 1. Verificar se está tudo funcionando
echo "📦 Fazendo build de produção..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Erro no build. Verifique os erros acima."
    exit 1
fi

echo "✅ Build concluído com sucesso!"

# 2. Verificar se git está inicializado
if [ ! -d ".git" ]; then
    echo "🔧 Inicializando repositório Git..."
    git init
    git branch -M main
fi

# 3. Adicionar todas as mudanças
echo "📝 Adicionando arquivos ao Git..."
git add .

# 4. Commit
echo "💾 Fazendo commit..."
read -p "Digite a mensagem do commit (ou Enter para usar padrão): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Deploy: Atualização do AthletIQ CrossFit Generator"
fi

git commit -m "$commit_msg"

# 5. Verificar se remote origin existe
remote_url=$(git remote get-url origin 2>/dev/null)
if [ -z "$remote_url" ]; then
    echo "🔗 Configure o repositório GitHub:"
    echo "1. Crie um repositório no GitHub"
    echo "2. Execute: git remote add origin https://github.com/SEU_USUARIO/athletiq-crossfit.git"
    echo "3. Execute: git push -u origin main"
    echo ""
    echo "Após isso, você pode fazer deploy na Vercel:"
    echo "1. Acesse vercel.com"
    echo "2. Conecte seu repositório GitHub"
    echo "3. Deploy automático!"
else
    # Push para GitHub
    echo "⬆️  Enviando para GitHub..."
    git push

    echo "🎉 Deploy enviado para GitHub!"
    echo ""
    echo "Para deploy na Vercel:"
    echo "1. Acesse https://vercel.com"
    echo "2. New Project > Import Git Repository"
    echo "3. Selecione seu repositório"
    echo "4. Deploy!"
fi

echo ""
echo "🌐 Opções de Hospedagem:"
echo "• Vercel (Recomendado): https://vercel.com"
echo "• Netlify: https://netlify.com"
echo "• Railway: https://railway.app"
echo ""
echo "📖 Guia completo em: DEPLOY.md"
