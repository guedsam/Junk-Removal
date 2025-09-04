import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '#1 Junk Removal Service in Warner Milne, Oregon City - Foundation Community Specialists | AS Junk Removal',
  description: 'Leading junk removal service in Warner Milne, Oregon City. Foundation community specialists, established neighborhood cleanup, eco-friendly disposal, transparent pricing. Call (503) 753-2329. Serving Warner Milne residents since 2018.',
  keywords: 'Warner Milne junk removal, junk removal Warner Milne Oregon City, junk hauler Warner Milne, same day junk removal Warner Milne, foundation community junk removal Warner Milne OR, Warner Milne established neighborhood specialists junk removal',
  openGraph: {
    title: '#1 Junk Removal Service in Warner Milne, Oregon City - Foundation Community Specialists',
    description: 'Leading junk removal service in Warner Milne, Oregon City. Foundation community specialists with established expertise.',
    url: 'https://asjunkremoval.com/warner-milne-junk-removal',
    siteName: 'AS Junk Removal',
    images: [
      {
        url: '/images/junk-removal/oregon-city-junk-removal-team.webp',
        width: 1200,
        height: 630,
        alt: 'AS Junk Removal team serving Warner Milne foundation community in Oregon City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Junk Removal Service in Warner Milne, Oregon City - Foundation Community Specialists',
    description: 'Leading junk removal service in Warner Milne, Oregon City. Foundation community specialists.',
    images: ['/images/junk-removal/oregon-city-junk-removal-team.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/warner-milne-junk-removal',
  },
}

export default function WarnerMilneJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Junk Removal{' '}
                <span className="text-gradient">Warner Milne</span>
                {' '}<span className="text-2xl md:text-3xl font-normal">Oregon City</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                #1 rated junk removal service in Warner Milne, Oregon City.
                As foundation community specialists, we understand the distinctive established
                character and strong residential foundation that makes Warner Milne special since 2018.
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
                alt="AS Junk Removal professional team providing Warner Milne foundation community junk removal services in Oregon City"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Warner Milne Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Warner Milne's Foundation Community Since 2018
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Warner Milne represents Oregon City's foundational strength as a residential community,
              where established homes create a foundation of stability and community character that
              serves as the cornerstone of our city's enduring residential heritage and family legacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">About Warner Milne Foundation Community</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Established residential core of Oregon City
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Foundation of the city's residential growth and development
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mix of original homes and foundational residential developments
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Strong community identity and foundational residential character
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Residential neighborhood that anchors Oregon City's living heritage</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Why Warner Milne Trusts AS Junk Removal</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Deep understanding of foundational residential community values
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Respect for established homes and community traditions
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Appreciation for generational residences and family histories
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Commitment to maintaining Warner Milne's residential foundation
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Partnership with our foundational residential community roots</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Warner Milne Foundation Community Coverage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>• Warner Milne's foundational residential area</div>
              <div>• Established home neighborhoods</div>
              <div>• Original residential developments</div>
              <div>• Generational family home districts</div>
              <div>• Residential core community blocks</div>
              <div>• Connected foundational residential areas</div>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              Complete coverage of Warner Milne's foundational residential community, serving homes that form Oregon City's living history.
            </p>
          </div>
        </div>
      </section>

      {/* Warner Milne Foundation Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Warner Milne Foundation Community Cleanup Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our services reflect Warner Milne's foundational residential character, understanding
              the unique needs of our established community and the values that have defined
              our foundational residential foundation for generations of Oregon City families.
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
                Established Foundation Home Cleanouts
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized residential cleanout services for Warner Milne's foundational homes.
                Understanding the accumulated belongings, generational heirlooms, and family
                treasures that define our established community and residential heritage.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Generational residential cleaning services</li>
                <li>• Foundation home organization</li>
                <li>• Family heritage property maintenance</li>
                <li>• Warner Milne residential preparation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Foundational Neighborhood Landscape Care
              </h3>
              <p className="text-gray-600 mb-4">
                Expert handling of Warner Milne's established landscape and mature gardens.
                Managing seasonal yard waste, established landscaping, and natural
                materials with respect for our community's foundational residential character.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Established landscape debris management</li>
                <li>• Foundation garden waste collection</li>
                <li>• Seasonal residential yard maintenance</li>
                <li>• Community character landscape preservation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Residential Foundation Renovation Cleanup
              </h3>
              <p className="text-gray-600 mb-4">
                Professional construction debris removal services for Warner Milne renovation projects.
                Coordinating with contractors while maintaining the established character
                and foundational standards that define our community's residential integrity.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Foundation residential renovation cleanup</li>
                <li>• Established neighborhood construction waste</li>
                <li>• Community character renovation support</li>
                <li>• Residential integrity debris removal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Warner Milne Community Heritage Focus */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Honoring Warner Milne's Residential Foundation Heritage
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Warner Milne represents the very foundation of Oregon City residential living,
              where established homes and strong community ties create the residential base
              that has sustained our city and defined our enduring legacy of community character.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Established Community Roots</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Deep appreciation for Warner Milne's established residential character and foundational community traditions.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🌳</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Foundational Character Preservation</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Respect for Warner Milne's established homes, mature landscaping, and residential character that defines our foundational area.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Foundation Community Partnership</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Proud partnership with Warner Milne residents to maintain and enhance our foundational community's residential excellence.
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
              Warner Milne Residential Foundation Community Recognition
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Hearing from Warner Milne's foundational residential community members about their neighborhood experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Warner Milne is Oregon City's foundation - it's where the original homes and families built the community we all enjoy today.
                When we cleared out the family home after five generations of our family living there, they understood perfectly what the house meant to us.
                Every family heirloom, every memory, every piece of our history was handled with the care it deserved. They're part of our community's foundation too."
              </p>
              <p className="text-sm font-semibold text-gray-900">- The Pierce Family, Fifth Generation Warner Milne Residents</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Our Warner Milne neighborhood represents the heart of Oregon City - established homes, family histories, community roots.
                When major storms damaged some of our beautiful old landscape features, they restored everything while respecting the historical character
                of our foundational neighborhood. Perfect partners for preserving what makes Warner Milne so special."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Warner Milne Historic Preservation Society, Community Heritage Guardians</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "As someone who's watched Warner Milne grow from my grandmother's time to now, I can tell you these service professionals
                understand our foundational values. They get our established character, they respect our family histories, and they work with
                the care that matches the pride we have in our community. They've become essential to maintaining what makes Warner Milne
                Oregon City's enduring residential foundation."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Community Historian and Warner Milne Resident, Family Legacy Preservation</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Warner Milne Residential Foundation Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How does service account for Warner Milne's established foundation community character?
              </h3>
              <p className="text-gray-600">
                Warner Milne's foundational character is at the heart of our service approach. We understand the importance of established homes, generational histories, family heirlooms, community traditions, and the residential framework that has sustained Oregon City for generations. Our methods respect the foundational nature of Warner Milne properties and align with the established living standards that define our community. Every service consideration reflects the foundational character that makes Warner Milne such a valued residential cornerstone.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about handling generational family belongings and established home features?
              </h3>
              <p className="text-gray-600">
                Generational belongings are particularly precious in Warner Milne's foundational community, where family legacies often span multiple generations. We understand the emotional connections to cherished possessions, valuable heirlooms, and family artifacts that have been passed down through years. Our service includes careful categorization, respectful handling of established home features and antiques, and communication with family members about preservation priorities. We work sensitively with the family histories and emotional attachments that are part of Warner Milne's rich residential foundation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do you handle mature landscaping and established garden areas?
              </h3>
              <p className="text-gray-600">
                Mature landscaping is a defining characteristic of Warner Milne's established community. We handle all landscape maintenance with respect for established gardens, mature trees, landscaping features developed over decades, and seasonal yard items characteristic of foundational neighborhoods. Our approach balances cleanup needs with preservation of the landscaping heritage that contributes such beauty and character to Warner Milne homes. We work carefully around established garden areas and mature yard features to maintain the visual appeal that defines our foundational residential community.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much does foundational community junk removal cost in Warner Milne?
              </h3>
              <p className="text-gray-600">
                Warner Milne foundational community projects range from $150-400 for established residential cleanouts to $800-1200 for estate projects involving generational homes and mature properties. We provide free personalized estimates that consider the established nature of Warner Milne properties, mature landscaping features, generational belongings, and the residential character that defines our foundational community. Every estimate reflects our understanding of Warner Milne's special established living standards and heritage value.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Why does Warner Milne have special consideration for service?
              </h3>
              <p className="text-gray-600">
                Warner Milne deserves special consideration because our community represents the very foundation of Oregon City itself. As the established residential core where generations of families have built homes, raised families, and created lasting traditions, Warner Milne possesses a unique heritage that deserves recognition. We developed our service approach specifically to honor and preserve the foundational character that makes Warner Milne such a special place. Our community has earned the right to service that respects rather than diminishes its foundational significance, and we take pride in being the service that honors rather than disturbs this living residential heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Warner Milne's Foundational Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join the Warner Milne foundational community who trust us for their established cleanup needs.
            Same-day service available throughout our heritage residential area. Call now or get your foundational community quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Warner Milne Quote
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329 Now
            </a>
          </div>
          <div className="mt-8 text-primary-100">
            <p className="text-lg font-semibold">Warner Milne Residential Foundation Service • Licensed & Insured • Same-Day Service Available</p>
            <p className="text-sm mt-2">Serving Warner Milne's Established Community & Oregon City Residential Heritage Since 2018</p>
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
            "description": "Established residential foundation community junk removal services in Warner Milne, Oregon City, OR",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Oregon City",
              "addressRegion": "OR",
              "addressCountry": "US"
            },
            "telephone": "(503) 753-2329",
            "url": "https://asjunkremoval.com/warner-milne-junk-removal",
            "serviceArea": {
              "@type": "Place",
              "name": "Warner Milne, Oregon City, OR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "330"
            },
            "openingHours": "Mo-Su",
            "serviceType": "Junk Removal Services",
            "areaServed": "Warner Milne, Oregon City, OR"
          })
        }}
      />
    </div>
  )
}
