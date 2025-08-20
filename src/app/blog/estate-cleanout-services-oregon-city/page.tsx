import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Estate Cleanout Services in Oregon City & Portland | Andrew and Sons',
  description: 'Professional estate cleanout services in Oregon City and Portland. Compassionate, efficient handling of estate cleanouts with donation and recycling options. Free estimates available.',
  keywords: 'estate cleanout Oregon City, estate cleanout Portland, estate sale cleanup, house cleanout services Oregon, property cleanout Portland, estate junk removal',
  openGraph: {
    title: 'Estate Cleanout Services in Oregon City & Portland | Andrew and Sons',
    description: 'Professional estate cleanout services with compassionate handling of belongings. Serving Oregon City, Portland, and surrounding areas.',
  },
}

export default function BlogPost() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Estate Cleanout Services in Oregon City & Portland
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Compassionate, professional estate cleanout services to help families during difficult times. We handle everything with care and respect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Free Estimate
              </Link>
              <a href="tel:+15037532329" className="btn-outline">
                Call (503) 753-2329
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            {/* Article Meta */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span>Published by Andrew and Sons Junk Removal</span>
                <span>•</span>
                <span>10 min read</span>
                <span>•</span>
                <span>Estate Services</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12">
              <img 
                src="/images/junk-removal/estate-cleanout-oregon-city.webp" 
                alt="Professional estate cleanout service in Oregon City and Portland"
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 font-medium">
                Dealing with an estate cleanout can be one of the most emotionally challenging tasks families face. Whether you're handling the belongings of a loved one who has passed away, helping an elderly family member downsize, or managing a property after foreclosure, Andrew and Sons Junk Removal is here to provide compassionate, professional estate cleanout services throughout Oregon City, Portland, and surrounding areas.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Estate Cleanouts</h2>
              
              <p className="mb-6">
                An estate cleanout involves the comprehensive removal and disposal of personal belongings, furniture, and other items from a property. This process typically occurs after a death in the family, during downsizing for senior living, or when preparing a property for sale. Unlike regular junk removal, estate cleanouts require sensitivity, discretion, and often involve sorting through items with sentimental value.
              </p>

              <p className="mb-6">
                At Andrew and Sons, we understand that every item in an estate has a story. Our team approaches each cleanout with the respect and care it deserves, working closely with families to ensure valuable items are preserved while unwanted belongings are disposed of responsibly.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Estate Cleanout Process</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Initial Consultation and Assessment</h3>
              
              <p className="mb-4">
                We begin every estate cleanout with a thorough consultation to understand your specific needs and circumstances:
              </p>

              <ul className="mb-6 space-y-2">
                <li>Free on-site evaluation of the property</li>
                <li>Discussion of timeline and any special requirements</li>
                <li>Identification of items to keep, donate, sell, or dispose of</li>
                <li>Transparent pricing with no hidden fees</li>
                <li>Coordination with estate sales companies if needed</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Careful Sorting and Categorization</h3>
              
              <p className="mb-4">
                Our experienced team works methodically through each room, carefully sorting items into categories:
              </p>

              <ul className="mb-6 space-y-2">
                <li><strong>Keep Items:</strong> Belongings family members want to retain</li>
                <li><strong>Valuable Items:</strong> Antiques, jewelry, collectibles, and items of monetary value</li>
                <li><strong>Donation Items:</strong> Usable furniture, clothing, and household goods</li>
                <li><strong>Recyclable Materials:</strong> Electronics, metals, and other recyclable items</li>
                <li><strong>Disposal Items:</strong> Damaged or unusable belongings</li>
              </ul>

              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mb-8">
                <h3 className="text-lg font-semibold text-primary-800 mb-2">Important Documents</h3>
                <p className="text-primary-700">
                  We always watch for important documents like wills, insurance policies, financial records, and family photos. These items are immediately set aside and brought to your attention for safekeeping.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Responsible Disposal and Donation</h3>
              
              <p className="mb-6">
                Andrew and Sons is committed to keeping as much as possible out of landfills. We work with local charities, recycling centers, and donation organizations throughout Oregon City and Portland to ensure items find new homes whenever possible. Our goal is to achieve an 85% diversion rate from landfills.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Estate Cleanouts We Handle</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Full House Cleanouts</h3>
              <p className="mb-4">
                Complete clearing of entire homes, including all rooms, basements, attics, and garages. We handle everything from furniture and appliances to personal belongings and household items.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Partial Estate Cleanouts</h3>
              <p className="mb-4">
                Selective removal of specific items or rooms while leaving other areas untouched. Perfect for families who want to handle some sorting themselves.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Post-Estate Sale Cleanouts</h3>
              <p className="mb-4">
                Removal of remaining items after an estate sale has concluded. We work with estate sale companies to ensure properties are left clean and ready for the next phase.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Senior Downsizing</h3>
              <p className="mb-6">
                Helping elderly family members transition to smaller living spaces by removing excess belongings while preserving cherished items and memories.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Makes Andrew and Sons Different</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Compassionate Service</h3>
              <p className="mb-4">
                We understand that estate cleanouts are often emotionally difficult. Our team is trained to work with sensitivity and respect, giving families the time and space they need to make decisions about belongings.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Flexible Scheduling</h3>
              <p className="mb-4">
                Estate cleanouts don't always fit into standard business hours. We offer flexible scheduling, including evenings and weekends, to accommodate your family's needs and timeline.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Licensed and Insured</h3>
              <p className="mb-4">
                Our team is fully licensed and insured, providing peace of mind during an already stressful time. We handle all liability concerns so you can focus on what matters most.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Local Expertise</h3>
              <p className="mb-6">
                As a local Oregon City and Portland company, we know the area's donation centers, recycling facilities, and disposal requirements. This local knowledge helps us maximize donations and minimize waste.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Items We Commonly Handle in Estate Cleanouts</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Furniture & Appliances</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Bedroom and living room furniture</li>
                    <li>Kitchen appliances and cookware</li>
                    <li>Washers, dryers, and refrigerators</li>
                    <li>Dining room sets and china cabinets</li>
                    <li>Office furniture and equipment</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Belongings</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Clothing and accessories</li>
                    <li>Books, magazines, and documents</li>
                    <li>Artwork and decorative items</li>
                    <li>Collections and hobby items</li>
                    <li>Holiday decorations and seasonal items</li>
                  </ul>
                </div>
              </div>

              <div className="bg-secondary-50 border-l-4 border-secondary-700 p-6 mb-8">
                <h3 className="text-lg font-semibold text-secondary-800 mb-2">Valuable Items</h3>
                <p className="text-secondary-700">
                  We always recommend having valuable items like antiques, jewelry, artwork, or collectibles appraised before disposal. Our team can help identify potentially valuable items and recommend local appraisers when needed.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Preparing for an Estate Cleanout</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Before We Arrive</h3>
              
              <ul className="mb-6 space-y-2">
                <li>Remove any items you definitely want to keep</li>
                <li>Identify areas that need special attention or have restricted access</li>
                <li>Gather any relevant documentation about the property</li>
                <li>Coordinate with other family members about the process</li>
                <li>Consider whether you want to be present during the cleanout</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">During the Cleanout</h3>
              
              <ul className="mb-6 space-y-2">
                <li>Our team will work room by room, checking with you before removing items</li>
                <li>We'll set aside any items that appear valuable or sentimental</li>
                <li>Important documents and photos will be collected for your review</li>
                <li>We'll provide updates on donation and recycling efforts</li>
                <li>The property will be left clean and ready for the next steps</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Working with Other Professionals</h2>
              
              <p className="mb-4">
                Estate cleanouts often involve coordination with other professionals. Andrew and Sons works seamlessly with:
              </p>

              <ul className="mb-6 space-y-2">
                <li><strong>Estate Sale Companies:</strong> We can work before or after estate sales</li>
                <li><strong>Real Estate Agents:</strong> Preparing properties for listing and sale</li>
                <li><strong>Attorneys and Executors:</strong> Meeting legal requirements and timelines</li>
                <li><strong>Cleaning Services:</strong> Coordinating final cleaning after removal</li>
                <li><strong>Appraisers:</strong> Identifying valuable items before disposal</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing and Timeline</h2>
              
              <p className="mb-4">
                Estate cleanout pricing depends on several factors:
              </p>

              <ul className="mb-6 space-y-2">
                <li>Size of the property and amount of belongings</li>
                <li>Accessibility and location of items</li>
                <li>Special handling requirements</li>
                <li>Timeline and scheduling needs</li>
                <li>Donation and recycling opportunities</li>
              </ul>

              <p className="mb-6">
                We provide free, no-obligation estimates and work with families to find solutions that fit their budget and timeline. Most estate cleanouts can be completed within 1-3 days, depending on the scope of work.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Environmental Responsibility</h2>
              
              <p className="mb-6">
                Andrew and Sons is committed to environmental responsibility in all our estate cleanouts. We partner with local organizations throughout Oregon City and Portland to ensure items are reused, recycled, or properly disposed of. Our comprehensive approach includes:
              </p>

              <ul className="mb-6 space-y-2">
                <li>Donating usable furniture and household items to local charities</li>
                <li>Recycling electronics, metals, and other materials</li>
                <li>Proper disposal of hazardous materials</li>
                <li>Composting organic materials when possible</li>
                <li>Minimizing landfill waste through careful sorting</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started with Your Estate Cleanout</h2>
              
              <p className="mb-6">
                If you're facing an estate cleanout in Oregon City, Portland, or surrounding areas, Andrew and Sons is here to help. Our compassionate team understands the emotional challenges involved and will work with you to make the process as smooth as possible.
              </p>

              <p className="mb-8">
                We offer free consultations and estimates, flexible scheduling, and transparent pricing. Our goal is to help families during difficult times while ensuring belongings are handled with care and respect.
              </p>

              <div className="text-center bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Contact Andrew and Sons today for a free, compassionate consultation about your estate cleanout needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+15037532329" className="btn-primary">
                    Call (503) 753-2329
                  </a>
                  <Link href="/contact" className="btn-outline">
                    Get Free Estimate
                  </Link>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Available 7 days a week • Licensed & Insured • Serving Oregon City, Portland & Surrounding Areas
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link href="/blog/how-to-prepare-junk-removal-day" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="/images/junk-removal/junk-removal-preparation-tips.webp" 
                    alt="Preparing for junk removal day"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      How to Prepare for Junk Removal Day
                    </h3>
                    <p className="text-gray-600">
                      Get ready for your junk removal appointment with our comprehensive preparation guide.
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/blog/eco-friendly-junk-disposal-oregon-green" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="/images/junk-removal/eco-friendly-disposal-portland.webp" 
                    alt="Eco-friendly junk disposal"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      Eco-Friendly Junk Disposal: How We Keep Oregon Green
                    </h3>
                    <p className="text-gray-600">
                      Learn about our sustainable disposal practices and environmental commitment.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
