'use client';

import React, { useState } from 'react';
import { SavedWorkout } from '@/types/workout';
import { useWorkoutStorage } from '@/lib/useWorkoutStorage';
import { 
  Heart, 
  Trash2, 
  Copy, 
  Calendar, 
  Clock, 
  Target, 
  Search,
  Filter,
  Star,
  FileText,
  Tag,
  X
} from 'lucide-react';

interface SavedWorkoutsListProps {
  onLoadWorkout?: (workout: SavedWorkout) => void;
}

export default function SavedWorkoutsList({ onLoadWorkout }: SavedWorkoutsListProps) {
  const {
    savedWorkouts,
    isLoading,
    deleteWorkout,
    toggleFavorite,
    duplicateWorkout,
    searchWorkouts,
    getFavoriteWorkouts,
    getStats
  } = useWorkoutStorage();

  const [searchQuery, setSearchQuery] = useState('');
  const [filterFavorites, setFilterFavorites] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState<SavedWorkout | null>(null);

  const stats = getStats();
  
  const filteredWorkouts = searchQuery 
    ? searchWorkouts(searchQuery)
    : filterFavorites 
      ? getFavoriteWorkouts()
      : savedWorkouts;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <FileText className="h-8 w-8 text-blue-600" />
            <div>
              <p className="text-2xl font-bold text-blue-900">{stats.total}</p>
              <p className="text-sm text-blue-600">Treinos Salvos</p>
            </div>
          </div>
        </div>
        
        <div className="bg-red-50 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <Heart className="h-8 w-8 text-red-600" />
            <div>
              <p className="text-2xl font-bold text-red-900">{stats.favorites}</p>
              <p className="text-sm text-red-600">Favoritos</p>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <Calendar className="h-8 w-8 text-green-600" />
            <div>
              <p className="text-2xl font-bold text-green-900">{stats.lastWeek}</p>
              <p className="text-sm text-green-600">Esta Semana</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar treinos..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <button
          onClick={() => setFilterFavorites(!filterFavorites)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
            filterFavorites
              ? 'bg-red-50 border-red-200 text-red-700'
              : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Heart className={`h-4 w-4 ${filterFavorites ? 'fill-current' : ''}`} />
          Favoritos
        </button>
      </div>

      {/* Workouts List */}
      {filteredWorkouts.length === 0 ? (
        <div className="text-center py-12">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {searchQuery || filterFavorites ? 'Nenhum treino encontrado' : 'Nenhum treino salvo'}
          </h3>
          <p className="text-gray-500">
            {searchQuery || filterFavorites 
              ? 'Tente buscar por outros termos ou remover filtros'
              : 'Gere e salve seu primeiro treino para vê-lo aqui!'
            }
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredWorkouts.map((savedWorkout) => (
            <div key={savedWorkout.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{savedWorkout.name}</h3>
                    {savedWorkout.favorite && (
                      <Heart className="h-5 w-5 text-red-500 fill-current" />
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(savedWorkout.createdAt)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {savedWorkout.workout.totalDuration}min
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(savedWorkout.workout.difficulty)}`}>
                      {savedWorkout.workout.difficulty}
                    </span>
                  </div>

                  {savedWorkout.tags && savedWorkout.tags.length > 0 && (
                    <div className="flex items-center gap-2 mb-2">
                      <Tag className="h-4 w-4 text-gray-400" />
                      <div className="flex flex-wrap gap-1">
                        {savedWorkout.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleFavorite(savedWorkout.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      savedWorkout.favorite
                        ? 'text-red-600 hover:bg-red-50'
                        : 'text-gray-400 hover:bg-gray-50 hover:text-red-600'
                    }`}
                    title={savedWorkout.favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                  >
                    <Heart className={`h-4 w-4 ${savedWorkout.favorite ? 'fill-current' : ''}`} />
                  </button>

                  <button
                    onClick={() => duplicateWorkout(savedWorkout.id)}
                    className="p-2 text-gray-400 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors"
                    title="Duplicar treino"
                  >
                    <Copy className="h-4 w-4" />
                  </button>

                  <button
                    onClick={() => deleteWorkout(savedWorkout.id)}
                    className="p-2 text-gray-400 hover:bg-gray-50 hover:text-red-600 rounded-lg transition-colors"
                    title="Excluir treino"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Workout Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg mb-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Técnica</p>
                  <p className="font-medium text-gray-900">{savedWorkout.workout.technique.exercise.name}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">WOD</p>
                  <p className="font-medium text-gray-900">
                    {savedWorkout.workout.wod.template.name} ({savedWorkout.workout.wod.template.type})
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Aquecimento</p>
                  <p className="font-medium text-gray-900">
                    {savedWorkout.workout.warmup.exercises.length} exercícios
                  </p>
                </div>
              </div>

              {savedWorkout.notes && (
                <div className="mb-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Notas</p>
                  <p className="text-sm text-gray-700">{savedWorkout.notes}</p>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => onLoadWorkout?.(savedWorkout)}
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Carregar Treino
                </button>
                <button
                  onClick={() => setSelectedWorkout(savedWorkout)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Workout Detail Modal */}
      {selectedWorkout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">{selectedWorkout.name}</h2>
                <button
                  onClick={() => setSelectedWorkout(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              
              {/* Render full workout details here */}
              <div className="space-y-6">
                {/* You can reuse WorkoutDisplay component here */}
                <p className="text-gray-600">Detalhes completos do treino aparecerão aqui...</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
