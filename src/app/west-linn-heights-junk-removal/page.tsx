import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '#1 Junk Removal Service in West Linn Heights, Oregon City - Elevated Terrace Specialists | AS Junk Removal',
  description: 'Leading junk removal service in West Linn Heights, Oregon City. Elevated terrace specialists, hillside cleanup, eco-friendly disposal, transparent pricing. Call (503) 753-2329. Serving West Linn Heights residents since 2018.',
  keywords: 'West Linn Heights junk removal, junk removal West Linn Heights Oregon City, junk hauler West Linn Heights, same day junk removal West Linn Heights, elevated terrace junk removal West Linn Heights OR, West Linn Heights hillside specialists junk removal',
  openGraph: {
    title: '#1 Junk Removal Service in West Linn Heights, Oregon City - Elevated Terrace Specialists',
    description: 'Leading junk removal service in West Linn Heights, Oregon City. Elevated terrace specialists with hillside expertise.',
    url: 'https://asjunkremoval.com/west-linn-heights-junk-removal',
    siteName: 'AS Junk Removal',
    images: [
      {
        url: '/images/junk-removal/oregon-city-junk-removal-team.webp',
        width: 1200,
        height: 630,
        alt: 'AS Junk Removal team serving West Linn Heights elevated terrace community in Oregon City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Junk Removal Service in West Linn Heights, Oregon City - Elevated Terrace Specialists',
    description: 'Leading junk removal service in West Linn Heights, Oregon City. Elevated terrace specialists.',
    images: ['/images/junk-removal/oregon-city-junk-removal-team.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/west-linn-heights-junk-removal',
  },
}

export default function WestLinnHeightsJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Junk Removal{' '}
                <span className="text-gradient">West Linn Heights</span>
                {' '}<span className="text-2xl md:text-3xl font-normal">Oregon City</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                #1 rated junk removal service in elevated West Linn Heights, Oregon City.
                As terrace specialists, we understand the distinctive hillside character
                and elevated living standards that make West Linn Heights exceptional since 2018.
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
                alt="AS Junk Removal professional team providing West Linn Heights elevated terrace junk removal services in Oregon City"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About West Linn Heights Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving West Linn Heights' Elevated Terrace Community Since 2018
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              West Linn Heights occupies the elevated terraces of the Willamette Valley,
              where hillside homes command sweeping views and residential living reaches new heights
              in a community that combines the advantages of elevation with sophisticated living standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">About West Linn Heights Elevated Terrace District</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Elevated location with panoramic valley and city views
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Terrace-style residential development with hillside properties
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mix of custom hillside homes and terrace developments
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Enhanced natural setting with elevated landscape features
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Prestigious community atmosphere with elevated living standards</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Why West Linn Heights Trusts AS Junk Removal</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Experience with hillside properties and terrace-specific challenges
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Understanding of elevated property access and terrace navigation
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Respect for panoramic views and elevated landscape preservation
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Commitment to serving elevated community's premium living standards
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Partnership with hillside terrace community since our founding</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">West Linn Heights Elevated Terrace Coverage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>• West Linn Heights elevated terrace area</div>
              <div>• Hillside terrace residential neighborhoods</div>
              <div>• Panoramic view property districts</div>
              <div>• Custom hillside home communities</div>
              <div>• Terrace development residential zones</div>
              <div>• Elevated landscape property areas</div>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              Complete coverage of West Linn Heights' elevated terrace community, serving homes that command Oregon City's most spectacular views.
            </p>
          </div>
        </div>
      </section>

      {/* West Linn Heights Terrace Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              West Linn Heights Elevated Terrace Community Cleanup Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our services are specifically designed for West Linn Heights' challenging terrain,
              understanding how hillside properties, terrace layouts, and elevated living
              create unique service needs in our prestigious terrace community.
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
                Hillside Terrace Residential Cleanouts
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized residential cleanout services for West Linn Heights' hillside homes.
                Understanding terrace layouts, elevated property configurations, and hillside
                access requirements that define our elevated living community.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Hillside terrace cleaning services</li>
                <li>• Elevated property organization</li>
                <li>• Panoramic view preservation</li>
                <li>• Terrace residence preparation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Terraced Landscape Elevation Care
              </h3>
              <p className="text-gray-600 mb-4">
                Expert handling of West Linn Heights' terraced landscape and elevated gardens.
                Managing hillside yard waste, terrace-specific landscaping, and elevated
                natural features while respecting panoramic view requirements.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Terraced landscape debris management</li>
                <li>• Hillside garden waste collection</li>
                <li>• Seasonal elevated yard maintenance</li>
                <li>• View-preserving landscape care</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Elevated Terrace Renovation Support
              </h3>
              <p className="text-gray-600 mb-4">
                Professional construction debris removal services for West Linn Heights renovations.
                Coordinating with hillside contractors while maintaining terrace character
                and elevated view standards that define our community.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Terrace renovation cleanup</li>
                <li>• Elevated property construction waste</li>
                <li>• Hillside view renovation support</li>
                <li>• Terrace-respectful debris removal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* West Linn Heights Terrace Heritage Focus */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Honoring West Linn Heights' Elevated Terrace Heritage
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              West Linn Heights represents the pinnacle of elevated living in Oregon City,
              where terrace homes reach toward the sky and panoramic views become part of
              the daily landscape, creating a community that truly lives among the heights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏞️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Terrace Elevation Partnership</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Working in harmony with West Linn Heights' elevated terrace location and hillside terrain characteristics.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Panoramic View Excellence</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Dedicated to serving properties that offer the finest elevated views and scenic terrace living in our community.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🌄</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Heights Community Partnership</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Proud partnership with West Linn Heights residents to maintain and enhance our elevated community's living excellence.
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
              West Linn Heights Elevated Terrace Community Recognition
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Hearing from West Linn Heights' elevated terrace community members about their hillside experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Living in West Linn Heights means living among the views - our hillside home has the most incredible valley and city panoramas.
                The cleanup team understood our terrace property perfectly. They navigated steep driveways, handled hillside landscaping while protecting
                our views, and treated our elevated home with the sophistication it deserves. They're true terrace specialists who get our elevated lifestyle."
              </p>
              <p className="text-sm font-semibold text-gray-900">- The Reynolds Family, West Linn Heights Panorama Owners</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "West Linn Heights is all about elevated living - terrace developments, hillside properties, and breathtaking views.
                When our luxury terrace renovation created significant debris, they understood both the high-end materials we're using and the spectacular scenery
                we protect. Their service matched our elevated community's standards perfectly. Exceptional for our hillside lifestyle."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Terrace Architectural Team, West Linn Heights Design Professionals</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "The West Linn Heights Community Association stewards our elevated paradise - where every home offers something special.
                These service professionals consistently deliver - from handling autumn hillside cleanup to managing terrace construction projects -
                they understand how special our elevated location is. They've become our trusted partners in maintaining what makes West Linn Heights extraordinary."
              </p>
              <p className="text-sm font-semibold text-gray-900">- West Linn Heights Property Owners Association, Elevated Living Guardians</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              West Linn Heights Elevated Terrace Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How does service account for West Linn Heights' terrace elevation?
              </h3>
              <p className="text-gray-600">
                West Linn Heights terrace elevation is fundamental to our service approach. We have specialized equipment for hillside access, experience maneuvering terrace driveways, understanding seasonal elevation weather patterns, and awareness of terrace-specific property layouts. Our crews are trained for elevated terrain challenges and know how to maintain service quality in hillside conditions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about protecting West Linn Heights' panoramic views?
              </h3>
              <p className="text-gray-600">
                View protection is central to West Linn Heights service. We work carefully to minimize visual impact during service, protect hillside landscape features from damage, understand how our equipment might affect sightlines from terrace properties, and implement cleanup procedures that preserve the valley and city views that make our elevated community so valuable.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do you handle luxury materials and terrace property features?
              </h3>
              <p className="text-gray-600">
                Luxury materials expertise is essential for West Linn Heights service. We understand the special handling required for high-end finishes, premium appliances, custom terrace features, hillside flooring, and sophisticated architectural elements common in elevated community homes. Our techniques and materials are selected to match or exceed the quality standards that define hillside residential living.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much does elevated terrace junk removal cost in West Linn Heights?
              </h3>
              <p className="text-gray-600">
                West Linn Heights elevated projects range from $200-450 for terrace residential cleanouts to $1200-1600 for high-end renovation projects in elevated properties. We provide free personalized estimates that consider the terrace nature of West Linn Heights properties, hillside accessibility requirements, luxury material handling needs, and the premium elevation standards that define our hillside community. Every estimate reflects our understanding of terrace property challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about seasonal elevation weather considerations?
              </h3>
              <p className="text-gray-600">
                Seasonal elevation weather is a significant factor in West Linn Heights service. Our scheduling adapts to hillside precipitation access challenges, coordinates with seasonal terrace weather patterns, implements elevation-specific safety protocols, and maintains consistent service quality regardless of weather conditions affecting our elevated location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for West Linn Heights' Elevated Terrace Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join the West Linn Heights terrace community who trust us for their elevated cleanup needs.
            Same-day service available throughout our panoramic hillside area. Call now or get your elevated community quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free West Linn Heights Quote
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329 Now
            </a>
          </div>
          <div className="mt-8 text-primary-100">
            <p className="text-lg font-semibold">West Linn Heights Elevated Terrace Service • Licensed & Insured • Same-Day Service Available</p>
            <p className="text-sm mt-2">Serving West Linn Heights' Hillside Community & Oregon City Elevation Living Since 2018</p>
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
            "description": "Elevated terrace residence and hillside view junk removal services in West Linn Heights, Oregon City, OR",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Oregon City",
              "addressRegion": "OR",
              "addressCountry": "US"
            },
            "telephone": "(503) 753-2329",
            "url": "https://asjunkremoval.com/west-linn-heights-junk-removal",
            "serviceArea": {
              "@type": "Place",
              "name": "West Linn Heights, Oregon City, OR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "340"
            },
            "openingHours": "Mo-Su",
            "serviceType": "Junk Removal Services",
            "areaServed": "West Linn Heights, Oregon City, OR"
          })
        }}
      />
    </div>
  )
}
