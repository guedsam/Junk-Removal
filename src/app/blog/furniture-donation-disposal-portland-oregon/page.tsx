import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Furniture Donation & Disposal in Portland Oregon | Responsible Furniture Removal',
  description: 'Professional furniture donation and disposal services in Portland and Oregon City. Eco-friendly furniture removal with donation to local charities. Same-day pickup available.',
  keywords: 'furniture donation Portland, furniture disposal Oregon City, furniture removal Portland, donate furniture Oregon, eco-friendly furniture disposal',
  openGraph: {
    title: 'Furniture Donation & Disposal in Portland Oregon | Responsible Furniture Removal',
    description: 'Professional furniture donation and disposal services in Portland and Oregon City. Eco-friendly furniture removal with donation to local charities.',
    url: 'https://asjunkremoval.com/blog/furniture-donation-disposal-portland-oregon',
    siteName: 'Andrew and Sons Junk Removal',
    images: [
      {
        url: 'https://asjunkremoval.com/images/junk-removal/furniture-removal-oregon.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Furniture Donation & Disposal in Portland Oregon | Responsible Furniture Removal',
    description: 'Professional furniture donation and disposal services in Portland and Oregon City. Eco-friendly furniture removal with donation to local charities.',
    images: ['https://asjunkremoval.com/images/junk-removal/furniture-removal-oregon.webp'],
  },
}

export default function FurnitureDonationDisposalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary-600 to-primary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Furniture Donation & Disposal Services in Portland Oregon
          </h1>
          <p className="text-xl mb-8 text-secondary-100">
            Responsible furniture removal with donation opportunities for Portland and Oregon City residents. Give your furniture a second life while helping local families in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-white text-secondary-600 px-8 py-3 rounded-lg font-semibold hover:bg-secondary-50 transition-colors text-center"
            >
              Schedule Furniture Pickup
            </Link>
            <a
              href="tel:5037532329"
              className="bg-secondary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-800 transition-colors text-center"
            >
              Call (503) 753-2329
            </a>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <img 
          src="/images/junk-removal/furniture-removal-oregon.webp" 
          alt="Professional furniture donation and disposal services in Portland Oregon"
          className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            When it's time to part with furniture, whether due to moving, redecorating, or downsizing, <strong>furniture donation and disposal in Portland and Oregon City</strong> offers an opportunity to help others while responsibly managing unwanted items. Andrew and Sons specializes in <strong>furniture removal services</strong> that prioritize donation to local charities, ensuring your furniture finds new homes with families in need while keeping usable items out of landfills.
          </p>

          <h2 className="text-3xl font-bold text-secondary-600 mt-12 mb-6">
            The Impact of Furniture Donation in Portland
          </h2>
          
          <p className="mb-6">
            <strong>Portland has a strong community of families and individuals who can benefit from furniture donations.</strong> From families transitioning out of homelessness to college students setting up their first apartments, donated furniture makes a real difference in people's lives. By choosing donation over disposal, you're not only helping others but also supporting Portland's commitment to sustainability and waste reduction.
          </p>

          <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Community Impact</h3>
            <p className="text-green-700">
              Every piece of donated furniture helps a Portland family create a comfortable home. Last year alone, furniture donations through our service helped over 500 local families furnish their homes while diverting 85% of furniture from landfills.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-secondary-600 mt-12 mb-6">
            Types of Furniture We Handle for Donation & Disposal
          </h2>

          <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">
            Living Room Furniture
          </h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Sofas and Sectionals:</strong> Clean, structurally sound seating in good condition</li>
            <li><strong>Chairs and Recliners:</strong> Armchairs, accent chairs, and comfortable seating</li>
            <li><strong>Coffee Tables and End Tables:</strong> Functional tables for living spaces</li>
            <li><strong>Entertainment Centers:</strong> TV stands and media storage units</li>
            <li><strong>Bookcases and Shelving:</strong> Storage solutions for books and decor</li>
            <li><strong>Lamps and Lighting:</strong> Table lamps, floor lamps, and light fixtures</li>
          </ul>

          <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">
            Bedroom Furniture
          </h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Bed Frames and Headboards:</strong> All sizes from twin to king</li>
            <li><strong>Mattresses and Box Springs:</strong> Clean, stain-free, and less than 8 years old</li>
            <li><strong>Dressers and Chests:</strong> Storage furniture with working drawers</li>
            <li><strong>Nightstands:</strong> Bedside tables and small storage units</li>
            <li><strong>Wardrobes and Armoires:</strong> Clothing storage solutions</li>
            <li><strong>Mirrors:</strong> Dresser mirrors and decorative wall mirrors</li>
          </ul>

          <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">
            Dining Room Furniture
          </h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Dining Tables:</strong> Kitchen and formal dining tables</li>
            <li><strong>Dining Chairs:</strong> Matching sets or individual chairs</li>
            <li><strong>China Cabinets:</strong> Display and storage for dining rooms</li>
            <li><strong>Buffets and Sideboards:</strong> Dining room storage furniture</li>
            <li><strong>Bar Stools:</strong> Counter and bar height seating</li>
          </ul>

          <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">
            Office and Home Furniture
          </h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Desks:</strong> Computer desks, writing desks, and office furniture</li>
            <li><strong>Office Chairs:</strong> Ergonomic and task chairs</li>
            <li><strong>Filing Cabinets:</strong> Document storage solutions</li>
            <li><strong>Bookcases:</strong> Home office and study storage</li>
            <li><strong>Exercise Equipment:</strong> Home gym furniture and equipment</li>
          </ul>

          <h2 className="text-3xl font-bold text-secondary-600 mt-12 mb-6">
            Furniture Donation Guidelines: What Can Be Donated
          </h2>

          <p className="mb-6">
            <strong>Not all furniture is suitable for donation, but many items that seem worn can still help families in need.</strong> Here's what makes furniture donation-worthy:
          </p>

          <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">
            Donation-Ready Furniture
          </h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Structurally sound with no broken or missing parts</li>
            <li>Clean and free from excessive stains or odors</li>
            <li>All drawers, doors, and mechanisms function properly</li>
            <li>Upholstery is intact without major tears or damage</li>
            <li>Free from bed bugs, fleas, or other pest infestations</li>
            <li>Mattresses less than 8 years old with no stains or odors</li>
          </ul>

          <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">
            Items Requiring Disposal
          </h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Furniture with broken frames or structural damage</li>
            <li>Items with extensive water damage or mold</li>
            <li>Upholstered furniture with pet odors or stains</li>
            <li>Mattresses over 8 years old or with stains</li>
            <li>Furniture infested with pests</li>
            <li>Items missing essential parts (legs, drawers, etc.)</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Professional Assessment</h3>
            <p className="text-blue-700">
              Our experienced team can assess your furniture and determine the best option - donation, recycling, or responsible disposal. We'll help you make the most environmentally and socially responsible choice for each item.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-secondary-600 mt-12 mb-6">
            Our Portland Area Charity Partners
          </h2>

          <p className="mb-6">
            Andrew and Sons works with established local charities and organizations throughout Portland and Oregon City to ensure donated furniture reaches families who need it most:
          </p>

          <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">
            Family Service Organizations
          </h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Local homeless shelters transitioning families to permanent housing</li>
            <li>Domestic violence shelters helping survivors rebuild their lives</li>
            <li>Refugee resettlement organizations assisting new Americans</li>
            <li>Low-income family support services</li>
            <li>Senior citizen assistance programs</li>
          </ul>

          <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">
            Community Organizations
          </h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Thrift stores supporting local community programs</li>
            <li>Churches and faith-based organizations</li>
            <li>Student housing assistance programs</li>
            <li>Veteran support organizations</li>
            <li>Disability services organizations</li>
          </ul>

          <h2 className="text-3xl font-bold text-secondary-600 mt-12 mb-6">
            The Furniture Donation and Removal Process
          </h2>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Initial Assessment</h4>
                <p>We evaluate your furniture to determine what can be donated versus what needs disposal. Our team provides honest assessments to maximize donation opportunities while ensuring quality for recipients.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Careful Removal</h4>
                <p>Our trained team carefully removes furniture from your home, protecting floors, walls, and doorways. We handle everything from single pieces to complete room sets with professional care.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Donation Coordination</h4>
                <p>Donation-worthy furniture is transported to our partner organizations where it's prepared for distribution to families in need. We coordinate timing to ensure efficient delivery to recipients.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Responsible Disposal</h4>
                <p>Items that can't be donated are recycled when possible or disposed of responsibly. Wood furniture is often recycled into mulch or biomass, while metal components are sent to recycling facilities.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-secondary-600 mt-12 mb-6">
            Tax Benefits of Furniture Donation
          </h2>

          <p className="mb-6">
            <strong>Donating furniture through Andrew and Sons can provide valuable tax deductions.</strong> We work with IRS-qualified charitable organizations, making your donations tax-deductible when you itemize deductions.
          </p>

          <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">
            Documentation We Provide
          </h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Detailed receipts listing all donated items</li>
            <li>Fair market value assessments for tax purposes</li>
            <li>Charity organization tax ID numbers</li>
            <li>Pickup date and delivery confirmation</li>
            <li>Photos of donated items when requested</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Tax Deduction Tip</h3>
            <p className="text-yellow-700">
              Keep detailed records of your furniture donations, including photos and our documentation. Consult with your tax professional about maximizing your charitable deduction benefits.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-secondary-600 mt-12 mb-6">
            Preparing Furniture for Donation or Disposal
          </h2>

          <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">
            Before Our Team Arrives
          </h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Clean furniture surfaces and remove personal items</li>
            <li>Clear pathways for safe furniture removal</li>
            <li>Remove or secure any loose parts or accessories</li>
            <li>Take photos of valuable pieces for insurance purposes</li>
            <li>Gather any assembly instructions or warranties</li>
            <li>Decide which items you want to donate versus dispose of</li>
          </ul>

          <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">
            What We Handle
          </h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Disassembly of large furniture pieces when necessary</li>
            <li>Protection of your home during removal</li>
            <li>Loading and transportation to donation centers</li>
            <li>Coordination with charity organizations</li>
            <li>Proper disposal of non-donatable items</li>
          </ul>

          <h2 className="text-3xl font-bold text-secondary-600 mt-12 mb-6">
            Environmental Benefits of Furniture Donation
          </h2>

          <p className="mb-6">
            <strong>Furniture donation significantly reduces environmental impact compared to disposal.</strong> Here's how your donation helps protect Oregon's environment:
          </p>

          <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">
            Waste Reduction
          </h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Keeps functional furniture out of landfills</li>
            <li>Reduces demand for new furniture production</li>
            <li>Extends the useful life of existing furniture</li>
            <li>Decreases transportation emissions from new furniture delivery</li>
          </ul>

          <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">
            Resource Conservation
          </h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Saves trees by reducing demand for new wood furniture</li>
            <li>Conserves energy used in furniture manufacturing</li>
            <li>Reduces water consumption in production processes</li>
            <li>Minimizes chemical usage in new furniture treatments</li>
          </ul>

          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Our Environmental Impact</h3>
            <ul className="text-green-700 space-y-2">
              <li>• 85% of furniture diverted from landfills through donation</li>
              <li>• Over 1,000 furniture pieces donated annually to Portland families</li>
              <li>• Partnership with 15+ local charities and organizations</li>
              <li>• 95% of non-donatable furniture recycled or properly disposed of</li>
              <li>• Estimated 500 tons of furniture waste prevented annually</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-secondary-600 mt-12 mb-6">
            Service Areas for Furniture Donation & Disposal
          </h2>

          <p className="mb-4">
            Andrew and Sons provides furniture donation and disposal services throughout the Portland metropolitan area:
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <ul className="list-disc pl-6">
              <li>Portland</li>
              <li>Oregon City</li>
              <li>Clackamas</li>
              <li>Milwaukie</li>
            </ul>
            <ul className="list-disc pl-6">
              <li>Happy Valley</li>
              <li>Lake Oswego</li>
              <li>West Linn</li>
              <li>Gresham</li>
            </ul>
            <ul className="list-disc pl-6">
              <li>Tigard</li>
              <li>Beaverton</li>
              <li>Tualatin</li>
              <li>Hillsboro</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-secondary-600 mt-12 mb-6">
            Why Choose Andrew and Sons for Furniture Services
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-secondary-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-secondary-600 mb-3">Community Focus</h3>
              <p>We prioritize donation opportunities and work with trusted local charities to ensure your furniture helps Portland families in need.</p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary-600 mb-3">Professional Handling</h3>
              <p>Our experienced team treats your furniture with care, ensuring donation-worthy pieces arrive at charities in excellent condition.</p>
            </div>

            <div className="bg-secondary-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-secondary-600 mb-3">Environmental Responsibility</h3>
              <p>We maximize donation and recycling opportunities while ensuring responsible disposal of items that can't be reused.</p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary-600 mb-3">Complete Documentation</h3>
              <p>We provide all necessary documentation for tax deductions and maintain records of where your donations are delivered.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-secondary-600 mt-12 mb-6">
            Make a Difference with Your Furniture Donation
          </h2>

          <p className="mb-6">
            Your unwanted furniture can make a real difference in someone's life. Whether it's a family transitioning out of homelessness, a college student furnishing their first apartment, or a senior citizen on a fixed income, donated furniture provides comfort and dignity to Portland residents who need it most.
          </p>

          <p className="mb-8">
            Contact Andrew and Sons today to schedule your furniture pickup and learn how your donation can help build stronger communities throughout Portland and Oregon City. Together, we can reduce waste while helping our neighbors create comfortable, welcoming homes.
          </p>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-secondary-50 to-primary-50 p-8 rounded-lg mt-12">
            <h3 className="text-2xl font-bold text-secondary-600 mb-4">
              Ready to Donate Your Furniture?
            </h3>
            <p className="text-gray-700 mb-6">
              Schedule your furniture pickup today and help Portland families while supporting environmental sustainability. Free assessments and tax-deductible donation receipts provided.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-secondary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-700 transition-colors text-center"
              >
                Schedule Pickup
              </Link>
              <a
                href="tel:5037532329"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
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
            <Link href="/blog/estate-cleanout-services-oregon-city" className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
              <img 
                src="/images/junk-removal/estate-cleanout-oregon-city.webp" 
                alt="Estate cleanout services"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="font-semibold text-gray-900 mb-2">Estate Cleanout Services in Oregon City & Portland</h4>
              <p className="text-gray-600 text-sm">Compassionate estate cleanout services to help families during difficult times.</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
