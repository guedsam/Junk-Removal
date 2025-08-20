import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Construction Debris Removal in Portland & Oregon City | Andrew and Sons',
  description: 'Professional construction debris removal services in Portland and Oregon City. Safe, efficient cleanup of renovation waste, demolition debris, and construction materials. Licensed and insured.',
  keywords: 'construction debris removal Portland, construction cleanup Oregon City, demolition debris removal, renovation waste removal Oregon, construction junk removal Portland',
  openGraph: {
    title: 'Construction Debris Removal in Portland & Oregon City | Andrew and Sons',
    description: 'Professional construction debris removal services for contractors and homeowners. Safe, efficient cleanup of all construction waste.',
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
              Construction Debris Removal in Portland & Oregon City
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional construction debris removal services for contractors, builders, and homeowners. Safe, efficient cleanup of all construction waste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Free Quote
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
                <span>9 min read</span>
                <span>•</span>
                <span>Construction Services</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12">
              <img 
                src="/images/junk-removal/construction-debris-removal-portland.webp" 
                alt="Professional construction debris removal service in Portland Oregon"
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 font-medium">
                Construction and renovation projects generate significant amounts of debris that require proper disposal. Whether you're a contractor working on a commercial build, a homeowner tackling a DIY renovation, or managing a demolition project in Portland or Oregon City, Andrew and Sons Junk Removal provides professional construction debris removal services that keep your project site clean, safe, and compliant with local regulations.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Professional Construction Debris Removal Matters</h2>
              
              <p className="mb-6">
                Construction debris removal is more than just hauling away waste. It's about maintaining a safe work environment, meeting environmental regulations, and ensuring your project stays on schedule. Improper disposal of construction materials can result in fines, safety hazards, and project delays.
              </p>

              <p className="mb-6">
                Andrew and Sons understands the unique challenges of construction waste management. Our team is equipped to handle everything from small renovation debris to large-scale demolition waste, ensuring proper disposal and recycling of materials whenever possible.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Construction Debris We Handle</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Demolition Debris</h3>
              
              <ul className="mb-6 space-y-2">
                <li>Drywall and plaster removal</li>
                <li>Flooring materials (carpet, hardwood, tile, vinyl)</li>
                <li>Roofing materials (shingles, underlayment, gutters)</li>
                <li>Concrete and masonry debris</li>
                <li>Metal fixtures and structural components</li>
                <li>Windows and doors</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Renovation Waste</h3>
              
              <ul className="mb-6 space-y-2">
                <li>Kitchen and bathroom fixtures</li>
                <li>Cabinets and countertops</li>
                <li>Appliances and plumbing fixtures</li>
                <li>Electrical components and wiring</li>
                <li>Insulation materials</li>
                <li>Packaging materials and debris</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">New Construction Waste</h3>
              
              <ul className="mb-6 space-y-2">
                <li>Excess lumber and building materials</li>
                <li>Packaging from new materials</li>
                <li>Concrete forms and temporary structures</li>
                <li>Scrap metal and hardware</li>
                <li>Landscaping debris from site preparation</li>
              </ul>

              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mb-8">
                <h3 className="text-lg font-semibold text-primary-800 mb-2">Safety First</h3>
                <p className="text-primary-700">
                  Construction debris often contains hazardous materials like asbestos, lead paint, or chemicals. Our trained team knows how to identify and properly handle these materials according to Oregon state regulations and EPA guidelines.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Construction Debris Removal Process</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Project Assessment and Planning</h3>
              
              <p className="mb-4">
                We start every construction debris removal project with a thorough assessment:
              </p>

              <ul className="mb-6 space-y-2">
                <li>On-site evaluation of debris types and quantities</li>
                <li>Identification of hazardous materials requiring special handling</li>
                <li>Development of removal timeline to match your project schedule</li>
                <li>Coordination with your construction team and site manager</li>
                <li>Transparent pricing with no hidden fees</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Safe and Efficient Removal</h3>
              
              <p className="mb-4">
                Our experienced team uses proper equipment and techniques to ensure safe removal:
              </p>

              <ul className="mb-6 space-y-2">
                <li>Professional-grade trucks and containers for efficient hauling</li>
                <li>Proper safety equipment and protocols</li>
                <li>Careful handling to prevent damage to surrounding areas</li>
                <li>Sorting of materials for recycling and proper disposal</li>
                <li>Complete site cleanup after debris removal</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Responsible Disposal and Recycling</h3>
              
              <p className="mb-6">
                Andrew and Sons is committed to environmental responsibility in construction debris disposal. We work with certified recycling facilities and disposal sites throughout the Portland and Oregon City area to ensure materials are handled properly. Our goal is to divert 85% of construction debris from landfills through recycling and reuse programs.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Professional Construction Debris Removal</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Improved Safety</h3>
              <p className="mb-4">
                Construction sites with accumulated debris pose safety risks to workers and visitors. Regular debris removal keeps pathways clear, reduces trip hazards, and maintains a safer work environment.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Increased Efficiency</h3>
              <p className="mb-4">
                Clean, organized job sites allow workers to be more productive. When debris is regularly removed, teams can focus on construction tasks rather than navigating around waste materials.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Regulatory Compliance</h3>
              <p className="mb-4">
                Oregon has specific regulations for construction waste disposal. Our team ensures all debris is disposed of in compliance with local, state, and federal regulations, protecting you from potential fines.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional Appearance</h3>
              <p className="mb-6">
                Clean job sites reflect professionalism and attention to detail. This is especially important when working on residential projects where homeowners and neighbors can see the work area.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Specialized Services for Different Project Types</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Residential Renovations</h3>
              
              <p className="mb-4">
                Home renovation projects require careful handling to protect the property and minimize disruption to neighbors:
              </p>

              <ul className="mb-6 space-y-2">
                <li>Scheduled pickups to match renovation timeline</li>
                <li>Careful protection of landscaping and driveways</li>
                <li>Quiet, respectful service in residential neighborhoods</li>
                <li>Flexible scheduling for homeowner convenience</li>
                <li>Donation of reusable materials when possible</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Commercial Construction</h3>
              
              <p className="mb-4">
                Large commercial projects require robust debris removal capabilities:
              </p>

              <ul className="mb-6 space-y-2">
                <li>High-capacity trucks and containers for large volumes</li>
                <li>Regular scheduled pickups to maintain clean sites</li>
                <li>Coordination with project managers and site supervisors</li>
                <li>Compliance with commercial waste disposal regulations</li>
                <li>Detailed documentation and reporting when required</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Demolition Projects</h3>
              
              <p className="mb-6">
                Demolition generates large volumes of mixed debris requiring specialized handling:
              </p>

              <ul className="mb-6 space-y-2">
                <li>Pre-demolition hazardous material assessment</li>
                <li>Rapid debris removal to keep projects on schedule</li>
                <li>Proper handling of concrete, metal, and mixed materials</li>
                <li>Coordination with demolition contractors</li>
                <li>Site cleanup and preparation for next phase</li>
              </ul>

              <div className="bg-secondary-50 border-l-4 border-secondary-700 p-6 mb-8">
                <h3 className="text-lg font-semibold text-secondary-800 mb-2">Contractor Partnerships</h3>
                <p className="text-secondary-700">
                  We work with contractors throughout Portland and Oregon City to provide reliable, ongoing debris removal services. Ask about our contractor partnership programs and volume discounts for regular customers.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Environmental Responsibility in Construction Waste</h2>
              
              <p className="mb-4">
                Construction and demolition waste represents a significant portion of the waste stream. Andrew and Sons is committed to reducing the environmental impact of construction debris through:
              </p>

              <ul className="mb-6 space-y-2">
                <li><strong>Material Recovery:</strong> Salvaging reusable materials like lumber, fixtures, and hardware</li>
                <li><strong>Metal Recycling:</strong> Separating and recycling all metal components</li>
                <li><strong>Concrete Recycling:</strong> Processing concrete debris for use in new construction</li>
                <li><strong>Wood Recycling:</strong> Converting clean wood waste into mulch or biomass fuel</li>
                <li><strong>Proper Disposal:</strong> Ensuring hazardous materials are disposed of safely</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing and Scheduling</h2>
              
              <p className="mb-4">
                Construction debris removal pricing depends on several factors:
              </p>

              <ul className="mb-6 space-y-2">
                <li>Volume and weight of debris</li>
                <li>Types of materials requiring disposal</li>
                <li>Accessibility of the job site</li>
                <li>Frequency of pickup services</li>
                <li>Special handling requirements</li>
                <li>Distance to disposal facilities</li>
              </ul>

              <p className="mb-6">
                We offer flexible scheduling options to match your project timeline, including same-day service when available. Our team can work around your construction schedule to minimize disruption to ongoing work.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety and Compliance</h2>
              
              <p className="mb-4">
                Construction debris removal involves potential safety hazards and regulatory requirements. Andrew and Sons maintains:
              </p>

              <ul className="mb-6 space-y-2">
                <li>Full licensing and insurance coverage</li>
                <li>OSHA-compliant safety training for all team members</li>
                <li>Proper equipment for safe material handling</li>
                <li>Knowledge of Oregon environmental regulations</li>
                <li>Hazardous material handling certifications</li>
                <li>Workers' compensation and liability insurance</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Working with Andrew and Sons</h2>
              
              <p className="mb-4">
                When you choose Andrew and Sons for construction debris removal, you can expect:
              </p>

              <ul className="mb-6 space-y-2">
                <li><strong>Reliability:</strong> On-time service that keeps your project on schedule</li>
                <li><strong>Professionalism:</strong> Uniformed, trained team members who respect your job site</li>
                <li><strong>Flexibility:</strong> Scheduling that adapts to your project needs</li>
                <li><strong>Transparency:</strong> Clear pricing with no hidden fees or surprises</li>
                <li><strong>Environmental Responsibility:</strong> Maximum recycling and proper disposal</li>
                <li><strong>Local Expertise:</strong> Knowledge of Portland and Oregon City regulations</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started</h2>
              
              <p className="mb-6">
                Ready to streamline your construction project with professional debris removal? Andrew and Sons makes it easy to get started. We offer free on-site consultations to assess your needs and provide accurate pricing.
              </p>

              <p className="mb-8">
                Whether you're planning a small home renovation or managing a large commercial construction project, our team has the experience and equipment to handle your debris removal needs efficiently and responsibly.
              </p>

              <div className="text-center bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Clean Up Your Job Site?</h3>
                <p className="text-gray-600 mb-6">
                  Contact Andrew and Sons today for professional construction debris removal services in Portland and Oregon City.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+15037532329" className="btn-primary">
                    Call (503) 753-2329
                  </a>
                  <Link href="/contact" className="btn-outline">
                    Get Free Quote
                  </Link>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Licensed & Insured • Same-Day Service Available • Serving Contractors & Homeowners
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

              <Link href="/blog/estate-cleanout-services-oregon-city" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="/images/junk-removal/estate-cleanout-oregon-city.webp" 
                    alt="Estate cleanout services"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      Estate Cleanout Services in Oregon City & Portland
                    </h3>
                    <p className="text-gray-600">
                      Compassionate estate cleanout services to help families during difficult times.
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
