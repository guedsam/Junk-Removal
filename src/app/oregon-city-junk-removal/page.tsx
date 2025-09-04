import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Oregon City Junk Removal | #1 Rated Junk Hauling Service | Same-Day Pickup',
  description: 'Oregon City junk removal experts since 2018. Same-day pickup, eco-friendly disposal, transparent pricing. Serving all Oregon City neighborhoods. Licensed & insured. Call (503) 753-2329 for free quote.',
  keywords: 'Oregon City junk removal, junk removal Oregon City, Oregon City junk hauling, junk hauling Oregon City, Oregon City furniture removal, Oregon City appliance removal, Oregon City construction debris removal, Oregon City estate cleanout, Oregon City commercial junk removal, Oregon City residential junk removal, same day junk removal Oregon City, cheap junk removal Oregon City, best junk removal Oregon City, Oregon City junk pickup, Oregon City debris removal, Oregon City waste removal',
  openGraph: {
    title: 'Oregon City Junk Removal | #1 Rated Junk Hauling Service | Same-Day Pickup',
    description: 'Oregon City junk removal experts since 2018. Same-day pickup, eco-friendly disposal, transparent pricing. Serving all Oregon City neighborhoods.',
    url: 'https://asjunkremoval.com/oregon-city-junk-removal',
    siteName: 'AS Junk Removal',
    images: [
      {
        url: '/images/junk-removal/oregon-city-junk-removal-team.webp',
        width: 1200,
        height: 630,
        alt: 'Oregon City Junk Removal Team - Professional Junk Hauling Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oregon City Junk Removal | #1 Rated Junk Hauling Service',
    description: 'Oregon City junk removal experts since 2018. Same-day pickup, eco-friendly disposal, transparent pricing.',
    images: ['/images/junk-removal/oregon-city-junk-removal-team.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/oregon-city-junk-removal',
  },
  other: {
    'geo.region': 'US-OR',
    'geo.placename': 'Oregon City',
    'geo.position': '45.3573;-122.6068',
    'ICBM': '45.3573, -122.6068',
  },
}

export default function OregonCityJunkRemovalPage() {
  const services = [
    {
      title: 'Residential Junk Removal Oregon City',
      description: 'Complete home cleanouts, furniture removal, appliance disposal, and general household junk pickup throughout Oregon City neighborhoods including Barclay Hills, Canemah, and Oak Grove.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v0H8v0z" />
        </svg>
      )
    },
    {
      title: 'Commercial Junk Removal Oregon City',
      description: 'Office cleanouts, retail space clearing, warehouse cleanups, and commercial construction debris removal for Oregon City businesses on McLoughlin Boulevard and throughout the city.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Oregon City Construction Debris Removal',
      description: 'Safe removal of construction waste, renovation debris, drywall, flooring, and building materials from Oregon City job sites. Licensed for commercial and residential projects.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: 'Oregon City Estate Cleanouts',
      description: 'Compassionate estate cleanout services for Oregon City families. We handle everything with care and respect during difficult times, serving areas like Jennings Lodge and Park Place.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Oregon City Furniture & Appliance Removal',
      description: 'Professional removal of old furniture, large appliances, mattresses, and bulky items from Oregon City homes and businesses. We handle refrigerators, washers, dryers, couches, and more.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: 'Oregon City Yard Waste Removal',
      description: 'Removal of branches, leaves, grass clippings, and landscaping debris from Oregon City properties. Perfect for seasonal cleanups and ongoing yard maintenance throughout Clackamas County.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ]

  const oregonCityNeighborhoods = [
    { name: 'Barclay Hills', url: '/barclay-hills-junk-removal' },
    { name: 'Canemah', url: '/canemah-junk-removal' },
    { name: 'Caufield', url: '/caufield-junk-removal' },
    { name: 'Gaffney Lane', url: '/gaffney-lane-junk-removal' },
    { name: 'Hazelbrook', url: '/hazelbrook-junk-removal' },
    { name: 'Hillendale', url: '/hillendale-junk-removal' },
    { name: 'Holly Lane', url: '/holly-lane-junk-removal' },
    { name: 'Jennings Lodge', url: '/jennings-lodge-junk-removal' },
    { name: 'McLoughlin', url: '/mcloughlin-junk-removal' },
    { name: 'Newell Creek Canyon', url: '/newell-creek-canyon-junk-removal' },
    { name: 'Oak Grove', url: '/oak-grove-junk-removal' },
    { name: 'Park Place', url: '/park-place-junk-removal' },
    { name: 'Rivercrest', url: '/rivercrest-junk-removal' },
    { name: 'South End', url: '/south-end-junk-removal' },
    { name: 'Tower Vista', url: '/tower-vista-junk-removal' },
    { name: 'Twilight', url: '/twilight-junk-removal' },
    { name: 'Warner Milne', url: '/warner-milne-junk-removal' },
    { name: 'West Linn Heights', url: '/west-linn-heights-junk-removal' },
    { name: 'Redland', url: '/redland-junk-removal' },
    { name: 'Beaver Creek', url: '/beaver-creek-junk-removal' },
    { name: 'Clackamas Heights', url: '/clackamas-heights-junk-removal' },
    { name: 'Forest Grove', url: '/forest-grove-junk-removal' },
    { name: 'Highland', url: '/highland-junk-removal' },
    { name: 'Maple Lane', url: '/maple-lane-junk-removal' }
  ]

  const whyChooseUs = [
    {
      title: 'Local Oregon City Experts',
      description: 'Born and raised in Oregon City, Oregon. We know every neighborhood from Barclay Hills to Oak Grove and provide personalized service to our Clackamas County community.',
      icon: '🏠'
    },
    {
      title: 'Same-Day Oregon City Service',
      description: 'Need junk removed today in Oregon City? We offer same-day pickup service throughout Oregon City with flexible scheduling. Call before 2 PM for same-day service.',
      icon: '⚡'
    },
    {
      title: 'Eco-Friendly Oregon City Disposal',
      description: 'We donate and recycle over 85% of items collected in Oregon City, keeping our beautiful Oregon community clean and protecting the Willamette River environment.',
      icon: '♻️'
    },
    {
      title: 'Transparent Oregon City Pricing',
      description: 'No hidden fees or surprises for Oregon City customers. We provide upfront pricing based on volume, not weight or time. Free estimates always.',
      icon: '💰'
    },
    {
      title: 'Licensed Oregon City Business',
      description: 'Fully licensed, bonded, and insured Oregon City junk removal company. Professional service you can trust with Oregon state licensing and local permits.',
      icon: '🛡️'
    },
    {
      title: 'Oregon City Customer Satisfaction',
      description: '100% satisfaction guarantee for all Oregon City junk removal services. We\'re not happy until you\'re completely satisfied with our Oregon City service.',
      icon: '⭐'
    }
  ]

  const faqData = [
    {
      question: 'How much does junk removal cost in Oregon City?',
      answer: 'Oregon City junk removal costs range from $150-250 for small loads, $300-450 for medium loads, and $500-750 for large loads. We provide free estimates for all Oregon City junk removal projects.'
    },
    {
      question: 'Do you offer same-day junk removal in Oregon City?',
      answer: 'Yes! We offer same-day junk removal service throughout Oregon City. Call before 2 PM and we can typically provide same-day pickup in Oregon City neighborhoods.'
    },
    {
      question: 'What areas of Oregon City do you serve?',
      answer: 'We serve all Oregon City neighborhoods including Barclay Hills, Canemah, Oak Grove, Jennings Lodge, Park Place, McLoughlin, and all surrounding Oregon City areas.'
    },
    {
      question: 'What items can you remove in Oregon City?',
      answer: 'We remove furniture, appliances, construction debris, yard waste, electronics, and most household items in Oregon City. We cannot remove hazardous materials, paint, or chemicals.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - Oregon City Junk Removal */}
      <section className="bg-gradient-to-br from-[#053254] to-[#c75c26] text-white py-20">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Oregon City Junk Removal
              </h1>
              <p className="text-xl leading-relaxed text-blue-100">
                #1 rated Oregon City junk removal service since 2018. Same-day pickup, eco-friendly disposal, 
                and transparent pricing. Serving all Oregon City neighborhoods in Clackamas County, Oregon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-white text-[#053254] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
                  Get Free Oregon City Quote
                </Link>
                <a href="tel:503-753-2329" className="border-2 border-white text-white hover:bg-white hover:text-[#053254] font-semibold py-4 px-8 rounded-lg transition-all duration-200">
                  Call (503) 753-2329
                </a>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  <span>5.0 Oregon City Rating</span>
                </div>
                <div>•</div>
                <div>Same-Day Oregon City Service</div>
                <div>•</div>
                <div>Licensed & Insured</div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/junk-removal/oregon-city-junk-removal-team.webp" 
                alt="Oregon City junk removal team with truck - Professional junk hauling service"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Oregon City Junk Removal Services */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#053254] mb-4">
              Complete Oregon City Junk Removal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Professional junk hauling services for Oregon City residents and businesses. 
              From residential cleanouts to commercial debris removal, we handle all your Oregon City junk removal needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#c75c26]">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#053254] text-white rounded-full mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#053254] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Oregon City Junk Removal */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#053254] mb-4">
              Why Oregon City Residents Choose Our Junk Removal Service
            </h2>
            <p className="text-xl text-gray-600">
              Local Oregon City expertise, professional service, and unmatched customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold text-[#053254] mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oregon City Neighborhoods We Serve */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#053254] mb-4">
              Oregon City Neighborhoods We Serve for Junk Removal
            </h2>
            <p className="text-xl text-gray-600">
              Professional junk removal throughout all Oregon City areas and surrounding Clackamas County communities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {oregonCityNeighborhoods.map((neighborhood, index) => (
              <Link
                key={index}
                href={neighborhood.url}
                className="block"
              >
                <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-[#053254] hover:text-white transition-colors duration-200 cursor-pointer">
                  <span className="font-medium">{neighborhood.name}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see your Oregon City neighborhood? We serve all of Oregon City and surrounding Clackamas County areas! 
              Contact us to confirm junk removal service in your specific Oregon City location.
            </p>
            <Link href="/contact" className="bg-[#c75c26] text-white hover:bg-[#b54d1f] font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              Check Your Oregon City Area
            </Link>
          </div>
        </div>
      </section>

      {/* Oregon City Junk Removal Pricing */}
      <section className="section-padding bg-[#053254]">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Oregon City Junk Removal Pricing
            </h2>
            <p className="text-xl text-blue-100">
              Transparent, volume-based pricing for Oregon City junk removal with no hidden fees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-[#053254] mb-4">Small Oregon City Load</h3>
              <div className="text-4xl font-bold text-[#c75c26] mb-2">$150-250</div>
              <p className="text-gray-600 mb-6">
                Perfect for small Oregon City cleanouts. Fits in 1/4 of our truck.
              </p>
              <ul className="text-left space-y-2 text-sm text-gray-600">
                <li>• Single furniture pieces</li>
                <li>• Small appliances</li>
                <li>• Boxes and bags</li>
                <li>• Single room items</li>
              </ul>
            </div>

            <div className="bg-[#c75c26] text-white rounded-xl p-8 text-center transform scale-105 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Medium Oregon City Load</h3>
              <div className="text-4xl font-bold mb-2">$300-450</div>
              <p className="text-orange-100 mb-6">
                Most popular Oregon City option! Fits in 1/2 of our truck.
              </p>
              <ul className="text-left space-y-2 text-sm text-orange-100">
                <li>• Multiple furniture pieces</li>
                <li>• Large appliances</li>
                <li>• Garage cleanout</li>
                <li>• Office furniture</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-[#053254] mb-4">Large Oregon City Load</h3>
              <div className="text-4xl font-bold text-[#c75c26] mb-2">$500-750</div>
              <p className="text-gray-600 mb-6">
                Full truck load for major Oregon City cleanouts.
              </p>
              <ul className="text-left space-y-2 text-sm text-gray-600">
                <li>• Whole house cleanout</li>
                <li>• Construction debris</li>
                <li>• Estate cleanout</li>
                <li>• Commercial cleanout</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-blue-100 mb-6">
              All Oregon City junk removal quotes are free and provided upfront. No surprises, no hidden fees.
            </p>
            <Link href="/contact" className="bg-white text-[#053254] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Your Free Oregon City Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Oregon City Junk Removal Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#053254] mb-4">
              Our Oregon City Junk Removal Process
            </h2>
            <p className="text-xl text-gray-600">
              Simple, efficient, and professional junk removal process for Oregon City customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#053254] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-[#053254] mb-3">Call or Book Online</h3>
              <p className="text-gray-600">Contact us for your Oregon City junk removal needs. Free estimates provided.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#053254] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-[#053254] mb-3">We Arrive in Oregon City</h3>
              <p className="text-gray-600">Our professional team arrives at your Oregon City location with all necessary equipment.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#053254] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-[#053254] mb-3">We Remove Your Junk</h3>
              <p className="text-gray-600">We safely remove all items from your Oregon City property with care and efficiency.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#053254] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-[#053254] mb-3">Eco-Friendly Disposal</h3>
              <p className="text-gray-600">We donate, recycle, and dispose of items responsibly to protect Oregon's environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Oregon City Junk Removal FAQ */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#053254] mb-4">
              Oregon City Junk Removal FAQ
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our Oregon City junk removal services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#053254] mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oregon City Service Areas Map */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#053254] mb-4">
              Oregon City Junk Removal Service Area
            </h2>
            <p className="text-xl text-gray-600">
              Serving Oregon City and all surrounding Clackamas County communities
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <img 
                src="/images/junk-removal/portland-metro-service-area-map.webp" 
                alt="Oregon City junk removal service area map showing coverage throughout Clackamas County"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Our Oregon City junk removal service covers all of Oregon City and extends throughout Clackamas County. 
                Don't see your area? Contact us to confirm service availability.
              </p>
              <Link href="/contact" className="bg-[#c75c26] text-white hover:bg-[#b54d1f] font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
                Check Your Oregon City Area
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Oregon City Junk Removal */}
      <section className="section-padding bg-[#c75c26]">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Oregon City's Best Junk Removal Service?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied Oregon City customers who trust us for their junk removal needs. 
            Same-day service available throughout Oregon City. Call now or get your free online quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-[#c75c26] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Oregon City Quote Online
            </Link>
            <a href="tel:503-753-2329" className="border-2 border-white text-white hover:bg-white hover:text-[#c75c26] font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329 Now
            </a>
          </div>
          <div className="mt-8 text-orange-100">
            <p className="text-lg font-semibold">Oregon City Junk Removal • Licensed & Insured • Same-Day Service Available</p>
            <p className="text-sm mt-2">Serving Oregon City, Clackamas County, Oregon since 2018</p>
          </div>
        </div>
      </section>
    </div>
  )
}
