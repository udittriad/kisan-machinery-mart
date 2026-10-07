import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import TractorSection from '../components/TractorSection.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import Offers from '../components/Offers.jsx'
import About from '../components/About.jsx'
import Gallery from '../components/Gallery.jsx'
import Location from '../components/Location.jsx'
import Testimonials from '../components/Testimonials.jsx'
import FAQ from '../components/FAQ.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import FloatingButtons from '../components/FloatingButtons.jsx'

export default function Home() {
  return <><Navbar /><main><Hero /><TractorSection /><WhyChooseUs /><Offers /><About /><Gallery /><Location /><Testimonials /><FAQ /><Contact /></main><Footer /><FloatingButtons /></>
}
