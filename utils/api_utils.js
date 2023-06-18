import axios from "axios"

export const getRecipe=async(id,setData)=>{
    try {
      const res = await axios.get(`/api/recipe/${id}`)
      if (res.data.status === 200) {
        setData(res.data.data)
      }
    } catch (error) {
      console.log(error)
    }
}

export const getUpdateRecipe=async(id,setProduct,setIngredient,setOldProduct,setOldIngredient)=>{
  try {
    const res = await axios.get(`/api/recipe/update/find?id=${id}`)
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

export const updateRecipe=async(id,toast,onOpen, onClose,data)=>{
  try {
    onOpen()
    const res = await axios.post(`/api/recipe/update/no_version?id=${id}`,data)
    if (res.data.status === 200) {
      onClose()
      toast.success('Recipe updated successfully')
    }
  } catch (error) {
    onClose()
    toast.error('Recipe updated failed.')
  }
}

export const updateRecipeWithVersion=async(id,toast,onOpen, onClose,data)=>{
  const {oldProduct,...others} = data
  if(oldProduct.version === data.product.version){
    return toast.error('Change pevious version first.')
  }
  try {
    onOpen()
    const res = await axios.post(`/api/recipe/update/with_version?id=${id}`,others)
    if (res.data.status === 200) {
      onClose()
      toast.success('Recipe updated successfully')
    }
  } catch (error) {
    onClose()
    toast.error('Recipe updated failed.')
  }
}