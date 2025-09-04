import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '#1 Junk Removal Service in Barclay Hills, Oregon City - Same-Day Pickup | AS Junk Removal',
  description: 'Expert junk removal in Barclay Hills, Oregon City. Same-day service, eco-friendly disposal, transparent pricing. Licensed & insured. Call (503) 753-2329. Serving Barclay Hills residents & businesses since 2018.',
  keywords: 'Barclay Hills junk removal, junk removal Barclay Hills Oregon City, junk hauler Barclay Hills, same day junk removal Barclay Hills, eco-friendly junk removal Barclay Hills, residential junk removal Barclay Hills, commercial junk removal Barclay Hills OR',
  openGraph: {
    title: '#1 Junk Removal Service in Barclay Hills, Oregon City - Same-Day Pickup',
    description: 'Expert junk removal in Barclay Hills, Oregon City. Same-day service, eco-friendly disposal, transparent pricing. Licensed & insured. Serving Barclay Hills residents & businesses since 2018.',
    url: 'https://asjunkremoval.com/barclay-hills-junk-removal',
    siteName: 'AS Junk Removal',
    images: [
      {
        url: '/images/junk-removal/oregon-city-junk-removal-team.webp',
        width: 1200,
        height: 630,
        alt: 'AS Junk Removal team serving Barclay Hills neighborhood in Oregon City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Junk Removal Service in Barclay Hills, Oregon City - Same-Day Pickup',
    description: 'Expert junk removal in Barclay Hills, Oregon City. Same-day service, eco-friendly disposal, transparent pricing.',
    images: ['/images/junk-removal/oregon-city-junk-removal-team.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/barclay-hills-junk-removal',
  },
}

export default function BarclayHillsJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Junk Removal{' '}
                <span className="text-gradient">Barclay Hills</span>
                {' '}<span className="text-2xl md:text-3xl font-normal">Oregon City</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                #1 rated junk removal service in beautiful Barclay Hills, Oregon City.
                Same-day pickup, eco-friendly disposal, and transparent pricing.
                We've served the Barclay Hills community since 2018.
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
                alt="AS Junk Removal professional team providing junk removal services in Barclay Hills, Oregon City"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Barclay Hills Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving the Barclay Hills Community
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Barclay Hills is one of Oregon City's most beautiful residential neighborhoods,
              known for its peaceful atmosphere, well-maintained homes, and proximity to the Willamette River.
              As your local junk removal experts, we understand the unique needs of Barclay Hills residents and provide personalized service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">About Barclay Hills Neighborhood</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Peaceful residential neighborhood in southeast Oregon City
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Proximity to Willamette River and scenic trails
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Family-friendly community with excellent schools
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Easy access to McLoughlin Boulevard and downtown Oregon City
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mix of single-family homes and small condo complexes
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Why Barclay Hills Chooses AS Junk Removal</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Local team with deep knowledge of Oregon City neighborhoods
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Same-day service for Barclay Hills residents
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Eco-friendly disposal preserving your beautiful community
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Transparent pricing with no hidden fees
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Understanding of neighborhood HOAs and parking restrictions
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Barclay Hills Junk Removal Services Area</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>• Barclay Hills proper</div>
              <div>• Laurelwood Park</div>
              <div>• Forest Park areas</div>
              <div>• Willamette River corridor</div>
              <div>• Nearby summit areas</div>
              <div>• Connected neighborhoods</div>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              Serving all of Barclay Hills plus the surrounding Oregon City neighborhoods you love.
            </p>
          </div>
        </div>
      </section>

      {/* Services in Barclay Hills Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Junk Removal Services in Barclay Hills
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From home cleanouts to estate services, we handle every type of junk removal project
              in the Barclay Hills neighborhood with professional care and attention to detail.
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
                <Link href="/services/residential-junk-removal" className="hover:text-primary-600">Residential Junk Removal</Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Complete home cleanouts in Barclay Hills homes. We remove furniture, appliances,
                electronics, and general household junk from single-family homes and condos.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Garage cleanouts</li>
                <li>• Basement clearing</li>
                <li>• Kitchen renovations</li>
                <li>• Moving services</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Estate Cleanout Services
              </h3>
              <p className="text-gray-600 mb-4">
                Compassionate estate cleanout services for Barclay Hills families. We handle everything
                with care and respect during difficult times, sorting items and providing probate support.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Gentle handling of personal items</li>
                <li>• Probate cleaning services</li>
                <li>• Family assistance coordination</li>
                <li>• Peace of mind guaranteed</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/services/construction-debris-cleanup" className="hover:text-primary-600">Construction Debris</Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Safe removal of construction waste from Barclay Hills renovation projects.
                Fully licensed for residential and small commercial construction debris.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Renovation waste removal</li>
                <li>• Construction debris cleanup</li>
                <li>• Licensed hazardous material handling</li>
                <li>• Minimal disruption to neighbors</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Decluttering Services
              </h3>
              <p className="text-gray-600 mb-4">
                Professional decluttering services for Barclay Hills homes. We help organize
                your space while removing unwanted items to leave your home fresh and clean.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Personalized organization</li>
                <li>• Space optimization</li>
                <li>• Eco-friendly disposal options</li>
                <li>• Before & after consultations</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/services/yard-waste-removal" className="hover:text-primary-600">Yard Waste Removal</Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Seasonal yard waste removal for Barclay Hills properties. Perfect for spring cleaning,
                fall leaf cleanup, tree trimming, and ongoing yard maintenance in your beautiful community.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Seasonal yard cleaning</li>
                <li>• Leaf and branch removal</li>
                <li>• Grass clipping pickup</li>
                <li>• Small tree debris</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Appliance Disposal
              </h3>
              <p className="text-gray-600 mb-4">
                Professional appliance removal and disposal for Barclay Hills kitchens and laundries.
                Safe handling of refrigerators, washers, dryers, ovens, and other large appliances.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Refrigerator recycling</li>
                <li>• Washer & dryer removal</li>
                <li>• Oven and range disposal</li>
                <li>• Environmental compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Barclay Hills Neighborhood Spotlight */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Junk Removal in Barclay Hills?
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Barclay Hills deserves exceptional junk removal service. Here's what makes us your
              perfect choice for maintaining your beautiful neighborhood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Local Expertise</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                We know Barclay Hills streets, HOAs, and parking restrictions. No permit issues
                or meter feeding for our customers.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Eco-Friendly</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                We donate and recycle over 85% of items collected in Barclay Hills,
                preserving our shared Willamette River environment.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Fast Response</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Same-day service available for Barclay Hills. Call by 2 PM for same-day pickup
                in your neighborhood.
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
              Trustworthy Junk Removal in Barclay Hills
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Real reviews from real Barclay Hills residents who've experienced our professional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "AS Junk Removal was incredible! They helped us clean out my mother's Barclay Hills home
                after she passed. The team was respectful, professional, and handled everything with care.
                Highly recommend in our community."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Jennifer R., Barclay Hills Resident</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Needed help clearing out our garage after growing children in Barclay Hills. The team was
                quick, efficient, and actually helped clean up some items we wanted to keep. Honest pricing too!"
              </p>
              <p className="text-sm font-semibold text-gray-900">- Michael B., Barclay Hills Family</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Professional service from start to finish. They understood our Barclay Hills neighborhood
                parking situation and were incredibly respectful of our neighbors. Will definitely call them again."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Sarah L., Barclay Hills Neighborhood</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Barclay Hills Junk Removal Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">Common questions about our Barclay Hills, Oregon City services</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer same-day junk removal in Barclay Hills?
              </h3>
              <p className="text-gray-600">
                Yes! We offer same-day pickup for most junk removal jobs in Barclay Hills. Call us by 2 PM for same-day service in our Oregon City neighborhoods.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much does junk removal cost in Barclay Hills, Oregon City?
              </h3>
              <p className="text-gray-600">
                Our pricing is transparent and based on volume. Typical Barclay Hills cleanouts range from $150-350 for small loads to $500-900 for large projects. We provide free estimates with no obligation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What types of items do you remove from Barclay Hills homes?
              </h3>
              <p className="text-gray-600">
                We remove furniture, appliances, electronics, construction debris, yard waste, and general household junk from Barclay Hills properties. We cannot remove hazardous materials, paint, or chemicals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you handle estate cleanouts in the Barclay Hills neighborhood?
              </h3>
              <p className="text-gray-600">
                Yes, we specialize in compassionate estate cleanouts throughout Oregon City, including Barclay Hills. We work respectfully with families during difficult times and help coordinate with probate processes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How can I prepare my Barclay Hills home for junk removal?
              </h3>
              <p className="text-gray-600">
                Prepare your items by sorting them and placing larger pieces outside (with HOA approval if needed). Clear pathways, note any parking instructions, and let us know about pets or special access considerations in your Barclay Hills home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Expert Junk Removal in Barclay Hills?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied Barclay Hills residents who trust us for their junk removal needs.
            Same-day service available throughout Oregon City. Call now or get your free online quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Barclay Hills Quote
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329 Now
            </a>
          </div>
          <div className="mt-8 text-primary-100">
            <p className="text-lg font-semibold">Barclay Hills Junk Removal • Licensed & Insured • Same-Day Service Available</p>
            <p className="text-sm mt-2">Proudly Serving the Barclay Hills Community & All Oregon City Neighborhoods Since 2018</p>
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
            "description": "Professional junk removal services in Barclay Hills, Oregon City, OR",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Oregon City",
              "addressRegion": "OR",
              "addressCountry": "US"
            },
            "telephone": "(503) 753-2329",
            "url": "https://asjunkremoval.com/barclay-hills-junk-removal",
            "serviceArea": {
              "@type": "Place",
              "name": "Barclay Hills, Oregon City, OR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "150"
            },
            "openingHours": "Mo-Su",
            "serviceType": "Junk Removal Services",
            "areaServed": "Barclay Hills, Oregon City, OR"
          })
        }}
      />
    </div>
  )
}
