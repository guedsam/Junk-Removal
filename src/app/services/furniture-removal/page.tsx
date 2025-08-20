import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Professional Furniture Removal Services in Portland & Oregon City | Andrew and Sons',
  description: 'Expert furniture removal services in Portland, Oregon City, and surrounding areas. Safe removal of couches, beds, tables, and all furniture types. Same-day service available.',
  keywords: 'furniture removal Portland, furniture pickup Oregon City, couch removal Portland, bed removal Oregon, furniture disposal Portland Oregon, furniture hauling services',
  openGraph: {
    title: 'Professional Furniture Removal Services in Portland & Oregon City',
    description: 'Expert furniture removal services in Portland, Oregon City, and surrounding areas. Safe removal of couches, beds, tables, and all furniture types.',
    url: 'https://asjunkremoval.com/services/furniture-removal',
    siteName: 'Andrew and Sons Junk Removal',
    images: [
      {
        url: 'https://asjunkremoval.com/images/junk-removal/furniture-removal-oregon.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Furniture Removal Services in Portland & Oregon City',
    description: 'Expert furniture removal services in Portland, Oregon City, and surrounding areas. Safe removal of couches, beds, tables, and all furniture types.',
    images: ['https://asjunkremoval.com/images/junk-removal/furniture-removal-oregon.webp'],
  },
}

export default function FurnitureRemovalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Furniture Removal Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Safe, efficient furniture removal in Portland, Oregon City, and surrounding areas. From single pieces to complete home furnishings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-white">
                Get Free Quote
              </Link>
              <a href="tel:5037532329" className="btn-outline-white">
                Call (503) 753-2329
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <img 
              src="/images/junk-removal/furniture-removal-oregon.webp" 
              alt="Professional furniture removal services in Portland Oregon"
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Complete Furniture Removal Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Whether you're moving, redecorating, or clearing out unwanted furniture, our professional team handles all types of furniture removal with care and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Living Room Furniture</h3>
              <p className="text-gray-600">Sofas, sectionals, recliners, coffee tables, entertainment centers, and all living room furnishings.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bedroom Furniture</h3>
              <p className="text-gray-600">Beds, mattresses, dressers, nightstands, armoires, and complete bedroom sets.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Dining Room Sets</h3>
              <p className="text-gray-600">Dining tables, chairs, china cabinets, buffets, and complete dining room furniture.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Furniture</h3>
              <p className="text-gray-600">Desks, office chairs, filing cabinets, bookcases, and home office furniture.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Outdoor Furniture</h3>
              <p className="text-gray-600">Patio sets, outdoor dining furniture, lounge chairs, umbrellas, and deck furniture.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialty Items</h3>
              <p className="text-gray-600">Antiques, pianos, pool tables, exercise equipment, and other specialty furniture pieces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Why Choose Andrew and Sons for Furniture Removal?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe & Professional Handling</h3>
                      <p className="text-gray-600">Our trained team uses proper lifting techniques and protective equipment to safely remove furniture without damage to your home.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
                      <p className="text-gray-600">No hidden fees or surprises. Our upfront pricing is based on volume, so you only pay for what we remove.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Friendly Disposal</h3>
                      <p className="text-gray-600">We donate usable furniture to local charities and recycle materials whenever possible, keeping items out of landfills.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Same-Day Service</h3>
                      <p className="text-gray-600">Need furniture removed quickly? We offer same-day service throughout Portland and Oregon City when available.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Furniture Removal Process</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <span className="text-gray-700">Free on-site estimate and consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <span className="text-gray-700">Schedule convenient pickup time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <span className="text-gray-700">Professional team arrives with proper equipment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    <span className="text-gray-700">Safe removal and loading of furniture</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                    <span className="text-gray-700">Responsible disposal, donation, or recycling</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
                    <span className="text-gray-700">Complete cleanup of removal area</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Affordable Furniture Removal Pricing
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Our transparent, volume-based pricing means you only pay for what we remove. No hidden fees, no surprises.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Single Item</h3>
                <div className="text-4xl font-bold text-primary-600 mb-4">$75+</div>
                <p className="text-gray-600 mb-6">Perfect for removing one piece of furniture</p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Single furniture item</li>
                  <li>• Professional removal</li>
                  <li>• Responsible disposal</li>
                  <li>• No additional fees</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-primary-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Room Cleanout</h3>
                <div className="text-4xl font-bold text-primary-600 mb-4">$200+</div>
                <p className="text-gray-600 mb-6">Ideal for bedroom or living room furniture</p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Multiple furniture pieces</li>
                  <li>• Complete room clearing</li>
                  <li>• Donation coordination</li>
                  <li>• Same-day service available</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Whole House</h3>
                <div className="text-4xl font-bold text-primary-600 mb-4">$500+</div>
                <p className="text-gray-600 mb-6">Complete home furniture removal</p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• All furniture removal</li>
                  <li>• Multiple rooms</li>
                  <li>• Bulk pricing discounts</li>
                  <li>• Comprehensive service</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-blue-50 rounded-xl">
              <p className="text-blue-800 font-semibold mb-2">💡 Money-Saving Tip:</p>
              <p className="text-blue-700">
                Combine furniture removal with other junk removal services for additional savings. Ask about our bundle discounts!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Furniture Removal Service Areas
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              We provide professional furniture removal services throughout the Portland metropolitan area and surrounding communities.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">Portland</h3>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">Oregon City</h3>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">Clackamas</h3>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">Milwaukie</h3>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">Happy Valley</h3>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">Lake Oswego</h3>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">West Linn</h3>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">Gresham</h3>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">Tigard</h3>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">Beaverton</h3>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">Tualatin</h3>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">Hillsboro</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Remove Your Unwanted Furniture?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Get your free, no-obligation quote today. Our professional team is ready to help you reclaim your space with safe, efficient furniture removal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-white">
                Get Free Quote
              </Link>
              <a href="tel:5037532329" className="btn-outline-white">
                Call (503) 753-2329
              </a>
            </div>
            <p className="text-sm text-primary-200 mt-6">
              Licensed & Insured • Same-Day Service Available • Eco-Friendly Disposal
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
