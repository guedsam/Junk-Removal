import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '#1 Junk Removal Service in Park Place, Oregon City - Quality Living Specialists | AS Junk Removal',
  description: 'Leading junk removal service in Park Place, Oregon City. Quality living specialists, residential excellence, eco-friendly disposal, transparent pricing. Call (503) 753-2329. Serving Park Place residents since 2018.',
  keywords: 'Park Place junk removal, junk removal Park Place Oregon City, junk hauler Park Place, same day junk removal Park Place, quality living junk removal Park Place OR, Park Place residential excellence junk removal, Park Place neighborhood quality junk removal',
  openGraph: {
    title: '#1 Junk Removal Service in Park Place, Oregon City - Quality Living Specialists',
    description: 'Leading junk removal service in Park Place, Oregon City. Quality living specialists with residential excellence.',
    url: 'https://asjunkremoval.com/park-place-junk-removal',
    siteName: 'AS Junk Removal',
    images: [
      {
        url: '/images/junk-removal/oregon-city-junk-removal-team.webp',
        width: 1200,
        height: 630,
        alt: 'AS Junk Removal team serving Park Place quality living community in Oregon City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Junk Removal Service in Park Place, Oregon City - Quality Living Specialists',
    description: 'Leading junk removal service in Park Place, Oregon City. Quality living specialists.',
    images: ['/images/junk-removal/oregon-city-junk-removal-team.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/park-place-junk-removal',
  },
}

export default function ParkPlaceJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Junk Removal{' '}
                <span className="text-gradient">Park Place</span>
                {' '}<span className="text-2xl md:text-3xl font-normal">Oregon City</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                #1 rated junk removal service in prestigious Park Place, Oregon City.
                As quality living specialists, we understand the distinctive excellence
                and residential standards that make Park Place Oregon City's most distinguished area since 2018.
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
                alt="AS Junk Removal professional team providing Park Place quality living junk removal services in Oregon City"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Park Place Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Park Place's Quality Living Community Since 2018
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Park Place represents Oregon City at its finest, where quality living meets
              residential excellence in a community that sets the standard for what
              fine homeownership means in Clackamas County, Oregon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">About Park Place Quality Living District</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Premier residential community with distinguished addresses
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Quality construction and architectural excellence standards
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Upscale residential properties with premium amenities
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Sophisticated homeowners and discriminating residents
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Residential community that values quality and distinction</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Why Park Place Trusts AS Junk Removal</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Superior service standards that meet Park Place excellence
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Professional presentation worthy of our community's prestige
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Premium service delivery with attention to detail
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Experience with luxury home renovations and maintenance
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Partnership with Oregon City's quality residential community</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Park Place Quality Living Coverage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>• Park Place premier residential area</div>
              <div>• Quality home neighborhoods</div>
              <div>• Upscale residential developments</div>
              <div>• Distinguished home properties</div>
              <div>• Premium residential corridors</div>
              <div>• Quality living community areas</div>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              Complete coverage of Park Place's distinguished residential community, serving homes that represent Oregon City's finest quality living.
            </p>
          </div>
        </div>
      </section>

      {/* Park Place Quality Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Park Place Quality Residential Cleanup Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our services reflect the quality standards that Park Place residents expect
              and deserve, delivering superior service that enhances the distinction
              and excellence of our prestigious residential community.
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
                Premium Residential Cleanouts
              </h3>
              <p className="text-gray-600 mb-4">
                Sophisticated residential cleanout services designed for Park Place's
                quality homes. Understanding the premium materials, distinctive architecture,
                and superior construction standards of our community properties.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Luxury home cleaning services</li>
                <li>• Premium property organization</li>
                <li>• Quality residential maintenance</li>
                <li>• High-end property preparation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Luxury Renovation Cleanup
              </h3>
              <p className="text-gray-600 mb-4">
                Expert handling of renovation debris from Park Place's luxury homes.
                Coordinating with premier contractors and respecting the superior quality
                standards that define our community's renovation excellence.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• High-end renovation cleanup</li>
                <li>• Luxury property renovation waste</li>
                <li>• Premium building material removal</li>
                <li>• Quality construction debris handling</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Estate Quality Family Support
              </h3>
              <p className="text-gray-600 mb-4">
                Compassionate estate services for Park Place families transitioning legacy homes.
                Handling cherished family possessions with the dignity and respect they deserve
                in our prestigious residential community.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Estate transition with sophistication</li>
                <li>• Legacy property family support</li>
                <li>• Quality family asset handling</li>
                <li>• Residential family legacy preservation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Park Place Quality Community Focus */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Honoring Park Place's Distinction and Excellence
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Park Place stands as testament to the pinnacle of Oregon City residential living,
              where superior quality meets exceptional community standards, creating
              an environment where excellence becomes the expected norm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Quality Standards Excellence</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Maintaining and exceeding the superior quality standards that define Park Place as Oregon City's residential excellence.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Premium Residential Service</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Dedicated to serving properties that represent the finest residential quality and architectural distinction in our community.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Community Legacy Partnership</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Proud partners in maintaining Park Place's legacy of residential distinction and community excellence in Oregon City.
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
              Park Place Quality Residential Community Recognition
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Hearing from Park Place's distinguished residential community members about their premium service experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Park Place is about quality living - every detail matters. When we needed our luxury kitchen renovation cleaned up,
                we expected perfection and got it. They handled our premium granite countertops, high-end appliances, and imported Italian tile
                with the care they deserve. Service that matches our home's quality perfectly."
              </p>
              <p className="text-sm font-semibold text-gray-900">- The Manning Family, Park Place Luxury Renovation</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "We chose Park Place because of the quality that defines this neighborhood. When handling our estate cleanout after moving to
                a retirement community, they treated our Park Place home with the respect it deserves. Every family heirloom, every piece of
                premium furniture, every custom finish was handled with care. Quality service for a quality neighborhood."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Estate Processors, Legacy Park Place Family</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Park Place attracts residents who value quality in every aspect of life. This service team understands that. They brought
                sophistication to our garage organization project and respected the premium features of our home. From their professional
                uniforms to their careful handling of expensive equipment, they represent the quality we expect in our community."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Quality Homeowners Association, Park Place Residential Committee</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Park Place Quality Residential Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How does service in Park Place meet the community's quality standards?
              </h3>
              <p className="text-gray-600">
                Quality is the foundation of Park Place service. We match our methods and materials to the premium quality that defines our community. This includes superior equipment for delicate high-end materials, professionally trained teams that understand luxury properties, and service protocols that maintain the sophistication our residents expect. Our approach reflects the same commitment to excellence that makes Park Place Oregon City's premier residential address.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about handling premium materials and luxury finishes in Park Place homes?
              </h3>
              <p className="text-gray-600">
                Premium materials are our expertise. We understand the special handling required for granite, marble, exotic hardwoods, custom millwork, high-end appliances, and other luxury finishes common in Park Place homes. Our techniques include specialized protective materials, precision loading methods, and industry best practices that protect rather than damage these premium investments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do you ensure discretion and professionalism in our prestigious community?
              </h3>
              <p className="text-gray-600">
                Discretion and professionalism are foundational to Park Place service. Our teams are trained in privacy protocols specific to our community's needs, we use superior equipment that maintains presentation standards, and our communication respects the sophistication that defines life in Park Place. Every detail, from our uniforms to our vehicles, reflects the quality our residents expect and deserve.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much does premium quality junk removal cost in Park Place?
              </h3>
              <p className="text-gray-600">
                Park Place premium projects range from $200-450 for luxury residential cleanouts to $1000-1400 for high-end renovation projects. We provide free personalized estimates that consider the premium quality of Park Place properties, special handling requirements for luxury materials, and the sophisticated service standards that define our community. Every quote reflects our understanding of Park Place's quality living expectations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do you coordinate with premium residential contractors in Park Place?
              </h3>
              <p className="text-gray-600">
                Premium coordination is our specialty. We work seamlessly with the Architectural Digest-level contractors, interior designers, and luxury remodelers that service Park Place homes. Our scheduling adapts to the precision timelines of high-end construction, our methods complement the work of premium tradespeople, and our communication maintains the high standards expected by these professionals and their discerning clients in our quality community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Park Place's Premium Quality Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join the Park Place quality residential community who trust us for their premium cleanup needs.
            Same-day service available throughout our distinguished community. Call now or get your premium quality quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Park Place Quote
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329 Now
            </a>
          </div>
          <div className="mt-8 text-primary-100">
            <p className="text-lg font-semibold">Park Place Quality Residential Service • Licensed & Insured • Same-Day Service Available</p>
            <p className="text-sm mt-2">Serving Park Place's Distinction Residential Community & Oregon City Excellence Since 2018</p>
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
            "description": "Premium quality residential junk removal services in Park Place, Oregon City, OR",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Oregon City",
              "addressRegion": "OR",
              "addressCountry": "US"
            },
            "telephone": "(503) 753-2329",
            "url": "https://asjunkremoval.com/park-place-junk-removal",
            "serviceArea": {
              "@type": "Place",
              "name": "Park Place, Oregon City, OR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "280"
            },
            "openingHours": "Mo-Su",
            "serviceType": "Junk Removal Services",
            "areaServed": "Park Place, Oregon City, OR"
          })
        }}
      />
    </div>
  )
}
