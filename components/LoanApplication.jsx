"use client"

import React, { useState } from "react"
import { CakeSlice, Home, Briefcase, GraduationCap, ChevronRight, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const loanCategories = [
  {
    title: "Wedding Loans",
    icon: CakeSlice,
    subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
    maxLoan: "PKR 5 Lakh",
    loanPeriod: "3 years",
    color: "from-pink-500 to-red-500",
    textColor: "text-pink-100",
    hoverColor: "hover:bg-pink-600",
  },
  {
    title: "Home Construction Loans",
    icon: Home,
    subcategories: ["Structure", "Finishing", "Loan"],
    maxLoan: "PKR 10 Lakh",
    loanPeriod: "5 years",
    color: "from-green-500 to-teal-500",
    textColor: "text-green-100",
    hoverColor: "hover:bg-green-600",
  },
  {
    title: "Business Startup Loans",
    icon: Briefcase,
    subcategories: ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
    maxLoan: "PKR 10 Lakh",
    loanPeriod: "5 years",
    color: "from-blue-500 to-indigo-500",
    textColor: "text-blue-100",
    hoverColor: "hover:bg-blue-600",
  },
  {
    title: "Education Loans",
    icon: GraduationCap,
    subcategories: ["University Fees", "Child Fees Loan"],
    maxLoan: "Based on requirement",
    loanPeriod: "4 years",
    color: "from-purple-500 to-violet-500",
    textColor: "text-purple-100",
    hoverColor: "hover:bg-purple-600",
  },
]

function LoanCategoryCard({ category }) {
  const [isHovered, setIsHovered] = useState(false)
  const [formData, setFormData] = useState({
    cnic: "",
    email: "",
    name: "",
    subcategory: "",
    initialDeposit: "",
    loanPeriod: "",
    address: "",
    phoneNumber: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Application submitted successfully!")
  }

  return (
    <motion.div
      className={`bg-gradient-to-br ${category.color} p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
    >
      <div className="bg-white/20 rounded-full p-4 inline-block mb-6">
        <category.icon className="w-10 h-10 text-white" />
      </div>
      <h2 className={`text-2xl font-semibold ${category.textColor} mb-4`}>{category.title}</h2>
      <ul className={`${category.textColor} mb-6 space-y-2`}>
        {category.subcategories.map((sub, idx) => (
          <li key={idx} className="flex items-center">
            <ChevronRight className="w-4 h-4 mr-2" />
            {sub}
          </li>
        ))}
      </ul>
      <div className={`${category.textColor} space-y-2`}>
        <p className="flex items-center">
          <span className="font-semibold mr-2">Max Loan:</span> {category.maxLoan}
        </p>
        <p className="flex items-center">
          <span className="font-semibold mr-2">Loan Period:</span> {category.loanPeriod}
        </p>
      </div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: "cnic", label: "CNIC", type: "text" },
                { name: "email", label: "Email", type: "email" },
                { name: "name", label: "Full Name", type: "text" },
                { name: "initialDeposit", label: "Initial Deposit (PKR)", type: "number" },
                { name: "loanPeriod", label: "Loan Period (Years)", type: "number" },
                { name: "phoneNumber", label: "Phone Number", type: "tel" },
              ].map((field) => (
                <div key={field.name}>
                  <label className={`block text-sm font-medium mb-1 ${category.textColor}`}>{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    required
                    className={`w-full p-2 border border-white/30 rounded-lg bg-white/10 ${category.textColor} placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition duration-200`}
                    value={formData[field.name]}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div>
                <label className={`block text-sm font-medium mb-1 ${category.textColor}`}>Subcategory</label>
                <select
                  name="subcategory"
                  required
                  className={`w-full p-2 border border-white/30 rounded-lg bg-white/10 ${category.textColor} focus:outline-none focus:ring-2 focus:ring-white/50 transition duration-200`}
                  value={formData.subcategory}
                  onChange={handleChange}
                >
                  <option value="">Select a subcategory</option>
                  {category.subcategories.map((sub, index) => (
                    <option key={index} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1 ${category.textColor}`}>Address</label>
                <textarea
                  name="address"
                  required
                  className={`w-full p-2 border border-white/30 rounded-lg bg-white/10 ${category.textColor} placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition duration-200`}
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className={`w-full px-6 py-3 text-sm font-medium rounded-lg ${category.textColor} transition-colors bg-white/20 ${category.hoverColor}`}
              >
                Submit Application
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className={`mt-4 ${category.textColor} flex items-center justify-center`}
        animate={{ rotate: isHovered ? 180 : 0 }}
      >
        <ChevronDown />
      </motion.div>
    </motion.div>
  )
}

function LoanCategoriesHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empowering Your Dreams with Flexible Loan Options
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {loanCategories.map((category, index) => (
            <LoanCategoryCard key={index} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function LoanApplication() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <LoanCategoriesHero />
    </div>
  )
}

