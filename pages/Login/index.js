import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'

function Login() {
  const supabaseClient = useSupabaseClient()
  const user = useUser()
  const router = useRouter()
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [loading, setLoading] = useState(null)

  async function Login({ email, password }) {
    let fail = false
    try {
      setLoading(true)
      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password,
      })

      if (error) {
        console.log(true)
        alert('wrong username or password try again!')
        fail = true
      }
    } catch (error) {
      alert('Error adding the data!')
      console.log(error)
    } finally {
      setLoading(false)
      if (fail == false) {
        router.push(`/`)
      }
    }
  }

  return (
    <div>
      <div className="h-full bg-gradient-to-tl from-red-600 to-white-200 w-full py-16 px-4">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={'/images/download.jpeg'}
            alt="Home Page"
            className="rounded-lg"
            width={150}
            height={100}
          />
          <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
            <p
              tabIndex={0}
              role="heading"
              aria-label="Login to your account"
              className="text-2xl font-extrabold leading-6 text-gray-800"
            >
              Login to your account
            </p>
            {/* <Link href='/Signup'>
                    <p className="text-sm mt-4 font-medium leading-none text-gray-500">
                        Don't have account?{" "}
                        <span tabIndex={0} role="link" aria-label="Sign up here" className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                            {" "}
                            Sign up here
                        </span>
                    </p>
                   
                    </Link> */}

            <div>
              <lable className="text-sm font-medium leading-none text-gray-800">
                Email
              </lable>
              <input
                aria-label="enter email address"
                role="input"
                type="text"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-6  w-full">
              <lable className="text-sm font-medium leading-none text-gray-800">
                Password
              </lable>
              <div className="relative flex items-center justify-center">
                <input
                  aria-label="enter Password"
                  role="input"
                  type="password"
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="absolute right-0 mt-2 mr-3 cursor-pointer"></div>
              </div>
            </div>
            <div className="mt-8">
              <button
                role="button"
                aria-label="create my account"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
                onClick={() => Login({ email, password })}
                disabled={loading}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
