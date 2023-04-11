import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function Event() {

    const router = useRouter()
    const { key } = router.query

      const [info, setInfo] = useState([])
      const [awards, setAwards] = useState([])
      const [matches, setMatches] = useState([])

      useEffect(() => {
        const fetchStatus = async () => {
          try {
            const res = await fetch(
              `https://www.thebluealliance.com/api/v3/team/frc3729/event/${key}/status`,
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
              console.log(data)
            }
          } catch (err) {
            console.log(err)
          }
        }

        fetchStatus()
      }, [])

       useEffect(() => {
         const fetchAwards = async () => {
           try {
             const res = await fetch(
               `https://www.thebluealliance.com/api/v3/team/frc3729/event/${key}/awards`,
               {
                 headers: {
                   'X-TBA-Auth-Key':
                     'zldOgyr0zcuk7znnToBy3rbs8B6SmCnwaLd0Ew74DXSnPENUs58vPsYMYnpX3hyh'
                 }
               }
             )
             const data = await res.json()
             if (data) {
               setAwards(data)
             }
           } catch (err) {
             console.log(err)
           }
         }

         fetchAwards()
       }, [])

        useEffect(() => {
          const fetchMatches = async () => {
            try {
              const res = await fetch(
                `https://www.thebluealliance.com/api/v3/team/frc3729/event/${key}/matches`,
                {
                  headers: {
                    'X-TBA-Auth-Key':
                      'zldOgyr0zcuk7znnToBy3rbs8B6SmCnwaLd0Ew74DXSnPENUs58vPsYMYnpX3hyh'
                  }
                }
              )
              const data = await res.json()
              if (data) {
                setMatches(data)
              }
            } catch (err) {
              console.log(err)
            }
          }

          fetchMatches()
        }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto max-w-7xl p-4">
        <h1 className="text-4xl font-bold mb-8">Event Details</h1>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Info</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <p>
              <strong>Event Overall Rank:</strong> {info.overall_status_str}
            </p>
            <p>
              <strong>Playoff Status:</strong> {info.playoff_status_str}
            </p>
            <p>
              <strong>Playoff Level:</strong> {info.playoff?.level}
            </p>
            <p>
              <strong>Playoff Record (W-L-T):</strong>{' '}
              {info.playoff?.record.wins}-{info.playoff?.record.losses}-
              {info.playoff?.record.ties}
            </p>
            <p>
              <strong>Qualification Number of Teams:</strong>{' '}
              {info.qual?.num_teams}
            </p>
            <p>
              <strong>Qualification Ranking:</strong> {info.qual?.ranking.rank}
            </p>
            <p>
              {info.qual?.ranking.record == null ? (
                <></>
              ) : (
                <div>
                  <strong>Qualification Record (W-L-T):</strong>
                  {info.qual?.ranking.record.wins}-
                  {info.qual?.ranking.record.losses}-
                  {info.qual?.ranking.record.ties}
                </div>
              )}
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Awards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {awards.map((award, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-2xl font-semibold mb-2">{award.name}</h3>
                <p>
                  <strong>Award Type:</strong> {award.award_type}
                </p>
                <p>
                  <strong>Year:</strong> {award.year}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Matches</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {matches.map((match, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-2xl font-semibold mb-2">
                  {match.comp_level.toUpperCase()} Match {match.match_number}
                </h3>
                <p>
                  <strong>Winning Alliance:</strong> {match.winning_alliance}
                </p>
                <div className="my-4">
                  <h4 className="font-semibold text-xl mb-2">Blue Alliance</h4>
                  <p>
                    <strong>Score:</strong> {match.alliances.blue.score}
                  </p>
                  <p>
                    <strong>Team 1:</strong> {match.alliances.blue.team_keys[0]}
                  </p>
                  <p>
                    <strong>Team 2:</strong> {match.alliances.blue.team_keys[1]}
                  </p>
                  <p>
                    <strong>Team 3:</strong> {match.alliances.blue.team_keys[2]}
                  </p>
                </div>
                <div className="my-4">
                  <h4 className="font-semibold text-xl mb-2">Red Alliance</h4>
                  <p>
                    <strong>Score:</strong> {match.alliances.red.score}
                  </p>
                  <p>
                    <strong>Team 1:</strong> {match.alliances.red.team_keys[0]}
                  </p>
                  <p>
                    <strong>Team 2:</strong> {match.alliances.red.team_keys[1]}
                  </p>
                  <p>
                    <strong>Team 3:</strong> {match.alliances.red.team_keys[2]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}


export default Event