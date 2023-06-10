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
import { db } from "../database/conncetDB"

export default function AddUser({user,setUser}){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [sections,setSections] = useState([])
    const [name, setName] =useState('')
    const [username, setUsername] =useState('')
    const [password, setPassword] =useState('')
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
            await addDoc(collection(db, "users"), {
                name,
                username,
                password,
                section
             });
            toast.success('Users Added Successfully')
            setUser(!user)
        }


    return (
        <>
        <button onClick={onOpen} className='w-full text-left'>Add User</button>
  
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
                        <option value="Admin">Admin</option>
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