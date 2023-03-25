import Link from 'next/link'
import React, { useState } from 'react'
import Sidebar from '../../../../components/sidebar'

function CreateInfo() {
  const [team_id, setTeamId] = useState('Team 1011')
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
  ]
  const TeamsKansas = [
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
  const [showModal, setShowModal] = useState(true)

  return (
    <div>
      <div className="flex min-h-screen bg-gray-50 w-full relative">
        <Sidebar />

        <div className="flex-none hidden lg:block">
          <button
            className="bg-white border border-black w-full py-2 px-4 rounded-lg hover:bg-gray-600"
            onClick={() => setShowModal(!showModal)}
          >
            {' '}
            {showModal ? <>Go to Kansas</> : <>Go to Colorado</>}{' '}
          </button>
          {showModal ? (
            <div className="flex-none">
              <h1 className="text-center font-bold text-lg border border-black bg-gray-300 py-2">
                CO Regional
              </h1>
              {Teams.map((team) => (
                <div key={team} className="flex-none p-2 border border-black">
                  <Link
                    href={`/TeamResources/Scouter/Scout/Team?id=${team}`}
                    passHref
                  >
                    <div>Team {team}</div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex-none">
              <h1 className="text-center font-bold text-lg border border-black bg-gray-300 py-2">
                KA Regional
              </h1>
              {TeamsKansas.map((team) => (
                <div key={team} className="flex-none p-2 border border-black">
                  <Link
                    href={`/TeamResources/Scouter/Scout/Team?id=${team}`}
                    passHref
                  >
                    <div>Team {team}</div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <div className="grid gap-4 p-12 mb-96 pb-96 lg:grid-cols-3 lg:grid-rows-6">
            <div className="bg-gray-300 rounded-lg border border-black text-center">
              <div className="bg-gray-100 rounded-lg text-center m-2 ">
                <h1 class="text-3xl font-bold p-2">Scout Teams</h1>

                <Link href="/TeamResources/Scouter/Scout/Create">
                  <button
                    class="inline-block px-6 py-2.5 my-8 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    href="#!"
                    role="button"
                  >
                    Create Scout
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-gray-300 rounded-lg text-center border border-black">
              <div className="bg-gray-100 rounded-lg text-center m-2 ">
                <h1 class="text-3xl font-bold p-2">Pre Scout Teams</h1>

                <Link href="/TeamResources/Scouter/PreScout/Create">
                  <button
                    class="inline-block px-6 py-2.5 my-8 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    href="#!"
                    role="button"
                  >
                    Create Pre Scout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateInfo
