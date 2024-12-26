import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import contactImage from '../assets/contact.png' // Import the image
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const [isInView, setIsInView] = useState(false)
  const { t, i18n } = useTranslation()

  // Intersection Observer to detect when the Contact section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    )

    const section = document.getElementById('contact-us')
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
      id="contact-us"
      className="relative py-20 px-6 md:px-16 bg-white text-[#65338f]"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side: Contact Info and Image */}
        <motion.div
          className={`w-full md:w-1/2 text-center ${
            i18n.language === 'en' ? 'md:text-left' : 'md:text-right'
          }`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed mb-8">
            {t('contact.text')}
          </p>
          {/* Add the imported image here */}
          <img
            src={contactImage} // Use the imported image
            alt="Contact Us"
            className="mx-auto md:mx-0 w-64 md:w-96"
          />
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          className="w-full md:w-1/2 bg-[#f5f5f5] p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          <form
            name="contact"
            method="POST"
            action="https://formsubmit.co/falzeer@means-sa.com,lamia@means-sa.com" // Replace with your FormSubmit email
            className="space-y-6"
          >
            <div>
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="name"
              >
                {t('contact.l1')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-[#65338f] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#65338f] placeholder-gray-500"
                placeholder={t('contact.p1')}
              />
            </div>

            <div>
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="email"
              >
                {t('contact.l2')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-[#65338f] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#65338f] placeholder-gray-500"
                placeholder={t('contact.p2')}
              />
            </div>

            <div>
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="message"
              >
                {t('contact.l3')}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                className="w-full px-4 py-3 border border-[#65338f] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#65338f] placeholder-gray-500"
                placeholder={t('contact.p3')}
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 text-lg font-semibold text-white bg-[#65338f] rounded-lg shadow-lg hover:bg-[#8e4baf] transition-all duration-300"
              >
                {t('contact.button')}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
