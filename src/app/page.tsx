import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '#1 Junk Removal Oregon City & Portland | Same-Day Pickup | Andrew and Sons',
  description: 'Top-rated junk removal service in Oregon City, Portland & surrounding areas. Same-day pickup, eco-friendly disposal, transparent pricing. Licensed & insured. Call (503) 753-2329 for free quote.',
  keywords: 'junk removal Oregon City, junk hauling Portland, appliance removal Oregon, furniture removal Portland, trash pickup Portland Oregon, eco-friendly junk removal Oregon, same day junk removal, residential junk removal, commercial junk removal, construction debris removal, estate cleanout Oregon City, garage cleanout Portland, basement cleanout Oregon, yard waste removal Portland, hot tub removal Oregon City, piano removal Portland, mattress disposal Oregon, refrigerator removal Portland',
  openGraph: {
    title: '#1 Junk Removal Oregon City & Portland | Same-Day Pickup | Andrew and Sons',
    description: 'Top-rated junk removal service in Oregon City, Portland & surrounding areas. Same-day pickup, eco-friendly disposal, transparent pricing. Licensed & insured.',
    url: 'https://asjunkremoval.com',
    siteName: 'Andrew and Sons Junk Removal',
    images: [
      {
        url: '/images/junk-removal/portland-junk-removal-team.webp',
        width: 1200,
        height: 630,
        alt: 'Professional junk removal team in Oregon City and Portland',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Junk Removal Oregon City & Portland | Same-Day Pickup',
    description: 'Top-rated junk removal service in Oregon City, Portland & surrounding areas. Same-day pickup, eco-friendly disposal, transparent pricing.',
    images: ['/images/junk-removal/portland-junk-removal-team.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com',
  },
}

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Andrew and Sons Junk Removal',
    image: '/images/junk-removal/portland-junk-removal-team.webp',
    '@id': 'https://asjunkremoval.com',
    url: 'https://asjunkremoval.com',
    telephone: '+15037532329',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main St',
      addressLocality: 'Oregon City',
      addressRegion: 'OR',
      postalCode: '97045',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.3311,
      longitude: -122.6067
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '07:00',
      closes: '19:00'
    },
    sameAs: [
      'https://www.facebook.com/asjunkremoval',
      'https://www.instagram.com/asjunkremoval'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '247',
      bestRating: '5',
      worstRating: '1'
    },
    priceRange: '$150-$750',
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 45.3311,
        longitude: -122.6067
      },
      geoRadius: '50000'
    }
  }

  const services = [
    {
      title: 'Residential Junk Removal',
      description: 'Complete home cleanouts, furniture removal, appliance disposal, and general household junk pickup.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v0" />
        </svg>
      ),
      link: '/services/residential-junk-removal'
    },
    {
      title: 'Commercial Junk Removal',
      description: 'Professional commercial cleanouts for offices, retail spaces, warehouses, and construction sites.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      link: '/services/commercial-junk-removal'
    },
    {
      title: 'Furniture Removal',
      description: 'Safe removal and eco-friendly disposal of old furniture, mattresses, couches, and large items.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      link: '/services/furniture-removal'
    },
    {
      title: 'Appliance Removal',
      description: 'EPA-compliant disposal of refrigerators, washers, dryers, and other large appliances.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      link: '/services/appliance-removal'
    },
    {
      title: 'Construction Debris',
      description: 'Safe removal of construction debris, renovation waste, and building materials.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      link: '/services/construction-debris-cleanup'
    },
    {
      title: 'Yard Waste Removal',
      description: 'Eco-friendly disposal of yard waste, tree branches, leaves, and landscaping debris.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      link: '/services/yard-waste-removal'
    }
  ]

  const coverageAreas = [
    { name: 'Oregon City', slug: 'oregon-city-junk-removal' },
    { name: 'Portland', slug: 'portland-junk-removal' },
    { name: 'Clackamas', slug: 'clackamas-junk-removal' },
    { name: 'Gresham', slug: 'gresham-junk-removal' },
    { name: 'Milwaukie', slug: 'milwaukie-junk-removal' },
    { name: 'Happy Valley', slug: 'happy-valley-junk-removal' },
    { name: 'Lake Oswego', slug: 'lake-oswego-junk-removal' },
    { name: 'West Linn', slug: 'west-linn-junk-removal' }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Oregon City, OR',
      text: 'Amazing service! They removed all the junk from my garage in under 2 hours. Professional, affordable, and eco-friendly. Highly recommend!',
      rating: 5
    },
    {
      name: 'Mike Chen',
      location: 'Portland, OR',
      text: 'Called them for same-day service and they delivered! Great team, fair pricing, and they cleaned up everything perfectly.',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      location: 'Clackamas, OR',
      text: 'Best junk removal company in the area. They handled our office cleanout professionally and recycled everything possible.',
      rating: 5
    }
  ]

  const blogPosts = [
    {
      title: 'Senior Downsizing & Junk Removal Services in Portland: Compassionate Support for Life Transitions',
      excerpt: 'Professional senior downsizing and junk removal services with compassionate support for seniors transitioning to smaller homes.',
      slug: 'senior-downsizing-junk-removal-portland',
      date: 'August 24, 2025'
    },
    {
      title: 'Furniture Donation & Disposal in Portland Oregon: Give Back to Your Community',
      excerpt: 'Learn how to donate furniture in Portland and Oregon City. Professional furniture removal with charity partnerships.',
      slug: 'furniture-donation-disposal-portland-oregon',
      date: 'February 12, 2025'
    },
    {
      title: 'Appliance Disposal & Recycling in Portland Oregon: Eco-Friendly Solutions',
      excerpt: 'Professional appliance disposal and recycling services in Portland and Oregon City. EPA-compliant removal of appliances.',
      slug: 'appliance-disposal-recycling-portland-oregon',
      date: 'February 10, 2025'
    }
  ]

  const whyChooseUs = [
    {
      title: 'Same-Day Service',
      description: 'Most requests completed the same day you call. Fast, reliable service when you need it.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Eco-Friendly Disposal',
      description: 'We recycle and donate whenever possible. Responsible disposal that protects our environment.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprises. Fair, upfront pricing with free estimates.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: 'Licensed & Insured',
      description: 'Fully licensed and insured for your peace of mind. Your property is protected.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Local Oregon Team',
      description: 'Oregon-based professionals who know the area and support the local community.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        </svg>
      )
    },
    {
      title: '5-Star Service',
      description: 'Consistently rated 5 stars by customers. Professional, courteous, and reliable.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  #1 Rated{' '}
                  <span className="text-gradient">Junk Removal</span>{' '}
                  in Oregon City & Portland
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professional junk hauling services with same-day pickup available. 
                  Eco-friendly disposal, transparent pricing, and 100% satisfaction guaranteed. 
                  Serving Oregon City, Portland, and surrounding areas since 2015.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Get Free Quote
                </Link>
                <a href="tel:5037532329" className="btn-secondary text-lg px-8 py-4">
                  Call Now: (503) 753-2329
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  <span>4.9/5 (247 Reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Same-Day Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Licensed & Insured</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <img 
                  src="/images/junk-removal/portland-junk-removal-team.webp" 
                  alt="Professional junk removal team in Oregon City and Portland with truck"
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="absolute -top-4 -right-4 bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold">
                  Same-Day Service Available!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Junk Removal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential cleanouts to commercial junk hauling, we handle it all with 
              professional service and eco-friendly disposal practices throughout Oregon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="text-primary-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <Link href={service.link} className="text-primary-600 hover:text-primary-700 font-semibold">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Oregon Chooses Andrew and Sons
            </h2>
            <p className="text-xl text-gray-600">
              The most trusted junk removal company in Oregon City, Portland, and surrounding areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, index) => (
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

      {/* Pricing Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Junk Removal Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Fair, volume-based pricing with no hidden fees throughout Oregon
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
              All prices include labor, transportation, and responsible disposal. 
              No hidden fees or surprises.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Oregon City, Portland & Surrounding Areas
            </h2>
            <p className="text-xl text-gray-600">
              Local junk removal near you with fast, reliable service throughout the Portland metro area
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {coverageAreas.map((area, index) => (
              <Link key={index} href={`/${area.slug}`} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300 group">
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">{area.name}</h3>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Don't see your area listed? We serve many more locations throughout the Portland metro area including Tigard, Beaverton, Tualatin, and Gladstone.
            </p>
            <Link href="/coverage-areas" className="btn-primary">
              View All Coverage Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Oregon Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from satisfied customers across Oregon City, Portland, and surrounding areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-gray-600">
              Tips, guides, and insights about junk removal and eco-friendly disposal in Oregon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <img 
                  src={`/images/junk-removal/${index === 0 ? 'professional-junk-removal-crew.webp' : index === 1 ? 'furniture-removal-oregon.webp' : 'professional-junk-removal-crew.webp'}`}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="text-primary-600 hover:text-primary-700 font-semibold">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" className="btn-outline">
              View All Blog Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get Your Free Junk Removal Quote
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we'll provide you with a free, no-obligation quote for your junk removal needs in Oregon City, Portland, and surrounding areas.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <form name="home-quote" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-6">
                {/* Hidden fields for Netlify */}
                <input type="hidden" name="form-name" value="home-quote" />
                <div style={{ display: 'none' }}>
                  <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="(503) 555-1234"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Zip Code */}
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-semibold text-gray-700 mb-2">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="97045 (optional)"
                    />
                  </div>
                </div>

                {/* Services Multi-Select */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Services Needed (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="service-0"
                        name="services"
                        value="Residential Junk Removal"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label htmlFor="service-0" className="ml-3 text-sm text-gray-700">
                        Residential Junk Removal
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="service-1"
                        name="services"
                        value="Commercial Junk Removal"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label htmlFor="service-1" className="ml-3 text-sm text-gray-700">
                        Commercial Junk Removal
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="service-2"
                        name="services"
                        value="Furniture Removal"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label htmlFor="service-2" className="ml-3 text-sm text-gray-700">
                        Furniture Removal
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="service-3"
                        name="services"
                        value="Appliance Removal"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label htmlFor="service-3" className="ml-3 text-sm text-gray-700">
                        Appliance Removal
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="service-4"
                        name="services"
                        value="Yard Waste Removal"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label htmlFor="service-4" className="ml-3 text-sm text-gray-700">
                        Yard Waste Removal
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="service-5"
                        name="services"
                        value="Construction Debris"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label htmlFor="service-5" className="ml-3 text-sm text-gray-700">
                        Construction Debris
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="service-6"
                        name="services"
                        value="Estate Cleanout"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label htmlFor="service-6" className="ml-3 text-sm text-gray-700">
                        Estate Cleanout
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="service-7"
                        name="services"
                        value="Other"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label htmlFor="service-7" className="ml-3 text-sm text-gray-700">
                        Other
                      </label>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                    Describe Your Junk Removal Needs
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Please describe what items you need removed, approximate quantity, and any special considerations (stairs, tight spaces, etc.)"
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label htmlFor="images" className="block text-sm font-semibold text-gray-700 mb-2">
                    Upload Images (Optional)
                  </label>
                  <p className="text-sm text-gray-500 mb-3">
                    Upload photos of the items you need removed to help us provide a more accurate quote. Images only (JPG, PNG, GIF).
                  </p>
                  <input
                    type="file"
                    id="images"
                    name="images"
                    multiple
                    accept="image/*"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
                  />
                </div>

                {/* reCAPTCHA */}
                <div className="flex justify-center">
                  <div data-netlify-recaptcha="true"></div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn-primary text-lg px-12 py-4"
                  >
                    Get My Free Quote
                  </button>
                  <p className="text-sm text-gray-500 mt-4">
                    * Required fields. We'll contact you within 2 hours with your free quote.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Clear Out Your Junk Today?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Don't wait! Get your free, no-obligation quote today. Same-day service available 
            throughout Oregon City, Portland, and surrounding areas. Call now or fill out our form above.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5037532329" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Call (503) 753-2329 Now
            </a>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Contact Us Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
