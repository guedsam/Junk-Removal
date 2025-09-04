import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '#1 Junk Removal Service in Twilight, Oregon City - Pacific Northwest Specialists | AS Junk Removal',
  description: 'Leading junk removal service in Twilight, Oregon City. Pacific Northwest specialists, coastal-influenced cleanup, eco-friendly disposal, transparent pricing. Call (503) 753-2329. Serving Twilight residents since 2018.',
  keywords: 'Twilight junk removal, junk removal Twilight Oregon City, junk hauler Twilight, same day junk removal Twilight, Pacific Northwest junk removal Twilight OR, Twilight coastal-influenced specialists junk removal',
  openGraph: {
    title: '#1 Junk Removal Service in Twilight, Oregon City - Pacific Northwest Specialists',
    description: 'Leading junk removal service in Twilight, Oregon City. Pacific Northwest specialists with coastal expertise.',
    url: 'https://asjunkremoval.com/twilight-junk-removal',
    siteName: 'AS Junk Removal',
    images: [
      {
        url: '/images/junk-removal/oregon-city-junk-removal-team.webp',
        width: 1200,
        height: 630,
        alt: 'AS Junk Removal team serving Twilight Pacific Northwest community in Oregon City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Junk Removal Service in Twilight, Oregon City - Pacific Northwest Specialists',
    description: 'Leading junk removal service in Twilight, Oregon City. Pacific Northwest specialists.',
    images: ['/images/junk-removal/oregon-city-junk-removal-team.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/twilight-junk-removal',
  },
}

export default function TwilightJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Junk Removal{' '}
                <span className="text-gradient">Twilight</span>
                {' '}<span className="text-2xl md:text-3xl font-normal">Oregon City</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                #1 rated junk removal service in Twilight, Oregon City.
                As Pacific Northwest specialists, we understand the distinctive coastal-influenced
                character and nature-inspired lifestyle that makes Twilight special since 2018.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Free Estimate
                </Link>
                <a href="tel:+15037532329" className="btn-secondary">
                  Call (503) 753-2329
                </a>
              </div>
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
            </div>
            <div className="relative">
              <img
                src="/images/junk-removal/oregon-city-junk-removal-team.webp"
                alt="AS Junk Removal professional team providing Twilight Pacific Northwest junk removal services in Oregon City"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Twilight Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Twilight's Pacific Northwest Community Since 2018
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Twilight embodies the essence of Pacific Northwest living, where coastal influences
              meet inland natural beauty in a community that celebrates both Oregon tradition
              and the unique character that makes our area so distinctive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">About Twilight Pacific Northwest Community</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Community influenced by Pacific Ocean weather patterns
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Northeastern residential area with conservationist values
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Natural landscape integration with local flora and fauna
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Appreciation for seasonal Pacific Northwest climate cycles
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Community atmosphere reflecting Pacific Northwest lifestyle preferences</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Why Twilight Trusts AS Junk Removal</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Understanding of coastal climate and seasonal weather patterns
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Respect for Pacific Northwest environmental values and recycling priorities
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Appreciation for natural landscapes and conservationist community spirit
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Commitment to serving families with Pacific Northwest lifestyle needs
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Partnership with Twilight's nature-appreciative residential community</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Twilight Pacific Northwest Coverage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>• Twilight's Pacific Northwest residential area</div>
              <div>• Coastal-influenced neighborhood properties</div>
              <div>• Natural landscape residential communities</div>
              <div>• Conservationist family home districts</div>
              <div>• Seasonal climate residential blocks</div>
              <div>• Nature-appreciative community areas</div>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              Complete coverage of Twilight's Pacific Northwest community, serving homes that embrace Oregon's natural coastal heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Twilight Pacific Northwest Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Twilight Pacific Northwest Community Cleanup Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our services are designed for Twilight's coastal-influenced lifestyle,
              understanding how Pacific Northwest weather patterns, environmental values,
              and natural landscape appreciation shape our community's service needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Coastal-Influenced Residential Cleanouts
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized residential cleanout services for Twilight homes.
                Understanding how coastal climate influences, natural landscape
                features, and Pacific Northwest lifestyle create unique residential cleanup needs.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Coastal climate cleaning services</li>
                <li>• Pacific Northwest property organization</li>
                <li>• Natural landscape residence maintenance</li>
                <li>• Conservationist home preparation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Seasonal Pacific Northwest Landscape Care
              </h3>
              <p className="text-gray-600 mb-4">
                Expert handling of Twilight's Pacific Northwest natural features.
                Managing seasonal yard changes, coastal weather effects, and natural
                materials with respect for our region's environmental conservation values.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Coastal weather landscape management</li>
                <li>• Pacific Northwest garden waste collection</li>
                <li>• Seasonal climate yard maintenance</li>
                <li>• Environmental conservation landscape care</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Northern Renovation Cleanup Support
              </h3>
              <p className="text-gray-600 mb-4">
                Professional construction debris removal services for Twilight renovation projects.
                Coordinating with contractors while maintaining the coastal-influenced character
                and Pacific Northwest standards that define our community renovations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Pacific Northwest home renovation cleanup</li>
                <li>• Coastal-influenced construction waste</li>
                <li>• Natural environment renovation support</li>
                <li>• Community-respectful debris management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Twilight Pacific Northwest Heritage Focus */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Honoring Twilight's Pacific Northwest Heritage
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Twilight represents a special blend of coastal influences and inland natural beauty,
              where Oregon's Pacific Northwest character creates a community lifestyle that
              celebrates our region's unique environmental and cultural heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🌊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Coastal Influence Partnership</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Deep appreciation for Twilight's connection to Pacific Ocean weather patterns and coastal environmental influences.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🌲</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Natural Landscape Respect</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Understanding the importance of preserving Twilight's cherished natural surroundings and Pacific Northwest conservation values.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Pacific Northwest Living Enhancement</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Supporting the unique coastal-influenced residential style that defines Twilight and enhances Oregon City's Pacific identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Twilight Pacific Northwest Community Recognition
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Hearing from Twilight's Pacific Northwest community members about their coastal-influenced experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Twilight is all about that true Pacific Northwest feeling - rainy days, natural beauty, and hardworking communities who understand the weather.
                When we needed our wet basement cleaned out after twenty years of family living, they understood how our coastal climate affects our homes.
                They handled everything from water-damaged items to seasonal storage perfectly. Service that just gets Oregon life."
              </p>
              <p className="text-sm font-semibold text-gray-900">- The Thompson Family, Coastal Climate Experts and Twilight Residents</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Living in Twilight means dealing with Oregon's famous weather and appreciating our natural surroundings every day. When our home needed a major cleanout
                for downsizing, they understood our appreciation for the natural world and our respect for the environment. Perfect partners for our Pacific Northwest lifestyle."
              </p>
              <p className="text-sm font-semibold text-gray-900">- The Natural Science Educators, Twilight Environmental Advocates</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Twilight Community Association looks after the area that defines our Pacific Northwest living experience. These service professionals have become our go-to
                for everything from seasonal yard maintenance to residential cleanup projects. They understand our coastal weather patterns and respect our natural landscape.
                Essential partners in maintaining what makes Twilight such a special community."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Coastal Climate Community Association, Twilight Environmental Leaders</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Twilight Pacific Northwest Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How does service account for Twilight's coastal-influenced location?
              </h3>
              <p className="text-gray-600">
                Twilight's coastal influence is fundamental to our service approach. We understand Seattle-to-Coos Bay weather patterns, prepare for coastal precipitation amounts, handle moisture-affected materials expertly, and work around seasonal changes that characterize Pacific Northwest living. Our service timing and techniques are adapted specifically for Twilight's coastal climate conditions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about protecting Twilight's natural Pacific Northwest environment?
              </h3>
              <p className="text-gray-600">
                Environmental protection is central to Twilight service. We implement transportation techniques that minimize environmental impact, use protective measures for Pacific Northwest flora, handle natural materials with conservationist care, and follow disposal practices that respect our region's environmental values. Our approach ensures that service activities enhance rather than harm Twilight's cherished natural surroundings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do you handle seasonal Pacific Northwest weather challenges?
              </h3>
              <p className="text-gray-600">
                Seasonal weather is a core consideration in Twilight service. We schedule around heavy Oregon precipitation periods, coordinate with natural weather patterns, have specialized equipment for wet conditions, and understand how coastal climate affects everything from transportation timing to material storage needs. Our crews are trained to work effectively in Pacific Northwest weather conditions year-round.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much does Pacific Northwest junk removal cost in Twilight?
              </h3>
              <p className="text-gray-600">
                Twilight Pacific Northwest projects range from $180-400 for residential cleanouts to $900-1200 for larger nature-affected or environmentally sensitive projects. We provide free personalized estimates that consider Twilight's coastal environmental factors, conservationist priorities, seasonal weather impacts, and the Pacific Northwest lifestyle standards that define our community. Every estimate reflects our understanding of coastal-influenced property challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about recycling and eco-friendly Pacific Northwest practices?
              </h3>
              <p className="text-gray-600">
                Recycling and ecological responsibility are central to Twilight service. We maximize diversion from landfills, prioritize Pacific Northwest-approved eco-friendly disposal options, work with local conservationist organizations, and implement sustainable practices that reflect our community's environmental values. Our approach distinguishes itself through superior eco-friendly practices that align with Pacific Northwest conservation priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Twilight's Pacific Northwest Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join the Twilight coast-influenced community who trust us for their Pacific Northwest cleanup needs.
            Same-day service available throughout our coastal heritage area. Call now or get your environmental-friendly quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Twilight Quote
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329 Now
            </a>
          </div>
          <div className="mt-8 text-primary-100">
            <p className="text-lg font-semibold">Twilight Pacific Northwest Service • Licensed & Insured • Same-Day Service Available</p>
            <p className="text-sm mt-2">Serving Twilight's Coastal Heritage & Oregon Pacific Northwest Living Since 2018</p>
          </div>
        </div>
      </section>

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "AS Junk Removal",
            "description": "Pacific Northwest coastal-influenced residential junk removal services in Twilight, Oregon City, OR",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Oregon City",
              "addressRegion": "OR",
              "addressCountry": "US"
            },
            "telephone": "(503) 753-2329",
            "url": "https://asjunkremoval.com/twilight-junk-removal",
            "serviceArea": {
              "@type": "Place",
              "name": "Twilight, Oregon City, OR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "320"
            },
            "openingHours": "Mo-Su",
            "serviceType": "Junk Removal Services",
            "areaServed": "Twilight, Oregon City, OR"
          })
        }}
      />
    </div>
  )
}
