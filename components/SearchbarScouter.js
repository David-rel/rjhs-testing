import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const [teams, setTeams] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/teams.json')
        const data = await response.json()
        setTeams(data.Teams)
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

    const filteredResults = teams
      .filter((item) => item.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 10) // Limit the results to the first 10 items

    setResults(filteredResults)
  }

  return (
    <div className="w-full max-w-screen-md mx-auto px-4 mt-8 mb-8">
      <input
        type="text"
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Search Specific Team"
        value={search}
        onChange={handleSearch}
      />
      <div className="relative">
        {results.map((result, index) => (
          <Link
            href={`/TeamResources/Scouter/Team?id=${result}`}
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
