<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# AthletIQ - Instruções para o GitHub Copilot

Este é um projeto de gerador inteligente de treinos de CrossFit desenvolvido com Next.js, TypeScript e Tailwind CSS.

## Contexto do Projeto

O AthletIQ é uma aplicação web que gera treinos de CrossFit personalizados com base em três fases principais:

1. **Aquecimento (6 minutos)** - Baseado nos grupos musculares da técnica e WOD
2. **Técnica (18 minutos)** - Exercício técnico selecionado ou automático
3. **WOD (Workout of the Day)** - Gerado evitando sobreposição de grupos musculares

## Arquitetura

### Tecnologias Principais
- **Framework**: Next.js 14 com App Router
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Estrutura**: Componentes React funcionais

### Estrutura de Pastas
```
src/
├── app/          # App Router pages
├── components/   # Componentes React reutilizáveis
├── data/         # Base de dados de exercícios
├── lib/          # Utilitários e lógica de negócio
└── types/        # Definições de tipos TypeScript
```

### Tipos Principais
- `Exercise`: Representa exercícios (funcional, olímpico, ginástica)
- `WarmupExercise`: Exercícios de aquecimento
- `WODTemplate`: Templates de WOD (AMRAP, RFT, EMOM, etc.)
- `GeneratedWorkout`: Treino completo gerado

## Diretrizes de Desenvolvimento

### Componentes React
- Use componentes funcionais com hooks
- Inclua 'use client' quando necessário estado/interatividade
- Mantenha componentes pequenos e focados em uma responsabilidade
- Use TypeScript para tipagem forte

### Estilização
- Use classes do Tailwind CSS
- Cores temáticas definidas: `crossfit-orange`, `crossfit-blue`, `crossfit-gray`
- Classes de utilidade personalizadas: `btn-primary`, `btn-secondary`, `card`

### Lógica de Negócio
- A classe `WorkoutGenerator` é responsável pela geração inteligente de treinos
- Evitar sobreposição de grupos musculares entre técnica e WOD
- Balanceamento entre força, cardio e ginástica

### Funcionalidades Esperadas
- Geração automática ou manual de treinos
- Interface para seleção de técnicas e tipos de WOD
- Visualização clara das três fases do treino
- Sugestões de playlist baseadas na intensidade
- Funcionalidades futuras: salvar, compartilhar, anotações

## Padrões de Código

### Nomenclatura
- Componentes: PascalCase (`WorkoutDisplay`)
- Funções: camelCase (`generateWorkout`)
- Constantes: UPPER_SNAKE_CASE ou camelCase para arrays/objetos
- Tipos: PascalCase (`GeneratedWorkout`)

### Tratamento de Estado
- Use hooks do React (`useState`, `useEffect`)
- Mantenha estado local quando possível
- Considere Context API para estado global futuro

### Responsividade
- Mobile-first approach
- Use breakpoints do Tailwind: `sm:`, `md:`, `lg:`
- Grid e flexbox para layouts

## Dados e Algoritmos

### Base de Exercícios
- Categorização por tipo (functional, olympic, gymnastics)
- Grupos musculares primários e secundários
- Equipamentos necessários

### Algoritmo de Geração
- Análise de grupos musculares da técnica escolhida
- Seleção de aquecimento baseado na técnica
- Evitar sobreposição muscular no WOD
- Balanceamento de tipos de exercício

Ao desenvolver novas funcionalidades, mantenha a filosofia de treinos inteligentes e personalizados, sempre priorizando a experiência do usuário e a qualidade dos treinos gerados.
