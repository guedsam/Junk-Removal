import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '#1 Junk Removal Service in Maple Lane, Oregon City - Tree-Lined Neighborhood Specialists | AS Junk Removal',
  description: 'Leading junk removal service in Maple Lane, Oregon City. Tree-lined neighborhood specialists, residential cleanup, community service, transparent pricing. Call (503) 753-2329. Serving Maple Lane residents since 2018.',
  keywords: 'Maple Lane junk removal, junk removal Maple Lane Oregon City, junk hauler Maple Lane, same day junk removal Maple Lane, tree-lined neighborhood junk removal Maple Lane OR, Maple Lane residential specialists junk removal',
  openGraph: {
    title: '#1 Junk Removal Service in Maple Lane, Oregon City - Tree-Lined Neighborhood Specialists',
    description: 'Leading junk removal service in Maple Lane, Oregon City. Tree-lined neighborhood specialists with community expertise.',
    url: 'https://asjunkremoval.com/maple-lane-junk-removal',
    siteName: 'AS Junk Removal',
    images: [
      {
        url: '/images/junk-removal/oregon-city-junk-removal-team.webp',
        width: 1200,
        height: 630,
        alt: 'AS Junk Removal team serving Maple Lane tree-lined community in Oregon City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Junk Removal Service in Maple Lane, Oregon City - Tree-Lined Neighborhood Specialists',
    description: 'Leading junk removal service in Maple Lane, Oregon City. Tree-lined neighborhood specialists.',
    images: ['/images/junk-removal/oregon-city-junk-removal-team.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/maple-lane-junk-removal',
  },
}

export default function MapleLaneJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Junk Removal{' '}
                <span className="text-gradient">Maple Lane</span>
                {' '}<span className="text-2xl md:text-3xl font-normal">Oregon City</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                #1 rated junk removal service in charming Maple Lane, Oregon City.
                As tree-lined neighborhood specialists, we understand the distinctive residential character
                and community values that make Maple Lane a cherished Oregon City neighborhood since 2018.
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
                alt="AS Junk Removal professional team providing Maple Lane tree-lined neighborhood junk removal services in Oregon City"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Maple Lane Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Maple Lane's Tree-Lined Neighborhood Since 2018
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Maple Lane occupies a special place in Oregon City's residential landscape,
              where classic neighborhood living meets the beauty of mature maple trees in
              a community that celebrates both familiar residential traditions and natural elegance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">About Maple Lane Tree-Lined Neighborhood</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Classic residential neighborhood with tree-lined streets
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mature maple trees and established landscaping features
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Family-oriented residential community with charming curb appeal
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Seasonal maple tree beauty and natural landscape changes
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Neighborhood atmosphere celebrating residential familiarity and natural beauty</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Why Maple Lane Trusts AS Junk Removal</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Understanding of classic neighborhood residential character
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Respect for mature maple trees and established landscaping
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Appreciation for family-oriented neighborhood traditions and values
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Commitment to maintaining Maple Lane's charming residential atmosphere
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Partnership with tree-lined neighborhood community since our founding</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Maple Lane Tree-Lined Neighborhood Coverage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>• Maple Lane tree-lined residential area</div>
              <div>• Maple tree neighborhood properties</div>
              <div>• Classic residential community districts</div>
              <div>• Family-oriented neighborhood blocks</div>
              <div>• Mature landscaping residential zones</div>
              <div>• Charming neighborhood living areas</div>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              Complete coverage of Maple Lane's tree-lined neighborhood, serving homes that embrace Oregon City's classic residential heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Maple Lane Residential Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Maple Lane Tree-Lined Residential Cleanup Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our services are specifically designed for Maple Lane's classic neighborhood character,
              understanding how maple trees, residential charm, and community values
              create unique service needs in our tree-lined residential community.
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
                Classic Residential Cleanouts
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized residential cleanout services for Maple Lane's classic homes.
                Understanding charming layouts, mature maple landscaping, and neighborhood
                configurations that define our tree-lined residential community's character.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Classic residential cleaning services</li>
                <li>• Maple Lane property organization</li>
                <li>• Charming neighborhood preservation</li>
                <li>• Tree-lined residence preparation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Mature Maple Landscape Care
              </h3>
              <p className="text-gray-600 mb-4">
                Expert handling of Maple Lane's mature maple trees and established gardens.
                Managing seasonal maple leaf waste, established tree maintenance, and residential
                landscaping while respecting our classic neighborhood's mature natural features.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Mature maple landscape debris management</li>
                <li>• Classic tree maintenance waste collection</li>
                <li>• Seasonal residential yard landscaping</li>
                <li>• Neighborhood tree preservation care</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Tree-Lined Renovation Neighborhood Support
              </h3>
              <p className="text-gray-600 mb-4">
                Professional construction debris removal services for Maple Lane renovations.
                Coordinating with local contractors while maintaining maple trees and classic
                residential standards that define our charming neighborhood community.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Classic neighborhood renovation cleanup</li>
                <li>• Maple Lane construction waste</li>
                <li>• Charming residence renovation support</li>
                <li>• Tree-lined-respectful debris removal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Maple Lane Neighborhood Heritage Focus */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Honoring Maple Lane's Tree-Lined Neighborhood Heritage
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Maple Lane represents Oregon City's classic residential tradition,
              where maple trees create natural archways and neighborhood charm becomes the foundation
              that defines our community's unique blend of residential familiarity and natural elegance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🌳</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Classic Maple Partnership</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Working in harmony with Maple Lane's mature maple trees and established neighborhood landscape characteristics.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Residential Charm Excellence</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Dedicated to serving properties that represent the finest residential charm and maple-grove heritage in our community.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Neighborhood Tradition Partnership</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Proud partnership with Maple Lane residents to maintain and enhance our tree-lined neighborhood residential excellence.
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
              Maple Lane Tree-Lined Residential Community Recognition
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Hearing from Maple Lane's tree-lined residential community members about their neighborhood living experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Living on Maple Lane means living under a canopy of beautiful mature maple trees that turn the neighborhood into a autumn wonderland.
                The cleanup team understood our classic neighborhood living perfectly. They navigated carefully around our treasured maple trees, handled seasonal
                leaf cleanup with neighborhood charm in mind, and treated our classic homes with the residential respect they deserve. They're true neighborhood specialists who get our tree-lined lifestyle."
              </p>
              <p className="text-sm font-semibold text-gray-900">- The Anderson Family, Maple Lane Neighborhood Tradition Keepers</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Maple Lane is all about classic Oregon residential living - charming homes, mature trees, and neighborhood traditions that go back generations.
                When our classic neighborhood renovation created careful construction wastes, they understood both the maple tree protection we require and the charming
                residential character we wanted to preserve. Their service matched our neighborhood standards perfectly. Exceptional for our tree-lined residential community."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Residential Architectural Team, Maple Lane Design Professionals</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "The Maple Lane Neighborhood Association stewards our tree-lined paradise - from classic residential streets to maple tree canopy preservation.
                These service professionals consistently deliver - from handling seasonal maple leaf cleanup to managing neighborhood residential projects -
                they understand how vital our mature trees and charming homes are to our community. They've become our trusted partners in maintaining what makes Maple Lane extraordinary."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Maple Lane Neighborhood Association, Residential Tradition Guardians</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Maple Lane Tree-Lined Residential Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How does service account for Maple Lane's tree-lined character?
              </h3>
              <p className="text-gray-600">
                Maple Lane's tree-lined character is fundamental to our service approach. We have specialized equipment for residential access, experience maneuvering around mature maple trees, understanding seasonal leaf cycles, and awareness of classic neighborhood residential features. Our crews are trained for tree-lined service and know how to maintain residential standards while protecting natural beauty.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about protecting Maple Lane's mature maple trees?
              </h3>
              <p className="text-gray-600">
                Maple tree protection is central to Maple Lane service. We work carefully to maintain the natural beauty of our tree-lined streets, protect mature tree roots from damage during service, understand how our equipment might affect tree health, and implement protection procedures that preserve the maple canopy that makes our neighborhood so valuable and charming.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do you handle classic residential and neighborhood features?
              </h3>
              <p className="text-gray-600">
                Classic residential expertise is essential for Maple Lane service. We understand the special requirements of charming older homes, tree-lined curb appeal maintenance, traditional landscaping preservation, and residential features that define classic neighborhood character. Our techniques and materials are selected to match or exceed the residential charm standards that define tree-lined neighborhood excellence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much does tree-lined residential junk removal cost in Maple Lane?
              </h3>
              <p className="text-gray-600">
                Maple Lane classic residential projects range from $180-450 for tree-lined neighborhood cleanouts to $1000-1400 for charming renovation projects in established properties. We provide free personalized estimates that consider the maple tree preservation requirements, classic residential layouts, neighborhood charm considerations, and the residential tradition standards that define our tree-lined community. Every estimate reflects our understanding of classic neighborhood living requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about seasonal maple considerations and traditional neighborhood maintenance?
              </h3>
              <p className="text-gray-600">
                Seasonal maple considerations are a crucial factor in Maple Lane service. Our scheduling adapts to maple tree leaf cycles, traditional neighborhood maintenance seasons, residential charm preservation needs, and classic property upkeep timing. We coordinate service delivery around maple tree care requirements, implement protection protocols for our mature trees and charming neighborhood features, and maintain consistent service quality throughout all seasons of classic neighborhood living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Maple Lane's Tree-Lined Residential Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join the Maple Lane tree-lined residential community who trust us for their classic cleanup needs.
            Same-day service available throughout our charming neighborhood area. Call now or get your tree-lined residential quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Maple Lane Quote
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329 Now
            </a>
          </div>
          <div className="mt-8 text-primary-100">
            <p className="text-lg font-semibold">Maple Lane Tree-Lined Residential Service • Licensed & Insured • Same-Day Service Available</p>
            <p className="text-sm mt-2">Serving Maple Lane's Classic Neighborhood & Oregon City Residential Heritage Since 2018</p>
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
            "description": "Classic tree-lined residential community junk removal services in Maple Lane, Oregon City, OR",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Oregon City",
              "addressRegion": "OR",
              "addressCountry": "US"
            },
            "telephone": "(503) 753-2329",
            "url": "https://asjunkremoval.com/maple-lane-junk-removal",
            "serviceArea": {
              "@type": "Place",
              "name": "Maple Lane, Oregon City, OR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "390"
            },
            "openingHours": "Mo-Su",
            "serviceType": "Junk Removal Services",
            "areaServed": "Maple Lane, Oregon City, OR"
          })
        }}
      />
    </div>
  )
}
