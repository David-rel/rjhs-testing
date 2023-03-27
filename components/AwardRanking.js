import React, { useEffect, useState } from 'react'

function AwardRanking({ info, event_key, team_key }) {
  const [awards, setAwards] = useState([])

  useEffect(() => {
    function httpGet(url, key) {
      var xmlHttp = new XMLHttpRequest()
      xmlHttp.open('GET', url, false)
      xmlHttp.setRequestHeader('X-TBA-Auth-Key', key)
      xmlHttp.send()
      return xmlHttp.responseText
    }

    httpGet(
      `https://www.thebluealliance.com/api/v3/team/${team_key.key}/event/${event_key}/awards`,
      'zldOgyr0zcuk7znnToBy3rbs8B6SmCnwaLd0Ew74DXSnPENUs58vPsYMYnpX3hyh'
    )

    //
    //https://www.thebluealliance.com/api/v3/event/2022code/teams/statuses

    const callAPI = async () => {
      try {
        const res = await fetch(
          `https://www.thebluealliance.com/api/v3/team/${team_key.key}/event/${event_key}/awards`
        )
        const data = await res.json()
       // console.log(data)
        if (data) {
          setAwards(data)
        }
      } catch (err) {
        console.log(err)
      }
    }

    callAPI()
  }, [])

  return (
    <div>
      {awards.length == 0 ? (
        <></>
      ) : (
        <>
          <h1>
            {team_key.key.substring(3, 7)}:
            {awards[0] != undefined ? <div>{awards[0].name}</div> : <></>}
          </h1>
          <h1>
            {awards[1] != undefined ? <div>{awards[1].name}</div> : <></>}
          </h1>
          <br/>
        </>
      )}
    </div>
  )
}

export default AwardRanking
