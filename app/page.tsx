import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Statistics from '@/components/statistics'
import Founder from '@/components/founder'
import Facilities from '@/components/facilities'
import Infrastructure from '@/components/infrastructure'
import Gallery from '@/components/gallery'
import Location from '@/components/location'
import Footer from '@/components/footer'
import Popup from '@/components/popup'

export default function Home() {
  return (
    <>
      <Popup />
      <Header />
      <Hero />
      <Statistics />
      <About />
      <Founder />
      <Facilities />
      <Infrastructure />
      <Gallery />
      <Location />
      <Footer />
    </>
  )
}
