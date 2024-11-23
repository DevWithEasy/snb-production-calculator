import axios from "axios"
import baseUrl from "./baseUrl"
import toast from "react-hot-toast"

export const getProducts=async(section,setProducts) =>{
  try {
    const res = await axios.get(`${baseUrl}/api/v1/products/${section}`)
    if(res.data.status === 200){
      setProducts(res.data.data)
    }
  } catch (error) {
    console.log(error)
  }
}

export const addProuctRecipe=async(id,product,ingredients,toast)=>{
  try {
    onOpen()
    const res = await axios.post(`/api/v1/recipe/add_recipe?id=${id}`,{product,ingredients})
    if (res.data.status === 200) {
      toast.success('Product Added Successfully')
    }
  } catch (error) {
    console.log(error)
  }
}

export const getRecipe=async(id,setData)=>{
    try {
      const res = await axios.get(`/api/v1/recipe/${id}`)
      console.log(res.data)
      if (res.data.status === 200) {
        setData(res.data.data)
      }
    } catch (error) {
      console.log(error)
    }
}

export const getAllRecipe = async (name,setProducts) => {
  try {
      const res = await axios.get(`/api/v1/recipe/all/${name}`)
      if (res.data.status === 200) {
          setProducts(res.data.data)
      }
  } catch (error) {
      console.log(error)
  }
}

export const getUpdateRecipe=async(id,setProduct,setIngredient,setOldProduct,setOldIngredient)=>{
  try {
    const res = await axios.get(`/api/v1/recipe/update/find?id=${id}`)
    if (res.data.status === 200) {
      setProduct(res.data.data.product)
      setOldProduct(res.data.data.product)
      setIngredient(res.data.data.ingredients)
      setOldIngredient(res.data.data.ingredients)
    }
  } catch (error) {
    console.log(error)
  }
}

export const updateRecipe=async(id,toast,data)=>{
  try {
    const res = await axios.post(`/api/v1/recipe/update/no_version?id=${id}`,data)
    if (res.data.status === 200) {
      toast.success('Recipe updated successfully')
      window.location.reload()
    }
  } catch (error) {
    toast.error('Recipe updated failed.')
  }
}

export const updateRecipeWithVersion=async(id,toast,data)=>{
  const {oldRecipe,newRecipe} = data
  if(oldRecipe?.product.version === newRecipe.product.version){
    return toast.error('Change pevious version first.')
  }
  try {
    onOpen()
    const res = await axios.post(`/api/v1/recipe/update/with_version?id=${id}`,data)
    if (res.data.status === 200) {
      toast.success('Recipe updated successfully')
    }
  } catch (error) {
    toast.error('Recipe updated failed.')
  }
}

export const getOldProducts=async(id,setProducts) =>{
  try {
    const res = await axios.get(`${baseUrl}/api/v1/recipe/compare/all/${id}`)
    if(res.data.status === 200){
      setProducts(res.data.data)
      if(res.data.data.length === 0){
        toast.error('There was no another version available.')
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export const getOldProduct=async(id,setProducts) =>{
  try {
    const res = await axios.get(`${baseUrl}/api/v1/recipe/compare/${id}`)
    if(res.data.status === 200){
      setProducts(res.data.data)
    }
  } catch (error) {
    console.log(error)
  }
}