import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pearl District Junk Removal Services | Professional Waste Removal Portland',
  description: 'Expert junk removal services in Pearl District, Portland. Professional cleanouts, eco-friendly disposal, residential and commercial waste removal. Same-day service available.',
  keywords: 'Pearl District junk removal, Portland junk removal, residential cleanout, commercial waste removal, eco-friendly disposal'
}

export default function PearlDistrictJunkRemovalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Pearl District Junk Removal Services
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Professional junk removal and waste disposal services for Portland's prestigious Pearl District.
            Eco-friendly, licensed, and committed to serving your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+15037532329"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Call (503) 753-2329
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Pearl District Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">Residential Cleanouts</h3>
              <p className="text-gray-600 mb-4">
                Complete residential junk removal for homes, apartments, and condominiums in the Pearl District.
              </p>
              <div className="text-blue-600 font-medium">Starting at $150</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">Commercial Waste Removal</h3>
              <p className="text-gray-600 mb-4">
                Professional office and commercial space cleaning for Pearl District businesses.
              </p>
              <div className="text-blue-600 font-medium">Starting at $250</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">Construction Debris</h3>
              <p className="text-gray-600 mb-4">
                Cleanup and disposal of construction materials and renovation waste.
              </p>
              <div className="text-blue-600 font-medium">Starting at $300</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">Estate Cleanouts</h3>
              <p className="text-gray-600 mb-4">
                Compassionate estate liquidation and cleanup services for families.
              </p>
              <div className="text-blue-600 font-medium">Starting at $400</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">Appliance Removal</h3>
              <p className="text-gray-600 mb-4">
                Safe removal and disposal of major household appliances.
              </p>
              <div className="text-blue-600 font-medium">Starting at $100</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">Yard Waste Cleanup</h3>
              <p className="text-gray-600 mb-4">
                Removal of branches, leaves, grass clippings, and yard debris.
              </p>
              <div className="text-blue-600 font-medium">Starting at $125</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Our Service?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                <span className="text-green-600">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Eco-Friendly Disposal</h3>
                <p className="text-gray-600">We prioritize recycling and environmentally responsible disposal methods.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                <span className="text-green-600">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">Fully licensed, insured, and bonded for your complete peace of mind.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                <span className="text-green-600">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Same-Day Service</h3>
                <p className="text-gray-600">Flexible scheduling with same-day availability when possible.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                <span className="text-green-600">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Fair Transparent Pricing</h3>
                <p className="text-gray-600">Clear pricing with no hidden fees and upfront quotes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Clean, Professional Junk Removal?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for fast, reliable service in the Pearl District.
            We're here to make waste removal easy and stress-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
            >
              Schedule Your Service
            </Link>
            <a
              href="tel:+15037532329"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              Call Now: (503) 753-2329
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
