import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BDPS Ara | B.D. Public School, Ara - Best CBSE School in Ara, Bihar',
  description: 'BD Public School Ara - Best school in Ara offering CBSE education with world-class infrastructure. Located at Nawada Chowk, Ara. BDPS Arrah provides quality education with experienced faculty and holistic development for students.',
  keywords: 'BDPS Ara, B.D. Public School Ara, BD Public Ara, BD Public School Nawada Chowk Ara, Bhagwan Das Public School Ara, BDPS Arrah, BD Public School Arrah, best school in Ara, CBSE school Ara, school in Ara Bihar, private school Ara, top school Arrah',
  applicationName: 'BD Public School Ara',
  generator: 'Next.js',
  icons: {
    icon: [
      { url: '/logo.png' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    apple: '/apple-icon.png',
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/logo.png',
      },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://bdpublicschool.co.in',
    siteName: 'BD Public School Ara',
    title: 'BDPS Ara | Best CBSE School in Ara, Bihar',
    description: 'BD Public School Ara - Best school offering CBSE education at Nawada Chowk, Ara. World-class infrastructure, 575+ students, experienced faculty. BDPS Arrah - top-rated school in Ara Bihar.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/699bdb5f2e5f48.73612006-weleJ98iugT2LRp9ePjrLkQ7iy5qUA.webp',
        width: 512,
        height: 512,
        alt: 'B.D. Public School Official Logo',
        type: 'image/webp',
      },
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/699921d96e0c47.33832447-YCt9wSG2c7adL2DZBrcbmcYWGhOHAZ.webp',
        width: 1200,
        height: 630,
        alt: 'B.D. Public School Campus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BDPS Ara - Best CBSE School in Ara, Bihar',
    description: 'BD Public School Ara - Top-rated CBSE school with world-class facilities at Nawada Chowk. 575+ students, 38+ teachers, 26 classrooms.',
    creator: '@BDPublicAra',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://bdpublicschool.co.in',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#2D5F8D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="B.D. Public School, Ara" />
        <meta name="publisher" content="B.D. Public School, Ara" />
        <meta name="geo.placename" content="Ara, Bihar, India" />
        <meta name="geo.region" content="IN-BR" />
        
        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              'name': 'B.D. Public School, Ara',
              'alternateName': ['BDPS Ara', 'BD Public School Ara', 'Bhagwan Das Public School Ara', 'BDPS Arrah'],
              'description': 'Premier CBSE-affiliated school offering quality education from primary to secondary level with world-class infrastructure and experienced faculty.',
              'url': 'https://bdpublicschool.co.in',
              'logo': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/699bdb5f2e5f48.73612006-weleJ98iugT2LRp9ePjrLkQ7iy5qUA.webp',
              'image': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/699921d96e0c47.33832447-YCt9wSG2c7adL2DZBrcbmcYWGhOHAZ.webp',
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': 'Nawada Chowk',
                'addressLocality': 'Ara',
                'addressRegion': 'Bihar',
                'postalCode': '802301',
                'addressCountry': 'IN'
              },
              'telephone': '+91-9430060866',
              'email': 'bdpsaraara@yahoo.com',
              'sameAs': [
                'https://www.facebook.com/bdpublicschoolara',
                'https://www.instagram.com/bdpublicschoolara'
              ],
              'areaServed': ['Ara', 'Arrah', 'Bihar', 'India'],
              'priceRange': 'Affordable',
              'knowsAbout': ['CBSE Education', 'Primary Education', 'Secondary Education', 'Holistic Development'],
              'numberOfEmployees': 38,
              'aggregateRating': {
                '@type': 'AggregateRating',
                'ratingValue': '4.5',
                'ratingCount': '150'
              }
            })
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              'name': 'B.D. Public School, Ara',
              'url': 'https://bdpublicschool.co.in',
              'logo': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/699bdb5f2e5f48.73612006-weleJ98iugT2LRp9ePjrLkQ7iy5qUA.webp',
              'description': 'Best school in Ara offering CBSE education with world-class infrastructure and experienced faculty',
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': 'Nawada Chowk',
                'addressLocality': 'Ara',
                'addressRegion': 'Bihar',
                'postalCode': '802301',
                'addressCountry': 'IN'
              },
              'contactPoint': {
                '@type': 'ContactPoint',
                'contactType': 'Customer Service',
                'telephone': '+91-9430060866',
                'email': 'bdpsaraara@yahoo.com',
                'availableLanguage': 'en'
              },
              'foundingDate': '1935',
              'founder': {
                '@type': 'Person',
                'name': 'Sri Bhagwan Das',
                'description': 'Founder of B.D. Public School'
              }
            })
          }}
        />
      </head>
      <body className="antialiased bg-white text-slate-900">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
