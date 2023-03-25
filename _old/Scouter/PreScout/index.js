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

  return (
    <div>
      <div className="flex">
        <Sidebar />

        <div className="flex-none">
          <h1 className="text-center font-bold text-lg border border-black bg-gray-300 py-2">
            CO Regional
          </h1>
          {Teams.map((team) => (
            <div key={team} className="flex-none p-2 border border-black">
              <Link
                href={`/TeamResources/Scouter/PreScout/Team?id=${team}`}
                passHref
              >
                <div>Team {team}</div>
              </Link>
            </div>
          ))}
        </div>

        <div>
          <div className="grid gap-4 grid-cols-3 grid-rows-6 p-12 mb-96 pb-96">
            <div className="bg-gray-300 rounded-lg text-center">
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
                    Create Scout
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-3 grid-rows-6 p-12 mb-96 pb-96"></div>
        </div>
      </div>
    </div>
  )
}

export default CreateInfo
