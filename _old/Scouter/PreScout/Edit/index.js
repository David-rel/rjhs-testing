import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import PreScoutEdit from '../../../../../components/PreScoutEdit'
import Sidebar from '../../../../../components/sidebar'

function Edit() {
  const supabase = useSupabaseClient()
  const router = useRouter()
  const { postId } = router.query
  const [fetchError, setFetchError] = useState(null)
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('PreScouter')
        .select('*')
        .eq('id', postId)

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
  }, [setPosts])

  return (
    <div>
      <div className="flex">
        <Sidebar />
        {posts && (
          <div>
            {posts.map((post) => (
              <PreScoutEdit key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Edit
