import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import HeadInfo from '../../../../components/HeadInfo'
import Loading from '../../../../components/v2/Loading'
import TableRecipe from '../../../../components/v2/TableRecipe'
import baseUrl from '../../../../utils/v1/baseUrl'

export default function Recipe({products}) {
  const router = useRouter()
  const section = router.query.section
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState('')
  const [recipe, setRecipe] = useState({})

  const getRecipe = async (section, name) => {
    setLoading(true)
    setProduct(name)
    try {
      const { data } = await axios.get(`/api/v2/recipe?section=${section}&name=${name}`)
      console.log(data)
      if (data.success) {
        setLoading(false)
        setRecipe(data.data)
      }
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <>
      <HeadInfo title={`Recipe - ${section}`} />
      <div
        className=' bg-gray-50'
      >
        <div
          className='container md:max-w-3xl md:mx-auto space-y-2'
        >
          <div
            className=''
          >
            <select
              onChange={(e) => getRecipe(section, e.target.value)}
              className='w-full p-2 border rounded'
            >
              <option value="">Select a product</option>
              {products.length > 0 &&
                products.map((product) => (
                  <option key={product.name} value={product.name}>{product.name}</option>
                ))}
            </select>
          </div>
          <div
            className='p-2 bg-white rounded-lg'
          >
            <p>Section : {section}</p>
            <p>Product Name : {product}</p>
          </div>
        </div>
        {recipe.rm &&
          <div
            className='py-4'
          >
            <TableRecipe
              title='Recipe'
              rm={recipe.rm}
              rm_total={recipe.rm_total}
            />
            <TableRecipe
              title='Product Information'
              rm={recipe.info}
            />
            <TableRecipe
              title='Require Packing Material'
              rm={recipe.packing}
            />
            <TableRecipe
              title='Require Packing Per Carton'
              rm={recipe.carton_packing}
            />
          </div>
        }

        {loading && <Loading />}
      </div>
    </>

  )
}

export async function getServerSideProps(context) {
  const { section } = context.params;
  try {
    const { data } = await axios.get(`${baseUrl}/api/v2/${section}/products`)
    return {
      props: {
        products: data.data,
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