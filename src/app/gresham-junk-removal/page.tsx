import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Junk Removal Gresham OR #1 Rated Service - Same-Day Pickup | AS Junk Removal',
  description: 'Get the #1 junk removal service in Gresham, OR. Same-day pickup, eco-friendly disposal, and transparent pricing. Serving Gresham residents, businesses & all neighborhoods. Call (503) 753-2329 for free quote!',
  keywords: 'junk removal Gresham OR, Gresham junk removal, junk hauler Gresham, same day junk removal Gresham, eco-friendly junk removal Gresham, residential junk removal Gresham, commercial junk removal Gresham',
  openGraph: {
    title: 'Junk Removal Gresham OR #1 Rated Service - Same-Day Pickup',
    description: 'Get the #1 junk removal service in Gresham, OR. Same-day pickup, eco-friendly disposal, and transparent pricing. Serving Gresham residents & businesses.',
    url: 'https://asjunkremoval.com/gresham-junk-removal',
    siteName: 'AS Junk Removal',
    images: [
      {
        url: '/images/junk-removal/professional-junk-removal-crew.webp',
        width: 1200,
        height: 630,
        alt: 'Gresham junk removal team providing same-day service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Junk Removal Gresham OR #1 Rated Service - Same-Day Pickup',
    description: 'Get the #1 junk removal service in Gresham, OR. Same-day pickup, eco-friendly disposal, and transparent pricing.',
    images: ['/images/junk-removal/professional-junk-removal-crew.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/gresham-junk-removal',
  },
}

export default function GreshamJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Junk Removal{' '}
                <span className="text-gradient">Gresham OR</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                #1 rated junk removal service in Gresham. Same-day pickup, eco-friendly disposal, 
                and transparent pricing. Serving all Gresham neighborhoods and surrounding areas.
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
                src="/images/junk-removal/professional-junk-removal-crew.webp" 
                alt="Gresham junk removal team with truck"
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
              Gresham Junk Removal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive junk hauling services for Gresham residents and businesses. 
              From downtown Gresham to Powell Valley, we've got you covered!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/services/residential-junk-removal" className="hover:text-primary-600">Residential Junk Removal</Link>
              </h3>
              <p className="text-gray-600">
                Complete home cleanouts, furniture removal, appliance disposal, and general household junk pickup throughout Gresham.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/services/commercial-junk-removal" className="hover:text-primary-600">Commercial Junk Removal</Link>
              </h3>
              <p className="text-gray-600">
                Office cleanouts, retail space clearing, warehouse cleanups, and commercial construction debris removal in Gresham.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/services/construction-debris-cleanup" className="hover:text-primary-600">Construction Debris</Link>
              </h3>
              <p className="text-gray-600">
                Safe removal of construction waste, renovation debris, drywall, flooring, and building materials from Gresham job sites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Serving All Gresham Neighborhoods</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From downtown Gresham to the outskirts, we serve residents and businesses in all areas of Gresham, OR, including Powell Valley, Hockinson, and more. We're your local Gresham junk removal experts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Downtown Gresham</h3>
              <p className="text-gray-600">Same-day service for residential and commercial properties in the heart of Gresham.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Powell Valley</h3>
              <p className="text-gray-600">Reliable junk removal services for homeowners and businesses in Powell Valley.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Surrounding Areas</h3>
              <p className="text-gray-600">Comprehensive coverage including Rockwood, Pleasant Valley, and beyond.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Gresham Customers Say</h2>
            <p className="text-lg text-gray-600 mb-8">Real reviews from real Gresham residents who've used our junk removal services.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">"AS Junk Removal was fantastic! They removed all my old furniture in Gresham in one day. Professional and eco-friendly - highly recommend!"</p>
              <p className="text-sm font-semibold text-gray-900">- Sarah M., Gresham Resident</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">"Best junk removal service in Gresham. Quick response, same-day pickup, and affordable prices. Will definitely use again."</p>
              <p className="text-sm font-semibold text-gray-900">- John D., Powell Valley</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">"Moved to Gresham and needed to clear out garage junk. These folks handled it perfectly with no hassle."</p>
              <p className="text-sm font-semibold text-gray-900">- Lisa T., Downtown Gresham</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Common questions about junk removal in Gresham, OR.</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer same-day junk removal in Gresham?</h3>
              <p className="text-gray-600">Yes! We offer same-day pickup for most junk removal jobs in Gresham. Call us by 2 PM for same-day service.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How much does junk removal cost in Gresham?</h3>
              <p className="text-gray-600">Our pricing is transparent and based on the volume of junk. Get a free estimate by calling (503) 753-2329 or filling out our online form.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What types of items do you remove from Gresham homes?</h3>
              <p className="text-gray-600">We remove furniture, appliances, electronics, construction debris, yard waste, and general household junk from Gresham properties.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Gresham's Best Junk Removal Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied Gresham customers. Same-day service available. 
            Call now or get your free online quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Quote Online
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329 Now
            </a>
          </div>
        </div>
      </section>

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "AS Junk Removal",
            "description": "Professional junk removal services in Gresham, OR",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Gresham",
              "addressRegion": "OR",
              "addressCountry": "US"
            },
            "telephone": "(503) 753-2329",
            "url": "https://asjunkremoval.com/gresham-junk-removal",
            "serviceArea": {
              "@type": "Place",
              "name": "Gresham, OR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "200"
            },
            "openingHours": "Mo-Su",
            "serviceType": "Junk Removal Services"
          })
        }}
      />
    </div>
  )
}
