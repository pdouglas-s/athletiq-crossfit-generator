# Script de Deploy para Windows PowerShell
Write-Host "🚀 Iniciando deploy do AthletIQ..." -ForegroundColor Green

# 1. Verificar se está tudo funcionando
Write-Host "📦 Fazendo build de produção..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erro no build. Verifique os erros acima." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build concluído com sucesso!" -ForegroundColor Green

# 2. Verificar se git está inicializado
if (!(Test-Path ".git")) {
    Write-Host "🔧 Inicializando repositório Git..." -ForegroundColor Yellow
    git init
    git branch -M main
}

# 3. Adicionar todas as mudanças
Write-Host "📝 Adicionando arquivos ao Git..." -ForegroundColor Yellow
git add .

# 4. Commit
$commit_msg = Read-Host "Digite a mensagem do commit (ou Enter para usar padrão)"
if ([string]::IsNullOrEmpty($commit_msg)) {
    $commit_msg = "Deploy: Atualização do AthletIQ CrossFit Generator"
}

git commit -m $commit_msg

# 5. Verificar se remote origin existe
$remote_url = git remote get-url origin 2>$null
if ([string]::IsNullOrEmpty($remote_url)) {
    Write-Host "🔗 Configure o repositório GitHub:" -ForegroundColor Cyan
    Write-Host "1. Crie um repositório no GitHub" -ForegroundColor White
    Write-Host "2. Execute: git remote add origin https://github.com/SEU_USUARIO/athletiq-crossfit.git" -ForegroundColor White
    Write-Host "3. Execute: git push -u origin main" -ForegroundColor White
    Write-Host ""
    Write-Host "Após isso, você pode fazer deploy na Vercel:" -ForegroundColor Cyan
    Write-Host "1. Acesse vercel.com" -ForegroundColor White
    Write-Host "2. Conecte seu repositório GitHub" -ForegroundColor White
    Write-Host "3. Deploy automático!" -ForegroundColor White
} else {
    # Push para GitHub
    Write-Host "⬆️  Enviando para GitHub..." -ForegroundColor Yellow
    git push

    Write-Host "🎉 Deploy enviado para GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Para deploy na Vercel:" -ForegroundColor Cyan
    Write-Host "1. Acesse https://vercel.com" -ForegroundColor White
    Write-Host "2. New Project > Import Git Repository" -ForegroundColor White
    Write-Host "3. Selecione seu repositório" -ForegroundColor White
    Write-Host "4. Deploy!" -ForegroundColor White
}

Write-Host ""
Write-Host "🌐 Opções de Hospedagem:" -ForegroundColor Cyan
Write-Host "• Vercel (Recomendado): https://vercel.com" -ForegroundColor White
Write-Host "• Netlify: https://netlify.com" -ForegroundColor White
Write-Host "• Railway: https://railway.app" -ForegroundColor White
Write-Host ""
Write-Host "📖 Guia completo em: DEPLOY.md" -ForegroundColor Yellow

Read-Host "Pressione Enter para continuar..."
