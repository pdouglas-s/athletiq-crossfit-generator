import { Exercise, WarmupExercise, WODTemplate } from '@/types/workout';

// Base de dados de exercícios funcionais
export const functionalExercises: Exercise[] = [
  {
    id: 'squat',
    name: 'Squat (Agachamento)',
    type: 'functional',
    muscleGroups: {
      primary: ['quadriceps', 'glutes'],
      secondary: ['hamstrings', 'core', 'calves']
    },
    equipment: ['bodyweight', 'barbell', 'dumbbell'],
    description: 'Movimento fundamental de agachamento com foco na força das pernas',
    progressions: {
      beginner: [
        '1. Box Squat - Agachar até sentar numa caixa (30-45cm)',
        '2. Air Squat assistido - Usar elástico ou TRX para apoio',
        '3. Air Squat parcial - Agachar até 90° apenas',
        '4. Air Squat completo - Movimento completo sem peso'
      ],
      intermediate: [
        '1. Goblet Squat - Haltere ou kettlebell no peito (8-16kg)',
        '2. Front Squat - Barra na frente dos ombros (barra vazia)',
        '3. Back Squat - Barra nas costas (20-40kg)',
        '4. Overhead Squat - Barra acima da cabeça (barra vazia)'
      ],
      advanced: [
        '1. Back Squat pesado - 1.5x peso corporal',
        '2. Front Squat pesado - 1.2x peso corporal',
        '3. Pistol Squat - Agachamento em uma perna',
        '4. Jump Squat - Agachamento com salto explosivo'
      ]
    }
  },
  {
    id: 'deadlift',
    name: 'Deadlift (Levantamento Terra)',
    type: 'functional',
    muscleGroups: {
      primary: ['hamstrings', 'glutes', 'lower_back'],
      secondary: ['quadriceps', 'core', 'traps']
    },
    equipment: ['barbell', 'dumbbell'],
    description: 'Levantamento de peso do chão com cadeia posterior',
    progressions: {
      beginner: [
        '1. Romanian Deadlift - Movimento parcial, barra até joelhos',
        '2. Rack Pull - Deadlift com barra elevada (altura dos joelhos)',
        '3. Deadlift com hex bar - Posição mais natural',
        '4. Deadlift convencional - Barra olímpica (20kg)'
      ],
      intermediate: [
        '1. Deadlift 5x5 - 60-80% do 1RM',
        '2. Sumo Deadlift - Stance mais largo',
        '3. Deficit Deadlift - Em cima de plataforma (2-5cm)',
        '4. Touch and Go - Múltiplas repetições sem pausa'
      ],
      advanced: [
        '1. Deadlift 1.5-2x peso corporal',
        '2. Deadlift com pausa - 3s no chão entre reps',
        '3. Speed Deadlift - 50-60% com foco na velocidade',
        '4. Deadlift com chains/bands - Resistência variável'
      ]
    }
  },
  {
    id: 'burpee',
    name: 'Burpee',
    type: 'functional',
    muscleGroups: {
      primary: ['full_body'],
      secondary: ['cardiovascular']
    },
    equipment: ['bodyweight'],
    description: 'Exercício de corpo inteiro com componente cardiovascular',
    progressions: {
      beginner: [
        '1. Step Back Burpee - Dar passos em vez de pular',
        '2. Burpee sem flexão - Pular para prancha sem fazer push-up',
        '3. Burpee no joelho - Fazer flexão apoiando joelhos',
        '4. Burpee básico - Movimento completo controlado'
      ],
      intermediate: [
        '1. Burpee com push-up - Incluir flexão completa',
        '2. Burpee com salto - Pular no final com braços acima',
        '3. Burpee lateral - Pular para o lado da barra',
        '4. Burpee box jump - Terminar saltando numa caixa'
      ],
      advanced: [
        '1. Burpee pull-up - Terminar com barra fixa',
        '2. Devil Press - Burpee com halteres + press',
        '3. Burpee muscle-up - Terminar com muscle-up',
        '4. Burpee broad jump - Salto em distância no final'
      ]
    }
  },
  {
    id: 'pullup',
    name: 'Pull-up (Barra Fixa)',
    type: 'functional',
    muscleGroups: {
      primary: ['lats', 'biceps'],
      secondary: ['rhomboids', 'core']
    },
    equipment: ['pull_up_bar'],
    description: 'Exercício de puxar para desenvolvimento das costas',
    progressions: {
      beginner: [
        '1. Dead Hang - Pendurar na barra (30-60s)',
        '2. Ring Rows - Remada na posição inclinada',
        '3. Pull-up assistido - Usar elástico ou máquina',
        '4. Pull-up negativo - Descer lentamente (5s)'
      ],
      intermediate: [
        '1. Strict Pull-up - 1-5 repetições perfeitas',
        '2. Kipping Pull-up - Usar impulso das pernas',
        '3. Chin-up - Pegada supinada (mais fácil)',
        '4. Pull-up com pausa - 2s no topo'
      ],
      advanced: [
        '1. Weighted Pull-up - Adicionar peso extra',
        '2. Archer Pull-up - Subir para um lado',
        '3. L-Sit Pull-up - Manter pernas em 90°',
        '4. One Arm Pull-up - Meta máxima de força'
      ]
    }
  },
  {
    id: 'thruster',
    name: 'Thruster',
    type: 'functional',
    muscleGroups: {
      primary: ['quadriceps', 'shoulders'],
      secondary: ['glutes', 'core', 'triceps']
    },
    equipment: ['barbell', 'dumbbell'],
    description: 'Combinação de front squat com push press',
    progressions: {
      beginner: [
        '1. Air Squat + Press - Movimentos separados',
        '2. Dumbbell Thruster - 2x 5-10kg',
        '3. Goblet Thruster - Kettlebell ou haltere',
        '4. Empty Bar Thruster - Barra olímpica vazia'
      ],
      intermediate: [
        '1. Thruster 15-25kg - Foco na técnica',
        '2. Thruster com pausa - 2s no bottom do squat',
        '3. Cluster - Thruster + front squat',
        '4. Thruster moderado - 30-50kg'
      ],
      advanced: [
        '1. Thruster pesado - 60-80kg+',
        '2. Devil Press - Thruster + burpee',
        '3. Thruster complex - Combinado com outros movimentos',
        '4. Max Thruster - Teste de 1RM'
      ]
    }
  }
];

