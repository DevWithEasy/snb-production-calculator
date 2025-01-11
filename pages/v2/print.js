import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Print() {
  const [sections, setSections] = useState([])
  const [section, setSection] = useState('')
  const [products, setProducts] = useState([])
  const [url, setUrl] = useState('')

  const getPdfLink = async (name) => {
    setUrl((''))
    try {
      const { data } = await axios.get(`/api/v2/recipe/pdf?section=${section}&name=${name}`)
      if (data.success) {
        const pdfUrl = data.data.url
        setUrl(pdfUrl)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getProducts = async (section) => {
    setUrl((''))
    setSection(section.toLowerCase())
    try {
      const { data } = await axios.get(`/api/v2/${section.toLowerCase()}/products`)
      if (data.success) {
        setProducts(data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getSections = async () => {
    try {
      const { data } = await axios.get(`/api/v2/sections`)
      setSections(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getSections()
  }, [])
  console.log(url)
  return (
    <div
      className='flex'
    >
      <div>
        {
          sections.map((section, index) => (
            <div key={index}>
              <button
                onClick={() => getProducts(section.name)}
              >
                {section.name}
              </button>
            </div>
          ))
        }
      </div>
      <div>
        <a href={url} target='_blank' rel="noreferrer" className={url ? 'bg-blue-500' : ''}>Download</a>
        {products.length > 0 && products.map((product, index) => (
          <div key={index}>
            <button
              onClick={() => getPdfLink(product.name)}
            >
              {product.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
