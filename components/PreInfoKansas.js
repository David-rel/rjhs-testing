import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Test({ team }) {
  const [showModal, setShowModal] = React.useState(false)
  const [Team, setTeam] = useState([])
  const [loading, setLoading] = useState(false)

  return (
    <div class="bg-gray-200 p-2 text-left w-full border border-black">
      <button
        class="bg-white border border-black w-full py-2 px-4 rounded-lg hover:bg-gray-600 "
        onClick={() => setShowModal(!showModal)}
      >
        {team.nickname}
        <br />
        {team.team_number}
      </button>

      {showModal ? (
        <div>
          <h4 className="font-bold pt-2">Team #: {team.team_number} </h4>
          <h4 className="font-bold pt-2">Team Nickname: {team.nickname} </h4>
          <h4 className="font-bold pt-2">Team City: {team.city} </h4>
          <h4 className="font-bold pt-2">Team Country: {team.country} </h4>
          <h4 className="font-bold pt-2">Team Key: {team.key} </h4>
          <h4 className="font-bold pt-2">
            Team Rookie Year: {team.rookie_year}{' '}
          </h4>
          <h4 className="font-bold pt-2">
            Team School Name: {team.school_name}{' '}
          </h4>
          <h4 className="font-bold pt-2">Team State: {team.state_prov} </h4>
          <h4 className="font-bold pt-2">
            Team Website:<Link href={`${team.website}`}> {team.website}</Link>{' '}
          </h4>

          
        </div>
      ) : null}
    </div>
  )
}

export default Test
