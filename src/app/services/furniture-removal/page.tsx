import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Furniture Removal Services Portland | Oregon City Junk Removal',
  description: 'Expert furniture removal and disposal services in Portland, Oregon City, and surrounding areas. Safe, efficient removal of old furniture, mattresses, and upholstery. Same-day service available.',
  keywords: 'furniture removal Portland, furniture disposal Oregon City, mattress removal, couch removal, dresser disposal, furniture hauling Portland, upholstery removal Oregon',
  openGraph: {
    title: 'Professional Furniture Removal Services Portland | Oregon City Junk Removal',
    description: 'Expert furniture removal and disposal services in Portland, Oregon City, and surrounding areas. Safe, efficient removal of old furniture, mattresses, and upholstery.',
    url: 'https://oregoncityjunkremoval.com/services/furniture-removal',
    siteName: 'Oregon City Junk Removal',
    images: [
      {
        url: '/images/junk-removal/furniture-removal-oregon.webp',
        width: 1200,
        height: 630,
        alt: 'Professional furniture removal service in Portland Oregon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Furniture Removal Services Portland | Oregon City Junk Removal',
    description: 'Expert furniture removal and disposal services in Portland, Oregon City, and surrounding areas. Safe, efficient removal of old furniture, mattresses, and upholstery.',
    images: ['/images/junk-removal/furniture-removal-oregon.webp'],
  },
  alternates: {
    canonical: 'https://oregoncityjunkremoval.com/services/furniture-removal',
  },
}

export default function FurnitureRemovalPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Furniture Removal Services',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Oregon City Junk Removal',
      image: '/images/junk-removal/furniture-removal-oregon.webp',
      telephone: '(503) 683-8929',
      email: 'info@oregoncityjunkremoval.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Main Street',
        addressLocality: 'Oregon City',
        addressRegion: 'OR',
        postalCode: '97045',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 45.3573,
        longitude: -122.6068,
      },
      url: 'https://oregoncityjunkremoval.com',
      priceRange: '$75-$400',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '247',
      },
    },
    serviceType: 'Furniture Removal and Disposal',
    description: 'Professional furniture removal services including couches, mattresses, dressers, tables, and all types of household furniture.',
    areaServed: [
      'Portland, OR',
      'Oregon City, OR',
      'Milwaukie, OR',
      'Happy Valley, OR',
      'West Linn, OR',
      'Lake Oswego, OR',
      'Tigard, OR',
      'Beaverton, OR',
      'Tualatin, OR',
      'Gladstone, OR',
    ],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '75-400',
      description: 'Furniture removal pricing based on volume and type of items',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#053254] to-[#0a4a73] text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Professional <span className="text-[#c75c26]">Furniture Removal</span> Services
                </h1>
                <p className="text-xl mb-8 text-gray-200">
                  Safe, efficient removal of all types of furniture from your home or business. 
                  We handle everything from single items to complete furniture cleanouts in Portland and surrounding areas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:(503)683-8929"
                    className="bg-[#c75c26] hover:bg-[#b54d1f] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 text-center"
                  >
                    Call (503) 683-8929
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-white hover:bg-white hover:text-[#053254] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 text-center"
                  >
                    Get Free Quote
                  </a>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/junk-removal/furniture-removal-oregon.webp"
                  alt="Professional furniture removal team loading couch in Portland Oregon"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#053254] mb-4">
                Complete Furniture Removal Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From single pieces to entire room cleanouts, we handle all types of furniture removal 
                with care and professionalism. Eco-friendly disposal and donation options available.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-[#c75c26] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#053254] mb-4">Living Room Furniture</h3>
                <p className="text-gray-600">
                  Sofas, couches, recliners, coffee tables, entertainment centers, and all living room furniture removal.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-[#c75c26] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#053254] mb-4">Bedroom Furniture</h3>
                <p className="text-gray-600">
                  Mattresses, box springs, bed frames, dressers, nightstands, and all bedroom furniture disposal.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-[#c75c26] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#053254] mb-4">Office Furniture</h3>
                <p className="text-gray-600">
                  Desks, office chairs, filing cabinets, conference tables, and commercial furniture removal.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-[#c75c26] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#053254] mb-4">Dining Room Sets</h3>
                <p className="text-gray-600">
                  Dining tables, chairs, china cabinets, buffets, and complete dining room furniture removal.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-[#c75c26] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#053254] mb-4">Specialty Items</h3>
                <p className="text-gray-600">
                  Pianos, pool tables, exercise equipment, and other large or specialty furniture pieces.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-[#c75c26] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#053254] mb-4">Donation Services</h3>
                <p className="text-gray-600">
                  We donate usable furniture to local charities and ensure eco-friendly disposal of all items.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#053254] mb-4">
                Transparent Furniture Removal Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fair, upfront pricing based on the volume and type of furniture. No hidden fees or surprises.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-[#053254] mb-4">Single Items</h3>
                <div className="text-4xl font-bold text-[#c75c26] mb-6">$75-$150</div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Single furniture piece
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Chair, small table, or dresser
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Same-day service available
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Eco-friendly disposal
                  </li>
                </ul>
              </div>

              <div className="bg-[#c75c26] p-8 rounded-lg border-2 border-[#c75c26] text-white relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#053254] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold mb-4">Room Cleanout</h3>
                <div className="text-4xl font-bold mb-6">$200-$300</div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Complete room furniture
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Bedroom or living room set
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Professional team
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Donation coordination
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-[#053254] mb-4">Full Home</h3>
                <div className="text-4xl font-bold text-[#c75c26] mb-6">$350-$600</div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Entire home furniture
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Estate cleanouts
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Large team deployment
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Comprehensive service
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#053254] mb-4">
                Why Choose Our Furniture Removal Service?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#c75c26] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#053254] mb-4">Same-Day Service</h3>
                <p className="text-gray-600">Quick response times with same-day furniture removal available for urgent needs.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#c75c26] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#053254] mb-4">Fully Insured</h3>
                <p className="text-gray-600">Complete insurance coverage protects your property during furniture removal.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#c75c26] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#053254] mb-4">Eco-Friendly</h3>
                <p className="text-gray-600">We donate usable furniture and recycle materials whenever possible.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#c75c26] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#053254] mb-4">Professional Team</h3>
                <p className="text-gray-600">Experienced, uniformed professionals handle your furniture with care.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#053254] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Remove Your Old Furniture?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Get a free quote today and schedule your furniture removal service. 
              Professional, reliable, and eco-friendly furniture disposal in Portland and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(503)683-8929"
                className="bg-[#c75c26] hover:bg-[#b54d1f] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Call (503) 683-8929
              </a>
              <a
                href="/contact"
                className="border-2 border-white hover:bg-white hover:text-[#053254] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
