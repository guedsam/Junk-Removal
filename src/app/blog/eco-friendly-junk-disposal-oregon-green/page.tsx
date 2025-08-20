import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Eco-Friendly Junk Disposal: How We Keep Oregon Green | Oregon City Junk Removal',
  description: 'Learn about sustainable junk removal practices and eco-friendly disposal methods that protect Oregon\'s environment. Responsible junk hauling in Portland and Oregon City.',
  keywords: 'eco-friendly junk disposal, sustainable junk removal Oregon, green junk hauling Portland, environmental junk removal, Oregon recycling',
}

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <header className="mb-12">
          <div className="mb-6">
            <Link href="/blog" className="text-primary-600 hover:text-primary-700 font-medium">
              ← Back to Blog
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Eco-Friendly Junk Disposal: How We Keep Oregon Green
          </h1>
          <div className="flex items-center text-gray-500 mb-6">
            <span>December 10, 2024</span>
            <span className="mx-2">•</span>
            <span>6 min read</span>
          </div>
          <img 
            src="/images/junk-removal/eco-friendly-disposal-portland.webp" 
            alt="Eco-friendly junk disposal and recycling in Portland Oregon"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Oregon has always been a leader in environmental conservation, and at Oregon City Junk Removal, we're proud to continue that tradition. Our eco-friendly junk disposal practices ensure that your unwanted items are handled responsibly, keeping Oregon's beautiful landscapes clean and green for future generations.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Our Environmental Commitment</h2>
          <p className="text-gray-700 mb-6">
            <strong>We believe that junk removal should never come at the expense of our environment.</strong> That's why we've developed comprehensive eco-friendly disposal practices that prioritize recycling, donation, and responsible waste management over simply dumping everything in landfills.
          </p>
          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
            <p className="text-green-800 font-medium">
              <strong>Our Goal:</strong> Divert 80% or more of collected items from landfills through recycling, donation, and proper disposal methods.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Recycling Programs We Support</h2>
          <p className="text-gray-700 mb-6">
            <strong>Oregon has excellent recycling infrastructure, and we work with local facilities to ensure maximum material recovery.</strong> Here's how we handle different types of materials:
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Electronics Recycling</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Computers, laptops, and tablets</li>
            <li>Televisions and monitors</li>
            <li>Cell phones and small electronics</li>
            <li>Printers and office equipment</li>
          </ul>
          <p className="text-gray-700 mb-6">
            We partner with certified e-waste recyclers in Portland and Oregon City to ensure that valuable metals are recovered and hazardous materials are safely processed.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Metal and Appliance Recycling</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Refrigerators and freezers (with proper refrigerant removal)</li>
            <li>Washers, dryers, and dishwashers</li>
            <li>Water heaters and HVAC units</li>
            <li>Scrap metal and steel items</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Construction Material Recovery</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Wood and lumber for reuse projects</li>
            <li>Concrete and masonry materials</li>
            <li>Roofing materials and shingles</li>
            <li>Drywall and insulation</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Donation Partnerships</h2>
          <p className="text-gray-700 mb-6">
            <strong>Many items we collect are still in good condition and can benefit others in our community.</strong> We've established partnerships with local charities and organizations throughout Oregon City, Portland, and surrounding areas.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Items We Regularly Donate</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Furniture:</strong> Couches, chairs, tables, dressers, and beds in good condition</li>
            <li><strong>Clothing and Textiles:</strong> Clean clothing, shoes, and household linens</li>
            <li><strong>Books and Media:</strong> Books, DVDs, CDs, and educational materials</li>
            <li><strong>Household Items:</strong> Kitchenware, decorative items, and small appliances</li>
            <li><strong>Toys and Games:</strong> Children's toys, board games, and sports equipment</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Our Donation Partners</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Goodwill Industries of the Columbia Willamette</li>
            <li>The Salvation Army Portland</li>
            <li>Habitat for Humanity ReStore</li>
            <li>Local homeless shelters and community centers</li>
            <li>Schools and educational programs</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Hazardous Material Handling</h2>
          <p className="text-gray-700 mb-6">
            <strong>Some items require special handling to protect Oregon's environment.</strong> We're trained and certified to handle hazardous materials safely and ensure they're disposed of at appropriate facilities.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Hazardous Items We Handle</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Paint, stains, and solvents</li>
            <li>Automotive fluids (oil, antifreeze, brake fluid)</li>
            <li>Batteries (car, household, and rechargeable)</li>
            <li>Fluorescent bulbs and CFLs</li>
            <li>Pesticides and herbicides</li>
            <li>Propane tanks and compressed gas cylinders</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <p className="text-yellow-800">
              <strong>Important:</strong> We work with Metro's hazardous waste facilities and other certified disposal sites to ensure these materials never contaminate Oregon's soil or water.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Composting and Organic Waste</h2>
          <p className="text-gray-700 mb-6">
            <strong>Yard waste and organic materials don't belong in landfills.</strong> We separate organic waste and ensure it goes to appropriate composting facilities where it can be turned into valuable soil amendments.
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Yard trimmings and brush</li>
            <li>Leaves and grass clippings</li>
            <li>Wood chips and sawdust</li>
            <li>Untreated lumber and natural materials</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Reducing Carbon Footprint</h2>
          <p className="text-gray-700 mb-6">
            <strong>Our eco-friendly practices extend beyond just disposal methods.</strong> We've implemented several strategies to reduce our overall environmental impact:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Route Optimization:</strong> We use GPS technology to plan efficient routes, reducing fuel consumption</li>
            <li><strong>Vehicle Maintenance:</strong> Regular maintenance keeps our trucks running efficiently</li>
            <li><strong>Load Maximization:</strong> We carefully plan loads to minimize trips</li>
            <li><strong>Local Partnerships:</strong> Working with nearby facilities reduces transportation distances</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Oregon Difference</h2>
          <p className="text-gray-700 mb-6">
            <strong>Oregon's environmental consciousness makes our job easier and more rewarding.</strong> Our customers appreciate our eco-friendly approach, and many specifically choose us because of our commitment to environmental responsibility.
          </p>
          <p className="text-gray-700 mb-8">
            When you choose Oregon City Junk Removal, you're not just clearing out your space – you're contributing to a cleaner, greener Oregon. Together, we can ensure that our beautiful state remains pristine for generations to come.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-green-50 rounded-lg p-8 mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Choose Eco-Friendly Junk Removal
          </h3>
          <p className="text-gray-700 mb-6">
            Ready to clear out your space while protecting Oregon's environment? Contact us today for responsible junk removal in Oregon City, Portland, and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:(503)555-1234"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
            >
              Call (503) 555-1234
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}
