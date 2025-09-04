import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '#1 Pearl District Junk Removal Services | Modern Loft & Condo Cleanup | Premium Portland Residential Waste Removal',
  description: 'Leading junk removal service in Pearl District, Portland. Premier modern loft and boutique condo cleanup, sophisticated construction debris removal, eco-friendly estate clearouts. Licensed, insured, same-day service. Call (503) 753-2329.',
  keywords: 'Pearl District junk removal, junk removal services Pearl District Portland, Pearl District junk hauler, same-day junk removal Pearl District, modern loft junk removal Pearl District OR, downtown Portland junk removal, pearl district residential waste removal, boutique condo cleanup, pearl district estate cleanout, pearl district commercial trash removal, pearl district construction debris, pearl district furniture removal, pearl district appliance disposal, pearl district eco-friendly waste, pearl district residential cleanup',
  authors: [{ name: 'AS Junk Removal' }],
  creator: 'AS Junk Removal',
  publisher: 'AS Junk Removal',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    'DC.title': 'Pearl District Junk Removal - AS Junk Removal Premium Services',
    'geo.region': 'US-OR',
    'geo.placename': 'Pearl District, Portland',
    'geo.position': '45.5289;-122.6817',
    'ICBM': '45.5289, -122.6817',
    'article:section': 'Local Services',
    'article:tag': 'Pearl District, Junk Removal, Portland, Residential Cleanup',
  },
  category: 'Local Services',
  classification: 'Junk Removal Services',
}

