import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '#1 Junk Removal Service in Highland, Oregon City - Elevated Living Specialists | AS Junk Removal',
  description: 'Leading junk removal service in Highland, Oregon City. Elevated living specialists, highland property cleanup, premium residential service, transparent pricing. Call (503) 753-2329. Serving Highland residents since 2018.',
  keywords: 'Highland junk removal, junk removal Highland Oregon City, junk hauler Highland, same day junk removal Highland, elevated living junk removal Highland OR, highland property specialists junk removal',
  openGraph: {
    title: '#1 Junk Removal Service in Highland, Oregon City - Elevated Living Specialists',
    description: 'Leading junk removal service in Highland, Oregon City. Elevated living specialists with highland expertise.',
    url: 'https://asjunkremoval.com/highland-junk-removal',
    siteName: 'AS Junk Removal',
    images: [
      {
        url: '/images/junk-removal/oregon-city-junk-removal-team.webp',
        width: 1200,
        height: 630,
        alt: 'AS Junk Removal team serving Highland elevated living community in Oregon City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Junk Removal Service in Highland, Oregon City - Elevated Living Specialists',
    description: 'Leading junk removal service in Highland, Oregon City. Elevated living specialists.',
    images: ['/images/junk-removal/oregon-city-junk-removal-team.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/highland-junk-removal',
  },
}

export default function HighlandJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Junk Removal{' '}
                <span className="text-gradient">Highland</span>
                {' '}<span className="text-2xl md:text-3xl font-normal">Oregon City</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                #1 rated junk removal service in elevated Highland, Oregon City.
                As elevated living specialists, we understand the distinctive highland character
                and premium residential standards that make Highland exceptional since 2018.
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
                alt="AS Junk Removal professional team providing Highland elevated living junk removal services in Oregon City"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Highland Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Highland's Elevated Living Community Since 2018
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Highland occupies the elevated areas of Oregon City, where premium residential living
              meets elevated perspectives in a community that celebrates both sophisticated living
              and the advantages of our highland location and elevated terrain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">About Highland Elevated Living District</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Elevated residential area with premium property values
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Sophisticated homes with elevated community standards
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mix of premium residences and high-end residential properties
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Elevated terrain features with scenic advantages
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Community atmosphere reflecting premium elevated living excellence</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Why Highland Trusts AS Junk Removal</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Experience with premium elevated properties and high-end requirements
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Understanding of high-end residential access and elevated terrain handling
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Respect for premium community standards and sophisticated living
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Commitment to serving elevated community's premium living excellence
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Partnership with premium highland community since our founding</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Highland Elevated Living Coverage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>• Highland elevated residential area</div>
              <div>• Premium home neighborhoods</div>
              <div>• Sophisticated property districts</div>
              <div>• High-end residence communities</div>
              <div>• Elevated terrain home zones</div>
              <div>• Premium living property areas</div>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              Complete coverage of Highland's elevated living community, serving properties that represent Oregon City's premium residential excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Highland Elevated Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Highland Elevated Living Residential Cleanup Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our services are specifically designed for Highland's elevated living character,
              understanding how premium properties, sophisticated standards, and highland terrain
              create unique service needs in our elevated residential community.
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
                Premium Elevated Residential Cleanouts
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized residential cleanout services for Highland's premium elevated homes.
                Understanding sophisticated layouts, high-end landscape features, and elevated living
                configurations that define our premium highland residential environment.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Premium elevated cleaning services</li>
                <li>• Highland property organization</li>
                <li>• Sophisticated living preservation</li>
                <li>• Elevated residence preparation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Sophisticated Highland Landscape Excellence
              </h3>
              <p className="text-gray-600 mb-4">
                Expert handling of Highland's premium landscape and elevated features.
                Managing high-end estate yard waste, sophisticated plantings, and elevated terrain materials
                while respecting our community's premium elevated living standards and scenic advantages.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Premium landscape debris management</li>
                <li>• Sophisticated estate garden waste collection</li>
                <li>• Elevated terrain yard maintenance</li>
                <li>• Scenic advantage landscape preservation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Elevated Living Renovation Premium Support
              </h3>
              <p className="text-gray-600 mb-4">
                Professional construction debris removal services for Highland elevated living renovations.
                Coordinating with premium architectural contractors while maintaining sophisticated living character
                and elevated community standards that define our highland residential excellence.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Premium elevated renovation cleanup</li>
                <li>• Sophisticated home construction waste</li>
                <li>• High-end living renovation support</li>
                <li>• Elevated-respectful debris removal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Highland Elevated Heritage Focus */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Honoring Highland's Elevated Living Heritage
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Highland represents Oregon City's commitment to elevated residential excellence,
              where premium living standards and sophisticated community values create
              the elevated foundation that defines our highland residence experience and scenic advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏰</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Elevated Excellence Partnership</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Working in harmony with Highland's elevated living location and premium residential terrain characteristics.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Premium Residential Excellence</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Dedicated to serving properties that represent the finest elevated residential quality and sophisticated living heritage.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Highland Living Partnership</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Proud partnership with Highland residents to maintain and enhance our elevated living community's premium excellence.
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
              Highland Elevated Living Community Recognition
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Hearing from Highland's elevated living community members about their premium residence experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Living in Highland means living among the elevated excellence - our premium home represents the pinnacle of residential sophistication with breathtaking city views from our elevated terrain advantage.
                The cleanup team understood our elevated living perfectly. They navigated premium access considerations, handled sophisticated construction waste while preserving our scenic advantages,
                and treated our highland home with the premium standards it deserves. They're true elevated living specialists who understand our sophisticated lifestyle."
              </p>
              <p className="text-sm font-semibold text-gray-900">- The Montgomery Family, Highland Premium Residence Owners</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Highland is all about premium elevated living - sophisticated homes, high-end properties, and exceptional scenic advantages.
                When our elevated renovation created premium construction materials, they understood both the high-end materials we're using and the breathtaking views
                we protect. Their service matched our elevated living standards perfectly. Exceptional for our sophisticated highland community."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Premium Architectural Team, Highland Design Professionals</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "The Highland Elevated Living Association stewards our premium residence paradise - from sophisticated neighborhoods to scenic advantage properties.
                These service professionals consistently deliver - from handling high-end residential cleanouts to managing sophisticated construction projects -
                they understand how vital our elevated location and premium standards are to our community. They've become our trusted partners in maintaining what makes Highland extraordinary."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Highland Living Association, Premium Residence Guardians</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Highland Elevated Living Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How does service account for Highland's elevated residential character?
              </h3>
              <p className="text-gray-600">
                Highland's elevated residential character is fundamental to our service approach. We have specialized equipment for elevated terrain, experience maneuvering premium property access, understanding high-end residential standards, and awareness of sophisticated landscape features. Our crews are trained for elevated living challenges and know how to maintain premium service quality in highland environments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about protecting Highland's premium residential standards?
              </h3>
              <p className="text-gray-600">
                Premium residential standards are central to Highland service. We work carefully to maintain sophistication during service, protect high-end property features from damage, understand how our equipment and crew present to premium communities, and implement service procedures that preserve the premium living standards that make our elevated community so valuable.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do you handle sophisticated materials and high-end residential features?
              </h3>
              <p className="text-gray-600">
                Sophisticated material expertise is essential for Highland service. We understand the special handling required for high-end construction materials, premium architectural features, sophisticated landscaping elements, and high-end residential components common in elevated living homes. Our techniques and equipment are selected to match or exceed the premium quality standards that define elevated residential excellence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much does elevated residential junk removal cost in Highland?
              </h3>
              <p className="text-gray-600">
                Highland elevated projects range from $200-450 for premium residential cleanouts to $1200-1600 for high-end elevated renovations in sophisticated properties. We provide free personalized estimates that consider the elevated nature of Highland properties, sophisticated terrain accessibility requirements, premium material handling needs, and the high-end residential standards that define our elevated community. Every estimate reflects our understanding of elevated living property challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about seasonal highland considerations and premium landscape maintenance?
              </h3>
              <p className="text-gray-600">
                Seasonal highland considerations are a significant factor in Highland service. Our scheduling adapts to elevated terrain access, sophisticated landscape maintenance seasons, high-end property weather protection needs, and premium residential construction timing. We coordinate service delivery around elevated community standards, implement premium protection protocols, and maintain consistent service quality throughout all phases of elevated seasonal living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Highland's Elevated Living Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join the Highland elevated living community who trust us for their premium cleanup needs.
            Same-day service available throughout our sophisticated residence area. Call now or get your elevated living quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Highland Quote
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329 Now
            </a>
          </div>
          <div className="mt-8 text-primary-100">
            <p className="text-lg font-semibold">Highland Elevated Living Service • Licensed & Insured • Same-Day Service Available</p>
            <p className="text-sm mt-2">Serving Highland's Premium Residential Community & Oregon City Elevated Living Since 2018</p>
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
            "description": "Premium elevated living residence and sophisticated property junk removal services in Highland, Oregon City, OR",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Oregon City",
              "addressRegion": "OR",
              "addressCountry": "US"
            },
            "telephone": "(503) 753-2329",
            "url": "https://asjunkremoval.com/highland-junk-removal",
            "serviceArea": {
              "@type": "Place",
              "name": "Highland, Oregon City, OR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "385"
            },
            "openingHours": "Mo-Su",
            "serviceType": "Junk Removal Services",
            "areaServed": "Highland, Oregon City, OR"
          })
        }}
      />
    </div>
  )
}
