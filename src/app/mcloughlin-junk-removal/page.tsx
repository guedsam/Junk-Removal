import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '#1 Junk Removal Service in McLoughlin, Oregon City - Downtown Historic Specialists | AS Junk Removal',
  description: 'Leading junk removal service in McLoughlin, Oregon City. Downtown historic specialists, business district cleanup, eco-friendly disposal, transparent pricing. Call (503) 753-2329. Serving McLoughlin community since 2018.',
  keywords: 'McLoughlin junk removal, junk removal McLoughlin Oregon City, junk hauler McLoughlin, same day junk removal McLoughlin, downtown junk removal McLoughlin, historic junk removal McLoughlin OR, McLoughlin business district junk removal',
  openGraph: {
    title: '#1 Junk Removal Service in McLoughlin, Oregon City - Downtown Historic Specialists',
    description: 'Leading junk removal service in McLoughlin, Oregon City. Downtown historic specialists with business district expertise.',
    url: 'https://asjunkremoval.com/mcloughlin-junk-removal',
    siteName: 'AS Junk Removal',
    images: [
      {
        url: '/images/junk-removal/oregon-city-junk-removal-team.webp',
        width: 1200,
        height: 630,
        alt: 'AS Junk Removal team serving McLoughlin downtown historic community in Oregon City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Junk Removal Service in McLoughlin, Oregon City - Downtown Historic Specialists',
    description: 'Leading junk removal service in McLoughlin, Oregon City. Downtown historic specialists.',
    images: ['/images/junk-removal/oregon-city-junk-removal-team.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/mcloughlin-junk-removal',
  },
}

export default function McLoughlinJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Junk Removal{' '}
                <span className="text-gradient">McLoughlin</span>
                {' '}<span className="text-2xl md:text-3xl font-normal">Oregon City</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                #1 rated junk removal service in vibrant McLoughlin, Oregon City.
                As downtown historic specialists, we understand the distinctive business district
                culture and historic preservation standards that make McLoughlin special since 2018.
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
                alt="AS Junk Removal professional team providing downtown historic junk removal services in McLoughlin, Oregon City"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About McLoughlin Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving McLoughlin's Downtown Historic District Since 2018
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              McLoughlin extends along Oregon City's historic Boulevard and represents the commercial
              heart of one of America's oldest incorporated communities, blending architectural heritage
              with modern commercial vitality, creating a unique downtown experience that honors the past while serving the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">About McLoughlin Downtown Historic District</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Oregon City's primary commercial district and Boulevard corridor
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Historic buildings from the 19th and early 20th centuries
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mix of commercial properties, residential buildings, and mixed-use spaces
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Strong community identity as the heart of Oregon City
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Connection between historic preservation and modern commercial vitality</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Why McLoughlin Trusts AS Junk Removal</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Extensive experience in commercial and downtown environments
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Understanding of historic district regulations and preservation standards
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Respect for commercial schedules and business operations
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Knowledge of mixed-use property challenges and requirements
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Commitment to maintaining McLoughlin's vibrant community atmosphere</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">McLoughlin Downtown Historic Coverage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>• McLoughlin Boulevard commercial corridor</div>
              <div>• Historic district commercial properties</div>
              <div>• Downtown business establishments</div>
              <div>• Mixed-use residential/commercial buildings</div>
              <div>• Historic architectural buildings</div>
              <div>• Downtown community spaces</div>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              Complete downtown coverage honoring McLoughlin's legacy as Oregon City's historic commercial heart.
            </p>
          </div>
        </div>
      </section>

      {/* McLoughlin Downtown Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              McLoughlin Downtown Historic District Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our services are specifically designed for McLoughlin's unique position as Oregon City's
              commercial hub, understanding the blend of historic preservation, modern business operations,
              and community vitality that defines our downtown district experience.
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
                Commercial Building Cleanouts
              </h3>
              <p className="text-gray-600 mb-4">
                Specialist commercial property cleanout services for McLoughlin businesses.
                From office furnishings to retail store fixtures, we handle commercial
                clearances with minimal disruption to business operations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Office furniture and equipment removal</li>
                <li>• Retail store fixture clearance</li>
                <li>• Commercial space tenant improvements</li>
                <li>• Business closure asset removal</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Historic Renovation Cleanup
              </h3>
              <p className="text-gray-600 mb-4">
                Expert handling of renovation debris from McLoughlin historic buildings.
                We combine modern cleanup efficiency with sensitivity to historic
                district preservation requirements and architectural heritage.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Historic building renovation debris</li>
                <li>• Preservation district compliance</li>
                <li>• Architectural detail protection</li>
                <li>• Commercial renovation cleanup</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Mixed-Use Property Services
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized cleanout services for McLoughlin's unique mixed-use properties
                that combine residential and commercial spaces. We understand the special
                challenges of these versatile urban buildings.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Commercial/residential unit cleanouts</li>
                <li>• Live-work space clearings</li>
                <li>• Historic mixed-use building support</li>
                <li>• Downtown property transition services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* McLoughlin Downtown Focus */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Honoring McLoughlin's Historic Commercial Heritage
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              McLoughlin Boulevard represents the very essence of Oregon City - a living testament
              to our community's ability to preserve historic architectural treasures while adapting
              to the demands of a vibrant commercial district and commercial corridor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Historic Preservation Partnership</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Proud collaboration with McLoughlin's historic preservation community and commercial district development goals.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Commercial District Support</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Dedicated support for McLoughlin's vital commercial activities and downtown business community needs.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🌆</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Urban Heritage Excellence</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Commitment to the distinctive urban character that makes McLoughlin Oregon City's preeminent downtown district.
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
              McLoughlin Downtown Community Recognition
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Experiential learning from McLoughlin's commercial community and downtown business owners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Our McLoughlin Boulevard retail space was being renovated when we needed everything cleared out before construction.
                They worked around our commercial schedule perfectly, understood historic building constraints, and handled everything
                with the professionalism that our downtown customers expect. They're downtown specialists who get the unique rhythm
                of McLoughlin business life."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Jennifer M., McLoughlin Boulevard Retail Owner</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "We own multiple historic commercial properties on McLoughlin, and when we reduce tenancy across buildings, finding
                a service that understands both commercial logistics and historic preservation is crucial. They combine efficiency
                with the care that our historic district demands. Our commercial reputation is built on that level of service."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Robert & Susan T., McLoughlin Property Management</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "McLoughlin is everything you want in an urban core - historic architecture mixed with vibrant modern business.
                These professionals understand both sides perfectly. Whether it's clearing out a failed restaurant space or
                preparing a historic upstairs office for a new tenant, they get the balance that makes McLoughlin so special.
                They've become part of what makes our district work."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Downtown Oregon City Business Coalition</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              McLoughlin Downtown Historic Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How does junk removal work in McLoughlin's commercial district?
              </h3>
              <p className="text-gray-600">
                Commercial district service understands the unique challenges of downtown McLoughlin. We coordinate with building managers, respect pedestrian and vehicle traffic Patterns on the Boulevard, work within historic preservation guidelines, and minimize business disruption. Our pricing reflects the commercial nature of downtown properties while honoring our historic district location.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you understand historic building regulations in McLoughlin?
              </h3>
              <p className="text-gray-600">
                Historic building knowledge is essential for McLoughlin service. We understand preservation district guidelines, work with detailed architectural features, respect mixed-use building requirements, and coordinate with historic preservation offices as needed. Each McLoughlin property has its own preservation considerations, and we research them carefully for every job.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can you work during off-hours for downtown businesses?
              </h3>
              <p className="text-gray-600">
                Downtown scheduling is our specialty. We offer evening and weekend hours to accommodate McLoughlin business schedules, coordinate with after-hours access requirements, and work efficiently to minimize disruption to commercial operations. Sunday services are particularly valuable for businesses preparing for the beginning of a new business week.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much does commercial junk removal cost in McLoughlin?
              </h3>
              <p className="text-gray-600">
                McLoughlin commercial projects range from $200-450 for small office cleanouts to $900-1400 for large commercial building renovations. We provide free business estimates that consider the commercial nature of downtown properties, accessibility challenges, and historic preservation requirements that are common throughout the district.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about mixed-use buildings on McLoughlin Boulevard?
              </h3>
              <p className="text-gray-600">
                Mixed-use buildings are McLoughlin's specialty. We navigate the unique challenges of commercial downstairs and residential upstairs configurations, coordinate with building owners and managers, respect noise ordinances and tenant agreements, and handle sensitive situations where business operations need to continue uninterrupted above or below our work areas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do you handle discreet cleanouts for businesses?
              </h3>
              <p className="text-gray-600">
                Business discretion is paramount in downtown McLoughlin. We understand the need for privacy during business closures or sensitive situations. Our teams are trained in discretion protocols, we stage equipment unobtrusively, we handle all communications professionally, and we maintain the kind of confidentiality that commercial property owners require in a public downtown setting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for McLoughlin Downtown Historic Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join the McLoughlin commercial community who trust us for their historic downtown cleanup needs.
            Same-day service available throughout our vibrant district. Call now or get your historic downtown quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free McLoughlin Quote
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329 Now
            </a>
          </div>
          <div className="mt-8 text-primary-100">
            <p className="text-lg font-semibold">McLoughlin Downtown Historic Service • Licensed & Insured • Same-Day Service Available</p>
            <p className="text-sm mt-2">Serving McLoughlin's Commercial District & Historic Oregon City Heart Since 2018</p>
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
            "description": "Downtown historic commercial junk removal services in McLoughlin, Oregon City, OR",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Oregon City",
              "addressRegion": "OR",
              "addressCountry": "US"
            },
            "telephone": "(503) 753-2329",
            "url": "https://asjunkremoval.com/mcloughlin-junk-removal",
            "serviceArea": {
              "@type": "Place",
              "name": "McLoughlin, Oregon City, OR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "265"
            },
            "openingHours": "Mo-Su",
            "serviceType": "Junk Removal Services",
            "areaServed": "McLoughlin, Oregon City, OR"
          })
        }}
      />
    </div>
  )
}
