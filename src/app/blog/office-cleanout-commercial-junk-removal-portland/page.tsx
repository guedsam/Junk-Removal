import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Office Cleanout & Commercial Junk Removal Services in Portland | Andrew and Sons',
  description: 'Professional office cleanout and commercial junk removal in Portland, Oregon City. Fast, efficient business cleanouts, furniture removal, and e-waste disposal.',
  keywords: 'office cleanout Portland, commercial junk removal Oregon City, business cleanout services, office furniture removal Portland, e-waste disposal Oregon',
  openGraph: {
    title: 'Office Cleanout & Commercial Junk Removal Services in Portland',
    description: 'Professional office cleanout and commercial junk removal in Portland, Oregon City. Fast, efficient business cleanouts, furniture removal, and e-waste disposal.',
    url: 'https://asjunkremoval.com/blog/office-cleanout-commercial-junk-removal-portland',
    siteName: 'Andrew and Sons Junk Removal',
    images: [
      {
        url: 'https://asjunkremoval.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Office Cleanout & Commercial Junk Removal Services in Portland',
    description: 'Professional office cleanout and commercial junk removal in Portland, Oregon City. Fast, efficient business cleanouts, furniture removal, and e-waste disposal.',
    images: ['https://asjunkremoval.com/og-image.jpg'],
  },
}

export default function OfficeCleanoutCommercialJunkRemovalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary-600 to-primary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Office Cleanout & Commercial Junk Removal in Portland
          </h1>
          <p className="text-xl mb-8 text-secondary-100">
            Streamline your business operations with efficient, professional commercial junk removal services for offices, retail spaces, and warehouses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-white text-secondary-600 px-8 py-3 rounded-lg font-semibold hover:bg-secondary-50 transition-colors text-center"
            >
              Get Commercial Quote
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

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Whether you're relocating your business, downsizing operations, or simply decluttering your workspace, <strong>commercial junk removal in Portland and Oregon City</strong> requires specialized expertise and equipment. At Andrew and Sons, we provide comprehensive <strong>office cleanout services</strong> that minimize disruption to your business while maximizing efficiency and environmental responsibility.
          </p>

          <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">
            Why Businesses Choose Professional Commercial Junk Removal
          </h2>
          
          <p>
            Running a business is demanding enough without having to worry about disposing of old furniture, equipment, and accumulated clutter. Professional <strong>commercial junk removal services in Portland</strong> offer numerous advantages that make them essential for modern businesses:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary-600 mb-3">Time Efficiency</h3>
              <p>Focus on your core business activities while professionals handle the heavy lifting and disposal logistics.</p>
            </div>
            <div className="bg-secondary-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-secondary-600 mb-3">Cost-Effective</h3>
              <p>Avoid rental fees, disposal costs, and employee downtime associated with DIY cleanouts.</p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary-600 mb-3">Safety Compliance</h3>
              <p>Professional handling reduces workplace injury risks and ensures proper disposal of hazardous materials.</p>
            </div>
            <div className="bg-secondary-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-secondary-600 mb-3">Environmental Responsibility</h3>
              <p>Proper recycling and donation of items supports your company's sustainability goals.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">
            Comprehensive Commercial Junk Removal Services
          </h2>

          <h3 className="text-2xl font-semibold text-secondary-600 mt-8 mb-4">
            Office Furniture Removal
          </h3>
          <p>
            Outdated desks, chairs, filing cabinets, and conference tables can quickly accumulate in busy offices. Our <strong>office furniture removal services in Portland</strong> handle everything from single pieces to complete office liquidations. We carefully dismantle modular furniture systems and transport items safely, ensuring no damage to your property.
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li>Executive desks and workstations</li>
            <li>Office chairs and seating</li>
            <li>Filing cabinets and storage units</li>
            <li>Conference tables and meeting room furniture</li>
            <li>Reception area furniture</li>
            <li>Modular cubicle systems</li>
          </ul>

          <h3 className="text-2xl font-semibold text-secondary-600 mt-8 mb-4">
            Electronic Waste (E-Waste) Disposal
          </h3>
          <p>
            Technology upgrades leave businesses with obsolete computers, printers, and electronic equipment. Our certified <strong>e-waste disposal services</strong> ensure compliance with environmental regulations while protecting sensitive data through secure destruction protocols.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6">
            <h4 className="text-lg font-semibold text-yellow-800 mb-2">Data Security Guarantee</h4>
            <p className="text-yellow-700">
              We provide certificates of data destruction for all electronic devices, ensuring your confidential business information remains secure throughout the disposal process.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-secondary-600 mt-8 mb-4">
            Retail Space Cleanouts
          </h3>
          <p>
            Retail businesses face unique challenges when closing locations or renovating spaces. Our team understands the time-sensitive nature of retail operations and works efficiently to clear fixtures, inventory, and equipment with minimal disruption to neighboring businesses.
          </p>

          <h3 className="text-2xl font-semibold text-secondary-600 mt-8 mb-4">
            Warehouse and Industrial Cleanouts
          </h3>
          <p>
            Large-scale industrial cleanouts require specialized equipment and expertise. We handle heavy machinery removal, scrap metal disposal, and bulk material cleanouts for warehouses, manufacturing facilities, and distribution centers throughout the Portland metro area.
          </p>

          <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">
            The Commercial Cleanout Process: Streamlined for Business
          </h2>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Initial Assessment & Quote</h4>
                <p>We conduct an on-site evaluation to understand your specific needs, timeline, and budget requirements. Our detailed quote includes all services with no hidden fees.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Scheduling & Planning</h4>
                <p>We work around your business hours to minimize disruption. Evening and weekend appointments available for time-sensitive projects.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Professional Removal</h4>
                <p>Our trained team arrives with appropriate equipment and protective materials to safely remove all designated items without damage to your property.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Responsible Disposal</h4>
                <p>Items are sorted for donation, recycling, or proper disposal according to local regulations and your company's sustainability policies.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                5
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Final Cleanup & Documentation</h4>
                <p>We provide a thorough cleanup of the work area and detailed documentation for tax deductions and compliance records.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">
            Industries We Serve in Portland & Oregon City
          </h2>

          <p>
            Our <strong>commercial junk removal expertise</strong> spans across various industries, each with unique requirements and challenges:
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <h4 className="text-lg font-semibold text-primary-600 mb-2">Healthcare Facilities</h4>
              <p className="text-sm text-gray-600">Medical equipment, furniture, and compliant disposal of regulated materials.</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <h4 className="text-lg font-semibold text-secondary-600 mb-2">Educational Institutions</h4>
              <p className="text-sm text-gray-600">Classroom furniture, outdated technology, and large-scale facility cleanouts.</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <h4 className="text-lg font-semibold text-primary-600 mb-2">Financial Services</h4>
              <p className="text-sm text-gray-600">Secure document destruction, office furniture, and technology upgrades.</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <h4 className="text-lg font-semibold text-secondary-600 mb-2">Manufacturing</h4>
              <p className="text-sm text-gray-600">Industrial equipment, scrap materials, and facility decommissioning.</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <h4 className="text-lg font-semibold text-primary-600 mb-2">Retail & Hospitality</h4>
              <p className="text-sm text-gray-600">Store fixtures, restaurant equipment, and renovation cleanouts.</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <h4 className="text-lg font-semibold text-secondary-600 mb-2">Technology Companies</h4>
              <p className="text-sm text-gray-600">Server equipment, workstations, and secure e-waste disposal.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">
            Sustainable Business Practices: Our Environmental Commitment
          </h2>

          <p>
            Modern businesses prioritize environmental responsibility, and our <strong>commercial junk removal services in Oregon</strong> support these goals through comprehensive recycling and donation programs:
          </p>

          <h3 className="text-2xl font-semibold text-secondary-600 mt-8 mb-4">
            Donation Programs
          </h3>
          <p>
            Functional office furniture and equipment are donated to local nonprofits, schools, and community organizations. We provide documentation for tax deduction purposes and can coordinate with your preferred charitable partners.
          </p>

          <h3 className="text-2xl font-semibold text-secondary-600 mt-8 mb-4">
            Recycling Initiatives
          </h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Metal recycling:</strong> Filing cabinets, desk frames, and industrial equipment</li>
            <li><strong>Paper and cardboard:</strong> Documents, packaging, and office supplies</li>
            <li><strong>Electronic recycling:</strong> Computers, monitors, and telecommunications equipment</li>
            <li><strong>Plastic materials:</strong> Office supplies, furniture components, and packaging</li>
          </ul>

          <h3 className="text-2xl font-semibold text-secondary-600 mt-8 mb-4">
            Waste Diversion Statistics
          </h3>
          <div className="bg-green-50 p-6 rounded-lg">
            <p className="text-green-800 font-semibold mb-2">Our Environmental Impact:</p>
            <ul className="text-green-700 space-y-1">
              <li>• 85% of commercial items diverted from landfills</li>
              <li>• Over 500 tons of materials recycled annually</li>
              <li>• Partnership with 25+ local charities and nonprofits</li>
              <li>• Certified e-waste processing for data security</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">
            Cost Factors for Commercial Junk Removal
          </h2>

          <p>
            Understanding the investment in professional <strong>office cleanout services</strong> helps businesses budget effectively. Several factors influence pricing:
          </p>

          <div className="space-y-4 my-6">
            <div className="border-l-4 border-primary-500 pl-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Volume and Weight</h4>
              <p>The amount and type of materials significantly impact costs. Heavy items like safes or industrial equipment require specialized handling.</p>
            </div>

            <div className="border-l-4 border-secondary-500 pl-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Accessibility</h4>
              <p>Upper floors, narrow hallways, or limited parking may require additional time and equipment, affecting overall pricing.</p>
            </div>

            <div className="border-l-4 border-primary-500 pl-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Timeline Requirements</h4>
              <p>Rush jobs or after-hours service may include premium pricing, while flexible scheduling often reduces costs.</p>
            </div>

            <div className="border-l-4 border-secondary-500 pl-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Special Handling</h4>
              <p>Hazardous materials, confidential documents, or valuable items requiring special care may incur additional fees.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">
            Preparing for Your Commercial Cleanout
          </h2>

          <p>
            Maximize efficiency and minimize costs with proper preparation for your <strong>Portland office cleanout</strong>:
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Pre-Cleanout Checklist</h3>
            <ul className="text-blue-700 space-y-2">
              <li>✓ Inventory items to be removed vs. kept</li>
              <li>✓ Identify confidential materials requiring secure destruction</li>
              <li>✓ Remove personal belongings and valuable items</li>
              <li>✓ Coordinate with building management for elevator/loading dock access</li>
              <li>✓ Notify employees of cleanout schedule and any workspace restrictions</li>
              <li>✓ Gather documentation for potential tax deductions</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">
            Service Areas for Commercial Junk Removal
          </h2>

          <p>
            Andrew and Sons provides reliable <strong>commercial junk removal services</strong> throughout the Portland metropolitan area and surrounding communities:
          </p>

          <div className="grid md:grid-cols-3 gap-4 my-6">
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

          <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">
            Why Choose Andrew and Sons for Commercial Services?
          </h2>

          <div className="space-y-6">
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary-600 mb-3">Licensed and Insured</h3>
              <p>Full commercial liability insurance and proper licensing protect your business from potential risks during the cleanout process.</p>
            </div>

            <div className="bg-secondary-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-secondary-600 mb-3">Flexible Scheduling</h3>
              <p>We work around your business operations with evening, weekend, and holiday service options to minimize disruption.</p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary-600 mb-3">Transparent Pricing</h3>
              <p>Detailed quotes with no hidden fees help you budget accurately for your commercial cleanout project.</p>
            </div>

            <div className="bg-secondary-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-secondary-600 mb-3">Professional Team</h3>
              <p>Uniformed, background-checked employees maintain professionalism and security standards appropriate for business environments.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-secondary-50 to-primary-50 p-8 rounded-lg mt-12 mb-8">
            <h3 className="text-2xl font-bold text-primary-600 mb-4">
              Ready to Streamline Your Business Space?
            </h3>
            <p className="text-lg mb-6">
              Let our professional team handle your commercial cleanout needs so you can focus on what matters most – running your business. Contact us today for a free, no-obligation quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
              >
                Get Free Commercial Quote
              </Link>
              <a
                href="tel:5037532329"
                className="bg-secondary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-700 transition-colors text-center"
              >
                Call (503) 753-2329
              </a>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">
            Frequently Asked Questions About Commercial Junk Removal
          </h2>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">How quickly can you complete a commercial cleanout?</h4>
              <p>Timeline varies based on project size and complexity. Small office cleanouts can often be completed in a few hours, while large-scale projects may take several days. We provide realistic timelines during our initial assessment.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Do you provide certificates for donated items?</h4>
              <p>Yes, we provide detailed documentation of all donated items for tax deduction purposes, including receipts from receiving organizations and fair market value assessments.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Can you work around our business hours?</h4>
              <p>Absolutely. We offer flexible scheduling including evenings, weekends, and holidays to minimize disruption to your business operations.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">What happens to confidential documents?</h4>
              <p>We provide secure document destruction services with certificates of destruction. All confidential materials are handled according to strict security protocols.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Do you handle hazardous materials?</h4>
              <p>We can coordinate disposal of certain regulated materials through certified partners. During our assessment, we'll identify any items requiring special handling and provide appropriate solutions.</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Related Services:</strong> Explore our other business solutions including{' '}
              <Link href="/blog/construction-debris-removal-portland" className="text-primary-600 hover:text-primary-700">
                construction debris removal
              </Link>
              ,{' '}
              <Link href="/blog/estate-cleanout-services-oregon-city" className="text-primary-600 hover:text-primary-700">
                estate cleanout services
              </Link>
              , and{' '}
              <Link href="/services" className="text-primary-600 hover:text-primary-700">
                residential junk removal
              </Link>
              .
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}
