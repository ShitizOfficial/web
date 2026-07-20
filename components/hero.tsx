import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/699921d96e0c47.33832447-YCt9wSG2c7adL2DZBrcbmcYWGhOHAZ.webp"
          alt="B.D. Public School Campus - Main Building"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="text-white">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-300 mb-4">
                A Unit of Ara Bhagwan Das Educational Society
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-balance">
                B.D. Public School, Ara
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-100">
                BD Public School Ara - Premier CBSE Education at Nawada Chowk
              </p>
              <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-xl">
                Best CBSE school in Ara offering world-class education with 575+ students, 38+ experienced teachers, and 26 well-equipped classrooms. Located at Nawada Chowk, Ara Bihar. Also known as Bhagwan Das Public School and BDPS Arrah.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#about" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                  Learn More
                </a>
                <a href="#facilities" className="inline-block bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-8 rounded-lg backdrop-blur-sm transition duration-300 border border-white/30">
                  Explore Facilities
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
