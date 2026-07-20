'use client'

import Image from 'next/image'
import { Quote } from 'lucide-react'

export default function Founder() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Founder's Vision
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Driven by a passion for education, Sri Bhagwan Das founded B.D. Public School to nurture future generations
          </p>
        </div>

        {/* Founder Profile */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Founder Image */}
          <div className="flex justify-center">
            <div className="relative w-80 h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/founder.png"
                alt="Sri Bhagwan Das, Founder of B.D. Public School"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Founder Biography */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">
                Sri Bhagwan Das
              </h3>
              <p className="text-blue-600 font-semibold text-lg">Founder & Visionary</p>
            </div>

            {/* Education & Background */}
            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600">
              <h4 className="font-bold text-slate-900 mb-3">Educational Background</h4>
              <p className="text-slate-700 leading-relaxed">
                Sri Bhagwan Das (born 1935), an M.Sc. in Chemistry, began his career as a lecturer in Maharaja College, Ara. With remarkable success and unwavering fairness, he transitioned to family business and has been managing it with exceptional acumen and integrity.
              </p>
            </div>

            {/* Founder's Philosophy */}
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <Quote className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-800 italic font-semibold leading-relaxed">
                    "The Success, however, could not wean him away from things educational, which has been close to his heart and mind from the very beginning of his career"
                  </p>
                </div>
              </div>
            </div>

            {/* Journey to B.D. Public School */}
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900">The Vision Behind B.D. Public School</h4>
              <p className="text-slate-700 leading-relaxed">
                As a socially-conscious entrepreneur with an unwavering commitment to education, Sri Bhagwan Das perceived a genuine opportunity to serve society through quality education. His visionary approach led to the establishment of B.D. Public School, Ara—an institution charted with utmost care and dedication.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Today, the school stands as a testament to his belief that education is the most powerful tool for transforming lives and building a better future for our youth.
              </p>
            </div>

            {/* Key Values */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-4 text-center">
                <div className="font-bold text-blue-600 mb-1">Integrity</div>
                <p className="text-xs text-slate-600">Guiding Principle</p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-4 text-center">
                <div className="font-bold text-blue-600 mb-1">Excellence</div>
                <p className="text-xs text-slate-600">In Education</p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-4 text-center">
                <div className="font-bold text-blue-600 mb-1">Service</div>
                <p className="text-xs text-slate-600">To Society</p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-4 text-center">
                <div className="font-bold text-blue-600 mb-1">Vision</div>
                <p className="text-xs text-slate-600">For Future</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
