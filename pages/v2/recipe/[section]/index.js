import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Loading from '../../../../components/v2/Loading'
import TableRecipe from '../../../../components/v2/TableRecipe'
import appscript_api_url from '../../../../utils/v2/appscript_api_url'
import HeadInfo from '../../../../components/HeadInfo'

export default function Recipe() {
  const router = useRouter()
  const section = router.query.section
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState('')
  const [recipe, setRecipe] = useState({})
  const getProducts = async (section) => {
    setLoading(true)
    try {
      const { data } = await axios.get(`/api/v2/${section}/products`)
      if (data.success) {
        setProducts(data.data)
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

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

  useEffect(() => {
    getProducts(section)
  }, [section])
  console.log(recipe)
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
