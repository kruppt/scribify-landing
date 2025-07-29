import Section from './Section'

const features = [
  {
    title: 'Distraction-Free Writing',
    description: 'Clean, minimal interface that gets out of your way so you can focus on your thoughts. Every element is carefully crafted for the ultimate writing experience.',
    screenshot: '📝',
    accent: 'accent-400'
  },
  {
    title: 'Powerful Organization',
    description: 'Tag, categorize, and organize your notes with an intuitive folder system. Your ideas deserve a sophisticated home.',
    screenshot: '📂',
    accent: 'primary-400'
  },
  {
    title: 'Advanced Search',
    description: 'Find any note instantly with intelligent search that understands context and content. Never lose a thought again.',
    screenshot: '🔍',
    accent: 'accent-500'
  },
  {
    title: 'Rich Text Support',
    description: 'Format your notes with markdown support, code blocks, and rich text formatting. Express yourself with style.',
    screenshot: '✨',
    accent: 'primary-500'
  }
]

export default function Features() {
  return (
    <Section background="gradient" id="features">
      <div className="text-center mb-24">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-white text-primary-800 text-sm font-medium tracking-wide rounded-full shadow-sm">
            CRAFTED EXPERIENCES
          </span>
        </div>
        <h2 className="text-fluid-3xl lg:text-fluid-4xl font-bold mb-6 text-shadow">
          Powerful Features
        </h2>
        <p className="text-fluid-lg text-dark-700 max-w-3xl mx-auto leading-relaxed">
          Everything you need for effective note-taking, without the complexity you don't. 
          Elegance meets functionality.
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
                  <span className="text-sm text-dark-600 font-medium tracking-wide">PREMIUM CRAFTSMANSHIP</span>
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