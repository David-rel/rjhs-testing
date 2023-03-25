import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ScoutData from '../../../../../components/ScoutData'
import PreScoutData from '../../../../../components/PreScoutData'
import Sidebar from '../../../../../components/sidebar'

function Team() {
  const router = useRouter()
  const { id } = router.query
  const supabase = useSupabaseClient()
  const [fetchError, setFetchError] = useState(null)
  const [orderBy, setOrderBy] = useState('created_at')
  const [posts, setPosts] = useState(null)
  const [postsPreScouter, setPostsPreScouter] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('Scouter')
        .select('*')
        .order(orderBy, { ascending: true })

      if (error) {
        setFetchError('could not fetch posts')
        setPosts(null)
        console.log(error)
      }

      if (data) {
        setPosts(data)
        setFetchError(null)
        console.log(posts)
      }
    }

    fetchPosts()
  }, [orderBy, setPosts])

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('PreScouter')
        .select('*')
        .order(orderBy, { ascending: true })

      if (error) {
        setFetchError('could not fetch posts')
        setPostsPreScouter(null)
        console.log(error)
      }

      if (data) {
        setPostsPreScouter(data)
        setFetchError(null)
        console.log(posts)
      }
    }

    fetchPosts()
  }, [orderBy, setPostsPreScouter])

  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="flex-none">
          <h1 className="text-center text-3xl fot-bold">Scouting Data</h1>
          {posts && (
            <div className="border border-black">
              {posts.map((post) => (
                <ScoutData key={post.id} post={post} id={id} />
              ))}
            </div>
          )}

          <h1 className="text-center text-3xl fot-bold">Pre-Scouting Data</h1>
          {postsPreScouter && (
            <div className="border border-black">
              {postsPreScouter.map((post) => (
                <PreScoutData key={post.id} post={post} id={id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Team
