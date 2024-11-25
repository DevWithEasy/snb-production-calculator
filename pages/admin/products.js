import React from 'react'
import dynamic from 'next/dynamic'
const AdminLayout = dynamic(() => import('../../components/admin/AdminLayout'))
import axios from 'axios';
import baseUrl from '../../utils/v1/baseUrl';
import capitalizeFirstLetter from '../../utils/v2/capitalizeFirstLetter';

export default function Products({ products }) {
  
  return (
    <AdminLayout>
      <div>Products</div>
      <div
        className='space-y-2'
      >
        {
          products.map((section, i) => (
            <div key={i}>
              <p>{section.section}</p>
              <table
                className='w-full border rounded-lg'
              >
                <thead>
                  <tr
                    className='bg-gray-100'
                  >
                    {
                      Object.keys(section.products[0]).map((header) => (
                        <th className='text-left px-2 py-1 text-sm' key={header}>{capitalizeFirstLetter(header)}</th>
                      ))
                    }
                  </tr>
                </thead>
                <tbody>
                  {section.products.map((product, i) => (
                    <tr className='border-b' key={i}>
                      <td className='w-8 px-2 py-1'>{product.id}</td>
                      <td className='px-2 py-1'>{product.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))
        }
      </div>
    </AdminLayout>
  )
}

export async function getServerSideProps() {
  try {
    const { data } = await axios.get(`${baseUrl}/api/v2/products`)
    return {
      props: {
        products: data,
      },
    };
  } catch (error) {
    console.error('Error fetching products:', error.response ? error.response.data : error.message);
    return {
      props: {
        products: [],
      },
    };
  }
}