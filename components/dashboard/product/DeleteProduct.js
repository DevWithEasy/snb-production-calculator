import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure
} from '@chakra-ui/react'
import axios from 'axios'
import { useRef } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import useUserStore from '../../../features/userStore'
import { toast } from 'react-hot-toast'

export default function DeleteProduct({ product }) {
  const { removeAdminData } = useUserStore()
  const { isOpen, onOpen, onClose } = useDisclosure()
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
    <>
      <AiOutlineDelete onClick={onOpen} size={25} className="hover:scale-150 transition-all duration-300 hover:bg-red-500 p-1 rounded cursor-pointer hover:text-white" />
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Product
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? We remove all info and recipe at a time
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={() => deleteProduct()} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}