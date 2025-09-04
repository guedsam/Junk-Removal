import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '#1 Junk Removal Service in Canemah, Oregon City - Historic District Specialists | AS Junk Removal',
  description: 'Professional junk removal in historic Canemah, Oregon City. Historic home specialists, eco-friendly disposal, transparent pricing. Call (503) 753-2329. Serving Canemah residents & businesses since 2018.',
  keywords: 'Canemah junk removal, junk removal Canemah Oregon City, junk hauler Canemah, historic Canemah junk removal, same day junk removal Canemah, eco-friendly junk removal Canemah, Canemah estate cleanout, Canemah residential junk removal',
  openGraph: {
    title: '#1 Junk Removal Service in Canemah, Oregon City - Historic District Specialists',
    description: 'Professional junk removal in historic Canemah, Oregon City. Historic home specialists with care for your heritage properties.',
    url: 'https://asjunkremoval.com/canemah-junk-removal',
    siteName: 'AS Junk Removal',
    images: [
      {
        url: '/images/junk-removal/oregon-city-junk-removal-team.webp',
        width: 1200,
        height: 630,
        alt: 'AS Junk Removal team serving historic Canemah neighborhood in Oregon City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Junk Removal Service in Canemah, Oregon City - Historic District Specialists',
    description: 'Professional junk removal in historic Canemah, Oregon City. Historic home specialists.',
    images: ['/images/junk-removal/oregon-city-junk-removal-team.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/canemah-junk-removal',
  },
}

export default function CanemahJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Junk Removal{' '}
                <span className="text-gradient">Canemah</span>
                {' '}<span className="text-2xl md:text-3xl font-normal">Oregon City</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                #1 rated junk removal service in historic Canemah, Oregon City.
                Our historic home specialists understand the unique needs of this
                beautiful heritage district. Same-day service, eco-friendly disposal, transparent pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Free Estimate
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
                src="/images/junk-removal/oregon-city-junk-removal-team.webp"
                alt="AS Junk Removal professional team providing historic Canemah specialist junk removal services in Oregon City"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Canemah Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Historic Canemah Since 2018
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Canemah is Oregon City's historic district, fondly known as "Cannon Beach by the mile"
              for its beautiful buildings and coastal charm. As specialists in historic property care,
              we provide respectful, careful junk removal services that honor Canemah's legacy while keeping your vintage home clean and functional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">About Historic Canemah</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  America's oldest incorporated city at Willamette Falls
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Designated Oregon historic district with protected buildings
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Victorian and Queen Anne architecture masterpieces
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Direct access to Canemah Historic District Heritage Program
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Proximity to Willamette River and Falls Heritage Area
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Why Canemah Trusts AS Junk Removal</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Historic building codes and HOA guideline awareness
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Same-day service available for Canemah residents
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Gentle handling of antique furniture and heirlooms
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Transparent pricing with no hidden fees
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Understanding of historic preservation requirements
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Canemah Historic District Service Area</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>• Historic Canemah core</div>
              <div>• Canemah Historic District</div>
              <div>• Willamette Falls Heritage Area</div>
              <div>• Historic residential buildings</div>
              <div>• Near downtown Oregon City</div>
              <div>• Canemah's business district</div>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              Professional junk removal throughout historic Canemah, protecting our shared heritage while providing modern service excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Canemah-Specific Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Historic Canemah Junk Removal Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized services for historic Canemah homes, understanding the unique needs
              of preserving America's oldest incorporated city.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Historic Home Estate Services
              </h3>
              <p className="text-gray-600 mb-4">
                Compassionate estate cleanouts for Canemah's historic homes. We preserve family heirlooms while respectfully handling historical artifacts and antique collections.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Antique furniture preservation</li>
                <li>• Historical document handling</li>
                <li>• Vintage collection evaluation</li>
                <li>• Heritage building maintenance</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Historic Renovation Debris
              </h3>
              <p className="text-gray-600 mb-4">
                Safe removal of construction waste from Canemah renovation projects. We work with historic preservation guidelines and local building codes in this protected district.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Historic renovation waste</li>
                <li>• Preservation-compliant disposal</li>
                <li>• Protected building cleanup</li>
                <li>• Minimal vibration work</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Antique & Collectible Care
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized handling for Canemah's historic homes filled with antiques and collectibles. Professional gentle care for valuable heirloom pieces.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Antique furniture moving</li>
                <li>• Valuable collectibles handling</li>
                <li>• Glassware and porcelain protection</li>
                <li>• Vintage family heirlooms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Canemah Heritage Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Protecting Canemah's Historic Legacy
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Canemah is America's oldest incorporated city, and we honor that distinction with
              every job we do in your historic community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Historic District Expertise</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Full knowledge of Canemah historic District guidelines and preservation requirements for all our service work.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🌳</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Eco-Community Focus</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Green disposal practices respecting Canemah's Willamette River location and historic waterfront designations.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Community Favorite</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Chosen as preferred junk removal service throughout historic Canemah for our respectful, quality work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Historic Canemah Customer Trust
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Canemah homeowners share their experiences with our historic district junk removal service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "As longtime Canemah residents in a historical home, we needed a service that understood preservation guidelines.
                They were amazing - so careful with our Victorian furniture and antique pieces. Highly recommend for historic homes!"
              </p>
              <p className="text-sm font-semibold text-gray-900">- The Thompson Family, Historic Canemah Home</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "They handled our Canemah estate cleanup with such respect and care. My family has lived in Canemah since
                our home was built, and they treated our home's history with the reverence it deserves."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Robert & Margaret K., Legacy Canemah Residents</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Perfect for our Queen Anne Victorian home in Canemah. They knew exactly how to handle our antique furniture collection
                and were knowledgeable about historic building protocols. Exceptional service!"
              </p>
              <p className="text-sm font-semibold text-gray-900">- Sarah M., Victorians Anonymous Member</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for Canemah */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Historic Canemah Junk Removal Questions
            </h2>
            <p className="text-lg text-gray-600">Answers to common questions about our Canemah historic district services</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How does junk removal work differently in historic Canemah?
              </h3>
              <p className="text-gray-600">
                In historic Canemah, we follow historic district guidelines including reduced vibration work, careful antique handling, and compliance with preservation ordinances. We're fully insured for work in protected historic areas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can you remove items from homes in the Canemah Historic District?
              </h3>
              <p className="text-gray-600">
                Absolutely! We're specialists in historic Canemah homes. We understand historic building codes, work carefully to preserve architectural details, and have experience with Victorian and Queen Anne construction.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much does junk removal cost in historic Canemah?
              </h3>
              <p className="text-gray-600">
                Canemah historic home prices range from $150-400 for small cleanouts to $600-1200 for large estate projects. We provide free estimates and understand that many historic Canemah homes have unique space challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you handle antique and collectible items from historic homes?
              </h3>
              <p className="text-gray-600">
                Yes, we're experts in antique furniture and collectible piece handling. We can arrange for antique dealer evaluations, estate sale coordination, or proper storage solutions for valuable historic pieces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section for Canemah */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Historic Canemah Junk Removal Excellence?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join the trusted homeowners who choose us for their Canemah historic home needs.
            Same-day service available throughout Historic Canemah. Call now or get your free online quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Canemah Quote
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329 Now
            </a>
          </div>
          <div className="mt-8 text-primary-100">
            <p className="text-lg font-semibold">Historic Canemah Junk Removal • Licensed & Insured • Same-Day Service Available</p>
            <p className="text-sm mt-2">Proudly Serving Historic Canemah & All Oregon City Neighborhoods Since 2018</p>
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
            "description": "Historic home specialist junk removal services in Historic Canemah, Oregon City, OR",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Oregon City",
              "addressRegion": "OR",
              "addressCountry": "US"
            },
            "telephone": "(503) 753-2329",
            "url": "https://asjunkremoval.com/canemah-junk-removal",
            "serviceArea": {
              "@type": "Place",
              "name": "Historic Canemah, Oregon City, OR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "180"
            },
            "openingHours": "Mo-Su",
            "serviceType": "Junk Removal Services",
            "areaServed": "Historic Canemah, Oregon City, OR"
          })
        }}
      />
    </div>
  )
}
