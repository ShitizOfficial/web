import Image from 'next/image'
import { Check } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About BDPS Ara - Best School in Ara
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            BD Public School Ara is the best school in Ara offering CBSE education with world-class infrastructure, experienced faculty, and commitment to holistic development at Nawada Chowk, Ara Bihar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/69994c1c87f439.21828984-7FQWjqEyMaYWYpWqXV6KphZHnXwDnR.webp"
              alt="B.D. Public School Campus View"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Our Mission
            </h3>
            <p className="text-slate-700 text-lg mb-6">
              <span className="font-semibold text-blue-600">Educating Mind, Inspiring Future</span> - To provide an educational environment in which students feel safe, secured, empowered, energized and unlimited in pursuing learning experiences to their maximum potential.
            </p>

            <div className="mb-6">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Our Vision</h4>
              <p className="text-slate-700 mb-4">
                B.D. Public School provides holistic education that emphasizes high academic and social standards, promotes healthy lifestyle, cultivates critical thinking, fosters scientific temper, and instills desire for lifelong learning.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">CBSE Affiliated Education</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Experienced and Qualified Faculty</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">World-Class Infrastructure</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Safe and Secure Environment</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">Comprehensive Skill Development</span>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              School Leadership
            </h3>
            <p className="text-slate-600 text-lg">
              Dedicated to academic excellence and student welfare
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md border border-blue-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 relative mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/699b0605565d95.44977517-iOBNUFjuy862h2xBbib4xDQM3FrCyj.webp"
                    alt="School Principal"
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Principal</h4>
                <p className="text-slate-600 mt-2">
                  Leading with vision and dedication to nurture excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
