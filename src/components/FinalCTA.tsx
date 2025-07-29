import Button from './Button'
import Section from './Section'

export default function FinalCTA() {
  return (
    <Section background="cream">
      <div className="relative overflow-hidden">
        <div className="bg-gradient-to-br from-dark-800 via-dark-700 to-dark-900 rounded-none p-16 text-center text-white relative">
          {/* Background texture */}
          <div className="absolute inset-0 bg-grain opacity-20"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-accent-500 rounded-full -translate-x-16 -translate-y-16 opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary-500 rounded-full translate-x-24 translate-y-24 opacity-20"></div>
          
          <div className="relative z-10">
            <div className="mb-8">
              <span className="inline-block px-6 py-3 bg-accent-500 text-dark-900 text-sm font-bold tracking-wide rounded-full">
                TRANSFORM YOUR WORKFLOW
              </span>
            </div>
            
            <h2 className="text-fluid-3xl lg:text-fluid-4xl font-bold mb-8 text-shadow">
              Ready to Elevate Your
              <br />
              <span className="text-accent-400">Note-Taking Experience?</span>
            </h2>
            
            <p className="text-fluid-lg opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of Mac users who have already transformed their workflow with Scribify. 
              Experience the perfect blend of simplicity and sophistication.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a href="https://tejpics.gumroad.com/l/lwchdo?wanted=true" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full sm:w-auto"
                >
                  Buy Now - $25
                </Button>
              </a>
              <a href="#features">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto border-accent-400 text-accent-400 hover:bg-accent-400 hover:text-dark-900"
                >
                  View Features
                </Button>
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-accent-400 rounded-full mb-2"></div>
                <span className="text-sm opacity-75 font-medium">Instant download</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-accent-400 rounded-full mb-2"></div>
                <span className="text-sm opacity-75 font-medium">Secure payment via Gumroad</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-accent-400 rounded-full mb-2"></div>
                <span className="text-sm opacity-75 font-medium">Lifetime updates included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}