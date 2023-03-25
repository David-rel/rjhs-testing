import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const [event, setEvents] = useState(null)
  const [key, setKeys] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/events.json')
        const data = await response.json()
        setEvents(data.Events)
        setKeys(data.Keys)
      } catch (error) {
        console.error('Error fetching JSON data:', error)
      }
    }

    fetchData()
  }, [])



  const handleSearch = (e) => {
    const value = e.target.value
    setSearch(value)

    if (value === '') {
      setResults([])
      return
    }

    const filteredResults = event
      .filter((item) => item.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 5) // Limit the results to the first 10 items

    setResults(filteredResults)
  }

  return (
    <div className="w-80 z-10 mt-4">
      <input
        type="text"
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Search events"
        value={search}
        onChange={handleSearch}
      />
      <div className="relative z-10">
        {results.map((result, index) => (
          <Link
            href={`/TeamResources/Scouter/PastEvents?id=${result}&key=${result.substring(result.indexOf('2') , result.length - 1)}`}
              
            key={index}
          >
            <button
              key={index}
              className="w-full text-left px-3 py-2 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
              onClick={() => {
                setSearch(result)
                setResults([])
              }}
            >
              {result}
            </button>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SearchBar
