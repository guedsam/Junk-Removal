import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '#1 Junk Removal Service in South End, Oregon City - Southern Community Experts | AS Junk Removal',
  description: 'Premier junk removal service in South End, Oregon City. Southern community specialists, residential cleanup, eco-friendly disposal, transparent pricing. Call (503) 753-2329. Serving South End residents since 2018.',
  keywords: 'South End junk removal, junk removal South End Oregon City, junk hauler South End, same day junk removal South End, southern community junk removal South End OR, South End residential specialist junk removal, South End community expert junk removal',
  openGraph: {
    title: '#1 Junk Removal Service in South End, Oregon City - Southern Community Experts',
    description: 'Premier junk removal service in South End, Oregon City. Southern community specialists with residential expertise.',
    url: 'https://asjunkremoval.com/south-end-junk-removal',
    siteName: 'AS Junk Removal',
    images: [
      {
        url: '/images/junk-removal/oregon-city-junk-removal-team.webp',
        width: 1200,
        height: 630,
        alt: 'AS Junk Removal team serving South End southern community in Oregon City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Junk Removal Service in South End, Oregon City - Southern Community Experts',
    description: 'Premier junk removal service in South End, Oregon City. Southern community specialists.',
    images: ['/images/junk-removal/oregon-city-junk-removal-team.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/south-end-junk-removal',
  },
}

export default function SouthEndJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Junk Removal{' '}
                <span className="text-gradient">South End</span>
                {' '}<span className="text-2xl md:text-3xl font-normal">Oregon City</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                #1 rated junk removal service in South End, Oregon City.
                As southern community specialists, we understand the distinctive residential character
                and community values that make South End a cherished Oregon City neighborhood since 2018.
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
                alt="AS Junk Removal professional team providing South End southern community junk removal services in Oregon City"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About South End Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving South End's Southern Community Since 2018
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              South End occupies the southern extent of Oregon City, representing the community's
              dedication to maintaining the cherished residential character and strong community ties
              that have defined this neighborhood for generations of families and residents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">About South End Southern Community</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Southern residential area of Oregon City
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Established neighborhood with mature trees and landscaping
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mix of established homes and newer residential developments
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Strong community bonds and neighborhood unity
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Quiet residential atmosphere in Oregon City's most southern area</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Why South End Trusts AS Junk Removal</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Deep understanding of South End's established neighborhood character
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Respect for mature landscaping and established property features
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Appreciation for generational residences and local family histories
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Commitment to maintaining South End's residential tranquility
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Partnership with our southern community since our first day</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">South End Southern Community Coverage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>• South End's southern residential area</div>
              <div>• Established neighborhood properties</div>
              <div>• Mature landscaping residential zones</div>
              <div>• Generational family home districts</div>
              <div>• Quiet residential community blocks</div>
              <div>• Southern Oregon City connected areas</div>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              Complete coverage of South End's established southern community, serving homes that honor Oregon City's residential heritage.
            </p>
          </div>
        </div>
      </section>

      {/* South End Community Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              South End Southern Residential Cleanup Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our services reflect South End's established residential character, understanding
              the unique needs of our mature neighborhood and the values that have defined
              our southern community for so many years of Oregon City history.
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
                Established Home Cleanouts
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized residential cleanout services for South End's established homes.
                Understanding the accumulated belongings, generational heirlooms, and family
                treasures that define our mature neighborhood and residential community.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Generational home cleaning services</li>
                <li>• Established property organization</li>
                <li>• Family heritage property maintenance</li>
                <li>• South End residential preparation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Mature Neighborhood Landscape Care
              </h3>
              <p className="text-gray-600 mb-4">
                Expert handling of South End's mature landscape features and established gardens.
                Managing seasonal yard waste, fallen leaves, and landscaping debris with respect
                for our neighborhood's mature trees and garden heritage.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Mature landscape debris management</li>
                <li>• Established garden waste collection</li>
                <li>• Seasonal South End yard maintenance</li>
                <li>• Neighborhood greenery preservation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Southern Renovation Cleanup Support
              </h3>
              <p className="text-gray-600 mb-4">
                Professional construction debris removal services for South End renovation projects.
                Coordinating with contractors while maintaining our neighborhood's residential
                character and respecting the established nature of our southern community.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Southern residential renovation cleanup</li>
                <li>• Established neighborhood construction waste</li>
                <li>• Mature property renovation support</li>
                <li>• Community-respectful debris removal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* South End Community Heritage Focus */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Honoring South End's Southern Community Heritage
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              South End represents the very soul of community living in Oregon City, where established
              neighborhoods, strong family bonds, and deep community roots create the residential foundation
              that has sustained our city and defined our southern community's enduring spirit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Established Community Roots</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Deep appreciation for South End's established community character and generational neighborhood traditions.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🌳</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Mature Neighborhood Character</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Respect for South End's mature landscaping, established homes, and residential character that defines our southern area.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Southern Community Partnership</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Proud partnership with South End residents to maintain and enhance our southern community's residential excellence.
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
              South End Southern Residential Community Recognition
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Hearing from South End's established southern community members about their neighborhood experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "South End has that true Oregon City neighborhood feel - established homes, mature trees, and family histories that go back generations.
                When we needed help clearing out after decades in our family home, they understood perfectly what our house meant to us. They treated
                everything - from our grandmother's china to Dad's farming tools - with the respect they deserved. They're part of what makes South End special."
              </p>
              <p className="text-sm font-semibold text-gray-900">- The Anderson Family, Third Generation South End Residents</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Our South End neighborhood is all about community - established properties with mature landscaping that took decades to establish.
                When storm damage brought down some of our beautiful old pines, they handled all the cleanup with such care for our landscape.
                They understood that these trees weren't just plants - they were part of our community's character. Exceptional service for our exceptional neighborhood."
              </p>
              <p className="text-sm font-semibold text-gray-900">- South End Neighborhood Association, Landscape Preservation Committee</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "As someone who's lived in South End for 25 years, I've seen many service providers come and go. But these folks understand our southern community completely.
                They get our established character, they respect our mature landscaping, and they work with the care that matches how much we love our neighborhood.
                They're not just service providers - they're part of our South End family."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Barbara Mitchell, 25-Year South End Community Leader</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              South End Southern Community Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How does service account for South End's established community character?
              </h3>
              <p className="text-gray-600">
                South End service is built around our established community character. We understand the importance of mature landscaping, generational homes, family heirlooms, and neighborhood tranquility. Our approach respects the established nature of South End properties and works within the residential framework that has defined our southern community for generations. Every service consideration reflects the established living standards that make South End such a valued neighborhood.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about handling generational family belongings and heirlooms?
              </h3>
              <p className="text-gray-600">
                Generational belongings are particularly significant in South End's established community, where family legacies span decades. We understand the emotional attachments to cherished possessions, valuable heirlooms, and family artifacts. Our service includes careful categorization, respectful handling of antiques and collectibles, and communication with family members about preservation options. We work sensitively with the family histories and emotional connections that are part of South End's rich residential heritage.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do you handle mature landscaping and established gardens?
              </h3>
              <p className="text-gray-600">
                Mature landscaping is a defining feature of South End's established neighborhood. We handle all landscape maintenance with respect for our community's developed green spaces, established trees, garden features, and seasonal backyard items. Our approach balances cleanup needs with preservation of the landscaping heritage that adds such beauty and character to South End homes. We work carefully around mature gardens and established yard features to maintain the visual appeal that defines our southern residential community.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much does established community junk removal cost in South End?
              </h3>
              <p className="text-gray-600">
                South End established community projects range from $150-400 for residential cleanouts to $800-1200 for estate projects involving established homes and mature properties. We provide free personalized estimates that consider the established nature of South End properties, mature landscaping features, generational belongings, and the residential character that defines our southern community. Every estimate reflects our understanding of South End's special established living standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Why does South End get special consideration for service?
              </h3>
              <p className="text-gray-600">
                South End deserves special consideration because our community has built something truly exceptional - a residential environment where established character, mature landscaping, and strong community ties create a living environment that's more beautiful and valuable because of its established nature. We developed our service approach specifically to honor and preserve these qualities. Our community has earned the right to service that matches the excellence it represents, and we take pride in being the service that respects rather than diminishes our southern community's established residential standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for South End's Established Community Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join the South End southern community who trust us for their established cleanup needs.
            Same-day service available throughout our cherished southern area. Call now or get your established community quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free South End Quote
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329 Now
            </a>
          </div>
          <div className="mt-8 text-primary-100">
            <p className="text-lg font-semibold">South End Southern Residential Service • Licensed & Insured • Same-Day Service Available</p>
            <p className="text-sm mt-2">Serving South End's Established Community & Oregon City Residential Heritage Since 2018</p>
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
            "description": "Established southern community residential junk removal services in South End, Oregon City, OR",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Oregon City",
              "addressRegion": "OR",
              "addressCountry": "US"
            },
            "telephone": "(503) 753-2329",
            "url": "https://asjunkremoval.com/south-end-junk-removal",
            "serviceArea": {
              "@type": "Place",
              "name": "South End, Oregon City, OR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "300"
            },
            "openingHours": "Mo-Su",
            "serviceType": "Junk Removal Services",
            "areaServed": "South End, Oregon City, OR"
          })
        }}
      />
    </div>
  )
}
