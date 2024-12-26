import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import image from '../assets/about.png' // Your image path here
import { useTranslation } from 'react-i18next'

const About = () => {
  const [isInView, setIsInView] = useState(false)
  const { t, i18n } = useTranslation()

  // Intersection Observer to detect when the About section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    )

    const section = document.getElementById('about')
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
      id="about"
      className="relative py-20 px-6 md:px-16 bg-white overflow-hidden"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* Text Section (Left Side) */}
        <motion.div
          className={`w-full md:w-1/2 text-center ${
            i18n.language === 'en' ? 'md:text-left' : 'md:text-right'
          }`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
          transition={{ duration: 1 }}
        >
          {/* Section Title */}
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-[#65338f] mb-6 leading-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -30 }}
            transition={{ duration: 1 }}
          >
            {t('about.title')}
          </motion.h2>

          {/* Section Description */}
          <motion.p
            className="text-lg sm:text-xl text-[#65338f] mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 1.2 }}
          >
            {t('about.text')}
          </motion.p>

          {/* Learn More Button */}
          <motion.a
            href="#services"
            className="inline-block px-8 py-4 text-lg font-semibold text-white bg-[#65338f] rounded-lg shadow-lg hover:bg-[#8e4baf] hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            {t('about.button')}
          </motion.a>
        </motion.div>

        {/* Image Section (Right Side) */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          <img
            src={image}
            alt="About"
            className="w-full h-auto max-w-md mx-auto rounded-lg shadow-xl object-contain"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default About
