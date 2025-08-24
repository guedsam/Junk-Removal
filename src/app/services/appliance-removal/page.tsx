import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Appliance Removal Services Portland | Oregon City Junk Removal',
  description: 'Expert appliance removal and disposal services in Portland, Oregon City, and surrounding areas. Safe removal of refrigerators, washers, dryers, stoves, and all appliances. Same-day service available.',
  keywords: 'appliance removal Portland, refrigerator disposal Oregon City, washer dryer removal, stove removal, appliance hauling Portland, dishwasher disposal Oregon',
  openGraph: {
    title: 'Professional Appliance Removal Services Portland | Oregon City Junk Removal',
    description: 'Expert appliance removal and disposal services in Portland, Oregon City, and surrounding areas. Safe removal of refrigerators, washers, dryers, stoves, and all appliances.',
    url: 'https://oregoncityjunkremoval.com/services/appliance-removal',
    siteName: 'Oregon City Junk Removal',
    images: [
      {
        url: '/images/junk-removal/professional-junk-removal-crew.webp',
        width: 1200,
        height: 630,
        alt: 'Professional appliance removal service in Portland Oregon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Appliance Removal Services Portland | Oregon City Junk Removal',
    description: 'Expert appliance removal and disposal services in Portland, Oregon City, and surrounding areas. Safe removal of refrigerators, washers, dryers, stoves, and all appliances.',
    images: ['/images/junk-removal/professional-junk-removal-crew.webp'],
  },
  alternates: {
    canonical: 'https://oregoncityjunkremoval.com/services/appliance-removal',
  },
}

export default function ApplianceRemovalPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Appliance Removal Services',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Oregon City Junk Removal',
      image: '/images/junk-removal/professional-junk-removal-crew.webp',
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
      priceRange: '$50-$200',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '247',
      },
    },
    serviceType: 'Appliance Removal and Disposal',
    description: 'Professional appliance removal services including refrigerators, washers, dryers, stoves, dishwashers, and all household appliances.',
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
      price: '50-200',
      description: 'Appliance removal pricing based on size and type of appliance',
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
                  Professional <span className="text-[#c75c26]">Appliance Removal</span> Services
                </h1>
                <p className="text-xl mb-8 text-gray-200">
                  Safe, efficient removal of all types of appliances from your home or business. 
                  We handle refrigerators, washers, dryers, stoves, and more in Portland and surrounding areas.
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
                  src="/images/junk-removal/professional-junk-removal-crew.webp"
                  alt="Professional appliance removal team in Portland Oregon"
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
                Complete Appliance Removal Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From single appliances to complete kitchen and laundry room cleanouts, we handle all types of appliance removal 
                with proper safety protocols and eco-friendly disposal methods.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-[#c75c26] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#053254] mb-4">Kitchen Appliances</h3>
                <p className="text-gray-600">
                  Refrigerators, stoves, ovens, dishwashers, microwaves, and all kitchen appliance removal and disposal.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-[#c75c26] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#053254] mb-4">Laundry Appliances</h3>
                <p className="text-gray-600">
                  Washers, dryers, combo units, and all laundry room appliance removal with proper disconnection.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-[#c75c26] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#053254] mb-4">HVAC Systems</h3>
                <p className="text-gray-600">
                  Air conditioners, furnaces, water heaters, and HVAC equipment removal with certified technicians.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-[#c75c26] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#053254] mb-4">Electronics</h3>
                <p className="text-gray-600">
                  TVs, computers, stereo systems, and electronic appliance removal with data destruction services.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-[#c75c26] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#053254] mb-4">Commercial Equipment</h3>
                <p className="text-gray-600">
                  Restaurant equipment, office appliances, and commercial-grade appliance removal services.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-[#c75c26] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#053254] mb-4">Eco-Friendly Disposal</h3>
                <p className="text-gray-600">
                  Proper recycling of metals, refrigerants, and hazardous materials with certified disposal methods.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety & Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#053254] mb-4">
                Safe & Professional Appliance Removal Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our certified technicians follow strict safety protocols for appliance disconnection and removal.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#c75c26] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-[#053254] mb-4">Assessment</h3>
                <p className="text-gray-600">We evaluate the appliance type, location, and any special requirements for safe removal.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#c75c26] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-[#053254] mb-4">Disconnection</h3>
                <p className="text-gray-600">Professional disconnection of electrical, gas, and water connections by certified technicians.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#c75c26] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-[#053254] mb-4">Safe Removal</h3>
                <p className="text-gray-600">Careful removal using proper equipment and techniques to protect your property.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#c75c26] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-semibold text-[#053254] mb-4">Eco Disposal</h3>
                <p className="text-gray-600">Environmentally responsible disposal with proper recycling and hazardous material handling.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#053254] mb-4">
                Transparent Appliance Removal Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fair, upfront pricing based on appliance size and complexity. No hidden fees or surprises.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-[#053254] mb-4">Small Appliances</h3>
                <div className="text-4xl font-bold text-[#c75c26] mb-6">$50-$75</div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Microwaves, dishwashers
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Small electronics
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Same-day service
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
                <h3 className="text-2xl font-bold mb-4">Large Appliances</h3>
                <div className="text-4xl font-bold mb-6">$100-$150</div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Refrigerators, washers, dryers
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Stoves, ovens
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Professional disconnection
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Safe removal
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-[#053254] mb-4">Specialty Items</h3>
                <div className="text-4xl font-bold text-[#c75c26] mb-6">$150-$200</div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    HVAC systems
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Water heaters
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Commercial equipment
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Certified technicians
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#053254] mb-4">
                Why Choose Our Appliance Removal Service?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#c75c26] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#053254] mb-4">Certified Technicians</h3>
                <p className="text-gray-600">Licensed professionals handle all disconnections and safety protocols.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#c75c26] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#053254] mb-4">Same-Day Service</h3>
                <p className="text-gray-600">Quick response times with same-day appliance removal available.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#c75c26] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#053254] mb-4">Eco-Friendly</h3>
                <p className="text-gray-600">Proper recycling of metals and safe disposal of refrigerants.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#c75c26] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#053254] mb-4">Fully Insured</h3>
                <p className="text-gray-600">Complete insurance coverage protects your property during removal.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#053254] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Remove Your Old Appliances?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Get a free quote today and schedule your appliance removal service. 
              Professional, safe, and eco-friendly appliance disposal in Portland and surrounding areas.
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
