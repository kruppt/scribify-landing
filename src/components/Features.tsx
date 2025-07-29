import Section from './Section'

const features = [
  {
    title: 'AI-Powered Transcription Engine',
    description: 'Transform hours of audio into perfect text in minutes. Powered by OpenAI\'s advanced Whisper technology with industry-leading accuracy.',
    screenshot: '⚡',
    accent: 'accent-400'
  },
  {
    title: '15 Intelligent Summary Templates',
    description: 'Never stare at a blank page again. Choose from expertly crafted templates for meetings, interviews, lectures, and more.',
    screenshot: '🧠',
    accent: 'primary-400'
  },
  {
    title: 'Privacy-First Design',
    description: 'Your conversations stay yours. Process everything locally with your OpenAI account. Zero data collection, military-grade security.',
    screenshot: '🔐',
    accent: 'accent-500'
  },
  {
    title: 'Pay Once, Use Forever',
    description: 'Stop bleeding money on subscriptions! $49 once vs $204/year elsewhere. Process unlimited audio at OpenAI rates (~$0.006/minute).',
    screenshot: '💰',
    accent: 'primary-500'
  },
  {
    title: 'Professional-Grade Output',
    description: 'One-click exports to Notion, OneNote, Evernote, or PDF/Word. Meeting-ready formatting with timestamps and action items.',
    screenshot: '🚀',
    accent: 'accent-400'
  },
  {
    title: 'Lightning-Fast Processing',
    description: 'No waiting rooms or queues. Direct OpenAI connection means real-time processing. Upload → Process → Export in under 3 minutes.',
    screenshot: '⚡',
    accent: 'primary-400'
  },
  {
    title: 'Smart Content Recognition',
    description: 'AI that understands context. Automatically identifies speakers, extracts action items, and structures content intelligently.',
    screenshot: '🎯',
    accent: 'accent-500'
  },
  {
    title: 'Native Mac Performance',
    description: 'Built for macOS with Apple Silicon optimization. Elegant native interface with minimal battery drain on M1/M2/M3 Macs.',
    screenshot: '🖥️',
    accent: 'primary-500'
  }
]

export default function Features() {
  return (
    <Section background="gradient" id="features">
      <div className="text-center mb-24">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-white text-primary-800 text-sm font-medium tracking-wide rounded-full shadow-sm">
            AI-POWERED TRANSCRIPTION
          </span>
        </div>
        <h2 className="text-fluid-3xl lg:text-fluid-4xl font-bold mb-6 text-shadow">
          Powerful Features
        </h2>
        <p className="text-fluid-lg text-dark-700 max-w-3xl mx-auto leading-relaxed">
          Everything you need to transform audio into actionable insights, powered by cutting-edge AI technology.
        </p>
      </div>
      
      <div className="space-y-24">
        {features.map((feature, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
            <div className="flex-1">
              <div className="max-w-lg mx-auto lg:mx-0">
                <h3 className="text-fluid-2xl lg:text-fluid-3xl font-bold text-dark-900 mb-6 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-fluid-lg text-dark-700 mb-8 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 bg-${feature.accent} rounded-full`}></div>
                  <span className="text-sm text-dark-600 font-medium tracking-wide">AI-POWERED EXCELLENCE</span>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative max-w-md mx-auto">
                <div className="premium-card rounded-none p-12 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-${feature.accent} opacity-5`}></div>
                  <div className="relative z-10">
                    <div className="bg-primary-50 rounded-lg h-80 flex items-center justify-center mb-6">
                      <span className="text-8xl opacity-60">{feature.screenshot}</span>
                    </div>
                    <div className="text-center">
                      <div className="h-2 bg-neutral-200 rounded w-3/4 mx-auto mb-2"></div>
                      <div className="h-2 bg-neutral-200 rounded w-1/2 mx-auto mb-2"></div>
                      <div className={`h-2 bg-${feature.accent} rounded w-2/3 mx-auto`}></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating accent */}
                <div className={`absolute -top-4 -right-4 w-8 h-8 bg-${feature.accent} rounded-lg opacity-80`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}