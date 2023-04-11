import React from 'react'

function Programming() {



  return (
    <div>
      <div className="flex min-h-screen bg-gray-100">
        <div className="container mx-auto my-auto">
          <div className="bg-white shadow-md rounded-lg p-14 flex">
            <div className="flex flex-col items-start justify-center w-1/2">
              <h2 className="text-6xl font-bold mb-6 mr-2">Programming</h2>
              <p className="text-2xl text-gray-600">
                Learn programming with our interactive tutorials and build
                amazing projects with your WPILib skill set.
              </p>
            </div>
            <div className="w-3/4">
              <img
                className="object-cover h-full w-full rounded-lg max-w-none"
                src="/filter/IMG_3167.JPG"
                alt="Programming"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col min-h-screen bg-gray-100 items-center justify-center pb-12">
        <div className="container mx-auto my-auto text-center">
          <h3 className="text-5xl font-bold mb-6">
            What is your WPILib skill level?
          </h3>
          <p className="text-2xl mb-6">
            Follow these 5 steps to become a WPILib developer, or start where
            you are and continue your journey. Use these to track your learning.
          </p>
          <div className="flex flex-col items-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-2 w-full">
              I haven't even downloaded it yet
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-2 w-full">
              I have it downloaded and I am ready to start learning
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mb-2 w-full">
              I have the key concepts, I want to learn how to use them
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mb-2 w-full">
              I know the basics, I want to learn more
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-2 w-full">
              I'm ready to start working on the RJ robotics code
            </button>
          </div>
          <h3 className="text-5xl font-bold mt-12 mb-6">
            Don't know Java yet?
          </h3>
          <p className="text-2xl mb-6">
            If you don't know Java yet, you can check out these resources to
            start learning, then you can click the button below to know what
            Java you will need to have really down to start learning WPILib.
          </p>
          <ul className="list-disc list-inside mb-8 text-2xl text-blue-700">
            <li>
              <a href="https://www.example.com/resource1">Resource 1</a>
            </li>
            <li>
              <a href="https://www.example.com/resource2">Resource 2</a>
            </li>
            <li>
              <a href="https://www.example.com/resource3">Resource 3</a>
            </li>
          </ul>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded mb-2 w-full">
            Learn Java for WPILib
          </button>
        </div>
      </div>
    </div>
  )
}

export default Programming