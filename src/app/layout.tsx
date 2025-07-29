import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Analytics from '@/components/Analytics'
import GumroadTracking from '@/components/GumroadTracking'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Scribify - Effortless Audio Transcription for Mac',
  description: 'Transform your audio recordings into organized transcripts and summaries with Scribify. Advanced AI transcription technology designed for Mac users.',
  keywords: 'transcription, audio transcription, mac app, ai transcription, speech to text, audio to text',
  authors: [{ name: 'Scribify Team' }],
  openGraph: {
    title: 'Scribify - Effortless Audio Transcription for Mac',
    description: 'Transform your audio recordings into organized transcripts and summaries with Scribify. Advanced AI transcription technology designed for Mac users.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scribify - Effortless Audio Transcription for Mac',
    description: 'Transform your audio recordings into organized transcripts and summaries with Scribify. Advanced AI transcription technology designed for Mac users.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        <GumroadTracking />
        {children}
      </body>
    </html>
  )
}