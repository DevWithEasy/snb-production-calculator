import React from 'react'
import AdminLayout from '../../../components/admin/AdminLayout'
import axios from 'axios'
import baseUrl from '../../../utils/v1/baseUrl'
import capitalizeFirstLetter from '../../../utils/v2/capitalizeFirstLetter'

export default function Users({users}) {
  const headers = Object.keys(users[0])
  return (
    <AdminLayout>
        <div
          className=''
        >
          <table
            className='w-full border rounded-lg'
          >
            <thead>
              <tr
                className='bg-gray-100'
              >
                {
                  headers.map((header) => (
                    <th className='text-left px-2 py-1' key={header}>{capitalizeFirstLetter(header)}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {users.map((user,i) => (
                <tr className='border-b' key={i}>
                  <td className='px-2 py-1'>{user.name}</td>
                  <td className='px-2 py-1'>{user.username}</td>
                  <td className='px-2 py-1'>{user.password}</td>
                  <td className='px-2 py-1'>{user.section}</td>
                  <td className='px-2 py-1'>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
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