import React from 'react'
import dynamic from 'next/dynamic'
const AdminLayout = dynamic(() => import('../../components/admin/AdminLayout'))
import axios from 'axios';
import baseUrl from '../../utils/v1/baseUrl';
import capitalizeFirstLetter from '../../utils/v2/capitalizeFirstLetter';

export default function Sections({ sections }) {
  const headers = Object.keys(sections[0])
  return (
    <AdminLayout>
      <div>Sections</div>
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
          {sections.map((section, i) => (
            <tr className='border-b' key={i}>
              <td className='w-8 px-2 py-1'>{section.id}</td>
              <td className='px-2 py-1'>{section.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  )
}

export async function getServerSideProps() {
  try {
    const { data } = await axios.get(`${baseUrl}/api/v2/sections`)
    return {
      props: {
        sections: data,
      },
    };
  } catch (error) {
    console.error('Error fetching products:', error.response ? error.response.data : error.message);
    return {
      props: {
        sections: [],
      },
    };
  }
}