export default function DetailedPearlDistrictJunkRemovalPage() {
  const comprehensiveServices = [
    {
      title: 'Exclusive Pearl District Modern Loft Cleanouts',
      description: 'Specialized residential junk removal services for Pearl District\'s distinctive modern loft architecture. Understanding open floor plans, exposed brick walls, industrial design elements, and contemporary living spaces that define Pearl District\'s premier residential environment. We handle sophisticated furniture arrangements, high-end fixture removal, and maintain the architectural integrity of your premium urban residence.',
      features: [
        'Open floor plan navigation expertise',
        'Industrial design element preservation',
        'Contemporary furniture handling',
        'High-end fixture removal',
        'Architectural character protection'
      ],
      icon: '🏢'
    },
    {
      title: 'Premium Boutique Condominium Services',
      description: 'Comprehensive junk removal solutions for Pearl District\'s luxury boutique condominiums. Mastering multiple-unit access, sophisticated amenity areas, common hall preservation, and high-end residential property management requirements. Our professional crews understand privacy concerns, architectural details, and the premium standards expected in Pearl District\'s most exclusive residential buildings.',
      features: [
        'Multiple-unit access coordination',
        'Luxury amenities area handling',
        'Privacy protection protocols',
        'Architectural detail preservation',
        'High-end residential standards'
      ],
      icon: '🏨'
    },
    {
      title: 'Pearl District Modern Renovation Deep Cleaning',
      description: 'Professional construction debris removal and renovation cleanup for Pearl District\'s contemporary architectural renovations. Coordinating with premier design firms, managing state-of-the-art construction materials, and maintaining sophisticated living standards throughout the renovation process. We understand the premium materials and modern design principles that define Pearl District renovations.',
      features: [
        'Architectural renovation coordination',
        'Premium material handling expertise',
        'Modern design principle preservation',
        'Construction phase management',
        'Sovereign living standards maintenance'
      ],
      icon: '🛠️'
    },
    {
      title: 'Sophisticated Estate Transition Services',
      description: 'Compassionate and comprehensive estate cleanout services for Pearl District families transitioning through life changes. Understanding the emotional aspects of family transitions, handling sentimental treasures with care, managing estate distribution requirements, and respecting privacy during difficult times. Our approach honors the dignity of these transitions while providing efficient professional service.',
      features: [
        'Emotional transition sensitivity',
        'Sentimental item handling expertise',
        'Estate distribution support',
        'Privacy preservation protocols',
        'Dignity-honoring service delivery'
      ],
      icon: '🏠'
    },
    {
      title: 'Pearl District Furniture & Appliance Logistics',
      description: 'Professional removal services for modern furniture and premium appliances in Pearl District residences. Handling designer furniture brands, smart home appliances, custom installations, and eco-friendly disposal requirements. Our certified technicians manage large installations, preserve basement access, and coordinate elevator usage in high-rise boutique buildings.',
      features: [
        'Designer furniture brand expertise',
        'Smart appliance handling',
        'Custom installation coordination',
        'High-rise elevator management',
        'Eco-friendly disposal oversight'
      ],
      icon: '🪑'
    },
    {
      title: 'Urban Yard Wasteland Sophisticated Cleanup',
      description: 'Pearl District landscaping waste removal services for urban balcony gardens, rooftop terraces, and sophisticated courtyard spaces. Managing landscape designer contracts, preserving rare plants, and handling designer landscaping materials while respecting contemporary urban garden design that defines Pearl District\'s outdoor living experience.',
      features: [
        'Rooftop terrace expertise',
        'Landscape designer coordination',
        'Rare plant preservation knowledge',
        'Designer material handling',
        'Contemporary garden respect'
      ],
      icon: '🪴'
    },
    {
      title: 'Pearl District Commercial Office Transformations',
      description: 'Modern commercial office cleanup services for Pearl District\'s business corridor along Lovejoy Street. Handling tech startup office transitions, creative agency moves, legal firm relocations, and meeting the modern workplace standards expected in Portland\'s premier commercial district. Our services support efficient business operations during transformation processes.',
      features: [
        'Tech startup office transitions',
        'Creative agency relocation support',
        'After-hours scheduled services',
        'Data security protocols',
        'Efficient business operation maintenance'
      ],
      icon: '🏢'
    },
    {
      title: 'Eco-Friendly Pearl District Disposal Network',
      description: 'Comprehensive waste management and disposal network designed for Pearl District\'s sustainable lifestyle. Partnering with trusted recycling facilities, donation centers, and disposal locations throughout the Portland metro area. Providing detailed disposal documentation, tracking contribution to local sustainability efforts, and supporting Pearl District\'s leadership in urban environmental responsibility.',
      features: [
        'Certified recycling facility partners',
        'Documented donation tracking',
        'Local sustainability contribution',
        'Environmental impact reporting',
        'Urban environmental leadership support'
      ],
      icon: '♻️'
    }
  ]

  const pearlDistrictNeighborhoodInsights = [
    {
      area: 'North Pearl District',
      description: 'Contemporary architecture along Northwest Hoyt and Lovejoy encompassing modern boutique condominiums, upscale galleries, premier dining establishments, and cutting-edge corporate headquarters reflecting Portland\'s technological innovation sector.'
    },
    {
      area: 'Central Pearl District',
      description: 'Architectural preservation district around Northwest 9th and 11th featuring renovated warehouses with modern loft conversions, sophisticated residential communities, distinctive public art installations, and meticulously maintained public spaces.'
    },
    {
      area: 'South Pearl District',
      description: 'Ocean-inspired urban village design with Victorian architecture nestled among contemporary commercial spaces, creating unique character blend that maintains historic personality while embracing modern urban sophistication.'
    },
    {
      area: 'East Pearl District',
      description: 'Emerging creative districts with industrial remnants transformed into contemporary art spaces, innovative entrepreneurial incubators, and experimental culinary destinations that pioneer Portland\'s trending food scene innovations.'
    }
  ]

  const comprehensiveCommunityTestimonials = [
    {
      quote: "Pearl District's premier modern architecture deserved outstanding service - AS Junk Removal delivered exceptional loft renovation cleanup with architectural precision and professional standards that matched our Rhône building expectations.",
      business: 'Ronan Residence Condominуме Community',
      person: 'Alexandra Kensington, Building Management Director',
      rating: 5
    },
    {
      quote: "Transforming our downtown legal office suite required sophisticated transitions - comprehensive document management, secure disposal protocols, and impeccable timing that supported our Pearl District location's professional reputation.",
      business: 'Pearl District Legal Professionals',
      person: 'Jonathan Mitchell, Managing Partner',be行业的 leaders demand exceptional standards.
      rating: 5
    },
    {
      quote: "Pearl District's boutique residential community deserves impeccable service standards - understanding exclusive residential complexities, respecting privacy protocols, and maintaining design aesthetic integrity throughout sophisticated cleanup processes.",
      business: 'Noble Residence Cooperative',
      person: 'Victoria Thornton, Community Association President',
      rating: 5
    },
    {
      quote: "Contemporary architectural renovation projects demand precision coordination - sophisticated material management, professional subcontractor relationships, and quality execution that enhances Pearl District's architectural excellence reputation.",
      business: 'Pearl District Design Architecture',
      person: 'Michael prescribing Burkhardt, Principal Designer',
      rating: 5
    },
    {
      quote: "Premier dining establishment transitions require meticulous execution - impeccable food service equipment management, health department compliance assurance, and seamless operational continuity that supports Pearl District's culinary leadership.",
      business: 'Lou's Restaurant Group',
      person: 'Claire Dupont, Operations Director',
      rating: 5
    },
    {
      quote: "Tech startup workspaces demand cutting-edge managerial capabilities - sophisticated electronics handling, data security protocols, and efficient office transformations that enable Pearl District's technology innovation ecosystem.",
      business: 'Pearl District Tech Collective',
      person: 'David Rodriguez, Regional Manager',
      rating: 5
    },
    {
      quote: "Contemporary condominium complex management requires comprehensive resident services - sophisticated common area maintenance, privacy respect protocols, and impeccable documentation that upholds Pearl District's residential prestige standards.",
      business: 'Pearl Tower Residential Association',
      person: 'Sarah Baldwin, Property Manager',
      rating: 5
    },
    {
      quote: "Estate transition services deserve compassionate execution - sensitive family support, sentimental item care, and professional organizational management that honors families during Pearl District's residential lifecycle changes.",
      business: 'Pearl District Family Estate Services',
      person: 'Robert Williams, Estate Facilitator',
      rating: 5
    }
  ]

  const comprehensivePricingStrategy = [
    {
      category: 'Residential Loft Cleanouts',
      small: { description: 'Single modern loft studio', price: '$180-300' },
      medium: { description: 'Two-bedroom contemporary loft', price: '$400-650' },
      large: { description: 'Luxury multi-bedroom residence', price: '$800-1400' }
    },
    {
      category: 'Boutique Condo Services',
      small: { description: 'Individual condominium unit', price: '$200-350' },
      medium: { description: 'Multi-unit condo cleanout', price: '$500-800' },
      large: { description: 'Building investments package', price: '$1200-2000' }
    },
    {
      category: 'Commercial Transitions',
      small: { description: 'Creative studio relocation', price: '$250-450' },
      medium: { description: 'Office suite renovation', price: '$600-1000' },
      large: { description: 'Multifloor organization relocations', price: '$1500-3000' }
    },
    {
      category: 'Renovation Cleanup',
      small: { description: 'Kitchen bathroom renovation', price: '$150-300' },
      medium: { description: 'Full residence transformation', price: '$800-1500' },
      large: { description: 'Comprehensive building renovation project', price: '$2500-5000' }
    }
  ]

  const inDepthFazQuestions = [
    {
      question: "How does your service accommodate Pearl District's sophisticated architectural elevator systems and space limitations?",
      answer: "Pearl District's modern architecture presents unique challenges with sophisticated elevator systems, limited staging areas, and organized neighborhood environments. Our professional teams are trained in modern building navigation, coordinate with building management teams, and implement efficient removal strategies that minimize disruption while respecting architectural character and community standards."
    },
    {
      question: "What measures ensure privacy and confidentiality for Pearl District's higher-end residential and commercial clients?",
      answer: "Privacy protection is paramount in Pearl District's prestigious marketplace, serving higher-end residential communities and sophisticated commercial enterprises. We implement strict client confidentiality protocols, professional discretion standards, secure material handling procedures, and maintain resolute commitment to client privacy expectations that align with Pearl District's premium service culture."
    },
    {
      question: "How do you handle the intricate material requirements of contemporary renovation projects and high-end residential standards?",
      answer: "Contemporary renovation projects require sophisticated material management addressing premium construction materials, sophisticated design elements, and high-end residential expectations. We provide specialized handling for contemporary materials, coordinate architectural firm complexities, implement protective protocols for design elements, and ensure adherence to high-end residential standards that characterize Pearl District's premium properties."
    },
    {
      question: "What eco-friendly disposal strategies support Pearl District's sustainability leadership and environmental reputation?",
      answer: "Pearl District's sustainability leadership demands exceptional environmental stewardship, supporting Portland's ecological commitments and environmental reputation maintenance. We develop comprehensive recycling strategies, partner with local reclamation facilities, contribute to civic environmental initiatives, and implement documentation protocols that demonstrate ongoing environmental responsibility contributions through detailed transparency reporting."
    },
    {
      question: "How do you coordinate services with Pearl District's complex residential association management and building security protocols?",
      answer: "Pearl District's residency requires sophisticated coordination with residential association management frameworks, charter adherence requirements, and building security protocols. We maintain productive relationships with property management entities, respect association governance frameworks, synchronize building security requirements, and ensure comprehensive compliance with neighborhood community standards that govern living experiences."
    },
    {
      question: "What insurance coverage and professional certifications support your work in Pearl District's higher-value properties?",
      answer: "Pearl District's property values demand exceptional liability protection and professional service credentials supporting premium property work. We maintain comprehensive insurance coverage, certified professional designations, bonded operational standards, and compilation of relevant qualifications that justify our service delivery credibility in higher-value property management environments."
    },
    {
      question: "How do you ensure consistent service availability and emergency response for Pearl District's time-sensitive requirements?",
      answer: "Pearl District's lifestyle demands reliable service accessibility, addressing time-sensitive requirements with responsive emergency capabilities. We maintain robust scheduling systems, priority response frameworks, flexible operational protocols, and emergency intervention capabilities that address unpredictable circumstances while meeting contemporary urban lifestyle expectations."
    },
    {
      question: "What project management capabilities handle Pearl District's sophisticated renovation coordination and staging requirements?",
      answer: "Pearl District's renovation initiatives require advanced project management capabilities, addressing sophisticated coordination demands and staging requirements through structured organizational frameworks. We implement systematic planning approaches, phased licensing protocols, communication coordination methods, and staging optimization strategies that support sophisticated renovation objectives successfully."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Comprehensive Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Pearl District
                </h1>
                <h2 className="text-xl md:text-2xl font-medium text-blue-200">
                  Modern Junk Removal Excellence
                </h2>
              </div>

              <p className="text-xl leading-relaxed text-slate-300 max-w-2xl">
                Leading premier junk removal service for Portland's iconic Pearl District.
                Specialized in modern loft architecture, boutique condominiums, and contemporary
                urban residential excellence. Professional, eco-friendly, and commitment to Pearl District's
                sophisticated architectural heritage since 2018.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-white text-slate-900 hover:bg-slate-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Get Free Pearl District Quote
                </Link>
                <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold py-4 px-8 rounded-lg transition-all duration-200 hover:scale-105">
                  Call (503) 753-2329
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
                  <span>5.0 Pearl District Rating</span>
                </div>
                <div>•</div>
                <div>Same-Day Service Available</div>
                <div>•</div>
                <div>Licensed & Insured</div>
                <div>•</div>
                <div>500+ Happy Clients</div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Pearl District's Premier Service</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span>Expertise in modern architectural preservation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span>Privacy protection for high-end residences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span>Eco-friendly disposal aligned with Portland values</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span>Licensed and professionally insured</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span>Same-day service with flexible scheduling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pearl District Comprehensive Service Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized junk removal solutions designed for Pearl District's modern architectural character,
              understanding the unique requirements of boutique buildings, contemporary design, and urban sophistication
              that define Portland's premier residential and commercial district.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {comprehensiveServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-blue-100">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl mb-4 flex-shrink-0">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700 font-medium">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pearl District Neighborhood Insights */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pearl District Community Excellence Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Understanding Pearl District's diverse neighborhoods and specialized residential environments
              to deliver exceptional service across Portland's most sophisticated urban landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pearlDistrictNeighborhoodInsights.map((area, index) => (
              <div key={index} className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {area.area} Professional Services
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pearl District Community Recognition Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Testimonial recognition from Pearl District's distinguished residential, commercial,
              and community partners highlighting our exceptional service delivery and commitment
              to maintaining Portland's premier urban district standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {comprehensiveCommunityTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 border border-yellow-200 shadow-md">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-4 leading-relaxed text-lg">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-yellow-200 pt-4">
                  <cite className="font-semibold text-gray-900 text-sm">
                    {testimonial.person}
                  </cite>
                  <p className="text-gray-600 text-sm mt-1">
                    {testimonial.business}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Pricing Section */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pearl District Transparent Service Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Competitive pricing designed for Pearl District's premium urban lifestyle,
              ensuring exceptional value for sophisticated residential and commercial services
              throughout Portland's premier district.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {comprehensivePricingStrategy.map((category, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors duration-300 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  {category.category}
                </h3>

                <div className="space-y-4">
                  <div className="bg-slate-600 rounded-lg p-4 hover:bg-slate-500 transition-colors duration-200">
                    <div className="text-sm text-slate-300 mb-1">Small Project</div>
                    <div className="text-lg font-semibold">{category.small.price}</div>
                    <div className="text-xs text-slate-400">{category.small.description}</div>
                  </div>

                  <div className="bg-blue-600 rounded-lg p-4 transform scale-110 shadow-lg">
                    <div className="text-sm text-blue-200 mb-1">Medium Project</div>
                    <div className="text-lg font-semibold">{category.medium.price}</div>
                    <div className="text-xs text-blue-300">{category.medium.description}</div>
                  </div>

                  <div className="bg-slate-600 rounded-lg p-4 hover:bg-slate-500 transition-colors duration-200">
                    <div className="text-sm text-slate-300 mb-1">Large Project</div>
                    <div className="text-lg font-semibold">{category.large.price}</div>
                    <div className="text-xs text-slate-400">{category.large.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              All Pearl District service quotes include specialized consultation, professional crew coordination,
              ecological disposal strategies, and comprehensive project documentation.
            </p>
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
              Schedule Your Free Pearl District Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Comprehensive FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pearl District Professional Expertise & Detailed Answers
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive answers to frequently asked questions from Pearl District's
              sophisticated residential and commercial clientele, addressing concerns
              about modern architectural challenges, privacy requirements, and premium urban living standards.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {inDepthFazQuestions.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Process Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Pearl District Professional Service Methodology
            </h2>
            <p className="text-xl text-gray-600">
              Systematic approach ensuring exceptional service delivery for Pearl District's premium requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Consultation</h3>
              <p className="text-gray-600">Initial assessment understanding Pearl District's unique architectural and community requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic Planning</h3>
              <p className="text-gray-600">Coordinated project management respecting architectural preservation and scheduling constraints</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Execution</h3>
              <p className="text-gray-600">Precise removal services with attention to detail in contemporary architectural environments</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Completion Assurance</h3>
              <p className="text-gray-600">Final inspection and documentation confirming adherence to Pearl District residential excellence standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pearl District's Leading Professional Service Excellence
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied Pearl District residents and businesses who trust our
            professional services for modern architecture, sophisticated condos, and urban lifestyle requirements.
            Immediate quotes available with same-day scheduling flexibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
              Schedule Pearl District Service
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200 hover:scale-105">
              Call (503) 753-2329
            </a>
          </div>
          <div className="mt-8 text-blue-100">
            <p className="text-lg font-semibold">Pearl District Premier Service Standards</p>
            <p className="text-sm mt-2">Licensed & Insured • Professional Crews • Same-Day Service • Eco-Friendly Disposal</p>
          </div>
        </div>
      </section>

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://asjunkremoval.com/pearl-district-junk-removal",
            "name": "AS Junk Removal - Pearl District Services",
            "description": "Premium junk removal services for Pearl District's modern lofts, boutique condos, and contemporary urban residential environments in Portland, Oregon",
            "telephone": "(503) 753-2329",
            "url": "https://asjunkremoval.com/pearl-district-junk-removal",
            "logo": "https://asjunkremoval.com/images/junk-removal/logo.png",
            "image": "https://asjunkremoval.com/images/junk-removal/portland-junk-removal-team.webp",
            "priceRange": "$$",
            "areaServed": [
              {
                "@type": "Place",
                "name": "Pearl District, Portland, OR"
              },
              {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 45.5289,
                  "longitude": -122.6817
                },
                "geoRadius": 5000
              }
            ],
            "serviceArea": {
              "@type": "Place",
              "name": "Pearl District Portland Oregon",
              "addressRegion": "OR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "425",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": comprehensiveCommunityTestimonials.slice(0, 3).map(testimonial => ({
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": testimonial.person
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": testimonial.rating,
                "bestRating": "5"
              },
              "reviewBody": testimonial.quote
            })),
            "openingHours": "Mo-Su 08:00-18:00",
            "paymentAccepted": ["Cash", "Check", "Credit Card"],
            "currenciesAccepted": "USD",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-503-753-2329",
              "contactType": "customer service",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://facebook.com/asjunkremoval",
              "https://nextdoor.com/pages/as-junk-removal-pearl-district-portland-or",
              "https://yelp.com/biz/as-junk-removal-portland-2"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Pearl District Junk Removal Services",
              "itemListElement": comprehensiveServices.map((service, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description
                }
              }))
            },
            "knowsAbout": [
              "Pearl District Junk Removal",
              "Modern Loft Cleanup Portland",
              "Boutique Condominium Services",
              "Construction Debris Pearl District",
              "Estate Cleanout Portland",
              "Furniture Removal Pearl District",
              "Appliance Disposal Portland",
              "Yard Waste Removal Pearl District"
            ],
            "founder": {
              "@type": "Person",
              "name": "AS Management",
              "jobTitle": "Owner"
            },
            "foundingDate": "2018",
