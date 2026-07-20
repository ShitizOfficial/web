import Image from 'next/image'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 relative">
                <Image
                  src="/logo.png"
                  alt="BDPS Ara - B.D. Public School Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <div>
                <h4 className="font-bold text-lg">BDPS Ara</h4>
                <p className="text-sm text-gray-300">Best School in Ara, Bihar</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              BD Public School Ara - CBSE school offering world-class education with 575+ students and 38+ experienced teachers. Located at Nawada Chowk, Ara Bihar. Also known as Bhagwan Das Public School and BDPS Arrah.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold text-lg mb-4">Quick Links</h5>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#facilities" className="hover:text-white transition">Facilities</a></li>
              <li><a href="#infrastructure" className="hover:text-white transition">Infrastructure</a></li>
              <li><a href="#gallery" className="hover:text-white transition">Gallery</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-bold text-lg mb-4">Location</h5>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span className="text-sm">Ara, Bihar, India</span>
              </div>
            </div>
          </div>

          {/* Information */}
          <div>
            <h5 className="font-bold text-lg mb-4">Our Commitment</h5>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>✓ Quality Education</li>
              <li>✓ Safe Environment</li>
              <li>✓ Holistic Development</li>
              <li>✓ Experienced Faculty</li>
              <li>✓ World-Class Facilities</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div>
            <p>
              &copy; {new Date().getFullYear()} B.D. Public School, Ara. A Unit of Ara Bhagwan Das Educational Society. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>

        {/* Powered By */}
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-500 text-xs">
            Powered By{' '}
            <a
              href="https://www.adxpi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition font-semibold"
            >
              ADXPI
            </a>
          </p>
        </div>

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'B.D. Public School, Ara',
              url: 'https://bdpublicschool.co.in',
              logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/699bdb5f2e5f48.73612006-Ha43qUUIstHdhXre0FnD2GmL9W2sQc.webp',
              sameAs: [],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Ara',
                addressRegion: 'Bihar',
                addressCountry: 'IN',
                streetAddress: 'Ara, Bihar'
              },
              description: 'B.D. Public School, Ara - A premier CBSE-affiliated school offering quality education with world-class infrastructure and experienced faculty.',
              foundingDate: '2014',
              areaServed: 'Ara, Bihar',
              educationalLevel: 'Primary, Secondary, Higher Secondary',
              knowsAbout: ['CBSE Education', 'Holistic Development', 'STEM Education', 'Sports and Activities']
            })
          }}
        />
      </div>
    </footer>
  )
}
