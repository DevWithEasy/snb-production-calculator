import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import baseUrl from '../../utils/v1/baseUrl'
import axios from 'axios'
import path_categorys from '../../utils/v2/path_categorys'
import HeadInfo from '../../components/HeadInfo'
const AdminLayout = dynamic(() => import('../../components/admin/AdminLayout'))

export default function Admin({ sections }) {
  const [active, setActive] = useState(1)
  const [section, setSection] = useState(sections[0].name.toLowerCase())
  function sactionHandler(section) {
    setSection(section.name.toLowerCase())
    setActive(section.id)
  }
  return (
    <AdminLayout>
      <HeadInfo title={`Adminitration`} />
      <div>
        <div
          className='flex flex-wrap text-sm'
        >
          {
            sections.map(section => (
              <button
                key={section.id}
                onClick={() => sactionHandler(section)}
                className={`px-2 py-1 m-1 border rounded ${section.id === active ? 'border-blue-500 text-blue-500' : 'border-gray-300'}`}
              >
                {section.name}
              </button>
            ))
          }
        </div>
        <div
          className='pt-2'
        >
          {
            path_categorys.map((category) => (
              <div key={category.title}>
                {category.title && <p className='border-b'>{category.title}</p>}
                <div>
                  {
                    category.paths.map((path, j) => (
                      <Link key={path.path} href={path.path + section} legacyBehavior>
                        <a
                        target="_blank" rel="noopener noreferrer"
                          className='my-3 flex items-center space-x-2'
                        >

                          {path.icon}
                          <span>{path.name}</span>
                        </a>
                      </Link>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
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