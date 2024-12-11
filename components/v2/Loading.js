import React from 'react'
import logo from '../../public/logo.png'
import Image from 'next/image'
import { ImSpinner2 } from "react-icons/im";

export default function Loading({title}) {
  return (
    <div
        className='absolute top-0 h-screen w-full flex justify-center items-center bg-slate-100/50'
    >
        <div
        className='relative flex flex-col items-center'
        >
        <Image
                alt='logo'
                src={logo}
                height={40}
                width={50}
            />
            <p className='text-sm text-gray-500'>{title ? title : 'Finding...'}</p>
            <ImSpinner2 size={130} className="absolute -top-8 animate-spin text-gray-200"/>
        </div>
    </div>
  )
}
