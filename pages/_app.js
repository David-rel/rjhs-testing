import '../styles/globals.css'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, useUser } from '@supabase/auth-helpers-react'
import  React, { useState } from 'react'
import NavBar from '../components/navbar'
import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient())
  const user = useUser()

  return (
    <SessionContextProvider supabaseClient={supabase}>
      <Head>
        <title>Team Structure</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="./static/favicon.ico" />
      </Head>
      <Header />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </SessionContextProvider>
  )
}
export default MyApp
