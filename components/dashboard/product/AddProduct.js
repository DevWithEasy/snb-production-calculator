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
import axios from 'axios'
import { useState } from "react"
import { toast } from "react-hot-toast"
import useUserStore from '../../../features/userStore'

export default function AddProduct() {
    const { sections, addAdminData } = useUserStore()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [name, setName] = useState('')
    const [section, setSection] = useState('')

    async function addProduct() {
        try {
            const res = await axios.post('api/product/add_product', { name, section })

            if (res.data.status == 200) {
                addAdminData(res.data.data, 'product')
                toast.success('Product Added Successfully')
                onClose()
            }
        } catch (error) {
            toast.error('Product Added failed')
        }

    }

    return (

        <>
            <button onClick={onOpen} className='px-4 py-2 bg-gray-500 text-white mb-1 rounded'>Add Product</button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add new product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div className="space-y-2">
                            <label className="w-full pl-1">Product Name :</label>
                            <input className="w-full border p-2  rounded-md focus:outline-none focus:ring-2" type="text" name="" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <label className="w-full pl-1">Section Name :</label>
                            <select name="section" onChange={(e) => setSection(e.target.value)} className="w-full border p-2  rounded-md focus:outline-none focus:ring-2">
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
                        <Button colorScheme='blue' onClick={() => addProduct()}>Submit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}