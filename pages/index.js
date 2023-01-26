import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Login from '../components/Login'
import Section from '../components/Section'

export default function Home() {
  const user = useSelector(state=>state.user.user)
  console.log(user);
  return (
    <div className='index flex justify-center'>
      <Head>
        <title>S&B Nice Food Valley Ltd.</title>
        <meta name="description" content="S&B Nice Food Valley Ltd." />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className='w-full mx-4 md:w-1/2 p-2 mt-10 border rounded-md shadow-lg space-y-2'>
        {user.username && <Section {...user}/>}
      </div>
      {!user.username && <Login/>}
    </div>
  )
}
