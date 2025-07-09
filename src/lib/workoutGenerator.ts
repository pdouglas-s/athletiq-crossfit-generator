import { Exercise, WarmupExercise, WODTemplate, GeneratedWorkout } from '@/types/workout';
import { allExercises, warmupExercises, wodTemplates } from '@/data/exercises';

export class WorkoutGenerator {
  
  // Gera aquecimento baseado nos grupos musculares da técnica
  private generateWarmup(techniqueExercise: Exercise): { exercises: WarmupExercise[], totalDuration: number } {
    const targetMuscleGroups = [
      ...techniqueExercise.muscleGroups.primary,
      ...techniqueExercise.muscleGroups.secondary
    ];

    // Seleciona exercícios de aquecimento que trabalhem os grupos musculares alvo
    const relevantWarmups = warmupExercises.filter(warmup => 
      warmup.muscleGroups.some(group => 
        targetMuscleGroups.includes(group) || group === 'full_body'
      )
    );

    // Garante variedade: mobilidade, ativação e cardio
    const mobilityExercises = relevantWarmups.filter(ex => ex.type === 'mobility');
    const activationExercises = relevantWarmups.filter(ex => ex.type === 'activation');
    const cardioExercises = relevantWarmups.filter(ex => ex.type === 'cardio');

    const selectedExercises: WarmupExercise[] = [];
    
    // Adiciona pelo menos um de cada tipo
    if (mobilityExercises.length > 0) {
      selectedExercises.push(this.getRandomItem(mobilityExercises));
    }
    if (activationExercises.length > 0) {
      selectedExercises.push(this.getRandomItem(activationExercises));
    }
    if (cardioExercises.length > 0) {
      selectedExercises.push(this.getRandomItem(cardioExercises));
    }

    // Completa até 6 minutos (360 segundos)
    let totalDuration = selectedExercises.reduce((sum, ex) => sum + ex.duration, 0);
    
    while (totalDuration < 300 && relevantWarmups.length > selectedExercises.length) {
      const remaining = relevantWarmups.filter(ex => 
        !selectedExercises.some(selected => selected.id === ex.id)
      );
      
      if (remaining.length > 0) {
        const nextExercise = this.getRandomItem(remaining);
        if (totalDuration + nextExercise.duration <= 360) {
          selectedExercises.push(nextExercise);
          totalDuration += nextExercise.duration;
        } else {
          break;
        }
      } else {
        break;
      }
    }

    return {
      exercises: selectedExercises,
      totalDuration
    };
  }

  // Seleciona WOD evitando sobreposição de grupos musculares
  private generateWOD(techniqueExercise: Exercise, preferredType?: string): { template: WODTemplate, exercises: Exercise[], estimatedDuration: number } {
    const techniqueGroups = [
      ...techniqueExercise.muscleGroups.primary,
      ...techniqueExercise.muscleGroups.secondary
    ];

    // Filtra templates por tipo se especificado
    let availableTemplates = wodTemplates;
    if (preferredType) {
      availableTemplates = wodTemplates.filter(template => template.type === preferredType);
    }

    // Seleciona template aleatório
    const selectedTemplate = this.getRandomItem(availableTemplates);

    // Busca exercícios que minimizem sobreposição
    const wodExercises: Exercise[] = [];
    
    for (const templateExercise of selectedTemplate.exercises) {
      let exercise = allExercises.find(ex => ex.id === templateExercise.exerciseId);
      
      if (!exercise) {
        // Se não encontrar o exercício específico, busca alternativas
        const alternativeExercises = allExercises.filter(ex => {
          const exerciseGroups = [...ex.muscleGroups.primary, ...ex.muscleGroups.secondary];
          const overlap = exerciseGroups.filter(group => techniqueGroups.includes(group));
          return overlap.length <= 1; // Permite sobreposição mínima
        });
        
        if (alternativeExercises.length > 0) {
          exercise = this.getRandomItem(alternativeExercises);
        } else {
          // Fallback para qualquer exercício
          exercise = this.getRandomItem(allExercises);
        }
      }
      
      wodExercises.push(exercise);
    }

    // Estima duração baseada no tipo de WOD - padrão 20 minutos
    let estimatedDuration = 20; // default atualizado para 20 minutos
    if (selectedTemplate.duration) {
      estimatedDuration = selectedTemplate.duration;
    } else if (selectedTemplate.type === 'RFT') {
      estimatedDuration = 20;
    } else if (selectedTemplate.type === 'Hero') {
      estimatedDuration = 30; // Hero WODs podem ser um pouco mais longos
    } else if (selectedTemplate.type === 'Tabata') {
      estimatedDuration = 20;
    } else if (selectedTemplate.type === 'EMOM') {
      estimatedDuration = 20;
    }

    return {
      template: selectedTemplate,
      exercises: wodExercises,
      estimatedDuration
    };
  }

