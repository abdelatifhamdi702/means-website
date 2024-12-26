import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import About from './components/About'
import Vision from './components/Vision'
import Services from './components/Services'
import WhyMeans from './components/WhyMeans'
import Mission from './components/Mission'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import { useTranslation } from 'react-i18next'

function App() {
  const { i18n } = useTranslation()

  return (
    <div className={`${i18n.language === 'en' ? 'font-sans' : 'font-arabic'}`}>
      <Navbar />
      <HeroSection />
      <About />
      <Vision />
      <Services />
      <WhyMeans />
      <Mission />
      <Contact />
      <Footer />
      <ScrollToTopButton />
      {/* Add other sections here as we continue building */}
    </div>
  )
}

export default App
