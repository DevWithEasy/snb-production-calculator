import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from '@chakra-ui/react'
import { useState } from "react"
import { toast } from "react-hot-toast"
import { AiFillEdit } from 'react-icons/ai'
import useUserStore from '../../../../features/userStore'
import axios from 'axios'

export default function UpdateProduct({product}){
    const {sections,updateAdminData} = useUserStore()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [name, setName] =useState(product.name)

    async function updateProduct(){
        try {
            const res = await axios.post(`api/product/update_product?id=${product.id}`,{name}) 
            if(res.data.status === 200){
                updateAdminData(res.data.data,'product')
                toast.success('Product updated Successfully')
                onClose()
            }
            
        } catch (error) {
            console.log(error)
            toast.error('Product Added failed')
        }
        
    }

    return (

        <>
        <AiFillEdit onClick={onOpen} size={25} className="hover:scale-150 transition-all duration-300 hover:bg-green-500 p-1 rounded cursor-pointer hover:text-white"/>

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Add new product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <div className="space-y-2">
                    <label className="w-full pl-1">Product Name :</label>
                    <input
                        value={name} 
                        type="text" 
                        onChange={(e)=>setName(e.target.value)}
                        className="w-full border p-2  rounded-md focus:outline-none focus:ring-2" 
                        />
                </div>
                <div className="space-y-2">
                    <label className="w-full pl-1">Section Name :</label>
                    <select name="section" disabled className="w-full border p-2  rounded-md focus:outline-none focus:ring-2">
                        <option value="">{product.section}</option>
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
            <Button colorScheme='blue' onClick={()=>updateProduct()}>Submit</Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
        </>
    )
}