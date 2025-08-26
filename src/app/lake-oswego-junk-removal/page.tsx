import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lake Oswego Junk Removal Services | AS Junk Removal | Same-Day Pickup',
  description: 'Professional junk removal services in Lake Oswego, OR. Same-day pickup, eco-friendly disposal, and competitive pricing. Serving all Lake Oswego neighborhoods.',
  keywords: 'Lake Oswego junk removal, junk hauling Lake Oswego, furniture removal Lake Oswego, appliance disposal Lake Oswego, construction debris Lake Oswego',
  openGraph: {
    title: 'Lake Oswego Junk Removal Services | AS Junk Removal',
    description: 'Professional junk removal services in Lake Oswego, OR. Same-day pickup, eco-friendly disposal, and competitive pricing.',
    url: 'https://asjunkremoval.com/lake-oswego-junk-removal',
    siteName: 'AS Junk Removal',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lake Oswego Junk Removal Services | AS Junk Removal',
    description: 'Professional junk removal services in Lake Oswego, OR. Same-day pickup, eco-friendly disposal, and competitive pricing.',
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/lake-oswego-junk-removal',
  },
}

export default function LakeOswegoJunkRemoval() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#053254] to-[#c75c26] text-white py-20">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Lake Oswego Junk Removal Services
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Professional junk removal and hauling services in Lake Oswego, Oregon. Same-day pickup available with eco-friendly disposal practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:503-753-2329" className="btn-primary">
                  Call (503) 753-2329
                </a>
                <a href="/contact" className="btn-secondary">
                  Get Free Quote
                </a>
              </div>
            </div>
            <div className="lg:text-right">
              <img 
                src="/images/junk-removal/professional-junk-removal-crew.webp" 
                alt="Professional junk removal crew in Lake Oswego"
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto lg:mx-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#053254] mb-4">
              Complete Junk Removal Services in Lake Oswego
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From residential cleanouts to commercial debris removal, we handle all types of junk removal projects in Lake Oswego with professional service and competitive pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#c75c26]">
              <h3 className="text-xl font-semibold text-[#053254] mb-3">Furniture Removal</h3>
              <p className="text-gray-600">Old furniture, mattresses, couches, and bedroom sets removed from your Lake Oswego home or business.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#c75c26]">
              <h3 className="text-xl font-semibold text-[#053254] mb-3">Appliance Disposal</h3>
              <p className="text-gray-600">Refrigerators, washers, dryers, and other appliances disposed of responsibly in Lake Oswego.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#c75c26]">
              <h3 className="text-xl font-semibold text-[#053254] mb-3">Estate Cleanouts</h3>
              <p className="text-gray-600">Complete estate and property cleanout services throughout Lake Oswego neighborhoods.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#053254] text-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Remove Your Junk in Lake Oswego?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Call now for same-day junk removal service in Lake Oswego, Oregon
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:503-753-2329" className="btn-primary">
              Call (503) 753-2329 Now
            </a>
            <a href="/contact" className="btn-secondary">
              Schedule Online
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
