import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '#1 Junk Removal Service in Newell Creek Canyon, Oregon City - Creek Canyon Specialists | AS Junk Removal',
  description: 'Leading junk removal service in Newell Creek Canyon, Oregon City. Creek canyon specialists, natural residential area cleanup, eco-friendly disposal, transparent pricing. Call (503) 753-2329. Serving Newell Creek Canyon since 2018.',
  keywords: 'Newell Creek Canyon junk removal, junk removal Newell Creek Canyon Oregon City, junk hauler Newell Creek Canyon, same day junk removal Newell Creek Canyon, creek canyon junk removal Newell Creek Canyon OR, Newell Creek Canyon natural residential area junk removal',
  openGraph: {
    title: '#1 Junk Removal Service in Newell Creek Canyon, Oregon City - Creek Canyon Specialists',
    description: 'Leading junk removal service in Newell Creek Canyon, Oregon City. Creek canyon specialists with natural residential expertise.',
    url: 'https://asjunkremoval.com/newell-creek-canyon-junk-removal',
    siteName: 'AS Junk Removal',
    images: [
      {
        url: '/images/junk-removal/oregon-city-junk-removal-team.webp',
        width: 1200,
        height: 630,
        alt: 'AS Junk Removal team serving Newell Creek Canyon natural residential area in Oregon City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 Junk Removal Service in Newell Creek Canyon, Oregon City - Creek Canyon Specialists',
    description: 'Leading junk removal service in Newell Creek Canyon, Oregon City. Creek canyon specialists.',
    images: ['/images/junk-removal/oregon-city-junk-removal-team.webp'],
  },
  alternates: {
    canonical: 'https://asjunkremoval.com/newell-creek-canyon-junk-removal',
  },
}

export default function NewellCreekCanyonJunkRemovalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Junk Removal{' '}
                <span className="text-gradient">Newell Creek Canyon</span>
                {' '}<span className="text-2xl md:text-3xl font-normal">Oregon City</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                #1 rated junk removal service in beautiful Newell Creek Canyon, Oregon City.
                As creek canyon specialists, we understand the unique natural setting
                and residential character that makes this canyon community distinctive since 2018.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Free Estimate
                </Link>
                <a href="tel:+15037532329" className="btn-secondary">
                  Call (503) 753-2329
                </a>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  <span>5.0 Rating</span>
                </div>
                <div>•</div>
                <div>Same-Day Service</div>
                <div>•</div>
                <div>Licensed & Insured</div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/junk-removal/oregon-city-junk-removal-team.webp"
                alt="AS Junk Removal professional team providing creek canyon junk removal services in Newell Creek Canyon, Oregon City"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Newell Creek Canyon Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Newell Creek Canyon's Natural Residential Community Since 2018
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Newell Creek Canyon occupies a scenic and distinctive position in Oregon City,
              situated along the natural terrain and creek beds that give this residential area
              its special character, where canyon living meets suburban comfort in a beautifully
              integrated natural setting that residents cherish for its peaceful ambiance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">About Newell Creek Canyon Natural Residential Area</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Scenic canyon location with natural terrain features
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Proximity to creek beds and natural water features
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mixed residential housing styles adapted to terrain
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Natural landscape integration with mature trees and greenery
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Peaceful residential atmosphere enhanced by canyon setting</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Why Newell Creek Canyon Trusts AS Junk Removal</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Experience with canyon terrain and accessibility challenges
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Understanding of natural landscape preservation priorities
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Respect for canyon community's peaceful residential environment
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Knowledge of terrain-specific equipment and service approaches
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Commitment to maintaining Newell Creek Canyon's natural charm</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Newell Creek Canyon Natural Residential Coverage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>• Newell Creek Canyon residential area</div>
              <div>• Canyon terrain residential properties</div>
              <div>• Creek-side neighborhood homes</div>
              <div>• Natural landscape residential developments</div>
              <div>• Scenic canyon residential blocks</div>
              <div>• Connected creek canyon communities</div>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              Comprehensive canyon coverage respecting Newell Creek Canyon's natural terrain and residential charm.
            </p>
          </div>
        </div>
      </section>

      {/* Newell Creek Canyon Natural Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Newell Creek Canyon Natural Residential Cleanup Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our services are specially designed for Newell Creek Canyon's unique natural setting,
              understanding how canyon terrain, creek proximity, and residential living blend together
              in this beautiful area where nature and community meet in perfect harmony.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Canyon Residential Cleanouts
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized residential cleanout services for Newell Creek Canyon homes.
                Understanding how canyon terrain affects property configuration,
                furniture placement, and storage challenges in our unique setting.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Canyon-adapted property cleanouts</li>
                <li>• Terrain-aware equipment handling</li>
                <li>• Residential space optimization</li>
                <li>• Natural setting home organization</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Canyon Landscape Waste Removal
              </h3>
              <p className="text-gray-600 mb-4">
                Expert handling of canyon landscape waste in Newell Creek Canyon.
                Managing fallen branches, seasonal garden debris, and natural materials
                that accumulate in our lush canyon environment with respect for the landscape.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Seasonal canyon garden cleanup</li>
                <li>• Natural debris collection</li>
                <li>• Terrain-sensitive yard waste removal</li>
                <li>• Landscape maintenance support</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Canyon Terrain Renovation Assistance
              </h3>
              <p className="text-gray-600 mb-4">
                Construction debris removal services adapted for Newell Creek Canyon terrain.
                Handling renovation waste from canyon property updates while respecting
                the natural landscape features that make our canyon community special.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Canyon property renovation support</li>
                <li>• Terrain-adapted debris removal</li>
                <li>• Natural landscape renovation cleanup</li>
                <li>• Residential improvement waste management</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Seasonal Canyon Residential Maintenance
              </h3>
              <p className="text-gray-600 mb-4">
                Seasonal maintenance and cleanout services timed perfectly for Newell Creek Canyon's
                natural cycles. Understanding when canyon properties need attention based on our
                forested landscape, seasonal weather patterns, and natural terrain characteristics.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Seasonal canyon spring cleanup</li>
                <li>• Fall canyon yard waste management</li>
                <li>• Winter natural debris removal</li>
                <li>• Terrain-specific seasonal maintenance</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Canyon Nature Estate Support
              </h3>
              <p className="text-gray-600 mb-4">
                Compassionate estate cleanup services for families in Newell Creek Canyon.
                Working carefully through canyon property treasures, family heirlooms, and natural
                estate features that reflect generations of canyon family living and legacy.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Estate cleanup sensitive to terrain</li>
                <li>• Canyon family legacy preservation</li>
                <li>• Natural estate feature handling</li>
                <li>• Generations-focused estate support</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Natural Canyon Storage Organization
              </h3>
              <p className="text-gray-600 mb-4">
                Clearing and organizing canyon property storage areas. Whether garages
                attached to canyon homes, separate storage buildings, or natural outdoor
                storage areas, we handle the accumulated possessions in our natural setting.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Canyon terrain garage cleanouts</li>
                <li>• Natural set storage organization</li>
                <li>• Terrain-adapted storage area clearing</li>
                <li>• Environmental storage management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Newell Creek Canyon Natural Heritage Focus */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Celebrating Newell Creek Canyon's Natural Residential Heritage
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Newell Creek Canyon represents a special harmony between Oregon City's natural beauty
              and residential comfort, where canyon terrain becomes the foundation of community living
              and where nature's presence enhances all experiences in our residential setting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏞️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Natural Terrain Partnership</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Working in harmony with Newell Creek Canyon's natural terrain to provide service that enhances rather than disrupts our canyon environment.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Landscape Environment Respect</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Understanding the importance of preserving Newell Creek Canyon's lush natural environment and integrated organic setting.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-600 rounded-full mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Residential Natural Harmony</h3>
              <p className="text-primary-100 max-w-xs mx-auto">
                Promoting the beautiful blend of residential living and natural environment that defines our canyon community lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Newell Creek Canyon Natural Residential Community Voice
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Hearing from Newell Creek Canyon families and natural residential community members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Our Newell Creek Canyon property needed extensive cleanup after remodeling work on our split-level home.
                With the difficult canyon access and steep terrain, most services couldn't handle it. They came with special
                equipment designed for canyon terrain, understood how our creek-side property works, and did everything
                with complete respect for our natural setting. They're canyon property experts who get our unique home challenges."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Sarah & David Chapman, Canyon Terrace Remodeling Project</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Living in Newell Creek Canyon means dealing with lots of natural debris - fallen branches, seasonal yard waste,
                creek bed materials. These specialists truly understand our canyon environment. They know exactly how to handle
                our terrain challenges, protect our natural landscape features, and keep our canyon property harmonious with nature.
                They've become indispensable for managing our natural canyon living situation."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Maria Garcia, Ghent Family Canyon Maintenance</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-4">
                "When our parents passed and we inherited the family canyon property with its decades of accumulated treasures
                and natural artifacts, we needed someone who would respect the property's history. They handled the estate cleanup
                beautifully - treating every natural and family treasure in our canyon home with the care and sensitivity they deserved.
                Their understanding of our terrain and emotional connection to this land made all the difference."
              </p>
              <p className="text-sm font-semibold text-gray-900">- Family Estate Representatives, Three Generations of Canyon Living</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Newell Creek Canyon Natural Residential Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do you handle properties in Newell Creek Canyon's terrain?
              </h3>
              <p className="text-gray-600">
                Terrain-specific service is our specialty for Newell Creek Canyon. We have experience with steep access points, limited parking areas, terrain-specific equipment needs, and all the unique challenges that come with canyon residential properties. Our crews are trained to handle difficult terrain, steep pathways, and the specialized access requirements that characterize our canyon community.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about natural waste and seasonal canyon cleanup?
              </h3>
              <p className="text-gray-600">
                Natural waste management is particularly important in Newell Creek Canyon. We understand the seasonal cycles that create different types of natural debris - spring runoff materials, summer landscape trimmings, fall leaf accumulation, winter fallen branches. Our scheduling adapts to these natural cycles, and our equipment is designed to handle the organic, biodegradable, and natural debris that accumulates in our lush canyon environment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do you protect the natural landscape in our canyon community?
              </h3>
              <p className="text-gray-600">
                Landscape protection is built into every Newell Creek Canyon service. We use protective materials for vegetation, work carefully around mature trees and natural features, have specialized equipment for terrain navigation, and employ techniques that preserve rather than damage our canyon's natural beauty. Our approach ensures that the natural landscape that defines our community remains protected throughout every service project.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much does natural canyon area junk removal cost?
              </h3>
              <p className="text-gray-600">
                Newell Creek Canyon projects range from $150-400 for residential cleanouts to $700-1200 for larger estate or renovation projects. We provide free personalized estimates that consider terrain accessibility, natural debris types, canyon-specific equipment needs, and the natural environmental factors that characterize our canyon community. Every estimate reflects our deep understanding of canyon property challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about creek proximity and water feature considerations?
              </h3>
              <p className="text-gray-600">
                Creek proximity is a fundamental part of Newell Creek Canyon service. We understand water feature regulations, protect natural watercourses, have specialized containment for water-adjacent work, and follow all environmental guidelines for work near our creek beds. Our equipment and techniques are designed to prevent runoff contamination and maintain the purity of this precious natural resource that defines our canyon community.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you have experience with different canyon property house styles?
              </h3>
              <p className="text-gray-600">
                Canyon property styles are our specialty. We work with split-level homes adapted to terrain, cabin-style residences, modern canyon homes, traditional farmhouses that have stood for generations, and all the unique architectural adaptations that have evolved in our canyon setting. Our experience includes understanding how different building styles interact with our terrain, what challenges each presents, and how to provide optimal service for every home type in our natural residential community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Newell Creek Canyon's Natural Residential Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join the Newell Creek Canyon natural residential community who trust us for their canyon terrain cleanup needs.
            Same-day service available throughout our scenic canyon area. Call now or get your natural canyon quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Newell Creek Canyon Quote
            </Link>
            <a href="tel:+15037532329" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Call (503) 753-2329 Now
            </a>
          </div>
          <div className="mt-8 text-primary-100">
            <p className="text-lg font-semibold">Newell Creek Canyon Natural Residential Service • Licensed & Insured • Same-Day Service Available</p>
            <p className="text-sm mt-2">Serving Newell Creek Canyon's Scenic Residential Community & Natural Terrain Since 2018</p>
          </div>
        </div>
      </section>

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "AS Junk Removal",
            "description": "Natural terrain residential junk removal services in Newell Creek Canyon, Oregon City, OR",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Oregon City",
              "addressRegion": "OR",
              "addressCountry": "US"
            },
            "telephone": "(503) 753-2329",
            "url": "https://asjunkremoval.com/newell-creek-canyon-junk-removal",
            "serviceArea": {
              "@type": "Place",
              "name": "Newell Creek Canyon, Oregon City, OR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "275"
            },
            "openingHours": "Mo-Su",
            "serviceType": "Junk Removal Services",
            "areaServed": "Newell Creek Canyon, Oregon City, OR"
          })
        }}
      />
    </div>
  )
}
