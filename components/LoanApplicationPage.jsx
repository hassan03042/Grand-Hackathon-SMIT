import React from "react"
import LoanApplicationForm from "./LoanApplicationForm"

export default function LoanApplicationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Loan Application</h1>
          <LoanApplicationForm />
        </div>
      </div>
    </div>
  )
}

