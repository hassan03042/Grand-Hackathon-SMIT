"use client"

import { useState } from "react"
import { Link as ScrollLink } from "react-scroll"
import { Facebook, Linkedin, Twitter, Menu } from "lucide-react"
import Logo from "./Logo"
import Nav from "./Nav"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="w-full fixed py-4 z-50 bg-green-800 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <Nav
          containerStyles="hidden xl:flex"
          listStyles="flex gap-6"
          linkStyles="text-white hover:text-yellow-300 transition-all duration-300 uppercase text-sm font-medium tracking-wide"
        />

        {/* Social Media Icons */}
        <div className="hidden xl:flex items-center gap-4">
          <a href="#" className="text-white hover:text-yellow-300 transition-colors" aria-label="Facebook">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center shadow-md hover:bg-green-600 transition-colors">
              <Facebook className="w-5 h-5" />
            </div>
          </a>
          <a href="#" className="text-white hover:text-yellow-300 transition-colors" aria-label="Twitter">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center shadow-md hover:bg-green-600 transition-colors">
              <Twitter className="w-5 h-5" />
            </div>
          </a>
          <a href="#" className="text-white hover:text-yellow-300 transition-colors" aria-label="LinkedIn">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center shadow-md hover:bg-green-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </div>
          </a>
        </div>

        {/* Hamburger Menu */}
        <button className="xl:hidden text-white focus:outline-none" onClick={toggleMobileMenu}>
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-green-800 shadow-md z-40">
          <Nav
            containerStyles="flex flex-col items-center py-4"
            listStyles="flex flex-col gap-4"
            linkStyles="text-white hover:text-yellow-300 transition-all duration-300 uppercase text-sm font-medium tracking-wide"
          />
          <div className="flex justify-center gap-4 py-4">
            <a href="#" className="text-white hover:text-yellow-300 transition-colors" aria-label="Facebook">
              <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center shadow-md hover:bg-green-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </div>
            </a>
            <a href="#" className="text-white hover:text-yellow-300 transition-colors" aria-label="Twitter">
              <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center shadow-md hover:bg-green-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </div>
            </a>
            <a href="#" className="text-white hover:text-yellow-300 transition-colors" aria-label="LinkedIn">
              <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center shadow-md hover:bg-green-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

