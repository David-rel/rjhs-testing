import React from 'react'

function Ranking({info, team_key}) {


 

  return (
    <div className="text-3xl py-1">
      <div className="grid grid-cols-2">
        <h1>{info.team_key.substring(3, 7)}:</h1>
        <h1>{info.rank}</h1>
      </div>
    </div>
  )
}

export default Ranking