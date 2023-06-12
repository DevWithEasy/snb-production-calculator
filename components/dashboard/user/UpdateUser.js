import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import handleInput from '../../../utils/handleInput'
import useUserStore from '../../../features/userStore'

export default function UpdateUser({user,sections}) {
    const {updateAdminData} = useUserStore()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value,setValue] = useState(user)
    const updateUser=async()=>{
        try {
            const res = await axios.post(`/api/user/update_user?id=${user.id}`,value)
            if(res.data.status === 200){
              updateAdminData(res.data.data,'user')
              onClose()
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
      <>
        <AiFillEdit onClick={onOpen} size={25} className="hover:scale-150 transition-all duration-300 hover:bg-green-500 p-1 rounded cursor-pointer hover:text-white"/>
  
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update User</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <label>Name :</label>
                <Input
                    name='name' 
                    value={value?.name}
                    onChange={(e)=>handleInput(e,value,setValue)}
                />
                <label>Username :</label>
                <Input
                    name='username' 
                    value={value?.username}
                    onChange={(e)=>handleInput(e,value,setValue)}
                />
                <label>Password :</label>
                <Input
                    name='password' 
                    value={value?.password}
                    onChange={(e)=>handleInput(e,value,setValue)}
                />
                <label>Section :</label>
                <Select
                    name='section'
                    value={value?.section}
                    onChange={(e)=>handleInput(e,value,setValue)}
                >
                    {sections.map(section=><option key={section.id} value={section.name}>{section.name}</option>)}
                </Select>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='gray' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme='blue' onClick={()=>updateUser()}>Submit</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }