import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '#1 Junk Removal Service in Pearl District, Portland - Modern Loft & Condo Specialists | AS Junk Removal',
  description: 'Leading junk removal service in Pearl District, Portland. Modern loft and condo specialists, urban cleanup service, efficient condo access. Call (503) 753-2329. Serving Pearl District residents since 2018.',
  keywords: 'Pearl District junk removal, junk removal Pearl District Portland, junk hauler Pearl District, same day junk removal Pearl District, modern loft junk removal Pearl District OR, Pearl District urban specialists junk removal',
  openGraph: {
    title: '#1 Junk Removal Service in Pearl District, Portland - Modern Loft & Condo Specialists',
    description: 'Leading junk removal service in Pearl District, Portland. Modern loft and condo specialists with urban expertise.',
    url: 'https://asjunkremoval.com/pearl-district-junk-removal',
    siteName: 'AS Junk Removal'
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Junk Removal Service in Pearl District, Portland - Modern Loft & Condo Specialists',
    images: ['/images/junk-removal/portland-junk-removal-team.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/pearl-district-junk-removal',
  },
}

export default function PearlDistrictJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Junk Removal <span className="text-gradient">Pearl District</span> Portland
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Portland's premier junk removal for modern lofts and boutique condos.
                We understand Pearl District's sophisticated urban lifestyle since 2018.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Free Estimate
                </Link>
                <a href="tel:+15037532329" className="btn-secondary">
                  Call (503) 753-2329
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/junk-removal/portland-junk-removal-team.webp"
                alt="Pearl District junk removal Portland"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Junk Removal Services for Pearl District
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Professional residential and commercial junk removal tailored for Portland's Pearl District community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Modern Loft & Condo Cleanouts
              </h3>
              <p className="text-gray-600">
                Specialized for Pearl District's boutique buildings and contemporary condominiums.
                We handle modern furniture, high-end appliances, and construction debris.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Urban Property Cleanup
              </h3>
              <p className="text-gray-600">
                Professional service for Pearl District's modern residential and commercial properties.
                Same-day service, transparent pricing, eco-friendly disposal.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Construction Debris Removal
              </h3>
              <p className="text-gray-600">
                Safe removal of renovation waste while preserving Pearl District's architectural character.
                Licensed and insured for residential and commercial projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready for Pearl District Junk Removal?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Same-day service, transparent pricing, eco-friendly disposal throughout Portland's Pearl District.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Free Quote
            </Link>
            <a href="tel:+15037532329" className="btn-secondary">
              Call Now
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
            "telephone": "(503) 753-2329",
            "url": "https://asjunkremoval.com/pearl-district-junk-removal",
            "serviceArea": {
              "@type": "Place",
              "name": "Pearl District, Portland, OR"
            }
          })
        }}
      />
    </div>
  )
}
