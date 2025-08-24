import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Andrew and Sons Junk Removal | Fast & Affordable Junk Hauling Portland',
    template: '%s | Andrew and Sons Junk Removal'
  },
  description: 'Professional junk removal services in Oregon City, Portland, and surrounding areas. Same-day pickup, eco-friendly disposal, and affordable rates. Get your free quote today!',
  keywords: 'junk removal Oregon City, junk hauling Portland, appliance removal Oregon, furniture removal Portland, trash pickup Portland Oregon, eco-friendly junk removal Oregon',
  authors: [{ name: 'Andrew and Sons Junk Removal' }],
  creator: 'Andrew and Sons Junk Removal',
  publisher: 'Andrew and Sons Junk Removal',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://asjunkremoval.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/images/junk-removal/icon.png',
    shortcut: '/images/junk-removal/icon.png',
    apple: '/images/junk-removal/icon.png',
  },
  openGraph: {
    title: 'Andrew and Sons Junk Removal | Fast & Affordable Junk Hauling Portland',
    description: 'Professional junk removal services in Oregon City, Portland, and surrounding areas. Same-day pickup, eco-friendly disposal, and affordable rates.',
    url: 'https://asjunkremoval.com',
    siteName: 'Andrew and Sons Junk Removal',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Andrew and Sons Junk Removal - Professional Junk Hauling Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andrew and Sons Junk Removal | Fast & Affordable Junk Hauling Portland',
    description: 'Professional junk removal services in Oregon City, Portland, and surrounding areas. Same-day pickup, eco-friendly disposal, and affordable rates.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
