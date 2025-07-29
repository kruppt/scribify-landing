'use client'

import Script from 'next/script'

export default function GumroadTracking() {
  return (
    <>
      {/* Gumroad Analytics */}
      <Script
        src="https://gumroad.com/js/gumroad.js"
        strategy="afterInteractive"
      />
      
      {/* Custom tracking for button clicks */}
      <Script id="gumroad-tracking" strategy="afterInteractive">
        {`
          // Track Gumroad link clicks
          document.addEventListener('DOMContentLoaded', function() {
            const gumroadLinks = document.querySelectorAll('a[href*="gumroad.com"]');
            gumroadLinks.forEach(link => {
              link.addEventListener('click', function() {
                // Track with Google Analytics if available
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'click', {
                    event_category: 'Purchase',
                    event_label: 'Gumroad Link',
                    value: 25
                  });
                }
                
                // Track with Facebook Pixel if available
                if (typeof fbq !== 'undefined') {
                  fbq('track', 'InitiateCheckout', {
                    value: 25,
                    currency: 'USD'
                  });
                }
              });
            });
          });
        `}
      </Script>
    </>
  )
}