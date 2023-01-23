import { addDoc, collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import { db } from "../database/conncetDB"

export default function AddUser({user,setUser}){
    const [sections,setSections] = useState([])
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
                username,
                password,
                section
             });
            toast.success('Users Added Successfully')
            setUser(!user)
        }

    console.log(sections);

    return (
        <div className="absolute w-full h-screen left-0 -top-2 z-20 flex justify-center items-center bg-slate-500/70">
            <div className="relative bg-white rounded-md p-4 space-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="absolute bg-white text-red-500 rounded-full -right-5 -top-5 w-8 h-8 cursor-pointer" onClick={()=>setUser(!user)}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

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

                <div className="py-2">
                    <button className="px-6 py-2 bg-slate-500 text-white rounded" onClick={()=>addSection()}>Add</button>
                </div>
            </div>
        </div>
    )
}