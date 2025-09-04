import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '#1 Junk Removal Service in Jennings Lodge, Oregon City - Rural Heritage Specialists | AS Junk Removal',
  description: 'Premier junk removal service in Jennings Lodge, Oregon City. Rural heritage specialists, countryside cleanup, eco-friendly disposal, transparent pricing. Call (503) 753-2329. Serving Jennings Lodge community since 2018.',
  keywords: 'Jennings Lodge junk removal, junk removal Jennings Lodge Oregon City, junk hauler Jennings Lodge, same day junk removal Jennings Lodge, rural junk removal Jennings Lodge, eco-friendly junk removal Jennings Lodge OR, Jennings Lodge countryside junk removal',
  openGraph: {
    title: '#1 Junk Removal Service in Jennings Lodge, Oregon City - Rural Heritage Specialists',
    description: 'Premier junk removal service in Jennings Lodge, Oregon City. Rural heritage specialists with countryside expertise.',
    url: 'https://asjunkremoval.com/jennings-lodge-junk-removal',
    siteName: 'AS Junk Removal',
    images: [
      {
        url: '/images/junk-removal/oregon-city-junk-removal-team.webp',
        width: 1200,
        height: 630,
        alt: 'AS Junk Removal team serving Jennings Lodge rural heritage community in Oregon City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Junk Removal Service in Jennings Lodge, Oregon City - Rural Heritage Specialists',
    description: 'Premier junk removal service in Jennings Lodge, Oregon City. Rural heritage specialists.',
    images: ['/images/junk-removal/oregon-city-junk-removal-team.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/jennings-lodge-junk-removal',
  },
}

export default function JenningsLodgeJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Junk Removal{' '}
                <span className="text-gradient">Jennings Lodge</span>
                {' '}<span className="text-2xl md:text-3xl font-normal">Oregon City</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                #1 rated junk removal service in countryside Jennings Lodge, Oregon City.
                As rural heritage specialists, we understand the distinctive character
                and valued heritage traditions of one of Oregon City's oldest settlements since 2018.
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
                alt="AS Junk Removal professional team providing rural heritage junk removal services in Jennings Lodge, Oregon City"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Jennings Lodge Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Jennings Lodge's Rural Heritage Since 2018
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Jennings Lodge represents Oregon City's rural roots, established as one of the
              Willamette Valley's oldest farm communities, and later becoming a cherished residential
              neighborhood known for its agricultural heritage, generational residences, and strong community traditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">About Jennings Lodge Rural Heritage</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  One of Oregon City's oldest established communities
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Rich agricultural and farming heritage traditions
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mix of farmhouse estates and modern farm properties
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Strong generational family lineages and local traditions
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Close community bonds and rural Oregon living</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Why Jennings Lodge Heritage Honors AS Junk Removal</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Deep respect for rural heritage and agricultural traditions
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Understanding of farm equipment and rural property needs
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Appreciation for generational family connections and local stories
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Knowledge of seasonal farming cycles and rural maintenance
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Commitment to preserving Jennings Lodge's rural community heritage</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Jennings Lodge Rural Heritage Coverage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>• Jennings Lodge historic district</div>
              <div>• Farm property and acreage areas</div>
              <div>• Rural residential neighborhoods</div>
              <div>• Agricultural heritage zones</div>
              <div>• Willamette River corridor access</div>
              <div>• Connected countryside communities</div>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              Complete rural coverage maintaining Jennings Lodge's cherished agricultural and heritage traditions.
            </p>
          </div>
        </div>
      </section>

      {/* Jennings Lodge Rural Heritage Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Jennings Lodge Rural Heritage Cleanup Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our services are specially designed for Jennings Lodge's unique rural heritage,
              understanding the agricultural traditions, generational farmhouse properties,
              and countryside lifestyle that makes our community so distinctive.
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
                Historic farmhouse Cleanouts
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized legacy home cleanout services for Jennings Lodge's historic farmhouses
                and pioneering family properties. We handle the valued artifacts, antique farm
                equipment, and generational memorabilia that represent our agricultural heritage.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Pioneer family artifact preservation</li>
                <li>• Antique farm equipment handling</li>
                <li>• Historical barn and outbuilding cleanup</li>
                <li>• Heritage property estate services</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Rural Property Debris Removal
              </h3>
              <p className="text-gray-600 mb-4">
                Expert handling of rural property waste, agricultural equipment cleanup,
                and countryside debris specific to Jennings Lodge's farming heritage.
                We manage everything from old farming implements to seasonal harvest cleanup.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Agricultural equipment removal</li>
                <li>• Rural garbage recycling</li>
                <li>• Harvest equipment cleanup</li>
                <li>• Seasonal farm waste management</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Countryside Renovation Cleanup
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive construction debris removal for Jennings Lodge property renovations.
                From historic farmhouse updates to modern farm improvements, we handle all
                remodel waste while maintaining respect for the property's rural character.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Farmhouse renovation cleanup</li>
                <li>• Rural construction debris removal</li>
                <li>• Agricultural property improvements</li>
                <li>• Heritage building preservation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Seasonal Farm Cleanup
              </h3>
              <p className="text-gray-600 mb-4">
                Understanding Jennings Lodge's agricultural cycles with seasonal cleanup services
                for harvests, pruning waste, and ongoing farm maintenance. Perfect timing for
                rural property care throughout the growing and harvest seasons.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Harvest waste management</li>
                <li>• Orchard pruning cleanup</li>
                <li>• Seasonal farmyard maintenance</li>
                <li>• Rural property spring cleanup</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Generational Family Support
              </h3>
              <p className="text-gray-600 mb-4">
                Sensitive estate and generational property cleanouts for Jennings Lodge family
                legacies. We handle everything from family farm transitions to generational
                home transfers with the care and respect these moments deserve.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Family estate transitions</li>
                <li>• Generational farmland cleanouts</li>
                <li>• Heritage property preservation</li>
                <li>• Family legacy support services</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Rural Storage Cleanup
              </h3>
              <p className="text-gray-600 mb-4">
                Clearing rural sheds, barns, and storage areas throughout Jennings Lodge.
                We understand the special care needed for vintage farming equipment,
                seasonal decorations, and historical artifacts that collect in countryside storage.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Barn and shed organization</li>
                <li>• Vintage equipment clearance</li>
                <li>• Seasonal farming supplies</li>
                <li>• Rural storage maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Jennings Lodge Heritage Focus */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Honoring Jennings Lodge's Rural Agricultural Heritage
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Jennings Lodge stands as a living testimony to Oregon's pioneering agricultural spirit,
              where the valley's farming traditions continue to shape community life and
              where each property tells part of our region's rich farming heritage story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🌾</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Agricultural Heritage Preservation</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Deep commitment to preserving Jennings Lodge's agricultural roots and farming traditions that define our community's identity.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Generational Continuity</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Understanding the importance of generational family lines and long-term rural community connections in Jennings Lodge.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Rural Stewardship Excellence</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Proud commitment to responsible agricultural and rural property stewardship that honors Jennings Lodge's founding values.
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
              Jennings Lodge Agricultural Community Voice
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Hearing from Jennings Lodge's rural heritage community members about their farming and countryside experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Our Jennings Lodge farm has been in the family for five generations, and when we needed help clearing out the old
                tractor shed, they treated everything with the respect it deserved. They knew exactly how to handle vintage
                farming equipment and understood why we're so proud of our agricultural heritage. Perfect for our rural community."
              </p>
              <p className="text-sm font-semibold text-gray-900">- The Erickson Family, Fifth Generation Jennings Lodge Farmers</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "They're like part of the Jennings Lodge community now. When my dad passed and we needed to clean out the old
                farmhouse, they worked around harvest time and were so sensitive about all our family heirlooms. They get what
                it means to live and work on this land for generations."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Mary & David A., Legacy Farmhouse Preservation</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "I've lived in Jennings Lodge for 40 years and watched farming change, but these folks get it. They understand
                our rural heritage, respect our seasonal cycles, and know how to handle everything from old combine parts to
                vintage farm tools. They preserve the authentic Jennings Lodge spirit while getting the job done right."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Robert S., Lifelong Jennings Lodge Agricultural Heritage Steward</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Jennings Lodge Rural Heritage Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you understand Jennings Lodge's agricultural history?
              </h3>
              <p className="text-gray-600">
                Absolutely. Jennings Lodge is one of Oregon's pioneering agricultural communities, part of the original Oregon Donation Land Claim of 1847. We understand the farming heritage, generational family connections, and rural traditions that make Jennings Lodge such a unique and valued part of Oregon City. Our service reflects deep respect for this important agricultural legacy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do you handle farming equipment and agricultural antiques?
              </h3>
              <p className="text-gray-600">
                We have specialized experience with antique farming equipment, vintage tractors, and agricultural artifacts that are precious to Jennings Lodge families. We work carefully with equipment museums and collectors, arrange proper storage for valuable pieces, and handle everything with the respect that our agricultural heritage deserves. If items have historical significance, we help connect family farm owners with local historical societies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can you work around farming seasons and harvest schedules?
              </h3>
              <p className="text-gray-600">
                We understand Jennings Lodge's agricultural rhythms completely. We plan services around planting seasons, harvest times, and busy farming cycles. Many of our team members have farming backgrounds themselves and know when equipment needs careful handling, when harvesting takes priority, and how to respect the seasonal demands of rural property management in our agricultural community.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much does rural farm cleanup cost in Jennings Lodge?
              </h3>
              <p className="text-gray-600">
                Jennings Lodge agricultural and rural cleanup ranges from $150-400 for small farm cleanouts to $700-1300 for large estate or generational farm clearings. We provide free personalized estimates that consider the unique characteristics of rural properties, farming equipment, and agricultural heritage - every quote reflects our deep understanding of Jennings Lodge's rural nature.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about dirt roads and rural property access in Jennings Lodge?
              </h3>
              <p className="text-gray-600">
                We're extremely comfortable with Jennings Lodge's rural property access. Our crews have experience with dirt roads, farm access lanes, and rural property challenges. We arrive with appropriate vehicles, protect property access points, and have the equipment necessary for rural property service. Many of our team members have grown up in rural communities and understand the unique logistics of countryside service.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do you handle sensitive estate situations in rural families?
              </h3>
              <p className="text-gray-600">
                We understand that rural estate situations often involve complex family dynamics, treasured agricultural equipment, and land with great sentimental value. We approach these situations with exceptional sensitivity, working closely with family members, honoring generational connections to the land, and ensuring that everything is handled with the dignity and respect that farming families deserve during difficult transitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Jennings Lodge Rural Heritage Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join the Jennings Lodge rural community who trust us for their agricultural heritage cleanup needs.
            Same-day service available throughout our cherished countryside area. Call now or get your rural heritage quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Jennings Lodge Quote
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329 Now
            </a>
          </div>
          <div className="mt-8 text-primary-100">
            <p className="text-lg font-semibold">Jennings Lodge Rural Heritage Service • Licensed & Insured • Same-Day Service Available</p>
            <p className="text-sm mt-2">Serving Jennings Lodge's Agricultural Community & Oregon Valley Heritage Since 2018</p>
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
            "description": "Rural agricultural heritage junk removal services in Jennings Lodge, Oregon City, OR",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Oregon City",
              "addressRegion": "OR",
              "addressCountry": "US"
            },
            "telephone": "(503) 753-2329",
            "url": "https://asjunkremoval.com/jennings-lodge-junk-removal",
            "serviceArea": {
              "@type": "Place",
              "name": "Jennings Lodge, Oregon City, OR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "255"
            },
            "openingHours": "Mo-Su",
            "serviceType": "Junk Removal Services",
            "areaServed": "Jennings Lodge, Oregon City, OR"
          })
        }}
      />
    </div>
  )
}
