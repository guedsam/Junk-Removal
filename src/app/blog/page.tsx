import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Junk Removal Blog | Tips & Guides | Oregon City Junk Removal',
  description: 'Expert junk removal tips, eco-friendly disposal guides, and local insights for Oregon City and Portland residents. Learn about professional junk hauling services.',
  keywords: 'junk removal blog, Oregon City junk removal tips, Portland junk hauling, eco-friendly disposal, junk removal guides',
}

const blogPosts = [
  {
    id: 1,
    title: 'Top 5 Reasons to Hire a Junk Removal Company in Portland',
    excerpt: 'Discover why professional junk removal services in Portland save you time, money, and hassle compared to DIY approaches.',
    date: 'December 15, 2024',
    readTime: '5 min read',
    slug: 'top-5-reasons-hire-junk-removal-portland'
  },
  {
    id: 2,
    title: 'Eco-Friendly Junk Disposal: How We Keep Oregon Green',
    excerpt: 'Learn about our sustainable junk removal practices and how we responsibly dispose of items while protecting Oregon\'s environment.',
    date: 'December 10, 2024',
    readTime: '6 min read',
    slug: 'eco-friendly-junk-disposal-oregon-green'
  },
  {
    id: 3,
    title: 'Junk Removal vs Dumpster Rental: Which is Right for You?',
    excerpt: 'Compare junk removal services with dumpster rentals to determine the best solution for your Oregon City or Portland project.',
    date: 'December 5, 2024',
    readTime: '7 min read',
    slug: 'junk-removal-vs-dumpster-rental-comparison'
  },
  {
    id: 4,
    title: 'How to Prepare for Junk Removal Day',
    excerpt: 'Get ready for your junk removal appointment with our comprehensive preparation guide. Learn how to sort, organize, and prepare your items for efficient pickup.',
    date: 'December 20, 2024',
    readTime: '8 min read',
    slug: 'how-to-prepare-junk-removal-day'
  },
  {
    id: 5,
    title: 'Estate Cleanout Services in Oregon City & Portland',
    excerpt: 'Compassionate, professional estate cleanout services to help families during difficult times. We handle everything with care and respect.',
    date: 'December 18, 2024',
    readTime: '10 min read',
    slug: 'estate-cleanout-services-oregon-city'
  },
  {
    id: 6,
    title: 'Construction Debris Removal in Portland & Oregon City',
    excerpt: 'Professional construction debris removal services for contractors, builders, and homeowners. Safe, efficient cleanup of all construction waste.',
    date: 'December 12, 2024',
    readTime: '9 min read',
    slug: 'construction-debris-removal-portland'
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Junk Removal Blog & Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert tips, guides, and insights for junk removal in Oregon City, Portland, and surrounding areas. 
              Learn about eco-friendly disposal, cost-saving strategies, and professional junk hauling services.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-600"></div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for Professional Junk Removal?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Get your free quote today for fast, eco-friendly junk removal in Oregon City and Portland.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+15037532329"
              className="bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors"
            >
              Call (503) 753-2329
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