// Exercícios de ginástica
export const gymnasticsExercises: Exercise[] = [
  {
    id: 'handstand',
    name: 'Handstand (Parada de Mão)',
    type: 'gymnastics',
    muscleGroups: {
      primary: ['shoulders', 'core'],
      secondary: ['triceps', 'forearms']
    },
    equipment: ['bodyweight'],
    description: 'Posição invertida de equilíbrio',
    progressions: {
      beginner: [
        '1. Wall Walk - Subir os pés na parede até 45°',
        '2. Pike Push-up - Flexão em V invertido',
        '3. Crow Pose - Equilíbrio apoiando joelhos nos cotovelos',
        '4. Hollow Hold - Posição "banana" no chão (30-60s)'
      ],
      intermediate: [
        '1. Chest-to-Wall Handstand - Peito virado para parede',
        '2. Handstand Shrug - Elevar e baixar ombros na parede',
        '3. Wall Handstand - Costas para parede (30-60s)',
        '4. Handstand Kick-up - Tentar subir sem apoio'
      ],
      advanced: [
        '1. Freestanding Handstand - Sem apoio (30s+)',
        '2. Handstand Walk - Caminhar nas mãos',
        '3. Handstand Push-up - Flexão na parada de mão',
        '4. One Arm Handstand - Meta máxima'
      ]
    }
  },
  {
    id: 'muscle_up',
    name: 'Muscle-up',
    type: 'gymnastics',
    muscleGroups: {
      primary: ['lats', 'triceps'],
      secondary: ['biceps', 'core', 'shoulders']
    },
    equipment: ['pull_up_bar', 'rings'],
    description: 'Movimento avançado de puxar e empurrar combinados',
    progressions: {
      beginner: [
        '1. Strict Pull-up - Dominar 5-10 repetições',
        '2. Strict Dips - Dominar 10-15 repetições',
        '3. High Pull-up - Puxar até o peito',
        '4. Transition Drill - Praticar transição sem subir'
      ],
      intermediate: [
        '1. Kipping Pull-up - Usar impulso eficientemente',
        '2. Chest-to-Bar - Pull-up até o peito',
        '3. Ring/Bar Transition - Movimento lento assistido',
        '4. Muscle-up negativo - Descer lentamente'
      ],
      advanced: [
        '1. Strict Muscle-up - Sem impulso',
        '2. Ring Muscle-up - Nas argolas',
        '3. Weighted Muscle-up - Com peso adicional',
        '4. Multiple Muscle-ups - Séries de repetições'
      ]
    }
  },
  {
    id: 'rings',
    name: 'Ring Exercises (Argolas)',
    type: 'gymnastics',
    muscleGroups: {
      primary: ['shoulders', 'core'],
      secondary: ['arms', 'chest']
    },
    equipment: ['rings'],
    description: 'Exercícios diversos nas argolas',
    progressions: {
      beginner: [
        '1. Ring Support - Apoiar o peso nas argolas (30s)',
        '2. Ring Row - Remada inclinada nas argolas',
        '3. Ring Push-up - Flexão com mãos nas argolas',
        '4. Ring Hold - Posições estáticas básicas'
      ],
      intermediate: [
        '1. Ring Dips - Flexão nas argolas',
        '2. L-Sit on Rings - Pernas em 90° nas argolas',
        '3. Ring Pull-up - Barra fixa nas argolas',
        '4. Ring Rollout - Movimento de extensão controlada'
      ],
      advanced: [
        '1. Iron Cross - Braços em cruz (posição estática)',
        '2. Ring Muscle-up - Muscle-up nas argolas',
        '3. Maltese - Posição horizontal avançada',
        '4. Ring Handstand - Parada de mão nas argolas'
      ]
    }
  },
  {
    id: 'v_situp',
    name: 'V Sit-up',
    type: 'gymnastics',
    muscleGroups: {
      primary: ['core'],
      secondary: ['hip_flexors']
    },
    equipment: ['bodyweight'],
    description: 'Exercício avançado de abdômen',
    progressions: {
      beginner: [
        '1. Tuck Sit - Sentar abraçando joelhos (15-30s)',
        '2. L-Sit Bent Knee - Joelhos dobrados, pés no ar',
        '3. Dead Bug - Movimento controlado alternado',
        '4. Hollow Hold - Posição "banana" (30-60s)'
      ],
      intermediate: [
        '1. L-Sit - Pernas estendidas em 90° (15-30s)',
        '2. V-Sit Hold - Posição V estática (10-20s)',
        '3. V-Sit Rock - Balançar na posição V',
        '4. Russian Twist - Rotação com pernas elevadas'
      ],
      advanced: [
        '1. V-Sit Hold longo - 30s+ na posição',
        '2. V-Sit to Hollow - Transição entre posições',
        '3. Weighted V-Sit - Adicionar peso extra',
        '4. Manna - Posição V invertida (super avançado)'
      ]
    }
  }
];

