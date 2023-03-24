import { withPageAuth } from '@supabase/auth-helpers-nextjs'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Sidebar from '../../../components/sidebar'
import PreInfo from '../../../components/PreInfo'
import PreInfoKansas from '../../../components/PreInfoKansas'
import SearchBar from '../../../components/searchbar'

function Scouter() {
  const supabase = useSupabaseClient()
  const user = useUser()
  const router = useRouter()

  const [teams, setTeams] = useState([])
  const [teamsKansas, setTeamsKansas] = useState(null)
  const [showModal, setShowModal] = useState(true)
  //const

  useEffect(() => {
    function httpGet(url, key) {
      var xmlHttp = new XMLHttpRequest()
      xmlHttp.open('GET', url, false)
      xmlHttp.setRequestHeader('X-TBA-Auth-Key', key)
      xmlHttp.send()
      return xmlHttp.responseText
    }

    httpGet(
      'https://www.thebluealliance.com/api/v3/event/2023code/teams',
      'zldOgyr0zcuk7znnToBy3rbs8B6SmCnwaLd0Ew74DXSnPENUs58vPsYMYnpX3hyh'
    )

    const callAPI = async () => {
      try {
        const res = await fetch(
          `https://www.thebluealliance.com/api/v3/event/2023code/teams`
        )
        const data = await res.json()
        if (data) {
          setTeams(data)
        }
      } catch (err) {
        console.log(err)
      }
    }

    callAPI()
    //console.log(teams)
  }, [])

  useEffect(() => {
    function httpGet(url, key) {
      var xmlHttp = new XMLHttpRequest()
      xmlHttp.open('GET', url, false)
      xmlHttp.setRequestHeader('X-TBA-Auth-Key', key)
      xmlHttp.send()
      return xmlHttp.responseText
    }

    httpGet(
      'https://www.thebluealliance.com/api/v3/event/2023ksla/teams',
      'zldOgyr0zcuk7znnToBy3rbs8B6SmCnwaLd0Ew74DXSnPENUs58vPsYMYnpX3hyh'
    )

    const callAPI = async () => {
      try {
        const res = await fetch(
          `https://www.thebluealliance.com/api/v3/event/2023ksla/teams`
        )
        const data = await res.json()
        if (data) {
          setTeamsKansas(data)
        }
      } catch (err) {
        console.log(err)
      }
    }

    callAPI()
  }, [])

  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="flex-none">
          {/* Add the SearchBar component for small screens */}

          {/* Hide the button and teams dropdown on small screens */}

          <div className="hidden md:block">
            <button
              className="bg-white border border-black w-full py-2 px-4 rounded-lg hover:bg-gray-600"
              onClick={() => setShowModal(!showModal)}
            >
              {showModal ? <>Go to Kansas</> : <>Go to Colorado</>}
            </button>

            {showModal ? (
              <div className="flex-none">
                <h1 className="text-center font-bold text-lg border border-black bg-gray-300 py-2">
                  Teams (CO Regional)
                </h1>
                {teams && (
                  <div>
                    {teams.map((team) => (
                      <PreInfo key={team.id} team={team} />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex-none">
                <h1 className="text-center font-bold text-lg border border-black bg-gray-300 py-2">
                  Teams (KA Regional)
                </h1>
                {teamsKansas && (
                  <div>
                    {teamsKansas.map((team) => (
                      <PreInfoKansas key={team.id} team={team} />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          <div className="bg-gray-100 p-4 rounded-md m-4  border border-black">
            <h2 className="text-lg font-bold mb-2">Scouter</h2>
            <p className="text-gray-700 mb-4">Scout and Pre Scout</p>
            <Link href="/TeamResources/Scouter/Scout">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Scouter
              </button>
            </Link>
          </div>
          <div className="bg-gray-100 p-4 rounded-md m-4  border border-black">
            <h2 className="text-lg font-bold mb-2">Current Matches</h2>
            <p className="text-gray-700 mb-4">CO Regional</p>
            <Link href="/TeamResources/Scouter/Matches">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Matches
              </button>
            </Link>
          </div>
          <div className="bg-gray-100 p-4 rounded-md m-4  border border-black">
            <h2 className="text-lg font-bold mb-2 "> Last Year Data</h2>
            <p className="text-gray-700 mb-4">CO and KA regionals</p>
            <Link href="/TeamResources/Scouter/DeeperScouter">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Last Year Data
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scouter

export const getServerSideProps = withPageAuth({ redirectTo: '/Login' })


