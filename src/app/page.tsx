'use client';

import React, { useState } from 'react';
import { WorkoutGenerator } from '@/lib/workoutGenerator';
import { GeneratedWorkout, SavedWorkout } from '@/types/workout';
import WorkoutDisplay from '@/components/WorkoutDisplay';
import WorkoutGeneratorForm from '@/components/WorkoutGeneratorForm';
import SavedWorkoutsList from '@/components/SavedWorkoutsList';
import { Dumbbell, BookOpen, Plus } from 'lucide-react';

type TabType = 'generator' | 'saved';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<TabType>('generator');
  const [generatedWorkout, setGeneratedWorkout] = useState<GeneratedWorkout | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generator = new WorkoutGenerator();

  const handleGenerateWorkout = async (techniqueId?: string, wodType?: string) => {
    setIsGenerating(true);
    
    // Simula um pequeno delay para melhor UX
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const workout = generator.generateWorkout(techniqueId, wodType);
    setGeneratedWorkout(workout);
    setIsGenerating(false);
  };

  const handleNewWorkout = () => {
    setGeneratedWorkout(null);
    setActiveTab('generator');
  };

  const handleLoadSavedWorkout = (savedWorkout: SavedWorkout) => {
    setGeneratedWorkout(savedWorkout.workout);
    setActiveTab('generator');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-crossfit-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AthletIQ</h1>
                <p className="text-sm text-gray-600">Treinos pensados com inteligência</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Gerador de Treinos de CrossFit</p>
              <p className="text-xs text-gray-400">Aquecimento • Técnica • WOD (20min)</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="mt-6 border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('generator')}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'generator'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Dumbbell className="h-4 w-4" />
                  Gerar Treino
                </div>
              </button>
              
              <button
                onClick={() => setActiveTab('saved')}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'saved'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Treinos Salvos
                </div>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'generator' && (
          <>
            {!generatedWorkout ? (
              <div className="text-center">
                <div className="max-w-3xl mx-auto mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Bem-vindo ao AthletIQ
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Gerador inteligente de treinos de CrossFit: 6min aquecimento + 18min técnica + 20min WOD
                  </p>
                  
                  {/* Feature Cards */}
                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🧊</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Aquecimento Inteligente</h3>
                      <p className="text-gray-600 text-sm">6 minutos baseados nos grupos musculares da técnica e WOD</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🔧</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Técnica Focada</h3>
                      <p className="text-gray-600 text-sm">18 minutos de trabalho técnico personalizado</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🔥</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">WOD Otimizado</h3>
                      <p className="text-gray-600 text-sm">20 minutos de WOD que evita sobreposição muscular</p>
                    </div>
                  </div>
                </div>

                <WorkoutGeneratorForm 
                  onGenerate={handleGenerateWorkout}
                  isGenerating={isGenerating}
                />
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">Seu Treino Personalizado</h2>
                  <button
                    onClick={handleNewWorkout}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                    Novo Treino
                  </button>
                </div>
                
                <WorkoutDisplay workout={generatedWorkout} />
              </div>
            )}
          </>
        )}

        {activeTab === 'saved' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Seus Treinos Salvos
                </h2>
                <p className="text-gray-600 mt-2">
                  Gerencie, visualize e recarregue seus treinos favoritos
                </p>
              </div>
              <button
                onClick={() => setActiveTab('generator')}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="h-4 w-4" />
                Gerar Novo Treino
              </button>
            </div>
            
            <SavedWorkoutsList onLoadWorkout={handleLoadSavedWorkout} />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">AthletIQ</h3>
              <p className="text-gray-400 text-sm">
                Treinos de CrossFit personalizados usando inteligência artificial 
                para otimizar performance e evitar lesões.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Tipos de WOD</h3>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>AMRAP - Máximo de rounds</li>
                <li>RFT - Tempo fixo</li>
                <li>EMOM - A cada minuto</li>
                <li>Hero WODs - Desafios épicos</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Características</h3>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>Aquecimento baseado na técnica</li>
                <li>Evita sobreposição muscular</li>
                <li>Sugestões de playlist</li>
                <li>Treinos para todos os níveis</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 AthletIQ. Desenvolvido com 💪 para a comunidade CrossFit.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
