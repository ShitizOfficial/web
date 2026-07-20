'use client'

import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Award } from 'lucide-react'

export default function Location() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Visit Our Campus
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Located in the heart of Ara, Bihar, our school welcomes visitors and prospective students
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.8045802749357!2d84.66743222346916!3d25.554194974099373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d5f572b0670c7%3A0x93f5a2d6aaa8a1d1!2sBd%20public%20school!5e0!3m2!1sen!2sin!4v1721050147273"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>

          {/* Info Section */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Our Location
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  B.D. Public School, Ara<br />
                  Ara, Bihar, India<br />
                  <span className="text-sm text-slate-500">
                    Coordinates: 25.5541°N, 84.6674°E
                  </span>
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600">
                  <Phone className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Contact Us
                </h3>
                <div className="space-y-2 text-slate-600">
                  <p>
                    <a href="tel:061823502990" className="hover:text-blue-600 font-semibold transition-colors">
                      06182-350290
                    </a>
                  </p>
                  <p>
                    <a href="tel:+919430060866" className="hover:text-blue-600 font-semibold transition-colors">
                      +91 9430060866
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Email Info */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600">
                  <Mail className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Email
                </h3>
                <p>
                  <a href="mailto:bdpsaraara@yahoo.com" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors break-all">
                    bdpsaraara@yahoo.com
                  </a>
                </p>
              </div>
            </div>

            {/* Office Timing */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600">
                  <Clock className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Office Timing
                </h3>
                <p className="text-slate-600 font-semibold">
                  08:30 AM - 2:30 PM
                </p>
              </div>
            </div>

            {/* School Registration Info */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600">
                  <Award className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Official Registration
                </h3>
                <div className="space-y-1 text-slate-600">
                  <p><span className="font-semibold">CBSE Affiliation No:</span> 330243</p>
                  <p><span className="font-semibold">Registration No:</span> 65237</p>
                </div>
              </div>
            </div>

            {/* Visit Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-semibold text-slate-900 mb-3">
                Plan Your Visit
              </h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ Explore our world-class infrastructure</li>
                <li>✓ Meet our experienced faculty</li>
                <li>✓ Tour our modern classrooms and labs</li>
                <li>✓ Learn about academic programs</li>
              </ul>
            </div>

            {/* Map Link Button */}
            <a
              href="https://www.google.com/maps/place/Bd+public+school/@25.5541949,84.6674322,17z/data=!4m6!3m5!1s0x398d5f572b0670c7:0x93f5a2d6aaa8a1d1!8m2!3d25.5541949!4d84.6674322"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Why Visit B.D. Public School?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">
                Academic Excellence
              </h4>
              <p className="text-slate-600 text-sm">
                CBSE affiliated institution with 575+ students and 38+ experienced teachers delivering quality education
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">
                Modern Infrastructure
              </h4>
              <p className="text-slate-600 text-sm">
                26 well-equipped classrooms, science labs, library, and sports facilities for comprehensive development
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">
                Holistic Development
              </h4>
              <p className="text-slate-600 text-sm">
                Focus on academics, sports, arts, and character building for overall student development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
