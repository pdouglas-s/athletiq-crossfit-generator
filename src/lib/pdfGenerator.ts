import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { GeneratedWorkout } from '@/types/workout';

interface PDFOptions {
  returnBlob?: boolean;
  filename?: string;
}

export async function generateWorkoutPDF(
  workout: GeneratedWorkout,
  workoutName: string,
  options: PDFOptions = {}
): Promise<void | Blob> {
  try {
    // Criar PDF usando jsPDF
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // Configurações
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - (margin * 2);
    let currentY = margin;

    // Cores do tema
    const primaryColor = '#FF6B35'; // crossfit-orange
    const secondaryColor = '#004B87'; // crossfit-blue
    const textColor = '#333333';

    // Helper para adicionar texto
    const addText = (text: string, fontSize: number, color: string = textColor, isBold: boolean = false) => {
      pdf.setFontSize(fontSize);
      pdf.setTextColor(color);
      pdf.setFont(isBold ? 'helvetica' : 'helvetica', isBold ? 'bold' : 'normal');
      
      const lines = pdf.splitTextToSize(text, contentWidth);
      pdf.text(lines, margin, currentY);
      currentY += (lines.length * fontSize * 0.4) + 5;
    };

    // Helper para adicionar linha separadora
    const addSeparator = () => {
      pdf.setDrawColor(primaryColor);
      pdf.setLineWidth(0.5);
      pdf.line(margin, currentY, pageWidth - margin, currentY);
      currentY += 8;
    };

    // Header com logo e título
    pdf.setFillColor(primaryColor);
    pdf.rect(0, 0, pageWidth, 40, 'F');
    
    pdf.setTextColor('#FFFFFF');
    pdf.setFontSize(24);
    pdf.setFont('helvetica', 'bold');
    pdf.text('ATHLETIQ', margin, 20);
    
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Treinos Inteligentes de CrossFit', margin, 30);

    currentY = 50;

    // Título do treino
    addText(workoutName, 20, secondaryColor, true);
    
    // Informações gerais
    const now = new Date();
    const dateStr = now.toLocaleDateString('pt-BR');
    const timeStr = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    
    addText(`Data: ${dateStr} - ${timeStr}`, 12);
    addText(`Duração Total: ${workout.totalDuration} minutos`, 12);
    addText(`Dificuldade: ${workout.difficulty}`, 12);
    
    addSeparator();

    // Aquecimento
    addText('🔥 AQUECIMENTO (6 minutos)', 16, primaryColor, true);
    workout.warmup.exercises.forEach((exercise) => {
      addText(`• ${exercise.name} - ${exercise.duration}`, 11);
    });
    
    addSeparator();

    // Técnica
    addText('💪 TÉCNICA (18 minutos)', 16, primaryColor, true);
    addText(`Exercício: ${workout.technique.exercise.name}`, 12, textColor, true);
    addText(`Duração: ${workout.technique.duration} minutos`, 11);
    addText(`Foco: ${workout.technique.focus}`, 11);
    
    if (workout.technique.exercise.description) {
      currentY += 3;
      addText('Descrição:', 11, textColor, true);
      addText(workout.technique.exercise.description, 10);
    }
    
    addSeparator();

    // WOD
    addText(`⚡ WOD - ${workout.wod.template.name}`, 16, primaryColor, true);
    addText(`Tipo: ${workout.wod.template.type}`, 12, textColor, true);
    addText(`Duração: ${workout.wod.estimatedDuration} minutos`, 11);
    
    currentY += 3;
    addText('Descrição:', 11, textColor, true);
    addText(workout.wod.template.description, 10);
    
    currentY += 5;
    addText('Exercícios:', 11, textColor, true);
    workout.wod.exercises.forEach((exercise) => {
      addText(`• ${exercise.name}`, 10);
    });

    // Verificar se precisa de nova página
    if (currentY > pageHeight - 50) {
      pdf.addPage();
      currentY = margin;
    }

    addSeparator();

    // Playlist (se houver)
    if (workout.playlistSuggestion) {
      addText('🎵 PLAYLIST SUGERIDA', 14, primaryColor, true);
      addText(`Nome: ${workout.playlistSuggestion.name}`, 10);
      addText(workout.playlistSuggestion.description, 10);
      if (workout.playlistSuggestion.spotifyLink) {
        addText('Spotify: Disponível', 10);
      }
      if (workout.playlistSuggestion.deezerLink) {
        addText('Deezer: Disponível', 10);
      }
      addSeparator();
    }

    // Rodapé
    const footerY = pageHeight - 30;
    pdf.setFontSize(8);
    pdf.setTextColor('#666666');
    pdf.text('Treino gerado por AthletIQ - Treinos pensados com inteligência', margin, footerY);
    pdf.text(`Gerado em ${dateStr} às ${timeStr}`, margin, footerY + 8);
    
    // Link ou QR code (futuro)
    pdf.text('athletiq.app', pageWidth - margin - 30, footerY);

    // Retornar blob ou fazer download
    if (options.returnBlob) {
      return pdf.output('blob');
    } else {
      const filename = options.filename || `${workoutName.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
      pdf.save(filename);
    }
  } catch (error) {
    console.error('Erro ao gerar PDF:', error);
    throw new Error('Falha ao gerar PDF');
  }
}

// Função alternativa usando html2canvas para layouts mais complexos
export async function generateWorkoutPDFFromHTML(
  elementId: string,
  filename: string = 'treino-athletiq.pdf'
): Promise<void> {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error('Elemento não encontrado');
    }

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff'
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 295; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(filename);
  } catch (error) {
    console.error('Erro ao gerar PDF do HTML:', error);
    throw new Error('Falha ao gerar PDF');
  }
}
