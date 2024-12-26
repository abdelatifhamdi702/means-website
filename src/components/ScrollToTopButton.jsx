import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa' // Importing an icon for the button

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button after scrolling down 100px from the top
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-6 bg-[#65338f] text-white p-4 rounded-full shadow-lg hover:bg-[#8e4baf] transition duration-300"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </>
  )
}

export default ScrollToTopButton
