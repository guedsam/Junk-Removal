import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Milwaukie Junk Removal | #1 Local Junk Hauling Service | Same-Day Pickup',
  description: 'Top-rated Milwaukie junk removal service. Same-day pickup, eco-friendly disposal, transparent pricing. Serving all Milwaukie neighborhoods. Call (503) 753-2329 for free quote.',
  keywords: 'Milwaukie junk removal, junk hauling Milwaukie, furniture removal Milwaukie, appliance disposal Milwaukie, construction debris Milwaukie, estate cleanout Milwaukie, same day junk removal',
  openGraph: {
    title: 'Milwaukie Junk Removal | #1 Local Junk Hauling Service',
    description: 'Top-rated Milwaukie junk removal service. Same-day pickup, eco-friendly disposal, transparent pricing. Serving all Milwaukie neighborhoods.',
    url: 'https://asjunkremoval.com/milwaukie-junk-removal',
    siteName: 'Andrew and Sons Junk Removal',
    images: [
      {
        url: '/images/junk-removal/professional-junk-removal-crew.webp',
        width: 1200,
        height: 630,
        alt: 'Milwaukie Junk Removal Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Milwaukie Junk Removal | #1 Local Junk Hauling Service',
    description: 'Top-rated Milwaukie junk removal service. Same-day pickup, eco-friendly disposal, transparent pricing.',
    images: ['/images/junk-removal/professional-junk-removal-crew.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/milwaukie-junk-removal',
  },
}

export default function MilwaukieJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Milwaukie{' '}
                <span className="text-gradient">Junk Removal</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                #1 rated junk removal service in Milwaukie. Same-day pickup, eco-friendly disposal, 
                and transparent pricing. Serving all Milwaukie neighborhoods and surrounding areas.
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
                alt="Milwaukie junk removal team with truck"
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
              Milwaukie Junk Removal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive junk hauling services for Milwaukie residents and businesses. 
              From downtown Milwaukie to Sellwood, we've got you covered!
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
                Residential Junk Removal
              </h3>
              <p className="text-gray-600">
                Complete home cleanouts, furniture removal, appliance disposal, and general household junk pickup throughout Milwaukie.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Commercial Junk Removal
              </h3>
              <p className="text-gray-600">
                Office cleanouts, retail space clearing, warehouse cleanups, and commercial construction debris removal in Milwaukie.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Estate Cleanouts
              </h3>
              <p className="text-gray-600">
                Compassionate estate cleanout services for Milwaukie families, handling everything with care and respect during difficult times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Milwaukie's Best Junk Removal Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied Milwaukie customers. Same-day service available. 
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
    </div>
  )
}
