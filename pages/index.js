import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Admin from '../components/Admin'

export default function Home() {
  const [view,setView] = useState(true)
  return (
    <div className='index flex justify-center'>
      <Head>
        <title>S&B Nice Food Valley Ltd.</title>
        <meta name="description" content="S&B Nice Food Valley Ltd." />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className=''>
      <Link href='/recipe'>
          <a>Recipe</a>
        </Link>
        <br/>
        <Link href='/rm'>
          <a>RM / PM Calcutation</a>
        </Link>
        <br/>
        <Link href=''>
          <a onClick={()=>setView(!view)}>Admin</a>
        </Link>
        {view && <Admin view={view} setView={setView}/>}
      </div>
    </div>
  )
}
