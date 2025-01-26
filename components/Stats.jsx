"use client"

import { useState, useEffect } from "react"
import { Handshake, Users, Coins, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const CountingNumber = ({ end, duration }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    let animationFrame

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime

      if (progress < duration) {
        const percentage = progress / duration
        setCount(Math.floor(end * percentage))
        animationFrame = requestAnimationFrame(updateCount)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration])

  return <span>{count}</span>
}

const StatCard = ({ icon: Icon, count, label, duration }) => (
  <motion.div
    className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-5xl font-bold text-white">
        <CountingNumber end={count} duration={duration} />
        {typeof count === "number" && count >= 1000 ? "+" : ""}
        {count === 100 ? "M" : ""}
      </h3>
      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
        <Icon className="w-10 h-10 text-white" />
      </div>
    </div>
    <p className="text-indigo-100 text-lg font-medium">{label}</p>
  </motion.div>
)

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="text-center p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl shadow-md hover:shadow-lg transition-all duration-300"
    whileHover={{ scale: 1.03 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
      <Icon className="w-10 h-10 text-white" />
    </div>
    <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
    <p className="text-indigo-100">{description}</p>
  </motion.div>
)

export default function Stats() {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
      {/* Statistics */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <StatCard icon={Users} count={10000} label="Beneficiaries Supported" duration={2000} />
          <StatCard icon={Handshake} count={5} label="Loan Categories" duration={2000} />
          <StatCard icon={Coins} count={100} label="PKR Total Loans Disbursed" duration={2000} />
        </motion.div>
      </div>

      {/* Program Description */}
      <div className="container mx-auto px-4 mt-20 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Empowering Communities through
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Interest-Free Microfinance
            </span>
          </h2>
          <p className="text-indigo-100 text-xl max-w-3xl mx-auto">
            Saylani Welfare's Qarze Hasana program offers accessible loans to support individuals and small businesses
            in various sectors, fostering economic growth and financial independence.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {[
            {
              icon: Handshake,
              title: "Interest-Free Loans",
              description:
                "Our Qarze Hasana program provides interest-free loans, adhering to Islamic principles and making financial support accessible to all.",
            },
            {
              icon: Users,
              title: "Diverse Loan Categories",
              description:
                "From small businesses to agriculture, our loan categories cater to various sectors, ensuring comprehensive community support.",
            },
            {
              icon: Coins,
              title: "Easy Application Process",
              description:
                "We've simplified the loan application process, making it easy for eligible individuals to access the financial support they need.",
            },
          ].map((item, index) => (
            <FeatureCard key={index} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="/apply"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Apply Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

