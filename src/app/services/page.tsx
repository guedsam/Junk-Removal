import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Junk Removal Services Oregon City & Portland | Residential & Commercial',
  description: 'Professional junk removal services in Oregon City and Portland. Residential cleanouts, commercial junk hauling, furniture removal, appliance disposal, and construction debris cleanup.',
  keywords: 'junk removal services Oregon City, residential junk removal Portland, commercial junk hauling Oregon, furniture removal Portland, appliance removal Oregon City, construction debris removal',
  openGraph: {
    title: 'Junk Removal Services Oregon City & Portland | Residential & Commercial',
    description: 'Professional junk removal services in Oregon City and Portland. Residential cleanouts, commercial junk hauling, furniture removal, appliance disposal, and construction debris cleanup.',
  },
}

export default function ServicesPage() {
  const services = [
    {
      title: 'Residential Junk Removal',
      description: 'Complete home cleanouts and residential junk hauling services throughout Oregon City and Portland.',
      features: [
        'Whole house cleanouts',
        'Garage and basement clearing',
        'Attic cleanouts',
        'Estate cleanouts',
        'Moving assistance',
        'Hoarding cleanup'
      ],
      locations: ['Oregon City', 'Portland', 'Clackamas', 'Gresham'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v0" />
        </svg>
      )
    },
    {
      title: 'Commercial Junk Removal',
      description: 'Professional commercial cleanouts and business junk hauling services for offices, retail spaces, and warehouses.',
      features: [
        'Office cleanouts',
        'Retail space clearing',
        'Warehouse cleanouts',
        'Restaurant equipment removal',
        'Medical facility cleanouts',
        'Regular pickup services'
      ],
      locations: ['Oregon City', 'Portland', 'Beaverton', 'Tigard'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Furniture Removal',
      description: 'Safe and efficient furniture removal services including couches, beds, tables, and large furniture items.',
      features: [
        'Couch and sofa removal',
        'Bed and mattress disposal',
        'Dining room sets',
        'Office furniture',
        'Outdoor furniture',
        'Antique furniture'
      ],
      locations: ['Oregon City', 'Portland', 'Lake Oswego', 'West Linn'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: 'Appliance Removal',
      description: 'Eco-friendly appliance disposal and removal services for all types of household and commercial appliances.',
      features: [
        'Refrigerator removal',
        'Washer and dryer disposal',
        'Dishwasher removal',
        'HVAC equipment',
        'Water heater disposal',
        'Small appliances'
      ],
      locations: ['Oregon City', 'Portland', 'Milwaukie', 'Happy Valley'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: 'Yard Waste Removal',
      description: 'Complete yard cleanup and organic waste removal services for residential and commercial properties.',
      features: [
        'Tree branch removal',
        'Leaf and debris cleanup',
        'Landscaping waste',
        'Garden cleanup',
        'Seasonal cleanups',
        'Storm damage cleanup'
      ],
      locations: ['Oregon City', 'Portland', 'Gresham', 'Clackamas'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Construction Debris Cleanup',
      description: 'Professional construction and renovation debris removal for contractors and homeowners.',
      features: [
        'Drywall and lumber removal',
        'Flooring material disposal',
        'Roofing debris cleanup',
        'Concrete and brick removal',
        'Renovation cleanouts',
        'Demolition cleanup'
      ],
      locations: ['Oregon City', 'Portland', 'Beaverton', 'Tigard'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ]

  const processSteps = [
    {
      step: '1',
      title: 'Get Your Quote',
      description: 'Call us or fill out our online form for a free, no-obligation quote. We provide upfront pricing with no hidden fees.'
    },
    {
      step: '2',
      title: 'Schedule Pickup',
      description: 'Choose a convenient time for pickup. We offer same-day service in most areas and flexible scheduling.'
    },
    {
      step: '3',
      title: 'We Handle Everything',
      description: 'Our professional team arrives on time, loads everything safely, and cleans up the area when finished.'
    },
    {
      step: '4',
      title: 'Eco-Friendly Disposal',
      description: 'We sort, recycle, donate, and dispose of items responsibly, keeping as much as possible out of landfills.'
    }
  ]

  const whyChooseUs = [
    {
      title: 'Licensed & Insured',
      description: 'Fully licensed and insured for your peace of mind',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Same-Day Service',
      description: 'Available in most areas throughout Oregon City and Portland',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Eco-Friendly',
      description: '85% of items recycled or donated, not sent to landfills',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Transparent Pricing',
      description: 'Upfront quotes with no hidden fees or surprises',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Junk Removal Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive junk removal services in Oregon City, Portland, and surrounding areas. 
            From residential cleanouts to commercial junk hauling, we handle it all with 
            eco-friendly disposal practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Free Quote
            </Link>
            <a href="tel:+15037532329" className="btn-secondary">
              Call (503) 753-2329
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Junk Removal Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional, reliable, and eco-friendly junk removal for every need
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-primary-600 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What We Remove:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Service Areas:</span> {service.locations.join(', ')} & surrounding areas
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Our Service Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, straightforward process from quote to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Oregon City Junk Removal?
            </h2>
            <p className="text-xl text-gray-600">
              Professional service you can trust with benefits that matter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
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

      {/* Items We Accept/Don't Accept */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Take & What We Don't
            </h2>
            <p className="text-xl text-gray-600">
              Clear guidelines on acceptable and prohibited items
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Items We Accept */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Items We Accept</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Furniture (couches, beds, tables)',
                  'Appliances (refrigerators, washers)',
                  'Electronics (TVs, computers)',
                  'Mattresses and box springs',
                  'Exercise equipment',
                  'Office furniture',
                  'Yard waste and debris',
                  'Construction materials',
                  'Hot tubs and spas',
                  'Carpeting and flooring',
                  'Books and paper',
                  'Clothing and textiles'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Items We Don't Accept */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Items We Don't Accept</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Hazardous chemicals',
                  'Paint and solvents',
                  'Asbestos materials',
                  'Medical waste',
                  'Radioactive materials',
                  'Explosives or ammunition',
                  'Gasoline and fuel',
                  'Propane tanks',
                  'Car batteries',
                  'Tires (some exceptions)',
                  'Food waste',
                  'Human/animal waste'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <span className="font-semibold">Not sure about an item?</span> Give us a call! 
                  We can help determine if we can safely remove it or direct you to proper disposal options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Areas
            </h2>
            <p className="text-xl text-gray-600">
              Professional junk removal services throughout the Portland metro area
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Oregon City', 'Portland', 'Clackamas', 'Gresham', 'Milwaukie', 'Happy Valley',
              'Lake Oswego', 'West Linn', 'Tigard', 'Beaverton', 'Tualatin', 'Gladstone'
            ].map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-primary-50 transition-colors duration-200">
                <h3 className="font-semibold text-gray-900">{area}</h3>
                <p className="text-sm text-gray-600 mt-1">Junk Removal</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see your area listed? We serve many more locations throughout Oregon.
            </p>
            <Link href="/coverage-areas" className="btn-outline">
              View All Coverage Areas
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Clear Out Your Junk?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get your free, no-obligation quote today. Professional junk removal service 
            with same-day availability throughout Oregon City and Portland.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Your Free Quote
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
