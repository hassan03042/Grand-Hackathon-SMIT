"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, ArrowUpRight, ChevronRight, ChevronUp, Send } from "lucide-react"
import Logo from "./Logo"

const socialLinks = [
  { icon: Facebook, href: "#", color: "from-blue-400 to-blue-600" },
  { icon: Twitter, href: "#", color: "from-blue-300 to-blue-500" },
  { icon: Instagram, href: "#", color: "from-pink-500 to-purple-500" },
  { icon: Linkedin, href: "#", color: "from-blue-500 to-blue-700" },
]

const quickLinks = ["Home", "About Us", "Services", "Contact"]

const services = ["Qarze Hasana", "Business Loans", "Education Loans", "Healthcare Loans"]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

const Footer = () => {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the newsletter subscription
    console.log("Subscribed with email:", email)
    setIsSubmitted(true)
    setEmail("")
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <footer className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
      <motion.div
        className="container mx-auto px-4 py-16 relative z-10"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Logo light={true} />
            <p className="text-indigo-200">
              Empowering communities with accessible, interest-free microfinance solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center hover:shadow-lg transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-indigo-200 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <motion.li key={service} whileHover={{ x: 5 }}>
                  <Link
                    href={`/services/${service.toLowerCase().replace(" ", "-")}`}
                    className="text-indigo-200 hover:text-white flex items-center gap-2 transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {service}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Newsletter</h3>
            <p className="text-indigo-200">Subscribe to our newsletter for updates on our microfinance initiatives.</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                />
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.span
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-400"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.3 }}
                    >
                      ✓
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              <motion.button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium hover:from-pink-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-indigo-200 text-center md:text-left">
            © {new Date().getFullYear()} Saylani Micro Finance. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-indigo-200 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-indigo-200 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg flex items-center justify-center hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <ChevronUp className="w-6 h-6 text-white" />
          </motion.button>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer

