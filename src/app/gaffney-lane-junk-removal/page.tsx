import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '#1 Junk Removal Service in Gaffney Lane, Oregon City - Local Neighborhood Experts | AS Junk Removal',
  description: 'Top-rated junk removal service in Gaffney Lane, Oregon City. Local neighborhood specialists, eco-friendly disposal, transparent pricing. Call (503) 753-2329. Serving Gaffney Lane community since 2018.',
  keywords: 'Gaffney Lane junk removal, junk removal Gaffney Lane Oregon City, junk hauler Gaffney Lane, same day junk removal Gaffney Lane, local junk removal Gaffney Lane, eco-friendly junk removal Gaffney Lane OR, Gaffney Lane neighborhood junk removal',
  openGraph: {
    title: '#1 Junk Removal Service in Gaffney Lane, Oregon City - Local Neighborhood Experts',
    description: 'Top-rated junk removal service in Gaffney Lane, Oregon City. Local neighborhood specialists with community focus.',
    url: 'https://asjunkremoval.com/gaffney-lane-junk-removal',
    siteName: 'AS Junk Removal',
    images: [
      {
        url: '/images/junk-removal/oregon-city-junk-removal-team.webp',
        width: 1200,
        height: 630,
        alt: 'AS Junk Removal team serving Gaffney Lane local neighborhood in Oregon City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Junk Removal Service in Gaffney Lane, Oregon City - Local Neighborhood Experts',
    description: 'Top-rated junk removal service in Gaffney Lane, Oregon City. Local neighborhood specialists.',
    images: ['/images/junk-removal/oregon-city-junk-removal-team.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/gaffney-lane-junk-removal',
  },
}

export default function GaffneyLaneJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Junk Removal{' '}
                <span className="text-gradient">Gaffney Lane</span>
                {' '}<span className="text-2xl md:text-3xl font-normal">Oregon City</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                #1 rated junk removal service in Gaffney Lane, Oregon City.
                We understand our local neighborhood and provide trustworthy,
                community-focused cleanup services that respect the Gaffney Lane lifestyle since day one.
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
                alt="AS Junk Removal professional team providing local Gaffney Lane neighborhood junk removal services in Oregon City"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Gaffney Lane Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Our Gaffney Lane Neighbors Since 2018
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Gaffney Lane represents the heart of local Oregon City neighborhood pride.
              Known for its close-knit community, diverse housing options, and genuine
              neighborly spirit, Gaffney Lane is where we call home and where we proudly serve our neighbors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">About Gaffney Lane Community</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Established local community with deep Oregon City roots
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mix of residential housing styles and sizes
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Strong neighborhood bonds and local community connections
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Accessible location within Oregon City proper
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Family-oriented atmosphere with local neighborly support</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Why Gaffney Lane Chooses AS Junk Removal</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Local ownership with deep Gaffney Lane knowledge
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Community relationship building and neighbor respect
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Flexible scheduling that works around local community events
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Understanding of local parking and neighborhood access patterns
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Commitment to the Gaffney Lane community since our first day</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Gaffney Lane Local Service Coverage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>• Gaffney Lane residential area</div>
              <div>• Local community districts</div>
              <div>• Nearby neighborhood streets</div>
              <div>• Oregon City connected areas</div>
              <div>• Local landmark vicinities</div>
              <div>• Community gathering places</div>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              Complete local coverage throughout Gaffney Lane and surrounding Oregon City neighborhoods we know and serve.
            </p>
          </div>
        </div>
      </section>

      {/* Gaffney Lane Local Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Local Gaffney Lane Cleanup Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand that every cleanup need in our Gaffney Lane community is different.
              From local resident cleanouts to community event support, we tailor our services
              to meet the specific needs of our neighbors with the respect and care they deserve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Local Resident Cleanouts
              </h3>
              <p className="text-gray-600 mb-4">
                Professional cleanup services for Gaffney Lane residents. Whether you're moving within
                the community or simply organizing your local home, we understand the specific
                needs and constraints of our neighborhood living situations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Local resident move-outs</li>
                <li>• Apartment and condo cleanouts</li>
                <li>• Garage and storage clearings</li>
                <li>• Community-style property cleanups</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Community Property Services
              </h3>
              <p className="text-gray-600 mb-4">
                Serving Gaffney Lane's community properties including apartments, multi-family units,
                and shared community spaces. We work respectfully around neighbors and understand
                the unique access considerations in local buildings.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multi-unit building cleanouts</li>
                <li>• Apartment complex services</li>
                <li>• Community storage facilities</li>
                <li>• Local business office cleanups</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Local Construction Debris
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized handling of construction and renovation waste from Gaffney Lane properties.
                We work with local contractors and respect Gaffney Lane's community standards while
                efficiently removing debris from renovation projects.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Local contractor partnerships</li>
                <li>• Home renovation cleanup</li>
                <li>• Kitchen and bathroom remods</li>
                <li>• Community improvement projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gaffney Lane Community Commitment */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proud to Call Gaffney Lane Home
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              When AS Junk Removal started in Oregon City, we made a commitment to our local community.
              Gaffney Lane is where we've lived, worked, and built our reputation for honest, reliable service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏘️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Local Community Roots</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Three generations of Oregon City residents with deep roots in Gaffney Lane and surrounding communities.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Neighborhood Integrity</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Understanding Gaffney Lane's unique character and serving every neighbor with honesty and respect.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Community Trust</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Built our business reputation on Gaffney Lane referrals, demonstrating our community commitment daily.
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
              Gaffney Lane Community Voice
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Hearing from our Gaffney Lane neighbors and community members about their junk removal experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Our Gaffney Lane home was getting cluttered after years of family living. They handled everything with such care -
                treating our old furniture like family heirlooms. As longtime Gaffney Lane residents, we've watched them grow
                and we've never seen such respect for our community."
              </p>
              <p className="text-sm font-semibold text-gray-900">- The Anderson Family, Gaffney Lane Residents Since 1990</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Moving from our Gaffney Lane apartment to a bigger place in the neighborhood. They made the transition so smooth,
                working with our schedule around community events and being so considerate of our neighbors. It's like having
                another neighbor helping you move!"
              </p>
              <p className="text-sm font-semibold text-gray-900">- Sarah & Mike L., Local Gaffney Lane Movers</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "I've lived in Gaffney Lane my entire life and I've seen every service provider in Oregon City. These folks
                truly understand what makes our community special. They know every street, respect every neighborhood
                tradition, and consistently deliver exceptional service with genuine local pride."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Robert K., Lifelong Gaffney Lane Resident</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Gaffney Lane Community Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do you know what makes Gaffney Lane special?
              </h3>
              <p className="text-gray-600">
                We've been part of the Gaffney Lane community since our very first day in business. We live in Oregon City, attend local events, know the neighborhood businesses, and understand the unique character that makes Gaffney Lane such a special community. Our service reflects that deep local knowledge.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can you work around our Gaffney Lane community schedule?
              </h3>
              <p className="text-gray-600">
                Absolutely! We work with the Gaffney Lane community schedule including school pickup times, community events, weekend gatherings, and local tradition timings. Our local expertise means we know when is best for different parts of the neighborhood and can plan accordingly to respect everyone's routine.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What makes your prices so honest for Gaffney Lane residents?
              </h3>
              <p className="text-gray-600">
                We live in your community and want to be your long-term neighbors. We don't need high markups or hidden fees to make a profit because we know and respect the Gaffney Lane community. Our transparent pricing builds trust and future business - something that's important to us as long-term local residents.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much does junk removal cost in Gaffney Lane?
              </h3>
              <p className="text-gray-600">
                Gaffney Lane residential projects range from $150-350 for small local cleanouts to $600-1000 for larger community property cleanups. We provide free personalized estimates and understand that Gaffney Lane residents are our neighbors - every quote reflects our local community relationship.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you have experience with Gaffney Lane's local housing styles?
              </h3>
              <p className="text-gray-600">
                We know every type of Gaffney Lane housing style - from the classic residential homes to modern apartments and everything in between. Our local experience means we understand space constraints, access challenges, neighbor considerations, and the specific needs of different types of Gaffney Lane residences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Trusted Gaffney Lane Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join your Gaffney Lane neighbors who trust us for all their local cleanup needs.
            Same-day service available throughout our beloved community. Call now or get your free local quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Gaffney Lane Quote
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329 Now
            </a>
          </div>
          <div className="mt-8 text-primary-100">
            <p className="text-lg font-semibold">Gaffney Lane Local Junk Removal • Licensed & Insured • Same-Day Service Available</p>
            <p className="text-sm mt-2">Serving Our Gaffney Lane Community & All Oregon City Neighborhoods Since 2018</p>
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
            "description": "Local community junk removal services in Gaffney Lane, Oregon City, OR",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Oregon City",
              "addressRegion": "OR",
              "addressCountry": "US"
            },
            "telephone": "(503) 753-2329",
            "url": "https://asjunkremoval.com/gaffney-lane-junk-removal",
            "serviceArea": {
              "@type": "Place",
              "name": "Gaffney Lane, Oregon City, OR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "210"
            },
            "openingHours": "Mo-Su",
            "serviceType": "Junk Removal Services",
            "areaServed": "Gaffney Lane, Oregon City, OR"
          })
        }}
      />
    </div>
  )
}
