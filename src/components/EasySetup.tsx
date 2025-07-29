import Section from './Section'

const steps = [
  {
    step: '1',
    title: 'Download',
    description: 'Download Scribify from our website or the Mac App Store.'
  },
  {
    step: '2',
    title: 'Install',
    description: 'Drag Scribify to your Applications folder - that\'s it!'
  },
  {
    step: '3',
    title: 'Start Summarizing',
    description: 'Open Scribify and start transcribing audio immediately. No setup required.'
  }
]

export default function EasySetup() {
  return (
    <Section id="setup">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Get Started in Seconds
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          No complicated setup, no account creation, no learning curve. Just download and start summarizing.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -z-10">
                  <div className="absolute right-2 top-[-4px] w-0 h-0 border-l-4 border-l-gray-200 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to transform your note-taking?</h3>
            <p className="text-gray-600 mb-6">Join thousands of Mac users who have already simplified their workflow.</p>
            <div className="bg-white rounded-lg p-6 shadow-lg inline-block">
              <div className="text-4xl mb-2">📥</div>
              <div className="text-sm text-gray-500">One-click installation</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}