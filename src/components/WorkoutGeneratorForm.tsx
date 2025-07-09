'use client';

import React, { useState } from 'react';
import { WorkoutGenerator } from '@/lib/workoutGenerator';

interface WorkoutGeneratorFormProps {
  onGenerate: (techniqueId?: string, wodType?: string) => void;
  isGenerating: boolean;
}

export default function WorkoutGeneratorForm({ onGenerate, isGenerating }: WorkoutGeneratorFormProps) {
  const [selectedTechnique, setSelectedTechnique] = useState<string>('');
  const [selectedWODType, setSelectedWODType] = useState<string>('');
  
  const generator = new WorkoutGenerator();
  const availableExercises = generator.getAvailableExercises();
  const availableWODTypes = generator.getAvailableWODTypes();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(
      selectedTechnique || undefined,
      selectedWODType || undefined
    );
  };

  const handleSurpriseMe = () => {
    onGenerate(); // Gera treino completamente aleatório
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Configure Seu Treino
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Seleção de Técnica */}
          <div>
            <label htmlFor="technique" className="block text-sm font-medium text-gray-700 mb-2">
              Técnica Principal (Opcional)
            </label>
            <select
              id="technique"
              value={selectedTechnique}
              onChange={(e) => setSelectedTechnique(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crossfit-orange focus:border-transparent"
            >
              <option value="">Selecionar automaticamente</option>
              <optgroup label="Movimentos Funcionais">
                {availableExercises
                  .filter(ex => ex.type === 'functional')
                  .map(exercise => (
                    <option key={exercise.id} value={exercise.id}>
                      {exercise.name}
                    </option>
                  ))
                }
              </optgroup>
              <optgroup label="Ginástica">
                {availableExercises
                  .filter(ex => ex.type === 'gymnastics')
                  .map(exercise => (
                    <option key={exercise.id} value={exercise.id}>
                      {exercise.name}
                    </option>
                  ))
                }
              </optgroup>
              <optgroup label="Levantamento Olímpico">
                {availableExercises
                  .filter(ex => ex.type === 'olympic')
                  .map(exercise => (
                    <option key={exercise.id} value={exercise.id}>
                      {exercise.name}
                    </option>
                  ))
                }
              </optgroup>
            </select>
          </div>

          {/* Seleção de Tipo de WOD */}
          <div>
            <label htmlFor="wodType" className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de WOD (Opcional)
            </label>
            <select
              id="wodType"
              value={selectedWODType}
              onChange={(e) => setSelectedWODType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crossfit-orange focus:border-transparent"
            >
              <option value="">Selecionar automaticamente</option>
              {availableWODTypes.map(type => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Informações dos tipos de WOD */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Tipos de WOD:</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
              <div><strong>AMRAP:</strong> Máximo de repetições/rounds em tempo fixo</div>
              <div><strong>RFT:</strong> Rounds fixos pelo menor tempo</div>
              <div><strong>EMOM:</strong> Tarefas a cada minuto</div>
              <div><strong>Tabata:</strong> 20s esforço / 10s descanso</div>
              <div><strong>Hero:</strong> WODs intensos e desafiadores</div>
              <div><strong>Partner:</strong> Treinos em dupla</div>
            </div>
          </div>

          {/* Botões */}
          <div className="flex space-x-4">
            <button
              type="submit"
              disabled={isGenerating}
              className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? 'Gerando...' : 'Gerar Treino'}
            </button>
            
            <button
              type="button"
              onClick={handleSurpriseMe}
              disabled={isGenerating}
              className="flex-1 btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? 'Gerando...' : '🎲 Me Surpreenda'}
            </button>
          </div>
        </form>

        {isGenerating && (
          <div className="mt-6 text-center">
            <div className="inline-flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-crossfit-orange"></div>
              <span className="text-sm text-gray-600">Criando seu treino personalizado...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
