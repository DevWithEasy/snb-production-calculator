import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function AdminLayout({ children }) {
  const router = useRouter()
  const path = router.pathname.split('/').pop()
  const menus = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Admin',
      href: '',
    },
    {
      name: 'Users',
      href: 'users',
    },
    {
      name: 'Sections',
      href: 'sections',
    },
    {
      name: 'Products',
      href: 'products',
    },
  ]
  return (
    <div
      className='h-[calc(100%-128px)] flex'
    >
      <div
        className='w-2/12 px-2'
      >
        {
          menus.map((menu, index) => (
            <Link href={`/admin/${menu.href}`} key={index}>
              <p 
                className={`my-1 px-4 py-2 rounded-full hover:bg-blue-100 duration-300 ${menu.href === path ? 'bg-blue-100' : 'bg-white'}`}
              >
                {menu.name}
              </p>
            </Link>
          ))
        }
        <button className='w-full my-1 px-4 py-2 text-left bg-white rounded-full hover:bg-red-100 duration-300'>Logout</button>
      </div>
      <div className='w-10/12 bg-white rounded-lg p-4'>{children}</div>
    </div>
  )
}
