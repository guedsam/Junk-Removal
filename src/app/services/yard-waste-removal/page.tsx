import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Professional Yard Waste Removal Services in Portland & Oregon City | Andrew and Sons',
  description: 'Expert yard waste removal and green waste disposal in Portland, Oregon City, and surrounding areas. Tree branches, leaves, grass clippings, and landscaping debris removal.',
  keywords: 'yard waste removal Portland, green waste disposal Oregon City, tree branch removal Portland, landscaping debris Oregon, lawn waste pickup Portland Oregon, garden cleanup services',
  openGraph: {
    title: 'Professional Yard Waste Removal Services in Portland & Oregon City',
    description: 'Expert yard waste removal and green waste disposal in Portland, Oregon City, and surrounding areas. Tree branches, leaves, grass clippings, and landscaping debris removal.',
    url: 'https://asjunkremoval.com/services/yard-waste-removal',
    siteName: 'Andrew and Sons Junk Removal',
    images: [
      {
        url: 'https://asjunkremoval.com/images/junk-removal/eco-friendly-recycling-portland.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Yard Waste Removal Services in Portland & Oregon City',
    description: 'Expert yard waste removal and green waste disposal in Portland, Oregon City, and surrounding areas. Tree branches, leaves, grass clippings, and landscaping debris removal.',
    images: ['https://asjunkremoval.com/images/junk-removal/eco-friendly-recycling-portland.webp'],
  },
}

export default function YardWasteRemovalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-primary-600 text-white py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Yard Waste Removal Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Eco-friendly yard waste removal and green waste disposal in Portland, Oregon City, and surrounding areas. From tree branches to landscaping debris.
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
              src="/images/junk-removal/eco-friendly-recycling-portland.webp" 
              alt="Professional yard waste removal services in Portland Oregon"
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
              Complete Yard Waste & Green Waste Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Whether you're cleaning up after a storm, completing a landscaping project, or maintaining your property, our professional team handles all types of yard waste with environmental responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tree & Branch Removal</h3>
              <p className="text-gray-600">Tree branches, fallen trees, pruned limbs, and storm debris removal with proper disposal.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Leaves & Grass Clippings</h3>
              <p className="text-gray-600">Seasonal leaf cleanup, grass clippings, and organic lawn waste removal and composting.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3V1m0 18v2m8-10a4 4 0 00-4-4H9a2 2 0 00-2 2v4a2 2 0 002 2h2a4 4 0 004-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Landscaping Debris</h3>
              <p className="text-gray-600">Garden cleanup, plant trimmings, shrub removal, and landscaping project waste.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Organic Waste</h3>
              <p className="text-gray-600">Compostable materials, garden waste, and organic debris for eco-friendly processing.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Storm Cleanup</h3>
              <p className="text-gray-600">Emergency storm debris removal, fallen branches, and weather-related yard cleanup.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bulk Yard Waste</h3>
              <p className="text-gray-600">Large-scale yard cleanups, property maintenance, and bulk organic waste removal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Affordable Yard Waste Removal Pricing
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Our volume-based pricing ensures you only pay for what we remove. Eco-friendly disposal included.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Small Cleanup</h3>
                <div className="text-4xl font-bold text-green-600 mb-4">$75+</div>
                <p className="text-gray-600 mb-6">Perfect for small yard projects</p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Bag or two of leaves</li>
                  <li>• Small branch removal</li>
                  <li>• Garden cleanup debris</li>
                  <li>• Composting included</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-green-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Seasonal Cleanup</h3>
                <div className="text-4xl font-bold text-green-600 mb-4">$150+</div>
                <p className="text-gray-600 mb-6">Ideal for fall/spring cleanups</p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Multiple bags of debris</li>
                  <li>• Branch and limb removal</li>
                  <li>• Landscaping waste</li>
                  <li>• Eco-friendly processing</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Large Projects</h3>
                <div className="text-4xl font-bold text-green-600 mb-4">$300+</div>
                <p className="text-gray-600 mb-6">Storm cleanup and major projects</p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Tree removal debris</li>
                  <li>• Storm damage cleanup</li>
                  <li>• Bulk yard waste removal</li>
                  <li>• Complete property cleanup</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-green-50 rounded-xl">
              <p className="text-green-800 font-semibold mb-2">🌱 Eco-Friendly Bonus:</p>
              <p className="text-green-700">
                All yard waste is processed through our sustainable programs - composting, mulching, and biomass energy production!
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
              Yard Waste Removal Service Areas
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              We provide professional yard waste removal and green waste disposal services throughout the Portland metropolitan area.
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
      <section className="py-16 bg-gradient-to-br from-green-600 to-primary-600 text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Clear Your Yard Waste?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Get your free, no-obligation quote today. Our eco-friendly team is ready to help you maintain a beautiful, clean property with responsible yard waste disposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-white">
                Get Free Quote
              </Link>
              <a href="tel:5037532329" className="btn-outline-white">
                Call (503) 753-2329
              </a>
            </div>
            <p className="text-sm text-green-200 mt-6">
              Licensed & Insured • Same-Day Service Available • 95% Landfill Diversion Rate • Storm Response Team
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
