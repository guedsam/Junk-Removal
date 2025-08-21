import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Oregon City Junk Removal | #1 Local Junk Hauling Service | Same-Day Pickup',
  description: 'Top-rated Oregon City junk removal service. Same-day pickup, eco-friendly disposal, transparent pricing. Serving all Oregon City neighborhoods. Call (503) 753-2329 for free quote.',
  keywords: 'Oregon City junk removal, junk hauling Oregon City, furniture removal Oregon City, appliance disposal Oregon City, construction debris Oregon City, estate cleanout Oregon City, same day junk removal',
  openGraph: {
    title: 'Oregon City Junk Removal | #1 Local Junk Hauling Service',
    description: 'Top-rated Oregon City junk removal service. Same-day pickup, eco-friendly disposal, transparent pricing. Serving all Oregon City neighborhoods.',
    url: 'https://asjunkremoval.com/oregon-city-junk-removal',
    siteName: 'Andrew and Sons Junk Removal',
    images: [
      {
        url: '/images/junk-removal/oregon-city-junk-removal-team.webp',
        width: 1200,
        height: 630,
        alt: 'Oregon City Junk Removal Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oregon City Junk Removal | #1 Local Junk Hauling Service',
    description: 'Top-rated Oregon City junk removal service. Same-day pickup, eco-friendly disposal, transparent pricing.',
    images: ['/images/junk-removal/oregon-city-junk-removal-team.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/oregon-city-junk-removal',
  },
}

export default function OregonCityJunkRemovalPage() {
  const services = [
    {
      title: 'Residential Junk Removal',
      description: 'Complete home cleanouts, furniture removal, appliance disposal, and general household junk pickup throughout Oregon City.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v0H8v0z" />
        </svg>
      )
    },
    {
      title: 'Commercial Junk Removal',
      description: 'Office cleanouts, retail space clearing, warehouse cleanups, and commercial construction debris removal in Oregon City.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Construction Debris',
      description: 'Safe removal of construction waste, renovation debris, drywall, flooring, and building materials from Oregon City job sites.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: 'Estate Cleanouts',
      description: 'Compassionate estate cleanout services for Oregon City families, handling everything with care and respect during difficult times.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Furniture & Appliance Removal',
      description: 'Professional removal of old furniture, large appliances, mattresses, and bulky items from Oregon City homes and businesses.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: 'Yard Waste Removal',
      description: 'Removal of branches, leaves, grass clippings, and landscaping debris from Oregon City properties year-round.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ]

  const neighborhoods = [
    'Barclay Hills', 'Canemah', 'Caufield', 'Clackamette Cove', 'Gaffney Lane',
    'Hazelbrook', 'Hillendale', 'Holly Lane', 'Jennings Lodge', 'McLoughlin',
    'Newell Creek Canyon', 'Oak Grove', 'Park Place', 'Rivercrest', 'South End',
    'Tower Vista', 'Twilight', 'Warner Milne', 'West Linn Heights'
  ]

  const whyChooseUs = [
    {
      title: 'Local Oregon City Team',
      description: 'Born and raised in Oregon City, we know every neighborhood and provide personalized service to our community.',
      icon: '🏠'
    },
    {
      title: 'Same-Day Service',
      description: 'Need junk removed today? We offer same-day pickup service throughout Oregon City with flexible scheduling.',
      icon: '⚡'
    },
    {
      title: 'Eco-Friendly Disposal',
      description: 'We donate and recycle over 85% of items collected, keeping Oregon City beautiful and protecting our environment.',
      icon: '♻️'
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprises. We provide upfront pricing based on volume, not weight or time.',
      icon: '💰'
    },
    {
      title: 'Licensed & Insured',
      description: 'Fully licensed, bonded, and insured for your peace of mind. Professional service you can trust.',
      icon: '🛡️'
    },
    {
      title: 'Customer Satisfaction',
      description: '100% satisfaction guarantee. We\'re not happy until you\'re completely satisfied with our service.',
      icon: '⭐'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Oregon City{' '}
                <span className="text-gradient">Junk Removal</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                #1 rated junk removal service in Oregon City. Same-day pickup, eco-friendly disposal, 
                and transparent pricing. Serving all Oregon City neighborhoods since 2018.
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
                alt="Oregon City junk removal team with truck"
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
              Oregon City Junk Removal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive junk hauling services for Oregon City residents and businesses. 
              No job too big or small!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Oregon City Chooses Us
            </h2>
            <p className="text-xl text-gray-600">
              Local expertise, professional service, and unmatched customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Oregon City Neighborhoods We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Professional junk removal throughout all Oregon City areas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {neighborhoods.map((neighborhood, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-primary-50 transition-colors duration-200">
                <span className="text-gray-700 font-medium">{neighborhood}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see your neighborhood? We serve all of Oregon City! 
              Contact us to confirm service in your area.
            </p>
            <Link href="/contact" className="btn-primary">
              Check Your Area
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Oregon City Junk Removal Pricing
            </h2>
            <p className="text-xl text-primary-100">
              Transparent, volume-based pricing with no hidden fees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Small Load</h3>
              <div className="text-4xl font-bold text-primary-600 mb-2">$150-250</div>
              <p className="text-gray-600 mb-6">
                Perfect for small cleanouts. Fits in 1/4 of our truck.
              </p>
              <ul className="text-left space-y-2 text-sm text-gray-600">
                <li>• Single furniture pieces</li>
                <li>• Small appliances</li>
                <li>• Boxes and bags</li>
                <li>• Single room items</li>
              </ul>
            </div>

            <div className="bg-secondary-600 text-white rounded-xl p-8 text-center transform scale-105 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Medium Load</h3>
              <div className="text-4xl font-bold mb-2">$300-450</div>
              <p className="text-secondary-100 mb-6">
                Most popular! Fits in 1/2 of our truck.
              </p>
              <ul className="text-left space-y-2 text-sm text-secondary-100">
                <li>• Multiple furniture pieces</li>
                <li>• Large appliances</li>
                <li>• Garage cleanout</li>
                <li>• Office furniture</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Large Load</h3>
              <div className="text-4xl font-bold text-primary-600 mb-2">$500-750</div>
              <p className="text-gray-600 mb-6">
                Full truck load for major cleanouts.
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
            <p className="text-primary-100 mb-6">
              All quotes are free and provided upfront. No surprises, no hidden fees.
            </p>
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready for Oregon City's Best Junk Removal Service?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied Oregon City customers. Same-day service available. 
            Call now or get your free online quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Free Quote Online
            </Link>
            <a href="tel:+15037532329" className="btn-secondary">
              Call (503) 753-2329 Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
