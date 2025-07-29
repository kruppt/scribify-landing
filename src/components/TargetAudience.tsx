import Section from './Section'

const audiences = [
  {
    title: 'Students',
    description: 'Perfect for lecture notes, research, and study materials. Organize your academic life with ease.',
    features: ['Quick note-taking during lectures', 'Research organization', 'Study material compilation'],
    image: '🎓'
  },
  {
    title: 'Professionals',
    description: 'Streamline meeting notes, project planning, and daily thoughts for maximum productivity.',
    features: ['Meeting minutes', 'Project documentation', 'Daily journaling'],
    image: '💼'
  },
  {
    title: 'Creatives',
    description: 'Capture inspiration, brainstorm ideas, and organize creative projects in one beautiful space.',
    features: ['Idea capture', 'Creative brainstorming', 'Project planning'],
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
          Whether you're a student, professional, or creative, Scribify adapts to your unique note-taking needs.
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