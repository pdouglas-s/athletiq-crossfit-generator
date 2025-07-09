// Tipos de exercícios e grupos musculares
export interface MuscleGroup {
  primary: string[];
  secondary: string[];
}

export interface Exercise {
  id: string;
  name: string;
  type: 'functional' | 'olympic' | 'gymnastics';
  muscleGroups: MuscleGroup;
  equipment: string[];
  description?: string;
  progressions?: {
    beginner: string[];
    intermediate: string[];
    advanced: string[];
  };
}

export interface WarmupExercise {
  id: string;
  name: string;
  duration: number; // em segundos
  muscleGroups: string[];
  type: 'mobility' | 'activation' | 'cardio';
}

export interface WODTemplate {
  id: string;
  name: string;
  type: 'AMRAP' | 'RFT' | 'EMOM' | 'Tabata' | 'Hero' | 'Partner' | 'Barbell' | 'Gymnastics' | 'Metabolic' | 'Classic';
  duration?: number; // em minutos
  rounds?: number;
  exercises: {
    exerciseId: string;
    reps?: number;
    weight?: string;
    distance?: string;
  }[];
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface GeneratedWorkout {
  warmup: {
    exercises: WarmupExercise[];
    totalDuration: number;
  };
  technique: {
    exercise: Exercise;
    duration: number;
    focus: string;
  };
  wod: {
    template: WODTemplate;
    exercises: Exercise[];
    estimatedDuration: number;
  };
  totalDuration: number;
  difficulty: string;
  playlistSuggestion: {
    name: string;
    description: string;
    spotifyLink?: string;
    deezerLink?: string;
  };
}
