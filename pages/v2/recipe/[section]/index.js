import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import HeadInfo from '../../../../components/HeadInfo'
import Loading from '../../../../components/v2/Loading'
import TableRecipe from '../../../../components/v2/TableRecipe'
import { FaRegFilePdf } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

export default function Recipe() {
  const router = useRouter()
  const section = router.query.section
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState('')
  const [products, setProducts] = useState([])
  const [recipe, setRecipe] = useState({})
  const [url, setUrl] = useState('')
  const [loadingMsg, setLoadingMsg] = useState('')

  const getPdfLink = async () => {
    setLoadingMsg('Generating PDF')
    setLoading(true)
    setUrl((''))
    try {
      const { data } = await axios.get(`/api/v2/recipe/pdf?section=${section}&name=${product}`)
      if (data.success) {
        const pdfUrl = data.data.url
        setUrl(pdfUrl)
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const getProducts = async (section) => {
    setLoading(true)
    try {
      const { data } = await axios.get(`/api/v2/${section}/products`)
      if (data.success) {
        setLoading(false)
        setProducts(data.data)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const getRecipe = async (section, name) => {
    setLoading(true)
    setProduct(name)
    setUrl('')
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
  console.log(url)
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
          <div
            className='flex justify-end items-center gap-2'
          >
            {
              url && <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 p-2 text-xs rounded-md bg-blue-100 hover:bg-blue-200'
            >
              <MdDownload /> Download
            </a>
            }
            <button
              onClick={getPdfLink}
              className='flex items-center gap-2 p-2 text-xs rounded-md bg-gray-200 hover:bg-gray-300'
            >
              <FaRegFilePdf /> Make PDF
            </button>
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

        {loading && <Loading loadingMsg={loadingMsg} />}
      </div>
    </>

  )
}
