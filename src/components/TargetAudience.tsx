import Section from './Section'

const audiences = [
  {
    title: 'Students',
    description: 'Transform recorded lectures into searchable transcripts and study guides. Never miss important details again.',
    features: ['Lecture recording transcription', 'Automated study summaries', 'Interview research analysis'],
    image: '🎓'
  },
  {
    title: 'Professionals',
    description: 'Convert meetings, calls, and interviews into actionable transcripts with key insights highlighted.',
    features: ['Meeting transcription & summaries', 'Client interview processing', 'Podcast content creation'],
    image: '💼'
  },
  {
    title: 'Content Creators',
    description: 'Turn audio content into written form for blogs, social media, and documentation with perfect accuracy.',
    features: ['Podcast episode transcripts', 'Video content to articles', 'Voice memo processing'],
    image: '🎨'
  }
]

export default function TargetAudience() {
  return (
    <Section id="audience">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Built for Everyone
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Whether you're a student, professional, or content creator, Scribify transforms your audio into actionable insights.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {audiences.map((audience, index) => (
          <div key={index} className="text-center">
            <div className="bg-primary-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">{audience.image}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{audience.title}</h3>
            <p className="text-gray-600 mb-6">{audience.description}</p>
            <ul className="space-y-2">
              {audience.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="text-sm text-gray-500 flex items-center justify-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}