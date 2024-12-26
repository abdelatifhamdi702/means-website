import React from 'react'
import { FaWhatsapp } from 'react-icons/fa' // Import WhatsApp icon
import logo from '../assets/logo.png' // Use your logo here
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-[#65338f] text-white py-3 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center md:mb-0 p-2 bg-white rounded-full">
          <img
            src={logo}
            alt="MEANS Business Services"
            className="h-12 md:h-16 shadow-lg"
          />
        </div>

        {/* Footer Info */}
        <div className="text-center my-4">
          {/*<p className="text-sm">
            Feel free to reach out to us for any inquiries:
          </p>
          <div className="mt-2 space-y-1">
            <a
              href="mailto:falzeer@means-sa.com"
              className="text-sm underline hover:text-gray-200 transition-colors"
            >
              falzeer@means-sa.com
            </a>
            <br />
            <a
              href="mailto:lamia@means-sa.com"
              className="text-sm underline hover:text-gray-200 transition-colors"
            >
              lamia@means-sa.com
            </a>
          </div>*/}
          <p className="text-sm mt-2">
            © {new Date().getFullYear()} {t('footer.rights')}
          </p>
        </div>

        {/* Improved WhatsApp Button */}
        <div className="mt-4 md:mt-0">
          <a
            href="https://wa.me/+966533569518"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105"
          >
            <FaWhatsapp className="text-xl mx-2 animate-bounce" />
            WhatsApp
          </a>
        </div>

        {/* Social Media Icons (Commented Out) */}
        {/*
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" className="text-white hover:text-gray-200">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" className="text-white hover:text-gray-200">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" className="text-white hover:text-gray-200">
            <FaLinkedinIn />
          </a>
          <a href="https://twitter.com" className="text-white hover:text-gray-200">
            <FaTwitter />
          </a>
        </div>
        */}
      </div>
    </footer>
  )
}

export default Footer
