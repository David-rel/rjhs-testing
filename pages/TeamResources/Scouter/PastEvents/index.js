import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Ranking from '../../../../components/Ranking'

function Past() {
  const router = useRouter()
  const { id, key } = router.query
  const [info, setInfo] = useState([])



    useEffect(() => {
      function httpGet(url, key) {
        var xmlHttp = new XMLHttpRequest()
        xmlHttp.open('GET', url, false)
        xmlHttp.setRequestHeader('X-TBA-Auth-Key', key)
        xmlHttp.send()
        return xmlHttp.responseText
      }

      httpGet(
        `https://www.thebluealliance.com/api/v3/event/${key}/rankings`,
        'zldOgyr0zcuk7znnToBy3rbs8B6SmCnwaLd0Ew74DXSnPENUs58vPsYMYnpX3hyh'
      )

      //
      //https://www.thebluealliance.com/api/v3/event/2022code/teams/statuses

      const callAPI = async () => {
        try {
          const res = await fetch(
            `https://www.thebluealliance.com/api/v3/event/${key}/rankings`
          )
          const data = await res.json()
          console.log(data.rankings)
          if (data) {
            setInfo(data.rankings)
          }
        } catch (err) {
          console.log(err)
        }
      }

      callAPI()
    }, [])

    

        //  `https://www.thebluealliance.com/api/v3/event/${key}/rankings`,


  return (
    <div>
      <div class="min-h-screen bg-gray-0 text-black">
        <div class="h-full mb-10 w-full items-center">
          {/* Top Bar with Competition Name*/}
          <div class="h-24 bg-gray-400 dark:bg-gray-400 shadow-lg justify-between p-3 border border-black text-white text-3xl text-center group">
            <p class="py-4 text-center items-center">{id}</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 gap-4 mx-4 my-4">
            <div className="max-w-24">
              <div className="h-48 p-2 rounded-lg overflow-y-auto border-8 border-gray-400 bg-gray-200 text-center text-3xl">
                Ranking 
                <div className="border-2 border-gray-400 my-2"></div>
                {info && (
                  <div>
                    {info.map((info) => (
                      <Ranking key={info.id} info={info} />
                    ))}
                  </div>
                )}
                <br />
              </div>
            </div>

            <div className="max-w-24">
              <div className="h-48 p-2 rounded-lg overflow-y-auto border-8 border-gray-400 bg-gray-200 text-center text-3xl">
                Ranking 
                <div className="border-2 border-gray-400 my-2"></div>
                {info && (
                  <div>
                    {info.map((info) => (
                      <Ranking key={info.id} info={info} />
                    ))}
                  </div>
                )}
                <br />
              </div>
            </div>

            <div className="max-w-24">
              <div className="h-48 p-2 rounded-lg overflow-y-auto border-8 border-gray-400 bg-gray-200 text-center text-3xl">
                Ranking 
                <div className="border-2 border-gray-400 my-2"></div>
                {info && (
                  <div>
                    {info.map((info) => (
                      <Ranking key={info.id} info={info} />
                    ))}
                  </div>
                )}
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Past
