import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '#1 Junk Removal Service in Tower Vista, Oregon City - Summit View Specialists | AS Junk Removal',
  description: 'Leading junk removal service in Tower Vista, Oregon City. Summit view specialists, elevated community cleanup, eco-friendly disposal, transparent pricing. Call (503) 753-2329. Serving Tower Vista residents since 2018.',
  keywords: 'Tower Vista junk removal, junk removal Tower Vista Oregon City, junk hauler Tower Vista, same day junk removal Tower Vista, summit view junk removal Tower Vista OR, Tower Vista elevated community junk removal',
  openGraph: {
    title: '#1 Junk Removal Service in Tower Vista, Oregon City - Summit View Specialists',
    description: 'Leading junk removal service in Tower Vista, Oregon City. Summit view specialists with elevated expertise.',
    url: 'https://asjunkremoval.com/tower-vista-junk-removal',
    siteName: 'AS Junk Removal',
    images: [
      {
        url: '/images/junk-removal/oregon-city-junk-removal-team.webp',
        width: 1200,
        height: 630,
        alt: 'AS Junk Removal team serving Tower Vista summit community in Oregon City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Junk Removal Service in Tower Vista, Oregon City - Summit View Specialists',
    description: 'Leading junk removal service in Tower Vista, Oregon City. Summit view specialists.',
    images: ['/images/junk-removal/oregon-city-junk-removal-team.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/tower-vista-junk-removal',
  },
}

export default function TowerVistaJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Junk Removal{' '}
                <span className="text-gradient">Tower Vista</span>
                {' '}<span className="text-2xl md:text-3xl font-normal">Oregon City</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                #1 rated junk removal service in elevated Tower Vista, Oregon City.
                As summit view specialists, we understand the distinctive character
                of elevated communities and mountain valley perspectives since 2018.
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
                alt="AS Junk Removal professional team providing Tower Vista summit view junk removal services in Oregon City"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Tower Vista Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Tower Vista's Summit Community Since 2018
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Tower Vista occupies a commanding position in Oregon City's most elevated areas,
              where mountain views meet sophisticated residential living, creating a unique
              lifestyle that celebrates both natural beauty and elevated community standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">About Tower Vista Summit Community</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Elevated location with panoramic mountain and valley views
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Sophisticated residential community with premium properties
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mix of custom homes and luxury developments
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Elevated perspective on Oregon City and surrounding valleys
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Exclusive community atmosphere in Portland area's most beautiful settings</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Why Tower Vista Trusts AS Junk Removal</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Experience with elevated terrain and driveway challenges
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Understanding of luxury property standards and premium materials
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Respect for panoramic views and natural landscape features
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Commitment to maintaining Tower Vista's premier community status
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Partnership with our elevated community since our first day</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Tower Vista Summit Community Coverage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>• Tower Vista's elevated residential area</div>
              <div>• Summit-view homes and properties</div>
              <div>• Mountain perspective residential zones</div>
              <div>• Luxury custom home districts</div>
              <div>• Panoramic valley view properties</div>
              <div>• Exclusive elevated community areas</div>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              Complete coverage of Tower Vista's elevated summit community, serving homes that command Oregon City's most beautiful perspectives.
            </p>
          </div>
        </div>
      </section>

      {/* Tower Vista Summit Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tower Vista Summit Community Cleanup Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our services are specifically designed for Tower Vista's elevated lifestyle,
              understanding how mountain views, luxury standards, and elevated terrain
              create unique service needs in our premier summit community.
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
                Luxury View Home Cleanouts
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized cleanout services for Tower Vista's luxury homes.
                Understanding how elevated living, mountain views, and premium
                construction create unique residential cleanup requirements.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Luxury home cleaning services</li>
                <li>• Elevated property organization</li>
                <li>• Premium view preservation</li>
                <li>• Summit residence preparation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Summit Landscape Protection
              </h3>
              <p className="text-gray-600 mb-4">
                Expert handling of Tower Vista's mountain landscape and natural features.
                Managing seasonal yard waste, fallen branches, and landscaping materials
                with respect for our elevated community's natural mountain beauty.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Mountain landscape debris management</li>
                <li>• Elevated garden waste collection</li>
                <li>• Seasonal summit yard maintenance</li>
                <li>• Natural mountain scenery preservation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Luxury Mountain Renovations
              </h3>
              <p className="text-gray-600 mb-4">
                Professional construction debris removal services for Tower Vista luxury renovations.
                Coordinating with premium contractors while maintaining the elevated character
                and mountain view standards that define our summit community.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Luxury home renovation cleanup</li>
                <li>• Mountain view construction waste</li>
                <li>• Premium elevation renovation support</li>
                <li>• Summit-respectful debris removal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tower Vista Summit Heritage Focus */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Honoring Tower Vista's Elevated Summit Heritage
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Tower Vista represents a special place where Oregon City's natural beauty meets
              sophisticated residential living, where mountain perspectives become part of
              the daily lifestyle and where elevated communities create their own legacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏔️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Mountain Perspective Partnership</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Working in harmony with Tower Vista's mountain elevation location and natural terrain advantages.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Luxury Elevation Service</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Dedicated to serving properties that represent the finest elevated residential quality and architectural distinction.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🌄</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Summit Community Excellence</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Commitment to the unique elevated community character that defines Tower Vista as Oregon City's premier summit location.
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
              Tower Vista Elevated Summit Community Recognition
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Hearing from Tower Vista's elevated summit community members about their mountain perspective experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Living in Tower Vista with those incredible mountain views, you need a service that understands elevation challenges and appreciates natural beauty.
                These specialists maneuvered our steep driveway perfectly, handled construction debris while protecting our valley views, and treated our luxury
                custom home with the sophistication it deserves. They're summit specialists who get our elevated lifestyle."
              </p>
              <p className="text-sm font-semibold text-gray-900">- The Montgomery Family, Tower Vista Mountain View Residents</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Tower Vista is all about that elevated Oregon lifestyle - mountain views, custom homes, and elevated community standards.
                When our luxury renovation created significant debris, they understood both the high-end materials we're using and the natural beauty
                we worked hard to preserve. Their service matched our property standards perfectly. Exceptional for our mountain community."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Summit Architects and Builders, Tower Vista Design Professionals</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "I represent Tower Vista's community association, and we demand service that matches our elevated standards. These professionals
                consistently deliver - from handling our autumn mountain cleanup to managing residential construction projects - they understand
                how special our summit location is. They've become our trusted partners in maintaining what makes Tower Vista so exceptional."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Tower Vista Community Association Leadership</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tower Vista Elevated Summit Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How does service account for Tower Vista's elevated location?
              </h3>
              <p className="text-gray-600">
                Tower Vista's elevated location is fundamental to our service approach. We have specialized equipment for steep terrain, experience maneuvering challenging driveway access, understanding seasonal mountain weather impacts, and awareness of natural terrain changes that affect property access. Our crews are trained for elevated terrain challenges and know how to maintain service quality at any altitude.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about protecting Tower Vista's mountain view scenery?
              </h3>
              <p className="text-gray-600">
                Scenery protection is central to Tower Vista service. We work carefully to minimize visual impact during service, protect natural landscape features from damage, understand how our trucks and equipment might affect sightlines, and implement cleanup procedures that don't damage the natural mountain beauty that makes Tower Vista so valuable. Our approach ensures that the mountain views that define our community remain unobstructed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do you handle premium materials and luxury home features?
              </h3>
              <p className="text-gray-600">
                Premium materials expertise is essential for Tower Vista service. We understand the special handling required for high-end finishes, luxury appliances, custom millwork, premium flooring, and sophisticated architectural features common in elevated community homes. Our techniques and materials are selected to match or exceed the quality standards that define our summit residential living.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much does elevated summit junk removal cost in Tower Vista?
              </h3>
              <p className="text-gray-600">
                Tower Vista elevated projects range from $200-450 for luxury residential cleanouts to $1000-1400 for high-end renovation projects. We provide free personalized estimates that consider the elevated nature of Tower Vista properties, terrain accessibility requirements, luxury material handling needs, and the premium construction standards that define our mountain community. Every estimate reflects our understanding of summit property challenges and elevated living quality standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about seasonal mountain weather considerations?
              </h3>
              <p className="text-gray-600">
                Seasonal mountain weather is a significant factor in Tower Vista service. Our scheduling adapts to winter access challenges, summer landscaping needs, seasonal road conditions, and weather-sensitive construction timing. We coordinate service delivery around mountain weather patterns, implement season-specific safety protocols, and maintain consistent service quality regardless of weather conditions affecting our elevated location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Tower Vista's Elevated Summit Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join the Tower Vista summit community who trust us for their elevated cleanup needs.
            Same-day service available throughout our majestic summit area. Call now or get your mountain view quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Tower Vista Quote
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329 Now
            </a>
          </div>
          <div className="mt-8 text-primary-100">
            <p className="text-lg font-semibold">Tower Vista Elevated Summit Service • Licensed & Insured • Same-Day Service Available</p>
            <p className="text-sm mt-2">Serving Tower Vista's Mountain Community & Oregon City Summit Living Since 2018</p>
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
            "description": "Elevated summit residence and mountain view junk removal services in Tower Vista, Oregon City, OR",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Oregon City",
              "addressRegion": "OR",
              "addressCountry": "US"
            },
            "telephone": "(503) 753-2329",
            "url": "https://asjunkremoval.com/tower-vista-junk-removal",
            "serviceArea": {
              "@type": "Place",
              "name": "Tower Vista, Oregon City, OR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "310"
            },
            "openingHours": "Mo-Su",
            "serviceType": "Junk Removal Services",
            "areaServed": "Tower Vista, Oregon City, OR"
          })
        }}
      />
    </div>
  )
}
