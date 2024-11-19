import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Loading from '../../../../components/v2/Loading'
import appStore from '../../../../features/appStore'

export default function Recipe() {
  const router = useRouter()
  const section = router.query.section
  const {setLoading,loading} = appStore()
  const [products,setProducts] = useState([])
  const [recipe,setRecipe] = useState({})
  const getProducts =async(section)=>{
    setLoading()
    try {
      const {data} = await axios.get(process.env.NEXT_PUBLIC_API_URL+`?route=products&section=${section}`)
      if(data.success){
        setProducts(data.data)
        setLoading()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getRecipe=async(section,name)=>{
    setLoading()
    try {
      const {data} = await axios.get(process.env.NEXT_PUBLIC_API_URL+`?route=recipe&section=${section}&name=${name}`)
      if(data.success){
        setLoading()
        setRecipe(data.data)
      }
    } catch (error) {
      setLoading()
    }
  }

  useEffect(()=>{
    getProducts(section)
  },[section])

  console.log(recipe)
  return (
    <div>
      <select
        onChange={(e)=> getRecipe(section,e.target.value)}
      >
        <option value="">Select a product</option>
        {products.length > 0 && 
          products.map((product)=>(
            <option key={product.name} value={product.name}>{product.name}</option>
          ))}
      </select>
      {loading && <Loading/>}
    </div>
  )
}
