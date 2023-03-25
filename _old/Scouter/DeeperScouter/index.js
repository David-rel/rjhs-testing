import { withPageAuth } from '@supabase/auth-helpers-nextjs'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function Deeper() {
  const supabase = useSupabaseClient()
  const user = useUser()
  const router = useRouter()

  const [city, setCity] = useState(null)
  const [data, setData] = useState([])
  const [dataKansas, setDataKansas] = useState([])
  const [groups, setGroups] = useState([])
  const [showModal, setShowModal] = useState(true)

  useEffect(() => {
    function httpGet(url, key) {
      var xmlHttp = new XMLHttpRequest()
      xmlHttp.open('GET', url, false)
      xmlHttp.setRequestHeader('X-TBA-Auth-Key', key)
      xmlHttp.send()
      return xmlHttp.responseText
    }

    httpGet(
      'https://www.thebluealliance.com/api/v3/event/2022code/teams/statuses',
      'zldOgyr0zcuk7znnToBy3rbs8B6SmCnwaLd0Ew74DXSnPENUs58vPsYMYnpX3hyh'
    )

    const callAPI = async () => {
      try {
        const res = await fetch(
          `https://www.thebluealliance.com/api/v3/event/2022code/teams/statuses`
        )
        const data = await res.json()
        if (data) {
          setData(data)
        }
      } catch (err) {
        console.log(err)
      }
    }

    callAPI()
    console.log(data)
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
      'https://www.thebluealliance.com/api/v3/event/2022ksla/teams/statuses',
      'zldOgyr0zcuk7znnToBy3rbs8B6SmCnwaLd0Ew74DXSnPENUs58vPsYMYnpX3hyh'
    )

    const callAPI = async () => {
      try {
        const res = await fetch(
          `https://www.thebluealliance.com/api/v3/event/2022ksla/teams/statuses`
        )
        const data = await res.json()
        if (data) {
          setDataKansas(data)
        }
      } catch (err) {
        console.log(err)
      }
    }

    callAPI()
    console.log(data)
  }, [])

  return (
    <div>
      <div className="flex">
        <div>
          <button
            class="bg-white border border-black w-full py-2 px-4 rounded-lg hover:bg-gray-600 "
            onClick={() => setShowModal(!showModal)}
          >
            {' '}
            {showModal ? <>Go to Kansas</> : <>Go to Colorado</>}{' '}
          </button>
          <h1 className="font-bold text-3xl text-center">
            {showModal ? <>Colorado 2022</> : <>Kansas 2022</>}
          </h1>

          {showModal ? (
            <div>
              {Object.entries(data).map(([teamNumber, teamData]) => (
                <div key={teamNumber}>
                  {/* <h2>Team {teamNumber}</h2>
          <p>Alliance Status: {teamData.alliance_status_str}</p>
          <p>Last Match Key: {teamData.last_match_key}</p>
          <p>Next Match Key: {teamData.next_match_key}</p>
          <p>Overall Status: {teamData.overall_status_str}</p> */}
                  <div class="bg-gray-400 p-6 text-left w-screen border border-black">
                    <div>
                      <h2 className="font-bold pt-3 text-3xl text-red-700">
                        Team: {teamNumber}
                      </h2>
                      <h3 className="font-bold pt-3 text-2xl">Overall</h3>
                      <h4 className="font-bold pt-2">
                        Alliance Status: {teamData.alliance_status_str}
                      </h4>
                      <h4 className="font-bold pt-2">
                        Overall Status: {teamData.overall_status_str}
                      </h4>
                      {teamData.alliance == null ? (
                        <></>
                      ) : (
                        <>
                          <h3 className="font-bold pt-3 text-2xl">
                            Alliance:{' '}
                          </h3>
                          <h4 className="font-bold pt-2">
                            Alliance Name: {teamData.alliance.name}
                          </h4>
                          <h4 className="font-bold pt-2">
                            Alliance #: {teamData.alliance.number}
                          </h4>
                          <h4 className="font-bold pt-2">
                            Alliance Pick: {teamData.alliance.pick}
                          </h4>

                          <h3 className="font-bold pt-3 text-2xl">
                            Playoffs:{' '}
                          </h3>
                          <h4 className="font-bold pt-2">
                            Play off Status: {teamData.playoff_status_str}
                          </h4>
                          <h4 className="font-bold pt-2">
                            level: {teamData.playoff.level}
                          </h4>
                          <h4 className="font-bold pt-2">
                            wins: {teamData.playoff.current_level_record.wins}
                          </h4>
                          <h4 className="font-bold pt-2">
                            losses:{' '}
                            {teamData.playoff.current_level_record.losses}
                          </h4>
                          <h4 className="font-bold pt-2">
                            ties: {teamData.playoff.current_level_record.ties}
                          </h4>
                          <h4 className="font-bold pt-2">
                            status: {teamData.playoff.status}
                          </h4>

                          <h3 className="font-bold pt-3 text-2xl">
                            Qualifications:{' '}
                          </h3>
                          <h4 className="font-bold pt-2">
                            Number of Teams: {teamData.qual.num_teams}
                          </h4>
                          <h4 className="font-bold pt-2">
                            Matches Played:{' '}
                            {teamData.qual.ranking.matches_played}
                          </h4>
                          <h4 className="font-bold pt-2">
                            Ranking: {teamData.qual.ranking.rank}
                          </h4>
                          <h4 className="font-bold pt-2">
                            Wins: {teamData.qual.ranking.record.wins}
                          </h4>
                          <h4 className="font-bold pt-2">
                            Losses: {teamData.qual.ranking.record.losses}
                          </h4>
                          <h4 className="font-bold pt-2">
                            Ties: {teamData.qual.ranking.record.ties}
                          </h4>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              {Object.entries(dataKansas).map(([teamNumber, teamData]) => (
                <div key={teamNumber}>
                  {/* <h2>Team {teamNumber}</h2>
          <p>Alliance Status: {teamData.alliance_status_str}</p>
          <p>Last Match Key: {teamData.last_match_key}</p>
          <p>Next Match Key: {teamData.next_match_key}</p>
          <p>Overall Status: {teamData.overall_status_str}</p> */}
                  <div class="bg-gray-400 p-6 text-left w-screen border border-black">
                    <div>
                      <h2 className="font-bold pt-3 text-3xl text-red-700">
                        Team: {teamNumber}
                      </h2>
                      <h3 className="font-bold pt-3 text-2xl">Overall</h3>
                      <h4 className="font-bold pt-2">
                        Alliance Status: {teamData.alliance_status_str}
                      </h4>
                      <h4 className="font-bold pt-2">
                        Overall Status: {teamData.overall_status_str}
                      </h4>
                      {teamData.alliance == null ? (
                        <></>
                      ) : (
                        <>
                          <h3 className="font-bold pt-3 text-2xl">
                            Alliance:{' '}
                          </h3>
                          <h4 className="font-bold pt-2">
                            Alliance Name: {teamData.alliance.name}
                          </h4>
                          <h4 className="font-bold pt-2">
                            Alliance #: {teamData.alliance.number}
                          </h4>
                          <h4 className="font-bold pt-2">
                            Alliance Pick: {teamData.alliance.pick}
                          </h4>

                          <h3 className="font-bold pt-3 text-2xl">
                            Playoffs:{' '}
                          </h3>
                          <h4 className="font-bold pt-2">
                            Play off Status: {teamData.playoff_status_str}
                          </h4>
                          <h4 className="font-bold pt-2">
                            level: {teamData.playoff.level}
                          </h4>
                          <h4 className="font-bold pt-2">
                            wins: {teamData.playoff.current_level_record.wins}
                          </h4>
                          <h4 className="font-bold pt-2">
                            losses:{' '}
                            {teamData.playoff.current_level_record.losses}
                          </h4>
                          <h4 className="font-bold pt-2">
                            ties: {teamData.playoff.current_level_record.ties}
                          </h4>
                          <h4 className="font-bold pt-2">
                            status: {teamData.playoff.status}
                          </h4>

                          <h3 className="font-bold pt-3 text-2xl">
                            Qualifications:{' '}
                          </h3>
                          <h4 className="font-bold pt-2">
                            Number of Teams: {teamData.qual.num_teams}
                          </h4>
                          <h4 className="font-bold pt-2">
                            Matches Played:{' '}
                            {teamData.qual.ranking.matches_played}
                          </h4>
                          <h4 className="font-bold pt-2">
                            Ranking: {teamData.qual.ranking.rank}
                          </h4>
                          <h4 className="font-bold pt-2">
                            Wins: {teamData.qual.ranking.record.wins}
                          </h4>
                          <h4 className="font-bold pt-2">
                            Losses: {teamData.qual.ranking.record.losses}
                          </h4>
                          <h4 className="font-bold pt-2">
                            Ties: {teamData.qual.ranking.record.ties}
                          </h4>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Deeper
