import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Differentials from "./components/Differentials"
import Menu from "./components/Menu"
import FeaturedDishes from "./components/FeaturedDishes"
import Gallery from "./components/Gallery"
import Experience from "./components/Experience"
import Testimonials from "./components/Testimonials"
import Events from "./components/Events"
import CTA from "./components/CTA"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Differentials />
        <Menu />
        <FeaturedDishes />
        <Gallery />
        <Experience />
        <Testimonials />
        <Events />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
