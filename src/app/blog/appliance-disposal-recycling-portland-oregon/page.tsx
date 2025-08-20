import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Appliance Disposal & Recycling in Portland Oregon | Eco-Friendly Removal',
  description: 'Professional appliance disposal and recycling services in Portland and Oregon City. Safe removal of refrigerators, washers, dryers, and more. Same-day pickup available.',
  keywords: 'appliance disposal Portland, appliance recycling Oregon City, refrigerator removal Portland, washer dryer disposal Oregon, eco-friendly appliance removal',
  openGraph: {
    title: 'Appliance Disposal & Recycling in Portland Oregon | Eco-Friendly Removal',
    description: 'Professional appliance disposal and recycling services in Portland and Oregon City. Safe removal of refrigerators, washers, dryers, and more.',
    url: 'https://asjunkremoval.com/blog/appliance-disposal-recycling-portland-oregon',
    siteName: 'Andrew and Sons Junk Removal',
    images: [
      {
        url: 'https://asjunkremoval.com/images/junk-removal/professional-junk-removal-crew.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Appliance Disposal & Recycling in Portland Oregon | Eco-Friendly Removal',
    description: 'Professional appliance disposal and recycling services in Portland and Oregon City. Safe removal of refrigerators, washers, dryers, and more.',
    images: ['https://asjunkremoval.com/images/junk-removal/professional-junk-removal-crew.webp'],
  },
}

export default function ApplianceDisposalRecyclingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Appliance Disposal & Recycling in Portland Oregon
          </h1>
          <p className="text-xl mb-8 text-primary-100">
            Eco-friendly appliance removal and recycling services for Portland and Oregon City residents. Safe disposal of all major appliances with environmental responsibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-center"
            >
              Schedule Appliance Pickup
            </Link>
            <a
              href="tel:5037532329"
              className="bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors text-center"
            >
              Call (503) 753-2329
            </a>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <img 
          src="/images/junk-removal/professional-junk-removal-crew.webp" 
          alt="Professional appliance disposal and recycling team in Portland Oregon"
          className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            When your appliances reach the end of their useful life, proper disposal is crucial for both environmental protection and legal compliance. <strong>Appliance disposal and recycling in Portland and Oregon City</strong> requires specialized knowledge and equipment to handle refrigerants, hazardous materials, and valuable metals safely. Andrew and Sons provides comprehensive <strong>appliance removal services</strong> that prioritize environmental responsibility while making the process convenient for homeowners and businesses.
          </p>

          <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">
            Why Professional Appliance Disposal Matters
          </h2>
          
          <p className="mb-6">
            <strong>Appliances contain materials that can harm the environment if not disposed of properly.</strong> Refrigerators and air conditioners contain refrigerants that deplete the ozone layer, while many appliances contain valuable metals that can be recycled. Oregon has specific regulations governing appliance disposal, making professional services essential for compliance and environmental protection.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Environmental Impact</h3>
            <p className="text-yellow-700">
              Improper appliance disposal can release harmful refrigerants into the atmosphere and waste valuable recyclable materials. Professional disposal ensures 95% of appliance materials are recycled or properly disposed of according to EPA guidelines.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">
            Appliances We Handle in Portland & Oregon City
          </h2>

          <h3 className="text-2xl font-semibold text-secondary-600 mt-8 mb-4">
            Kitchen Appliances
          </h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Refrigerators and Freezers:</strong> All sizes including side-by-side, French door, and commercial units</li>
            <li><strong>Dishwashers:</strong> Built-in and portable models with proper disconnection</li>
            <li><strong>Ranges and Ovens:</strong> Gas and electric models with safe disconnection</li>
            <li><strong>Microwaves:</strong> Countertop, over-range, and built-in units</li>
            <li><strong>Garbage Disposals:</strong> Professional removal and disposal</li>
            <li><strong>Wine Coolers:</strong> Refrigerant recovery and recycling</li>
          </ul>

          <h3 className="text-2xl font-semibold text-secondary-600 mt-8 mb-4">
            Laundry Appliances
          </h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Washing Machines:</strong> Top-load, front-load, and stackable units</li>
            <li><strong>Dryers:</strong> Electric and gas models with proper disconnection</li>
            <li><strong>Washer/Dryer Combos:</strong> All-in-one units and stackable pairs</li>
            <li><strong>Commercial Laundry Equipment:</strong> Large-capacity machines for businesses</li>
          </ul>

          <h3 className="text-2xl font-semibold text-secondary-600 mt-8 mb-4">
            HVAC and Water Systems
          </h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Water Heaters:</strong> Electric, gas, and tankless models</li>
            <li><strong>Air Conditioners:</strong> Window units, central systems, and portable units</li>
            <li><strong>Heat Pumps:</strong> Refrigerant recovery and proper disposal</li>
            <li><strong>Furnaces:</strong> Gas and electric heating systems</li>
            <li><strong>Dehumidifiers:</strong> Refrigerant-containing units</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">
            Why Choose Andrew and Sons for Appliance Disposal
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary-600 mb-3">EPA Compliance</h3>
              <p>We follow all federal and state regulations for appliance disposal, including proper refrigerant recovery and hazardous material handling.</p>
            </div>

            <div className="bg-secondary-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-secondary-600 mb-3">Professional Service</h3>
              <p>Our trained team handles disconnection, removal, and transportation with care and expertise, protecting your property throughout the process.</p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary-600 mb-3">Environmental Responsibility</h3>
              <p>We maximize recycling and minimize landfill waste, ensuring your old appliances are disposed of in the most environmentally friendly way possible.</p>
            </div>

            <div className="bg-secondary-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-secondary-600 mb-3">Convenient Scheduling</h3>
              <p>Same-day and next-day service available throughout Portland and Oregon City, with flexible scheduling to fit your needs.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">
            Get Started with Professional Appliance Disposal
          </h2>

          <p className="mb-6">
            Ready to dispose of your old appliances responsibly? Andrew and Sons makes it easy with professional, eco-friendly appliance disposal services throughout Portland and Oregon City. Our experienced team handles everything from assessment to final recycling, ensuring your appliances are disposed of safely and legally.
          </p>

          <p className="mb-8">
            Contact us today for a free estimate and discover why Portland residents trust Andrew and Sons for all their appliance disposal needs. We're committed to protecting Oregon's environment while providing convenient, professional service.
          </p>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-lg mt-12">
            <h3 className="text-2xl font-bold text-primary-600 mb-4">
              Ready to Schedule Your Appliance Pickup?
            </h3>
            <p className="text-gray-700 mb-6">
              Get your free quote today for professional appliance disposal and recycling services in Portland, Oregon City, and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:5037532329"
                className="bg-secondary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-700 transition-colors text-center"
              >
                Call (503) 753-2329
              </a>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/eco-friendly-junk-disposal-oregon-green" className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
              <img 
                src="/images/junk-removal/eco-friendly-disposal-portland.webp" 
                alt="Eco-friendly junk disposal"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="font-semibold text-gray-900 mb-2">Eco-Friendly Junk Disposal: How We Keep Oregon Green</h4>
              <p className="text-gray-600 text-sm">Learn about our sustainable disposal practices and environmental commitment.</p>
            </Link>
            <Link href="/blog/how-to-prepare-junk-removal-day" className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
              <img 
                src="/images/junk-removal/junk-removal-preparation-tips.webp" 
                alt="Preparing for junk removal day"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="font-semibold text-gray-900 mb-2">How to Prepare for Junk Removal Day</h4>
              <p className="text-gray-600 text-sm">Get ready for your junk removal appointment with our comprehensive preparation guide.</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
