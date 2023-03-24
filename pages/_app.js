import '../styles/globals.css'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, useUser } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import NavBar from '../components/navbar'
import Header from '../components/header'
import Footer from '../components/footer'


function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient())
  const user = useUser()

  return (
    <SessionContextProvider supabaseClient={supabase}>
     
      <Header />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </SessionContextProvider>
  )
}
export default MyApp
