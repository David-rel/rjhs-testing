// pages/InputPage.js
import Link from 'next/link'
import { useState } from 'react'

const InputPage = () => {
  const [inputValue, setInputValue] = useState('')


  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-white shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl font-bold mb-4">
            Please enter your Open AI API key:
          </h1>
          <input
            type="text"
            tabindex="0"
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="API key"
            value={inputValue || ''}
            onChange={e => setInputValue(e.target.value)}
          />
          <Link href={`/Chat/main?key=${inputValue || 'none'}`}>
            <button className="mt-6 bg-gradient-to-r from-red-400 to-white text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:from-cyan-500 hover:to-light-blue-600 transition-colors duration-300">
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default InputPage


