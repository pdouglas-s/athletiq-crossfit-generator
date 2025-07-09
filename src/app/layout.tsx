import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AthletIQ - Treinos Pensados com Inteligência',
  description: 'Gerador inteligente de treinos de CrossFit personalizados com aquecimento, técnica e WOD balanceados. Gere treinos únicos em segundos!',
  keywords: ['crossfit', 'treino', 'fitness', 'workout', 'wod', 'exercicios', 'ginástica', 'funcional', 'olímpico'],
  authors: [{ name: 'AthletIQ Team' }],
  creator: 'AthletIQ',
  publisher: 'AthletIQ',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://athletiq.vercel.app'), // Atualize com sua URL
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AthletIQ - Gerador Inteligente de Treinos CrossFit',
    description: 'Gere treinos personalizados de CrossFit com aquecimento, técnica e WOD balanceados. Sistema inteligente que evita sobreposição muscular.',
    url: 'https://athletiq.vercel.app', // Atualize com sua URL
    siteName: 'AthletIQ',
    images: [
      {
        url: '/og-image.png', // Crie esta imagem
        width: 1200,
        height: 630,
        alt: 'AthletIQ - Treinos CrossFit Inteligentes',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AthletIQ - Treinos CrossFit Inteligentes',
    description: 'Gere treinos personalizados de CrossFit em segundos!',
    images: ['/og-image.png'], // Crie esta imagem
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'seu-codigo-google-search-console',
    // bing: 'seu-codigo-bing',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}
