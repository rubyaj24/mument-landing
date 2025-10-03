import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isNotInHeroSection, setIsNotInHeroSection] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the hero section (viewport height)
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      
      // Consider user has left hero section if they've scrolled more than 80% of viewport height
      const hasLeftHero = scrollY > viewportHeight * 0.8
      setIsNotInHeroSection(hasLeftHero)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`backdrop-blur-md shadow-lg border transition-all duration-500 ${
        isNotInHeroSection 
          ? 'bg-blue-600/95 border-none w-full rounded-none' 
          : 'bg-white/90 border-gray-100 max-w-6xl rounded-2xl mt-4 mx-auto'
      }`}>
        <nav className={`flex items-center justify-between transition-all duration-500 ${
          isNotInHeroSection 
            ? 'px-8 py-4 max-w-7xl mx-auto' 
            : 'px-6 py-4'
        }`}>
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Image
              src={isNotInHeroSection ? "/mument.png" : "/mument-black.png"}
              alt="µment Logo"
              width={100}
              height={100}
              className={`transition-all duration-500 ${isNotInHeroSection ? 'brightness-0 invert' : ''}`}
            />
          </div>

          {/* Desktop Navigation - Right side */}
          <ul className="hidden md:flex space-x-6 gap-10">
            <li><a href="#" className={`font-semibold transition-colors duration-500 ${
              isNotInHeroSection 
                ? 'text-white hover:text-blue-200' 
                : 'text-gray-700 hover:text-blue-600'
            }`}>Home</a></li>
            <li><a href="#" className={`font-semibold transition-colors duration-500 ${
              isNotInHeroSection 
                ? 'text-white hover:text-blue-200' 
                : 'text-gray-700 hover:text-blue-600'
            }`}>About</a></li>
            <li><a href="#" className={`font-semibold transition-colors duration-500 ${
              isNotInHeroSection 
                ? 'text-white hover:text-blue-200' 
                : 'text-gray-700 hover:text-blue-600'
            }`}>Enroll</a></li>
            <li><a href="#" className={`font-semibold transition-colors duration-500 ${
              isNotInHeroSection 
                ? 'text-white hover:text-blue-200' 
                : 'text-gray-700 hover:text-blue-600'
            }`}>Contact</a></li>
          </ul>

          {/* Hamburger Menu Button - Mobile only */}
          <button 
            className="md:hidden flex flex-col space-y-1 p-2"
            onClick={toggleDrawer}
          >
            <RxHamburgerMenu className={`text-3xl transition-all duration-500 ${
              isNotInHeroSection ? 'text-white' : 'text-gray-700'
            } ${isDrawerOpen ? 'rotate-45' : ''}`} />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${isDrawerOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {/* Overlay */}
        <div 
          className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${isDrawerOpen ? 'bg-opacity-50' : 'bg-opacity-0'}`}
          onClick={toggleDrawer}
        ></div>
        
        {/* Drawer */}
        <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-all duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-75'}`}>
          <div className="p-4 animate-in slide-in-from-right duration-300">
            {/* Close button */}
            <button 
              className="flex ml-auto mb-6 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              onClick={toggleDrawer}
              aria-label="Close menu"
            >
              <div className="relative w-6 h-6">
                <span className="block w-6 h-0.5 bg-gray-700 rotate-45 absolute top-1/2 left-0 transform -translate-y-1/2 transition-all duration-200"></span>
                <span className="block w-6 h-0.5 bg-gray-700 -rotate-45 absolute top-1/2 left-0 transform -translate-y-1/2 transition-all duration-200"></span>
              </div>
            </button>
            
            {/* Mobile Navigation */}
            <ul className="flex flex-col space-y-4">
              <li className={`transform transition-all duration-300 delay-100 ${isDrawerOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
                <a href="#" className="block text-gray-700 font-semibold hover:text-blue-600 transition-colors py-2 text-lg hover:bg-gray-50 rounded px-2" onClick={toggleDrawer}>Home</a>
              </li>
              <li className={`transform transition-all duration-300 delay-150 ${isDrawerOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
                <a href="#" className="block text-gray-700 font-semibold hover:text-blue-600 transition-colors py-2 text-lg hover:bg-gray-50 rounded px-2" onClick={toggleDrawer}>About</a>
              </li>
              <li className={`transform transition-all duration-300 delay-200 ${isDrawerOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
                <a href="#" className="block text-gray-700 font-semibold hover:text-blue-600 transition-colors py-2 text-lg hover:bg-gray-50 rounded px-2" onClick={toggleDrawer}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header