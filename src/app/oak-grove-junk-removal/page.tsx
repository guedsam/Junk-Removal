import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '#1 Junk Removal Service in Oak Grove, Oregon City - Family Neighborhood Specialists | AS Junk Removal',
  description: 'Leading junk removal service in Oak Grove, Oregon City. Family neighborhood specialist, eco-friendly disposal, transparent pricing. Call (503) 753-2329. Serving Oak Grove families & businesses since 2018.',
  keywords: 'Oak Grove junk removal, junk removal Oak Grove Oregon City, junk hauler Oak Grove, same day junk removal Oak Grove, family friendly junk removal Oak Grove, eco-friendly junk removal Oak Grove OR, residential junk removal Oak Grove, family neighborhood junk removal Oregon City',
  openGraph: {
    title: '#1 Junk Removal Service in Oak Grove, Oregon City - Family Neighborhood Specialists',
    description: 'Leading junk removal service in Oak Grove, Oregon City. Family neighborhood specialist with care for your community.',
    url: 'https://asjunkremoval.com/oak-grove-junk-removal',
    siteName: 'AS Junk Removal',
    images: [
      {
        url: '/images/junk-removal/oregon-city-junk-removal-team.webp',
        width: 1200,
        height: 630,
        alt: 'AS Junk Removal team serving Oak Grove family neighborhood in Oregon City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Junk Removal Service in Oak Grove, Oregon City - Family Neighborhood Specialists',
    description: 'Leading junk removal service in Oak Grove, Oregon City. Family neighborhood specialist.',
    images: ['/images/junk-removal/oregon-city-junk-removal-team.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/oak-grove-junk-removal',
  },
}

export default function OakGroveJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Junk Removal{' '}
                <span className="text-gradient">Oak Grove</span>
                {' '}<span className="text-2xl md:text-3xl font-normal">Oregon City</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                #1 rated junk removal service in family-friendly Oak Grove, Oregon City.
                We understand the unique needs of growing families and active households.
                Same-day service, eco-friendly disposal, and transparent pricing for Oak Grove residents.
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
                alt="AS Junk Removal professional team providing family-friendly Oak Grove neighborhood junk removal services in Oregon City"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Oak Grove Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Oak Grove Families Since 2018
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Oak Grove is one of Oregon City's most beloved family neighborhoods,
              known for its strong community spirit, excellent schools, and welcoming atmosphere.
              As your neighbors and trusted partners, we provide reliable, family-friendly
              junk removal services that make cleaning up easier for busy Oak Grove households.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">About Oak Grove Neighborhood</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Family-oriented community with strong neighborhood bonds
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Proximity to excellent Clackamas County schools and parks
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mix of established and growing family households
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Convenient access to downtown Oregon City amenities
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Green spaces and recreational opportunities nearby
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Why Oak Grove Families Choose Us</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Family-first approach with flexible scheduling
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Same-day service available for busy family schedules
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Understanding of children's items and family belongings
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  No hidden fees with upfront family-friendly pricing
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Community trust built on local relationships</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Oak Grove Family Service Area</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>• Oak Grove proper</div>
              <div>• Family neighborhoods</div>
              <div>• Residential developments</div>
              <div>• Local schools area</div>
              <div>• Park-adjacent properties</div>
              <div>• Growing family communities</div>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              Comprehensive junk removal throughout Oak Grove, supporting our vibrant family community.
            </p>
          </div>
        </div>
      </section>

      {/* Oak Grove Family Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Family-Focused Oak Grove Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand that every Oak Grove family household has unique needs.
              From growing kids to busy parents, we provide personalized junk removal
              services designed with your family's lifestyle in mind.
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
                Growing Family Cleanouts
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized cleanout services for Oak Grove families with growing children.
                We understand busy schedules and handle everything from old baby gear to
                childhood furniture with care and respect.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Nursery and toy room cleanouts</li>
                <li>• Children's furniture transitions</li>
                <li>• Baby gear and equipment removal</li>
                <li>• Teen room renovations</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Seasonal Family Cleanups
              </h3>
              <p className="text-gray-600 mb-4">
                Perfect for Oak Grove families managing seasonal changes. Spring cleaning,
                holiday storage rotation, garage organization, and yard cleanup services
                tailored to family schedules in our community.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Spring cleaning assistance</li>
                <li>• Holiday decoration management</li>
                <li>• Garage organization projects</li>
                <li>• Sports equipment storage</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Downsizing Family Support
              </h3>
              <p className="text-gray-600 mb-4">
                Compassionate downsizing services for Oak Grove families transitioning
                homes or lifestyles. We handle generational moves while preserving
                family heirlooms and meaningful items.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multigenerational family support</li>
                <li>• Heirloom and keepsake preservation</li>
                <li>• Family timeline coordination</li>
                <li>• Emotional support during transitions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Oak Grove Community Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proud Partners with Oak Grove Families
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              As part of the Oak Grove community, we understand what makes
              our neighborhood special and work hard to support our families every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Family-First Approach</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Flexible scheduling that works around family activities, school timetables, and busy household routines in Oak Grove.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Community Commitment</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Supporting Oak Grove schools, local events, and community organizations while providing essential cleanup services.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Local Trust</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Oak Grove's most trusted name for junk removal, chosen by families who value honesty, reliability, and community spirit.
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
              Oak Grove Family Experiences
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Hear from families in our Oak Grove community about their junk removal experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "As an Oak Grove family with three kids, we needed help clearing out our garage after years of storage.
                They were incredible - worked around the kids' schedules, handled everything safely, and made the process stress-free!"
              </p>
              <p className="text-sm font-semibold text-gray-900">- The Peterson Family, Oak Grove Residents</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Moving from our Oak Grove home to a smaller place. They helped us sort through decades of family memories -
                so respectful and understanding of sentimental items. We felt truly cared for during a difficult time."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Maria & John R., Oak Grove Downsizers</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Oak Grove pride! These folks really get our community. They know the parks, schools, and neighborhood vibe.
                Quick response, fair pricing, and they actually care about keeping our community beautiful!"
              </p>
              <p className="text-sm font-semibold text-gray-900">- Sarah & David M., Proud Oak Grove Parents</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Oak Grove Family Questions
            </h2>
            <p className="text-lg text-gray-600">Answers to family-focused questions about junk removal in Oak Grove</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How can I prepare my Oak Grove home with kids?
              </h3>
              <p className="text-gray-600">
                For families in Oak Grove, we recommend designing the handling of kids' items first, providing plenty of play space away from work areas, and communicating with your children about the process. We can help coordinate around school schedules and after-school activities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about pets during Oak Grove service?
              </h3>
              <p className="text-gray-600">
                Family pets are welcome in Oak Grove! We work carefully around your family pets and can arrange for pet-free zones if needed. Many Oak Grove families bring their pets to the work area for comfort, and we understand this is important for family harmony.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you work after school hours in Oak Grove?
              </h3>
              <p className="text-gray-600">
                Absolutely! We understand Oak Grove family schedules and offer flexible evening appointments that work around school pickup times and family dinner hours. Same-day service is often possible with advance notice for our neighborhood families.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much does junk removal cost for Oak Grove families?
              </h3>
              <p className="text-gray-600">
                Oak Grove family jobs range from $150-300 for small cleanouts to $500-850 for larger family home projects. We provide free estimates and understand that families often have sentimental items that need careful consideration.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can you help with kids' items in Oak Grove neighborhoods?
              </h3>
              <p className="text-gray-600">
                Families in Oak Grove love that we specialize in children's items! From cribs and toys to teen furniture, we handle all children's belongings with care and can often arrange for donation to local families or children's charity programs serving Oak Grove schools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Family-Friendly Oak Grove Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join the Oak Grove families who trust us for all their junk removal needs.
            Same-day service available throughout our cherished neighborhood. Call now or get your free online quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Oak Grove Quote
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329 Now
            </a>
          </div>
          <div className="mt-8 text-primary-100">
            <p className="text-lg font-semibold">Oak Grove Family Junk Removal • Licensed & Insured • Same-Day Service Available</p>
            <p className="text-sm mt-2">Supporting Oak Grove Families & All Oregon City Neighborhoods Since 2018</p>
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
            "description": "Family-friendly junk removal services in Oak Grove, Oregon City, OR",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Oregon City",
              "addressRegion": "OR",
              "addressCountry": "US"
            },
            "telephone": "(503) 753-2329",
            "url": "https://asjunkremoval.com/oak-grove-junk-removal",
            "serviceArea": {
              "@type": "Place",
              "name": "Oak Grove, Oregon City, OR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "220"
            },
            "openingHours": "Mo-Su",
            "serviceType": "Junk Removal Services",
            "areaServed": "Oak Grove, Oregon City, OR"
          })
        }}
      />
    </div>
  )
}
