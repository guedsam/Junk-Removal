import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'West Linn Junk Removal | #1 Local Junk Hauling Service | Same-Day Pickup',
  description: 'Top-rated West Linn junk removal service. Same-day pickup, eco-friendly disposal, transparent pricing. Serving all West Linn neighborhoods including Robinwood, Sunset, Willamette. Call (503) 753-2329 for free quote.',
  keywords: 'West Linn junk removal, junk hauling West Linn Oregon, furniture removal West Linn, appliance disposal West Linn, construction debris removal West Linn, estate cleanout West Linn, same day junk removal West Linn, West Linn junk pickup, residential junk removal West Linn, commercial junk removal West Linn, Robinwood junk removal, Sunset junk removal, Willamette junk removal, West Linn OR junk removal',
  openGraph: {
    title: 'West Linn Junk Removal | #1 Local Junk Hauling Service | Same-Day Pickup',
    description: 'Top-rated West Linn junk removal service. Same-day pickup, eco-friendly disposal, transparent pricing. Serving all West Linn neighborhoods including Robinwood, Sunset, Willamette.',
    url: 'https://asjunkremoval.com/west-linn-junk-removal',
    siteName: 'Andrew and Sons Junk Removal',
    images: [
      {
        url: '/images/junk-removal/professional-junk-removal-crew.webp',
        width: 1200,
        height: 630,
        alt: 'Professional West Linn Junk Removal Team with Truck',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'West Linn Junk Removal | #1 Local Junk Hauling Service',
    description: 'Top-rated West Linn junk removal service. Same-day pickup, eco-friendly disposal, transparent pricing.',
    images: ['/images/junk-removal/professional-junk-removal-crew.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/west-linn-junk-removal',
  },
}

export default function WestLinnJunkRemovalPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Andrew and Sons Junk Removal - West Linn',
    image: '/images/junk-removal/professional-junk-removal-crew.webp',
    '@id': 'https://asjunkremoval.com/west-linn-junk-removal',
    url: 'https://asjunkremoval.com/west-linn-junk-removal',
    telephone: '+15037532329',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main St',
      addressLocality: 'Oregon City',
      addressRegion: 'OR',
      postalCode: '97045',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.3651,
      longitude: -122.6120
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '07:00',
      closes: '19:00'
    },
    sameAs: [
      'https://www.facebook.com/asjunkremoval',
      'https://www.instagram.com/asjunkremoval'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '156',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        author: {
          '@type': 'Person',
          name: 'Patricia Williams'
        },
        reviewBody: 'Exceptional junk removal service in West Linn! They handled our home renovation debris removal professionally and efficiently. The team was courteous and the pricing was very fair.'
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        author: {
          '@type': 'Person',
          name: 'Robert Anderson'
        },
        reviewBody: 'Best junk removal company in West Linn! Same-day service, eco-friendly disposal, and they went above and beyond during our estate cleanout. Highly recommend!'
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        author: {
          '@type': 'Person',
          name: 'Lisa Thompson'
        },
        reviewBody: 'Outstanding service from start to finish. They removed all our old furniture and appliances from our West Linn home quickly and professionally. Will definitely use again!'
      }
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 45.3651,
        longitude: -122.6120
      },
      geoRadius: '25000'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'West Linn Junk Removal Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Residential Junk Removal West Linn'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Junk Removal West Linn'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Furniture Removal West Linn'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Appliance Disposal West Linn'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Construction Debris Removal West Linn'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Estate Cleanout West Linn'
          }
        }
      ]
    }
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                #1 West Linn{' '}
                <span className="text-gradient">Junk Removal</span>{' '}
                Service
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Top-rated junk removal service in West Linn, Oregon. Same-day pickup, eco-friendly disposal, 
                and transparent pricing. Serving Robinwood, Sunset, Willamette, and all West Linn neighborhoods.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Free Quote
                </Link>
                <a href="tel:+15037532329" className="btn-secondary">
                  Call (503) 753-2329
                </a>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  <span>4.9/5 (156 Reviews)</span>
                </div>
                <div>•</div>
                <div>Same-Day Service</div>
                <div>•</div>
                <div>Licensed & Insured</div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/junk-removal/professional-junk-removal-crew.webp" 
                alt="Professional West Linn junk removal team with truck ready for same-day pickup"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete West Linn Junk Removal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive junk hauling services for all West Linn neighborhoods. 
              From Robinwood to Sunset and Willamette, we provide fast, reliable service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Residential Junk Removal West Linn
              </h3>
              <p className="text-gray-600 mb-4">
                Complete home cleanouts, furniture removal, appliance disposal, and general household junk pickup throughout all West Linn neighborhoods.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Furniture & mattress removal</li>
                <li>• Appliance disposal & recycling</li>
                <li>• Garage & basement cleanouts</li>
                <li>• Estate cleanout services</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Commercial Junk Removal West Linn
              </h3>
              <p className="text-gray-600 mb-4">
                Professional commercial cleanouts for West Linn businesses, offices, retail spaces, and construction sites.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Office furniture & equipment removal</li>
                <li>• Retail space cleanouts</li>
                <li>• Construction debris removal</li>
                <li>• Warehouse cleanups</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Construction Debris Removal
              </h3>
              <p className="text-gray-600 mb-4">
                Safe and efficient removal of construction debris, renovation waste, and building materials from West Linn properties.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Drywall & lumber removal</li>
                <li>• Flooring & tile disposal</li>
                <li>• Renovation debris cleanup</li>
                <li>• Contractor waste removal</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Estate & Moving Cleanouts
              </h3>
              <p className="text-gray-600 mb-4">
                Compassionate estate cleanout and moving services for West Linn families, handled with care and respect.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Complete estate cleanouts</li>
                <li>• Moving & downsizing help</li>
                <li>• Donation coordination</li>
                <li>• Sensitive item handling</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Specialty Item Removal
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized removal services for unique and challenging items in West Linn, handled by trained professionals.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Hot tub & spa removal</li>
                <li>• Piano & organ removal</li>
                <li>• Exercise equipment disposal</li>
                <li>• Electronic waste recycling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              West Linn Neighborhoods We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Professional junk removal service throughout all West Linn areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Robinwood</h3>
              <p className="text-sm text-gray-600">Robinwood neighborhood, established homes, family-friendly community</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Sunset</h3>
              <p className="text-sm text-gray-600">Sunset area, hillside properties, scenic residential neighborhoods</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Willamette</h3>
              <p className="text-sm text-gray-600">Willamette district, historic area, riverside communities</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Hidden Springs</h3>
              <p className="text-sm text-gray-600">Hidden Springs area, newer developments, upscale neighborhoods</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              <strong>Zip Codes Served:</strong> 97068, 97034, 97035
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why West Linn Chooses Andrew and Sons
            </h2>
            <p className="text-xl text-gray-600">
              The most trusted junk removal company in West Linn, Oregon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Same-Day Service</h3>
              <p className="text-gray-600">
                Most West Linn junk removal requests completed the same day you call. Fast, reliable service when you need it.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Licensed & Insured</h3>
              <p className="text-gray-600">
                Fully licensed and insured junk removal company serving West Linn. Your property and belongings are protected.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Eco-Friendly Disposal</h3>
              <p className="text-gray-600">
                We recycle and donate whenever possible. Responsible junk disposal that protects West Linn's environment.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Transparent Pricing</h3>
              <p className="text-gray-600">
                No hidden fees or surprises. Fair, upfront pricing for all West Linn junk removal services.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Local West Linn Team</h3>
              <p className="text-gray-600">
                Oregon-based team that knows West Linn inside and out. Supporting the local community we serve.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">5-Star Service</h3>
              <p className="text-gray-600">
                Consistently rated 5 stars by West Linn customers. Professional, courteous, and reliable service every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              West Linn Junk Removal Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Transparent, fair pricing for all West Linn neighborhoods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Small Load</h3>
              <div className="text-4xl font-bold text-primary-600 mb-2">$150-250</div>
              <p className="text-gray-600 mb-6">
                Perfect for single items or small cleanouts. Fits in 1/4 of our truck.
              </p>
              <ul className="text-left space-y-2 text-sm text-gray-600">
                <li>• Few pieces of furniture</li>
                <li>• Small appliances</li>
                <li>• Boxes and bags</li>
                <li>• Single room cleanout</li>
              </ul>
            </div>

            <div className="bg-primary-600 text-white rounded-xl p-8 text-center transform scale-105 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Medium Load</h3>
              <div className="text-4xl font-bold mb-2">$300-450</div>
              <p className="text-primary-100 mb-6">
                Most popular option. Fits in 1/2 of our truck. Great value!
              </p>
              <ul className="text-left space-y-2 text-sm text-primary-100">
                <li>• Multiple furniture pieces</li>
                <li>• Large appliances</li>
                <li>• Garage cleanout</li>
                <li>• Office furniture</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Large Load</h3>
              <div className="text-4xl font-bold text-primary-600 mb-2">$500-750</div>
              <p className="text-gray-600 mb-6">
                Full truck load for major cleanouts and construction debris.
              </p>
              <ul className="text-left space-y-2 text-sm text-gray-600">
                <li>• Whole house cleanout</li>
                <li>• Construction debris</li>
                <li>• Estate cleanout</li>
                <li>• Commercial cleanout</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              All prices include labor, transportation, and responsible disposal. 
              No hidden fees for West Linn customers.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Your Free West Linn Quote
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              West Linn Junk Removal FAQ
            </h2>
            <p className="text-xl text-gray-600">
              Common questions from West Linn customers
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you provide same-day junk removal in West Linn?
              </h3>
              <p className="text-gray-600">
                Yes! We offer same-day junk removal service throughout West Linn, including Robinwood, Sunset, Willamette, and Hidden Springs neighborhoods. Call before 2 PM for same-day pickup availability.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What areas of West Linn do you serve?
              </h3>
              <p className="text-gray-600">
                We serve all West Linn neighborhoods including Robinwood, Sunset, Willamette, Hidden Springs, and surrounding areas. We cover zip codes 97068, 97034, and 97035.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How much does junk removal cost in West Linn?
              </h3>
              <p className="text-gray-600">
                Our West Linn junk removal pricing ranges from $150-250 for small loads, $300-450 for medium loads, and $500-750 for large loads. All prices include labor, transportation, and disposal fees with no hidden costs.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What items can you remove from my West Linn property?
              </h3>
              <p className="text-gray-600">
                We remove furniture, appliances, electronics, construction debris, yard waste, and most household items. We cannot remove hazardous materials, chemicals, or items containing asbestos. Contact us if you're unsure about specific items.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Are you licensed and insured for West Linn junk removal?
              </h3>
              <p className="text-gray-600">
                Yes, we are fully licensed and insured to operate in West Linn and throughout Oregon. Our insurance protects your property and gives you peace of mind during the junk removal process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for West Linn's Best Junk Removal Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied West Linn customers. Same-day service available. 
            Call now or get your free online quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Quote Online
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329 Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
