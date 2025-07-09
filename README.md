# AthletIQ - Treinos Pensados com Inteligência 🏋️‍♂️

> Gerador inteligente de treinos de CrossFit personalizados com base em ciência e metodologia.

## 📋 Sobre o Projeto

O AthletIQ é uma aplicação web desenvolvida em Next.js que gera treinos de CrossFit personalizados e inteligentes. O sistema analisa grupos musculares e evita sobreposições, criando treinos balanceados e eficazes.

### 🎯 Características Principais

- **Aquecimento Inteligente (6 min)**: Baseado nos grupos musculares da técnica e WOD
- **Técnica com Progressões (18 min)**: Exercícios preparatórios do iniciante ao avançado
- **WOD Otimizado (20 min)**: Algoritmo que evita sobreposição de grupos musculares
- **Playlists Integradas**: Links diretos para Spotify e Deezer baseados na intensidade

## 🏗️ Estrutura do Treino

### 🧊 Fase 1: Aquecimento (6 minutos)
- Exercícios de mobilidade, ativação e cardio leve
- Seleção automática baseada nos grupos musculares da técnica
- Preparação específica para o WOD

### 🔧 Fase 2: Técnica (18 minutos)
**Progressões Detalhadas por Nível:**

**Movimentos Funcionais:**
- Squat, Deadlift, Burpee, Pull-up, Thruster
- Progressões do iniciante ao avançado
- Exercícios preparatórios e variações

**Ginástica:**
- Handstand, Muscle-up, Rings, V-sit-up
- Desenvolvimento de força e coordenação
- Transições graduais entre níveis

**Levantamento Olímpico:**
- Snatch, Clean and Jerk, Sumo Deadlift High Pull
- Técnica refinada e complexes avançados
- Preparação para competição

### 🔥 Fase 3: WOD (Workout of the Day) - 20 minutos
**Tipos Disponíveis:**
- **AMRAP**: Máximo de repetições/rounds em tempo fixo
- **RFT**: Rodadas fixas pelo menor tempo
- **EMOM**: Tarefas a cada minuto
- **Tabata**: 20s esforço / 10s descanso
- **Hero WODs**: Treinos intensos e desafiadores
- **Partner**: Dinâmica em dupla
- **Barbell/Gymnastics/Metabolic/Classic**: Especializações

## 🚀 Tecnologias

- **Frontend**: Next.js 14, React, TypeScript
- **Estilização**: Tailwind CSS
- **Estrutura**: App Router, Componentes Funcionais
- **Lógica**: Algoritmo inteligente de geração de treinos

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css      # Estilos globais
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Página inicial
├── components/
│   ├── WorkoutDisplay.tsx           # Exibição do treino
│   └── WorkoutGeneratorForm.tsx     # Formulário de geração
├── data/
│   └── exercises.ts     # Base de dados de exercícios
├── lib/
│   └── workoutGenerator.ts  # Algoritmo de geração
└── types/
    └── workout.ts       # Definições TypeScript
```

## 🧠 Algoritmo Inteligente

### Análise de Grupos Musculares
- Identifica músculos primários e secundários da técnica
- Evita sobreposição excessiva no WOD
- Balanceia força, cardio e ginástica

### Seleção de Exercícios
- Aquecimento direcionado aos grupos musculares alvo
- WOD complementar que não sobrecarregue os mesmos músculos
- Variedade de equipamentos e movimentos

## 🎨 Interface

### Características da UI
- Design moderno e responsivo
- Cores temáticas do CrossFit (laranja e azul)
- Visualização clara das três fases
- Formulário intuitivo de configuração

### Funcionalidades
- Seleção manual ou automática de técnicas
- Escolha de tipo de WOD específico
- Modo "Me Surpreenda" para treinos aleatórios
- Exibição detalhada do treino gerado

## 🏃‍♂️ Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação e Execução

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar versão de produção
npm start
```

A aplicação estará disponível em `http://localhost:3000`

## 📊 Base de Dados

### Exercícios Categorizados
- **Tipo**: Funcional, Olímpico, Ginástica
- **Grupos Musculares**: Primários e secundários
- **Equipamentos**: Necessários para execução
- **Descrição**: Detalhes do movimento

### Templates de WOD
- Diversos tipos (AMRAP, RFT, EMOM, etc.)
- Configurações específicas (duração, rounds, repetições)
- Níveis de dificuldade (Beginner, Intermediate, Advanced)

## 🎵 Recursos Extras

- **Playlists Personalizadas**: Sugestões específicas com links diretos
  - **Spotify**: Playlists curadas para cada tipo de treino e nível
  - **Deezer**: Alternativas musicais para máxima motivação
- **Estimativa de Duração**: Cálculo automático do tempo total (44 min padrão)
- **Nível de Dificuldade**: Análise automática baseada no WOD
- **Algoritmo Inteligente**: Evita fadiga muscular excessiva

## 🔮 Funcionalidades Futuras

- [ ] Salvar treinos favoritos
- [ ] Compartilhar treinos com parceiros
- [ ] Sistema de anotações e progresso
- [ ] Integração com wearables
- [ ] Histórico de treinos
- [ ] Comunidade e ranking

## 📝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Créditos

Desenvolvido com 💪 para a comunidade CrossFit, combinando tecnologia e metodologia de treinamento para criar a melhor experiência de treino personalizado.

---

**AthletIQ** - Porque cada treino deve ser único, inteligente e desafiador! 🔥
