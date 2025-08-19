'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

const metadata: Metadata = {
  title: 'Get Free Junk Removal Quote | Contact Oregon City Junk Removal',
  description: 'Get your free junk removal quote today! Contact Oregon City Junk Removal for fast, affordable service in Portland and surrounding areas. Same-day pickup available.',
  keywords: 'free junk removal quote Oregon City, contact junk removal Portland, junk removal estimate, same-day junk pickup Oregon',
  openGraph: {
    title: 'Get Free Junk Removal Quote | Contact Oregon City Junk Removal',
    description: 'Get your free junk removal quote today! Contact Oregon City Junk Removal for fast, affordable service in Portland and surrounding areas.',
  },
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zipCode: '',
    serviceType: '',
    description: '',
    preferredDate: '',
    preferredTime: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage('Thank you! We\'ll contact you within 2 hours with your free quote.')
      setFormData({
        name: '',
        phone: '',
        email: '',
        zipCode: '',
        serviceType: '',
        description: '',
        preferredDate: '',
        preferredTime: ''
      })
    }, 1000)
  }

  const serviceTypes = [
    'Residential Junk Removal',
    'Commercial Junk Removal',
    'Furniture Removal',
    'Appliance Removal',
    'Yard Waste Removal',
    'Construction Debris',
    'Estate Cleanout',
    'Other'
  ]

  const timeSlots = [
    'Morning (8AM - 12PM)',
    'Afternoon (12PM - 5PM)',
    'Evening (5PM - 8PM)',
    'Anytime'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Your Free Junk Removal Quote
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to clear out your junk? Get a free, no-obligation quote from Oregon City's 
            most trusted junk removal company. Same-day service available!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+15035551234" className="btn-primary text-lg px-8 py-4">
              Call Now: (503) 555-1234
            </a>
            <a href="#quote-form" className="btn-secondary text-lg px-8 py-4">
              Get Online Quote
            </a>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Us Today
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to get in touch and get your free quote
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our team for immediate assistance and quotes
              </p>
              <a href="tel:+15035551234" className="text-2xl font-bold text-primary-600 hover:text-primary-700 block mb-2">
                (503) 555-1234
              </a>
              <p className="text-sm text-gray-500">Available 7 days a week, 7AM - 8PM</p>
            </div>

            {/* Email */}
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Send us details about your junk removal needs
              </p>
              <a href="mailto:info@oregoncityjunkremoval.com" className="text-lg font-semibold text-primary-600 hover:text-primary-700 block mb-2">
                info@oregoncityjunkremoval.com
              </a>
              <p className="text-sm text-gray-500">We respond within 2 hours</p>
            </div>

            {/* Online Form */}
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Online Quote</h3>
              <p className="text-gray-600 mb-4">
                Fill out our form for a detailed quote
              </p>
              <a href="#quote-form" className="text-lg font-semibold text-primary-600 hover:text-primary-700 block mb-2">
                Get Free Quote
              </a>
              <p className="text-sm text-gray-500">Quick and easy online form</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote-form" className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get Your Free Estimate
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we'll contact you within 2 hours with your free quote
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              {submitMessage && (
                <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold">{submitMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="(503) 555-1234"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Zip Code */}
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-semibold text-gray-700 mb-2">
                      Zip Code *
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="97045"
                    />
                  </div>

                  {/* Service Type */}
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      {serviceTypes.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Preferred Time */}
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select preferred time</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                    Describe Your Junk Removal Needs
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Please describe what items you need removed, approximate quantity, and any special considerations (stairs, tight spaces, etc.)"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get My Free Quote'}
                  </button>
                  <p className="text-sm text-gray-500 mt-4">
                    * Required fields. We'll contact you within 2 hours with your free quote.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            We Serve These Areas
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {[
              'Oregon City', 'Portland', 'Clackamas', 'Gresham', 'Milwaukie', 'Happy Valley',
              'Lake Oswego', 'West Linn', 'Tigard', 'Beaverton', 'Tualatin', 'Gladstone'
            ].map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3 text-center hover:bg-primary-50 transition-colors duration-200">
                <h3 className="font-semibold text-gray-900 text-sm">{area}</h3>
              </div>
            ))}
          </div>

          <p className="text-gray-600 mb-6">
            Don't see your area? We serve many more locations throughout Oregon.
          </p>
          <Link href="/coverage-areas" className="btn-outline">
            View All Service Areas
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Oregon City Junk Removal?
            </h2>
            <p className="text-xl text-gray-600">
              Professional service you can trust with benefits that matter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Same-Day Service</h3>
              <p className="text-gray-600">Available in most areas throughout Oregon City and Portland</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed and insured for your peace of mind</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">85% of items recycled or donated, not sent to landfills</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">Upfront quotes with no hidden fees or surprises</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
