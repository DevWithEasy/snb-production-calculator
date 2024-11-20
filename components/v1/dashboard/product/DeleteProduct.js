import axios from 'axios'
import { useRef } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { toast } from 'react-hot-toast'
import useUserStore from '../../../../features/userStore'

export default function DeleteProduct({ product }) {
  const { removeAdminData } = useUserStore()
  const cancelRef = useRef()

  const deleteProduct = async () => {
    try {
      const res = await axios.delete(`/api/product/delete_product?id=${product.id}`)
      if (res.data.status === 200) {
        removeAdminData(product.id, 'product')
        toast.success('Product updated Successfully')
        onClose()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <button colorScheme='red' onClick={() => deleteProduct()} ml={3}>
        Delete
      </button>
    </div>
  )
}