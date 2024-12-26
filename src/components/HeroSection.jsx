import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import bgImage from '../assets/bg.jpg'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

const HeroSection = () => {
  const { t, i18n } = useTranslation()
  const [isInView, setIsInView] = useState(false)

  // Intersection Observer to detect when the Hero section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    )

    const section = document.getElementById('hero')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Purple overlay */}
      <div className="absolute inset-0 bg-primary bg-opacity-50"></div>

      <motion.div
        className="relative z-10 mt-20 px-6 sm:px-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Company Name */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {t('hero.title')}
        </motion.h1>

        {/* Slogan with continuous animation */}
        <motion.p
          className="text-2xl sm:text-3xl md:text-5xl italic mb-8 font-semibold"
          initial={{ opacity: 0 }}
          animate={{
            scale: isInView ? [1, 1.1, 1] : [1, 1, 1], // The text will grow and shrink when in view
            opacity: isInView ? [1, 0.9, 1] : [1, 1, 1], // Opacity will bounce slightly when in view
          }}
          transition={{
            scale: {
              duration: 2,
              ease: 'easeInOut',
              repeat: isInView ? Infinity : 0,
              repeatDelay: 1,
            },
            opacity: {
              duration: 2,
              ease: 'easeInOut',
              repeat: isInView ? Infinity : 0,
              repeatDelay: 1,
            },
          }}
        >
          {t('hero.slogan')}
        </motion.p>

        {/* Call-to-action button with subtle design */}
        <motion.a
          href="#contact-us"
          className="bg-[#65338f] text-white py-3 px-10 rounded-lg text-lg font-semibold transform transition-all duration-300 ease-in-out hover:bg-[#8e4baf] hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#65338f] inline-flex items-center"
          initial={{ scale: 0 }}
          animate={{ scale: isInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span>{t('hero.button')}</span>
          {i18n.language === 'en' ? (
            <FiArrowRight className="inline-block ml-3 text-xl transition-transform duration-300 ease-in-out" />
          ) : (
            <FiArrowLeft className="inline-block mr-3 text-xl transition-transform duration-300 ease-in-out" />
          )}
        </motion.a>
      </motion.div>
    </section>
  )
}

export default HeroSection
