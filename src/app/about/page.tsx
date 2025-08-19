import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Oregon City Junk Removal | Local, Eco-Friendly Junk Hauling',
  description: 'Learn about Oregon City Junk Removal - your local, eco-friendly junk hauling company serving Portland and surrounding areas. Family-owned business committed to responsible disposal.',
  keywords: 'about junk removal Oregon City, local junk hauling Portland, eco-friendly junk disposal Oregon, family owned junk removal',
  openGraph: {
    title: 'About Oregon City Junk Removal | Local, Eco-Friendly Junk Hauling',
    description: 'Learn about Oregon City Junk Removal - your local, eco-friendly junk hauling company serving Portland and surrounding areas.',
  },
}

export default function AboutPage() {
  const values = [
    {
      title: 'Eco-Friendly Disposal',
      description: 'We prioritize recycling and donating items whenever possible, keeping waste out of landfills.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Local Community Focus',
      description: 'As a local Oregon business, we understand our community and are committed to serving our neighbors.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Professional Service',
      description: 'Our trained team provides reliable, efficient service with transparent pricing and no hidden fees.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Customer Satisfaction',
      description: 'We stand behind our work with a 100% satisfaction guarantee and exceptional customer service.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    }
  ]

  const stats = [
    { number: '5000+', label: 'Jobs Completed' },
    { number: '85%', label: 'Items Recycled/Donated' },
    { number: '24/7', label: 'Customer Support' },
    { number: '100%', label: 'Satisfaction Rate' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                About Oregon City{' '}
                <span className="text-gradient">Junk Removal</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your trusted local partner for eco-friendly junk removal services in Oregon City, 
                Portland, and surrounding areas. Family-owned and community-focused since 2018.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Free Quote
                </Link>
                <Link href="/services" className="btn-outline">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/junk-removal/oregon-city-junk-removal-team.webp" 
                alt="Oregon City Junk Removal team with truck"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/junk-removal/founders-oregon-city-junk-removal.webp" 
                alt="Founders of Oregon City Junk Removal"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Oregon City Junk Removal was founded in 2018 by local residents who saw a need 
                  for reliable, eco-friendly junk removal services in the Portland metro area. 
                  What started as a small family business has grown into the region's most trusted 
                  junk hauling company.
                </p>
                <p>
                  We understand that clearing out junk can be overwhelming, whether you're dealing 
                  with a home cleanout, office renovation, or construction debris. That's why we've 
                  built our business around making the process as easy and stress-free as possible 
                  for our customers.
                </p>
                <p>
                  As lifelong Oregon residents, we're committed to protecting our beautiful state's 
                  environment. We've diverted over 85% of collected items from landfills through 
                  recycling, donation, and responsible disposal practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To provide Oregon City, Portland, and surrounding communities with fast, affordable, 
              and environmentally responsible junk removal services while supporting local charities 
              and maintaining the highest standards of customer service.
            </p>
            <div className="bg-primary-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">
                "We don't just remove junk - we help our community and protect our environment."
              </h3>
              <p className="text-primary-100">
                - Mike & Sarah Thompson, Founders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we serve our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Impact by the Numbers
            </h2>
            <p className="text-xl text-primary-100">
              See how we're making a difference in our community
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Environmental Commitment
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We believe that responsible junk removal means more than just hauling items away. 
                  Our commitment to the environment drives us to find new homes for items whenever possible.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Partner with local charities for furniture and appliance donations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Recycle metals, electronics, and other materials at certified facilities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Proper disposal of hazardous materials following EPA guidelines</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Use fuel-efficient trucks to minimize our carbon footprint</span>
                  </li>
                </ul>
              </div>
              <Link href="/blog/eco-friendly-junk-disposal-oregon-green" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold">
                Learn more about our eco-friendly practices →
              </Link>
            </div>
            <div>
              <img 
                src="/images/junk-removal/eco-friendly-recycling-portland.webp" 
                alt="Recycling and donation process"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced, professional team is dedicated to providing exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <img 
                src="/images/junk-removal/mike-thompson-cofounder.webp" 
                alt="Mike Thompson, Co-Founder"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mike Thompson</h3>
              <p className="text-primary-600 font-medium mb-3">Co-Founder & Operations Manager</p>
              <p className="text-gray-600 text-sm">
                15+ years in waste management and environmental services. Passionate about 
                sustainable business practices.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <img 
                src="/images/junk-removal/sarah-thompson-cofounder.webp" 
                alt="Sarah Thompson, Co-Founder"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Thompson</h3>
              <p className="text-primary-600 font-medium mb-3">Co-Founder & Customer Relations</p>
              <p className="text-gray-600 text-sm">
                Background in customer service and community outreach. Ensures every customer 
                has an exceptional experience.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <img 
                src="/images/junk-removal/professional-junk-removal-crew.webp" 
                alt="Team of junk removal professionals"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Crew</h3>
              <p className="text-primary-600 font-medium mb-3">Professional Removal Team</p>
              <p className="text-gray-600 text-sm">
                Trained, insured, and background-checked professionals committed to safe, 
                efficient junk removal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Oregon City Junk Removal 
            for their junk hauling needs.
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
