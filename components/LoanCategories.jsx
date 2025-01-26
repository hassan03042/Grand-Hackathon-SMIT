import React, { useState } from "react"
import { CakeSlice, Home, Briefcase, GraduationCap } from "lucide-react"
import LoanApplicationForm from "./LoanApplicationForm"

const loanCategories = [
  {
    title: "Wedding Loans",
    icon: CakeSlice,
    subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
    maxLoan: "PKR 5 Lakh",
    loanPeriod: "3 years",
  },
  {
    title: "Home Construction Loans",
    icon: Home,
    subcategories: ["Structure", "Finishing", "Loan"],
    maxLoan: "PKR 10 Lakh",
    loanPeriod: "5 years",
  },
  {
    title: "Business Startup Loans",
    icon: Briefcase,
    subcategories: ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
    maxLoan: "PKR 10 Lakh",
    loanPeriod: "5 years",
  },
  {
    title: "Education Loans",
    icon: GraduationCap,
    subcategories: ["University Fees", "Child Fees Loan"],
    maxLoan: "Based on requirement",
    loanPeriod: "4 years",
  },
]

export default function LoanCategoriesHero() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  const handleCloseForm = () => {
    setSelectedCategory(null)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-600">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Empowering Your Dreams with Flexible Loan Options
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {loanCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer"
              onClick={() => handleCategoryClick(category)}
            >
              <category.icon className="w-12 h-12 text-white mb-4" />
              <h2 className="text-2xl font-semibold text-white mb-4">{category.title}</h2>
              <ul className="text-gray-200 mb-4">
                {category.subcategories.map((sub, idx) => (
                  <li key={idx} className="mb-1">
                    • {sub}
                  </li>
                ))}
              </ul>
              <div className="text-white">
                <p>
                  <strong>Max Loan:</strong> {category.maxLoan}
                </p>
                <p>
                  <strong>Loan Period:</strong> {category.loanPeriod}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedCategory && <LoanApplicationForm category={selectedCategory} onClose={handleCloseForm} />}
    </section>
  )
}

