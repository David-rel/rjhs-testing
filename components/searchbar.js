import React, { useState } from 'react'
import Link from 'next/link'

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  const items = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']

    const Teams = [
      '159',
      '662',
      '1011',
      '1138',
      '1303',
      '1332',
      '1339',
      '1410',
      '1619',
      '1799',
      '1977',
      '2036',
      '2083',
      '2240',
      '2261',
      '2341',
      '2594',
      '2945',
      '2996',
      '3200',
      '3298',
      '3374',
      '3648',
      '3807',
      '4068',
      '4293',
      '4388',
      '4418',
      '4499',
      '4550',
      '4593',
      '4944',
      '5493',
      '5763',
      '6920',
      '7243',
      '7479',
      '7485',
      '7737',
      '8334',
      '9009',
      '9068',
      '9112',
      '935',
      '1723',
      '1710',
      '1730',
      '1763',
      '1764',
      '1769',
      '1775',
      '1806',
      '1827',
      '1847',
      '1987',
      '1994',
      '2197',
      '2220',
      '2357',
      '2410',
      '2457',
      '2560',
      '3184',
      '4809',
      '4959',
      '5013',
      '5098',
      '5119',
      '5126',
      '5141',
      '5147',
      '5189',
      '5268',
      '5837',
      '7662',
      '8112',
      '8825',
      '9269',
    ]

  const handleSearch = (e) => {
    const value = e.target.value
    setSearch(value)

    if (value === '') {
      setResults([])
      return
    }

    const filteredResults = Teams.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    )
    setResults(filteredResults)
  }

  return (
    <div className="w-80 z-10">
      <input
        type="text"
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
      />
      <div className="relative">
        {results.map((result, index) => (
          <Link href={`/TeamResources/Scouter/Scout/Team?id=${result}`} key={index}>
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
