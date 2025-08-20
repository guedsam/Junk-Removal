import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Spring Cleaning Junk Removal Guide 2024 | Andrew and Sons Portland',
  description: 'Complete spring cleaning junk removal guide for Portland and Oregon City homes. Learn what to declutter, how to organize, and when to call professional junk removal services.',
  keywords: 'spring cleaning Portland, spring junk removal Oregon City, decluttering guide Portland, seasonal cleanup Oregon, home organization junk removal',
  openGraph: {
    title: 'Spring Cleaning Junk Removal Guide 2024 | Andrew and Sons Portland',
    description: 'Transform your home this spring with our comprehensive junk removal and decluttering guide for Portland area residents.',
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
              The Ultimate Spring Cleaning Junk Removal Guide for Portland Homes
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your home this spring with our comprehensive decluttering and junk removal guide. Learn what to keep, donate, and remove for a fresh start.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Schedule Spring Cleanout
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
                <span>12 min read</span>
                <span>•</span>
                <span>Spring Cleaning Guide</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12">
              <img 
                src="/images/junk-removal/spring-cleaning-junk-removal.webp" 
                alt="Spring cleaning junk removal guide for Portland Oregon homes"
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 font-medium">
                Spring cleaning season is here, and for Portland and Oregon City residents, it's the perfect time to declutter, organize, and refresh your living space. But where do you start when you're facing years of accumulated belongings? This comprehensive guide will walk you through every step of spring cleaning, from planning your approach to knowing when to call Andrew and Sons for professional junk removal services.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Spring Cleaning Matters More Than Ever</h2>
              
              <p className="mb-6">
                Spring cleaning isn't just about tradition—it's about creating a healthier, more organized living environment. After months of being cooped up indoors during Oregon's rainy season, our homes often accumulate clutter, dust, and items we no longer need. Research shows that decluttered spaces can reduce stress, improve productivity, and even boost mental health.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Call Professional Junk Removal</h2>
              
              <p className="mb-4">
                While many spring cleaning tasks can be DIY projects, certain situations call for professional help:
              </p>

              <ul className="mb-6 space-y-2">
                <li><strong>Large Volume:</strong> When you have more than a few carloads of items</li>
                <li><strong>Heavy Items:</strong> Furniture, appliances, or exercise equipment</li>
                <li><strong>Hazardous Materials:</strong> Paint, chemicals, electronics, or batteries</li>
                <li><strong>Time Constraints:</strong> When you need results quickly</li>
                <li><strong>Physical Limitations:</strong> When lifting or moving items is challenging</li>
                <li><strong>Overwhelming Situations:</strong> When the task feels too big to handle alone</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Spring Cleaning?</h2>
              
              <p className="mb-6">
                Spring cleaning doesn't have to be overwhelming. With the right approach and professional help when needed, you can transform your Portland or Oregon City home into a clean, organized, and peaceful space.
              </p>

              <p className="mb-8">
                Andrew and Sons Junk Removal is here to help with all your spring cleaning needs. From single-item pickup to whole-house cleanouts, we make the process easy and stress-free.
              </p>

              <div className="text-center bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for Your Spring Cleanout?</h3>
                <p className="text-gray-600 mb-6">
                  Contact Andrew and Sons today to schedule your spring cleaning junk removal service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+15037532329" className="btn-primary">
                    Call (503) 753-2329
                  </a>
                  <Link href="/contact" className="btn-outline">
                    Get Free Quote
                  </Link>
                </div>
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
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80" 
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
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80" 
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
