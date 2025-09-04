import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '#1 Junk Removal Service in Redland, Oregon City - Vineyard Valley Specialists | AS Junk Removal',
  description: 'Leading junk removal service in Redland, Oregon City. Vineyard valley specialists, agriculture cleanup, eco-friendly disposal, transparent pricing. Call (503) 753-2329. Serving Redland residents since 2018.',
  keywords: 'Redland junk removal, junk removal Redland Oregon City, junk hauler Redland, same day junk removal Redland, vineyard valley junk removal Redland OR, Redland agriculture specialists junk removal',
  openGraph: {
    title: '#1 Junk Removal Service in Redland, Oregon City - Vineyard Valley Specialists',
    description: 'Leading junk removal service in Redland, Oregon City. Vineyard valley specialists with agriculture expertise.',
    url: 'https://asjunkremoval.com/redland-junk-removal',
    siteName: 'AS Junk Removal',
    images: [
      {
        url: '/images/junk-removal/oregon-city-junk-removal-team.webp',
        width: 1200,
        height: 630,
        alt: 'AS Junk Removal team serving Redland vineyard valley community in Oregon City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Junk Removal Service in Redland, Oregon City - Vineyard Valley Specialists',
    description: 'Leading junk removal service in Redland, Oregon City. Vineyard valley specialists.',
    images: ['/images/junk-removal/oregon-city-junk-removal-team.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/redland-junk-removal',
  },
}

export default function RedlandJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Junk Removal{' '}
                <span className="text-gradient">Redland</span>
                {' '}<span className="text-2xl md:text-3xl font-normal">Oregon City</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                #1 rated junk removal service in vineyard Redland, Oregon City.
                As valley specialists, we understand the distinctive agricultural character
                and wine country standards that make Redland exceptional since 2018.
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
                alt="AS Junk Removal professional team providing Redland vineyard valley junk removal services in Oregon City"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Redland Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Redland's Vineyard Valley Community Since 2018
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Redland occupies the fertile plains of the Willamette Valley wine country,
              where agricultural heritage meets contemporary residential living in a community
              that celebrates both Oregon's farming traditions and sophisticated vineyard lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">About Redland Vineyard Valley District</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Fertile valley location with rich agricultural soil history
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Vineyard and farmstead residential properties with agricultural roots
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mix of working farms, vineyard estates, and residential developments
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Natural landscape with seasonal agricultural cycles and features
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Community atmosphere reflecting Oregon's agricultural heritage and wine country values</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Why Redland Trusts AS Junk Removal</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Experience with agricultural properties and farming equipment
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Understanding of vineyard estates and wine country property standards
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Respect for agricultural heritage and seasonal farming cycles
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Commitment to serving valley community's agricultural living standards
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Partnership with vineyard valley community since our founding</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Redland Vineyard Valley Coverage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>• Redland's vineyard valley agricultural area</div>
              <div>• Farmstead and vineyard residential neighborhoods</div>
              <div>• Agricultural heritage property districts</div>
              <div>• Working farm residential communities</div>
              <div>• Wine country valley residential zones</div>
              <div>• Fertile farmland property areas</div>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              Complete coverage of Redland's vineyard valley community, serving homes that celebrate Oregon City's agricultural heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Redland Vineyard Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Redland Vineyard Valley Residential Cleanup Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our services are specifically designed for Redland's agricultural character,
              understanding how vineyard properties, farming cycles, and valley living
              create unique service needs in our fertile wine country community.
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
                Vineyard Valley Residential Cleanouts
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized residential cleanout services for Redland's vineyard homes.
                Understanding agricultural layouts, farming equipment storage, and valley
                property configurations that define our wine country living community.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Vineyard valley cleaning services</li>
                <li>• Agricultural property organization</li>
                <li>• Farming heritage preservation</li>
                <li>• Valley residence preparation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Agricultural Landscape Valley Care
              </h3>
              <p className="text-gray-600 mb-4">
                Expert handling of Redland's agricultural landscape and vineyard features.
                Managing seasonal farm waste, vineyard trimmings, and agricultural
                materials while respecting our valley's farming heritage.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Agricultural landscape debris management</li>
                <li>• Vineyard waste collection</li>
                <li>• Seasonal farming cycle maintenance</li>
                <li>• Heritage-preserving landscape care</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Vineyard Renovation Agricultural Support
              </h3>
              <p className="text-gray-600 mb-4">
                Professional construction debris removal services for Redland vineyard renovations.
                Coordinating with agricultural contractors while maintaining vineyard character
                and valley agricultural standards that define our wine country.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Vineyard renovation cleanup</li>
                <li>• Agricultural property construction waste</li>
                <li>• Farming heritage renovation support</li>
                <li>• Valley-respectful debris removal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Redland Vineyard Heritage Focus */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Honoring Redland's Vineyard Valley Heritage
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Redland represents the agricultural heart of Oregon City's Willamette Valley,
              where fertile soil and vineyard traditions create a lifestyle that celebrates
              both the land's productivity and Oregon's premier wine country reputation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🍇</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Vineyard Valley Partnership</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Working in harmony with Redland's fertile valley location and agricultural heritage characteristics.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Agricultural Living Excellence</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Dedicated to serving properties that represent the finest agricultural living and vineyard heritage in our valley.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🌾</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Wine Country Community Partnership</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Proud partnership with Redland residents to maintain and enhance our vineyard valley's agricultural excellence.
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
              Redland Vineyard Valley Community Recognition
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Hearing from Redland's vineyard valley community members about their agricultural experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Living in Redland means living with the rhythms of the Willamette Valley - our vineyard property reflects generations of farming.
                The cleanup team understood our agricultural lifestyle perfectly. They handled old farming equipment, seasonal agricultural waste, and family
                heirlooms from our farmstead with the care they deserve. They're true valley specialists who get our wine country life."
              </p>
              <p className="text-sm font-semibold text-gray-900">- The Williamson Family, Redland Vineyard Owners</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Redland is all about Oregon's agricultural heritage - working farms, vineyard estates, and fertile valley soil.
                When our farmstead additions created significant debris, they understood both the agricultural materials we're working with and the valley
                ecosystem we protect. Their service matched our farming community's standards perfectly. Exceptional for our wine country lifestyle."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Agricultural Architectural Team, Redland Farm Design Professionals</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "The Redland Agricultural Association stewards our valley's farming legacy - from small family vineyards to working farms.
                These service professionals consistently deliver - from handling seasonal harvest cleanup to managing farm equipment transitions -
                they understand how special our agricultural location is. They've become our trusted partners in maintaining what makes Redland extraordinary."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Redland Agricultural Association, Valley Heritage Guardians</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Redland Vineyard Valley Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How does service account for Redland's agricultural character?
              </h3>
              <p className="text-gray-600">
                Redland's agricultural character is fundamental to our service approach. We have specialized experience with farming equipment, understanding vineyard maintenance cycles, awareness of seasonal agricultural needs, and knowledge of valley property configurations. Our crews are trained for agricultural property challenges and know how to maintain service quality in farming conditions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about protecting Redland's agricultural heritage?
              </h3>
              <p className="text-gray-600">
                Heritage protection is central to Redland service. We work carefully to preserve farming equipment artifacts, protect vineyard landscapes from damage, understand how our activities might affect agricultural productivity, and implement cleanup procedures that respect the valley's rich agricultural history and future productivity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do you handle farming equipment and agricultural materials?
              </h3>
              <p className="text-gray-600">
                Agricultural equipment expertise is essential for Redland service. We understand the special handling required for tractors, farming implements, irrigation equipment, vineyard tools, and agricultural machinery common in valley properties. Our techniques and equipment are selected to match or exceed the durability standards that define agricultural equipment needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much does agricultural junk removal cost in Redland?
              </h3>
              <p className="text-gray-600">
                Redland agricultural projects range from $180-450 for vineyard residential cleanouts to $1000-1500 for large agricultural property renovations. We provide free personalized estimates that consider the farming nature of Redland properties, agricultural equipment complexity, seasonal farming cycles, and the heavy-duty standards that define our valley community. Every estimate reflects our understanding of agricultural property challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about seasonal agricultural cycles and harvests?
              </h3>
              <p className="text-gray-600">
                Seasonal agricultural cycles are a primary factor in Redland service. Our scheduling adapts to harvest seasons, planting periods, vineyard maintenance needs, and farming equipment availability cycles. We coordinate service delivery around agricultural timelines, implement season-specific protocols, and maintain consistent service quality during all phases of the farming year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Redland's Vineyard Valley Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join the Redland valley community who trust us for their agricultural cleanup needs.
            Same-day service available throughout our fertile wine country area. Call now or get your vineyard community quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Redland Quote
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329 Now
            </a>
          </div>
          <div className="mt-8 text-primary-100">
            <p className="text-lg font-semibold">Redland Vineyard Valley Service • Licensed & Insured • Same-Day Service Available</p>
            <p className="text-sm mt-2">Serving Redland's Agricultural Community & Oregon City Wine Country Living Since 2018</p>
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
            "description": "Vineyard valley residence and agricultural heritage junk removal services in Redland, Oregon City, OR",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Oregon City",
              "addressRegion": "OR",
              "addressCountry": "US"
            },
            "telephone": "(503) 753-2329",
            "url": "https://asjunkremoval.com/redland-junk-removal",
            "serviceArea": {
              "@type": "Place",
              "name": "Redland, Oregon City, OR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "350"
            },
            "openingHours": "Mo-Su",
            "serviceType": "Junk Removal Services",
            "areaServed": "Redland, Oregon City, OR"
          })
        }}
      />
    </div>
  )
}
