import Image from 'next/image'

export default function Gallery() {
  const galleryImages = [
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/699921d96e0c47.33832447-YCt9wSG2c7adL2DZBrcbmcYWGhOHAZ.webp',
      alt: 'Main Building',
      title: 'Campus Building'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/699d9047d56ea6.56757192-Ac9ZgwNJRo5HYUrBva19iWlNMPm4P0.webp',
      alt: 'Scout Members',
      title: 'Student Activities'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/699ee919550c15.73802823-B4A8Nbjh2BJXlArSqjtYb4PWejolFh.webp',
      alt: 'School Assembly',
      title: 'School Assembly'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/699d8bba217b22.78649226-PaL8QyT6mtMh741siLVLpt2pRWlIOz.webp',
      alt: 'Campus Overview',
      title: 'Campus Overview'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6999757782e978.03446305-CXKsQlvblHhUwRJUSo2OHAjdXUlQPQ.webp',
      alt: 'School Courtyard',
      title: 'School Courtyard'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/699975a16ac044.84311269-Rtyqwcao8uFWo1lHzzjjVQDtsYDVNY.webp',
      alt: 'Campus Entrance',
      title: 'Campus Entrance'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6999760acf3e50.14391806-3eHT0UxnMw6VB0LvyiFHi69qG8Ug56.webp',
      alt: 'Sports Ground',
      title: 'Sports Ground'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/69994cf3bc70a1.91720174-11BumI75QEvujbRYB8C0xyu70A2j21.webp',
      alt: 'Assembly Stage',
      title: 'Assembly Stage'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/699926f7c74270.98074689-JGDIL8wXVBFpo7cWzMz6WmZqOBE0AD.webp',
      alt: 'Playground',
      title: 'Playground'
    }
  ]

  return (
    <section id="gallery" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Campus Gallery
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A glimpse into the vibrant campus life at B.D. Public School
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white w-full">
                  <h3 className="font-bold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Ready to Join Our School Family?
          </h3>
          <p className="text-slate-600 text-lg mb-8">
            We invite you to visit our campus and experience the B.D. Public School difference firsthand.
          </p>
          <p className="text-slate-700 font-semibold mb-2">
            Location: Ara, Bihar
          </p>
          <p className="text-slate-600">
            Visit our campus to explore our facilities and meet our dedicated team
          </p>
        </div>
      </div>
    </section>
  )
}
