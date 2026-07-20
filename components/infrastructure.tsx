import Image from 'next/image'

export default function Infrastructure() {
  const infrastructureItems = [
    {
      title: 'Computer Lab',
      description: 'Fully equipped computer lab with latest systems and software for IT education.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6999191f90ecc5.08439536-1hA2KJOVM3BAKO9KDN35XsseddQmIM.webp'
    },
    {
      title: 'Science Laboratory',
      description: 'Advanced science labs with physics, chemistry, and biology sections for hands-on learning.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6999187491cc38.83260828-xjlmlObxbO6HU8o9mTodNSiGlZoVDQ.webp'
    },
    {
      title: 'Sports Complex',
      description: 'Spacious grounds for various sports including volleyball, badminton, and cricket.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/699976bd1beac4.25612582-2drA3eqejxIAb1ZghThGNSJzGDq2W8.webp'
    },
    {
      title: 'Digital Library',
      description: 'Extensive collection of books and digital resources for student research and development.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/69991821ccaae9.18729277-bE5q2QCqcPGIri5ErORA8CJhg0YGgc.webp'
    },
    {
      title: 'Modern Building',
      description: 'Contemporary architecture with ample natural light and ventilation for comfortable learning.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/69994c1c87f439.21828984-7FQWjqEyMaYWYpWqXV6KphZHnXwDnR.webp'
    },
    {
      title: 'School Transport',
      description: 'Fleet of yellow buses ensuring safe and timely transportation of students.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/699bdb1c9049e4.77942341-TqU2AVELagYQoC2Yss6iB2HKEH2SvQ.webp'
    }
  ]

  return (
    <section id="infrastructure" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Campus Infrastructure
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            State-of-the-art facilities designed for comprehensive student development
          </p>
        </div>

        {/* Infrastructure Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {infrastructureItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
