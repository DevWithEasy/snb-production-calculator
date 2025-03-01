import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import admin from '../../public/admin.png'
import logout_icon from '../../public/logout.png'
import product from '../../public/products.png'
import section from '../../public/sections.png'
import user from '../../public/users.png'
import drive from '../../public/drive.png'
import getBreadCrumbArray from '../../utils/v2/getBreadCrumbArray'
import appStore from '../../features/appStore'
import { BiLogOutCircle } from "react-icons/bi";
import toast from 'react-hot-toast'
import Loading from '../v2/Loading'
import axios from 'axios'

export default function AdminLayout({ children }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { logout } = appStore()
  const path = router.pathname
  const menus = [
    {
      name: 'Admin',
      href: '/admin',
      image: admin
    },
    {
      name: 'Users',
      href: '/admin/users',
      image: user
    },
    {
      name: 'Sections',
      href: '/admin/sections',
      image: section
    },
    {
      name: 'Products',
      href: '/admin/products',
      image: product
    },
  ]
  const handleLogout = () => {
    logout()
    toast.success('Logged out successfully')
    router.push('/')
  }
  const handleDriveClear = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(`/api/v2/drive_clear`)
      if (data.success) {
        toast.success(data?.message)
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  return (
    <div
      className='flex'
    >
      <div
        className='hidden md:block w-2/12 px-2'
      >
        {
          menus.map((menu, index) => (
            <Link href={menu.href} key={index}>
              <p
                className={`flex items-center space-x-3 my-1.5 px-4 py-2 rounded-full hover:bg-blue-100 duration-300 shadow-sm ${menu.href === path ? 'bg-blue-100' : 'bg-white'}`}
              >
                <Image
                  alt={menu.name}
                  src={menu.image}
                  height={20}
                  width={20}
                />
                <span>{menu.name}</span>
              </p>
            </Link>
          ))
        }
        <button onClick={handleDriveClear} className='w-full flex items-center space-x-3 my-1.5 px-4 py-2 text-left bg-white rounded-full hover:bg-red-100 duration-300 shadow-sm'>
          <Image
            alt='drive'
            src={drive}
            height={20}
            width={20}
          />
          <span>Drive Clear</span>
        </button>
        <button onClick={handleLogout} className='w-full flex items-center space-x-3 my-1.5 px-4 py-2 text-left bg-white rounded-full hover:bg-red-100 duration-300 shadow-sm'>
          <Image
            alt='logout'
            src={logout_icon}
            height={20}
            width={20}
          />
          <span>Logout</span>
        </button>
      </div>
      <div className='w-full md:w-10/12 bg-white rounded-lg p-4'>
        <div
          className='border-b mb-2 md:hidden relative'
        >
          <button onClick={handleLogout} className='absolute top-1  right-0 text-red-500'>
            <BiLogOutCircle size={20} />
          </button>
          <div
            className='text-sm'
          >
            {
              menus.map((menu, i) => (
                <Link key={i} href={menu.href}>
                  <span className='text-gray-300 px-1'>*</span>
                  <span className='text-blue-500'>{menu.name}</span>
                </Link>
              ))
            }
          </div>
          <div
            className='text-sm'
          >
            {
              getBreadCrumbArray(path).map((path, i) => (
                <Link key={i} href={path.href}>
                  <span className='text-gray-300 px-1'>/</span>
                  <span className='text-blue-500'>{path.name}</span>
                </Link>
              ))
            }
          </div>
        </div>
        {children}
        {
          loading && <Loading title='Clearing...'/>
        }
      </div>
    </div>
  )
}
