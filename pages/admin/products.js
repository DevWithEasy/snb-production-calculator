import React from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import axios from 'axios';
import baseUrl from '../../utils/v1/baseUrl';

export default function Products({products}) {
  console.log(products)
  return (
    <AdminLayout>
        <div>Products</div>
    </AdminLayout>
  )
}

export async function getServerSideProps() {
  try {
      const { data } = await axios.get(`${baseUrl}/api/v2/products`)
      return {
          props: {
              products : data,
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