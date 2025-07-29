'use client'

import { useState, useEffect } from 'react'
import Button from './Button'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show after scrolling past hero (roughly 100vh)
      if (window.pageYOffset > window.innerHeight) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 duration-300">
      <div className="bg-white shadow-2xl rounded-full p-2 border border-accent-200/50">
        <a href="https://tejpics.gumroad.com/l/lwchdo?wanted=true" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="flex items-center gap-2">
              <span>Buy Now - $25</span>
              <span className="text-xl">🚀</span>
            </span>
          </Button>
        </a>
      </div>
    </div>
  )
}