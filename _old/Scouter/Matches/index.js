import { withPageAuth } from '@supabase/auth-helpers-nextjs'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Match from '../../../../components/Match'
import Sidebar from '../../../../components/sidebar'

function DetailedList() {
  const supabase = useSupabaseClient()
  const user = useUser()
  const router = useRouter()

  const [city, setCity] = useState(null)
  const [teams, setTeams] = useState([])
  const [groups, setGroups] = useState([])
  const [matches, setMatches] = React.useState([])
  const [showModal, setShowModal] = React.useState(false)

  useEffect(() => {
    function httpGet(url, key) {
      var xmlHttp = new XMLHttpRequest()
      xmlHttp.open('GET', url, false)
      xmlHttp.setRequestHeader('X-TBA-Auth-Key', key)
      xmlHttp.send()
      return xmlHttp.responseText
    }

    httpGet(
      'https://www.thebluealliance.com/api/v3/event/2023code/matches',
      'zldOgyr0zcuk7znnToBy3rbs8B6SmCnwaLd0Ew74DXSnPENUs58vPsYMYnpX3hyh'
    )

    //
    //https://www.thebluealliance.com/api/v3/event/2022code/teams/statuses

    const callAPI = async () => {
      try {
        const res = await fetch(
          `https://www.thebluealliance.com/api/v3/event/2023code/matches`
        )
        const data = await res.json()
        console.log(data)
        if (data) {
          setMatches(data)
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
          <h1 className="text-center font-bold text-lg">
            Matches Colorado
          </h1>
          {matches && (
            <div>
              {matches.map((match) => (
                <Match key={match.id} match={match} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DetailedList

export const getServerSideProps = withPageAuth({ redirectTo: '/Login' })
