import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png' // Replace with the path to your logo
import { useTranslation } from 'react-i18next'

const Mission = () => {
  const [isInView, setIsInView] = useState(false)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('mission')
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
      id="mission"
      className="relative py-20 px-6 md:px-16 bg-gradient-to-tr from-[#65338f] to-[#beb482] text-white"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side: Mission Text */}
        <motion.div
          className={`w-full md:w-1/2 text-center ${
            i18n.language === 'en' ? 'md:text-left' : 'md:text-right'
          }`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            {t('mission.title')}
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed mb-8">
            {t('mission.text')}
          </p>
        </motion.div>

        {/* Right Side: Company Logo */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-white bg-opacity-20 p-10 rounded-full shadow-lg">
            <img
              src={logo}
              alt="MEANS Logo"
              className="w-32 h-32 md:w-40 md:h-40 object-contain transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-10 pointer-events-none"></div>
    </section>
  )
}

export default Mission
