import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Prepare for Junk Removal Day | Andrew and Sons Junk Removal',
  description: 'Get ready for your junk removal appointment with our comprehensive preparation guide. Learn how to sort, organize, and prepare your items for efficient pickup in Oregon City and Portland.',
  keywords: 'prepare for junk removal, junk removal preparation Oregon City, organize junk pickup Portland, junk removal tips Oregon, prepare items removal',
  openGraph: {
    title: 'How to Prepare for Junk Removal Day | Andrew and Sons Junk Removal',
    description: 'Get ready for your junk removal appointment with our comprehensive preparation guide. Learn how to sort, organize, and prepare your items for efficient pickup.',
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
              How to Prepare for Junk Removal Day
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A complete guide to getting ready for your junk removal appointment and ensuring a smooth, efficient pickup process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Schedule Pickup
              </Link>
              <Link href="/blog" className="btn-outline">
                More Articles
              </Link>
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
                <span>8 min read</span>
                <span>•</span>
                <span>Junk Removal Tips</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80" 
                alt="Organized items ready for junk removal pickup"
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 font-medium">
                Proper preparation is the key to a successful junk removal experience. Whether you're clearing out your garage, decluttering your home, or handling an estate cleanout in Oregon City or Portland, taking the time to prepare beforehand will save you time, money, and stress on pickup day.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Preparation Matters</h2>
              
              <p className="mb-6">
                When you're properly prepared for your junk removal appointment, the entire process becomes more efficient and cost-effective. Our Andrew and Sons team can work faster, which means lower costs for you and a smoother experience overall. Plus, proper preparation helps ensure that nothing important gets accidentally removed and that hazardous materials are handled appropriately.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 1: Sort and Categorize Your Items</h2>
              
              <p className="mb-4">
                Before your junk removal team arrives, take time to sort through your items. Create distinct categories:
              </p>

              <ul className="mb-6 space-y-2">
                <li><strong>Items to Remove:</strong> Things you definitely want gone</li>
                <li><strong>Items to Keep:</strong> Belongings you want to retain</li>
                <li><strong>Items to Donate:</strong> Usable items in good condition</li>
                <li><strong>Items to Recycle:</strong> Electronics, metals, and recyclable materials</li>
                <li><strong>Hazardous Materials:</strong> Items requiring special disposal</li>
              </ul>

              <p className="mb-6">
                This sorting process not only speeds up the removal process but also helps you make conscious decisions about what truly needs to go. You might discover items you forgot you had or realize that some things could be donated rather than thrown away.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 2: Gather Items in Accessible Locations</h2>
              
              <p className="mb-4">
                Make the pickup process as efficient as possible by consolidating items in easily accessible areas:
              </p>

              <ul className="mb-6 space-y-2">
                <li>Move items to your garage, driveway, or front yard if possible</li>
                <li>Ensure clear pathways from the street to your items</li>
                <li>Group similar items together (all furniture in one area, electronics in another)</li>
                <li>Place smaller items in boxes or bags for easier handling</li>
                <li>Keep valuable or fragile items separate and clearly marked</li>
              </ul>

              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mb-8">
                <h3 className="text-lg font-semibold text-primary-800 mb-2">Pro Tip</h3>
                <p className="text-primary-700">
                  If you can't move heavy items yourself, don't worry! Our Andrew and Sons team is experienced in safely removing items from basements, attics, and tight spaces. Just make sure we have clear access to these areas.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 3: Identify and Separate Hazardous Materials</h2>
              
              <p className="mb-4">
                Certain items require special handling and cannot be disposed of with regular junk. Common hazardous materials include:
              </p>

              <ul className="mb-6 space-y-2">
                <li>Paint, solvents, and chemicals</li>
                <li>Batteries (car batteries, lithium batteries)</li>
                <li>Propane tanks and gas cylinders</li>
                <li>Asbestos-containing materials</li>
                <li>Medical waste and pharmaceuticals</li>
                <li>Fluorescent bulbs and mercury-containing items</li>
              </ul>

              <p className="mb-6">
                Set these items aside and inform your junk removal team about them when they arrive. We can provide guidance on proper disposal methods for hazardous materials in the Oregon City and Portland area.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 4: Protect Your Property</h2>
              
              <p className="mb-4">
                Take steps to protect your home and property during the removal process:
              </p>

              <ul className="mb-6 space-y-2">
                <li>Remove or secure valuable decorations and breakables from pathways</li>
                <li>Cover or move delicate flooring if heavy items will be carried over it</li>
                <li>Ensure adequate lighting in all areas where removal will take place</li>
                <li>Clear parking spaces for the removal truck</li>
                <li>Secure pets in a safe area away from the work zone</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 5: Prepare Important Documents</h2>
              
              <p className="mb-4">
                Before your appointment, gather any relevant documentation:
              </p>

              <ul className="mb-6 space-y-2">
                <li>Your service agreement or quote confirmation</li>
                <li>List of items to be removed (especially valuable items)</li>
                <li>Any special instructions or concerns</li>
                <li>Contact information for the junk removal company</li>
                <li>Payment method (if not already arranged)</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Day-of-Service Tips</h2>
              
              <p className="mb-4">
                When your Andrew and Sons team arrives, here's how to ensure everything goes smoothly:
              </p>

              <ul className="mb-6 space-y-2">
                <li><strong>Be Present:</strong> Stay available to answer questions and provide guidance</li>
                <li><strong>Do a Final Walkthrough:</strong> Point out all items to be removed</li>
                <li><strong>Communicate Special Requests:</strong> Mention any items that need careful handling</li>
                <li><strong>Ask Questions:</strong> Don't hesitate to ask about our recycling and donation processes</li>
                <li><strong>Inspect Before Signing:</strong> Ensure all requested items have been removed</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Expect from Andrew and Sons</h2>
              
              <p className="mb-4">
                When you choose Andrew and Sons Junk Removal, you can expect:
              </p>

              <ul className="mb-6 space-y-2">
                <li>Professional, uniformed team members</li>
                <li>Upfront, transparent pricing with no hidden fees</li>
                <li>Careful handling of your property and belongings</li>
                <li>Eco-friendly disposal practices with 85% recycling rate</li>
                <li>Complete cleanup of the work area</li>
                <li>Same-day service available in most Oregon City and Portland areas</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Preparation Mistakes to Avoid</h2>
              
              <p className="mb-4">
                Learn from others' experiences and avoid these common preparation mistakes:
              </p>

              <ul className="mb-6 space-y-2">
                <li><strong>Not sorting items beforehand:</strong> This leads to confusion and potential removal of items you wanted to keep</li>
                <li><strong>Leaving items scattered:</strong> Makes the job take longer and cost more</li>
                <li><strong>Forgetting about access:</strong> Blocked driveways or pathways slow down the process</li>
                <li><strong>Not communicating special needs:</strong> Always inform the team about fragile items or difficult access</li>
                <li><strong>Waiting until the last minute:</strong> Rushed preparation often leads to mistakes</li>
              </ul>

              <div className="bg-secondary-50 border-l-4 border-secondary-700 p-6 mb-8">
                <h3 className="text-lg font-semibold text-secondary-800 mb-2">Remember</h3>
                <p className="text-secondary-700">
                  The more prepared you are, the smoother and more cost-effective your junk removal experience will be. Our team at Andrew and Sons is always happy to provide guidance and answer any questions you have about the preparation process.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Schedule Your Junk Removal?</h2>
              
              <p className="mb-6">
                Now that you know how to prepare for junk removal day, you're ready to schedule your appointment with Andrew and Sons Junk Removal. We serve Oregon City, Portland, and all surrounding areas with professional, eco-friendly junk removal services.
              </p>

              <p className="mb-8">
                Our experienced team will handle everything from furniture and appliances to construction debris and yard waste. With transparent pricing, same-day service availability, and a commitment to responsible disposal, we make junk removal easy and stress-free.
              </p>

              <div className="text-center bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Your Free Quote Today</h3>
                <p className="text-gray-600 mb-6">
                  Ready to clear out your junk? Contact Andrew and Sons for a free, no-obligation quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+15037532329" className="btn-primary">
                    Call (503) 753-2329
                  </a>
                  <Link href="/contact" className="btn-outline">
                    Get Online Quote
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
              <Link href="/blog/eco-friendly-junk-disposal-oregon-green" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80" 
                    alt="Eco-friendly junk disposal"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      Eco-Friendly Junk Disposal: How We Keep Oregon Green
                    </h3>
                    <p className="text-gray-600">
                      Learn about our sustainable disposal practices and how we help protect Oregon's environment.
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/blog/junk-removal-vs-dumpster-rental-comparison" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80" 
                    alt="Junk removal vs dumpster rental"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      Junk Removal vs Dumpster Rental: Which is Right for You?
                    </h3>
                    <p className="text-gray-600">
                      Compare the pros and cons of professional junk removal versus renting a dumpster.
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
