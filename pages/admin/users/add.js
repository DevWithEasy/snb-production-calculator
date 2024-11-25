import React, { useState } from 'react'
import dynamic from 'next/dynamic'
const AdminLayout = dynamic(() => import('../../../components/admin/AdminLayout'))
import axios from 'axios';
import baseUrl from '../../../utils/v1/baseUrl';
import toast from 'react-hot-toast';

export default function UsersAdd({ sections }) {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [section, setSection] = useState('')
  async function addUser(){
    try {
        const res = await axios.post('/api/v2/adduser',{name,username,password,section}) 
        if(res.data.status === 200){
            toast.success('User Added Successfully')
        }
        
    } catch (error) {
        console.log(error)
        toast.error('User Added failed')
    }
    
}
  return (
    <AdminLayout>
      <div
        className='md:w-1/2 space-y-2'
      >
        <h1 className='text-lg font-bold'>Create new user account</h1>
        <div className="space-y-1">
          <label className="w-full pl-1">Name :</label>
          <input className="w-full border p-2  rounded-md focus:outline-none focus:border-2 focus:border-blue-500" type="text" name="" onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="space-y-1">
          <label className="w-full pl-1">Username :</label>
          <input className="w-full border p-2  rounded-md focus:outline-none focus:border-2 focus:border-blue-500" type="text" name="" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="space-y-1">
          <label className="w-full pl-1">Password :</label>
          <input className="w-full border p-2  rounded-md focus:outline-none focus:border-2 focus:border-blue-500" type="text" name="" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="space-y-1">
          <label className="w-full pl-1">Section Name :</label>
          <select name="section" onChange={(e) => setSection(e.target.value)} className="w-full border p-2  rounded-md focus:outline-none focus:border-2 focus:border-blue-500">
            <option value="">Select section</option>
            {
              sections.map(section => <option key={section.id} value={section.name}>{section.name}</option>)
            }
          </select>
        </div>
        <button className='px-6 py-2 bg-gray-100 rounded-lg shadow-sm border  hover:bg-gray-200' onClick={() => addUser()}>Submit</button>
      </div>
    </AdminLayout>
  )
}

export async function getServerSideProps() {
  try {
    const { data } = await axios.get(`${baseUrl}/api/v2/sections`)
    return {
      props: {
        sections: data,
      },
    };
  } catch (error) {
    console.error('Error fetching products:', error.response ? error.response.data : error.message);
    return {
      props: {
        sections: [],
      },
    };
  }
}
