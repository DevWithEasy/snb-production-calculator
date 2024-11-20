import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Loading from '../../../../components/v2/Loading'
import TableRecipe from '../../../../components/v2/TableRecipe'

export default function Recipe() {
  const router = useRouter()
  const section = router.query.section
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState('')
  const [recipe, setRecipe] = useState({})
  const getProducts = async (section) => {
    setLoading(!loading)
    try {
      const { data } = await axios.get(process.env.NEXT_PUBLIC_API_URL + `?route=products&section=${section}`)
      if (data.success) {
        setProducts(data.data)
        setLoading(!loading)
      }
    } catch (error) {
      setLoading(!loading)
      console.log(error)
    }
  }

  const getRecipe = async (section, name) => {
    setLoading(!loading)
    setProduct(name)
    try {
      const { data } = await axios.get(process.env.NEXT_PUBLIC_API_URL + `?route=recipe&section=${section}&name=${name}`)
      if (data.success) {
        setLoading(!loading)
        setRecipe(data.data)
      }
    } catch (error) {
      setLoading(!loading)
    }
  }

  useEffect(() => {
    getProducts(section)
  }, [section])

  return (
    <div
      className='h-screen overflow-y-auto bg-gray-50'
    >
      <div
        className='container md:max-w-3xl md:mx-auto md:px-4'
      >
        <div
          className='p-4'
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
          className='mx-4 p-2 bg-white rounded-lg'
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
          {
            section !== 'cake' ?
              <TableRecipe
                title='Require Packing Material'
                rm={recipe.packing}
              />
              :
              <>
                <TableRecipe
                  title='Require Packing Material(Standard Item)'
                  rm={recipe.packing.standard}
                />
                <TableRecipe
                  title='Require Packing Material(Family Item)'
                  rm={recipe.packing.family}
                />
              </>
          }
        </div>
      }

      {loading && <Loading />}
    </div>
  )
}
