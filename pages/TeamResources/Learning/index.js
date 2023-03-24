import { withPageAuth } from '@supabase/auth-helpers-nextjs'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import React from 'react'
import Sidebar from '../../../components/sidebar'

function Learning() {
  const supabase = useSupabaseClient()
  const user = useUser()
  const router = useRouter()

  return (
    <div>
      <div className="flex">
        <Sidebar />
        Learning
      </div>
    </div>
  )
}

export default Learning

export const getServerSideProps = withPageAuth({ redirectTo: '/Login' })
