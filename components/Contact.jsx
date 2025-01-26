"use client"

import React, { useState, useEffect } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { CheckCircle, MapPin, Phone, Mail, Smartphone, Loader2, Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const formFields = [
  { name: "firstname", label: "First Name", type: "text", placeholder: "First Name" },
  { name: "lastname", label: "Last Name", type: "text", placeholder: "Last Name" },
  { name: "email", label: "Email", type: "email", placeholder: "example@email.com" },
  { name: "phone", label: "Phone number", type: "tel", placeholder: "+92 300 1234567" },
]

const contactInfo = [
  { icon: MapPin, content: "Office 205, Blue Tower,\nPlot 15, Sector F-7 Markaz,\nIslamabad, Pakistan" },
  { icon: Phone, content: "051-2345678" },
  { icon: Mail, content: "info@saylanimicrofinance.com", isLink: true },
  { icon: Smartphone, content: "0333-1234567 / 0300-9876543" },
]

const Contact = () => {
  const [state, handleSubmit] = useForm("xyzzkbyd")
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  })
  const [showIcon, setShowIcon] = useState(false)
  const [activeField, setActiveField] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  useEffect(() => {
    if (state.succeeded) {
      setShowIcon(true)
      setFormData({ firstname: "", lastname: "", email: "", phone: "", message: "" })
      const timer = setTimeout(() => setShowIcon(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [state.succeeded])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    handleSubmit(formData)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20 px-4 sm:px-6 lg:px-8"
      id="contact"
    >
      <motion.div className="container mx-auto" initial="hidden" animate="visible" variants={containerVariants}>
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400"
          variants={itemVariants}
        >
          Let&apos;s Connect
        </motion.h2>
        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
          {/* Form Section */}
          <motion.div
            className="flex-1 bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl"
            variants={itemVariants}
          >
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {formFields.map((field) => (
                  <div key={field.name} className="relative">
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      onFocus={() => setActiveField(field.name)}
                      onBlur={() => setActiveField("")}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 bg-white/5 border-2 border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-pink-400 transition-all duration-300"
                      required
                    />
                    <AnimatePresence>
                      {activeField === field.name && (
                        <motion.label
                          htmlFor={field.name}
                          className="absolute -top-6 left-2 text-sm text-pink-400 font-medium"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {field.label}
                        </motion.label>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setActiveField("message")}
                  onBlur={() => setActiveField("")}
                  placeholder="Your message"
                  className="w-full px-4 py-3 bg-white/5 border-2 border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-pink-400 transition-all duration-300 min-h-[150px] resize-y"
                  required
                />
                <AnimatePresence>
                  {activeField === "message" && (
                    <motion.label
                      htmlFor="message"
                      className="absolute -top-6 left-2 text-sm text-pink-400 font-medium"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      Message
                    </motion.label>
                  )}
                </AnimatePresence>
              </div>
              <motion.button
                type="submit"
                disabled={state.submitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {state.submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    {showIcon ? <CheckCircle className="w-5 h-5" /> : <Send className="w-5 h-5" />}
                    {showIcon ? "Message Sent" : "Send Message"}
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Address Section */}
          <motion.div
            className="flex-1 bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl"
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Get in Touch</h3>
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-pink-400 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    {item.isLink ? (
                      <a
                        href={`mailto:${item.content}`}
                        className="text-white text-lg hover:text-pink-400 transition-all duration-300"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-white text-lg whitespace-pre-line">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact

