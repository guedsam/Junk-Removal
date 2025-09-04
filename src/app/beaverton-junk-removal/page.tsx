import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Beaverton Trash Removal | #1 Expert Junk Hauling Service | Same-Day Pickup',
  description: 'Professional Beaverton trash removal & junk hauling. Top-rated service with same-day pickup, eco-friendly disposal, transparent pricing. Serving all Beaverton areas. Call (503) 753-2329 for free estimate.',
  keywords: 'Beaverton trash removal, Beaverton junk removal, rubbish removal Beaverton, junk hauling Beaverton, affordable trash removal Beaverton, cheap junk pickup Beaverton, furniture removal Beaverton, appliance disposal Beaverton, construction debris Beaverton, estate cleanout Beaverton, same day junk removal Beaverton OR, garbage disposal Beaverton',
  openGraph: {
    title: 'Beaverton Trash Removal | #1 Expert Junk Hauling Service | Same-Day Pickup',
    description: 'Professional Beaverton trash removal & junk hauling. Top-rated service with same-day pickup, eco-friendly disposal, transparent pricing. Serving all Beaverton areas.',
    url: 'https://asjunkremoval.com/beaverton-junk-removal',
    siteName: 'Andrew and Sons Junk Removal',
    images: [{ url: '/images/junk-removal/professional-junk-removal-crew.webp', width: 1200, height: 630, alt: 'Beaverton Trash Removal Expert Team' }],
    locale: 'en_US', type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Beaverton Trash Removal | #1 Expert Junk Hauling Service', description: 'Professional Beaverton trash removal with same-day pickup, eco-friendly disposal, transparent pricing.', images: ['/images/junk-removal/professional-junk-removal-crew.webp'] },
  alternates: { canonical: 'https://asjunkremoval.com/beaverton-junk-removal' },
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
}

export default function BeavertonJunkRemovalPage() {
  const services = [
    {
      title: 'Residential Trash Removal',
      description: 'Complete home cleanouts, furniture hauling, appliance disposal, and general household garbage pickup throughout Beaverton. Same-day available.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v0H8v0z" />
        </svg>
      )
    },
    {
      title: 'Commercial Junk Removal',
      description: 'Office cleanouts, retail space clearing, warehouse cleanups, and business construction debris removal in Beaverton.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Construction Debris',
      description: 'Safe disposal of construction waste, renovation debris, drywall, flooring, and building materials from Beaverton job sites.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: 'Estate Cleanouts',
      description: 'Compassionate estate cleanup services for Beaverton families following life transition, handling everything with care and respect.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Furniture & Appliance Disposal',
      description: 'Professional removal of old furniture, large appliances, mattresses, and bulky items from Beaverton homes and businesses.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: 'Yard Waste Cleanup',
      description: 'Removal of branches, leaves, grass clippings, and landscaping debris from Beaverton properties year-round.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ]

  const whyChooseUs = [
    {
      title: 'Beaverton Local Experts',
      description: 'We know Beaverton inside and out. From Aloha Tech Center to Cooper Mountain, we serve every neighborhood with pride.',
      icon: '🏙️'
    },
    {
      title: 'Same-Day Trash Pickup',
      description: 'Need garbage removed today? We offer same-day service throughout Beaverton with flexible scheduling you can count on.',
      icon: '⚡'
    },
    {
      title: 'Eco-Friendly Cleanup',
      description: 'We sort and recycle over 85% of items collected, supporting Oregon\'s green initiatives and Beaverton\'s sustainability goals.',
      icon: '♻️'
    },
    {
      title: 'Honest, Transparent Pricing',
      description: 'No surprise fees or hidden charges. We provide upfront pricing based on volume, not weight, keeping it simple and fair.',
      icon: '💰'
    },
    {
      title: 'Licensed & Fully Insured',
      description: 'Fully licensed, bonded, and insured for your complete peace of mind. Professional service you can trust in Beaverton.',
      icon: '🛡️'
    },
    {
      title: '100% Customer Satisfaction',
      description: 'We\'re not happy until you\'re completely satisfied. Join hundreds of happy Beaverton families who choose us.',
      icon: '⭐'
    }
  ]

  const beavertonAreas = [
    'Aloha',
    'Alpine',
    'AmberGlen',
    'Aloha Tech Center',
    'Beaverton Hillsboro Highway',
    'Brookwood',
    'Cedar Hills',
    'Cedar Mill',
    'Cooper Mountain',
    'Denney Wharf',
    'Eagle Fern Park',
    'Farmington',
    'Five Oaks',
    'Greystone',
    'Hayden Island',
    'Marconi',
    'North Beaverton',
    'Raleigh Hills',
    'Rock Creek',
    'South Beaverton',
    'Sunset',
    'Tallac Village',
    'Tech Center',
    'West Linn Flats',
    'Westside'
  ]

  const faqData = [
    {
      question: "How quickly can you remove trash from my Beaverton home?",
      answer: "We offer same-day trash removal service throughout Beaverton, Hillsboro, and surrounding areas. Call before 2 PM for same-day pickup, or schedule for your preferred date."
    },
    {
      question: "What are your junk removal rates in Beaverton?",
      answer: "Our transparent pricing starts at $150 for small loads (¼ truck), $300-$450 for medium loads (½ truck), and $500-$750 for large loads. No hidden fees or additional charges."
    },
    {
      question: "Do you recycle items during Beaverton cleanouts?",
      answer: "Yes! We recycle over 85% of items collected, donating furniture and appliances when possible. This environmental commitment is part of what makes us Beaverton's preferred choice."
    },
    {
      question: "Do you handle hazardous materials or electronics?",
      answer: "We can remove most household items, but for hazardous waste or electronics, we follow Oregon disposal regulations. We'll guide you to proper disposal options."
    },
    {
      question: "Can I get a quote before you arrive?",
      answer: "Absolutely! We provide free, no-obligation estimates over the phone or email. Final pricing is confirmed in-person and based on actual volume."
    },
    {
      question: "Is tipping required for your service?",
      answer: "No, tipping is not expected or required. Our pricing is all-inclusive, and we appreciate repeat business and referrals from satisfied Beaverton customers."
    }
  ]

  return (
    <div className="min-h-screen">
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Andrew and Sons Junk Removal",
            "description": "Professional Beaverton trash removal and junk hauling service offering same-day pickup, eco-friendly disposal, and transparent pricing",
            "url": "https://asjunkremoval.com/beaverton-junk-removal",
            "telephone": "+15037532329",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Serving Beaverton",
              "addressLocality": "Beaverton",
              "addressRegion": "OR",
              "postalCode": "97003-97008",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "45.4871",
              "longitude": "-122.8037"
            },
            "areaServed": [
              "Beaverton, OR",
              "Aloha, OR",
              "Alpine, OR",
              "Hillsboro, OR",
              "Portland, OR"
            ],
            "serviceType": ["Trash Removal", "Junk Hauling", "Estate Cleanout", "Construction Debris Removal"],
            "priceRange": "$$",
            "paymentAccepted": ["Cash", "Check", "Credit Card"],
            "currenciesAccepted": "USD",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Beaverton Junk Removal Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Residential Trash Removal",
                    "description": "House cleanouts, furniture removal, appliance disposal"
                  },
                  "price": "150",
                  "priceCurrency": "USD",
                  "description": "Starting at $150 for small loads"
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "bestRating": "5",
              "worstRating": "1",
              "reviewCount": "500"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Professional Beaverton <span className="text-gradient">Trash Removal</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Fast, reliable trash removal service in Beaverton. Same-day pickup, eco-friendly disposal, transparent pricing. We handle junk, garbage, and debris removal for homeowners and businesses throughout Beaverton and surrounding areas.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  <span>5.0 Rating</span>
                </div>
                <div>•</div>
                <div>Same-Day Service</div>
                <div>•</div>
                <div>Licensed & Insured</div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Free Estimate
                </Link>
                <a href="tel:+15037532329" className="btn-secondary">
                  Call (503) 753-2329
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/junk-removal/professional-junk-removal-crew.webp"
                alt="Beaverton trash removal professionals with truck ready for pickup"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beaverton Trash Removal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive garbage and junk hauling services for Beaverton residents and businesses. From residential cleanouts to construction debris cleanup, we've got your trash removal covered!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Beaverton Chooses Our Trash Removal
            </h2>
            <p className="text-xl text-gray-600">
              Local expertise, professional service, and unbeatable customer satisfaction for Beaverton cleanup projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beaverton Areas Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beaverton Neighborhoods We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Professional trash removal throughout all Beaverton communities and districts
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {beavertonAreas.map((area, index) => (
              <div key={index} className="block">
                <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200">
                  <span className="text-gray-700 font-medium text-sm">{area}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see your Beaverton neighborhood? We serve every corner of Beaverton! Contact us if you're in Aloha, Hillsboro, or anywhere nearby.
            </p>
            <Link href="/contact" className="btn-primary">
              Check Your Service Area
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Beaverton Trash Removal Pricing
            </h2>
            <p className="text-xl text-primary-100">
              Transparent pricing based on volume - no hidden fees, no surprise charges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Small Load</h3>
              <div className="text-4xl font-bold text-primary-600 mb-2">$150-250</div>
              <p className="text-gray-600 mb-6">
                Garage cleanup, single rooms, small appliances. Fits in ¼ of our truck.
              </p>
              <ul className="text-left space-y-2 text-sm text-gray-600">
                <li>• Furniture pieces</li>
                <li>• Small appliances</li>
                <li>• Boxes and bags</li>
                <li>• Yard waste</li>
              </ul>
            </div>

            <div className="bg-secondary-600 text-white rounded-xl p-8 text-center transform scale-105 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Medium Load</h3>
              <div className="text-4xl font-bold mb-2">$300-450</div>
              <p className="text-secondary-100 mb-6">
                Most popular choice! Estate cleanout prep, office cleanup. Fits in ½ our truck.
              </p>
              <ul className="text-left space-y-2 text-sm text-secondary-100">
                <li>• Multiple furniture items</li>
                <li>• Large appliances</li>
                <li>• Basement cleanout</li>
                <li>• Yard debris cleanup</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Large Load</h3>
              <div className="text-4xl font-bold text-primary-600 mb-2">$500-750</div>
              <p className="text-gray-600 mb-6">
                Major cleanout projects, estate clearing, construction debris.
              </p>
              <ul className="text-left space-y-2 text-sm text-gray-600">
                <li>• Whole house cleanout</li>
                <li>• Construction waste</li>
                <li>• Commercial cleanout</li>
                <li>• Large renovation debris</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-primary-100 mb-6">
              All quotes are free and provided upfront. No surprise fees, no overcharging. Serving Beaverton since 2019.
            </p>
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* About Beaverton Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Serving America's Favorite Suburb Since 2019
              </h2>
              <p className="text-gray-700 mb-4">
                Andrew and Sons Junk Removal has been Beaverton's trusted trash removal service since 2019. We're proud to serve this vibrant Portland suburb known for its tech innovation, beautiful parks, and thriving community.
              </p>
              <p className="text-gray-700 mb-4">
                From the bustling Aloha Tech Center to the quiet neighborhoods of Raleigh Hills, we understand Beaverton's unique character. Whether you're cleaning out a home near Intel's headquarters or preparing for a move in Five Oaks, our professional team delivers reliable service with a local touch.
              </p>
              <p className="text-gray-700 mb-6">
                As a locally-owned business, we're committed to Beaverton's success. We hire locally, support local charity partners, and understand the specific needs of our community - from tech professionals to growing families and retirees.
              </p>
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div>
              <img src="/images/junk-removal/portland-metro-service-area-map.webp" alt="Beaverton and surrounding trash removal service area" className="w-full rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beaverton Trash Removal FAQ
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our garbage pickup service in Beaverton
            </p>
          </div>

          <Script
            id="faq-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqData.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              })
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Professional Beaverton Trash Removal?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied Beaverton customers who trust us for their junk and garbage removal needs. Same-day service available throughout the entire Beaverton area!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Quote Online
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329 Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
