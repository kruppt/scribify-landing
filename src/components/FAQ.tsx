'use client'

import { useState } from 'react'
import Section from './Section'

const faqs = [
  {
    question: 'What makes Scribify different from other note-taking apps?',
    answer: 'Scribify focuses on simplicity and speed. Unlike other apps that try to do everything, we do one thing perfectly - note-taking. No complex features, no learning curve, just fast, beautiful notes.'
  },
  {
    question: 'Does Scribify work offline?',
    answer: 'Yes! Scribify is designed to work completely offline. All your notes are stored locally on your Mac, so you can access and edit them anytime, anywhere, without an internet connection.'
  },
  {
    question: 'Can I sync my notes across devices?',
    answer: 'Scribify optionally supports iCloud sync, so your notes can be available across all your Apple devices. Sync is optional and can be enabled in preferences.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! Scribify comes with a 14-day free trial with full access to all features. No credit card required to start your trial.'
  },
  {
    question: 'What file formats can I export to?',
    answer: 'You can export your notes to various formats including Markdown, Plain Text, PDF, and HTML. This ensures your notes are never locked into our format.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Absolutely! We offer a 30-day money-back guarantee. If you\'re not completely satisfied with Scribify, we\'ll refund your purchase, no questions asked.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section background="cream" id="faq">
      <div className="text-center mb-20">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-white text-primary-800 text-sm font-medium tracking-wide rounded-full shadow-sm">
            QUESTIONS & ANSWERS
          </span>
        </div>
        <h2 className="text-fluid-3xl lg:text-fluid-4xl font-bold text-dark-900 mb-6 text-shadow">
          Frequently Asked Questions
        </h2>
        <p className="text-fluid-lg text-dark-700 max-w-3xl mx-auto leading-relaxed">
          Everything you need to know about Scribify. Can't find what you're looking for? Contact our support team.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="premium-card rounded-none group overflow-hidden">
            <button
              className="w-full text-left p-8 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset transition-all duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-fluid-lg font-bold text-dark-900 pr-6 group-hover:text-primary-700 transition-colors duration-300">
                  {faq.question}
                </h3>
                <span className="text-primary-600 text-2xl font-bold group-hover:text-accent-500 transition-all duration-300">
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>
            </button>
            {openIndex === index && (
              <div className="px-8 pb-8 border-t border-primary-100">
                <p className="text-dark-700 leading-relaxed pt-6">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}