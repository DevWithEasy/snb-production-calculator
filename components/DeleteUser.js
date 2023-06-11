import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
import axios from 'axios'
import { useRef } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

export default function DeleteUser({user}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()

    const deleteUser=async()=>{
        try {
            const res = await axios.delete(`/api/user/delete_user?id=${user.id}`)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
  
    return (
      <>
        <AiOutlineDelete onClick={onOpen} size={25} className="hover:scale-150 transition-all duration-300 hover:bg-red-500 p-1 rounded cursor-pointer hover:text-white"/>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isCentered
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Delete User
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Are you sure? Delete the user from your account.
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='red' onClick={()=>deleteUser()} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }