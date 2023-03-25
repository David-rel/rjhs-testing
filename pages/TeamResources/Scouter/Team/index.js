import { useRouter } from 'next/router'
import React from 'react'

function Team() {

    const router = useRouter()
    const { id } = router.query


  return (
    <div>Team {id}</div>
  )
}

export default Team