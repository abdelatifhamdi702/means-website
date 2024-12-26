import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { FiChevronDown } from 'react-icons/fi'
import Flag from 'react-world-flags'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const { t, i18n } = useTranslation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)

  const sections = [
    { id: 'about' },
    { id: 'vision' },
    { id: 'services' },
    { id: 'why-means' },
    { id: 'mission' },
    { id: 'contact-us' },
  ]

  const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen)

  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang)
    setIsLangMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-6">
        {/* Logo */}
        <div>
          <a href="#top">
            <img
              src={logo}
              alt="MEANS Business Services"
              className="h-14 md:h-16 cursor-pointer"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav
          className={`hidden md:flex ${
            i18n.language === 'ar' ? 'space-x-reverse' : ''
          } space-x-10 text-lg font-medium text-gray-800`}
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`} // Use the fixed id for the href
              className="relative group hover:text-primary transform hover:scale-105 transition-all"
            >
              {t(`navbar.${section.id}`)} {/* Translate the section name */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </a>
          ))}
        </nav>

        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={toggleLangMenu}
            className={`flex items-center space-x-3 ${
              i18n.language === 'ar' ? 'space-x-reverse' : ''
            }
 py-2 px-4 rounded-full border border-gray-300 hover:bg-primary hover:text-white transition-all bg-gray-100`}
          >
            <Flag
              code={i18n.language === 'en' ? 'US' : 'SA'}
              className="w-6 h-6"
            />
            <span className="text-lg font-semibold">
              {i18n.language === 'en'
                ? t('navbar.english')
                : t('navbar.arabic')}
            </span>
            <FiChevronDown />
          </button>

          {/* Language Dropdown Menu */}
          {isLangMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border border-gray-300 z-10">
              <button
                onClick={() => handleLangChange('en')}
                className="flex items-center space-x-2 w-full text-left py-2 px-4 text-lg hover:bg-gray-100 transition-colors"
              >
                <Flag code="US" className="w-6 h-6" />
                <span>{t('navbar.english')}</span>
              </button>
              <button
                onClick={() => handleLangChange('ar')}
                className="flex items-center space-x-2 w-full text-left py-2 px-4 text-lg hover:bg-gray-100 transition-colors"
              >
                <Flag code="SA" className="w-6 h-6" />
                <span>{t('navbar.arabic')}</span>
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="block md:hidden text-gray-800 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="bg-white text-gray-800 flex flex-col items-center space-y-6 py-6 md:hidden text-lg">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`} // Use the fixed id for the href
              className="hover:text-primary transition-colors"
            >
              {t(`navbar.${section.id}`)} {/* Translate the section name */}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Navbar
