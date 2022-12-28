import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Admin from '../components/Admin'

export default function Home() {
  const [view,setView] = useState(false)
  return (
    <div className='index flex justify-center'>
      <Head>
        <title>S&B Nice Food Valley Ltd.</title>
        <meta name="description" content="S&B Nice Food Valley Ltd." />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className='w-full mx-4 md:w-1/2 p-2 mt-10 border rounded-md shadow-lg space-y-2'>
      <Link href='/recipe'>
          <a className='block p-2 border-b text-blue-500 font-bold text-xl'>Recipe</a>
        </Link>
        <Link href='/rm'>
          <a className='block p-2 border-b text-blue-500 font-bold text-xl'>RM / PM Calcutation</a>
        </Link>
        <Link href=''>
          <a onClick={()=>setView(!view)} className='block p-2'>Admin</a>
        </Link>
        {view && <Admin view={view} setView={setView}/>}
      </div>
    </div>
  )
}
