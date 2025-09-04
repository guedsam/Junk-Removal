import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '#1 Junk Removal Service in Caufield, Oregon City - Residential Community Experts | AS Junk Removal',
  description: 'Premier junk removal service in Caufield, Oregon City. Residential community specialists, eco-friendly disposal, honest pricing. Call (503) 753-2329. Serving Caufield homeowners since 2018.',
  keywords: 'Caufield junk removal, junk removal Caufield Oregon City, junk hauler Caufield, same day junk removal Caufield, residential junk removal Caufield, eco-friendly junk removal Caufield OR, Caufield neighborhood junk removal, Caufield home cleanout',
  openGraph: {
    title: '#1 Junk Removal Service in Caufield, Oregon City - Residential Community Experts',
    description: 'Premier junk removal service in Caufield, Oregon City. Residential community specialists with care for your neighborhood.',
    url: 'https://asjunkremoval.com/caufield-junk-removal',
    siteName: 'AS Junk Removal',
    images: [
      {
        url: '/images/junk-removal/oregon-city-junk-removal-team.webp',
        width: 1200,
        height: 630,
        alt: 'AS Junk Removal team serving Caufield residential neighborhood in Oregon City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Junk Removal Service in Caufield, Oregon City - Residential Community Experts',
    description: 'Premier junk removal service in Caufield, Oregon City. Residential community specialists.',
    images: ['/images/junk-removal/oregon-city-junk-removal-team.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/caufield-junk-removal',
  },
}

export default function CaufieldJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Junk Removal{' '}
                <span className="text-gradient">Caufield</span>
                {' '}<span className="text-2xl md:text-3xl font-normal">Oregon City</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                #1 rated junk removal service in residential Caufield, Oregon City.
                Proud to serve this established community with professional,
                residential-focused cleanup services tailored to your neighborhood lifestyle.
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
                alt="AS Junk Removal professional team providing residential Caufield neighborhood junk removal services in Oregon City"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Caufield Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Residential Caufield Since 2018
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Caufield is one of Oregon City's most established residential neighborhoods,
              characterized by beautiful homes, well-maintained streets, and a genuine
              community spirit. We take pride in being the trusted junk removal partner
              for Caufield homeowners, understanding what matters most to our neighbors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">About Caufield Neighborhood</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Established residential community with mature landscaping
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mix of single-family homes and small multi-unit buildings
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Quiet streets and beautiful residential architecture
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Excellent neighbors and strong community bonds
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Proximity to local amenities and downtown Oregon City
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Why Caufield Trusts AS Junk Removal</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Deep understanding of Caufield's residential character
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Respect for neighbors and community standards
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Quiet, efficient service that minimizes disturbance
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Family-owned business commitment to our community
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Same-day service tailored to Caufield residents
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Caufield Residential Service Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>• Caufield's residential streets</div>
              <div>• Mature neighborhood blocks</div>
              <div>• Single-family home districts</div>
              <div>• Multi-unit residential complexes</div>
              <div>• Quiet residential corridors</div>
              <div>• Established home neighborhoods</div>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              Comprehensive residential junk removal throughout Caufield, designed to fit your neighborhood lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Caufield Residential Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Residential Caufield Cleanout Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every Caufield home is unique, and we tailor our residential junk removal
              services to respect your home, your neighborhood, and your peace of mind.
              We handle everything from small cleanups to complete home renovations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Home Cleanout Specialists
              </h3>
              <p className="text-gray-600 mb-4">
                Complete home cleanout services for Caufield residential properties.
                Whether you're moving, downsizing, or simply decluttering, we handle
                everything with care and respect for your home and neighbors.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Comprehensive home sorting</li>
                <li>• Living room and bedroom cleanouts</li>
                <li>• Kitchen and dining area clearing</li>
                <li>• Bathroom fixture removal</li>
                <li>• Storage area organization</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Garage & Basement Cleanouts
              </h3>
              <p className="text-gray-600 mb-4">
                Specializing in garage and basement cleanouts in Caufield homes.
                These spaces accumulate decades of items, and we handle every
                category with our professional organization and disposal expertise.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Seasonal equipment storage</li>
                <li>• Old furniture and appliances</li>
                <li>• Hobby and recreational items</li>
                <li>• Holiday decorations</li>
                <li>• Inherited family belongings</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Renovation Waste Cleanup
              </h3>
              <p className="text-gray-600 mb-4">
                Professional cleanup after Caufield home renovations. Kitchen remodels,
                bathroom updates, flooring replacement projects - we handle all the
                construction debris and renovation waste properly and efficiently.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Kitchen renovation debris</li>
                <li>• Bathroom remodel cleanup</li>
                <li>• Flooring replacement waste</li>
                <li>• Old fixture removal</li>
                <li>• Construction material disposal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Caufield Community Focus */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Supporting Caufield's Residential Excellence
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Caufield has earned its reputation as one of Oregon City's finest
              residential neighborhoods, and we're honored to provide the
              cleanup services this community deserves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Residential Focus</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Specialized residential junk removal services designed specifically for Caufield's established home neighborhoods.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Neighbor Respect</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Understanding Caufield HOA guidelines, parking considerations, and community standards unique to our neighborhood.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Local Commitment</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Long-term commitment to Caufield residents, built on trust, honesty, and exceptional neighborhood service.
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
              Caufield Residential Community Trust
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Caufield homeowners share their experiences with our residential neighborhood service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Living in Caufield for 30 years, we've seen many service providers come and go. AS Junk Removal stands out -
                they truly understand what makes our residential community special. Quiet, efficient, and respectful service every time."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Linda & Robert S., Caufield Residents Since 1994</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Our Caufield home renovation left us with so much debris. They came promptly, handled everything efficiently,
                and were extremely respectful of our neighbors on this quiet residential street. Couldn't ask for better local service!"
              </p>
              <p className="text-sm font-semibold text-gray-900">- The Martinez Family, Recent Caufield Renovators</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "After inheriting my parents' Caufield home, I needed professional help with the cleanout. They were compassionate,
                thorough, and completely understanding of the emotional aspects. Trustworthy service that honors our community values."
              </p>
              <p className="text-sm font-semibold text-gray-900">- James W., Caufield Estate Executor</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Caufield Residential Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you understand Caufield's residential character?
              </h3>
              <p className="text-gray-600">
                Absolutely. As longtime Oregon City residents ourselves, we deeply understand Caufield's residential nature - its quiet streets, mature landscaping, established homes, and strong community bonds. We serve with the same respect this neighborhood deserves.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do you ensure minimal disturbance to Caufield neighbors?
              </h3>
              <p className="text-gray-600">
                We plan our Caufield residential services with neighbor consideration as a priority. This includes strategic parking, minimal noise levels, efficient team coordination, and clear communication with nearby residents. Our residential experience shows in our quiet, professional approach.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What types of projects do Caufield homeowners hire you for most?
              </h3>
              <p className="text-gray-600">
                Caufield residents most commonly hire us for residential cleanouts, garage organization, estate cleanouts, renovation debris removal, and ongoing maintenance cleanups. These established homes often need specialized handling of accumulated possessions from decades of family living.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much does junk removal cost in Caufield neighborhoods?
              </h3>
              <p className="text-gray-600">
                Caufield residential projects range from $150-350 for small residential cleanouts to $700-1200 for large home renovations or estate cleanouts. Every project gets a free personalized estimate reflecting Caufield's specific housing style and neighborhood characteristics.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you handle special items from Caufield homes, like antiques or collections?
              </h3>
              <p className="text-gray-600">
                Yes, Caufield homeowners often have family heirlooms, antique furniture, and special collections. We handle these precious items with extra care and respect, offering arrangements for antique dealer consultations, family preservation options, and proper storage solutions as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Residential Caufield Excellence?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join the Caufield homeowners who trust us for their residential junk removal needs.
            Same-day service available throughout our beautiful neighborhood. Call now or get your free online quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Caufield Quote
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329 Now
            </a>
          </div>
          <div className="mt-8 text-primary-100">
            <p className="text-lg font-semibold">Caufield Residential Junk Removal • Licensed & Insured • Same-Day Service Available</p>
            <p className="text-sm mt-2">Supporting Caufield Residents & All Oregon City Neighborhoods Since 2018</p>
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
            "description": "Residential junk removal services in Caufield, Oregon City, OR",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Oregon City",
              "addressRegion": "OR",
              "addressCountry": "US"
            },
            "telephone": "(503) 753-2329",
            "url": "https://asjunkremoval.com/caufield-junk-removal",
            "serviceArea": {
              "@type": "Place",
              "name": "Caufield, Oregon City, OR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "195"
            },
            "openingHours": "Mo-Su",
            "serviceType": "Junk Removal Services",
            "areaServed": "Caufield, Oregon City, OR"
          })
        }}
      />
    </div>
  )
}
