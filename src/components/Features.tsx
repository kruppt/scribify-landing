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
                <div className="premium-card rounded-none p-8 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-${feature.accent} opacity-5`}></div>
                  <div className="relative z-10">
                    {/* Mac App Window */}
                    <div className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg shadow-lg overflow-hidden">
                      {/* Window Header */}
                      <div className="bg-gray-800 px-4 py-2 flex items-center">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex-1 text-center">
                          <span className="text-white text-sm font-medium">Scribify</span>
                        </div>
                      </div>
                      
                      {/* App Content Based on Feature */}
                      <div className="bg-white p-6 h-64">
                        {index === 0 && (
                          // AI Transcription Engine
                          <div className="space-y-3">
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-sm font-medium text-gray-700">Audio Transcription</span>
                              <span className="text-xs text-green-600 font-medium">⚡ Processing...</span>
                            </div>
                            <div className="space-y-2">
                              <div className="h-3 bg-blue-200 rounded w-full"></div>
                              <div className="h-3 bg-blue-200 rounded w-4/5"></div>
                              <div className="h-3 bg-blue-300 rounded w-full"></div>
                              <div className="h-3 bg-blue-200 rounded w-3/4"></div>
                            </div>
                            <div className="mt-4 text-xs text-gray-500">
                              Powered by OpenAI Whisper
                            </div>
                          </div>
                        )}
                        
                        {index === 1 && (
                          // 15 Intelligent Templates
                          <div className="space-y-2">
                            <div className="text-sm font-medium text-gray-700 mb-3">Summary Templates</div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="bg-orange-100 p-2 rounded text-xs font-medium">🧠 General</div>
                              <div className="bg-yellow-100 p-2 rounded text-xs font-medium">🎓 Lecture</div>
                              <div className="bg-blue-100 p-2 rounded text-xs font-medium">💼 Meeting</div>
                              <div className="bg-green-100 p-2 rounded text-xs font-medium">🎙️ Interview</div>
                              <div className="bg-purple-100 p-2 rounded text-xs font-medium">🎧 Podcast</div>
                              <div className="bg-pink-100 p-2 rounded text-xs font-medium">💡 Brainstorm</div>
                            </div>
                            <div className="text-xs text-gray-500 mt-2">+ 9 more templates</div>
                          </div>
                        )}
                        
                        {index === 2 && (
                          // Privacy-First Design
                          <div className="space-y-3">
                            <div className="flex items-center space-x-2 mb-4">
                              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                              <span className="text-sm font-medium text-gray-700">Local Processing</span>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between py-1">
                                <span className="text-xs text-gray-600">Your OpenAI Key</span>
                                <span className="text-xs text-green-600">🔐 Secure</span>
                              </div>
                              <div className="flex items-center justify-between py-1">
                                <span className="text-xs text-gray-600">Data Collection</span>
                                <span className="text-xs text-red-600">❌ None</span>
                              </div>
                              <div className="flex items-center justify-between py-1">
                                <span className="text-xs text-gray-600">Cloud Storage</span>
                                <span className="text-xs text-red-600">❌ Never</span>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {index === 3 && (
                          // Pay Once, Use Forever
                          <div className="text-center space-y-3">
                            <div className="text-2xl font-bold text-gray-900">$49</div>
                            <div className="text-xs text-gray-600">One-time purchase</div>
                            <div className="space-y-1">
                              <div className="text-xs text-gray-700">vs Competitors:</div>
                              <div className="text-xs text-red-600">Otter.ai: $204/year</div>
                              <div className="text-xs text-red-600">Rev.ai: $144/year</div>
                            </div>
                            <div className="text-xs font-medium text-green-600">Save $155+ annually</div>
                          </div>
                        )}
                        
                        {index === 4 && (
                          // Professional Output
                          <div className="space-y-3">
                            <div className="text-sm font-medium text-gray-700 mb-3">Export Options</div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="bg-blue-100 p-2 rounded text-xs">📝 Notion</div>
                              <div className="bg-purple-100 p-2 rounded text-xs">📓 OneNote</div>
                              <div className="bg-green-100 p-2 rounded text-xs">🐘 Evernote</div>
                              <div className="bg-gray-100 p-2 rounded text-xs">📄 PDF</div>
                            </div>
                            <div className="text-xs text-gray-500 mt-2">One-click exports with formatting</div>
                          </div>
                        )}
                        
                        {index === 5 && (
                          // Lightning-Fast Processing
                          <div className="space-y-3">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-sm font-medium text-gray-700">Processing Speed</span>
                              <span className="text-xs text-blue-600">⚡ Real-time</span>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between text-xs">
                                <span>Upload</span>
                                <span className="text-green-600">✓ Complete</span>
                              </div>
                              <div className="flex justify-between text-xs">
                                <span>Transcribe</span>
                                <span className="text-green-600">✓ Complete</span>
                              </div>
                              <div className="flex justify-between text-xs">
                                <span>Summarize</span>
                                <span className="text-blue-600">⚡ Processing</span>
                              </div>
                            </div>
                            <div className="text-xs text-gray-500">&lt; 3 minutes average</div>
                          </div>
                        )}
                        
                        {index === 6 && (
                          // Smart Content Recognition
                          <div className="space-y-3">
                            <div className="text-sm font-medium text-gray-700 mb-3">AI Analysis</div>
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-xs">Speaker identification</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-xs">Action items extracted</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                <span className="text-xs">Key decisions highlighted</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                <span className="text-xs">Content structured</span>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {index === 7 && (
                          // Native Mac Performance
                          <div className="space-y-3">
                            <div className="flex items-center space-x-2 mb-3">
                              <span className="text-lg">🍎</span>
                              <span className="text-sm font-medium text-gray-700">Mac Optimized</span>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between text-xs">
                                <span>Apple Silicon</span>
                                <span className="text-green-600">✓ Optimized</span>
                              </div>
                              <div className="flex justify-between text-xs">
                                <span>Battery Usage</span>
                                <span className="text-green-600">Minimal</span>
                              </div>
                              <div className="flex justify-between text-xs">
                                <span>Interface</span>
                                <span className="text-blue-600">Native</span>
                              </div>
                            </div>
                            <div className="text-xs text-gray-500">M1/M2/M3 Compatible</div>
                          </div>
                        )}
                      </div>
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