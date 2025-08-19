import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Junk Removal FAQs | Oregon City & Portland | Pricing & Service Questions',
  description: 'Get answers to common questions about junk removal services in Oregon City and Portland. Learn about pricing, same-day service, eco-friendly disposal, and what items we accept.',
  keywords: 'junk removal FAQ Oregon City, junk removal pricing Portland, same-day junk removal, eco-friendly junk disposal Oregon, junk removal questions',
  openGraph: {
    title: 'Junk Removal FAQs | Oregon City & Portland | Pricing & Service Questions',
    description: 'Get answers to common questions about junk removal services in Oregon City and Portland. Learn about pricing, same-day service, eco-friendly disposal, and what items we accept.',
  },
}

export default function FAQsPage() {
  const faqCategories = [
    {
      title: 'Pricing & Estimates',
      faqs: [
        {
          question: 'How much does junk removal cost in Oregon City and Portland?',
          answer: 'Our pricing is volume-based and transparent. Small loads (1/4 truck) typically cost $150-250, medium loads (1/2 truck) cost $300-450, and large loads (full truck) cost $500-750. We provide free, upfront estimates with no hidden fees. Final pricing depends on the volume of items, type of materials, and disposal requirements.'
        },
        {
          question: 'Do you provide free estimates?',
          answer: 'Yes! We offer completely free, no-obligation estimates. You can get a quote by calling us at (503) 753-2329, filling out our online form, or having our team assess the items in person. We believe in transparent pricing with no surprises.'
        },
        {
          question: 'Are there any hidden fees or extra charges?',
          answer: 'No hidden fees, ever. Our upfront quote includes labor, hauling, disposal fees, and cleanup. The only additional charges might occur if you add significantly more items than originally quoted, or if we encounter hazardous materials that require special disposal (which we\'ll discuss with you first).'
        },
        {
          question: 'Do you charge extra for stairs or difficult access?',
          answer: 'Our standard pricing includes reasonable stairs and access challenges. For extreme situations (like 3+ flights of stairs, long carries, or very difficult access), we may add a small access fee, but this will always be discussed and agreed upon before we begin work.'
        }
      ]
    },
    {
      title: 'Service & Scheduling',
      faqs: [
        {
          question: 'Do you offer same-day junk removal service?',
          answer: 'Yes! Same-day service is available in most of our coverage areas, including Oregon City, Portland, Clackamas, and Gresham. For other areas, we typically can schedule within 24-48 hours. Call us early in the day for the best chance of same-day pickup.'
        },
        {
          question: 'What areas do you serve?',
          answer: 'We serve Oregon City, Portland, Clackamas, Gresham, Milwaukie, Happy Valley, Lake Oswego, West Linn, Tigard, Beaverton, Tualatin, Gladstone, and surrounding areas throughout the Portland metro region. If you\'re not sure if we serve your area, just give us a call!'
        },
        {
          question: 'Do I need to be present during pickup?',
          answer: 'It\'s preferred but not always necessary. If you can\'t be present, we can work with you to arrange access and clear instructions about what items to remove. For security and accuracy, we recommend being present for the initial walkthrough and estimate.'
        },
        {
          question: 'How far in advance should I schedule?',
          answer: 'We recommend calling as soon as you know you need service. While we often have same-day availability, scheduling 1-2 days in advance ensures you get your preferred time slot, especially during busy periods like spring cleaning season or after holidays.'
        }
      ]
    },
    {
      title: 'Items & Materials',
      faqs: [
        {
          question: 'What items do you accept for removal?',
          answer: 'We accept most household and commercial items including furniture, appliances, electronics, mattresses, exercise equipment, yard waste, construction debris, office furniture, and much more. If you\'re unsure about a specific item, just ask! We\'re happy to let you know if we can take it.'
        },
        {
          question: 'What items do you NOT accept?',
          answer: 'For safety and legal reasons, we cannot accept hazardous materials including paint, chemicals, asbestos, medical waste, radioactive materials, explosives, gasoline, propane tanks, and human/animal waste. We can direct you to proper disposal facilities for these items.'
        },
        {
          question: 'Do you remove appliances like refrigerators and washers?',
          answer: 'Absolutely! We specialize in appliance removal including refrigerators, washers, dryers, dishwashers, stoves, water heaters, and HVAC equipment. We handle all the heavy lifting and ensure proper disposal or recycling of these items.'
        },
        {
          question: 'Can you remove items from inside my house?',
          answer: 'Yes, we provide full-service removal from anywhere on your property - inside your house, basement, attic, garage, or yard. Our team will carefully remove items without damaging your property and clean up the area when finished.'
        }
      ]
    },
    {
      title: 'Environmental & Disposal',
      faqs: [
        {
          question: 'Are you eco-friendly? What happens to my junk?',
          answer: 'Environmental responsibility is a core value. We divert over 85% of collected items from landfills through donation, recycling, and proper disposal. Usable items go to local charities, metals and electronics are recycled at certified facilities, and only true waste goes to landfills.'
        },
        {
          question: 'Do you donate items that are still usable?',
          answer: 'Yes! We partner with local charities and donation centers throughout Oregon City and Portland. Furniture, clothing, household items, and other usable goods are donated whenever possible. You may even be eligible for a tax deduction receipt.'
        },
        {
          question: 'How do you dispose of electronics and appliances?',
          answer: 'Electronics and appliances are taken to certified recycling facilities where they\'re properly dismantled and recycled according to EPA guidelines. We ensure that refrigerants, metals, and other components are handled safely and responsibly.'
        },
        {
          question: 'What about construction debris and renovation waste?',
          answer: 'Construction materials like drywall, lumber, flooring, and fixtures are sorted for recycling when possible. Clean wood goes to recycling facilities, metals are recycled, and remaining materials are disposed of at appropriate facilities. We can handle most renovation debris except hazardous materials.'
        }
      ]
    },
    {
      title: 'Business & Logistics',
      faqs: [
        {
          question: 'Are you licensed and insured?',
          answer: 'Yes, we are fully licensed and insured for your protection and peace of mind. Our team is trained, background-checked, and covered by comprehensive liability insurance. We carry all necessary permits and licenses required for junk removal services in Oregon.'
        },
        {
          question: 'Do you provide commercial junk removal services?',
          answer: 'Absolutely! We serve businesses throughout Oregon City and Portland including offices, retail stores, restaurants, medical facilities, and warehouses. We can handle one-time cleanouts, regular pickup services, and large commercial projects.'
        },
        {
          question: 'Can you help with estate cleanouts?',
          answer: 'Yes, we specialize in sensitive estate cleanouts. Our team understands these can be emotional situations and works with compassion and respect. We can help sort items, coordinate donations, and handle the removal process efficiently while being mindful of family needs.'
        },
        {
          question: 'Do you offer regular pickup services?',
          answer: 'Yes, we can set up regular pickup schedules for businesses or properties that generate ongoing junk removal needs. Whether weekly, monthly, or quarterly, we can create a service plan that fits your needs and budget.'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get answers to common questions about our junk removal services in Oregon City, 
            Portland, and surrounding areas. Don't see your question? Give us a call!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Free Quote
            </Link>
            <a href="tel:+15037532329" className="btn-secondary">
              Call (503) 753-2329
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="space-y-16">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  {category.title}
                </h2>
                
                <div className="max-w-4xl mx-auto space-y-6">
                  {category.faqs.map((faq, faqIndex) => (
                    <div key={faqIndex} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {faq.question}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our friendly team is here to help! Get personalized answers to your specific 
              junk removal questions and a free estimate for your project.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-2">Speak directly with our team</p>
                <a href="tel:+15037532329" className="text-primary-600 hover:text-primary-700 font-semibold">
                  (503) 753-2329
                </a>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-2">Get detailed answers</p>
                <a href="mailto:info@oregoncityjunkremoval.com" className="text-primary-600 hover:text-primary-700 font-semibold">
                  info@oregoncityjunkremoval.com
                </a>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Quote</h3>
                <p className="text-gray-600 mb-2">Free estimate online</p>
                <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-semibold">
                  Request Quote
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Your Free Quote
              </Link>
              <Link href="/services" className="btn-outline">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Reminder */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Serving Oregon City, Portland & Surrounding Areas
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Professional junk removal services with transparent pricing and eco-friendly disposal
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {[
              'Oregon City', 'Portland', 'Clackamas', 'Gresham', 'Milwaukie', 'Happy Valley',
              'Lake Oswego', 'West Linn', 'Tigard', 'Beaverton', 'Tualatin', 'Gladstone'
            ].map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3 text-center hover:bg-primary-50 transition-colors duration-200">
                <h3 className="font-semibold text-gray-900 text-sm">{area}</h3>
              </div>
            ))}
          </div>

          <Link href="/coverage-areas" className="btn-outline">
            View All Coverage Areas
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Have your questions been answered? Get your free quote today and experience 
            professional junk removal service in Oregon City and Portland.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Your Free Quote
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
