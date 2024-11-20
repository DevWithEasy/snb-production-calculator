import { doc, setDoc } from "firebase/firestore"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { db } from '../../../database/conncetDB'

export default function AddSection({section,setSection}){
    const [name, setName] =useState('')

    async function addSection(){
            await setDoc(doc(db,'sections',name.split(" ").join("_")),{
                id: name.split(" ").join("_"),
                name
            })
            toast.success('Section Added Successfully')
            setSection(!section)
        }

    return (


        <>
        <button onClick={onOpen} className='w-full text-left'>Add Section</button>
        <div className="space-y-2">
                    <label className="w-full pl-1">Section Name :</label>
                    <input className="w-full border p-2  rounded-md focus:outline-none focus:ring-2" type="text" name="" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <button colorScheme='gray' mr={3} onClick={onClose}>
                Close
            </button>
            <button colorScheme='blue' onClick={()=>addSection()}>Submit</button>
        </>
    )
}