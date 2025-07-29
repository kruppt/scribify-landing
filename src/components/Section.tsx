import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  background?: 'white' | 'cream' | 'dark' | 'gradient'
}

export default function Section({ 
  children, 
  className = '', 
  id, 
  background = 'white' 
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    cream: 'bg-primary-50 bg-grain',
    dark: 'bg-dark-800 text-white',
    gradient: 'bg-gradient-to-b from-primary-100 to-white'
  }
  
  return (
    <section 
      id={id}
      className={`py-20 sm:py-24 lg:py-32 ${backgroundClasses[background]} ${className}`}
    >
      <div className="container-width section-padding">
        {children}
      </div>
    </section>
  )
}