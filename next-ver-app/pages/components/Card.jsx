import React from 'react'

const Card = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="flex flex-col items-center justify-center py-2">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-600 shadow-lg transform -rotate-45 rotate-6 rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <h1 className="text-6xl font-bold">
                Creating a Next Js app using Tailwind Css and build on Vercel
              </h1>
              <h2 className="text-3xl font-bold">
                Fork and modify this sandbox
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="flex flex-col items-center justify-center py-2">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-600 shadow-lg transform -rotate-45 rotate-6 rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <h1 className="text-6xl font-bold">
                Stylish Glassmorphic Header Animation Made with Tailwind CSS &
                Next.js
              </h1>
              <h2 className="text-3xl font-bold">
                Fork and modify this sandbox
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
