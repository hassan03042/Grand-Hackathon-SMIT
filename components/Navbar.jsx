"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div className="text-white text-xl font-bold" whileHover={{ scale: 1.05 }}>
            <Link href="/" className="hover:text-pink-300 transition-colors duration-300">
              Saylani Micro Finance
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div className="md:hidden" whileTap={{ scale: 0.95 }}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-pink-300 focus:outline-none transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>

          {/* Login and Signup Buttons (Desktop) */}
          <div className="hidden md:flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors duration-300"
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors duration-300"
            >
              Sign Up
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4 space-y-4 bg-indigo-800 rounded-lg p-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.button
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </motion.button>
              <motion.button
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Navbar

