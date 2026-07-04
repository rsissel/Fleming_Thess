import HeroSection from './components/hero-section'
import NavBar from './components/nav-bar'
import AboutSection from './components/about-section'
import GallerySection from './components/gallery-section'
import VideoSection from './components/video-section'
import AreaSection from './components/area-section'
import AmenitiesSection from './components/amenities-section'
import ContactSection from './components/contact-section'
import FooterSection from './components/footer-section'

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <VideoSection />
      <AmenitiesSection />
      <AreaSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}
