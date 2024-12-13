import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div
      className=' flex flex-col text-center pt-20 space-y-2'
    >
      <h1 className='text-red-500 text-xl font-bold'>Page Not Found</h1>
      <p className='text-gray-500'>Sorry, the page youre looking for doesnt exist.</p>
      <Link href='/'>
        <button className='px-4 py-1 bg-gray-500 text-white rounded-md'>Go Home</button>
      </Link>
    </div>
  )
}
