import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

function Past() {
  const [info, setInfo] = useState([])
  const [selectedYear, setSelectedYear] = useState('')

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          `https://www.thebluealliance.com/api/v3/team/frc3729/events`,
          {
            headers: {
              'X-TBA-Auth-Key':
                'zldOgyr0zcuk7znnToBy3rbs8B6SmCnwaLd0Ew74DXSnPENUs58vPsYMYnpX3hyh'
            }
          }
        )
        const data = await res.json()
        if (data) {
          setInfo(data)
        }
      } catch (err) {
        console.log(err)
      }
    }

    fetchEvents()
  }, [])

  const handleYearChange = event => {
    setSelectedYear(event.target.value)
  }

  const filteredEvents = info.filter(
    event => !selectedYear || event.year === parseInt(selectedYear)
  )

  const uniqueYears = Array.from(new Set(info.map(event => event.year))).sort(
    (a, b) => a - b
  )

  return (
    <>
      <Head>
        <title>Past Performances</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="container mx-auto px-4 mb-8">
        <h1 className="text-4xl font-bold my-4">Past Performances</h1>
        <div className="mb-4">
          <label
            htmlFor="year"
            className="block text-sm font-medium text-gray-700"
          >
            Filter by year
          </label>
          <select
            id="year"
            name="year"
            onChange={handleYearChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">All years</option>
            {uniqueYears.map(year => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map(event => (
            <li
              key={event.key}
              className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
            >
              <div className="flex-1 flex flex-col p-8">
                <Link href={`/PastPerformance/event?key=${event.key}`} passHref legacyBehavior>
                  <a className="text-indigo-600 hover:text-indigo-900">
                    <h3 className="mt-2 text-xl font-semibold text-gray-900">
                      {event.name}
                    </h3>
                  </a>
                </Link>
                <dl className="mt-2 flex-grow flex flex-col justify-between">
                  <dt className="sr-only">Year</dt>
                  <dd className="text-gray-500">{event.year}</dd>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Past

