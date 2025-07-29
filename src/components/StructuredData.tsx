export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://scribifyforall.com/#software",
        "name": "Scribify",
        "description": "AI-powered audio transcription app for Mac that converts audio files into accurate transcripts and summaries using OpenAI Whisper technology",
        "url": "https://scribifyforall.com",
        "applicationCategory": "Productivity",
        "operatingSystem": "macOS",
        "softwareVersion": "1.0",
        "datePublished": "2024-01-01",
        "dateModified": "2024-12-01",
        "author": {
          "@type": "Organization",
          "@id": "https://scribifyforall.com/#organization"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://scribifyforall.com/#organization"
        },
        "offers": {
          "@type": "Offer",
          "@id": "https://scribifyforall.com/#offer",
          "price": "25",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://tejpics.gumroad.com/l/lwchdo?wanted=true",
          "seller": {
            "@type": "Organization",
            "@id": "https://scribifyforall.com/#organization"
          },
          "validFrom": "2024-01-01",
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "127",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Sarah Chen"
            },
            "reviewBody": "Scribify turned my 2-hour lecture recordings into perfect summaries in minutes. The accuracy is incredible and saves me so much time studying."
          },
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Marcus Rodriguez"
            },
            "reviewBody": "Client interviews used to take forever to transcribe. Now I can focus on the conversation knowing Scribify will capture everything perfectly."
          }
        ],
        "screenshot": "https://scribifyforall.com/screenshot.png",
        "featureList": [
          "AI-powered transcription using OpenAI Whisper",
          "15 intelligent summary templates",
          "Support for all audio formats",
          "Export to Notion, OneNote, Evernote, PDF",
          "Privacy-first local processing",
          "One-time payment, no subscription",
          "Native Mac app with Apple Silicon optimization",
          "Custom template creation"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://scribifyforall.com/#organization",
        "name": "Scribify",
        "url": "https://scribifyforall.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://scribifyforall.com/logo.png",
          "width": 512,
          "height": 512
        },
        "sameAs": [
          "https://twitter.com/scribify",
          "https://github.com/scribify"
        ],
        "foundingDate": "2024",
        "description": "Developer of AI-powered transcription software for Mac users"
      },
      {
        "@type": "WebSite",
        "@id": "https://scribifyforall.com/#website",
        "url": "https://scribifyforall.com",
        "name": "Scribify - AI Audio Transcription for Mac",
        "description": "Professional audio transcription app for Mac powered by OpenAI Whisper technology",
        "publisher": {
          "@type": "Organization",
          "@id": "https://scribifyforall.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://scribifyforall.com/?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Product",
        "@id": "https://scribifyforall.com/#product",
        "name": "Scribify for Mac",
        "description": "AI-powered audio transcription app that converts audio files into accurate transcripts and summaries",
        "brand": {
          "@type": "Brand",
          "name": "Scribify"
        },
        "category": "Software > Productivity > Transcription",
        "offers": {
          "@type": "Offer",
          "@id": "https://scribifyforall.com/#offer"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "@id": "https://scribifyforall.com/#rating"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://scribifyforall.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How accurate is Scribify's transcription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Scribify uses OpenAI's advanced Whisper technology to deliver industry-leading transcription accuracy, typically above 95% for clear audio recordings."
            }
          },
          {
            "@type": "Question",
            "name": "What audio formats does Scribify support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Scribify supports all major audio formats including MP3, WAV, M4A, FLAC, and more. You can transcribe meetings, interviews, podcasts, lectures, and voice memos."
            }
          },
          {
            "@type": "Question", 
            "name": "Is Scribify a one-time purchase?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Scribify costs only $25 as a one-time payment with lifetime updates included. This saves you $179+ per year compared to subscription-based competitors like Otter.ai ($204/year)."
            }
          }
        ]
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}