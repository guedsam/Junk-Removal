import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Professional Construction Debris Cleanup Services in Portland & Oregon City | Andrew and Sons',
  description: 'Expert construction debris cleanup and removal in Portland, Oregon City, and surrounding areas. Safe removal of renovation waste, demolition debris, and construction materials.',
  keywords: 'construction debris cleanup Portland, construction waste removal Oregon City, demolition debris Portland, renovation cleanup Oregon, construction site cleanup Portland Oregon',
  openGraph: {
    title: 'Professional Construction Debris Cleanup Services in Portland & Oregon City',
    description: 'Expert construction debris cleanup and removal in Portland, Oregon City, and surrounding areas. Safe removal of renovation waste, demolition debris, and construction materials.',
    url: 'https://asjunkremoval.com/services/construction-debris-cleanup',
    siteName: 'Andrew and Sons Junk Removal',
    images: [
      {
        url: 'https://asjunkremoval.com/images/junk-removal/construction-debris-removal-portland.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Construction Debris Cleanup Services in Portland & Oregon City',
    description: 'Expert construction debris cleanup and removal in Portland, Oregon City, and surrounding areas. Safe removal of renovation waste, demolition debris, and construction materials.',
    images: ['https://asjunkremoval.com/images/junk-removal/construction-debris-removal-portland.webp'],
  },
}

export default function ConstructionDebrisCleanupPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-secondary-600 text-white py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Construction Debris Cleanup Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Safe, efficient construction debris cleanup and removal in Portland, Oregon City, and surrounding areas. From renovation waste to demolition debris.
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
              src="/images/junk-removal/construction-debris-removal-portland.webp" 
              alt="Professional construction debris cleanup services in Portland Oregon"
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
              Complete Construction Debris Cleanup Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Whether you're a contractor, builder, or homeowner managing a construction project, our professional team handles all types of construction debris with safety and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Demolition Debris</h3>
              <p className="text-gray-600">Drywall, flooring, roofing materials, concrete, masonry, and all demolition waste removal.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Renovation Waste</h3>
              <p className="text-gray-600">Kitchen and bathroom remodel debris, fixtures, cabinets, and renovation project cleanup.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">New Construction</h3>
              <p className="text-gray-600">Excess building materials, packaging waste, and new construction site cleanup.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hazardous Materials</h3>
              <p className="text-gray-600">Safe handling and disposal of asbestos, lead paint, and other hazardous construction materials.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Site Cleanup</h3>
              <p className="text-gray-600">Complete construction site cleanup, final cleanup, and post-construction debris removal.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Cleanup</h3>
              <p className="text-gray-600">Emergency construction debris removal for storm damage, accidents, and urgent cleanup needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Construction Projects We Serve
              </h2>
              <p className="text-xl text-gray-600">
                From small home renovations to large commercial construction projects, we handle debris cleanup for all types of construction work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-orange-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-800">Residential Projects</h3>
                </div>
                <ul className="text-orange-700 space-y-2">
                  <li>• Kitchen and bathroom remodels</li>
                  <li>• Home additions and extensions</li>
                  <li>• Basement and attic conversions</li>
                  <li>• Roofing and siding projects</li>
                  <li>• Deck and patio construction</li>
                  <li>• Whole house renovations</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800">Commercial Projects</h3>
                </div>
                <ul className="text-blue-700 space-y-2">
                  <li>• Office building construction</li>
                  <li>• Retail space buildouts</li>
                  <li>• Restaurant construction</li>
                  <li>• Warehouse and industrial projects</li>
                  <li>• Medical facility construction</li>
                  <li>• Multi-family housing projects</li>
                </ul>
              </div>

              <div className="bg-green-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-green-800">Specialty Projects</h3>
                </div>
                <ul className="text-green-700 space-y-2">
                  <li>• Demolition projects</li>
                  <li>• Historic renovation work</li>
                  <li>• Environmental remediation</li>
                  <li>• Infrastructure projects</li>
                  <li>• Emergency cleanup services</li>
                  <li>• Post-disaster reconstruction</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-800">DIY Projects</h3>
                </div>
                <ul className="text-purple-700 space-y-2">
                  <li>• Home improvement projects</li>
                  <li>• Garage and shed construction</li>
                  <li>• Fence installation projects</li>
                  <li>• Landscaping construction</li>
                  <li>• Small renovation projects</li>
                  <li>• Workshop and studio builds</li>
                </ul>
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
              Why Choose Andrew and Sons for Construction Debris Cleanup?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
                    <p className="text-gray-600">Fully licensed for construction debris removal with comprehensive insurance coverage for your protection.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety First</h3>
                    <p className="text-gray-600">OSHA-compliant safety protocols and proper handling of hazardous construction materials.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
                    <p className="text-gray-600">Transparent, volume-based pricing with no hidden fees. Often more cost-effective than dumpster rentals.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
                    <p className="text-gray-600">Work around your construction schedule with same-day service and flexible pickup times.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Friendly Disposal</h3>
                    <p className="text-gray-600">85% of construction debris is recycled or donated, supporting sustainable construction practices.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Expertise</h3>
                    <p className="text-gray-600">Deep knowledge of Portland and Oregon City construction regulations and disposal requirements.</p>
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
              Construction Debris Cleanup Pricing
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Our transparent pricing is based on volume and material type. No hidden fees, no surprises.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Small Projects</h3>
                <div className="text-4xl font-bold text-orange-600 mb-4">$150+</div>
                <p className="text-gray-600 mb-6">Perfect for DIY and small renovations</p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Bathroom remodel debris</li>
                  <li>• Small demolition projects</li>
                  <li>• Flooring removal waste</li>
                  <li>• Professional disposal</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-orange-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Medium Projects</h3>
                <div className="text-4xl font-bold text-orange-600 mb-4">$300+</div>
                <p className="text-gray-600 mb-6">Ideal for home renovations</p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Kitchen remodel debris</li>
                  <li>• Room additions</li>
                  <li>• Roofing projects</li>
                  <li>• Recycling included</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Large Projects</h3>
                <div className="text-4xl font-bold text-orange-600 mb-4">$500+</div>
                <p className="text-gray-600 mb-6">Commercial and major construction</p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Whole house renovations</li>
                  <li>• Commercial construction</li>
                  <li>• Large demolition projects</li>
                  <li>• Hazardous material handling</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                All pricing includes labor, transportation, and eco-friendly disposal. Volume discounts available for large projects.
              </p>
              <Link href="/contact" className="btn-primary">
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Construction Debris Cleanup Service Areas
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Professional construction debris cleanup throughout the Portland metro area and surrounding communities.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-gray-900">Portland</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-gray-900">Oregon City</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-gray-900">Beaverton</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-gray-900">Tigard</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-gray-900">Lake Oswego</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-gray-900">Milwaukie</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-gray-900">Gresham</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-gray-900">Hillsboro</h3>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-gray-600">
                Don't see your area listed? <Link href="/contact" className="text-orange-600 hover:text-orange-700 font-semibold">Contact us</Link> to check if we service your location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-secondary-600 text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Clear Your Construction Debris?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Get professional construction debris cleanup with transparent pricing and eco-friendly disposal. Same-day service available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-white">
                Schedule Pickup Today
              </Link>
              <a href="tel:5037532329" className="btn-outline-white">
                Call (503) 753-2329
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
