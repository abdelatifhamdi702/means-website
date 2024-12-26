import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import placeholderImage from '../assets/vision.png' // Replace with your vector once available
import { useTranslation } from 'react-i18next'

const Vision = () => {
  const [isInView, setIsInView] = useState(false)
  const { t, i18n } = useTranslation()
  // Intersection Observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    )

    const section = document.getElementById('vision')
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
      id="vision"
      className="relative py-20 px-6 md:px-16 bg-[#f8f5f1] overflow-hidden"
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
            {t('vision.title')}
          </motion.h2>

          {/* Section Description */}
          <motion.p
            className="text-lg sm:text-xl text-[#65338f] mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 1.2 }}
          >
            {t('vision.text')}
          </motion.p>
        </motion.div>

        {/* Image Section (Right Side) */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          <img
            src={placeholderImage}
            alt="Vision"
            className="w-full h-auto max-w-md mx-auto rounded-lg shadow-xl object-contain"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Vision
