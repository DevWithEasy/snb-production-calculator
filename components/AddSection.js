import { doc, setDoc } from "firebase/firestore"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { db } from "../database/conncetDB"

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
        <div className="absolute w-full h-screen left-0 top-0 z-20 flex justify-center items-center bg-slate-500/70">
            <div className="relative bg-white rounded-md p-4 space-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute bg-white text-red-500 rounded-full -right-5 -top-5 w-8 h-8 cursor-pointer" onClick={()=>setSection(!section)}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <div className="space-y-2">
                    <label className="w-full pl-1">Section Name :</label>
                    <input className="w-full border p-2  rounded-md focus:outline-none focus:ring-2" type="text" name="" onChange={(e)=>setName(e.target.value)}/>
                </div>

                <div className="py-2">
                    <button className="px-6 py-2 bg-slate-500 text-white rounded" onClick={()=>addSection()}>Add</button>
                </div>
            </div>
        </div>
    )
}