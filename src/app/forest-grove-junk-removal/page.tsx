import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '#1 Junk Removal Service in Forest Grove, Oregon City - Woodland Estate Specialists | AS Junk Removal',
  description: 'Leading junk removal service in Forest Grove, Oregon City. Woodland estate specialists, forested property cleanup, natural debris removal, transparent pricing. Call (503) 753-2329. Serving Forest Grove residents since 2018.',
  keywords: 'Forest Grove junk removal, junk removal Forest Grove Oregon City, junk hauler Forest Grove, same day junk removal Forest Grove, woodland estate junk removal Forest Grove OR, Forest Grove forested property specialists junk removal',
  openGraph: {
    title: '#1 Junk Removal Service in Forest Grove, Oregon City - Woodland Estate Specialists',
    description: 'Leading junk removal service in Forest Grove, Oregon City. Woodland estate specialists with forested property expertise.',
    url: 'https://asjunkremoval.com/forest-grove-junk-removal',
    siteName: 'AS Junk Removal',
    images: [
      {
        url: '/images/junk-removal/oregon-city-junk-removal-team.webp',
        width: 1200,
        height: 630,
        alt: 'AS Junk Removal team serving Forest Grove woodland estate community in Oregon City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Junk Removal Service in Forest Grove, Oregon City - Woodland Estate Specialists',
    description: 'Leading junk removal service in Forest Grove, Oregon City. Woodland estate specialists.',
    images: ['/images/junk-removal/oregon-city-junk-removal-team.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/forest-grove-junk-removal',
  },
}

export default function ForestGroveJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Junk Removal{' '}
                <span className="text-gradient">Forest Grove</span>
                {' '}<span className="text-2xl md:text-3xl font-normal">Oregon City</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                #1 rated junk removal service in wooded Forest Grove, Oregon City.
                As woodland estate specialists, we understand the distinctive forested character
                and natural woodland setting that makes Forest Grove exceptional since 2018.
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
                alt="AS Junk Removal professional team providing Forest Grove woodland estate junk removal services in Oregon City"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Forest Grove Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Forest Grove's Woodland Estate Community Since 2018
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Forest Grove occupies a distinguished position in Oregon City's forested landscape,
              where woodland estates meet substantial residential properties in a community
              that celebrates both Oregon's rich arboricultural heritage and premium property living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">About Forest Grove Woodland Estate District</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Substantial wooded residential areas with mature forest settings
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Woodland estate properties and substantial homes in forest surroundings
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mix of luxury woodland homes and wooded residential developments
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Natural forested landscape with mature trees and woodland features
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Community atmosphere embracing Oregon's substantial forest legacy</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Why Forest Grove Trusts AS Junk Removal</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Experience with substantial woodland properties and estate requirements
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Understanding of forested property access and woodland terrain handling
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Respect for substantial forest landscapes and natural woodland preservation
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Commitment to serving considerable woodland community's premium living standards
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Partnership with substantial forest grove community since our founding</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Forest Grove Woodland Estate Coverage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>• Forest Grove substantial wooded area</div>
              <div>• Woodland estate residential neighborhoods</div>
              <div>• Mature forest property districts</div>
              <div>• Luxury wooded home communities</div>
              <div>• Natural landscape residence zones</div>
              <div>• Forest grove estate property areas</div>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              Complete coverage of Forest Grove's substantial woodland community, serving properties that embrace Oregon City's forest heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Forest Grove Woodland Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Forest Grove Woodland Estate Residential Cleanup Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our services are specifically designed for Forest Grove's substantial woodland character,
              understanding how forested properties, substantial landscape management, and woodland living
              create unique service needs in our premium forest estate community.
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
                Substantial Woodland Residential Cleanouts
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized residential cleanout services for Forest Grove's substantial woodland homes.
                Understanding forested layouts, substantial landscape features, and woodland estate
                configurations that define our premium forest grove residential environment.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Substantial woodland cleaning services</li>
                <li>• Forest grove property organization</li>
                <li>• Premium landscape heritage preservation</li>
                <li>• Woodland estate residence preparation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Luxury Forest Landscape Natural Care
              </h3>
              <p className="text-gray-600 mb-4">
                Expert handling of Forest Grove's substantial forest landscape and woodland features.
                Managing tremendous estate yard waste, substantial foliage, and forested terrain materials
                while respecting our community's considerable natural forest heritage preservation.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Substantial forest landscape debris management</li>
                <li>• Luxury woodland garden waste collection</li>
                <li>• Tremendous estate yard maintenance</li>
                <li>• Natural forest heritage landscape preservation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Woodland Estate Renovation Substantial Support
              </h3>
              <p className="text-gray-600 mb-4">
                Professional construction debris removal services for Forest Grove substantial woodland renovations.
                Coordinating with premium forestry contractors while maintaining considerable forest character
                and woodland estate standards that define our forested community excellence.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Substantial woodland renovation cleanup</li>
                <li>• Luxury forest estate construction waste</li>
                <li>• Premium heritage renovation support</li>
                <li>• Woodland-respectful debris removal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Forest Grove Woodland Heritage Focus */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Honoring Forest Grove's Substantial Woodland Heritage
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Forest Grove represents Oregon City's connection to its substantial forest heritage,
              where considerable wooded landscapes and forestry tradition create the foundation
              that defines our community's unique relationship with Oregon's natural forest legacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🌲</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Forest Grove Substantial Partnership</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Working in harmony with Forest Grove's considerable forest landscapes and substantial woodland terrain characteristics.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Luxury Woodland Living Excellence</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Dedicated to serving properties that represent the finest substantial woodland living and premium forest heritage.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Forest Heritage Community Partnership</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Proud partnership with Forest Grove residents to maintain and enhance our woodland estate's natural excellence.
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
              Forest Grove Substantial Woodland Estate Community Recognition
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Hearing from Forest Grove's substantial woodland estate community members about their forested living experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Living in Forest Grove means living among the substantial woodlands - our estate home has the most incredible forest panoramas with mature trees that create our own private arbor sanctuary.
                The cleanup team understood our woodland estate living perfectly. They navigated significant landscape features, handled heavy forest-related debris while protecting our mature landscape,
                and treated our substantial woodland home with the sophistication it deserves. They're true forest specialists who understand luxury woodland living."
              </p>
              <p className="text-sm font-semibold text-gray-900">- The Thornton Family, Forest Grove Panoramic Estate Owners</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Forest Grove is all about substantial woodland living - luxury forest estates, mature landscapes, and exceptional natural beauty.
                When our considerable woodland renovation created substantial debris, they understood both the premium forestry materials we're using and the extraordinary natural scenery
                we protect. Their service matched our woodland estate standards perfectly. Exceptional for our substantial forest community living."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Woodland Architectural Team, Forest Grove Design Professionals</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "The Forest Grove Natural Landscape Association stewards our substantial forest paradise - from mature woodland communities to natural arbor sanctuaries.
                These service professionals consistently deliver - from handling heavy mature tree cleanup to managing woodland construction projects -
                they understand how vital our substantial forest location is to our community. They've become our trusted partners in maintaining what makes Forest Grove extraordinary."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Forest Grove Landscape Association, Woodland Heritage Guardians</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Forest Grove Substantial Woodland Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How does service account for Forest Grove's substantial forested character?
              </h3>
              <p className="text-gray-600">
                Forest Grove's substantial forested character is fundamental to our service approach. We have specialized equipment for forest terrain, experience maneuvering considerable woodland access, understanding seasonal forestry patterns, and awareness of substantial landscape features. Our crews are trained for woodland estate challenges and know how to maintain service quality in forest environments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about protecting Forest Grove's considerable woodland vistas?
              </h3>
              <p className="text-gray-600">
                Woodland vista preservation is central to Forest Grove service. We work carefully to minimize visual impact during service, protect mature forest features from damage, understand how our equipment might affect wooded sightlines from estate properties, and implement cleanup procedures that preserve the considerable woodland beauty that makes our community so valuable.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do you handle substantial materials and woodland estate features?
              </h3>
              <p className="text-gray-600">
                Substantial material expertise is essential for Forest Grove service. We understand the special handling required for heavy-duty forest materials, premium woodland construction features, mature tree care, and considerable landscaping elements common in woodland estate homes. Our techniques and equipment are selected to match or exceed the substantial quality standards that define mature forest residential living.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much does substantial woodland junk removal cost in Forest Grove?
              </h3>
              <p className="text-gray-600">
                Forest Grove considerable projects range from $200-450 for substantial woodland residential cleanouts to $1300-1700 for high-end forest estate renovations in wooded properties. We provide free personalized estimates that consider the woodland nature of Forest Grove properties, forest terrain accessibility requirements, substantial material handling needs, and the premium forest estate standards that define our woodland community. Every estimate reflects our understanding of substantial forest property challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about seasonal forest cycles and environmental considerations?
              </h3>
              <p className="text-gray-600">
                Seasonal forest cycles are a significant factor in Forest Grove service. Our scheduling adapts to forestry harvest seasons, woodland maintenance periods, seasonal forest road conditions, and environment-sensitive construction timing. We coordinate service delivery around forest ecosystems, implement environmental protection protocols, and maintain consistent service quality throughout all phases of woodland life cycles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Forest Grove's Substantial Woodland Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join the Forest Grove woodland estate community who trust us for their substantial cleanup needs.
            Same-day service available throughout our considerable forest area. Call now or get your woodland estate quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Forest Grove Quote
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329 Now
            </a>
          </div>
          <div className="mt-8 text-primary-100">
            <p className="text-lg font-semibold">Forest Grove Substantial Woodland Service • Licensed & Insured • Same-Day Service Available</p>
            <p className="text-sm mt-2">Serving Forest Grove's Woodland Estate Community & Oregon City Forest Heritage Since 2018</p>
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
            "description": "Substantial woodland estate residence and forested property junk removal services in Forest Grove, Oregon City, OR",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Oregon City",
              "addressRegion": "OR",
              "addressCountry": "US"
            },
            "telephone": "(503) 753-2329",
            "url": "https://asjunkremoval.com/forest-grove-junk-removal",
            "serviceArea": {
              "@type": "Place",
              "name": "Forest Grove, Oregon City, OR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "380"
            },
            "openingHours": "Mo-Su",
            "serviceType": "Junk Removal Services",
            "areaServed": "Forest Grove, Oregon City, OR"
          })
        }}
      />
    </div>
  )
}
