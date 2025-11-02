import React from 'react'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          AllergiMate
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Tailwind CSS is working perfectly!
        </p>
        
        <div className="space-y-4">
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200">
            Primary Button
          </button>
          
          <button className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-200">
            Success Button
          </button>
          
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-amber-100 border-l-4 border-amber-500 rounded">
          <p className="text-amber-700 text-sm">
            🎉 All Tailwind features working: colors, spacing, typography, hover effects, and more!
          </p>
        </div>
      </div>
    </div>
  )
}

export default App