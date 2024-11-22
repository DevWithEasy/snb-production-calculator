import axios from 'axios'
import { useState } from "react"
import { toast } from "react-hot-toast"
import useUserStore from '../../../../features/userStore'

export default function AddUser(){
    const {sections,updateAdminData} = useUserStore()
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
                <button colorScheme='blue' onClick={()=>addUser()}>Submit</button>
      </>
    )
}