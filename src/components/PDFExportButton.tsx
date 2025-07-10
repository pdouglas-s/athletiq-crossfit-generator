'use client';

import React, { useState } from 'react';
import { FileDown, Share2, Eye } from 'lucide-react';
import { GeneratedWorkout } from '@/types/workout';
import { generateWorkoutPDF } from '@/lib/pdfGenerator';

interface PDFExportButtonProps {
  workout: GeneratedWorkout;
  workoutName?: string;
}

export default function PDFExportButton({ workout, workoutName = 'Treino AthletIQ' }: PDFExportButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const handleDownloadPDF = async () => {
    try {
      setIsGenerating(true);
      await generateWorkoutPDF(workout, workoutName);
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert('Erro ao gerar PDF. Tente novamente.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleShare = async () => {
    try {
      setIsGenerating(true);
      const pdfBlob = await generateWorkoutPDF(workout, workoutName, { returnBlob: true });
      
      if (navigator.share && navigator.canShare) {
        const file = new File([pdfBlob as Blob], `${workoutName}.pdf`, {
          type: 'application/pdf',
        });
        
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: workoutName,
            text: 'Confira este treino de CrossFit gerado pelo AthletIQ!',
            files: [file],
          });
        } else {
          // Fallback para dispositivos que não suportam compartilhamento de arquivos
          setShowShareModal(true);
        }
      } else {
        setShowShareModal(true);
      }
    } catch (error) {
      console.error('Erro ao compartilhar:', error);
      setShowShareModal(true);
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    const workoutText = `
🏋️ ${workoutName}

🔥 AQUECIMENTO (6 min)
${workout.warmup.exercises.map(ex => `• ${ex.name} - ${ex.duration}s`).join('\n')}

💪 TÉCNICA (18 min)
${workout.technique.exercise.name}
Duração: ${workout.technique.duration} minutos

⚡ WOD - ${workout.wod.template.name}
${workout.wod.template.description}
Exercícios: ${workout.wod.exercises.map(ex => ex.name).join(', ')}

🎵 Playlist: ${workout.playlistSuggestion?.name || 'N/A'}

Gerado por AthletIQ - Treinos inteligentes de CrossFit
    `.trim();

    navigator.clipboard.writeText(workoutText).then(() => {
      alert('Treino copiado para a área de transferência!');
      setShowShareModal(false);
    });
  };

  return (
    <>
      <div className="flex gap-2">
        <button
          onClick={handleDownloadPDF}
          disabled={isGenerating}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isGenerating ? (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          ) : (
            <FileDown className="h-4 w-4" />
          )}
          {isGenerating ? 'Gerando...' : 'PDF'}
        </button>

        <button
          onClick={handleShare}
          disabled={isGenerating}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Share2 className="h-4 w-4" />
          Compartilhar
        </button>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Compartilhar Treino</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleDownloadPDF}
                className="w-full flex items-center gap-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FileDown className="h-5 w-5 text-green-600" />
                <div className="text-left">
                  <p className="font-medium text-gray-900">Download PDF</p>
                  <p className="text-sm text-gray-500">Salvar arquivo em seu dispositivo</p>
                </div>
              </button>

              <button
                onClick={copyToClipboard}
                className="w-full flex items-center gap-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Share2 className="h-5 w-5 text-blue-600" />
                <div className="text-left">
                  <p className="font-medium text-gray-900">Copiar Texto</p>
                  <p className="text-sm text-gray-500">Copiar treino como texto</p>
                </div>
              </button>

              {workout.playlistSuggestion?.spotifyLink && (
                <a
                  href={workout.playlistSuggestion.spotifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center gap-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="h-5 w-5 bg-green-500 rounded"></div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Abrir Playlist</p>
                    <p className="text-sm text-gray-500">Spotify</p>
                  </div>
                </a>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Treino gerado por AthletIQ - Treinos inteligentes de CrossFit
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
