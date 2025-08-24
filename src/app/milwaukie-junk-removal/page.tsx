import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Milwaukie Junk Removal | #1 Local Junk Hauling Service | Same-Day Pickup',
  description: 'Top-rated Milwaukie junk removal service. Same-day pickup, eco-friendly disposal, transparent pricing. Serving all Milwaukie neighborhoods including Downtown, Sellwood, Westmoreland. Call (503) 753-2329 for free quote.',
  keywords: 'Milwaukie junk removal, junk hauling Milwaukie Oregon, furniture removal Milwaukie, appliance disposal Milwaukie, construction debris removal Milwaukie, estate cleanout Milwaukie, same day junk removal Milwaukie, Milwaukie junk pickup, residential junk removal Milwaukie, commercial junk removal Milwaukie, Sellwood junk removal, Westmoreland junk removal, downtown Milwaukie junk removal',
  openGraph: {
    title: 'Milwaukie Junk Removal | #1 Local Junk Hauling Service | Same-Day Pickup',
    description: 'Top-rated Milwaukie junk removal service. Same-day pickup, eco-friendly disposal, transparent pricing. Serving all Milwaukie neighborhoods including Downtown, Sellwood, Westmoreland.',
    url: 'https://asjunkremoval.com/milwaukie-junk-removal',
    siteName: 'Andrew and Sons Junk Removal',
    images: [
      {
        url: '/images/junk-removal/professional-junk-removal-crew.webp',
        width: 1200,
        height: 630,
        alt: 'Professional Milwaukie Junk Removal Team with Truck',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Milwaukie Junk Removal | #1 Local Junk Hauling Service',
    description: 'Top-rated Milwaukie junk removal service. Same-day pickup, eco-friendly disposal, transparent pricing.',
    images: ['/images/junk-removal/professional-junk-removal-crew.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/milwaukie-junk-removal',
  },
}

export default function MilwaukieJunkRemovalPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Andrew and Sons Junk Removal - Milwaukie',
    image: '/images/junk-removal/professional-junk-removal-crew.webp',
    '@id': 'https://asjunkremoval.com/milwaukie-junk-removal',
    url: 'https://asjunkremoval.com/milwaukie-junk-removal',
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
      latitude: 45.4465,
      longitude: -122.6398
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
      reviewCount: '127',
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
          name: 'Sarah Johnson'
        },
        reviewBody: 'Excellent junk removal service in Milwaukie! They arrived on time, gave a fair quote, and cleaned up everything perfectly. Highly recommend for anyone in the Milwaukie area.'
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
          name: 'Mike Thompson'
        },
        reviewBody: 'Best junk removal company in Milwaukie! Professional, affordable, and eco-friendly. They handled our estate cleanout with care and respect.'
      }
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 45.4465,
        longitude: -122.6398
      },
      geoRadius: '25000'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Milwaukie Junk Removal Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Residential Junk Removal Milwaukie'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Junk Removal Milwaukie'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Furniture Removal Milwaukie'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Appliance Disposal Milwaukie'
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
                #1 Milwaukie{' '}
                <span className="text-gradient">Junk Removal</span>{' '}
                Service
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Top-rated junk removal service in Milwaukie, Oregon. Same-day pickup, eco-friendly disposal, 
                and transparent pricing. Serving Downtown Milwaukie, Sellwood, Westmoreland, and all surrounding neighborhoods.
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
                  <span>4.9/5 (127 Reviews)</span>
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
                alt="Professional Milwaukie junk removal team with truck ready for same-day pickup"
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
              Complete Milwaukie Junk Removal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive junk hauling services for all Milwaukie neighborhoods. 
              From Downtown Milwaukie to Sellwood and Westmoreland, we provide fast, reliable service.
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
                Residential Junk Removal Milwaukie
              </h3>
              <p className="text-gray-600 mb-4">
                Complete home cleanouts, furniture removal, appliance disposal, and general household junk pickup throughout all Milwaukie neighborhoods.
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
                Commercial Junk Removal Milwaukie
              </h3>
              <p className="text-gray-600 mb-4">
                Professional commercial cleanouts for Milwaukie businesses, offices, retail spaces, and construction sites.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Specialty Junk Removal Services
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized services for unique junk removal needs in Milwaukie, handled with care and expertise.
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
              Milwaukie Neighborhoods We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Professional junk removal service throughout all Milwaukie areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Downtown Milwaukie</h3>
              <p className="text-sm text-gray-600">Historic downtown area, Main Street corridor, Milwaukie Farmers Market area</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Sellwood</h3>
              <p className="text-sm text-gray-600">Sellwood Bridge area, antique district, residential neighborhoods</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Westmoreland</h3>
              <p className="text-sm text-gray-600">Westmoreland Park area, residential streets, family neighborhoods</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Ardenwald</h3>
              <p className="text-sm text-gray-600">Ardenwald neighborhood, Johnson Creek area, residential communities</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              <strong>Zip Codes Served:</strong> 97222, 97267, 97202, 97206
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Milwaukie Chooses Andrew and Sons
            </h2>
            <p className="text-xl text-gray-600">
              The most trusted junk removal company in Milwaukie, Oregon
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
                Most Milwaukie junk removal requests completed the same day you call. Fast, reliable service when you need it.
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
                Fully licensed and insured junk removal company serving Milwaukie. Your property and belongings are protected.
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
                We recycle and donate whenever possible. Responsible junk disposal that protects Milwaukie's environment.
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
                No hidden fees or surprises. Fair, upfront pricing for all Milwaukie junk removal services.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Local Milwaukie Team</h3>
              <p className="text-gray-600">
                Oregon-based team that knows Milwaukie inside and out. Supporting the local community we serve.
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
                Consistently rated 5 stars by Milwaukie customers. Professional, courteous, and reliable service every time.
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
              Milwaukie Junk Removal Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Transparent, fair pricing for all Milwaukie neighborhoods
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
              No hidden fees for Milwaukie customers.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Your Free Milwaukie Quote
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Milwaukie Junk Removal FAQ
            </h2>
            <p className="text-xl text-gray-600">
              Common questions from Milwaukie customers
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you provide same-day junk removal in Milwaukie?
              </h3>
              <p className="text-gray-600">
                Yes! We offer same-day junk removal service throughout Milwaukie, including Downtown, Sellwood, Westmoreland, and Ardenwald neighborhoods. Call before 2 PM for same-day pickup availability.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What areas of Milwaukie do you serve?
              </h3>
              <p className="text-gray-600">
                We serve all Milwaukie neighborhoods including Downtown Milwaukie, Sellwood, Westmoreland, Ardenwald, and surrounding areas. We cover zip codes 97222, 97267, 97202, and 97206.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How much does junk removal cost in Milwaukie?
              </h3>
              <p className="text-gray-600">
                Our Milwaukie junk removal pricing ranges from $150-250 for small loads, $300-450 for medium loads, and $500-750 for large loads. All prices include labor, transportation, and disposal fees with no hidden costs.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What items can you remove from my Milwaukie property?
              </h3>
              <p className="text-gray-600">
                We remove furniture, appliances, electronics, construction debris, yard waste, and most household items. We cannot remove hazardous materials, chemicals, or items containing asbestos. Contact us if you're unsure about specific items.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Are you licensed and insured for Milwaukie junk removal?
              </h3>
              <p className="text-gray-600">
                Yes, we are fully licensed and insured to operate in Milwaukie and throughout Oregon. Our insurance protects your property and gives you peace of mind during the junk removal process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Milwaukie's Best Junk Removal Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied Milwaukie customers. Same-day service available. 
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
