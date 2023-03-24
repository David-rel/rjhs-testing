import Link from 'next/link'
import React from 'react'

function Todo({ post }) {
  if (post.level == 'To Do' || post.level == 'In Progress') {
    return (
      <Link href="/TeamResources/Project">
        <div>
          <div class="bg-gray-600 hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-900 cursor-pointer">
            {post.description}
          </div>
        </div>
      </Link>
    )
  }
}

export default Todo
