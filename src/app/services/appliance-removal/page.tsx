import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Professional Appliance Removal Services in Portland & Oregon City | Andrew and Sons',
  description: 'Expert appliance removal and disposal in Portland, Oregon City, and surrounding areas. Safe removal of refrigerators, washers, dryers, and all appliances. Eco-friendly recycling.',
  keywords: 'appliance removal Portland, appliance disposal Oregon City, refrigerator removal Portland, washer dryer removal Oregon, appliance recycling Portland Oregon, appliance pickup services',
  openGraph: {
    title: 'Professional Appliance Removal Services in Portland & Oregon City',
    description: 'Expert appliance removal and disposal in Portland, Oregon City, and surrounding areas. Safe removal of refrigerators, washers, dryers, and all appliances.',
    url: 'https://asjunkremoval.com/services/appliance-removal',
    siteName: 'Andrew and Sons Junk Removal',
    images: [
      {
        url: 'https://asjunkremoval.com/images/junk-removal/professional-junk-removal-crew.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Appliance Removal Services in Portland & Oregon City',
    description: 'Expert appliance removal and disposal in Portland, Oregon City, and surrounding areas. Safe removal of refrigerators, washers, dryers, and all appliances.',
    images: ['https://asjunkremoval.com/images/junk-removal/professional-junk-removal-crew.webp'],
  },
}

export default function ApplianceRemovalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-600 to-primary-600 text-white py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Appliance Removal Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-secondary-100">
              Safe, eco-friendly appliance removal and recycling in Portland, Oregon City, and surrounding areas. From refrigerators to washers and dryers.
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
              src="/images/junk-removal/professional-junk-removal-crew.webp" 
              alt="Professional appliance removal services in Portland Oregon"
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
              Complete Appliance Removal & Recycling Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Whether you're upgrading your kitchen, replacing old appliances, or clearing out broken units, our professional team handles all types of appliance removal with environmental responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Kitchen Appliances</h3>
              <p className="text-gray-600">Refrigerators, dishwashers, ovens, ranges, microwaves, garbage disposals, and all kitchen appliances.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Laundry Appliances</h3>
              <p className="text-gray-600">Washers, dryers, washer/dryer combos, and all laundry room appliances including stackable units.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">HVAC Systems</h3>
              <p className="text-gray-600">Air conditioners, furnaces, heat pumps, water heaters, and heating/cooling system components.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Small Appliances</h3>
              <p className="text-gray-600">Toasters, blenders, coffee makers, vacuum cleaners, and other small household appliances.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Commercial Appliances</h3>
              <p className="text-gray-600">Restaurant equipment, commercial refrigeration, industrial appliances, and business equipment.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialty Units</h3>
              <p className="text-gray-600">Wine coolers, ice makers, dehumidifiers, air purifiers, and other specialty appliances.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Responsibility */}
      <section className="py-16">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Eco-Friendly Appliance Recycling
              </h2>
              <p className="text-xl text-gray-600">
                We're committed to responsible appliance disposal that protects Oregon's environment and conserves valuable resources.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-green-800 mb-3">Refrigerant Recovery</h3>
                    <p className="text-green-700">We safely remove and recycle refrigerants from cooling appliances, preventing harmful chemicals from entering the atmosphere.</p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">Metal Recycling</h3>
                    <p className="text-blue-700">Appliances contain valuable metals like steel, copper, and aluminum that we separate and send to certified recycling facilities.</p>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-purple-800 mb-3">Component Reuse</h3>
                    <p className="text-purple-700">Working parts and components are salvaged for reuse, extending their lifecycle and reducing waste.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Environmental Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Appliances Recycled Annually</span>
                    <span className="font-bold text-primary-600">2,500+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Metal Recovered (tons)</span>
                    <span className="font-bold text-primary-600">150+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Refrigerant Safely Removed</span>
                    <span className="font-bold text-primary-600">100%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Landfill Diversion Rate</span>
                    <span className="font-bold text-primary-600">90%</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-100 rounded-lg">
                  <p className="text-green-800 text-sm">
                    <strong>EPA Certified:</strong> We follow all EPA guidelines for appliance disposal and refrigerant handling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Why Choose Andrew and Sons for Appliance Removal?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Certified</h3>
                    <p className="text-gray-600">EPA-certified for refrigerant handling and fully licensed for appliance disposal in Oregon.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe Handling</h3>
                    <p className="text-gray-600">Professional equipment and techniques for safe removal of heavy appliances without property damage.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
                    <p className="text-gray-600">Fair, transparent pricing with no hidden fees. Often less expensive than utility company programs.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Same-Day Service</h3>
                    <p className="text-gray-600">Quick response times with same-day service available throughout Portland and Oregon City.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Service Removal</h3>
                    <p className="text-gray-600">We handle disconnection, removal, loading, and disposal - you don't lift a finger.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Insured & Bonded</h3>
                    <p className="text-gray-600">Full liability insurance protects your property during the appliance removal process.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transparent Appliance Removal Pricing
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Our straightforward pricing is based on the type and size of appliances. No hidden fees, no surprises.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Small Appliances</h3>
                <div className="text-4xl font-bold text-secondary-600 mb-4">$50+</div>
                <p className="text-gray-600 mb-6">Microwaves, toasters, small units</p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Countertop appliances</li>
                  <li>• Small electronics</li>
                  <li>• Vacuum cleaners</li>
                  <li>• Eco-friendly disposal</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-secondary-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Major Appliances</h3>
                <div className="text-4xl font-bold text-secondary-600 mb-4">$100+</div>
                <p className="text-gray-600 mb-6">Refrigerators, washers, dryers</p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Kitchen appliances</li>
                  <li>• Laundry equipment</li>
                  <li>• Refrigerant recovery</li>
                  <li>• Professional removal</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">HVAC Systems</h3>
                <div className="text-4xl font-bold text-secondary-600 mb-4">$150+</div>
                <p className="text-gray-600 mb-6">AC units, furnaces, water heaters</p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Heating systems</li>
                  <li>• Cooling units</li>
                  <li>• Water heaters</li>
                  <li>• Certified disposal</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-yellow-50 rounded-xl">
              <p className="text-yellow-800 font-semibold mb-2">💰 Utility Rebates Available:</p>
              <p className="text-yellow-700">
                Many Oregon utilities offer rebates for energy-efficient appliance upgrades. Ask us about available programs in your area!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Appliance Removal Service Areas
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              We provide professional appliance removal and recycling services throughout the Portland metropolitan area.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="font-semibold text-gray-900">Portland</h3>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="font-semibold text-gray-900">Oregon City</h3>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="font-semibold text-gray-900">Clackamas</h3>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="font-semibold text-gray-900">Milwaukie</h3>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="font-semibold text-gray-900">Happy Valley</h3>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="font-semibold text-gray-900">Lake Oswego</h3>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="font-semibold text-gray-900">West Linn</h3>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="font-semibold text-gray-900">Gresham</h3>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="font-semibold text-gray-900">Tigard</h3>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="font-semibold text-gray-900">Beaverton</h3>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="font-semibold text-gray-900">Tualatin</h3>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="font-semibold text-gray-900">Hillsboro</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-secondary-600 to-primary-600 text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Remove Your Old Appliances?
            </h2>
            <p className="text-xl mb-8 text-secondary-100">
              Get your free, no-obligation quote today. Our EPA-certified team is ready to safely remove and recycle your appliances with environmental responsibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-white">
                Get Free Quote
              </Link>
              <a href="tel:5037532329" className="btn-outline-white">
                Call (503) 753-2329
              </a>
            </div>
            <p className="text-sm text-secondary-200 mt-6">
              EPA Certified • Licensed & Insured • Same-Day Service Available • Eco-Friendly Recycling
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