// Exercícios olímpicos
export const olympicExercises: Exercise[] = [
  {
    id: 'snatch',
    name: 'Snatch (Arranco)',
    type: 'olympic',
    muscleGroups: {
      primary: ['full_body'],
      secondary: ['explosive_power']
    },
    equipment: ['barbell'],
    description: 'Levantamento olímpico em um movimento',
    progressions: {
      beginner: [
        '1. Overhead Squat - Estabilidade com barra vazia',
        '2. Snatch Grip Deadlift - Pegada larga, puxar até quadril',
        '3. Muscle Snatch - Snatch sem agachar, só puxar',
        '4. Hang Power Snatch - Da altura dos joelhos'
      ],
      intermediate: [
        '1. Power Snatch - Snatch sem agachar fundo',
        '2. Hang Snatch - Começar da altura dos joelhos',
        '3. Snatch Pull - Puxada explosiva até extensão',
        '4. Full Snatch - Movimento completo com agachamento'
      ],
      advanced: [
        '1. Snatch complexes - Combinações de variações',
        '2. Snatch pesado - 80-100% do 1RM',
        '3. Snatch from blocks - Diferentes alturas',
        '4. Competition Snatch - Técnica de competição'
      ]
    }
  },
  {
    id: 'clean_jerk',
    name: 'Clean and Jerk',
    type: 'olympic',
    muscleGroups: {
      primary: ['full_body'],
      secondary: ['explosive_power']
    },
    equipment: ['barbell'],
    description: 'Levantamento olímpico em dois movimentos',
    progressions: {
      beginner: [
        '1. Front Squat - Base de força para clean',
        '2. Push Press - Base de força para jerk',
        '3. Muscle Clean - Clean sem agachar',
        '4. Hang Power Clean - Da altura dos joelhos'
      ],
      intermediate: [
        '1. Power Clean - Clean sem agachar fundo',
        '2. Front Squat + Push Press - Movimentos separados',
        '3. Clean Pull + Front Squat - Desenvolvimento de força',
        '4. Full Clean + Push Jerk - Movimento quase completo'
      ],
      advanced: [
        '1. Full Clean and Jerk - Movimento completo',
        '2. Clean and Jerk pesado - 80-100% do 1RM',
        '3. Clean and Jerk complexes - Variações combinadas',
        '4. Competition Clean and Jerk - Técnica perfeita'
      ]
    }
  },
  {
    id: 'sumo_deadlift_high_pull',
    name: 'Sumo Deadlift High Pull',
    type: 'olympic',
    muscleGroups: {
      primary: ['hamstrings', 'traps'],
      secondary: ['glutes', 'shoulders']
    },
    equipment: ['barbell'],
    description: 'Variação do deadlift com puxada alta',
    progressions: {
      beginner: [
        '1. Sumo Deadlift - Stance largo, puxar até quadril',
        '2. Upright Row - Puxada alta com pegada estreita',
        '3. Kettlebell High Pull - Com kettlebell',
        '4. SDHP com barra vazia - Técnica básica'
      ],
      intermediate: [
        '1. SDHP moderado - 20-40kg',
        '2. SDHP com pausa - No topo da puxada',
        '3. SDHP rápido - Foco na velocidade',
        '4. SDHP em cluster - Séries com descanso'
      ],
      advanced: [
        '1. SDHP pesado - 50-80kg+',
        '2. SDHP complex - Combinado com outros movimentos',
        '3. SDHP for time - Em WODs de alta intensidade',
        '4. SDHP technique refinement - Perfeição técnica'
      ]
    }
  }
];

