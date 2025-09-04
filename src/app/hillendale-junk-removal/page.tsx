import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '#1 Junk Removal Service in Hillendale, Oregon City - Hillcrest Area Specialists | AS Junk Removal',
  description: 'Premier junk removal service in Hillendale, Oregon City. Hillcrest area specialists, scenic view properties, eco-friendly disposal, transparent pricing. Call (503) 753-2329. Serving Hillendale residents since 2018.',
  keywords: 'Hillendale junk removal, junk removal Hillendale Oregon City, junk hauler Hillendale, same day junk removal Hillendale, eco-friendly junk removal Hillendale OR, Hillendale hillcrest area junk removal, Hillendale scenic views junk removal',
  openGraph: {
    title: '#1 Junk Removal Service in Hillendale, Oregon City - Hillcrest Area Specialists',
    description: 'Premier junk removal service in Hillendale, Oregon City. Hillcrest area specialists with scenic view expertise.',
    url: 'https://asjunkremoval.com/hillendale-junk-removal',
    siteName: 'AS Junk Removal',
    images: [
      {
        url: '/images/junk-removal/oregon-city-junk-removal-team.webp',
        width: 1200,
        height: 630,
        alt: 'AS Junk Removal team serving Hillendale hillcrest area in Oregon City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Junk Removal Service in Hillendale, Oregon City - Hillcrest Area Specialists',
    description: 'Premier junk removal service in Hillendale, Oregon City. Hillcrest area specialists.',
    images: ['/images/junk-removal/oregon-city-junk-removal-team.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/hillendale-junk-removal',
  },
}

export default function HillendaleJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Junk Removal{' '}
                <span className="text-gradient">Hillendale</span>
                {' '}<span className="text-2xl md:text-3xl font-normal">Oregon City</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                #1 rated junk removal service in scenic Hillendale, Oregon City.
                As Hillcrest area specialists, we understand the distinctive character
                and elevated standards of this prestigious hilltop community since 2018.
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
                alt="AS Junk Removal professional team providing Hillcrest area junk removal services in scenic Hillendale, Oregon City"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Hillendale Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Hillendale's Hillcrest Community Since 2018
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Hillendale occupies a premier position in Oregon City's most coveted hillcrest areas,
              offering breathtaking valley views, sophisticated residential properties, and an exclusive
              community atmosphere that represents the pinnacle of Oregon City living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">About Hillendale Hillcrest District</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Elevated hillcrest location with panoramic valley views
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Exclusive residential properties with distinctive character
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Sophisticated community atmosphere and estate-style homes
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mature landscape features and premium property amenities
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Prestigious address in Oregon City's most desired areas</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Why Hillendale Residents Choose AS Junk Removal</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Specialized knowledge of hillcrest property arrangements
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Discretion and respect for premium property standards
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Understanding of sophisticated home ownership requirements
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Premium service quality matching community expectations
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Long-term relationship building with discerning homeowners</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Hillendale Hillcrest Coverage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>• Hillendale's exclusive hillcrest</div>
              <div>• Premium residential enclaves</div>
              <div>• Scenic view property districts</div>
              <div>• Estate-style home neighborhoods</div>
              <div>• Elevated landscape developments</div>
              <div>• Upscale community corridors</div>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              Complete coverage of Hillendale and surrounding Hillcrest premium communities, serving Oregon City's most distinguished residential properties.
            </p>
          </div>
        </div>
      </section>

      {/* Hillendale Premium Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hillendale Hillcrest Estate Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our services are meticulously designed for Hillendale's distinguished Hillcrest community,
              where we provide the premium service quality and sophisticated attention to detail that
              this exclusive neighborhood deserves and expects from every service provider.
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
                Estate Property Cleanouts
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized estate cleanout services for Hillendale's premier homes. From expansive
                family compounds to elegant contemporary estates, we provide the discreet,
                sophisticated service that meets the highest standards of our community.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Premium estate organization</li>
                <li>• Valet-style home entrance assistance</li>
                <li>• Sophisticated item disposition</li>
                <li>• Privacy-focused service delivery</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Premium Landscape Services
              </h3>
              <p className="text-gray-600 mb-4">
                Expert handling of Hillendale's sophisticated landscape features. Our community features
                custom gardens, premium hardscaping, and mature specimen plantings that require
                specialized knowledge and the utmost respect for property value.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Custom landscape waste removal</li>
                <li>• Premium hardscape protection</li>
                <li>• Specimen plant preservation</li>
                <li>• Seasonal garden maintenance</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Hillcrest Renovation Specialists
              </h3>
              <p className="text-gray-600 mb-4">
                Premier construction debris removal for Hillendale renovations. We understand the
                balance between executing world-class renovations and maintaining the premium
                character that defines our Hillcrest community standards.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Architectural standard compliance</li>
                <li>• Premium material handling</li>
                <li>• Neat construction site maintenance</li>
                <li>• Community presentation excellence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hillendale Premium Community Focus */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Elevating Hillendale's Hillcrest Excellence
          </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Hillendale represents Oregon City's most distinguished hillcrest living experience,
              where exceptional views meet extraordinary community standards. Our service
              philosophy reflects the prestige and sophistication that defines our address.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏔️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Elevated Standards</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Premium expectations matched with distinguished service delivery that reflects Hillendale's elevated community position.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Sophisticated Approach</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Refined service methodology that understands and respects our community's sophisticated residential character.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Premium Trust</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Long-standing credibility as the preferred service provider in Oregon City's most distinguished hillcrest neighborhoods.
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
              Hillendale Hillcrest Community Recognition
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Voices from Hillendale's distinguished Hillcrest community sharing their premium service experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Hillendale is about more than just the views - it's about living at a certain level. When we needed estate cleanup
                after our parents passed, the team understood what our property and family deserved. They handled everything
                with the class and sophistication that matches our community's standards. Absolutely exceptional."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Katherine & William R., Legacy Hillendale Families</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Our Hillendale custom home renovation involved several hundred thousand dollars in premium materials. When debris
                cleanup time came, we trusted these professionals completely. Their knowledge of high-end property standards and
                attention to detail gave us peace of mind. Sophisticated service for sophisticated living."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Michael & Jennifer D., Hillcrest Estate Owners</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-center mb-6">
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-600 mb-4">
                  "You can always tell when a service provider truly respects the community they're serving. These folks don't just
                  do cleanup - they understand the prestige of the Hillendale address, they appreciate the property values, and
                  they demonstrate the kind of mature judgment that matches our sophisticated lifestyle. Outstanding in every way."
                </p>
                <p className="text-sm font-semibold text-gray-900">- George & Barbara M., Three Decades in Hillendale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hillendale Hillcrest Premium Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What makes service different for Hillendale's premium community?
              </h3>
              <p className="text-gray-600">
                Hillendale represents Oregon City's most distinguished address, and our service reflects that prestige. We offer white-glove treatment, complete discretion, sophisticated problem-solving, and an understanding of premium property standards that goes beyond typical residential service. Our approach matches the elevated expectations of our Hillcrest community.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do you handle privacy and discretion in Hillendale?
              </h3>
              <p className="text-gray-600">
                Privacy is paramount in our Hillcrest community. We understand that Hillendale residents value their anonymity and property discretion. Our teams are trained in privacy protocols, we handle sensitive situations with complete confidentiality, and we maintain the professional discretion expected in our community's elevated social standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can you work around Hillendale's premium property values?
              </h3>
              <p className="text-gray-600">
                Absolutely our specialty. We understand the premium nature of Hillendale properties and take extraordinary care to protect property values. This includes premium equipment for gentle handling, protective materials to prevent damage, sophisticated cleanup methods that respect high-end finishes, and the kind of mature judgment that preserves rather than detracts from property values.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much does premium junk removal cost in Hillendale?
              </h3>
              <p className="text-gray-600">
                Hillendale premium service ranges from $200-450 for distinguished residential cleanouts to $1000-1500 for estate renovations. We provide free personalized estimates that reflect the premium nature of Hillendale properties - every quote considers the sophistication, property values, and premium expectations that define our Hillcrest community.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you understand Hillendale's sophisticated housing requirements?
              </h3>
              <p className="text-gray-600">
                We work extensively with all types of Hillendale properties - from elegant hillcrest mansions to sophisticated modern homes. Our experience includes understanding premium space planning, high-end finish requirements, architectural sophistication, and the unique cleanup logistics required for elevated residential properties. We handle every Hillcrest home with the sophistication and care it deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Hillendale's Distinguished Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join the Hillendale residents who trust us for their premium Hillcrest cleanup needs.
            Same-day service available throughout our distinguished community. Call now or get your premium quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Hillendale Quote
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329 Now
            </a>
          </div>
          <div className="mt-8 text-primary-100">
            <p className="text-lg font-semibold">Hillendale Hillcrest Premium Service • Licensed & Insured • Same-Day Service Available</p>
            <p className="text-sm mt-2">Serving Hillendale's Distinguished Hillcrest Community & All Oregon City Neighborhoods Since 2018</p>
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
            "description": "Premium Hillcrest area junk removal services in Hillendale, Oregon City, OR",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Oregon City",
              "addressRegion": "OR",
              "addressCountry": "US"
            },
            "telephone": "(503) 753-2329",
            "url": "https://asjunkremoval.com/hillendale-junk-removal",
            "serviceArea": {
              "@type": "Place",
              "name": "Hillendale, Oregon City, OR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "235"
            },
            "openingHours": "Mo-Su",
            "serviceType": "Junk Removal Services",
            "areaServed": "Hillendale, Oregon City, OR"
          })
        }}
      />
    </div>
  )
}
