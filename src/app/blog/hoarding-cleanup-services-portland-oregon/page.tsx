import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Compassionate Hoarding Cleanup Services in Portland & Oregon City | Andrew and Sons',
  description: 'Professional, discreet hoarding cleanup services in Portland, Oregon City, and surrounding areas. Compassionate team helps restore homes safely and respectfully.',
  keywords: 'hoarding cleanup Portland, hoarding services Oregon City, clutter removal Portland, hoarding help Oregon, compassionate cleanup services',
  openGraph: {
    title: 'Compassionate Hoarding Cleanup Services in Portland & Oregon City',
    description: 'Professional, discreet hoarding cleanup services in Portland, Oregon City, and surrounding areas. Compassionate team helps restore homes safely and respectfully.',
    url: 'https://asjunkremoval.com/blog/hoarding-cleanup-services-portland-oregon',
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
    title: 'Compassionate Hoarding Cleanup Services in Portland & Oregon City',
    description: 'Professional, discreet hoarding cleanup services in Portland, Oregon City, and surrounding areas. Compassionate team helps restore homes safely and respectfully.',
    images: ['https://asjunkremoval.com/og-image.jpg'],
  },
}

export default function HoardingCleanupServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Compassionate Hoarding Cleanup Services in Portland & Oregon City
          </h1>
          <p className="text-xl mb-8 text-primary-100">
            Professional, discreet, and respectful hoarding cleanup services that help restore homes and lives with dignity and care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-center"
            >
              Get Compassionate Help Today
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

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Hoarding situations require more than just junk removal – they need compassion, understanding, and professional expertise. At Andrew and Sons, we specialize in <strong>hoarding cleanup services in Portland, Oregon City, and surrounding areas</strong>, providing discreet and respectful assistance to help individuals and families reclaim their homes and their lives.
          </p>

          <h2 className="text-3xl font-bold text-secondary-600 mt-12 mb-6">
            Understanding Hoarding: More Than Just Clutter
          </h2>
          
          <p>
            Hoarding disorder affects millions of Americans, creating living situations that can become unsafe and overwhelming. Unlike typical clutter, hoarding involves persistent difficulty discarding possessions, regardless of their actual value. This can lead to:
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li><strong>Safety hazards:</strong> Blocked exits, fire risks, and structural damage</li>
            <li><strong>Health concerns:</strong> Poor air quality, pest infestations, and sanitation issues</li>
            <li><strong>Social isolation:</strong> Embarrassment preventing visitors or maintenance workers</li>
            <li><strong>Financial strain:</strong> Inability to use living spaces effectively</li>
            <li><strong>Emotional distress:</strong> Overwhelming feelings of shame and helplessness</li>
          </ul>

          <p>
            Our <strong>hoarding cleanup services in Oregon City and Portland</strong> address these challenges with sensitivity and professionalism, working alongside individuals and families to create safe, livable spaces once again.
          </p>

          <h2 className="text-3xl font-bold text-secondary-600 mt-12 mb-6">
            Our Compassionate Approach to Hoarding Cleanup
          </h2>

          <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">
            1. Initial Consultation and Assessment
          </h3>
          <p>
            Every hoarding situation is unique. We begin with a confidential consultation to understand the specific challenges and goals. Our team assesses the property's condition, identifies safety concerns, and develops a customized cleanup plan that respects the individual's pace and comfort level.
          </p>

          <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">
            2. Collaborative Decision-Making
          </h3>
          <p>
            We never make decisions about possessions without the homeowner's input. Our <strong>Portland hoarding cleanup specialists</strong> work alongside clients, helping them sort through items and make informed decisions about what to keep, donate, or dispose of. This collaborative approach helps build confidence and reduces anxiety.
          </p>

          <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">
            3. Safe and Systematic Removal
          </h3>
          <p>
            Our trained professionals follow strict safety protocols during cleanup. We wear appropriate protective equipment, ensure proper ventilation, and carefully navigate cluttered spaces. Items are sorted into categories: keep, donate, recycle, and dispose, with everything handled according to local regulations.
          </p>

          <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">
            4. Deep Cleaning and Sanitization
          </h3>
          <p>
            Once items are removed, we provide thorough cleaning and sanitization services. This includes addressing any pest issues, cleaning surfaces, and ensuring the space is safe and healthy for habitation.
          </p>

          <h2 className="text-3xl font-bold text-secondary-600 mt-12 mb-6">
            Why Choose Andrew and Sons for Hoarding Cleanup in Oregon?
          </h2>

          <div className="bg-primary-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-primary-600 mb-4">
              Discretion and Confidentiality
            </h3>
            <p>
              We understand the sensitive nature of hoarding situations. Our team arrives in unmarked vehicles and maintains complete confidentiality throughout the process. Your privacy is our priority.
            </p>
          </div>

          <div className="bg-secondary-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-secondary-600 mb-4">
              Trained and Compassionate Staff
            </h3>
            <p>
              Our team receives specialized training in hoarding cleanup procedures and sensitivity. We approach each situation with empathy, patience, and understanding, never judging or rushing the process.
            </p>
          </div>

          <div className="bg-primary-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-primary-600 mb-4">
              Comprehensive Services
            </h3>
            <p>
              From initial assessment to final cleaning, we handle every aspect of the hoarding cleanup process. We also coordinate with other professionals like therapists, social workers, and contractors when needed.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-secondary-600 mt-12 mb-6">
            The Hoarding Cleanup Process: What to Expect
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-primary-500 pl-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Phase 1: Planning and Preparation</h4>
              <p>We develop a detailed plan, obtain necessary permits, and prepare the workspace for safe cleanup operations.</p>
            </div>

            <div className="border-l-4 border-secondary-500 pl-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Phase 2: Sorting and Decision-Making</h4>
              <p>Working room by room, we help sort items into categories while respecting the homeowner's attachment to possessions.</p>
            </div>

            <div className="border-l-4 border-primary-500 pl-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Phase 3: Removal and Disposal</h4>
              <p>Items are carefully removed and disposed of responsibly, with donations going to local charities whenever possible.</p>
            </div>

            <div className="border-l-4 border-secondary-500 pl-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Phase 4: Cleaning and Restoration</h4>
              <p>Deep cleaning, sanitization, and any necessary repairs to restore the home to a safe, livable condition.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-secondary-600 mt-12 mb-6">
            Supporting Recovery and Prevention
          </h2>

          <p>
            Our <strong>hoarding cleanup services in Portland and Oregon City</strong> extend beyond just removing items. We provide resources and referrals to mental health professionals who specialize in hoarding disorder. We also offer maintenance services to help prevent re-accumulation and support long-term recovery.
          </p>

          <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">
            Ongoing Support Services
          </h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Regular maintenance cleanouts</li>
            <li>Organizational system setup</li>
            <li>Referrals to therapists and support groups</li>
            <li>Family education and support</li>
            <li>Emergency cleanup services</li>
          </ul>

          <h2 className="text-3xl font-bold text-secondary-600 mt-12 mb-6">
            Areas We Serve for Hoarding Cleanup
          </h2>

          <p>
            Andrew and Sons provides compassionate <strong>hoarding cleanup services</strong> throughout the greater Portland metropolitan area, including:
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <ul className="list-disc pl-6">
              <li>Portland</li>
              <li>Oregon City</li>
              <li>Clackamas</li>
              <li>Milwaukie</li>
              <li>Happy Valley</li>
            </ul>
            <ul className="list-disc pl-6">
              <li>Lake Oswego</li>
              <li>West Linn</li>
              <li>Gresham</li>
              <li>Tigard</li>
              <li>Beaverton</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-secondary-600 mt-12 mb-6">
            Taking the First Step: How to Get Help
          </h2>

          <p>
            Reaching out for hoarding cleanup help takes courage, and we honor that bravery. Whether you're dealing with your own hoarding situation or helping a loved one, we're here to provide non-judgmental support and professional assistance.
          </p>

          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-lg mt-8 mb-8">
            <h3 className="text-2xl font-bold text-secondary-600 mb-4">
              Ready to Reclaim Your Space?
            </h3>
            <p className="text-lg mb-6">
              Our compassionate team is standing by to help you or your loved one take the first step toward recovery. All consultations are confidential and free of charge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
              >
                Schedule Free Consultation
              </Link>
              <a
                href="tel:5037532329"
                className="bg-secondary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-700 transition-colors text-center"
              >
                Call (503) 753-2329 Now
              </a>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-secondary-600 mt-12 mb-6">
            Frequently Asked Questions About Hoarding Cleanup
          </h2>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">How much does hoarding cleanup cost?</h4>
              <p>Costs vary based on the size of the property, amount of items, and complexity of the situation. We provide free estimates and work with families to find affordable solutions.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">How long does hoarding cleanup take?</h4>
              <p>Timeline depends on the severity of the hoarding situation. Simple cleanouts may take 1-2 days, while complex cases can take several weeks. We work at a pace that's comfortable for the homeowner.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Do you work with insurance companies?</h4>
              <p>Yes, we can work with insurance companies when hoarding cleanup is covered under certain circumstances. We provide detailed documentation for insurance claims.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Is the service confidential?</h4>
              <p>Absolutely. We maintain complete confidentiality and discretion throughout the entire process. Our team arrives in unmarked vehicles and respects your privacy.</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Related Services:</strong> Learn more about our other specialized services including{' '}
              <Link href="/blog/estate-cleanout-services-oregon-city" className="text-primary-600 hover:text-primary-700">
                estate cleanout services
              </Link>
              ,{' '}
              <Link href="/blog/construction-debris-removal-portland" className="text-primary-600 hover:text-primary-700">
                construction debris removal
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
