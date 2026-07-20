'use client'

import { Users, Award, BookOpen } from 'lucide-react'

export default function Statistics() {
  const stats = [
    {
      icon: Users,
      number: '575+',
      label: 'Students',
      description: 'Diverse learning community',
    },
    {
      icon: Award,
      number: '38+',
      label: 'Teachers',
      description: 'Experienced educators',
    },
    {
      icon: BookOpen,
      number: '26',
      label: 'Classrooms',
      description: 'Well-equipped learning spaces',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            School at a Glance
          </h2>
          <p className="text-lg text-blue-100">
            Building a community of learners and leaders
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 text-center hover:bg-white/15 transition duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-white/20 p-4 rounded-full">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </h3>
                <p className="text-xl font-semibold text-blue-100 mb-2">
                  {stat.label}
                </p>
                <p className="text-blue-200 text-sm">
                  {stat.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 pt-12 border-t border-white/20 text-center">
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            With over <span className="font-bold text-white">575 students</span> and <span className="font-bold text-white">38+ dedicated educators</span> across <span className="font-bold text-white">26 well-equipped classrooms</span>, B.D. Public School provides personalized attention and quality education to every child.
          </p>
        </div>
      </div>
    </section>
  )
}
