import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../../../../components/v2/Loading'

export default function Print() {
  const [sections, setSections] = useState([])
  const [section, setSection] = useState('')
  const [products, setProducts] = useState([])
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [loadingMsg, setLoadingMsg] = useState('')

  const getPdfLink = async (name) => {
    setLoadingMsg('Generating PDF')
    setLoading(true)
    setUrl((''))
    try {
      const { data } = await axios.get(`/api/v2/recipe/pdf?section=${section}&name=${name}`)
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
    setLoadingMsg('Loading products')
    setLoading(true)
    setUrl((''))
    setProducts([])
    setSection(section.toLowerCase())
    try {
      const { data } = await axios.get(`/api/v2/${section.toLowerCase()}/products`)
      if (data.success) {
        setProducts(data.data)
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const getSections = async () => {
    setLoadingMsg('Loading sections')
    setLoading(true)
    try {
      const { data } = await axios.get(`/api/v2/sections`)
      setSections(data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    getSections()
  }, [])
  console.log(url)
  return (
    <div
      className=''
    >
      <div
        className='container md:max-w-3xl md:mx-auto space-y-2 p-2 bg-white'
      >
        <div
          className='flex md:flex-row flex-col gap-2'
        >
          <select
            onChange={(e) => getProducts(e.target.value)}
            className='w-full p-2 rounded border'
          >
            <option value="">Select a section</option>
            {
              sections.map((section, index) => (
                <option key={index} value={section.name}>
                  {section.name}
                </option>
              ))
            }
          </select>
          <select
            onChange={(e) => getPdfLink(e.target.value)}
            className='w-full p-2 border rounded'
          >
            <option value="">Select a product</option>
            {
              products.map((product, index) => (
                <option key={index} value={product.name}>
                  {product.name}
                </option>
              ))
            }
          </select>
        </div>
        <div
          className='flex justify-center py-6'
        >
          {
            url && <a
            href={url}
            target='_blank'
            rel="noreferrer"
            className={url ? 'p-2 rounded bg-blue-500 text-white' : ''}
          >
            Download
          </a>
          }
        </div>
        {loading && <Loading title={loadingMsg}/>}
      </div>
    </div>
  )
}
