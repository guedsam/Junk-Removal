import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hawthorne Junk Removal | Professional Junk Hauling Service Portland, OR',
  description: 'Professional junk removal service in Hawthorne, Portland. Same-day pickup, eco-friendly disposal, transparent pricing. Serving Hawthorne and surrounding areas. Call (503) 753-2329.',
  keywords: 'Hawthorne junk removal, Portland junk hauling Hawthorne, furniture removal Hawthorne, appliance disposal Hawthorne, construction debris Hawthorne, estate cleanout Hawthorne, same day junk removal Portland Oregon',
}

export default function HawthorneJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Hawthorne <span className="text-gradient">Junk Removal</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Professional junk removal service in Portland's vibrant Hawthorne neighborhood.
                Serving the Belmont Dairy, food carts, and the famous Hawthorne Bridge area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">Get Free Quote</Link>
                <a href="tel:+15037532329" className="btn-secondary">Call (503) 753-2329</a>
              </div>
            </div>
            <div className="relative">
              <img src="/images/junk-removal/portland-junk-removal-team.webp" alt="Hawthorne junk removal" className="w-full h-80 object-cover rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hawthorne Junk Removal Services</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Complete junk removal for Hawthorne homes and businesses. Same-day service across Hawthorne's unique districts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Get Free Quote</Link>
            <a href="tel:+15037532329" className="btn-secondary">Call Now</a>
          </div>
        </div>
      </section>
    </div>
  )
}
