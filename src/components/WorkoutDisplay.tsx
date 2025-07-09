'use client';

import React from 'react';
import { GeneratedWorkout } from '@/types/workout';

interface WorkoutDisplayProps {
  workout: GeneratedWorkout;
}

export default function WorkoutDisplay({ workout }: WorkoutDisplayProps) {
  const formatDuration = (minutes: number) => {
    if (minutes < 60) {
      return `${minutes}min`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}min`;
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-8">
      {/* Resumo do Treino */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Resumo do Treino</h3>
            <p className="text-gray-600">Duração total: {formatDuration(workout.totalDuration)}</p>
          </div>
          <div className="text-right">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              workout.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
              workout.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {workout.difficulty}
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl mb-2">🧊</div>
            <h4 className="font-semibold text-gray-900">Aquecimento</h4>
            <p className="text-sm text-gray-600">{formatTime(workout.warmup.totalDuration)}</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl mb-2">🔧</div>
            <h4 className="font-semibold text-gray-900">Técnica</h4>
            <p className="text-sm text-gray-600">{workout.technique.duration}min</p>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <div className="text-2xl mb-2">🔥</div>
            <h4 className="font-semibold text-gray-900">WOD</h4>
            <p className="text-sm text-gray-600">{formatDuration(workout.wod.estimatedDuration)}</p>
          </div>
        </div>
      </div>

      {/* Fase 1: Aquecimento */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold">1</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Aquecimento</h3>
            <p className="text-sm text-gray-600">Duração: {formatTime(workout.warmup.totalDuration)}</p>
          </div>
        </div>

        <div className="space-y-3">
          {workout.warmup.exercises.map((exercise, index) => (
            <div key={exercise.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-xs font-medium text-blue-600">
                {index + 1}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{exercise.name}</h4>
                <p className="text-sm text-gray-600">
                  {formatTime(exercise.duration)} • {exercise.type} • {exercise.muscleGroups.join(', ')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fase 2: Técnica */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold">2</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Técnica</h3>
            <p className="text-sm text-gray-600">Duração: {workout.technique.duration} minutos</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            {workout.technique.exercise.name}
          </h4>
          <p className="text-gray-600 mb-3">{workout.technique.focus}</p>
          
          <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
            <div>
              <span className="font-medium text-gray-700">Tipo:</span> 
              <span className="ml-2 capitalize">{workout.technique.exercise.type}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Equipamentos:</span> 
              <span className="ml-2">{workout.technique.exercise.equipment.join(', ')}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Músculos Primários:</span> 
              <span className="ml-2">{workout.technique.exercise.muscleGroups.primary.join(', ')}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Músculos Secundários:</span> 
              <span className="ml-2">{workout.technique.exercise.muscleGroups.secondary.join(', ')}</span>
            </div>
          </div>
          
          {workout.technique.exercise.description && (
            <p className="text-sm text-gray-600 italic mb-4">
              {workout.technique.exercise.description}
            </p>
          )}
        </div>

        {/* Progressões do Exercício */}
        {workout.technique.exercise.progressions && (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              📈 Progressões para Dominar a Técnica
            </h4>
            
            <div className="grid md:grid-cols-3 gap-4">
              {/* Nível Iniciante */}
              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-2">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <h5 className="font-semibold text-green-800">Iniciante</h5>
                </div>
                <ul className="space-y-2 text-sm text-green-700">
                  {workout.technique.exercise.progressions.beginner.map((step, index) => (
                    <li key={index} className="leading-relaxed">
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nível Intermediário */}
              <div className="bg-yellow-50 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-2">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <h5 className="font-semibold text-yellow-800">Intermediário</h5>
                </div>
                <ul className="space-y-2 text-sm text-yellow-700">
                  {workout.technique.exercise.progressions.intermediate.map((step, index) => (
                    <li key={index} className="leading-relaxed">
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nível Avançado */}
              <div className="bg-red-50 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-2">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <h5 className="font-semibold text-red-800">Avançado</h5>
                </div>
                <ul className="space-y-2 text-sm text-red-700">
                  {workout.technique.exercise.progressions.advanced.map((step, index) => (
                    <li key={index} className="leading-relaxed">
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Dicas Adicionais */}
            <div className="bg-blue-50 rounded-lg p-4 mt-4">
              <h5 className="font-semibold text-blue-800 mb-2">💡 Dicas para Progressão</h5>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Domine cada nível antes de avançar para o próximo</li>
                <li>• Foque na técnica perfeita em vez de velocidade ou peso</li>
                <li>• Pratique movimentos preparatórios 2-3x por semana</li>
                <li>• Filme-se para analisar e corrigir a forma</li>
                <li>• Busque orientação de um coach qualificado</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Fase 3: WOD */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold">3</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">WOD - {workout.wod.template.name}</h3>
            <p className="text-sm text-gray-600">
              Tipo: {workout.wod.template.type} • Duração estimada: {formatDuration(workout.wod.estimatedDuration)}
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <p className="text-gray-800 font-medium">{workout.wod.template.description}</p>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-gray-900">Exercícios do WOD:</h4>
          {workout.wod.exercises.map((exercise, index) => (
            <div key={exercise.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 text-xs font-medium text-red-600">
                {index + 1}
              </div>
              <div className="flex-1">
                <h5 className="font-medium text-gray-900">{exercise.name}</h5>
                <p className="text-sm text-gray-600">
                  {exercise.type} • {exercise.muscleGroups.primary.join(', ')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sugestão de Playlist */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
            <span className="text-white text-lg">🎵</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900">Sugestão de Playlist</h3>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-purple-800 mb-2">{workout.playlistSuggestion.name}</h4>
          <p className="text-purple-700 mb-4">{workout.playlistSuggestion.description}</p>
          <p className="text-sm text-purple-600 mb-4">
            Baseado na intensidade ({workout.difficulty}) e tipo de WOD ({workout.wod.template.type})
          </p>
          
          {/* Links das Playlists */}
          <div className="flex flex-wrap gap-3">
            {workout.playlistSuggestion.spotifyLink && (
              <a 
                href={workout.playlistSuggestion.spotifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.6 0-.359.24-.66.54-.779 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.019zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Abrir no Spotify
              </a>
            )}
            
            {workout.playlistSuggestion.deezerLink && (
              <a 
                href={workout.playlistSuggestion.deezerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.81 12.74v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm12.43 1.48v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm12.43 1.48v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm12.43 1.48v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm12.43 1.48v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm12.43 1.48v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48zm-1.48 0v-1.48h1.48v1.48h-1.48z"/>
                </svg>
                Abrir no Deezer
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Botões de Ação */}
      <div className="flex flex-wrap gap-4 justify-center">
        <button className="btn-primary">
          💾 Salvar Treino
        </button>
        <button className="btn-secondary">
          📤 Compartilhar
        </button>
        <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
          📝 Fazer Anotações
        </button>
      </div>
    </div>
  );
}
