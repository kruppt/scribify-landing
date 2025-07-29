import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Scribify - Effortless Note-Taking for Mac',
    short_name: 'Scribify',
    description: 'Transform your thoughts into organized notes with Scribify. Clean, fast, and intuitive note-taking app designed for Mac users.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}