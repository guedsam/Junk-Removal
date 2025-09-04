import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '#1 Junk Removal Service in Holly Lane, Oregon City - Family Corridor Specialists | AS Junk Removal',
  description: 'Leading junk removal service in Holly Lane, Oregon City. Family corridor specialists, residential cleanup, eco-friendly disposal, transparent pricing. Call (503) 753-2329. Serving Holly Lane families since 2018.',
  keywords: 'Holly Lane junk removal, junk removal Holly Lane Oregon City, junk hauler Holly Lane, same day junk removal Holly Lane, eco-friendly junk removal Holly Lane OR, Holly Lane family corridor junk removal, Holly Lane residential cleanup',
  openGraph: {
    title: '#1 Junk Removal Service in Holly Lane, Oregon City - Family Corridor Specialists',
    description: 'Leading junk removal service in Holly Lane, Oregon City. Family corridor specialists with residential expertise.',
    url: 'https://asjunkremoval.com/holly-lane-junk-removal',
    siteName: 'AS Junk Removal',
    images: [
      {
        url: '/images/junk-removal/oregon-city-junk-removal-team.webp',
        width: 1200,
        height: 630,
        alt: 'AS Junk Removal team serving Holly Lane family corridor in Oregon City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Junk Removal Service in Holly Lane, Oregon City - Family Corridor Specialists',
    description: 'Leading junk removal service in Holly Lane, Oregon City. Family corridor specialists.',
    images: ['/images/junk-removal/oregon-city-junk-removal-team.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/holly-lane-junk-removal',
  },
}

export default function HollyLaneJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Junk Removal{' '}
                <span className="text-gradient">Holly Lane</span>
                {' '}<span className="text-2xl md:text-3xl font-normal">Oregon City</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                #1 rated junk removal service in family-friendly Holly Lane, Oregon City.
                As family corridor specialists, we understand the dynamic needs
                of busy families and residential homeowners that make Holly Lane special since 2018.
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
                alt="AS Junk Removal professional team providing family corridor junk removal services in Holly Lane, Oregon City"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Holly Lane Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Holly Lane Families Since 2018
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Holly Lane occupies a special place in Oregon City's residential heart,
              characterized by its welcoming family atmosphere, strong community connections,
              and reputation as one of the city's most approachable and friendly residential corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">About Holly Lane Family Corridor</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Established family neighborhood with generations of local residents
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mix of residential homes and townhouse communities
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Strong community bonds and neighborhood gatherings
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Walking access to local parks, schools, and amenities
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Friendly, approachable atmosphere that welcomes families</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Why Holly Lane Families Choose AS Junk Removal</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Deep understanding of family neighborhood dynamics
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Approachable, friendly service that fits neighborhood culture
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Respect for family schedules and household routines
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Honest pricing with no surprises for local family budgets
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Long-term neighborhood partnership and relationship focus</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Holly Lane Family Corridor Coverage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>• Holly Lane primary residential area</div>
              <div>• Family neighborhood extensions</div>
              <div>• Residential townhouse communities</div>
              <div>• Local school attendance areas</div>
              <div>• Community park vicinities</div>
              <div>• Connected family residential blocks</div>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              Complete coverage of Holly Lane and surrounding family neighborhoods, supporting the residential character that makes this area special.
            </p>
          </div>
        </div>
      </section>

      {/* Holly Lane Family Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Holly Lane Family Residential Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand that every family home in Holly Lane has its own unique rhythm
              and requirements. From growing children to busy parents to multigenerational
              households, we tailor our services to support the diverse family structures
              that make our community vibrant and welcoming.
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
                Family Home Cleanouts
              </h3>
              <p className="text-gray-600 mb-4">
                Professional cleanout services designed specifically for Holly Lane family homes.
                Whether you're preparing for family expansion, downsizing, or simply refreshing
                your family space, we understand the emotions and logistics of family transitions.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Family-focused workspace setup</li>
                <li>• Gentle handling of sentimental items</li>
                <li>• Flexible scheduling around family needs</li>
                <li>• Complete home organization services</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Growing Family Support
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized services for Holly Lane families with growing households. We understand
                how family changes affect storage needs, space requirements, and the accumulation
                of items that comes with expanding or changing family dynamics.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Nursery and children's space cleanouts</li>
                <li>• Family expansion room preparation</li>
                <li>• Seasonal storage item management</li>
                <li>• Family heirloom organization</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Family Renovation Cleanup
              </h3>
              <p className="text-gray-600 mb-4">
                Complete debris removal services for Holly Lane home renovations and family project upgrades.
                Whether you're creating a playroom for the kids, expanding the family room, or modernizing
                family living spaces, we handle all the cleanup with minimal disruption to family life.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Family living space renovation cleanup</li>
                <li>• Children's room renovation debris</li>
                <li>• Home office and study improvements</li>
                <li>• Family room and recreation upgrades</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Holly Lane Community Focus */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Celebrating Holly Lane's Family Spirit
          </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Holly Lane represents the perfect blend of family living and community connection
              that makes Oregon City such a special place to raise a family. Our services are
              designed with the same welcoming spirit that defines our neighborhood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Family-Centered Service</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Service approach designed around family schedules, parenting responsibilities, and the busy pace of family life in Holly Lane.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Community Partnership</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Deep investment in Holly Lane community relationships and understanding of the neighborhood's unique family dynamics.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Local Family Trust</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Established trust through consistent, reliable service that honors the family values at the heart of Holly Lane community.
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
              Holly Lane Family Community Voice
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Hearing from Holly Lane families and residents about their local neighborhood experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Holly Lane is all about family, and these folks get it completely. When we needed help organizing our growing family's garage
                after having our third child, they made the whole process manageable. They worked around our family schedule, were so understanding
                about our kids' things, and treated everything with the care you'd expect from neighbors. Holly Lane wouldn't be the same without them!"
              </p>
              <p className="text-sm font-semibold text-gray-900">- Sarah & Mark T., Growing Family in Holly Lane</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "We've lived on Holly Lane for almost 20 years and watched our little neighborhood grow into such a wonderful family community.
                When we approached retirement and needed to downsize, these professionals handled everything with such understanding of family
                attachments. They became part of our community transition. Heart felt service that honors what makes Holly Lane so special."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Elizabeth & James R., Holly Lane Family Residents for Two Decades</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Holly Lane block parties are legendary! We needed serious cleanup after our annual community gathering left quite a mess.
                They not only fixed everything beautifully, but they helped us restore the neighborhood pride that makes Holly Lane such a
                wonderful place to live. They understand our community spirit and are genuinely invested in keeping Holly Lane great for families."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Community Council Members, Proud Holly Lane Neighbors</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Holly Lane Family Corridor Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you understand Holly Lane's family neighborhood culture?
              </h3>
              <p className="text-gray-600">
                Absolutely! We've been part of the Holly Lane community since our beginning, and we know that family neighborhoods like ours aren't just about houses - they're about community, relationships, and the kind of welcoming atmosphere that makes Oregon City such a special place to live. We understand the importance of family schedules, community events, and the neighborly considerations that define life in Holly Lane.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How can you work around busy family schedules in Holly Lane?
              </h3>
              <p className="text-gray-600">
                We love working with Holly Lane families because we understand exactly what that means. We offer flexible scheduling that works around school pickup times, after-school activities, sports practices, weekend family commitments, and those precious family dinner hours. We know when community events happen and we plan our services to support, not disrupt, the family lifestyles that make our neighborhood so wonderful.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about sentimental family items and children's belongings?
              </h3>
              <p className="text-gray-600">
                Family memorabilia and children's cherished items are handled with special care throughout Holly Lane. We understand the emotional value of family photos, kids' artwork, baby clothes, and heirlooms. We work carefully to sort through these items with sensitivity, offering options for preservation, family distribution, or respectful donation to local charities that serve other families in need. Every item is treated with the same respect it deserves in a family community like ours.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much does family junk removal cost in Holly Lane?
              </h3>
              <p className="text-gray-600">
                Family neighborhood services in Holly Lane range from $150-350 for residential cleanouts to $600-900 for larger family home projects or renovations. We provide free estimates and understand that families in our community appreciate honest pricing with no surprises. Every quote reflects our understanding of family budgets and the special relationship we share as long-term Holly Lane neighbors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you have experience with Holly Lane home transitions?
              </h3>
              <p className="text-gray-600">
                We've helped countless Holly Lane families move through major life transitions - becoming empty nesters, adding family members, changing housing needs, or adjusting to different family configurations. We understand the emotions involved in these changes and approach every situation with the sensitivity and support that our community deserves. Whether it's preparing for a new baby or downsizing for retirement, we're here to make these important transitions as smooth as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Family-Focused Holly Lane Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join the Holly Lane families who trust us for all their local cleanup needs.
            Same-day service available throughout our welcoming community. Call now or get your family-friendly quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Holly Lane Quote
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329 Now
            </a>
          </div>
          <div className="mt-8 text-primary-100">
            <p className="text-lg font-semibold">Holly Lane Family Corridor Service • Licensed & Insured • Same-Day Service Available</p>
            <p className="text-sm mt-2">Supporting Holly Lane's Family Community & All Oregon City Neighborhoods Since 2018</p>
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
            "description": "Family corridor junk removal services in Holly Lane, Oregon City, OR",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Oregon City",
              "addressRegion": "OR",
              "addressCountry": "US"
            },
            "telephone": "(503) 753-2329",
            "url": "https://asjunkremoval.com/holly-lane-junk-removal",
            "serviceArea": {
              "@type": "Place",
              "name": "Holly Lane, Oregon City, OR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "245"
            },
            "openingHours": "Mo-Su",
            "serviceType": "Junk Removal Services",
            "areaServed": "Holly Lane, Oregon City, OR"
          })
        }}
      />
    </div>
  )
}
