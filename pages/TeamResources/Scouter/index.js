import Link from 'next/link'
import React, { useState } from 'react'
import SearchBarScouter from '../../../components/SearchbarScouter'
import SearchBarEvents from '../../../components/searchbarevents'

const Display = () => {
  const [dropdownValue, setDropdownValue] = useState('unknown')

  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value)
  }

  alert('please make sure to do a git pull every time you work on the website test app')

  return (
    <>
      <div className="bg-gray-800 py-4 sm:py-6 md:py-8 lg:py-10 flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 lg:w-1/2 px-2 mb-8 lg:mb-0">
          <div className="bg-white shadow-lg rounded-lg p-6 h-80 sm:h-96">
            <h1 className="text-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Past Events
            </h1>
            <p className="text-gray-500 text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4">
              Go to the past events in the whole world of 2022
            </p>
            <div className="flex">
              <SearchBarEvents />
            </div>
            <div className="flex justify-end"></div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/2 px-2">
          <div className="bg-white shadow-lg rounded-lg p-6 h-80 sm:h-96">
            <h1 className="text-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Current Events
            </h1>
            <p className="text-gray-500 text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4">
              Go to current events that rjhs 3729 is playing in
            </p>
            <Link
              href={`/TeamResources/Scouter/CurrentEvents?id=${dropdownValue}&key=${dropdownValue.substring(dropdownValue.indexOf('2'), dropdownValue.length - 1)}`}
            >
              <button className="bg-gray-800 text-white rounded-full py-2 px-4 mt-6 hover:bg-gray-900 mr-4">
                Go
              </button>
            </Link>
            <select
              className="w-full sm:w-3/4 lg:w-1/2 mt-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              value={dropdownValue}
              onChange={handleDropdownChange}
            >
              <option value="">Select an event</option>
              {/* Add your event options here */}
              <option value="Colorado Regional(2022code)">
                Colorado Regional(2022code)
              </option>
              <option value="Heartland Regional(2022ksla)">
                Heartland Regional(2022ksla)
              </option>
            </select>
            <br />
            <div className="flex justify-end"></div>
          </div>
        </div>
      </div>
      <SearchBarScouter />
    </>
  )
}

export default Display
