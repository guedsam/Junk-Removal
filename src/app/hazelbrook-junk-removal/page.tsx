import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '#1 Junk Removal Service in Hazelbrook, Oregon City - Waterfall District Specialists | AS Junk Removal',
  description: 'Leading junk removal service in Hazelbrook, Oregon City. Willamette Falls community specialists, eco-friendly disposal, transparent pricing. Call (503) 753-2329. Serving Hazelbrook residents since 2018.',
  keywords: 'Hazelbrook junk removal, junk removal Hazelbrook Oregon City, junk hauler Hazelbrook, same day junk removal Hazelbrook, eco-friendly junk removal Hazelbrook, Willamette Falls junk removal Hazelbrook OR, Hazelbrook waterfall district junk removal',
  openGraph: {
    title: '#1 Junk Removal Service in Hazelbrook, Oregon City - Waterfall District Specialists',
    description: 'Leading junk removal service in Hazelbrook, Oregon City. Willamette Falls community specialists with waterfall district expertise.',
    url: 'https://asjunkremoval.com/hazelbrook-junk-removal',
    siteName: 'AS Junk Removal',
    images: [
      {
        url: '/images/junk-removal/oregon-city-junk-removal-team.webp',
        width: 1200,
        height: 630,
        alt: 'AS Junk Removal team serving Hazelbrook waterfall district in Oregon City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Junk Removal Service in Hazelbrook, Oregon City - Waterfall District Specialists',
    description: 'Leading junk removal service in Hazelbrook, Oregon City. Willamette Falls community specialists.',
    images: ['/images/junk-removal/oregon-city-junk-removal-team.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/hazelbrook-junk-removal',
  },
}

export default function HazelbrookJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Junk Removal{' '}
                <span className="text-gradient">Hazelbrook</span>
                {' '}<span className="text-2xl md:text-3xl font-normal">Oregon City</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                #1 rated junk removal service in beautiful Hazelbrook, Oregon City.
                As Willamette Falls community specialists, we understand the unique lifestyle
                and property needs of this historic waterfall district with exceptional care since 2018.
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
                alt="AS Junk Removal professional team providing Willamette Falls district junk removal services in Hazelbrook, Oregon City"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Hazelbrook Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Hazelbrook's Willamette Falls Community Since 2018
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Hazelbrook is a cherished gem in Oregon City's crown, situated in the historic Willamette Falls area.
              Known for its proximity to the iconic Willamette Falls, mature landscape, and established homes,
              Hazelbrook represents the very best of Oregon City living with a distinctive waterfall district charm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">About Hazelbrook Waterfall District</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Historic Willamette Falls district location
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Proximity to world-famous Willamette Falls attraction
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mature landscape with established trees and gardens
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Sophisticated yet relaxed community atmosphere
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Prime location near Oregon City's historic downtown</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Why Hazelbrook Residents Choose AS Junk Removal</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Experience with historic Willamette Falls district properties
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Respect for mature landscape and established gardens
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Understanding of waterfall district community standards
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Quiet, sophisticated service matching community expectations
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Gentlewoman and gentleman approach to every neighbor</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Hazelbrook Waterfall District Coverage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>• Hazelbrook proper village</div>
              <div>• Willamette Falls vicinity</div>
              <div>• Historic district boundaries</div>
              <div>• Waterfall view areas</div>
              <div>• Established residential blocks</div>
              <div>• Mature neighborhood streetscapes</div>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              Comprehensive coverage of Hazelbrook and the surrounding Willamette Falls area, understanding the unique character of this historic Oregon City neighborhood.
            </p>
          </div>
        </div>
      </section>

      {/* Hazelbrook Specialty Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hazelbrook Willamette Falls Community Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our services are specifically tailored for Hazelbrook's unique position as a gateway
              to the Willamette Falls experience, supporting our community's distinctive character
              while maintaining the sophisticated standards our neighbors expect.
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
                Historic Property Cleanouts
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized services for Hazelbrook's established homes. From Victorian era homes
                to mid-century modern properties, we understand the architectural significance
                and residential character of our community's historic properties.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Historic home preservation</li>
                <li>• Vintage property maintenance</li>
                <li>• Architectural sensitivity</li>
                <li>• Heritage building respect</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Mature Landscape Cleanup
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized handling of Hazelbrook's mature landscape waste. Our community features
                established gardens, substantial trees, and landscape features that require
                knowledgeable handling to preserve the district's natural beauty.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Established garden cleanup</li>
                <li>• Mature tree fall maintenance</li>
                <li>• Landscape debris removal</li>
                <li>• Seasonal garden preparation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Willamette Falls District Renovations
              </h3>
              <p className="text-gray-600 mb-4">
                Handling construction debris from Hazelbrook renovations with sensitivity to
                historic district regulations. We understand the balance between modern updates
                and preserving the community's architectural heritage near the Falls.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Historic district compliant removal</li>
                <li>• Architectural preservation sensitive</li>
                <li>• Renovation waste management</li>
                <li>• Community standard maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hazelbrook Waterfall Community Focus */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Honoring Hazelbrook's Willamette Falls Heritage
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Hazelbrook represents a special place where modern Oregon City living meets
              natural wonder. Our services reflect the sophistication and natural beauty
              that make Hazelbrook such a coveted community to call home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏞️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Willamette Falls Connection</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Personal connection to the iconic Willamette Falls and understanding Hazelbrook's special relationship to this natural wonder.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🌳</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Mature Community Respect</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Deep appreciation for Hazelbrook's established character and commitment to preserving the community's mature charm.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Heritage District Excellence</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Specialized service tailored for historic Oregon City districts with knowledge of preservation standards and community expectations.
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
              Hazelbrook Waterfall District Appreciation
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Reading from Hazelbrook residents and community members about their neighborhood junk removal experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Living so close to the Willamette Falls makes downtown Hazelbrook such a special place. When we needed help with
                our 1920s home renovation debris, they truly understood the historic significance of our property and handled
                everything with the care and respect our historic district deserves. Perfect for Hazelbrook living."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Margaret & Charles T., Preserving Historic Hazelbrook</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Our Hazelbrook home has such mature trees and established gardens - it's one of the reasons we fell in love with
                the neighborhood. When we needed help clearing fallen branches and garden waste, they treated our landscaping
                like it was their own, preserving every meaningful element. Truly neighborhood specialists."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Julia & Robert M., Hazaelbrook Green Space Protectors</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "As lifelong Hazelbrook residents near the Willamette Falls, we've seen many changes to our community over the years.
                This service understands what makes Hazelbrook special - that perfect balance of natural beauty and modern living.
                They bring sophistication and care that matches our district's character beautifully."
              </p>
              <p className="text-sm font-semibold text-gray-900">- The Anderson Family, Five Generations of Hazelbrook Living</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hazelbrook Waterfall District Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you understand the historic aspects of Hazelbrook?
              </h3>
              <p className="text-gray-600">
                Absolutely. Hazelbrook is situated in the historic Willamette Falls district, and we have extensive experience working with properties of all historical periods. We know the importance of preserving architectural details, respecting mature landscaping, and maintaining the sophisticated character that makes Hazelbrook such a coveted community location.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do you handle the mature landscaping in Hazelbrook?
              </h3>
              <p className="text-gray-600">
                Our team has specialized knowledge of Hazelbrook's mature trees, established gardens, and landscape features. We handle all landscape waste with respect for the district's natural beauty, ensuring that our cleanup work enhances rather than detracts from the neighborhood's established charm. This includes proper handling of fallen leaves, branches, and garden maintenance waste.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What makes service different in the Willamette Falls district?
              </h3>
              <p className="text-gray-600">
                The Willamette Falls district requires a special understanding of historic preservation standards, environmental sensitivity (due to the Falls' proximity), and community character expectations. Our service adapts to these unique requirements with sophisticated methods, quiet operations, and appreciation for Hazelbrook's special place in Oregon City's history.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much does junk removal cost in Hazelbrook?
              </h3>
              <p className="text-gray-600">
                Hazelbrook service rates range from $150-400 for small residential cleanouts to $800-1300 for larger property renovations. We provide free personalized estimates and understand that Hazelbrook properties often have unique characteristics due to their historic location near the Willamette Falls - every quote reflects this special context.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you have experience with Hazelbrook's home styles?
              </h3>
              <p className="text-gray-600">
                We work with all types of Hazelbrook properties - from Victorian era homes to modern contemporary builds. Our experience includes understanding space limitations, architectural preservation requirements, and the specific cleanup logistics required for properties in the historic Willamette Falls district. We handle every style with the appropriate level of care and sophistication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Hazelbrook's Premier Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join the Hazelbrook residents who trust us for their Willamette Falls district cleanup needs.
            Same-day service available throughout our historic waterfall community. Call now or get your free quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Hazelbrook Quote
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329 Now
            </a>
          </div>
          <div className="mt-8 text-primary-100">
            <p className="text-lg font-semibold">Hazelbrook Willamette Falls District • Licensed & Insured • Same-Day Service Available</p>
            <p className="text-sm mt-2">Serving Hazelbrook's Historic Waterfall Community & All Oregon City Neighborhoods Since 2018</p>
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
            "description": "Historic Willamette Falls district junk removal services in Hazelbrook, Oregon City, OR",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Oregon City",
              "addressRegion": "OR",
              "addressCountry": "US"
            },
            "telephone": "(503) 753-2329",
            "url": "https://asjunkremoval.com/hazelbrook-junk-removal",
            "serviceArea": {
              "@type": "Place",
              "name": "Hazelbrook, Oregon City, OR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "225"
            },
            "openingHours": "Mo-Su",
            "serviceType": "Junk Removal Services",
            "areaServed": "Hazelbrook, Oregon City, OR"
          })
        }}
      />
    </div>
  )
}
