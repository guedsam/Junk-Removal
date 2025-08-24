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
    { name: 'Oregon City', slug: 'oregon-city-junk-removal' },
    { name: 'Portland', slug: 'portland-junk-removal' },
    { name: 'Clackamas', slug: 'clackamas-junk-removal' },
    { name: 'Gresham', slug: 'gresham-junk-removal' },
    { name: 'Milwaukie', slug: 'milwaukie-junk-removal' },
    { name: 'Happy Valley', slug: 'happy-valley-junk-removal' },
    { name: 'Lake Oswego', slug: 'lake-oswego-junk-removal' },
    { name: 'West Linn', slug: 'west-linn-junk-removal' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/images/junk-removal/icon.png" 
                alt="Andrew and Sons Junk Removal Icon"
                className="w-8 h-8"
              />
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
                <a href="tel:+15037532329" className="text-primary-400 hover:text-primary-300">
                  (503) 753-2329
                </a>
              </p>
              <p className="text-sm">
                <span className="font-semibold">Email:</span>{' '}
                <a href="mailto:junk@asjunkremoval.com" className="text-primary-400 hover:text-primary-300">
                  junk@asjunkremoval.com
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
                <li key={area.slug}>
                  <Link href={`/${area.slug}`} className="text-gray-300 hover:text-primary-400 text-sm transition-colors duration-200">
                    {area.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-gray-700">
                <Link href="/coverage-areas" className="text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors duration-200">
                  View All Coverage Areas →
                </Link>
              </li>
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
