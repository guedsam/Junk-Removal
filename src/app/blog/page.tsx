'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import { useState } from 'react'

const blogPosts = [
  {
    id: 18,
    title: 'Small Business Office Cleanout Services in Portland: Streamline Your Business Transitions',
    excerpt: 'Professional small business office cleanout and commercial junk removal services for Portland startups, relocations, closures, and renovations with efficient, affordable solutions.',
    date: 'January 30, 2025',
    readTime: '13 min read',
    slug: 'small-business-office-cleanout-portland',
    image: 'office-cleanout-commercial-portland.webp'
  },
  {
    id: 17,
    title: 'Holiday Decoration Storage and Removal Services in Portland: Transform Your Post-Holiday Cleanup',
    excerpt: 'Professional holiday decoration removal and storage solutions in Portland with eco-friendly disposal, donation services, and organization tips for stress-free post-holiday cleanup.',
    date: 'January 28, 2025',
    readTime: '11 min read',
    slug: 'holiday-decoration-storage-removal-portland',
    image: 'spring-cleaning-junk-removal.webp'
  },
  {
    id: 16,
    title: 'Senior Downsizing & Junk Removal Services in Portland: Compassionate Support for Life Transitions',
    excerpt: 'Professional senior downsizing and junk removal services with compassionate support for seniors transitioning to smaller homes or assisted living facilities.',
    date: 'August 24, 2025',
    readTime: '12 min read',
    slug: 'senior-downsizing-junk-removal-portland',
    image: 'professional-junk-removal-crew.webp'
  },
  {
    id: 15,
    title: 'Furniture Donation & Disposal in Portland Oregon: Give Back to Your Community',
    excerpt: 'Learn how to donate furniture in Portland and Oregon City. Professional furniture removal with charity partnerships and tax-deductible donation receipts.',
    date: 'February 12, 2025',
    readTime: '9 min read',
    slug: 'furniture-donation-disposal-portland-oregon',
    image: 'furniture-removal-oregon.webp'
  },
  {
    id: 14,
    title: 'Appliance Disposal & Recycling in Portland Oregon: Eco-Friendly Solutions',
    excerpt: 'Professional appliance disposal and recycling services in Portland and Oregon City. EPA-compliant removal of refrigerators, washers, dryers, and more.',
    date: 'February 10, 2025',
    readTime: '8 min read',
    slug: 'appliance-disposal-recycling-portland-oregon',
    image: 'professional-junk-removal-crew.webp'
  },
  {
    id: 13,
    title: 'Professional Attic Cleanout Services in Portland Oregon: Reclaim Your Space Safely',
    excerpt: 'Expert attic cleanout services with safe removal of stored items, insulation, and clutter. Licensed, insured team with eco-friendly disposal practices.',
    date: 'February 5, 2025',
    readTime: '10 min read',
    slug: 'attic-cleanout-services-portland-oregon',
    image: 'professional-junk-removal-crew.webp'
  },
  {
    id: 12,
    title: 'Moving Junk Removal Services in Portland & Oregon City: Your Complete Guide',
    excerpt: 'Professional moving junk removal services to declutter before your move. Save money on moving costs with eco-friendly disposal and donation services.',
    date: 'February 1, 2025',
    readTime: '9 min read',
    slug: 'moving-junk-removal-services-portland',
    image: 'portland-junk-removal-team.webp'
  },
  {
    id: 11,
    title: 'Garage Cleanout Services in Oregon City: Reclaim Your Space',
    excerpt: 'Transform your cluttered garage into organized, functional space with professional garage cleanout services. Same-day service available in Oregon City and Portland.',
    date: 'January 25, 2025',
    readTime: '7 min read',
    slug: 'garage-cleanout-services-oregon-city',
    image: 'garage-cleanout-oregon-city.webp'
  },
  {
    id: 10,
    title: 'Basement Cleanout Services in Portland Oregon: Reclaim Your Space',
    excerpt: 'Professional basement cleanout services to transform your cluttered basement into functional, organized space. Safe removal of old furniture, appliances, and clutter.',
    date: 'January 20, 2025',
    readTime: '8 min read',
    slug: 'basement-cleanout-services-portland-oregon',
    image: 'basement-cleanout-portland.webp'
  },
  {
    id: 7,
    title: 'The Ultimate Spring Cleaning Junk Removal Guide for Portland Homes',
    excerpt: 'Transform your Portland home this spring with our comprehensive junk removal guide. Learn room-by-room strategies, eco-friendly disposal tips, and cost-saving techniques.',
    date: 'January 15, 2025',
    readTime: '8 min read',
    slug: 'spring-cleaning-junk-removal-guide',
    image: 'spring-cleaning-junk-removal.webp'
  },
  {
    id: 8,
    title: 'Compassionate Hoarding Cleanup Services in Portland & Oregon City',
    excerpt: 'Professional, discreet hoarding cleanup services that help restore homes and lives with dignity and care. Learn about our compassionate approach.',
    date: 'January 10, 2025',
    readTime: '12 min read',
    slug: 'hoarding-cleanup-services-portland-oregon',
    image: 'hoarding-cleanup-portland.webp'
  },
  {
    id: 9,
    title: 'Office Cleanout & Commercial Junk Removal Services in Portland',
    excerpt: 'Streamline your business operations with efficient, professional commercial junk removal services for offices, retail spaces, and warehouses.',
    date: 'January 5, 2025',
    readTime: '11 min read',
    slug: 'office-cleanout-commercial-junk-removal-portland',
    image: 'office-cleanout-commercial-portland.webp'
  },
  {
    id: 4,
    title: 'How to Prepare for Junk Removal Day',
    excerpt: 'Get ready for your junk removal appointment with our comprehensive preparation guide. Learn how to sort, organize, and prepare your items for efficient pickup.',
    date: 'December 20, 2024',
    readTime: '8 min read',
    slug: 'how-to-prepare-junk-removal-day',
    image: 'junk-removal-preparation-tips.webp'
  },
  {
    id: 5,
    title: 'Estate Cleanout Services in Oregon City & Portland',
    excerpt: 'Compassionate, professional estate cleanout services to help families during difficult times. We handle everything with care and respect.',
    date: 'December 18, 2024',
    readTime: '10 min read',
    slug: 'estate-cleanout-services-oregon-city',
    image: 'estate-cleanout-oregon-city.webp'
  },
  {
    id: 1,
    title: 'Top 5 Reasons to Hire a Junk Removal Company in Portland',
    excerpt: 'Discover why professional junk removal services in Portland save you time, money, and hassle compared to DIY approaches.',
    date: 'December 15, 2024',
    readTime: '5 min read',
    slug: 'top-5-reasons-hire-junk-removal-portland',
    image: 'oregon-city-junk-hauling.webp'
  },
  {
    id: 6,
    title: 'Construction Debris Removal in Portland & Oregon City',
    excerpt: 'Professional construction debris removal services for contractors, builders, and homeowners. Safe, efficient cleanup of all construction waste.',
    date: 'December 12, 2024',
    readTime: '9 min read',
    slug: 'construction-debris-removal-portland',
    image: 'construction-debris-removal-portland.webp'
  },
  {
    id: 2,
    title: 'Eco-Friendly Junk Disposal: How We Keep Oregon Green',
    excerpt: 'Learn about our sustainable junk removal practices and how we responsibly dispose of items while protecting Oregon\'s environment.',
    date: 'December 10, 2024',
    readTime: '6 min read',
    slug: 'eco-friendly-junk-disposal-oregon-green',
    image: 'eco-friendly-disposal-portland.webp'
  },
  {
    id: 3,
    title: 'Junk Removal vs Dumpster Rental: Which is Right for You?',
    excerpt: 'Compare junk removal services with dumpster rentals to determine the best solution for your Oregon City or Portland project.',
    date: 'December 5, 2024',
    readTime: '7 min read',
    slug: 'junk-removal-vs-dumpster-rental-comparison',
    image: 'furniture-removal-oregon.webp'
  }
]

const POSTS_PER_PAGE = 9

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1)
  
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = blogPosts.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
            {currentPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={`/images/junk-removal/${post.image}`}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                {/* Previous Button */}
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-3 py-2 rounded-lg font-medium ${
                    currentPage === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                  }`}
                >
                  Previous
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-3 py-2 rounded-lg font-medium ${
                      currentPage === page
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                {/* Next Button */}
                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-2 rounded-lg font-medium ${
                    currentPage === totalPages
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                  }`}
                >
                  Next
                </button>
              </nav>
            </div>
          )}

          {/* Page Info */}
          <div className="mt-6 text-center text-gray-600">
            Showing {startIndex + 1}-{Math.min(endIndex, blogPosts.length)} of {blogPosts.length} articles
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
