import { useRouter } from 'next/router'
import React from 'react'

function Current() {

    const router = useRouter()
    const { id } = router.query


  return (
    <div>Current {id}</div>
  )
}

export default Current