// Todos os exercícios
export const allExercises: Exercise[] = [
  ...functionalExercises,
  ...gymnasticsExercises,
  ...olympicExercises
];

// Exercícios de aquecimento
export const warmupExercises: WarmupExercise[] = [
  // Mobilidade
  {
    id: 'arm_circles',
    name: 'Círculos com os braços',
    duration: 30,
    muscleGroups: ['shoulders'],
    type: 'mobility'
  },
  {
    id: 'leg_swings',
    name: 'Balanço das pernas',
    duration: 30,
    muscleGroups: ['hip_flexors', 'hamstrings'],
    type: 'mobility'
  },
  {
    id: 'hip_circles',
    name: 'Círculos com o quadril',
    duration: 30,
    muscleGroups: ['hip_flexors', 'glutes'],
    type: 'mobility'
  },
  {
    id: 'shoulder_rolls',
    name: 'Rotação dos ombros',
    duration: 30,
    muscleGroups: ['shoulders', 'upper_back'],
    type: 'mobility'
  },
  {
    id: 'neck_rolls',
    name: 'Rotação do pescoço',
    duration: 20,
    muscleGroups: ['neck', 'upper_traps'],
    type: 'mobility'
  },
  {
    id: 'ankle_circles',
    name: 'Círculos com tornozelo',
    duration: 30,
    muscleGroups: ['calves', 'ankles'],
    type: 'mobility'
  },
  {
    id: 'torso_twists',
    name: 'Rotação do tronco',
    duration: 30,
    muscleGroups: ['core', 'obliques'],
    type: 'mobility'
  },
  {
    id: 'cat_cow',
    name: 'Gato e vaca',
    duration: 30,
    muscleGroups: ['spine', 'core'],
    type: 'mobility'
  },

  // Ativação
  {
    id: 'air_squats',
    name: 'Air Squats',
    duration: 45,
    muscleGroups: ['quadriceps', 'glutes'],
    type: 'activation'
  },
  {
    id: 'band_pull_aparts',
    name: 'Puxada com elástico',
    duration: 30,
    muscleGroups: ['shoulders', 'rhomboids'],
    type: 'activation'
  },
  {
    id: 'glute_bridges',
    name: 'Ponte de glúteo',
    duration: 45,
    muscleGroups: ['glutes', 'hamstrings'],
    type: 'activation'
  },
  {
    id: 'wall_pushups',
    name: 'Flexão na parede',
    duration: 30,
    muscleGroups: ['chest', 'triceps'],
    type: 'activation'
  },
  {
    id: 'calf_raises',
    name: 'Elevação de panturrilha',
    duration: 30,
    muscleGroups: ['calves'],
    type: 'activation'
  },
  {
    id: 'dead_bugs',
    name: 'Dead bugs',
    duration: 45,
    muscleGroups: ['core', 'hip_flexors'],
    type: 'activation'
  },
  {
    id: 'bird_dogs',
    name: 'Bird dogs',
    duration: 45,
    muscleGroups: ['core', 'glutes', 'shoulders'],
    type: 'activation'
  },
  {
    id: 'scapular_wall_slides',
    name: 'Deslize escapular na parede',
    duration: 30,
    muscleGroups: ['shoulders', 'upper_back'],
    type: 'activation'
  },

  // Cardio leve
  {
    id: 'jumping_jacks',
    name: 'Jumping Jacks',
    duration: 45,
    muscleGroups: ['full_body'],
    type: 'cardio'
  },
  {
    id: 'high_knees',
    name: 'Elevação de joelhos',
    duration: 30,
    muscleGroups: ['hip_flexors', 'quadriceps'],
    type: 'cardio'
  },
  {
    id: 'butt_kicks',
    name: 'Chute no glúteo',
    duration: 30,
    muscleGroups: ['hamstrings', 'quadriceps'],
    type: 'cardio'
  },
  {
    id: 'mountain_climbers',
    name: 'Mountain Climbers',
    duration: 30,
    muscleGroups: ['core', 'shoulders'],
    type: 'cardio'
  },
  {
    id: 'side_steps',
    name: 'Passos laterais',
    duration: 30,
    muscleGroups: ['glutes', 'abductors'],
    type: 'cardio'
  },
  {
    id: 'marching_in_place',
    name: 'Marcha no lugar',
    duration: 45,
    muscleGroups: ['hip_flexors', 'core'],
    type: 'cardio'
  },
  {
    id: 'arm_swings',
    name: 'Balanço dos braços',
    duration: 30,
    muscleGroups: ['shoulders', 'chest'],
    type: 'cardio'
  },
  {
    id: 'light_jogging',
    name: 'Trote leve no lugar',
    duration: 60,
    muscleGroups: ['full_body'],
    type: 'cardio'
  },
  {
    id: 'heel_walks',
    name: 'Caminhada no calcanhar',
    duration: 30,
    muscleGroups: ['shins', 'calves'],
    type: 'cardio'
  },
  {
    id: 'toe_walks',
    name: 'Caminhada na ponta dos pés',
    duration: 30,
    muscleGroups: ['calves', 'ankles'],
    type: 'cardio'
  }
];

