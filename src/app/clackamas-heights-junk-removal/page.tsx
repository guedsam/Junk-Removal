import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '#1 Junk Removal Service in Clackamas Heights, Oregon City - County Seat Specialists | AS Junk Removal',
  description: 'Leading junk removal service in Clackamas Heights, Oregon City. County seat specialists, civic pride cleanup, municipal service cleanup, transparent pricing. Call (503) 753-2329. Serving Clackamas Heights residents since 2018.',
  keywords: 'Clackamas Heights junk removal, junk removal Clackamas Heights Oregon City, junk hauler Clackamas Heights, same day junk removal Clackamas Heights, county seat junk removal Clackamas Heights OR, Clackamas Heights civic pride specialists junk removal',
  openGraph: {
    title: '#1 Junk Removal Service in Clackamas Heights, Oregon City - County Seat Specialists',
    description: 'Leading junk removal service in Clackamas Heights, Oregon City. County seat specialists with civic pride expertise.',
    url: 'https://asjunkremoval.com/clackamas-heights-junk-removal',
    siteName: 'AS Junk Removal',
    images: [
      {
        url: '/images/junk-removal/oregon-city-junk-removal-team.webp',
        width: 1200,
        height: 630,
        alt: 'AS Junk Removal team serving Clackamas Heights county seat community in Oregon City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Junk Removal Service in Clackamas Heights, Oregon City - County Seat Specialists',
    description: 'Leading junk removal service in Clackamas Heights, Oregon City. County seat specialists.',
    images: ['/images/junk-removal/oregon-city-junk-removal-team.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/clackamas-heights-junk-removal',
  },
}

export default function ClackamasHeightsJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Junk Removal{' '}
                <span className="text-gradient">Clackamas Heights</span>
                {' '}<span className="text-2xl md:text-3xl font-normal">Oregon City</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                #1 rated junk removal service in civic Clackamas Heights, Oregon City.
                As county seat specialists, we understand the distinctive municipal character
                and civic pride that makes Clackamas Heights exceptional since 2018.
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
                alt="AS Junk Removal professional team providing Clackamas Heights county seat junk removal services in Oregon City"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Clackamas Heights Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Clackamas Heights' County Seat Community Since 2018
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Clackamas Heights holds the proud distinction of being the seat of Clackamas County
              government, where municipal excellence meets residential living in a community
              that embodies the spirit of local governance and civic responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">About Clackamas Heights County Seat District</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Official seat of Clackamas County government
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Municipal buildings and county administration facilities
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Historic civic architecture and public buildings
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Government offices and municipal service providers
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Community atmosphere reflecting civic responsibility and municipal excellence</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Why Clackamas Heights Trusts AS Junk Removal</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Understanding of municipal operations and government schedules
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Experience with county facilities and public building requirements
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Respect for civic pride and community governance standards
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Knowledge of municipal service coordination and regulatory compliance
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Partnership with county seat community since our founding</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Clackamas Heights County Seat Coverage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>• Clackamas Heights municipal area</div>
              <div>• County government administrative neighborhoods</div>
              <div>• Civic pride residential districts</div>
              <div>• Government building service communities</div>
              <div>• Municipal excellence property zones</div>
              <div>• County seat residential areas</div>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              Complete coverage of Clackamas Heights' county seat community, serving neighborhoods that exemplify Oregon City's civic heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Clackamas Heights Municipal Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Clackamas Heights County Seat Residential Cleanup Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our services are specifically designed for Clackamas Heights' municipal character,
              understanding how county government operations, civic responsibility, and local governance
              create unique service needs in our county seat community.
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
                Municipal Residential Cleanouts
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized residential cleanout services for Clackamas Heights county seat homes.
                Understanding municipal layouts, government-adjacent properties, and civic community
                configurations that define our county government's residential environment.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Municipal residential cleaning services</li>
                <li>• County seat property organization</li>
                <li>• Civic pride heritage preservation</li>
                <li>• Government adjacent residence preparation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Civic Pride Landscape Maintenance
              </h3>
              <p className="text-gray-600 mb-4">
                Expert handling of Clackamas Heights' municipal landscape and community features.
                Managing county seat yard waste, government-adjacent properties, and civic landscaping
                while respecting our community's governmental excellence standards.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Municipal landscape debris management</li>
                <li>• County seat yard waste collection</li>
                <li>• Civic community landscape maintenance</li>
                <li>• Government excellence landscape preservation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                County Seat Renovation Civic Support
              </h3>
              <p className="text-gray-600 mb-4">
                Professional construction debris removal services for Clackamas Heights municipal renovations.
                Coordinating with county contractors while maintaining municipal character
                and civic excellence standards that define our county seat.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Municipal renovation cleanup</li>
                <li>• County seat construction waste</li>
                <li>• Civic pride renovation support</li>
                <li>• Government-respectful debris removal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Clackamas Heights Municipal Heritage Focus */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Honoring Clackamas Heights' County Seat Heritage
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Clackamas Heights represents the administrative heart of Clackamas County,
              where municipal excellence and civic responsibility create the governmental
              foundation that serves our entire county and defines our community's governmental legacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">County Seat Administrative Partnership</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Working in harmony with Clackamas Heights' county government facilities and municipal administrative goals.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Municipal Excellence Service</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Dedicated to serving properties that represent the finest municipal administration and governmental quality.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Civic Pride Community Partnership</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Proud partnership with Clackamas Heights residents to maintain and enhance our county seat's civic excellence.
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
              Clackamas Heights County Seat Community Recognition
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Hearing from Clackamas Heights' county seat community members about their civic experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Living in Clackamas Heights means we take civic responsibility seriously - this is the county seat! Our home renovation cleanup team
                understood municipal operations perfectly. They coordinated around county office hours, handled government-adjacent construction waste,
                and maintained the civic standards we expect in our county seat community. They're true municipal specialists."
              </p>
              <p className="text-sm font-semibold text-gray-900">- The Williamson Family, County Seat Community Leaders</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Clackamas Heights is all about civic excellence - county government facilities, professional administration, and community pride.
                When our county-adjacent property needed major cleanup, they understood both the municipal scheduling we coordinate with and the governmental
                standards we maintain. Their service matched our civic pride perfectly. Exceptional for our county seat community."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Civic Development Professionals, County Seat Advisors</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "The Clackamas Heights Civic Association stewards our county seat heritage - from government building maintenance to community civic events.
                These service professionals consistently deliver - from coordinating around municipal schedules to maintaining civic presentation standards -
                they understand how vital our county seat status is to our community. They've become our trusted partners in maintaining what makes Clackamas Heights exceptional."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Clackamas Heights Civic Association, Municipal Heritage Guardians</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Clackamas Heights County Seat Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How does service account for Clackamas Heights' municipal character?
              </h3>
              <p className="text-gray-600">
                Clackamas Heights' municipal character is fundamental to our service approach. We coordinate with county government schedules, understand municipal facility operations, respect civic presentation standards, and work with professional governmental coordination. Our crews are trained for county seat service and understand the professional standards that define our municipal community.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about protecting civic pride and municipal presentation?
              </h3>
              <p className="text-gray-600">
                Civic pride preservation is central to Clackamas Heights service. We maintain professional presentation standards that match municipal excellence, coordinate service activities to minimize impact on county operations, work carefully around official facilities and public access, and implement protocols that preserve the county seat's professional governmental image.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do you handle municipal materials and government property features?
              </h3>
              <p className="text-gray-600">
                Municipal material expertise is essential for Clackamas Heights service. We understand county facility specifications, handle municipal construction materials appropriately, work with government procurement standards, and coordinate with county facility management requirements. Our approach meets or exceeds the governmental standards that define county seat service quality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much does county seat junk removal cost in Clackamas Heights?
              </h3>
              <p className="text-gray-600">
                Clackamas Heights municipal projects range from $200-450 for county seat residential cleanouts to $1200-1600 for government-adjacent or municipal facility renovations. We provide free personalized estimates that consider the county seat nature of Clackamas Heights properties, municipal coordination requirements, civic presentation standards, and the governmental excellence standards that define our county capital. Every estimate reflects our understanding of municipal property requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about coordination with county services and municipal scheduling?
              </h3>
              <p className="text-gray-600">
                Municipal coordination is essential in our county seat community. We work around county government office hours, coordinate with municipal service providers, maintain schedules that don't conflict with civic operations, and implement protocols for official county facility support. Our approach demonstrates the professional coordination that reflects Clackamas Heights' position as county government center.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Clackamas Heights' County Seat Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join the Clackamas Heights county seat community who trust us for their civic cleanup needs.
            Same-day service available throughout our municipal excellence area. Call now or get your county seat quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Clackamas Heights Quote
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329 Now
            </a>
          </div>
          <div className="mt-8 text-primary-100">
            <p className="text-lg font-semibold">Clackamas Heights County Seat Service • Licensed & Insured • Same-Day Service Available</p>
            <p className="text-sm mt-2">Serving Clackamas Heights' Municipal Community & Oregon City County Government Since 2018</p>
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
            "description": "County seat municipal residence and civic pride junk removal services in Clackamas Heights, Oregon City, OR",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Oregon City",
              "addressRegion": "OR",
              "addressCountry": "US"
            },
            "telephone": "(503) 753-2329",
            "url": "https://asjunkremoval.com/clackamas-heights-junk-removal",
            "serviceArea": {
              "@type": "Place",
              "name": "Clackamas Heights, Oregon City, OR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "370"
            },
            "openingHours": "Mo-Su",
            "serviceType": "Junk Removal Services",
            "areaServed": "Clackamas Heights, Oregon City, OR"
          })
        }}
      />
    </div>
  )
}
