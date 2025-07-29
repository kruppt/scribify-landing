import Button from './Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-primary-50 via-primary-100 to-primary-200 bg-grain overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-width section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-accent-100 text-accent-800 text-sm font-medium tracking-wide rounded-full mb-4">
                CRAFTED FOR MAC
              </span>
            </div>
            
            <h1 className="text-fluid-4xl lg:text-fluid-5xl font-bold mb-6 text-shadow">
              <span className="block">Effortless</span>
              <span className="block text-gradient">Audio Transcription</span>
              <span className="block">Refined</span>
            </h1>
            
            <p className="text-fluid-lg text-dark-700 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Transform your audio files into beautifully organized transcripts and summaries with Scribify. 
              Advanced AI transcription technology designed exclusively for Mac users.
            </p>
            
            {/* Social Proof & Value Prop */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-xl mx-auto lg:mx-0 border border-accent-200/50">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎉</span>
                  <span className="font-bold text-accent-700">Join 2,500+ Mac users</span>
                </div>
                <div className="text-green-600 font-bold">Save $179/year</div>
              </div>
              <div className="text-sm text-dark-600">
                <span className="font-medium">$25 once</span> vs competitors at <span className="line-through text-red-500">$204/year</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a href="https://tejpics.gumroad.com/l/lwchdo?wanted=true" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto">
                  Buy Now - $25
                </Button>
              </a>
              <a href="https://www.youtube.com/watch?v=Q14wbLIVBSE&ab_channel=Tejmatic" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Watch Demo
                </Button>
              </a>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-dark-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                <span>Instant download</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                <span>One-time payment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                <span>Lifetime updates</span>
              </div>
            </div>
          </div>
          
          {/* App Preview */}
          <div className="relative">
            <div className="relative max-w-lg mx-auto">
              {/* Mac window mockup */}
              <div className="bg-dark-800 rounded-t-xl p-4 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="text-xs text-neutral-400 ml-4 font-mono">Scribify</div>
                </div>
              </div>
              
              <div className="bg-white rounded-b-xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center">
                      <span className="text-accent-600 font-semibold">S</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-dark-800">My Project Notes</div>
                      <div className="text-xs text-dark-500">Today, 2:30 PM</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-3 bg-neutral-200 rounded w-full"></div>
                    <div className="h-3 bg-neutral-200 rounded w-4/5"></div>
                    <div className="h-3 bg-accent-100 rounded w-3/5"></div>
                    <div className="h-3 bg-neutral-200 rounded w-2/3"></div>
                    <div className="h-3 bg-primary-100 rounded w-1/2"></div>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-6 pt-4 border-t border-neutral-100">
                    <div className="text-xs text-neutral-500">✓ Auto-saved</div>
                    <div className="text-xs text-neutral-300">•</div>
                    <div className="text-xs text-neutral-500">847 words</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg">
                <div className="w-4 h-4 bg-accent-400 rounded"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg">
                <div className="w-4 h-4 bg-primary-400 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}