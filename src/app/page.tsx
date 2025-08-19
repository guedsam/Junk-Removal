import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fast, Affordable Junk Removal in Oregon City & Portland | Same-Day Service',
  description: 'Professional junk removal services in Oregon City, Portland, and surrounding areas. Same-day pickup, eco-friendly disposal, and affordable rates. Get your free quote today!',
  keywords: 'junk removal Oregon City, junk hauling Portland, appliance removal Oregon, furniture removal Portland, trash pickup Portland Oregon, eco-friendly junk removal Oregon',
  openGraph: {
    title: 'Fast, Affordable Junk Removal in Oregon City & Portland',
    description: 'Professional junk removal services in Oregon City, Portland, and surrounding areas. Same-day pickup, eco-friendly disposal, and affordable rates.',
  },
}

export default function HomePage() {
  const services = [
    {
      title: 'Residential Junk Removal',
      description: 'Clear out your home with our professional residential junk removal services.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v0" />
        </svg>
      )
    },
    {
      title: 'Commercial Junk Removal',
      description: 'Professional commercial cleanouts for offices, retail spaces, and businesses.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Furniture Removal',
      description: 'Safe removal and disposal of old furniture, mattresses, and large items.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: 'Appliance Removal',
      description: 'Eco-friendly disposal of refrigerators, washers, dryers, and other appliances.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    }
  ]

  const coverageAreas = [
    'Oregon City', 'Portland', 'Clackamas', 'Gresham', 
    'Milwaukie', 'Happy Valley', 'Lake Oswego', 'West Linn'
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
      title: 'Top 5 Reasons to Hire a Junk Removal Company in Portland',
      excerpt: 'Discover why professional junk removal is the smart choice for Portland homeowners and businesses.',
      slug: 'top-5-reasons-hire-junk-removal-portland',
      date: 'January 15, 2024'
    },
    {
      title: 'Eco-Friendly Junk Disposal: How We Keep Oregon Green',
      excerpt: 'Learn about our commitment to environmentally responsible junk disposal and recycling practices.',
      slug: 'eco-friendly-junk-disposal-oregon-green',
      date: 'January 10, 2024'
    },
    {
      title: 'Junk Removal vs Dumpster Rental: Which is Right for You?',
      excerpt: 'Compare the pros and cons of junk removal services versus dumpster rentals for your project.',
      slug: 'junk-removal-vs-dumpster-rental',
      date: 'January 5, 2024'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Fast, Affordable{' '}
                  <span className="text-gradient">Junk Removal</span>{' '}
                  in Oregon City & Portland
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professional junk hauling services with same-day pickup available. 
                  Eco-friendly disposal, transparent pricing, and 100% satisfaction guaranteed.
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
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Same-Day Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Eco-Friendly</span>
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
                <div className="w-full h-80 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚛</div>
                    <h3 className="text-xl font-semibold text-primary-600">Professional Junk Removal</h3>
                    <p className="text-gray-600">Oregon City & Portland</p>
                  </div>
                </div>
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
              Our Junk Removal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential cleanouts to commercial junk hauling, we handle it all with 
              professional service and eco-friendly disposal practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-primary-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link href="/services" className="text-primary-600 hover:text-primary-700 font-semibold">
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

      {/* Coverage Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Oregon City, Portland & Surrounding Areas
            </h2>
            <p className="text-xl text-gray-600">
              Local junk removal near you with fast, reliable service
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {coverageAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-gray-900">{area}</h3>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Don't see your area listed? We serve many more locations throughout the Portland metro area.
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
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from satisfied customers across Oregon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
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
              Tips, guides, and insights about junk removal and eco-friendly disposal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">
                      {index === 0 ? '📝' : index === 1 ? '♻️' : '🏠'}
                    </div>
                    <p className="text-sm text-primary-600 font-medium">Blog Post</p>
                  </div>
                </div>
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

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Clear Out Your Junk?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get your free, no-obligation quote today. Same-day service available 
            throughout Oregon City, Portland, and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Your Free Quote
            </Link>
            <a href="tel:5037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
