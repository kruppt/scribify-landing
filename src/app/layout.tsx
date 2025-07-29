import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Analytics from '@/components/Analytics'
import GumroadTracking from '@/components/GumroadTracking'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Scribify - AI Audio Transcription App for Mac | $25 One-Time Payment',
  description: 'Transform audio files into accurate transcripts with Scribify for Mac. AI-powered transcription, 15 summary templates, OpenAI Whisper technology. Save $179/year vs competitors. One-time $25 payment.',
  keywords: [
    // Primary Keywords
    'audio transcription mac',
    'mac transcription app',
    'ai transcription software',
    'speech to text mac',
    'audio to text converter',
    'transcription app mac',
    
    // Long-tail Keywords
    'openai whisper mac app',
    'meeting transcription software',
    'lecture transcription app',
    'interview transcription tool',
    'podcast transcription mac',
    'voice recording transcription',
    
    // Commercial Keywords
    'transcription app one time payment',
    'alternative to otter ai',
    'cheap transcription software',
    'mac transcription no subscription',
    'transcription app lifetime license',
    
    // Brand Keywords
    'scribify app',
    'scribify transcription',
    'scribify mac',
  ].join(', '),
  authors: [{ name: 'Scribify Team' }],
  creator: 'Scribify Team',
  publisher: 'Scribify',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://scribifyforall.com'),
  alternates: {
    canonical: 'https://scribifyforall.com',
  },
  openGraph: {
    title: 'Scribify - AI Audio Transcription App for Mac | Save $179/Year',
    description: 'Professional audio transcription powered by OpenAI Whisper. Perfect accuracy, 15 templates, lifetime updates. Only $25 vs $204/year competitors.',
    type: 'website',
    url: 'https://scribifyforall.com',
    siteName: 'Scribify',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Scribify - AI Audio Transcription for Mac',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@scribify',
    creator: '@scribify',
    title: 'Scribify - AI Audio Transcription App for Mac',
    description: 'Transform audio into perfect transcripts with AI. OpenAI Whisper technology, 15 templates, $25 lifetime license vs $204/year elsewhere.',
    images: ['/twitter-image.png'],
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
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <Analytics />
        <GumroadTracking />
        {children}
      </body>
    </html>
  )
}