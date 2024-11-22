import React from 'react'
import logo from '../public/logo.png'
import Image from 'next/image'

export default function Header() {
  return (
    <div
        className='h-24 flex flex-col justify-center items-center pb-2 border-b-2 mb-4'
    >
        <Image
            alt='logo'
            src={logo}
            width={60}
            height={80}
        />
        <p
            className='text-xl md:text-2xl font-bold text-red-500'
        >
            S&B Nice Food Valley Ltd. (V.2)
        </p>
    </div>
  )
}
