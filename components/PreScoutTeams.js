import Link from 'next/link'
import React from 'react'

function PreScoutTeams({ team }) {
  console.log(team)
  return (
    <div className="flex-none p-2 border border-black">
      <Link href={`/TeamResources/Scouter/Scout/Team?id=${team}`}>
        <button className="bg-indigo-700 transition w-full duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm">
          Team: {team}
        </button>
      </Link>
    </div>
  )
}

export default PreScoutTeams
