import React from 'react'
import axios from 'axios'
import baseUrl from '../../../utils/v1/baseUrl'
import capitalizeFirstLetter from '../../../utils/v2/capitalizeFirstLetter'
import Link from 'next/link'
import adduser from '../../../public/adduser.png'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const AdminLayout = dynamic(() => import('../../../components/admin/AdminLayout'))

export default function Users({users}) {
  const headers = Object.keys(users[0])
  return (
    <AdminLayout>
        <div
          className='space-y-2'
        >
          <Link href='/admin/users/add'>
            <button className='flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-lg shadow-sm border  hover:bg-gray-200'>
            <Image
            alt='logout'
            src={adduser}
            height={20}
            width={20}
          />
              <span>New User</span>
            </button>
          </Link>
          <div
            className='overflow-x-auto  border rounded-lg'
          >
            <table
            className='w-full'
          >
            <thead>
              <tr
                className='bg-gray-100'
              >
                {
                  headers.map((header) => (
                    <th className='text-left px-2 py-1 text-sm' key={header}>{capitalizeFirstLetter(header)}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {users.map((user,i) => (
                <tr className='border-b' key={i}>
                  <td className='px-2 py-1 text-nowrap'>{user.name}</td>
                  <td className='px-2 py-1'>{user.username}</td>
                  <td className='px-2 py-1'>{user.password}</td>
                  <td className='px-2 py-1'>{user.section}</td>
                  <td className='px-2 py-1'>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          
        </div>
    </AdminLayout>
  )
}

export async function getServerSideProps() {
    try {
        const { data } = await axios.get(`${baseUrl}/api/v2/users`)
        return {
            props: {
                users : data,
            },
        };
    } catch (error) {
        console.error('Error fetching products:', error.response ? error.response.data : error.message);
        return {
            props: {
                users: [],
            },
        };
    }
}