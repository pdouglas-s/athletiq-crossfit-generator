'use client';

import { useState, useEffect } from 'react';
import { SavedWorkout, GeneratedWorkout } from '@/types/workout';

export const useWorkoutStorage = () => {
  const [savedWorkouts, setSavedWorkouts] = useState<SavedWorkout[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Carregar treinos salvos do localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('athletiq-saved-workouts');
      if (stored) {
        const parsed = JSON.parse(stored);
        // Converter datas de string para Date
        const workouts = parsed.map((workout: any) => ({
          ...workout,
          createdAt: new Date(workout.createdAt)
        }));
        setSavedWorkouts(workouts);
      }
    } catch (error) {
      console.error('Erro ao carregar treinos salvos:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Salvar treinos no localStorage sempre que a lista mudar
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem('athletiq-saved-workouts', JSON.stringify(savedWorkouts));
      } catch (error) {
        console.error('Erro ao salvar treinos:', error);
      }
    }
  }, [savedWorkouts, isLoading]);

  // Salvar novo treino
  const saveWorkout = (workout: GeneratedWorkout, name?: string) => {
    const savedWorkout: SavedWorkout = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      name: name || `Treino ${new Date().toLocaleDateString('pt-BR')}`,
      workout,
      createdAt: new Date(),
      favorite: false
    };

    setSavedWorkouts(prev => [savedWorkout, ...prev]);
    return savedWorkout.id;
  };

  // Remover treino
  const deleteWorkout = (id: string) => {
    setSavedWorkouts(prev => prev.filter(workout => workout.id !== id));
  };

  // Atualizar treino (nome, notas, favorito)
  const updateWorkout = (id: string, updates: Partial<Omit<SavedWorkout, 'id' | 'workout' | 'createdAt'>>) => {
    setSavedWorkouts(prev => 
      prev.map(workout => 
        workout.id === id ? { ...workout, ...updates } : workout
      )
    );
  };

  // Marcar/desmarcar como favorito
  const toggleFavorite = (id: string) => {
    setSavedWorkouts(prev => 
      prev.map(workout => 
        workout.id === id ? { ...workout, favorite: !workout.favorite } : workout
      )
    );
  };

  // Duplicar treino
  const duplicateWorkout = (id: string) => {
    const original = savedWorkouts.find(w => w.id === id);
    if (original) {
      const duplicate: SavedWorkout = {
        ...original,
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        name: `${original.name} (Cópia)`,
        createdAt: new Date(),
        favorite: false
      };
      setSavedWorkouts(prev => [duplicate, ...prev]);
      return duplicate.id;
    }
  };

  // Buscar treinos
  const searchWorkouts = (query: string) => {
    const lowerQuery = query.toLowerCase();
    return savedWorkouts.filter(workout => 
      workout.name.toLowerCase().includes(lowerQuery) ||
      workout.notes?.toLowerCase().includes(lowerQuery) ||
      workout.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  };

  // Filtrar por favoritos
  const getFavoriteWorkouts = () => {
    return savedWorkouts.filter(workout => workout.favorite);
  };

  // Estatísticas
  const getStats = () => {
    const total = savedWorkouts.length;
    const favorites = savedWorkouts.filter(w => w.favorite).length;
    const lastWeek = savedWorkouts.filter(w => {
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return w.createdAt >= weekAgo;
    }).length;

    return { total, favorites, lastWeek };
  };

  return {
    savedWorkouts,
    isLoading,
    saveWorkout,
    deleteWorkout,
    updateWorkout,
    toggleFavorite,
    duplicateWorkout,
    searchWorkouts,
    getFavoriteWorkouts,
    getStats
  };
};
