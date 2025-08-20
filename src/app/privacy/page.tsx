import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Andrew and Sons Junk Removal | Oregon City & Portland',
  description: 'Privacy Policy for Andrew and Sons Junk Removal services in Oregon City, Portland, and surrounding areas. Learn how we protect your personal information.',
  keywords: 'privacy policy, Andrew and Sons Junk Removal, Oregon City, Portland, data protection',
  openGraph: {
    title: 'Privacy Policy | Andrew and Sons Junk Removal',
    description: 'Privacy Policy for Andrew and Sons Junk Removal services. Learn how we protect your personal information.',
  },
}

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: January 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              At Andrew and Sons Junk Removal, we are committed to protecting your privacy and personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you use our services 
              or visit our website.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Information We Collect</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Personal Information</h3>
            <p className="mb-6">
              We may collect the following personal information when you contact us or use our services:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Name and contact information (phone number, email address, mailing address)</li>
              <li>Service address and location details</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
              <li>Details about the items you need removed</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Automatically Collected Information</h3>
            <p className="mb-6">
              When you visit our website, we may automatically collect:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>IP address and browser information</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website information</li>
              <li>Device and operating system information</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How We Use Your Information</h2>
            
            <p className="mb-6">
              We use your information for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Providing junk removal services and scheduling appointments</li>
              <li>Processing payments and maintaining service records</li>
              <li>Communicating with you about our services</li>
              <li>Improving our website and services</li>
              <li>Sending promotional materials (only with your consent)</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Information Sharing and Disclosure</h2>
            
            <p className="mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our business (payment processors, scheduling software, etc.)</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
              <li><strong>Business Protection:</strong> To protect our rights, property, or safety, or that of our customers or others</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of business assets</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Data Security</h2>
            
            <p className="mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Secure data transmission using SSL encryption</li>
              <li>Limited access to personal information on a need-to-know basis</li>
              <li>Regular security assessments and updates</li>
              <li>Secure storage of physical and electronic records</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Cookies and Tracking Technologies</h2>
            
            <p className="mb-6">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. 
              Cookies are small files stored on your device that help us:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Improve website functionality and user experience</li>
              <li>Provide relevant content and advertisements</li>
            </ul>
            <p className="mb-6">
              You can control cookie settings through your browser preferences, though disabling cookies may affect website functionality.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Your Rights and Choices</h2>
            
            <p className="mb-6">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Access:</strong> Request access to the personal information we have about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
            </ul>
            <p className="mb-6">
              To exercise these rights, please contact us using the information provided below.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Third-Party Links</h2>
            
            <p className="mb-6">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices 
              or content of these external sites. We encourage you to review the privacy policies of any third-party 
              websites you visit.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Children's Privacy</h2>
            
            <p className="mb-6">
              Our services are not directed to children under the age of 13, and we do not knowingly collect personal 
              information from children under 13. If we become aware that we have collected personal information from 
              a child under 13, we will take steps to delete such information.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Changes to This Privacy Policy</h2>
            
            <p className="mb-6">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
              We will notify you of any material changes by posting the updated policy on our website and updating the 
              "Last updated" date. Your continued use of our services after any changes constitutes acceptance of the 
              updated Privacy Policy.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Contact Information</h2>
            
            <p className="mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, 
              please contact us:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Andrew and Sons Junk Removal</h3>
              <div className="space-y-2">
                <p><strong>Phone:</strong> <a href="tel:+15037532329" className="text-primary-600 hover:text-primary-700">(503) 753-2329</a></p>
                <p><strong>Email:</strong> <a href="mailto:junk@asjunkremoval.com" className="text-primary-600 hover:text-primary-700">junk@asjunkremoval.com</a></p>
                <p><strong>Service Areas:</strong> Oregon City, Portland, and surrounding areas</p>
              </div>
            </div>

            <p className="mb-8">
              We are committed to addressing your privacy concerns promptly and will respond to your inquiries within 
              a reasonable timeframe.
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link href="/" className="text-primary-600 hover:text-primary-700 font-semibold">
                ← Back to Home
              </Link>
              <div className="flex gap-4">
                <Link href="/terms" className="text-primary-600 hover:text-primary-700 font-semibold">
                  Terms of Service →
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
