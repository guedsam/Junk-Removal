import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '#1 Junk Removal Service in Rivercrest, Oregon City - Riverside Living Specialists | AS Junk Removal',
  description: 'Leading junk removal service in Rivercrest, Oregon City. Riverside living specialists, waterfront cleanup, eco-friendly disposal, transparent pricing. Call (503) 753-2329. Serving Rivercrest residents since 2018.',
  keywords: 'Rivercrest junk removal, junk removal Rivercrest Oregon City, junk hauler Rivercrest, same day junk removal Rivercrest, riverside junk removal Rivercrest OR, Rivercrest waterfront specialist junk removal, Rivercrest living specialist junk removal',
  openGraph: {
    title: '#1 Junk Removal Service in Rivercrest, Oregon City - Riverside Living Specialists',
    description: 'Leading junk removal service in Rivercrest, Oregon City. Riverside living specialists with waterfront expertise.',
    url: 'https://asjunkremoval.com/rivercrest-junk-removal',
    siteName: 'AS Junk Removal',
    images: [
      {
        url: '/images/junk-removal/oregon-city-junk-removal-team.webp',
        width: 1200,
        height: 630,
        alt: 'AS Junk Removal team serving Rivercrest riverside living community in Oregon City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Junk Removal Service in Rivercrest, Oregon City - Riverside Living Specialists',
    description: 'Leading junk removal service in Rivercrest, Oregon City. Riverside living specialists.',
    images: ['/images/junk-removal/oregon-city-junk-removal-team.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/rivercrest-junk-removal',
  },
}

export default function RivercrestJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Junk Removal{' '}
                <span className="text-gradient">Rivercrest</span>
                {' '}<span className="text-2xl md:text-3xl font-normal">Oregon City</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                #1 rated junk removal service in scenic Rivercrest, Oregon City.
                As riverside living specialists, we understand the distinctive waterfront lifestyle
                and Willamette River community character that makes Rivercrest special since 2018.
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
                alt="AS Junk Removal professional team providing Rivercrest riverside living junk removal services in Oregon City"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Rivercrest Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Rivercrest's Riverside Living Community Since 2018
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Rivercrest represents Oregon City's cherished connection to the Willamette River,
              where riverside living meets suburban comfort in a community blessed by
              Oregon's magnificent natural waterway and the lifestyle it inspires.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">About Rivercrest Riverside Living District</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Scenic riverside location with Willamette River proximity
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Natural waterfront lifestyle and river-view properties
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Residential homes with natural landscaping and river access
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Community with strong appreciation for natural surroundings
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Lifestyle enhanced by Oregon's premier river recreation</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Why Rivercrest Trusts AS Junk Removal</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Understanding of riverside property unique requirements
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Environmental responsibility respecting our river community
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Appreciation for natural landscape and river conservation
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Service that harmonizes with riverside community values
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Commitment to maintaining Rivercrest's natural beauty</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Rivercrest Riverside Living Coverage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>• Rivercrest's riverside residential area</div>
              <div>• Willamette River proximity properties</div>
              <div>• Waterfront lifestyle neighborhoods</div>
              <div>• Natural landscape residential communities</div>
              <div>• Scenic river-view home districts</div>
              <div>• Connected riverside living areas</div>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              Complete coverage of Rivercrest's scenic riverside community, serving properties that celebrate Oregon City's Willamette River heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Rivercrest Riverside Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Rivercrest Riverside Living Cleanup Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our services reflect the unique character of Rivercrest's riverside location,
              understanding how our community's connection to the Willamette River
              shapes the lifestyle and property care needs of our neighbors.
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
                Riverside Residential Cleanouts
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized residential cleanout services for Rivercrest riverside homes.
                Understanding how waterfront proximity affects furnishings, storage, and
                the unique maintenance needs of riverside property living.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Riverside residential cleaning services</li>
                <li>• Waterfront property organization</li>
                <li>• Natural landscape residential maintenance</li>
                <li>• River-view property preparation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Natural Landscape Waste Management
              </h3>
              <p className="text-gray-600 mb-4">
                Expert handling of riverside landscape materials in Rivercrest communities.
                Managing river-related debris, seasonal natural waste, and organic materials
                that characterize life near Oregon's magnificent Willamette River.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Riverside landscape debris collection</li>
                <li>• Natural riverside waste management</li>
                <li>• Seasonal river-related cleanup</li>
                <li>• Environmental landscape maintenance</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Riverside Renovation Cleanup
              </h3>
              <p className="text-gray-600 mb-4">
                Professional construction debris removal services for Rivercrest properties.
                Handling renovation waste while respecting our community standards and
                enhancing the natural beauty of our riverside neighborhood.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Riverside home renovation cleanup</li>
                <li>• Waterfront property construction waste</li>
                <li>• Natural environment renovation support</li>
                <li>• Community-sensitive debris removal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rivercrest Riverside Community Focus */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Celebrating Rivercrest's Willamette River Heritage
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Rivercrest embodies the special relationship Oregon City enjoys with its magnificent
              Willamette River, where natural beauty and community life blend together in
              harmony, creating a lifestyle that celebrates Oregon's greatest natural treasure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🌊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Willamette River Connection</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Deep appreciation for Rivercrest's natural relationship with Oregon's magnificent Willamette River and our community's water heritage.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Natural Environment Respect</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Understanding the importance of preserving Rivercrest's cherished natural surroundings and riverside ecosystem.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Riverside Lifestyle Enhancement</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Supporting the unique riverside living style that defines Rivercrest and enhances Oregon City's natural beauty.
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
              Rivercrest Riverside Living Community Voice
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Hearing from Rivercrest's riverside living community members about their waterfront experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Living in Rivercrest means living with nature - our place by the Willamette River inspired our home renovation.
                The cleanup team understood our riverfront lifestyle perfectly. They handled everything with care for our scenic location,
                understood the seasonal river maintenance needs, and respected the natural beauty that makes Rivercrest so special.
                Service that truly fits our riverside way of life."
              </p>
              <p className="text-sm font-semibold text-gray-900">- The Rivera Family, Willamette Riverfront Renovation</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Rivercrest is all about that Oregon lifestyle near the Willamette River. When we went through our downsizing, they understood
                that our home wasn't just a house - it was our connection to nature, to the river, to Oregon's outdoor heritage.
                They treated our river-adjacent property with the respect it deserved and knew exactly how to handle our collection
                of river-related items and outdoor equipment. Perfect for our riverside living."
              </p>
              <p className="text-sm font-semibold text-gray-900">- The Environmental Studies Professors, Legacy Rivercrest Residents</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "In Rivercrest, we live with nature every day. That means seasonal fleet maintenance, yard waste from our river-adjacent grounds,
                and community cleanup projects. These professionals get it perfectly. They understand Oregon's riverside lifestyle,
                they respect our natural environment, and they provide service that enhances rather than disrupts our community.
                They truly understand what living by the Willamette River means to us."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Rivercrest Community Association Board, Waterfront Neighborhood Stewards</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Rivercrest Riverside Living Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How does service in Rivercrest account for our riverside location?
              </h3>
              <p className="text-gray-600">
                Riversider location is fundamental to Rivercrest service. We design our approach around your Willamette River proximity, understanding seasonal water cycles, river recreation equipment needs, environmental sensitivity requirements, and the unique property features that come with living near Oregon's magnificent river. Every service consideration reflects our respect for this precious natural resource.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about natural waste and seasonal riverside cleanup?
              </h3>
              <p className="text-gray-600">
                Natural waste management is particularly important in Rivercrest's riverside environment. We handle seasonal river-related debris, landscaping materials affected by proximity to water, recreational equipment, and environmental considerations specific to waterfront living. Our approach balances cleanup needs with protection of the natural ecosystem that makes Rivercrest beautiful.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do you protect the natural environment while providing service?
              </h3>
              <p className="text-gray-600">
                Environmental protection is core to Rivercrest service. We use eco-friendly disposal methods, employ water containment techniques for riverside work, implement erosion control measures, and follow strict environmental guidelines to prevent contamination of the Willamette River. Our approach demonstrates responsible stewardship of the natural beauty that defines our community.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much does riverside living junk removal cost in Rivercrest?
              </h3>
              <p className="text-gray-600">
                Rivercrest riverside projects range from $150-400 for residential cleanouts to $800-1300 for larger properties with complex waterfront features. We provide free personalized estimates that consider your riverside location, natural landscape factors, environmental protection requirements, and the specialized handling that Rivercrest waterfront properties demand.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about recreational equipment and water-related gear storage?
              </h3>
              <p className="text-gray-600">
                Recreational equipment is common in Rivercrest households. We handle kayaks, paddleboards, fishing gear, recreational vehicles, boat trailers, water toys, and all the specialized sporting equipment that comes with living near Oregon's premier recreational river. Our service includes proper disposal of old equipment, redistribution of reusable items through local donation networks, and environmentally responsible handling of water-related recreational possessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Rivercrest's Riverside Living Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join the Rivercrest riverside living community who trust us for their waterfront cleanup needs.
            Same-day service available throughout our scenic riverside area. Call now or get your riverside living quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Rivercrest Quote
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329 Now
            </a>
          </div>
          <div className="mt-8 text-primary-100">
            <p className="text-lg font-semibold">Rivercrest Riverside Living Service • Licensed & Insured • Same-Day Service Available</p>
            <p className="text-sm mt-2">Serving Rivercrest's Willamette River Community & Oregon Waterfront Living Since 2018</p>
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
            "description": "Riverside living junk removal services in Rivercrest, Oregon City, OR",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Oregon City",
              "addressRegion": "OR",
              "addressCountry": "US"
            },
            "telephone": "(503) 753-2329",
            "url": "https://asjunkremoval.com/rivercrest-junk-removal",
            "serviceArea": {
              "@type": "Place",
              "name": "Rivercrest, Oregon City, OR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "290"
            },
            "openingHours": "Mo-Su",
            "serviceType": "Junk Removal Services",
            "areaServed": "Rivercrest, Oregon City, OR"
          })
        }}
      />
    </div>
  )
}
