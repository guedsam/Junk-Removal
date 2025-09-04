import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '#1 Junk Removal Service in Beaver Creek, Oregon City - Sustainable Creek Specialists | AS Junk Removal',
  description: 'Leading junk removal service in Beaver Creek, Oregon City. Sustainable creek specialists, waterway cleanup, eco-friendly disposal, transparent pricing. Call (503) 753-2329. Serving Beaver Creek residents since 2018.',
  keywords: 'Beaver Creek junk removal, junk removal Beaver Creek Oregon City, junk hauler Beaver Creek, same day junk removal Beaver Creek, sustainable creek junk removal Beaver Creek OR, Beaver Creek waterway specialists junk removal',
  openGraph: {
    title: '#1 Junk Removal Service in Beaver Creek, Oregon City - Sustainable Creek Specialists',
    description: 'Leading junk removal service in Beaver Creek, Oregon City. Sustainable creek specialists with waterway expertise.',
    url: 'https://asjunkremoval.com/beaver-creek-junk-removal',
    siteName: 'AS Junk Removal',
    images: [
      {
        url: '/images/junk-removal/oregon-city-junk-removal-team.webp',
        width: 1200,
        height: 630,
        alt: 'AS Junk Removal team serving Beaver Creek sustainable waterway community in Oregon City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Junk Removal Service in Beaver Creek, Oregon City - Sustainable Creek Specialists',
    description: 'Leading junk removal service in Beaver Creek, Oregon City. Sustainable creek specialists.',
    images: ['/images/junk-removal/oregon-city-junk-removal-team.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/beaver-creek-junk-removal',
  },
}

export default function BeaverCreekJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Junk Removal{' '}
                <span className="text-gradient">Beaver Creek</span>
                {' '}<span className="text-2xl md:text-3xl font-normal">Oregon City</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                #1 rated junk removal service in scenic Beaver Creek, Oregon City.
                As creek specialists, we understand the distinctive sustainable waterway character
                and environmental consciousness that makes Beaver Creek exceptional since 2018.
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
                alt="AS Junk Removal professional team providing Beaver Creek sustainable waterway junk removal services in Oregon City"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Beaver Creek Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Beaver Creek's Sustainable Waterway Community Since 2018
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Beaver Creek occupies a prized position near one of Oregon's most beloved
              natural waterways, where sustainable living meets environmental stewardship
              in a community that embraces both natural beauty and responsible environmental practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">About Beaver Creek Sustainable Waterway District</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Proximity to Beaver Creek and natural waterway systems
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Sustainable residential development with environmental awareness
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mix of eco-friendly homes and nature-integrated residential properties
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Natural landscaping with native plants and creek-adjacent features
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Community atmosphere promoting environmental stewardship and sustainable living</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Why Beaver Creek Trusts AS Junk Removal</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Understanding of sustainable practices and environmental responsibility
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Experience with waterway proximity and natural ecosystem preservation
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Respect for eco-friendly community values and green living standards
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Knowledge of sustainable materials handling and environmentally conscious disposal
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Partnership with waterway community environmental priorities since our founding</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Beaver Creek Sustainable Waterway Coverage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>• Beaver Creek waterway sustainable area</div>
              <div>• Environmental residential neighborhoods</div>
              <div>• Eco-friendly property districts</div>
              <div>• Green living residential communities</div>
              <div>• Sustainable waterway property zones</div>
              <div>• Nature-integrated residential areas</div>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              Complete coverage of Beaver Creek's sustainable waterway community, serving homes that embrace Oregon City's environmental heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Beaver Creek Sustainable Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Beaver Creek Sustainable Waterway Residential Cleanup Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our services are specifically designed for Beaver Creek's environmental consciousness,
              understanding how waterway proximity, sustainable living, and ecological awareness
              create unique service needs in our green-focused community.
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
                Sustainable Creek Residential Cleanouts
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized residential cleanout services for Beaver Creek's eco-friendly homes.
                Understanding sustainable layouts, environmentally conscious storage, and waterway
                proximity that define our green living community standards.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Sustainable residential cleaning services</li>
                <li>• Environmental property organization</li>
                <li>• Green living heritage preservation</li>
                <li>• Creek residence preparation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Eco-Friendly Creek Landscape Care
              </h3>
              <p className="text-gray-600 mb-4">
                Expert handling of Beaver Creek's sustainable landscape and waterway features.
                Managing eco-friendly yard waste, creek-adjacent natural materials, and green
                landscaping while respecting our waterway ecosystem preservation.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Sustainable landscape debris management</li>
                <li>• Eco-friendly waterway waste collection</li>
                <li>• Seasonal green living cycle maintenance</li>
                <li>• Environmental preservation landscape care</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Green Livingston Renovation Environmental Support
              </h3>
              <p className="text-gray-600 mb-4">
                Professional construction debris removal services for Beaver Creek sustainable renovations.
                Coordinating with eco-friendly contractors while maintaining sustainable character
                and waterway environmental standards that define our green community.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Sustainable home renovation cleanup</li>
                <li>• Eco-friendly property construction waste</li>
                <li>• Green heritage renovation support</li>
                <li>• Waterway-respectful debris removal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Beaver Creek Sustainable Heritage Focus */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Honoring Beaver Creek's Sustainable Waterway Heritage
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Beaver Creek represents Oregon City's commitment to environmental stewardship,
              where sustainable practices and waterway conservation create a community that
              celebrates both natural beauty and responsible environmental ethics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🌊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Waterway Stewardship Partnership</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Working in harmony with Beaver Creek's precious waterway resources and sustainable environmental goals.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Sustainable Living Excellence</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Dedicated to serving properties that represent the finest sustainable living and environmental responsibility.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Environmental Community Partnership</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Proud partnership with Beaver Creek residents to maintain and enhance our waterway's environmental excellence.
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
              Beaver Creek Sustainable Waterway Community Recognition
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Hearing from Beaver Creek's sustainable waterway community members about their environmental experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Living next to Beaver Creek means we're committed to protecting our waterway - our sustainable home reflects our environmental values.
                The cleanup team understood our eco-friendly lifestyle perfectly. They handled recycled materials, sustainable yard waste, and waterway-adjacent
                eco-features with the environmental sensitivity they deserve. They're true sustainability specialists who share our green philosophy."
              </p>
              <p className="text-sm font-semibold text-gray-900">- The Peterson Family, Beaver Creek Environmental Stewards</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Beaver Creek is all about sustainable living and waterway protection - eco-friendly homes and responsible environmental practices.
                When our sustainable addition created carefully sourced construction materials, they understood both the green building standards we're using
                and the environmental ecosystem we protect. Their service matched our sustainability standards perfectly. Exceptional for our green community."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Sustainable Architecture & Design Team, Beaver Creek Eco-Professionals</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "The Beaver Creek Environmental Association protects our precious waterway - from native plant communities to water quality monitoring.
                These service professionals consistently deliver - from handling eco-friendly yard waste to managing waterway-adjacent cleanups -
                they understand how vital environmental stewardship is to our special location. They've become our trusted partners in maintaining what makes Beaver Creek extraordinary."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Beaver Creek Environmental Association, Waterway Guardians</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Beaver Creek Sustainable Waterway Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How does service account for Beaver Creek's environmental character?
              </h3>
              <p className="text-gray-600">
                Beaver Creek's environmental character is fundamental to our service approach. We have specialized eco-friendly disposal protocols, understanding sustainable material handling, awareness of waterway conservation needs, and knowledge of green community standards. Our crews are trained for environmentally sensitive service and know how to maintain sustainability throughout our work.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about protecting Beaver Creek's natural waterway ecosystem?
              </h3>
              <p className="text-gray-600">
                Waterway ecosystem protection is central to Beaver Creek service. We work carefully to prevent waterway contamination, protect riparian zones from damage, implement erosion control measures, and follow strict environmental guidelines to maintain the pristine condition of Beaver Creek. Our approach ensures that our service activities enhance rather than harm the creek's ecological health.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do you handle sustainable materials and eco-friendly waste?
              </h3>
              <p className="text-gray-600">
                Sustainable material expertise is essential for Beaver Creek service. We understand the proper handling of recycled materials, biodegradable waste, sustainable construction debris, and eco-friendly household items. Our disposal methods prioritize landfill diversion, support local recycling programs, and implement environmentally conscious waste management practices that align with our community's green values.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much does sustainable waterway junk removal cost in Beaver Creek?
              </h3>
              <p className="text-gray-600">
                Beaver Creek sustainable projects range from $180-450 for environmental residential cleanouts to $1000-1500 for environmentally sensitive or waterway-adjacent renovations. We provide free personalized estimates that consider the sustainable nature of Beaver Creek properties, eco-friendly material complexity, waterway conservation requirements, and the environmentally conscious standards that define our community. Every estimate reflects our understanding of sustainable property challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about eco-friendly disposal and recycling practices?
              </h3>
              <p className="text-gray-600">
                Eco-friendly disposal is at the core of Beaver Creek service. We maximize recycling to minimize environmental impact, work with certified green disposal facilities, donate reusable items to local environmental organizations, and implement sustainable waste reduction strategies. Our approach distinguishes itself through superior environmental practices that align with Beaver Creek's conservationist values and support Oregon's environmental leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Beaver Creek's Sustainable Waterway Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join the Beaver Creek waterway community who trust us for their sustainable cleanup needs.
            Same-day service available throughout our environmental heritage area. Call now or get your eco-friendly quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Beaver Creek Quote
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329 Now
            </a>
          </div>
          <div className="mt-8 text-primary-100">
            <p className="text-lg font-semibold">Beaver Creek Sustainable Waterway Service • Licensed & Insured • Same-Day Service Available</p>
            <p className="text-sm mt-2">Serving Beaver Creek's Environmental Community & Oregon City Waterway Living Since 2018</p>
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
            "description": "Sustainable waterway residence and eco-friendly environmental junk removal services in Beaver Creek, Oregon City, OR",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Oregon City",
              "addressRegion": "OR",
              "addressCountry": "US"
            },
            "telephone": "(503) 753-2329",
            "url": "https://asjunkremoval.com/beaver-creek-junk-removal",
            "serviceArea": {
              "@type": "Place",
              "name": "Beaver Creek, Oregon City, OR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "360"
            },
            "openingHours": "Mo-Su",
            "serviceType": "Junk Removal Services",
            "areaServed": "Beaver Creek, Oregon City, OR"
          })
        }}
      />
    </div>
  )
}
