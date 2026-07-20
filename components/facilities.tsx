import Image from 'next/image'
import { Users, BookOpen, Zap, Trophy } from 'lucide-react'

export default function Facilities() {
  const facilities = [
    {
      icon: BookOpen,
      title: 'Modern Classrooms',
      description: 'Well-equipped classrooms with digital learning boards and interactive tools for enhanced teaching-learning experience.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/699d8bba217b22.78649226-PaL8QyT6mtMh741siLVLpt2pRWlIOz.webp'
    },
    {
      icon: Zap,
      title: 'Science & Computer Labs',
      description: 'State-of-the-art laboratories equipped with modern apparatus for practical learning and computer education.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6999191f90ecc5.08439536-1hA2KJOVM3BAKO9KDN35XsseddQmIM.webp'
    },
    {
      icon: BookOpen,
      title: 'Library',
      description: 'Comprehensive library with extensive collection of books, journals, and digital resources for student research and knowledge.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/69991821ccaae9.18729277-bE5q2QCqcPGIri5ErORA8CJhg0YGgc.webp'
    },
    {
      icon: Trophy,
      title: 'Sports & Recreation',
      description: 'Multiple sports grounds and courts for volleyball, badminton, cricket, and outdoor activities.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/699976bd1beac4.25612582-2drA3eqejxIAb1ZghThGNSJzGDq2W8.webp'
    }
  ]

  return (
    <section id="facilities" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            World-Class Facilities
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive infrastructure designed to support academic excellence and holistic student development
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {facilities.map((facility, index) => {
            const Icon = facility.icon
            return (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {facility.title}
                    </h3>
                  </div>
                  <p className="text-slate-600">
                    {facility.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Features */}
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
            Additional Amenities
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚌</span>
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Safe & Secure Transport</h4>
              <p className="text-slate-600">Well-maintained school buses with trained drivers ensuring student safety</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧪</span>
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Advanced Laboratories</h4>
              <p className="text-slate-600">Science, chemistry, physics, and biology labs with modern equipment</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Experienced Staff</h4>
              <p className="text-slate-600">Qualified and dedicated faculty committed to student success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
