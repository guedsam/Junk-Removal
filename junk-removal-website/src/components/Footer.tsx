import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    'Residential Junk Removal',
    'Commercial Junk Removal',
    'Furniture Removal',
    'Appliance Removal',
    'Yard Waste Removal',
    'Construction Debris'
  ]

  const areas = [
    'Oregon City',
    'Portland',
    'Clackamas',
    'Gresham',
    'Milwaukie',
    'Happy Valley',
    'Lake Oswego',
    'West Linn'
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">Andrew and Sons Junk Removal</h3>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Fast, affordable, and eco-friendly junk removal services in Oregon City, Portland, and surrounding areas. Same-day pickup available.
            </p>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-semibold">Phone:</span>{' '}
                <a href="tel:+15035551234" className="text-primary-400 hover:text-primary-300">
                  (503) 555-1234
                </a>
              </p>
              <p className="text-sm">
                <span className="font-semibold">Email:</span>{' '}
                <a href="mailto:info@oregoncityjunkremoval.com" className="text-primary-400 hover:text-primary-300">
                  info@oregoncityjunkremoval.com
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-gray-300 hover:text-primary-400 text-sm transition-colors duration-200">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Coverage Areas</h4>
            <ul className="space-y-2">
              {areas.map((area) => (
                <li key={area}>
                  <Link href="/coverage-areas" className="text-gray-300 hover:text-primary-400 text-sm transition-colors duration-200">
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary-400 text-sm transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-300 hover:text-primary-400 text-sm transition-colors duration-200">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-primary-400 text-sm transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary-400 text-sm transition-colors duration-200">
                  Get Free Quote
                </Link>
              </li>
            </ul>
            
            {/* CTA Button */}
            <div className="mt-6">
              <Link href="/contact" className="btn-primary block text-center">
                Get Your Free Estimate
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Andrew and Sons Junk Removal. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
