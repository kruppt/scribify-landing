import Section from './Section'

const testimonials = [
  {
    quote: "Scribify turned my 2-hour lecture recordings into perfect summaries in minutes. The accuracy is incredible and saves me so much time studying.",
    author: "Sarah Chen",
    role: "Graduate Student",
    avatar: "👩‍🎓"
  },
  {
    quote: "Client interviews used to take forever to transcribe. Now I can focus on the conversation knowing Scribify will capture everything perfectly.",
    author: "Marcus Rodriguez",
    role: "UX Designer",
    avatar: "👨‍🎨"
  },
  {
    quote: "Meeting transcriptions that would cost me $200/month elsewhere. Scribify paid for itself in the first week with just as good quality.",
    author: "Emily Watson",
    role: "Project Manager",
    avatar: "👩‍💼"
  }
]

export default function Testimonials() {
  return (
    <Section background="white" id="testimonials">
      <div className="text-center mb-20">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-800 text-sm font-medium tracking-wide rounded-full">
            CUSTOMER VOICES
          </span>
        </div>
        <h2 className="text-fluid-3xl lg:text-fluid-4xl font-bold text-dark-900 mb-6 text-shadow">
          Loved by Mac Users
        </h2>
        <p className="text-fluid-lg text-dark-700 max-w-3xl mx-auto leading-relaxed">
          See what people are saying about their experience with Scribify. Real stories from real users.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="premium-card rounded-none p-8 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-50 to-primary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="flex text-accent-500 text-lg">
                  {'★'.repeat(5)}
                </div>
              </div>
              <blockquote className="text-dark-700 mb-8 italic text-fluid-base leading-relaxed font-serif">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-dark-900 text-fluid-base">{testimonial.author}</div>
                  <div className="text-sm text-dark-600 font-medium">{testimonial.role}</div>
                </div>
              </div>
            </div>
            
            {/* Subtle accent line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </Section>
  )
}