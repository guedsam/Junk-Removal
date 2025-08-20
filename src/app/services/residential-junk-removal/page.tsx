import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Residential Junk Removal Services in Oregon City & Portland | Fast & Affordable',
  description: 'Professional residential junk removal in Oregon City, Portland, and surrounding areas. Same-day service, eco-friendly disposal, and transparent pricing for home cleanouts.',
  keywords: 'residential junk removal Oregon City, home junk removal Portland, house cleanout services, furniture removal Oregon, appliance removal Portland, residential waste removal',
  openGraph: {
    title: 'Residential Junk Removal Services in Oregon City & Portland',
    description: 'Professional residential junk removal with same-day service, eco-friendly disposal, and transparent pricing for home cleanouts.',
    images: ['/images/junk-removal/portland-junk-removal-team.webp'],
  },
}

export default function ResidentialJunkRemoval() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Residential Junk Removal in Oregon City & Portland
              </h1>
              <p className="text-xl mb-8 text-primary-100">
                Fast, affordable, and eco-friendly home junk removal services. We handle everything from furniture and appliances to general household clutter with same-day service available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Get Free Quote
                </Link>
                <a
                  href="tel:(503)753-2329"
                  className="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-400 transition-colors text-center"
                >
                  Call (503) 753-2329
                </a>
              </div>
            </div>
            <div className="lg:text-right">
              <img 
                src="/images/junk-removal/portland-junk-removal-team.webp" 
                alt="Professional residential junk removal team in Oregon City and Portland"
                className="w-full max-w-lg mx-auto lg:mx-0 rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Residential Junk Removal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From single items to whole house cleanouts, we handle all types of residential junk removal in Oregon City, Portland, and surrounding areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Furniture Removal</h3>
              <p className="text-gray-600">
                Old couches, chairs, tables, mattresses, and bedroom sets. We handle heavy furniture removal safely and efficiently.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Appliance Removal</h3>
              <p className="text-gray-600">
                Refrigerators, washers, dryers, dishwashers, and other large appliances removed with proper recycling.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">General Household Junk</h3>
              <p className="text-gray-600">
                Boxes, bags, old electronics, toys, books, and miscellaneous household items cluttering your space.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Whole House Cleanouts</h3>
              <p className="text-gray-600">
                Complete home cleanouts for moving, downsizing, or estate situations. We handle everything from top to bottom.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Garage & Basement Cleanouts</h3>
              <p className="text-gray-600">
                Clear out cluttered garages, basements, and storage areas. We navigate tight spaces and stairs safely.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Same-Day Service</h3>
              <p className="text-gray-600">
                Need junk removed today? We offer same-day service throughout Oregon City and Portland metro area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Residential Junk Removal?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Transparent Pricing</h3>
                    <p className="text-gray-600">No hidden fees or surprises. You'll know the exact cost before we start working.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Eco-Friendly Disposal</h3>
                    <p className="text-gray-600">We recycle and donate whenever possible, keeping items out of landfills.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Fully Insured & Licensed</h3>
                    <p className="text-gray-600">Complete insurance coverage protects your property during the removal process.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Professional Team</h3>
                    <p className="text-gray-600">Trained, uniformed professionals who treat your home with respect and care.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/images/junk-removal/professional-junk-removal-crew.webp" 
                alt="Professional residential junk removal crew in Oregon City"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Residential Junk Removal Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Volume-based pricing means you only pay for the space your junk takes up in our truck.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">1/4 Truck</div>
              <div className="text-2xl font-semibold text-gray-900 mb-4">$150-$300</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Small furniture pieces</li>
                <li>• Few boxes or bags</li>
                <li>• Single appliance</li>
                <li>• Minimal cleanup</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">1/2 Truck</div>
              <div className="text-2xl font-semibold text-gray-900 mb-4">$300-$500</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Medium furniture</li>
                <li>• Multiple appliances</li>
                <li>• Room cleanout</li>
                <li>• Garage corner</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center border-2 border-primary-500">
              <div className="text-3xl font-bold text-primary-600 mb-2">3/4 Truck</div>
              <div className="text-2xl font-semibold text-gray-900 mb-4">$500-$700</div>
              <div className="text-xs text-primary-600 font-semibold mb-4">MOST POPULAR</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Large furniture sets</li>
                <li>• Multiple rooms</li>
                <li>• Basement cleanout</li>
                <li>• Major decluttering</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">Full Truck</div>
              <div className="text-2xl font-semibold text-gray-900 mb-4">$700-$900</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Whole house cleanout</li>
                <li>• Estate cleanout</li>
                <li>• Moving cleanout</li>
                <li>• Maximum capacity</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              All prices include labor, transportation, and eco-friendly disposal. No hidden fees!
            </p>
            <Link
              href="/contact"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Residential Junk Removal Service Areas
            </h2>
            <p className="text-xl text-gray-600">
              We provide residential junk removal throughout Oregon City, Portland, and surrounding communities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900">Oregon City</h3>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900">Portland</h3>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900">Clackamas</h3>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900">Gresham</h3>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900">Milwaukie</h3>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900">Happy Valley</h3>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900">Lake Oswego</h3>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900">West Linn</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Clear Out Your Home?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Get your free quote today for fast, professional residential junk removal in Oregon City and Portland.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(503)753-2329"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call (503) 753-2329
            </a>
            <Link
              href="/contact"
              className="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-400 transition-colors"
            >
              Get Online Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
