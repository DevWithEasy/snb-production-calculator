import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from '@chakra-ui/react'
import { addDoc, collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import { db } from "../../../database/conncetDB"
import useUserStore from '../../../features/userStore'
import axios from 'axios'

export default function AddUser(){
    const {sections,updateAdminData} = useUserStore()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [name, setName] =useState('')
    const [username, setUsername] =useState('')
    const [password, setPassword] =useState('')
    const [section, setSection] =useState('')


    async function addUser(){
        try {
            const res = await axios.post('api/user/add_user',{name,username,password,section}) 
            if(res.data.status === 200){
                updateAdminData(res.data.data,'user')
                toast.success('User Added Successfully')
                onClose()
            }
            
        } catch (error) {
            console.log(error)
            toast.error('User Added failed')
        }
        
    }

    return (
        <>
        <button onClick={onOpen} className='px-4 py-2 bg-gray-500 text-white mb-1 rounded'>Add User</button>
  
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add new user</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <div className="space-y-2">
                    <label className="w-full pl-1">Name :</label>
                    <input className="w-full border p-2  rounded-md focus:outline-none focus:ring-2" type="text" name="" onChange={(e)=>setName(e.target.value)}/>
                </div>

                <div className="space-y-2">
                    <label className="w-full pl-1">Username :</label>
                    <input className="w-full border p-2  rounded-md focus:outline-none focus:ring-2" type="text" name="" onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div className="space-y-2">
                    <label className="w-full pl-1">Password :</label>
                    <input className="w-full border p-2  rounded-md focus:outline-none focus:ring-2" type="text" name="" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="space-y-2">
                    <label className="w-full pl-1">Section Name :</label>
                    <select name="section" onChange={(e)=>setSection(e.target.value)} className="w-full border p-2  rounded-md focus:outline-none focus:ring-2">
                        <option value="">Select section</option>
                            {
                                sections.map(section => <option key={section.id} value={section.name}>{section.name}</option>)
                            }
                    </select>
                </div>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='gray' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme='blue' onClick={()=>addUser()}>Submit</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}