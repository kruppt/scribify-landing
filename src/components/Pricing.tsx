import Button from './Button'
import Section from './Section'

export default function Pricing() {
  return (
    <Section background="dark" id="pricing">
      <div className="text-center mb-20">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-accent-500 text-dark-900 text-sm font-medium tracking-wide rounded-full">
            PREMIUM VALUE
          </span>
        </div>
        <h2 className="text-fluid-3xl lg:text-fluid-4xl font-bold mb-6 text-white">
          Simple, Transparent Pricing
        </h2>
        <p className="text-fluid-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
          One price, all features, lifetime access. No subscriptions, no hidden fees, no compromises.
        </p>
      </div>
      
      <div className="max-w-lg mx-auto">
        <div className="bg-gradient-to-b from-white to-primary-50 rounded-none p-10 shadow-2xl relative overflow-hidden group">
          {/* Premium badge */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-accent-500 text-dark-900 px-6 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg">
              CRAFTSMAN EDITION
            </span>
          </div>
          
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
          
          <div className="text-center mb-10 relative z-10">
            <h3 className="text-2xl font-bold text-dark-900 mb-4">Scribify for Mac</h3>
            <div className="flex items-center justify-center mb-4">
              <span className="text-6xl font-bold text-dark-900">$25</span>
              <span className="text-xl text-dark-600 ml-3">one-time</span>
            </div>
            <p className="text-dark-700 font-medium">Lifetime access with free updates</p>
          </div>
          
          <ul className="space-y-4 mb-10 relative z-10">
            {[
              'Unlimited audio transcriptions',
              'Advanced AI accuracy',
              'All audio formats supported',
              'Export to favorite apps',
              'Pre-defined templates',
              'Custom template creation',
              'Instant download via Gumroad',
              'Lifetime updates included'
            ].map((feature, index) => (
              <li key={index} className="flex items-center group">
                <span className="w-6 h-6 bg-accent-500 text-dark-900 rounded-full flex items-center justify-center mr-4 text-sm font-bold group-hover:scale-110 transition-transform duration-200">
                  ✓
                </span>
                <span className="text-dark-700 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="relative z-10">
            <a href="https://tejpics.gumroad.com/l/lwchdo?wanted=true" target="_blank" rel="noopener noreferrer" className="block w-full">
              <Button className="w-full mb-4" size="lg">
                Buy on Gumroad
              </Button>
            </a>
            <p className="text-center text-sm text-dark-600 font-medium">
              Secure payment via Gumroad • Instant download
            </p>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-16">
        <p className="text-neutral-300 mb-6 text-lg">Need a volume license for your team?</p>
        <Button variant="outline" className="border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-dark-900">
          Contact Sales
        </Button>
      </div>
    </Section>
  )
}