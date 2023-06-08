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
import { collection, doc, getDocs, setDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import { db } from "../database/conncetDB"

export default function AddProduct({product,setProduct}){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [sections,setSections] = useState([])
    const [name, setName] =useState('')
    const [section, setSection] =useState('')

    useEffect(()=>{
        async function loadSection(){
            const docs = await getDocs(collection(db,'sections'))
            const sections = [];
            docs.forEach(data => sections.push(data.data()));
            setSections(sections)
        }
        loadSection()
    },[])

    async function addSection(){
            await setDoc(doc(db,'products',name.split(" ").join("_")),{
                id: name.split(" ").join("_"),
                name,
                section
            })
            toast.success('Product Added Successfully')
            setProduct(!product)
        }

    return (

        <>
        <Button onClick={onOpen}>Add Product</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Add new product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <div className="space-y-2">
                    <label className="w-full pl-1">Product Name :</label>
                    <input className="w-full border p-2  rounded-md focus:outline-none focus:ring-2" type="text" name="" onChange={(e)=>setName(e.target.value)}/>
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
            <Button colorScheme='blue' onClick={()=>addSection()}>Submit</Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
        </>
    )
}