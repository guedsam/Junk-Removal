import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beaverton Junk Removal | #1 Local Junk Hauling Service | Same-Day Pickup',
  description: 'Top-rated Beaverton junk removal service. Same-day pickup, eco-friendly disposal, transparent pricing. Serving all Beaverton neighborhoods. Call (503) 753-2329 for free quote.',
  keywords: 'Beaverton junk removal, junk hauling Beaverton, furniture removal Beaverton, appliance disposal Beaverton, construction debris Beaverton, estate cleanout Beaverton, same day junk removal',
  openGraph: {
    title: 'Beaverton Junk Removal | #1 Local Junk Hauling Service',
    description: 'Top-rated Beaverton junk removal service. Same-day pickup, eco-friendly disposal, transparent pricing. Serving all Beaverton neighborhoods.',
    url: 'https://asjunkremoval.com/beaverton-junk-removal',
    siteName: 'Andrew and Sons Junk Removal',
    images: [{ url: '/images/junk-removal/professional-junk-removal-crew.webp', width: 1200, height: 630, alt: 'Beaverton Junk Removal Team' }],
    locale: 'en_US', type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Beaverton Junk Removal | #1 Local Junk Hauling Service', description: 'Top-rated Beaverton junk removal service. Same-day pickup, eco-friendly disposal, transparent pricing.', images: ['/images/junk-removal/professional-junk-removal-crew.webp'] },
  alternates: { canonical: 'https://asjunkremoval.com/beaverton-junk-removal' },
}

export default function BeavertonJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Beaverton <span className="text-gradient">Junk Removal</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                #1 rated junk removal service in Beaverton. Same-day pickup, eco-friendly disposal, and transparent pricing. Serving all Beaverton neighborhoods.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">Get Free Quote</Link>
                <a href="tel:+15037532329" className="btn-secondary">Call (503) 753-2329</a>
              </div>
            </div>
            <div className="relative">
              <img src="/images/junk-removal/professional-junk-removal-crew.webp" alt="Beaverton junk removal team" className="w-full h-80 object-cover rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Beaverton's Best Junk Removal Service?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">Join hundreds of satisfied Beaverton customers. Same-day service available.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">Get Free Quote Online</Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">Call (503) 753-2329 Now</a>
          </div>
        </div>
      </section>
    </div>
  )
}
