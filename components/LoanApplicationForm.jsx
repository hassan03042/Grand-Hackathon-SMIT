import React, { useState } from "react"

export default function LoanApplicationForm({ category, onClose }) {
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
    // Here you would typically send the data to your backend
    alert("Application submitted successfully!")
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">{category.title} Application</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="cnic" className="block text-sm font-medium text-gray-700">
              CNIC
            </label>
            <input
              type="text"
              id="cnic"
              name="cnic"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={formData.cnic}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700">
              Subcategory
            </label>
            <select
              id="subcategory"
              name="subcategory"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
            <label htmlFor="initialDeposit" className="block text-sm font-medium text-gray-700">
              Initial Deposit (PKR)
            </label>
            <input
              type="number"
              id="initialDeposit"
              name="initialDeposit"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={formData.initialDeposit}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="loanPeriod" className="block text-sm font-medium text-gray-700">
              Loan Period (Years)
            </label>
            <input
              type="number"
              id="loanPeriod"
              name="loanPeriod"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={formData.loanPeriod}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