  // Gera sugestão de playlist baseada na intensidade
  private generatePlaylistSuggestion(difficulty: string, wodType: string): { name: string; description: string; spotifyLink?: string; deezerLink?: string } {
    const playlists = {
      'Beginner': {
        'AMRAP': {
          name: 'CrossFit Beginner Energy',
          description: 'Pop energético e motivacional para iniciantes',
          spotifyLink: 'https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd',
          deezerLink: 'https://www.deezer.com/playlist/1996494362'
        },
        'RFT': {
          name: 'Rock Training Motivation',
          description: 'Rock alternativo com ritmo constante',
          spotifyLink: 'https://open.spotify.com/playlist/37i9dQZF1DX2sUQwD7tbmL',
          deezerLink: 'https://www.deezer.com/playlist/1996494364'
        },
        'EMOM': {
          name: 'Hip-Hop Workout Beats',
          description: 'Hip-hop com batidas marcadas para EMOM',
          spotifyLink: 'https://open.spotify.com/playlist/37i9dQZF1DX0BcQWzuB7ZO',
          deezerLink: 'https://www.deezer.com/playlist/1996494366'
        },
        'default': {
          name: 'Pop Workout Mix',
          description: 'Música pop animada para treinos iniciantes',
          spotifyLink: 'https://open.spotify.com/playlist/37i9dQZF1DWSJHnPb1f0X3',
          deezerLink: 'https://www.deezer.com/playlist/1996494368'
        }
      },
      'Intermediate': {
        'AMRAP': {
          name: 'EDM Workout Beast Mode',
          description: 'Electronic dance music para máxima energia',
          spotifyLink: 'https://open.spotify.com/playlist/37i9dQZF1DX4eRPd9frC1m',
          deezerLink: 'https://www.deezer.com/playlist/1996494370'
        },
        'RFT': {
          name: 'Rock/Metal High Energy',
          description: 'Rock e metal com alta energia para RFT',
          spotifyLink: 'https://open.spotify.com/playlist/37i9dQZF1DX9qNs32fujYe',
          deezerLink: 'https://www.deezer.com/playlist/1996494372'
        },
        'EMOM': {
          name: 'Trap & Hip-Hop Intensity',
          description: 'Trap e hip-hop intenso com BPM alto',
          spotifyLink: 'https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd',
          deezerLink: 'https://www.deezer.com/playlist/1996494374'
        },
        'Tabata': {
          name: 'Electronic High BPM',
          description: 'Música eletrônica com BPM alto para Tabata',
          spotifyLink: 'https://open.spotify.com/playlist/37i9dQZF1DX4eRPd9frC1m',
          deezerLink: 'https://www.deezer.com/playlist/1996494376'
        },
        'default': {
          name: 'Rock & Electronic Mix',
          description: 'Mix de rock e eletrônica para treinos intermediários',
          spotifyLink: 'https://open.spotify.com/playlist/37i9dQZF1DX32NsLKyzScr',
          deezerLink: 'https://www.deezer.com/playlist/1996494378'
        }
      },
      'Advanced': {
        'Hero': {
          name: 'Epic Hero WOD Soundtrack',
          description: 'Orchestral épico e metal sinfônico para Hero WODs',
          spotifyLink: 'https://open.spotify.com/playlist/37i9dQZF1DXdxcBWuJkbcy',
          deezerLink: 'https://www.deezer.com/playlist/1996494380'
        },
        'AMRAP': {
          name: 'Hardcore Beast Mode',
          description: 'Hardcore e metal extremo para AMRAP avançado',
          spotifyLink: 'https://open.spotify.com/playlist/37i9dQZF1DX9qNs32fujYe',
          deezerLink: 'https://www.deezer.com/playlist/1996494382'
        },
        'RFT': {
          name: 'Death Metal & Hardcore',
          description: 'Death metal e hardcore punk para RFT intenso',
          spotifyLink: 'https://open.spotify.com/playlist/37i9dQZF1DXcF6B6QPhFDv',
          deezerLink: 'https://www.deezer.com/playlist/1996494384'
        },
        'default': {
          name: 'Heavy Metal Epic',
          description: 'Heavy metal e música épica para treinos avançados',
          spotifyLink: 'https://open.spotify.com/playlist/37i9dQZF1DXcF6B6QPhFDv',
          deezerLink: 'https://www.deezer.com/playlist/1996494386'
        }
      }
    };

    const difficultyMap = playlists[difficulty as keyof typeof playlists] || playlists['Intermediate'];
    return difficultyMap[wodType as keyof typeof difficultyMap] || difficultyMap['default'];
  }

  // Função utilitária para selecionar item aleatório
  private getRandomItem<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  // Função principal para gerar treino completo
  public generateWorkout(techniqueId?: string, wodType?: string): GeneratedWorkout {
    // Seleciona técnica
    let techniqueExercise: Exercise;
    if (techniqueId) {
      const found = allExercises.find(ex => ex.id === techniqueId);
      techniqueExercise = found || this.getRandomItem(allExercises);
    } else {
      techniqueExercise = this.getRandomItem(allExercises);
    }

    // Gera aquecimento
    const warmup = this.generateWarmup(techniqueExercise);

    // Gera WOD
    const wod = this.generateWOD(techniqueExercise, wodType);

    // Calcula duração total: 6 min aquecimento + 18 min técnica + 20 min WOD
    const totalDuration = 6 + 18 + wod.estimatedDuration;

    // Determina dificuldade geral
    const difficulty = wod.template.difficulty;

    // Gera sugestão de playlist
    const playlistSuggestion = this.generatePlaylistSuggestion(difficulty, wod.template.type);

    return {
      warmup,
      technique: {
        exercise: techniqueExercise,
        duration: 18,
        focus: `Trabalho técnico focado em ${techniqueExercise.muscleGroups.primary.join(', ')}`
      },
      wod,
      totalDuration,
      difficulty,
      playlistSuggestion
    };
  }

  // Função para obter todos os exercícios disponíveis
  public getAvailableExercises(): Exercise[] {
    return allExercises;
  }

  // Função para obter tipos de WOD disponíveis
  public getAvailableWODTypes(): string[] {
    const types = wodTemplates.map(template => template.type);
    return types.filter((type, index) => types.indexOf(type) === index);
  }
}
