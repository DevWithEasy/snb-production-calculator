import React, { useState } from 'react'

export default function SubmitConsumption({field,setIsSubmit,keys,values,object}) {
    const [data,setData] = useState(object)
    console.log(data)
  return (
    <div
        className='absolute top-0 left-0 h-screen w-full bg-gray-300/50 overflow-y-auto p-4'
    >
        <div
            className='md:w-5/12 mx-auto'
        >
            <button onClick={()=>setIsSubmit(false)}>Close</button>
        <div
            className='bg-white rounded-lg p-2 text-sm'
        >
            {
                keys.map(key =>(
                    <div
                        key={key}
                        className='flex items-center border-b py-2'
                    >
                        <label className='w-full'>{key}</label>
                        <input
                        key={key}
                        type='text'
                        value={data[key]}
                        onChange={(e)=>setData({...data, [key]: e.target.value})}
                        className='w-[120px] py-1 text-center border focus:outline-none focus:border-blue-400 rounded-lg'
                    />
                    </div>
                ))
            }
        </div>
        </div>
        
    </div>
  )
}
