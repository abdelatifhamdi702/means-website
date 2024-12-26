import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  FaRegCalendarAlt,
  FaBirthdayCake,
  FaStore,
  FaGift,
  FaUsers,
} from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const [isInView, setIsInView] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('services')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  // Services data
  const services = [
    {
      id: 1,
      icon: <FaRegCalendarAlt className="text-4xl text-[#65338f]" />,
      title: t('services.subtitle1'),
      description: t('services.text1'),
    },
    {
      id: 2,
      icon: <FaBirthdayCake className="text-4xl text-[#65338f]" />,
      title: t('services.subtitle2'),
      description: t('services.text2'),
    },
    {
      id: 3,
      icon: <FaStore className="text-4xl text-[#65338f]" />,
      title: t('services.subtitle3'),
      description: t('services.text3'),
    },
    {
      id: 4,
      icon: <FaGift className="text-4xl text-[#65338f]" />,
      title: t('services.subtitle4'),
      description: t('services.text4'),
    },
    {
      id: 5,
      icon: <FaUsers className="text-4xl text-[#65338f]" />,
      title: t('services.subtitle5'),
      description: t('services.text5'),
    },
  ]

  return (
    <section
      id="services"
      className="relative py-20 px-6 md:px-16 bg-white overflow-hidden"
    >
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-[#65338f] mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -30 }}
          transition={{ duration: 1 }}
        >
          {t('services.title')}
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
              transition={{ duration: 1.2, delay: service.id * 0.2 }}
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-[#65338f] mb-4">
                {service.title}
              </h3>
              <p className="text-lg text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
