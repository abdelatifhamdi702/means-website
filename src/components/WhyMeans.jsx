import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaLightbulb, FaHeadset } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const WhyMeans = () => {
  const [isInView, setIsInView] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('why-means')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  // Reasons data
  const reasons = [
    {
      id: 1,
      icon: <FaCheckCircle className="text-5xl text-[#65338f]" />,
      title: t('why.subtitle1'),
      description: t('why.text1'),
    },
    {
      id: 2,
      icon: <FaLightbulb className="text-5xl text-[#65338f]" />,
      title: t('why.subtitle2'),
      description: t('why.text2'),
    },
    {
      id: 3,
      icon: <FaHeadset className="text-5xl text-[#65338f]" />,
      title: t('why.subtitle3'),
      description: t('why.text3'),
    },
  ]

  return (
    <section
      id="why-means"
      className="py-20 px-6 md:px-16 bg-[#f8f5f1] overflow-hidden"
    >
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-[#65338f] mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -30 }}
          transition={{ duration: 1 }}
        >
          {t('why.title')}
        </motion.h2>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason) => (
            <motion.div
              key={reason.id}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
              transition={{ duration: 1.2, delay: reason.id * 0.2 }}
            >
              <div className="flex justify-center mb-6">{reason.icon}</div>
              <h3 className="text-2xl font-bold text-[#65338f] mb-4">
                {reason.title}
              </h3>
              <p className="text-lg text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyMeans
