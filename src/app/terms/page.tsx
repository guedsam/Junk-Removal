import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Andrew and Sons Junk Removal | Oregon City & Portland',
  description: 'Terms of Service for Andrew and Sons Junk Removal services in Oregon City, Portland, and surrounding areas. Learn about our service terms and conditions.',
  keywords: 'terms of service, Andrew and Sons Junk Removal, Oregon City, Portland, service conditions',
  openGraph: {
    title: 'Terms of Service | Andrew and Sons Junk Removal',
    description: 'Terms of Service for Andrew and Sons Junk Removal services. Learn about our service terms and conditions.',
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link href="/" className="text-primary-600 hover:text-primary-700 font-semibold mb-6 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: January 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              These Terms of Service ("Terms") govern your use of Andrew and Sons Junk Removal services and website. 
              By using our services or website, you agree to be bound by these Terms. Please read them carefully.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">1. Services Overview</h2>
            
            <p className="mb-6">
              Andrew and Sons Junk Removal provides professional junk removal and hauling services throughout Oregon City, 
              Portland, and surrounding areas. Our services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Residential junk removal and cleanouts</li>
              <li>Commercial junk removal and office cleanouts</li>
              <li>Furniture and appliance removal</li>
              <li>Construction debris cleanup</li>
              <li>Yard waste removal</li>
              <li>Estate and hoarding cleanouts</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">2. Service Agreement and Scheduling</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Estimates and Pricing</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>All estimates are provided free of charge and are valid for 30 days</li>
              <li>Final pricing is based on the actual volume and type of items removed</li>
              <li>Prices may vary from estimates if the scope of work changes significantly</li>
              <li>Additional fees may apply for hazardous materials or difficult access situations</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Scheduling and Appointments</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Service appointments are scheduled based on availability</li>
              <li>We provide 2-hour arrival windows for scheduled appointments</li>
              <li>Same-day service is available when possible but not guaranteed</li>
              <li>Weather conditions may affect scheduling and service delivery</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">3. Payment Terms</h2>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Payment is due upon completion of services</li>
              <li>We accept cash, check, and major credit cards</li>
              <li>A service fee may apply for returned checks</li>
              <li>For commercial accounts, payment terms may be arranged in advance</li>
              <li>Late payment fees may apply to overdue commercial accounts</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">4. Acceptable and Prohibited Items</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Items We Accept</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Household furniture and appliances</li>
              <li>Electronics and office equipment</li>
              <li>Construction and renovation debris</li>
              <li>Yard waste and organic materials</li>
              <li>General household and commercial waste</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Prohibited Items</h3>
            <p className="mb-4">
              For safety and legal reasons, we cannot accept the following items:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Hazardous chemicals, paint, and solvents</li>
              <li>Asbestos-containing materials</li>
              <li>Medical and biological waste</li>
              <li>Radioactive materials</li>
              <li>Explosives and ammunition</li>
              <li>Gasoline, propane, and other flammable liquids</li>
              <li>Human or animal waste</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">5. Customer Responsibilities</h2>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide accurate information about items to be removed</li>
              <li>Ensure safe and clear access to removal areas</li>
              <li>Be present during service or arrange for authorized representation</li>
              <li>Identify and separate any items not to be removed</li>
              <li>Disclose any known hazardous materials or special conditions</li>
              <li>Secure pets and ensure a safe working environment</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">6. Liability and Insurance</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Liability</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>We carry comprehensive general liability and workers' compensation insurance</li>
              <li>We are responsible for damage caused by our negligence during service</li>
              <li>Our liability is limited to the actual value of damaged property</li>
              <li>We are not liable for pre-existing damage or normal wear and tear</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Customer Liability</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Customers are responsible for identifying valuable or sentimental items</li>
              <li>We are not liable for items mistakenly removed due to unclear instructions</li>
              <li>Customers assume responsibility for any prohibited items not disclosed</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">7. Cancellation and Rescheduling</h2>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Services may be cancelled or rescheduled with at least 2 hours notice</li>
              <li>Same-day cancellations may incur a service fee</li>
              <li>We reserve the right to reschedule due to weather or emergency conditions</li>
              <li>No-show appointments may be subject to a service charge</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">8. Environmental Responsibility</h2>
            
            <p className="mb-6">
              We are committed to environmentally responsible disposal practices:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>We donate usable items to local charities when possible</li>
              <li>Recyclable materials are taken to appropriate recycling facilities</li>
              <li>We comply with all local, state, and federal disposal regulations</li>
              <li>Hazardous materials are disposed of through certified facilities</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">9. Dispute Resolution</h2>
            
            <p className="mb-6">
              In the event of a dispute:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>We encourage direct communication to resolve issues promptly</li>
              <li>Disputes will be governed by Oregon state law</li>
              <li>Any legal proceedings will be conducted in Clackamas County, Oregon</li>
              <li>We reserve the right to pursue collection of unpaid accounts</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">10. Website Terms</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Use of Website</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Our website is provided for informational and service purposes</li>
              <li>You may not use our website for any unlawful or prohibited purpose</li>
              <li>We reserve the right to modify or discontinue website features</li>
              <li>Website content is protected by copyright and trademark laws</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">User Content</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Any content you submit through our website becomes our property</li>
              <li>You grant us permission to use submitted content for business purposes</li>
              <li>You are responsible for the accuracy of information you provide</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">11. Privacy and Data Protection</h2>
            
            <p className="mb-6">
              Your privacy is important to us. Please review our Privacy Policy for detailed information about how we 
              collect, use, and protect your personal information. By using our services, you consent to our privacy practices 
              as outlined in our Privacy Policy.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">12. Modifications to Terms</h2>
            
            <p className="mb-6">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately 
              upon posting on our website. Your continued use of our services after any changes constitutes acceptance 
              of the modified terms. We encourage you to review these terms periodically.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">13. Severability</h2>
            
            <p className="mb-6">
              If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions will 
              continue in full force and effect. The unenforceable provision will be replaced with an enforceable 
              provision that most closely reflects the original intent.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">14. Contact Information</h2>
            
            <p className="mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Andrew and Sons Junk Removal</h3>
              <div className="space-y-2">
                <p><strong>Phone:</strong> <a href="tel:+15037532329" className="text-primary-600 hover:text-primary-700">(503) 753-2329</a></p>
                <p><strong>Email:</strong> <a href="mailto:junk@asjunkremoval.com" className="text-primary-600 hover:text-primary-700">junk@asjunkremoval.com</a></p>
                <p><strong>Service Areas:</strong> Oregon City, Portland, and surrounding areas</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">15. Acceptance of Terms</h2>
            
            <p className="mb-8">
              By scheduling or using our services, or by using our website, you acknowledge that you have read, 
              understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, 
              please do not use our services or website.
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link href="/" className="text-primary-600 hover:text-primary-700 font-semibold">
                ← Back to Home
              </Link>
              <div className="flex gap-4">
                <Link href="/privacy" className="text-primary-600 hover:text-primary-700 font-semibold">
                  Privacy Policy
                </Link>
                <Link href="/contact" className="btn-primary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
