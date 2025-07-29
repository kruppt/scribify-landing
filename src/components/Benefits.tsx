import Section from './Section'

const benefits = [
  {
    icon: '🎯',
    title: 'Very Accurate',
    description: 'Advanced AI transcription technology delivers industry-leading accuracy for crystal-clear results.',
    gradient: 'from-accent-400 to-accent-600'
  },
  {
    icon: '✨',
    title: 'Ease of Use',
    description: 'Intuitive interface makes transcription effortless. Simply drag, drop, and let Scribify do the work.',
    gradient: 'from-primary-400 to-primary-600'
  },
  {
    icon: '🎵',
    title: 'Transcribe Any Audio',
    description: 'Support for all audio formats - meetings, interviews, podcasts, lectures, and more.',
    gradient: 'from-dark-400 to-dark-600'
  },
  {
    icon: '📤',
    title: 'Export Anywhere',
    description: 'Seamlessly export to your favorite note-taking apps like Notion, Obsidian, Apple Notes, and more.',
    gradient: 'from-neutral-400 to-neutral-600'
  },
  {
    icon: '📋',
    title: 'Pre-Defined Templates',
    description: 'Ready-made summary templates for meetings, interviews, and lectures to save you time.',
    gradient: 'from-accent-500 to-primary-500'
  },
  {
    icon: '🛠️',
    title: 'Custom Templates',
    description: 'Create and save your own custom templates to match your unique workflow and needs.',
    gradient: 'from-primary-500 to-accent-500'
  }
]

export default function Benefits() {
  return (
    <Section background="cream" id="benefits">
      <div className="text-center mb-20">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-white text-primary-800 text-sm font-medium tracking-wide rounded-full shadow-sm">
            DESIGNED FOR PERFECTION
          </span>
        </div>
        <h2 className="text-fluid-3xl lg:text-fluid-4xl font-bold mb-6 text-shadow">
          Best Mac Audio Transcription Software Features
        </h2>
        <p className="text-fluid-lg text-dark-700 max-w-3xl mx-auto leading-relaxed">
          Experience professional-grade audio transcription with AI accuracy, speech-to-text technology, and seamless workflow integration designed specifically for Mac users.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="premium-card rounded-none p-8 group relative overflow-hidden">
            {/* Background gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            
            <div className="relative z-10">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-fluid-xl font-bold text-dark-900 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-dark-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
            
            {/* Subtle border accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
      
      {/* Conversion CTA */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-accent-100 to-primary-100 rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-dark-900 mb-4">Ready to Experience Perfect Transcription?</h3>
          <p className="text-dark-700 mb-6">Join 2,500+ Mac users saving hours every week with AI-powered transcription.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://tejpics.gumroad.com/l/lwchdo?wanted=true" target="_blank" rel="noopener noreferrer">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-none font-bold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                Get Scribify - $25
              </button>
            </a>
            <div className="text-sm text-dark-600">
              <span className="font-medium text-green-600">Save $179/year</span> vs competitors
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}