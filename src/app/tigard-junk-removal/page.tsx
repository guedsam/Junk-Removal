import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tigard Junk Removal | #1 Local Junk Hauling Service | Same-Day Pickup',
  description: 'Top-rated Tigard junk removal service. Same-day pickup, eco-friendly disposal, transparent pricing. Serving all Tigard neighborhoods. Call (503) 753-2329 for free quote.',
  keywords: 'Tigard junk removal, junk hauling Tigard, furniture removal Tigard, appliance disposal Tigard, construction debris Tigard, estate cleanout Tigard, same day junk removal',
  openGraph: { title: 'Tigard Junk Removal | #1 Local Junk Hauling Service', description: 'Top-rated Tigard junk removal service. Same-day pickup, eco-friendly disposal, transparent pricing. Serving all Tigard neighborhoods.', url: 'https://asjunkremoval.com/tigard-junk-removal', siteName: 'Andrew and Sons Junk Removal', images: [{ url: '/images/junk-removal/professional-junk-removal-crew.webp', width: 1200, height: 630, alt: 'Tigard Junk Removal Team' }], locale: 'en_US', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Tigard Junk Removal | #1 Local Junk Hauling Service', description: 'Top-rated Tigard junk removal service. Same-day pickup, eco-friendly disposal, transparent pricing.', images: ['/images/junk-removal/professional-junk-removal-crew.webp'] },
  alternates: { canonical: 'https://asjunkremoval.com/tigard-junk-removal' },
}

export default function TigardJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Tigard <span className="text-gradient">Junk Removal</span></h1>
              <p className="text-xl text-gray-600 leading-relaxed">#1 rated junk removal service in Tigard. Same-day pickup, eco-friendly disposal, and transparent pricing. Serving all Tigard neighborhoods.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">Get Free Quote</Link>
                <a href="tel:+15037532329" className="btn-secondary">Call (503) 753-2329</a>
              </div>
            </div>
            <div className="relative">
              <img src="/images/junk-removal/professional-junk-removal-crew.webp" alt="Tigard junk removal team" className="w-full h-80 object-cover rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Tigard's Best Junk Removal Service?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">Join hundreds of satisfied Tigard customers. Same-day service available.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">Get Free Quote Online</Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">Call (503) 753-2329 Now</a>
          </div>
        </div>
      </section>
    </div>
  )
}
