import React from 'react'
import { ChevronDown } from 'lucide-react'

const Card = React.forwardRef(({ title, icon: Icon, isOpen, onToggle, children }, ref) => {
  return (
    <div ref={ref} className="bg-white rounded-lg shadow-md overflow-hidden">
      <div 
        className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {Icon && <Icon className="h-6 w-6 text-blue-600" />}
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          </div>
          <ChevronDown 
            className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`} 
          />
        </div>
      </div>
      {isOpen && (
        <div className="px-6 pb-6">
          {children}
        </div>
      )}
    </div>
  )
})

Card.displayName = 'Card'

export default Card