// Templates de WOD
export const wodTemplates: WODTemplate[] = [
  {
    id: 'cindy',
    name: 'Cindy',
    type: 'AMRAP',
    duration: 20,
    exercises: [
      { exerciseId: 'pullup', reps: 5 },
      { exerciseId: 'pushup', reps: 10 },
      { exerciseId: 'squat', reps: 15 }
    ],
    description: '20 min AMRAP: 5 Pull-ups, 10 Push-ups, 15 Air Squats',
    difficulty: 'Intermediate'
  },
  {
    id: 'functional_mix',
    name: 'Functional Power Mix',
    type: 'AMRAP',
    duration: 20,
    exercises: [
      { exerciseId: 'burpee', reps: 8 },
      { exerciseId: 'thruster', reps: 12, weight: '15-25kg' },
      { exerciseId: 'deadlift', reps: 10, weight: '40-60kg' },
      { exerciseId: 'pullup', reps: 6 }
    ],
    description: '20 min AMRAP: 8 Burpees, 12 Thrusters, 10 Deadlifts, 6 Pull-ups',
    difficulty: 'Advanced'
  },
  {
    id: 'karen',
    name: 'Karen',
    type: 'RFT',
    exercises: [
      { exerciseId: 'thruster', reps: 150, weight: '20kg' }
    ],
    description: '150 Wall-ball shots for time (cap: 20 min)',
    difficulty: 'Advanced'
  },
  {
    id: 'crossfit_triplet',
    name: 'CrossFit Triplet',
    type: 'RFT',
    rounds: 5,
    exercises: [
      { exerciseId: 'squat', reps: 21 },
      { exerciseId: 'pushup', reps: 15 },
      { exerciseId: 'burpee', reps: 9 }
    ],
    description: '5 rounds for time: 21 Squats, 15 Push-ups, 9 Burpees',
    difficulty: 'Intermediate'
  },
  {
    id: 'strength_endurance',
    name: 'Strength & Endurance',
    type: 'RFT',
    rounds: 4,
    exercises: [
      { exerciseId: 'deadlift', reps: 12, weight: '60-80kg' },
      { exerciseId: 'thruster', reps: 10, weight: '20-30kg' },
      { exerciseId: 'pullup', reps: 8 },
      { exerciseId: 'burpee', reps: 6 }
    ],
    description: '4 rounds for time: 12 Deadlifts, 10 Thrusters, 8 Pull-ups, 6 Burpees',
    difficulty: 'Advanced'
  },
  {
    id: 'murph',
    name: 'Murph',
    type: 'Hero',
    duration: 30,
    exercises: [
      { exerciseId: 'pullup', reps: 100 },
      { exerciseId: 'pushup', reps: 200 },
      { exerciseId: 'squat', reps: 300 }
    ],
    description: '1 mile run, 100 pull-ups, 200 push-ups, 300 squats, 1 mile run (cap: 30 min)',
    difficulty: 'Advanced'
  },
  {
    id: 'conditioning_circuit',
    name: 'Conditioning Circuit',
    type: 'AMRAP',
    duration: 20,
    exercises: [
      { exerciseId: 'mountain_climbers', reps: 20 },
      { exerciseId: 'squat', reps: 15 },
      { exerciseId: 'pushup', reps: 10 },
      { exerciseId: 'jumping_jacks', reps: 25 },
      { exerciseId: 'burpee', reps: 5 }
    ],
    description: '20 min AMRAP: 20 Mountain Climbers, 15 Squats, 10 Push-ups, 25 Jumping Jacks, 5 Burpees',
    difficulty: 'Beginner'
  },
  {
    id: 'tabata_burpees',
    name: 'Tabata Multi-Exercise',
    type: 'Tabata',
    duration: 20,
    exercises: [
      { exerciseId: 'burpee' },
      { exerciseId: 'squat' },
      { exerciseId: 'pushup' },
      { exerciseId: 'mountain_climbers' }
    ],
    description: '4 rounds de 4 min cada: 20s trabalho, 10s descanso (Burpees, Squats, Push-ups, Mountain Climbers)',
    difficulty: 'Intermediate'
  },
  {
    id: 'emom_variety',
    name: 'EMOM Variety',
    type: 'EMOM',
    duration: 20,
    exercises: [
      { exerciseId: 'deadlift', reps: 5, weight: '70%' },
      { exerciseId: 'thruster', reps: 8, weight: '20kg' },
      { exerciseId: 'pullup', reps: 6 },
      { exerciseId: 'burpee', reps: 10 }
    ],
    description: '20 min EMOM: Min 1: 5 Deadlifts, Min 2: 8 Thrusters, Min 3: 6 Pull-ups, Min 4: 10 Burpees (repetir)',
    difficulty: 'Intermediate'
  },
  {
    id: 'gymnastics_flow',
    name: 'Gymnastics Flow',
    type: 'AMRAP',
    duration: 20,
    exercises: [
      { exerciseId: 'handstand', reps: 1, weight: '30s hold' },
      { exerciseId: 'v_situp', reps: 10 },
      { exerciseId: 'muscle_up', reps: 3 },
      { exerciseId: 'rings', reps: 5 }
    ],
    description: '20 min AMRAP: 30s Handstand Hold, 10 V Sit-ups, 3 Muscle-ups, 5 Ring Dips',
    difficulty: 'Advanced'
  },
  {
    id: 'crossfit_total',
    name: 'Strength Complex',
    type: 'Classic',
    duration: 20,
    exercises: [
      { exerciseId: 'squat', reps: 3, weight: '80%' },
      { exerciseId: 'deadlift', reps: 2, weight: '85%' },
      { exerciseId: 'thruster', reps: 5, weight: '60%' }
    ],
    description: '20 min para completar: 3x3 Squats, 3x2 Deadlifts, 3x5 Thrusters (com descanso)',
    difficulty: 'Advanced'
  },
  {
    id: 'metabolic_madness',
    name: 'Metabolic Madness',
    type: 'Metabolic',
    duration: 20,
    exercises: [
      { exerciseId: 'burpee', reps: 12 },
      { exerciseId: 'jumping_jacks', reps: 30 },
      { exerciseId: 'mountain_climbers', reps: 40 },
      { exerciseId: 'squat', reps: 20 },
      { exerciseId: 'pushup', reps: 15 }
    ],
    description: '20 min AMRAP: 12 Burpees, 30 Jumping Jacks, 40 Mountain Climbers, 20 Squats, 15 Push-ups',
    difficulty: 'Intermediate'
  }
];
