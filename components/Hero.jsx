"use client"

import React from "react"
import { TypeAnimation } from "react-type-animation"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Navbar from "./Navbar"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 overflow-hidden">
      <Navbar />
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
      <motion.div
        className="container mx-auto px-4 pt-24 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-6rem)]">
          <motion.div className="max-w-2xl space-y-8 text-left lg:w-1/2" variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Empowering Communities with{" "}
              <TypeAnimation
                preRenderFirstString={true}
                sequence={["Qarze Hasana", 2000, "Interest-Free Loans", 2000, "Financial Support", 2000]}
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                wrapper="span"
                cursor={false}
                className="text-pink-300"
              />
            </h1>
            <p className="text-lg sm:text-xl text-indigo-100 mx-auto">
              Saylani Welfare's microfinance initiative provides accessible, interest-free loans to empower individuals
              and small businesses. Our Qarze Hasana program supports your financial needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center bg-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-600 transition duration-300 shadow-lg"
                  aria-label="Apply for a Loan"
                >
                  Apply for a Loan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/categories"
                  className="inline-flex items-center justify-center bg-indigo-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-600 transition duration-300 border border-indigo-400"
                  aria-label="View Loan Categories"
                >
                  Loan Categories
                </Link>
              </motion.div>
            </div>
          </motion.div>
          <motion.div className="lg:w-1/2 mt-12 lg:mt-0" variants={itemVariants}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Why Choose Us?</h2>
              <div className="space-y-6 text-indigo-100">
                {[
                  "Interest-free loans for all",
                  "Multiple loan categories to choose from",
                  "Easy and quick application process",
                  "Dedicated support throughout your journey",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="bg-pink-500 rounded-full p-2">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-indigo-900 to-transparent"></div>
    </section>
  )
}

