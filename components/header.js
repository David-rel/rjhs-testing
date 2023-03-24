import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'

const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  
  const supabaseClient = useSupabaseClient()

  const user = useUser()
  const router = useRouter()

    function signOut() {
      supabaseClient.auth.signOut()
      router.push('/') // localhost:3000
    }


  return (
    <header className="bg-gray-900 border-gray-200 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src={'/download.jpeg'}
            className="w-10 h-10 mr-4 rounded"
            alt="Home Page"
            width={50}
            height={100}
          />
          <h1 className="text-xl font-bold hidden sm:block text-white">
            <Link href="https://www.regisjesuit.com/">RJ Robotics 3729</Link>
          </h1>

          <p className="ml-4 text-sm hidden md:block text-white">
            <Link href="https://www.google.com/maps/place/6300+S+Lewiston+Way,+Aurora,+CO+80016/@39.6011631,-104.8005882,17z/data=!3m1!4b1!4m5!3m4!1s0x876c88d4a3602fc3:0x4e5549fd92d581c!8m2!3d39.601159!4d-104.7983995">
              6400 S Lewiston Way, Aurora, CO 80016
            </Link>
          </p>
        </div>
        <div className="flex items-center">
         
            {!user?.email ? (
              <Link
                href="/Login"
                className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Login
              </Link>
            ) : (
              <div className="rounded-f text-white flex pr-1">
                {user.email}
                <div className="pl-3">
                  <button
                    className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    onClick={() => signOut()}
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
        </div>
        </div>
    </header>
  )
}

export default Header
