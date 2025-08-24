import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Junk Removal Coverage Areas | Oregon City, Portland & Surrounding Areas',
  description: 'AS Junk Removal serves Portland, Clackamas, Gresham, Milwaukie, Happy Valley, Lake Oswego, West Linn and surrounding areas. Local junk removal near you.',
  keywords: 'junk removal Oregon City, junk hauling Portland, junk removal Clackamas, junk removal Gresham, junk removal Milwaukie, local junk removal near me',
  openGraph: {
    title: 'Junk Removal Coverage Areas | Oregon City, Portland & Surrounding Areas',
    description: 'AS Junk Removal serves Portland, Clackamas, Gresham, Milwaukie, Happy Valley, Lake Oswego, West Linn and surrounding areas.',
    url: 'https://asjunkremoval.com/coverage-areas',
    siteName: 'AS Junk Removal',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Junk Removal Coverage Areas | Oregon City, Portland & Surrounding Areas',
    description: 'AS Junk Removal serves Portland, Clackamas, Gresham, Milwaukie, Happy Valley, Lake Oswego, West Linn and surrounding areas.',
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/coverage-areas',
  },
}

export default function CoverageAreasPage() {
  const primaryAreas = [
    {
      name: 'Oregon City',
      description: 'Our home base! We provide same-day junk removal services throughout Oregon City and surrounding neighborhoods.',
      highlights: ['Same-day service', 'Local team', 'Fastest response times'],
      zipCodes: ['97045']
    },
    {
      name: 'Portland',
      description: 'Comprehensive junk removal services across all Portland neighborhoods, from downtown to the suburbs.',
      highlights: ['All neighborhoods', 'Commercial & residential', '24/7 availability'],
      zipCodes: ['97201', '97202', '97203', '97204', '97205', '97206', '97207', '97208', '97209', '97210', '97211', '97212', '97213', '97214', '97215', '97216', '97217', '97218', '97219', '97220', '97221', '97222', '97223', '97224', '97225', '97227', '97228', '97229', '97230', '97231', '97232', '97233', '97236', '97238', '97239', '97240', '97242', '97266', '97267', '97268', '97269', '97280', '97281', '97282', '97283', '97286', '97290', '97291', '97292', '97293', '97294', '97296', '97298']
    },
    {
      name: 'Clackamas',
      description: 'Professional junk hauling services for Clackamas residents and businesses with eco-friendly disposal.',
      highlights: ['Eco-friendly disposal', 'Residential & commercial', 'Licensed & insured'],
      zipCodes: ['97015', '97086']
    },
    {
      name: 'Gresham',
      description: 'Reliable junk removal throughout Gresham, including furniture, appliances, and construction debris.',
      highlights: ['Construction debris', 'Appliance removal', 'Volume-based pricing'],
      zipCodes: ['97030', '97080']
    }
  ]

  const secondaryAreas = [
    {
      name: 'Milwaukie',
      zipCodes: ['97222', '97267'],
      services: ['Residential cleanouts', 'Estate cleanouts', 'Garage cleanouts']
    },
    {
      name: 'Happy Valley',
      zipCodes: ['97086'],
      services: ['Furniture removal', 'Appliance disposal', 'Yard waste removal']
    },
    {
      name: 'Lake Oswego',
      zipCodes: ['97034', '97035'],
      services: ['Upscale home cleanouts', 'Office cleanouts', 'Same-day service']
    },
    {
      name: 'West Linn',
      zipCodes: ['97068'],
      services: ['Construction debris', 'Home renovation cleanup', 'Commercial junk removal']
    },
    {
      name: 'Tigard',
      zipCodes: ['97223', '97224'],
      services: ['Residential junk removal', 'Business cleanouts', 'Eco-friendly disposal']
    },
    {
      name: 'Beaverton',
      zipCodes: ['97005', '97006', '97007', '97008', '97078'],
      services: ['Full-service junk removal', 'Donation services', 'Recycling programs']
    },
    {
      name: 'Tualatin',
      zipCodes: ['97062'],
      services: ['Home cleanouts', 'Office furniture removal', 'Construction cleanup']
    },
    {
      name: 'Gladstone',
      zipCodes: ['97027'],
      services: ['Residential services', 'Small business cleanouts', 'Appliance pickup']
    }
  ]

  const serviceFeatures = [
    {
      title: 'Same-Day Service',
      description: 'Available in most coverage areas',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Local Team',
      description: 'Oregon-based professionals who know the area',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Eco-Friendly',
      description: 'Responsible disposal and recycling in all areas',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'No Hidden Fees',
      description: 'Transparent pricing across all service areas',
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
            Junk Removal Coverage Areas
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Serving Oregon City, Portland, and surrounding communities with fast, 
            reliable, and eco-friendly junk removal services. Local junk removal near you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Free Quote
            </Link>
            <a href="tel:503-753-2329" className="btn-secondary">
              Call (503) 753-2329
            </a>
          </div>
        </div>
      </section>

      {/* Primary Coverage Areas */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Primary Service Areas
            </h2>
            <p className="text-xl text-gray-600">
              Our main coverage areas with the fastest response times and comprehensive services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {primaryAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <Link href={`/${area.name.toLowerCase().replace(' ', '-')}-junk-removal`} className="block">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-primary-600 transition-colors">
                    {area.name} Junk Removal →
                  </h3>
                </Link>
                <p className="text-gray-600 mb-6">
                  {area.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Service Highlights:</h4>
                  <ul className="space-y-2">
                    {area.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Zip Codes:</span> {area.zipCodes.join(', ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Coverage Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Service Areas
            </h2>
            <p className="text-xl text-gray-600">
              We also provide professional junk removal services in these communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <Link href={`/${area.name.toLowerCase().replace(' ', '-')}-junk-removal`} className="block">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                    {area.name} Junk Removal →
                  </h3>
                </Link>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">Services Available:</h4>
                  <ul className="space-y-1">
                    {area.services.map((service, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full flex-shrink-0"></div>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-xs text-gray-500">
                  <span className="font-medium">Zip Codes:</span> {area.zipCodes.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You Get in Every Area
            </h2>
            <p className="text-xl text-gray-600">
              Consistent, high-quality service across all our coverage areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Area
            </h2>
            <p className="text-xl text-gray-600">
              Covering the greater Portland metro area with reliable junk removal services
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <img 
                src="/images/junk-removal/portland-metro-service-area-map.webp" 
                alt="Andrew and Sons Junk Removal service area map showing Portland metro coverage"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Don't see your area on the map? We may still be able to help! 
                Contact us to check if we service your location.
              </p>
              <Link href="/contact" className="btn-primary">
                Check Your Area
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing by Area */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing Across All Areas
            </h2>
            <p className="text-xl text-gray-600">
              Fair, volume-based pricing with no hidden fees, regardless of location
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
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

            <div className="bg-gray-50 rounded-xl p-8 text-center">
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
              Prices may vary slightly based on disposal fees and distance. 
              All quotes are free and provided upfront with no surprises.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Coverage Area Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our service areas and availability
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you charge extra for areas farther from Oregon City?
              </h3>
              <p className="text-gray-600">
                Our pricing is consistent across all service areas. We may add a small travel fee 
                for locations more than 30 miles from Oregon City, but this is always disclosed 
                upfront in your free quote.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Can you provide same-day service in all areas?
              </h3>
              <p className="text-gray-600">
                Same-day service is available in most of our coverage areas, especially Oregon City, 
                Portland, Clackamas, and Gresham. For other areas, we typically can schedule within 
                24-48 hours. Call us to check availability for your specific location.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What if my area isn't listed?
              </h3>
              <p className="text-gray-600">
                We're always expanding our service area! If your location isn't listed, please 
                contact us anyway. We may be able to accommodate special requests or let you know 
                when we'll be expanding to your area.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you serve commercial properties in all areas?
              </h3>
              <p className="text-gray-600">
                Yes! We provide commercial junk removal services throughout our entire coverage area. 
                This includes office cleanouts, retail space clearing, construction debris removal, 
                and regular commercial pickup services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Schedule Your Junk Removal?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            No matter where you are in our service area, we're ready to help. 
            Get your free quote today and experience the AS Junk Removal difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Your Free Quote
            </Link>
            <a href="tel:503-753-2329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
